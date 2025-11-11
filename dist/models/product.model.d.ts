import { Model } from "mongoose";
import type { IProduct } from "../types/product.ts";
interface IProductModel extends Model<IProduct> {
    findLowStock(): Promise<IProduct[]>;
}
declare const Product: IProductModel;
export default Product;
//# sourceMappingURL=product.model.d.ts.map