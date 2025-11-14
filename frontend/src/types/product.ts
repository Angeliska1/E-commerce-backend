// types/product.ts
export interface Image {
  public_id: string;
  secure_url: string;
  asset_id: string;
  format: string;
  width: number;
  height: number;
}

export interface Product {
  _id: string;
  name: string;
  description?: string;
  price: number;
  images: Image[]; // ✅ This fixes the error
  category?: {
    _id: string;
    name: string;
    slug: string;
    id: string;
  };
  inventory?: {
    quantity: number;
    reserved: number;
    lowStockThreshold: number;
  };
  slug?: string;
  availableQuantity?: number;
  isLowStock?: boolean;
}
