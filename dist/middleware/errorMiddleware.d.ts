import type { NextFunction, Request, Response } from "express";
/**
 * Middleware to handle 404 Not Found errors for unhandled routes.
 * It creates a new Error object and passes it to the next error handler.
 */
declare const notFound: (req: Request, res: Response, next: NextFunction) => void;
/**
 * Centralized error handling middleware.
 * This function takes 4 arguments, which is how Express identifies an error handler.
 */
declare const errorHandler: (err: Error, _: Request, res: Response) => void;
export { notFound, errorHandler };
//# sourceMappingURL=errorMiddleware.d.ts.map