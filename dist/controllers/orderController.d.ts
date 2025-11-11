import type { Request, Response, NextFunction } from "express";
export declare class OrderController {
    /**
     * Create order from cart (Checkout - Step 1)
     * This creates the order and reserves inventory
     * Payment initialization happens in payment controller
     */
    static createOrder(req: Request, res: Response, next: NextFunction): Promise<void>;
    /**
     * Get all orders for logged-in user
     */
    static getUserOrders(req: Request, res: Response, next: NextFunction): Promise<void>;
    /**
     * Get single order by ID
     */
    static getOrderById(req: Request, res: Response, next: NextFunction): Promise<void>;
    /**
     * Get order by order number
     */
    static getOrderByNumber(req: Request, res: Response, next: NextFunction): Promise<void>;
    /**
     * Cancel order (only if pending or failed)
     */
    static cancelOrder(req: Request, res: Response, next: NextFunction): Promise<void>;
    /**
     * Get all orders (Admin only)
     */
    static getAllOrders(req: Request, res: Response, next: NextFunction): Promise<void>;
    /**
     * Update order status (Admin only)
     */
    static updateOrderStatus(req: Request, res: Response, next: NextFunction): Promise<void>;
    /**
     * Get order statistics (Admin only)
     */
    static getOrderStats(req: Request, res: Response, next: NextFunction): Promise<void>;
}
export default OrderController;
//# sourceMappingURL=orderController.d.ts.map