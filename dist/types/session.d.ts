import mongoose, { Document, Types } from "mongoose";
export interface ISession extends Document {
    _id: Types.ObjectId;
    userId: mongoose.Types.ObjectId;
    createdAt: Date;
    expiresAt: Date;
}
//# sourceMappingURL=session.d.ts.map