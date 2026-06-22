import type { Request, Response, NextFunction } from "express";
import { ApiError } from "../shared/ApiError.js";
import { verifyToken } from "../lib/jwt.js";
import { prisma } from "../lib/prisma.js";

export type AuthRequest = Request & {
  user?: { id: string; email: string; name: string | null };
};

export const requireAuth = async (req: AuthRequest, _res: Response, next: NextFunction) => {
  try {
    const header = req.headers.authorization;
    if (!header?.startsWith("Bearer ")) {
      throw new ApiError(401, "Authentication required", "UNAUTHORIZED");
    }

    const token = header.slice(7);
    const payload = verifyToken(token);

    const user = await prisma.adminUser.findUnique({
      where: { id: payload.sub },
      select: { id: true, email: true, name: true },
    });

    if (!user) {
      throw new ApiError(401, "Invalid session", "UNAUTHORIZED");
    }

    req.user = user;
    next();
  } catch (err) {
    if (err instanceof ApiError) {
      next(err);
      return;
    }
    next(new ApiError(401, "Invalid or expired token", "UNAUTHORIZED"));
  }
};
