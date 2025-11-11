import mongoose from "mongoose";
import type { ICategory } from "../types/category.ts";
declare const Category: mongoose.Model<ICategory, {}, {}, {}, mongoose.Document<unknown, {}, ICategory, {}, {}> & ICategory & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any>;
export default Category;
//# sourceMappingURL=categoryModel.d.ts.map