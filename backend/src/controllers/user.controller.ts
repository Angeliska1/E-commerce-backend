import type { RequestHandler } from "express";
import type { Request, Response } from "express";
import User from "../models/user.model.js";

import { paginationSchema } from "../validation/pagination.validation.js";

export const getUserProfile: RequestHandler = async (req, res, next) => {
  try {
    const user = await User.findById(req.user?._id).select("-password");

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    // Validate the query parameters with Joi
    const { error, value } = paginationSchema.validate(req.query);

    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details?.[0]?.message || "Invalid query parameters",
      });
    }

    // Extract validated values
    const { page, limit, search } = value;
    const skip = (page - 1) * limit;

    // Build the search filter
    const searchFilter = search
      ? {
          $or: [
            { firstName: { $regex: search, $options: "i" } },
            { lastName: { $regex: search, $options: "i" } },
            { email: { $regex: search, $options: "i" } },
          ],
        }
      : {};

    // Count all matching users
    const totalUsers = await User.countDocuments(searchFilter);

    // Fetch users with pagination
    const users = await User.find(searchFilter)
      .skip(skip)
      .limit(limit)
      .select("-password")
      .sort({ createdAt: -1 });

    // Respond with success
    res.status(200).json({
      success: true,
      message: "Users fetched successfully",
      totalUsers,
      currentPage: page,
      totalPages: Math.ceil(totalUsers / limit),
      users,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching users",
      error: err.message,
    });
  }
};