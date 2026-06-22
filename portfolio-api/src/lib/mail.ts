import nodemailer from "nodemailer";
import { env } from "../config/env.js";

const getTransporter = () => {
  if (!env.SMTP_USER || !env.SMTP_PASS) return null;

  return nodemailer.createTransport({
    host: env.SMTP_HOST,
    port: env.SMTP_PORT,
    secure: env.SMTP_PORT === 465,
    auth: {
      user: env.SMTP_USER,
      pass: env.SMTP_PASS,
    },
  });
};

export const isEmailConfigured = () => Boolean(env.SMTP_USER && env.SMTP_PASS);

type ContactNotificationParams = {
  adminEmail: string;
  senderName: string;
  senderEmail: string;
  senderPhone?: string | null;
  message: string;
  inboxUrl: string;
};

export const sendContactNotification = async ({
  adminEmail,
  senderName,
  senderEmail,
  senderPhone,
  message,
  inboxUrl,
}: ContactNotificationParams) => {
  const transport = getTransporter();
  if (!transport) {
    console.warn("[mail] SMTP not configured — skipping contact notification");
    return;
  }

  const phoneLine = senderPhone ? `\nPhone: ${senderPhone}` : "";

  const result = await transport.sendMail({
    from: `"Portfolio Inbox" <${env.SMTP_USER}>`,
    to: adminEmail,
    replyTo: senderEmail,
    subject: `New portfolio message from ${senderName}`,
    text: `${senderName} sent you a message on your portfolio.

Email: ${senderEmail}${phoneLine}

Message:
${message}

Reply quickly so they don't wait — open your inbox:
${inboxUrl}

You can reply directly to this email to reach ${senderName}.`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 560px; color: #111;">
        <h2 style="margin: 0 0 12px;">New portfolio message</h2>
        <p style="margin: 0 0 16px;">
          <strong>${senderName}</strong> sent you a message on your portfolio.
          Reply soon so they don't have to wait.
        </p>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px;">
          <tr><td style="padding: 6px 0; color: #666;">Email</td><td><a href="mailto:${senderEmail}">${senderEmail}</a></td></tr>
          ${senderPhone ? `<tr><td style="padding: 6px 0; color: #666;">Phone</td><td>${senderPhone}</td></tr>` : ""}
        </table>
        <div style="background: #f5f5f5; border-radius: 8px; padding: 16px; white-space: pre-wrap;">${message}</div>
        <p style="margin: 20px 0 0;">
          <a href="${inboxUrl}" style="display: inline-block; background: #2B9C7F; color: #fff; padding: 10px 18px; border-radius: 6px; text-decoration: none;">
            Open Admin Inbox
          </a>
        </p>
        <p style="margin: 16px 0 0; font-size: 13px; color: #666;">
          Reply to this email to respond directly to ${senderName}.
        </p>
      </div>
    `,
  });

  console.log(`[mail] Contact notification sent to ${adminEmail} (${result.messageId})`);
};
