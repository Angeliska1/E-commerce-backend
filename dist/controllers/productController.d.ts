import type { Request, Response, NextFunction } from "express";
import type { IProductFormData } from "../types/product.ts";
export declare class ProductController {
    static getAllProducts(req: Request, res: Response, next: NextFunction): Promise<void>;
    /**
     * Get single product by ID or slug
     */
    static getProductById(req: Request<{
        id: string;
    }>, res: Response, next: NextFunction): Promise<void>;
    /**
     * Get products by category
     */
    static getProductsByCategory(req: Request, res: Response, next: NextFunction): Promise<void>;
    /**
     * Create new product (Admin only)
     */
    static createProduct(req: Request<{}, {}, IProductFormData>, res: Response, next: NextFunction): Promise<void>;
    /**
     * Update product (Admin only)
     */
    static updateProduct(req: Request, res: Response, next: NextFunction): Promise<void>;
    /**
     * Update product inventory (Admin only)
     */
    static updateInventory(req: Request, res: Response, next: NextFunction): Promise<void>;
    /**
     * Delete product (soft delete - set isActive to false)
     */
    static deleteProduct(req: Request, res: Response, next: NextFunction): Promise<void>;
    /**
     * Permanently delete product (Hard delete - Admin only)
     */
    static permanentlyDeleteProduct(req: Request, res: Response, next: NextFunction): Promise<void>;
    /**
     * Get low stock products (Admin only)
     */
    static getLowStockProducts(req: Request, res: Response, next: NextFunction): Promise<void>;
    /**
     * Check product stock availability
     */
    static checkStock(req: Request, res: Response, next: NextFunction): Promise<void>;
}
export default ProductController;
//# sourceMappingURL=productController.d.ts.map