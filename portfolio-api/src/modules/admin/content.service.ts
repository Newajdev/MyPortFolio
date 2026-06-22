import { prisma } from "../../lib/prisma.js";
import { ApiError } from "../../shared/ApiError.js";
import { normalizeSkills } from "../../shared/normalizeSkills.js";
import type {
  aboutPreviewUpdateSchema,
  heroUpdateSchema,
  siteSettingsUpdateSchema,
  skillBodySchema,
  skillUpdateSchema,
  skillsSectionUpdateSchema,
  socialLinkBodySchema,
  socialLinkUpdateSchema,
} from "./content.schema.js";
import type { z } from "zod";

type HeroUpdate = z.infer<typeof heroUpdateSchema>;
type AboutPreviewUpdate = z.infer<typeof aboutPreviewUpdateSchema>;
type SiteSettingsUpdate = z.infer<typeof siteSettingsUpdateSchema>;
type SkillsSectionUpdate = z.infer<typeof skillsSectionUpdateSchema>;
type SkillInput = z.infer<typeof skillBodySchema>;
type SkillUpdate = z.infer<typeof skillUpdateSchema>;
type SocialLinkInput = z.infer<typeof socialLinkBodySchema>;
type SocialLinkUpdate = z.infer<typeof socialLinkUpdateSchema>;

const mapSkill = (skill: {
  id: string;
  title: string;
  description: string;
  icon: string | null;
  technologies: unknown;
  sortOrder: number;
  isPublished: boolean;
}) => ({
  id: skill.id,
  title: skill.title,
  description: skill.description,
  icon: skill.icon,
  skills: normalizeSkills(skill.technologies),
  sortOrder: skill.sortOrder,
  isPublished: skill.isPublished,
});

export const getAdminContent = async () => {
  const [siteSettings, heroContent, aboutContent] = await Promise.all([
    prisma.siteSettings.findUnique({ where: { id: "default" } }),
    prisma.heroContent.findUnique({ where: { id: "default" } }),
    prisma.aboutContent.findUnique({ where: { id: "default" } }),
  ]);

  return {
    siteSettings: siteSettings
      ? {
          name: siteSettings.name,
          role: siteSettings.role,
          tagline: siteSettings.tagline,
          resumeUrl: siteSettings.resumeUrl,
          heroVideoId: siteSettings.heroVideoId,
        }
      : null,
    heroContent: heroContent
      ? {
          greeting: heroContent.greeting,
          headline: heroContent.headline,
          positioning: heroContent.positioning,
          ctas: heroContent.ctas,
        }
      : null,
    aboutPreview: aboutContent ? aboutContent.preview : null,
  };
};

export const updateHero = async (input: HeroUpdate) => {
  const hero = await prisma.heroContent.upsert({
    where: { id: "default" },
    update: {
      greeting: input.greeting,
      headline: input.headline,
      positioning: input.positioning,
      ...(input.ctas !== undefined ? { ctas: input.ctas } : {}),
    },
    create: {
      id: "default",
      greeting: input.greeting,
      headline: input.headline,
      positioning: input.positioning,
      ctas: input.ctas ?? [],
    },
  });

  return {
    greeting: hero.greeting,
    headline: hero.headline,
    positioning: hero.positioning,
    ctas: hero.ctas,
  };
};

export const updateAboutPreview = async (input: AboutPreviewUpdate) => {
  const existing = await prisma.aboutContent.findUnique({ where: { id: "default" } });

  const about = existing
    ? await prisma.aboutContent.update({
        where: { id: "default" },
        data: { preview: input },
      })
    : await prisma.aboutContent.create({
        data: {
          id: "default",
          preview: input,
          full: { intro: "", journey: [], philosophy: [] },
        },
      });

  return about.preview;
};

