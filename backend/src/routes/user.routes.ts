import { Router } from "express";
import { getUserProfile, getAllUsers } from "../controllers/user.controller.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const userRouter = Router();

userRouter.get("/me", protect, getUserProfile);

userRouter.get("/", protect, adminOnly, getAllUsers);

export default userRouter;
