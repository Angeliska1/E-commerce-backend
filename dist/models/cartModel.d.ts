import { Model, Types } from "mongoose";
import type { ICart } from "../types/cart.ts";
interface ICartModel extends Model<ICart> {
    findOrCreateCart(userId: string | Types.ObjectId): Promise<ICart>;
}
declare const Cart: ICartModel;
export default Cart;
//# sourceMappingURL=cartModel.d.ts.map