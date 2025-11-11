import { Document, Types } from "mongoose";
export declare enum VerificationCodeType {
    EMAIL_VERIFICATION = "emailVerification",
    RESET_PASSWORD = "resetPassword"
}
export interface IVerificationCode extends Document {
    _id: Types.ObjectId;
    code: string;
    userId: Types.ObjectId;
    type: VerificationCodeType;
    expiresAt: Date;
    createdAt?: Date;
    updatedAt?: Date;
}
//# sourceMappingURL=verificationCode.d.ts.map