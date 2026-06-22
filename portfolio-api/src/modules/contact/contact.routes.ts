import { Router } from "express";
import rateLimit from "../../lib/rateLimit.js";
import * as contactController from "./contact.controller.js";

const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  message: {
    success: false,
    error: { code: "RATE_LIMIT", message: "Too many messages. Please try again later." },
  },
  standardHeaders: true,
  legacyHeaders: false,
});

const router = Router();

router.post("/", contactLimiter, contactController.submitContact);

export default router;
