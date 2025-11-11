import mongoose from "mongoose";
import type { Response } from "express";
declare const generateAccessToken: (res: Response, userId: mongoose.Types.ObjectId, sessionId: mongoose.Types.ObjectId) => void;
declare const generateRefreshToken: (res: Response, sessionId: mongoose.Types.ObjectId) => void;
export { generateAccessToken, generateRefreshToken };
//# sourceMappingURL=generateToken.d.ts.map