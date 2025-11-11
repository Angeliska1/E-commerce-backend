import mongoose from "mongoose";
import type { ISession } from "../types/session.ts";
declare const Session: mongoose.Model<ISession, {}, {}, {}, mongoose.Document<unknown, {}, ISession, {}, {}> & ISession & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any>;
export default Session;
//# sourceMappingURL=session.model.d.ts.map