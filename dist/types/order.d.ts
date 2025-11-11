import { Document, Types } from "mongoose";
export interface IOrderItem {
    productId: Types.ObjectId;
    name: string;
    price: number;
    quantity: number;
    image: string;
}
export interface IShippingAddress {
    fullName: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    country: string;
    postalCode?: string;
}
export interface IPricing {
    subtotal: number;
    shipping: number;
    tax: number;
    discount: number;
    total: number;
}
export interface IPaymentInfo {
    method: "paystack" | "card" | "bank_transfer";
    status: "pending" | "completed" | "failed" | "refunded";
    transactionId?: string;
    reference: string;
    paidAt?: Date;
}
export interface IOrderTimeline {
    status: string;
    timestamp: Date;
    note?: string;
}
export type OrderStatus = "pending" | "confirmed" | "processing" | "shipped" | "delivered" | "cancelled" | "failed";
export interface IOrder extends Document {
    _id: Types.ObjectId;
    orderNumber: string;
    userId: Types.ObjectId;
    items: IOrderItem[];
    shippingAddress: IShippingAddress;
    pricing: IPricing;
    status: OrderStatus;
    payment: IPaymentInfo;
    timeline: IOrderTimeline[];
    createdAt: Date;
    updatedAt: Date;
    updateStatus(status: OrderStatus, note?: string): Promise<IOrder>;
    markAsPaid(transactionId: string): Promise<IOrder>;
    markAsFailed(reason?: string): Promise<IOrder>;
    cancelOrder(reason?: string): Promise<IOrder>;
    canBeCancelled(): boolean;
}
//# sourceMappingURL=order.d.ts.map