import { Router } from "express";
import { getUserProfile, getAllUsers } from "../controllers/user.controller";
import { protect, adminOnly } from "../middleware/authMiddleware";

const userRouter = Router();

userRouter.get("/me", protect, getUserProfile);

userRouter.get("/", protect, adminOnly, getAllUsers);

export default userRouter;
