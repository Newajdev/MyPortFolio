import { z } from "zod";

const stringArray = z.union([
  z.array(z.string()),
  z.string().transform((value) =>
    value
      .split(/[\n,]/)
      .map((item) => item.trim())
      .filter(Boolean)
  ),
]);

export const skillItemSchema = z.object({
  name: z.string().min(1),
  icon: z.string().optional().default(""),
});

export const heroUpdateSchema = z.object({
  greeting: z.string().min(1),
  headline: z.string().min(1),
  positioning: z.string().min(1),
  ctas: z
    .array(
      z.object({
        label: z.string().min(1),
        href: z.string().min(1),
        variant: z.enum(["primary", "secondary"]).optional(),
      })
    )
    .optional(),
});

export const aboutPreviewUpdateSchema = z.object({
  title: z.string().min(1),
  shortIntro: z.string().min(1),
  highlights: stringArray,
});

export const siteSettingsUpdateSchema = z.object({
  name: z.string().min(1).optional(),
  role: z.string().min(1).optional(),
  tagline: z.string().min(1).optional(),
  resumeUrl: z.union([z.string(), z.literal(""), z.null()]).optional(),
  heroVideoId: z.union([z.string(), z.literal(""), z.null()]).optional(),
});

export const skillsSectionUpdateSchema = z.object({
  eyebrow: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
});

export const skillBodySchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  icon: z.string().optional().nullable(),
  skills: z.array(skillItemSchema).min(1),
  sortOrder: z.coerce.number().int().optional().default(0),
  isPublished: z.boolean().optional().default(true),
});

export const skillUpdateSchema = skillBodySchema.partial();

export const socialLinkBodySchema = z.object({
  platform: z.string().min(1),
  url: z.string().url(),
  label: z.string().min(1),
  sortOrder: z.coerce.number().int().optional().default(0),
});

export const socialLinkUpdateSchema = socialLinkBodySchema.partial();
