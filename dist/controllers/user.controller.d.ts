import type { RequestHandler } from "express";
import type { Request, Response } from "express";
export declare const getUserProfile: RequestHandler;
export declare const getAllUsers: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=user.controller.d.ts.map