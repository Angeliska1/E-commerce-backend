import type { IUser } from "../types/user";
import { IUser } from "../../models/user.model"; 
import mongoose from "mongoose";

declare global {
  namespace Express {
    interface Request {
      user?: IUser; // or whatever your User type is
      sessionId?: mongoose.Types.ObjectId | string;
    }
  }
}
