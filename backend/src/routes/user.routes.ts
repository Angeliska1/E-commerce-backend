import { Router } from "express";
import { getUserProfile, getAllUsers } from "../controllers/user.controller.ts";
import { protect, adminOnly } from "../middleware/authMiddleware.ts";

const userRouter = Router();

userRouter.get("/me", protect, getUserProfile);

userRouter.get("/", protect, adminOnly, getAllUsers);

export default userRouter;
