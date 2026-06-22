import { createRequire } from "node:module";
import type { RequestHandler } from "express";

const require = createRequire(import.meta.url);

type HelmetMiddleware = (options?: Record<string, unknown>) => RequestHandler;

const helmet = require("helmet") as HelmetMiddleware;

export default helmet;
