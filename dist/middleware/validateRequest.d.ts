import type { Request, Response, NextFunction } from "express";
import type Joi from "joi";
export declare const validateRequest: (schema: Joi.ObjectSchema) => (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=validateRequest.d.ts.map