import { Model } from "mongoose";
import type { IOrder } from "../types/order.ts";
interface IOrderModel extends Model<IOrder> {
    generatePaymentReference(): string;
}
declare const Order: IOrderModel;
export default Order;
//# sourceMappingURL=orderModel.d.ts.map