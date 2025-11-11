import { type JwtPayload } from "jsonwebtoken";
import { type Response } from "express";
export interface AccessTokenPayload extends JwtPayload {
    userId: string;
    sessionId: string;
}
export interface RefreshTokenPayload extends JwtPayload {
    sessionId: string;
}
/**
 * Decodes an Access Token and extracts the userId and sessionId from the payload.
 * Throws an error if the token is missing, invalid, or expired.
 *
 * @param token The raw JWT string (e.g., from a cookie).
 * @returns The decoded payload containing userId and sessionId.
 */
export declare const decodeAccessTokenPayload: (token: string) => AccessTokenPayload;
export declare const decodeRefreshTokenPayload: (token: string) => RefreshTokenPayload;
export declare const clearAuthCookies: (res: Response) => void;
//# sourceMappingURL=jwtUtils.d.ts.map