import { Router } from "express";
import {
  createUser,
  forgotPassword,
  loginUser,
  logoutUser,
  refreshAccessToken,
  resetPassword,
  verifyUserEmail,
  verifyResetOTP,
} from "../controllers/auth.controller.js";

import {
  createUserSchema,
  loginSchema,
  updateUserSchema,
  verifyResetOTPSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
  verifyEmailSchema,
} from "../validation/userValidation.js";

import { validateRequest } from "../middleware/validateRequest.js";

const authRouter = Router();

authRouter.post("/create-user", validateRequest(createUserSchema), createUser);
authRouter.post("/login", validateRequest(loginSchema), loginUser);
authRouter.post("/update-user", validateRequest(updateUserSchema))
authRouter.post("/logout", logoutUser);
authRouter.get("/refresh", refreshAccessToken);
authRouter.post("/verify-email", validateRequest(verifyEmailSchema), verifyUserEmail);
authRouter.post("/forgot-password", validateRequest(forgotPasswordSchema), forgotPassword);
authRouter.post("/verify-reset-otp", validateRequest(verifyResetOTPSchema), verifyResetOTP);
authRouter.post("/reset-password", validateRequest(resetPasswordSchema), resetPassword);

export default authRouter;