export const updateSiteSettings = async (input: SiteSettingsUpdate) => {
  const existing = await prisma.siteSettings.findUnique({ where: { id: "default" } });

  const data = {
    ...(input.name !== undefined ? { name: input.name } : {}),
    ...(input.role !== undefined ? { role: input.role } : {}),
    ...(input.tagline !== undefined ? { tagline: input.tagline } : {}),
    ...(input.resumeUrl !== undefined ? { resumeUrl: input.resumeUrl || null } : {}),
    ...(input.heroVideoId !== undefined ? { heroVideoId: input.heroVideoId || null } : {}),
  };

  const settings = existing
    ? await prisma.siteSettings.update({ where: { id: "default" }, data })
    : await prisma.siteSettings.create({
        data: {
          id: "default",
          name: input.name ?? "Portfolio Owner",
          brand: "Portfolio",
          role: input.role ?? "Developer",
          tagline: input.tagline ?? "",
          email: "",
          resumeUrl: input.resumeUrl ?? null,
          heroVideoId: input.heroVideoId ?? null,
          seo: { title: "", description: "" },
        },
      });

  return {
    name: settings.name,
    role: settings.role,
    tagline: settings.tagline,
    resumeUrl: settings.resumeUrl,
    heroVideoId: settings.heroVideoId,
  };
};

export const getSkillsSection = async () => {
  const section = await prisma.skillsSection.findUnique({ where: { id: "default" } });
  if (!section) return null;

  return {
    eyebrow: section.eyebrow,
    title: section.title,
    description: section.description,
  };
};

export const updateSkillsSection = async (input: SkillsSectionUpdate) => {
  const section = await prisma.skillsSection.upsert({
    where: { id: "default" },
    update: input,
    create: { id: "default", ...input },
  });

  return {
    eyebrow: section.eyebrow,
    title: section.title,
    description: section.description,
  };
};

export const listSkills = async () => {
  const skills = await prisma.skillCategory.findMany({
    orderBy: { sortOrder: "asc" },
  });
  return skills.map(mapSkill);
};

export const createSkill = async (input: SkillInput) => {
  const existing = await prisma.skillCategory.findUnique({ where: { id: input.id } });
  if (existing) {
    throw new ApiError(409, "A skill category with this id already exists", "CONFLICT");
  }

  const skill = await prisma.skillCategory.create({
    data: {
      id: input.id,
      title: input.title,
      description: input.description,
      icon: input.icon ?? null,
      technologies: input.skills,
      sortOrder: input.sortOrder ?? 0,
      isPublished: input.isPublished ?? true,
    },
  });

  return mapSkill(skill);
};

export const updateSkill = async (id: string, input: SkillUpdate) => {
  const existing = await prisma.skillCategory.findUnique({ where: { id } });
  if (!existing) {
    throw new ApiError(404, "Skill category not found", "NOT_FOUND");
  }

  const skill = await prisma.skillCategory.update({
    where: { id },
    data: {
      ...(input.title !== undefined ? { title: input.title } : {}),
      ...(input.description !== undefined ? { description: input.description } : {}),
      ...(input.icon !== undefined ? { icon: input.icon || null } : {}),
      ...(input.skills !== undefined ? { technologies: input.skills } : {}),
      ...(input.sortOrder !== undefined ? { sortOrder: input.sortOrder } : {}),
      ...(input.isPublished !== undefined ? { isPublished: input.isPublished } : {}),
    },
  });

  return mapSkill(skill);
};

export const deleteSkill = async (id: string) => {
  const existing = await prisma.skillCategory.findUnique({ where: { id } });
  if (!existing) {
    throw new ApiError(404, "Skill category not found", "NOT_FOUND");
  }

  await prisma.skillCategory.delete({ where: { id } });
  return { id };
};

export const listSocialLinks = async () => {
  return prisma.socialLink.findMany({ orderBy: { sortOrder: "asc" } });
};

export const createSocialLink = async (input: SocialLinkInput) => {
  return prisma.socialLink.create({ data: input });
};

export const updateSocialLink = async (id: string, input: SocialLinkUpdate) => {
  const existing = await prisma.socialLink.findUnique({ where: { id } });
  if (!existing) {
    throw new ApiError(404, "Social link not found", "NOT_FOUND");
  }

  return prisma.socialLink.update({
    where: { id },
    data: {
      ...(input.platform !== undefined ? { platform: input.platform } : {}),
      ...(input.url !== undefined ? { url: input.url } : {}),
      ...(input.label !== undefined ? { label: input.label } : {}),
      ...(input.sortOrder !== undefined ? { sortOrder: input.sortOrder } : {}),
    },
  });
};

export const deleteSocialLink = async (id: string) => {
  const existing = await prisma.socialLink.findUnique({ where: { id } });
  if (!existing) {
    throw new ApiError(404, "Social link not found", "NOT_FOUND");
  }

  await prisma.socialLink.delete({ where: { id } });
  return { id };
};
