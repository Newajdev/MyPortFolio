import type { Request, Response, NextFunction } from "express";
import { sendSuccess } from "../../shared/response.js";
import { contactSchema } from "./contact.schema.js";
import * as contactService from "./contact.service.js";

export const submitContact = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const input = contactSchema.parse(req.body);
    const message = await contactService.createContactMessage(input);
    sendSuccess(res, { id: message.id, message: "Message received successfully" }, 201);
  } catch (err) {
    next(err);
  }
};
