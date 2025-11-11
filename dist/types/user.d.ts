import { Document, Types } from "mongoose";
export interface IUser extends Document {
    _id: Types.ObjectId;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: "customer" | "admin";
    isAdmin?: boolean;
    verified: boolean;
    phoneNumber?: string;
    address?: {
        street?: string;
        city?: string;
        state?: string;
        zipCode?: string;
        country?: string;
    };
    createdAt: Date;
    updatedAt: Date;
    comparePassword(candidatePassword: string): Promise<boolean>;
}
export interface UserMethods {
    comparePassword(candidatePassword: string): Promise<boolean>;
}
//# sourceMappingURL=user.d.ts.map