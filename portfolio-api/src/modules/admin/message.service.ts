import { z } from "zod";
import { prisma } from "../../lib/prisma.js";
import { ApiError } from "../../shared/ApiError.js";

export const messageStatusSchema = z.object({
  status: z.enum(["NEW", "READ", "ARCHIVED"]),
});

export const listMessages = async () => {
  return prisma.contactMessage.findMany({ orderBy: { createdAt: "desc" } });
};

export const updateMessageStatus = async (id: string, status: "NEW" | "READ" | "ARCHIVED") => {
  try {
    return await prisma.contactMessage.update({
      where: { id },
      data: { status },
    });
  } catch {
    throw new ApiError(404, "Message not found", "NOT_FOUND");
  }
};

export const deleteMessage = async (id: string) => {
  try {
    await prisma.contactMessage.delete({ where: { id } });
    return { id };
  } catch {
    throw new ApiError(404, "Message not found", "NOT_FOUND");
  }
};
