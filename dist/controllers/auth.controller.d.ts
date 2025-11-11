import type { NextFunction, Request, Response } from "express";
import type { IUser } from "../types/user.ts";
export declare const createUser: (req: Request<{}, {}, IUser, {}>, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const verifyUserEmail: (req: Request<{}, {}, {
    code: string;
}, {}>, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const forgotPassword: (req: Request<{}, {}, {
    email: string;
}, {}>, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const verifyResetOTP: (req: Request<{}, {}, {
    email: string;
    code: string;
}, {}>, res: Response, next: NextFunction) => Promise<void>;
/**
 * STEP 3: RESET PASSWORD
 * After OTP is verified, user can set new password
 * Uses the verificationId from the previous step
 */
export declare const resetPassword: (req: Request<{}, {}, {
    email: string;
    code: string;
    newPassword: string;
}>, res: Response, next: NextFunction) => Promise<void>;
export declare const loginUser: (req: Request<{}, {}, {
    email: string;
    password: string;
}, {}>, res: Response, next: NextFunction) => Promise<void>;
export declare const logoutUser: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const refreshAccessToken: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getAllUsers: (req: Request, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=auth.controller.d.ts.map