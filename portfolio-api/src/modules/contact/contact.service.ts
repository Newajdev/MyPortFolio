import { prisma } from "../../lib/prisma.js";
import { env } from "../../config/env.js";
import { sendContactNotification } from "../../lib/mail.js";
import type { contactSchema } from "./contact.schema.js";
import type { z } from "zod";

type ContactInput = z.infer<typeof contactSchema>;

export const createContactMessage = async (input: ContactInput) => {
  const message = await prisma.contactMessage.create({
    data: {
      name: input.name,
      email: input.email,
      phone: input.phone,
      message: input.message,
    },
  });

  try {
    await notifyAdmin(input);
  } catch (err) {
    console.error("[contact] Failed to send admin notification email:", err);
  }

  return message;
};

const notifyAdmin = async (input: ContactInput) => {
  const settings = await prisma.siteSettings.findUnique({ where: { id: "default" } });
  const adminEmail = env.ADMIN_NOTIFY_EMAIL || settings?.email;

  if (!adminEmail) {
    console.warn("[contact] No admin email configured — skipping notification");
    return;
  }

  await sendContactNotification({
    adminEmail,
    senderName: input.name,
    senderEmail: input.email,
    senderPhone: input.phone,
    message: input.message,
    inboxUrl: `${env.CLIENT_URL}/deshboard/inbox`,
  });
};
