import { z } from "zod";

const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const stringArray = z.union([
  z.array(z.string()),
  z.string().transform((value) =>
    value
      .split(/[\n,]/)
      .map((item) => item.trim())
      .filter(Boolean)
  ),
]);

const optionalUrl = z
  .union([z.string().url(), z.literal(""), z.null()])
  .optional()
  .transform((value) => (value ? value : null));

export const projectBodySchema = z.object({
  id: z.string().min(1).optional(),
  slug: z.string().min(1).optional(),
  name: z.string().min(1),
  shortDescription: z.string().min(1),
  thumbnail: z.string().url(),
  category: z.string().min(1),
  techStack: stringArray,
  featured: z.boolean().optional().default(false),
  liveUrl: optionalUrl,
  githubUrl: optionalUrl,
  overview: z.string().min(1),
  caseStudy: z.string().optional().nullable(),
  problem: z.string().optional().nullable(),
  solution: z.string().optional().nullable(),
  architecture: z.string().optional().nullable(),
  keyFeatures: stringArray.default([]),
  challenges: stringArray.default([]),
  results: stringArray.default([]),
  gallery: stringArray.default([]),
  sortOrder: z.coerce.number().int().optional().default(0),
  isPublished: z.boolean().optional().default(true),
});

export const projectUpdateSchema = projectBodySchema.partial();

export const resolveProjectId = (input: z.infer<typeof projectBodySchema>) => {
  const slug = input.slug?.trim() || slugify(input.name);
  const id = input.id?.trim() || slug;
  return { id, slug };
};
