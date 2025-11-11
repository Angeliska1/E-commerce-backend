import mongoose, { Document } from "mongoose";
export interface IInventory {
    quantity: number;
    reserved: number;
    lowStockThreshold: number;
}
export interface IProductImage {
    public_id: string;
    secure_url: string;
    asset_id: string;
    format?: string;
    width?: number;
    height?: number;
}
export interface IProduct extends Document {
    name: string;
    slug: string;
    description: string;
    price: number;
    category: mongoose.Types.ObjectId;
    images: IProductImage[];
    isActive: boolean;
    inventory: IInventory;
    createdAt: Date;
    updatedAt: Date;
    availableQuantity: number;
    isLowStock: boolean;
    hasSufficientStock(quantity: number): boolean;
    reserveInventory(quantity: number): Promise<void>;
    releaseInventory(quantity: number): Promise<void>;
    deductInventory(quantity: number): Promise<void>;
}
export interface IProductFormData {
    name: string;
    description: string;
    price: string;
    category: string;
    quantity: string;
    lowStockThreshold: string;
}
//# sourceMappingURL=product.d.ts.map