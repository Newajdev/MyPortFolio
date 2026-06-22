import type { NextFunction, Request, Response } from "express";
import { ApiError } from "../shared/ApiError.js";

export const notFound = (_req: Request, _res: Response, next: NextFunction) => {
  next(new ApiError(404, "Route not found", "NOT_FOUND"));
};
