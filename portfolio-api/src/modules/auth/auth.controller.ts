import type { Response, NextFunction } from "express";
import { sendSuccess } from "../../shared/response.js";
import { registerSchema, loginSchema } from "./auth.schema.js";
import * as authService from "./auth.service.js";
import type { AuthRequest } from "../../middleware/auth.js";

export const register = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const input = registerSchema.parse(req.body);
    const result = await authService.register(input);
    sendSuccess(res, result, 201);
  } catch (err) {
    next(err);
  }
};

export const login = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const input = loginSchema.parse(req.body);
    const result = await authService.login(input);
    sendSuccess(res, result);
  } catch (err) {
    next(err);
  }
};

export const me = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const user = await authService.getMe(req.user!.id);
    sendSuccess(res, user);
  } catch (err) {
    next(err);
  }
};
