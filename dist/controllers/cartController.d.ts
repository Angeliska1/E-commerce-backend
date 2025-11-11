import type { Request, Response, NextFunction } from "express";
export declare class CartController {
    /**
     * Get user's cart
     */
    static getCart(req: Request, res: Response, next: NextFunction): Promise<void>;
    /**
     * Add item to cart
     */
    static addProductToCart(req: Request, res: Response, next: NextFunction): Promise<void>;
    static increaseProductQuantity(req: Request, res: Response, next: NextFunction): Promise<void>;
    static decreaseProductQuantity(req: Request, res: Response, next: NextFunction): Promise<void>;
    /**
     * Update cart item quantity
     */
    static updateCartItem(req: Request, res: Response, next: NextFunction): Promise<void>;
    /**
     * Remove item from cart
     */
    static removeFromCart(req: Request, res: Response, next: NextFunction): Promise<void>;
    /**
     * Clear entire cart
     */
    static clearCart(req: Request, res: Response, next: NextFunction): Promise<void>;
    /**
     * Get cart summary (item count and subtotal)
     */
    static getCartSummary(req: Request, res: Response, next: NextFunction): Promise<void>;
}
export default CartController;
//# sourceMappingURL=cartController.d.ts.map