import type { Response, NextFunction } from "express";
import { sendSuccess } from "../../shared/response.js";
import { messageStatusSchema } from "./message.service.js";
import * as messageService from "./message.service.js";
import type { AuthRequest } from "../../middleware/auth.js";

export const listMessages = async (_req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const messages = await messageService.listMessages();
    sendSuccess(res, messages);
  } catch (err) {
    next(err);
  }
};

export const updateMessageStatus = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { status } = messageStatusSchema.parse(req.body);
    const message = await messageService.updateMessageStatus(String(req.params.id), status);
    sendSuccess(res, message);
  } catch (err) {
    next(err);
  }
};

export const deleteMessage = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const result = await messageService.deleteMessage(String(req.params.id));
    sendSuccess(res, result);
  } catch (err) {
    next(err);
  }
};
