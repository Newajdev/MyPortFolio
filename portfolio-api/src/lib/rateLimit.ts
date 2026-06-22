import { createRequire } from "node:module";
import type { RequestHandler } from "express";

const require = createRequire(import.meta.url);

type RateLimitOptions = {
  windowMs?: number;
  max?: number;
  message?: unknown;
  standardHeaders?: boolean;
  legacyHeaders?: boolean;
};

type RateLimitFactory = (options: RateLimitOptions) => RequestHandler;

const rateLimit = require("express-rate-limit") as RateLimitFactory;

export default rateLimit;
