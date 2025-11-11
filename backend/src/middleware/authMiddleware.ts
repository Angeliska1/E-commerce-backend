import User from "../models/user.model.js";
import type { NextFunction, Request, Response } from "express";
import { decodeAccessTokenPayload } from "../utils/jwtUtils.js";

export const protect = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const accessToken = req.cookies.accessToken;

  if (accessToken) {
    try {
      const { userId, sessionId } = decodeAccessTokenPayload(accessToken);

      req.user = await User.findById(userId).select("-password");
      req.sessionId = sessionId;

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Not authorized, token failed");
      next(error);
    }
  } else {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
};

export const adminOnly = (req: Request, res: Response, next: NextFunction) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(403);
    throw new Error("Not authorized as an admin");
  }
};

//do paginate and joi validation later

