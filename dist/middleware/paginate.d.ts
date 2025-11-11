import type { Request, Response, NextFunction } from "express";
import type { Model, Document, PopulateOptions } from "mongoose";
interface PaginateOptions {
    populate?: PopulateOptions | PopulateOptions[];
    select?: string | string[];
    sort?: string | Record<string, 1 | -1>;
}
export interface PaginatedResults<T> {
    success: boolean;
    count: number;
    data: T[];
    pagination: {
        currentPage: number;
        totalPages: number;
        totalItems: number;
        hasNextPage: boolean;
        hasPrevPage: boolean;
        nextPage: number | null;
        prevPage: number | null;
        limit: number;
    };
}
declare const paginate: <T extends Document>(model: Model<T>, options?: PaginateOptions) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
export default paginate;
//# sourceMappingURL=paginate.d.ts.map