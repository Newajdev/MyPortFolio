import { prisma } from "../../lib/prisma.js";
import { ApiError } from "../../shared/ApiError.js";
import type { projectBodySchema, projectUpdateSchema } from "./project.schema.js";
import { resolveProjectId } from "./project.schema.js";
import type { z } from "zod";

type ProjectInput = z.infer<typeof projectBodySchema>;
type ProjectUpdateInput = z.infer<typeof projectUpdateSchema>;

const mapProject = (project: {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  thumbnail: string;
  category: string;
  techStack: unknown;
  featured: boolean;
  liveUrl: string | null;
  githubUrl: string | null;
  overview: string;
  caseStudy: string | null;
  problem: string | null;
  solution: string | null;
  architecture: string | null;
  keyFeatures: unknown;
  challenges: unknown;
  results: unknown;
  gallery: unknown;
  sortOrder: number;
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
}) => ({
  ...project,
  techStack: project.techStack as string[],
  keyFeatures: project.keyFeatures as string[],
  challenges: project.challenges as string[],
  results: project.results as string[],
  gallery: project.gallery as string[],
});

export const listProjects = async () => {
  const projects = await prisma.project.findMany({ orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }] });
  return projects.map(mapProject);
};

export const getProject = async (id: string) => {
  const project = await prisma.project.findFirst({
    where: { OR: [{ id }, { slug: id }] },
  });

  if (!project) {
    throw new ApiError(404, "Project not found", "NOT_FOUND");
  }

  return mapProject(project);
};

export const createProject = async (input: ProjectInput) => {
  const { id, slug } = resolveProjectId(input);

  const existing = await prisma.project.findFirst({
    where: { OR: [{ id }, { slug }] },
  });

  if (existing) {
    throw new ApiError(409, "A project with this id or slug already exists", "CONFLICT");
  }

  const project = await prisma.project.create({
    data: {
      id,
      slug,
      name: input.name,
      shortDescription: input.shortDescription,
      thumbnail: input.thumbnail,
      category: input.category,
      techStack: input.techStack,
      featured: input.featured ?? false,
      liveUrl: input.liveUrl ?? null,
      githubUrl: input.githubUrl ?? null,
      overview: input.overview,
      caseStudy: input.caseStudy ?? null,
      problem: input.problem ?? null,
      solution: input.solution ?? null,
      architecture: input.architecture ?? null,
      keyFeatures: input.keyFeatures,
      challenges: input.challenges,
      results: input.results,
      gallery: input.gallery,
      sortOrder: input.sortOrder ?? 0,
      isPublished: input.isPublished ?? true,
    },
  });

  return mapProject(project);
};

export const updateProject = async (id: string, input: ProjectUpdateInput) => {
  const existing = await prisma.project.findFirst({
    where: { OR: [{ id }, { slug: id }] },
  });

  if (!existing) {
    throw new ApiError(404, "Project not found", "NOT_FOUND");
  }

  if (input.slug && input.slug !== existing.slug) {
    const slugTaken = await prisma.project.findUnique({ where: { slug: input.slug } });
    if (slugTaken) {
      throw new ApiError(409, "Slug is already in use", "CONFLICT");
    }
  }

  const project = await prisma.project.update({
    where: { id: existing.id },
    data: {
      ...(input.slug !== undefined ? { slug: input.slug } : {}),
      ...(input.name !== undefined ? { name: input.name } : {}),
      ...(input.shortDescription !== undefined ? { shortDescription: input.shortDescription } : {}),
      ...(input.thumbnail !== undefined ? { thumbnail: input.thumbnail } : {}),
      ...(input.category !== undefined ? { category: input.category } : {}),
      ...(input.techStack !== undefined ? { techStack: input.techStack } : {}),
      ...(input.featured !== undefined ? { featured: input.featured } : {}),
      ...(input.liveUrl !== undefined ? { liveUrl: input.liveUrl } : {}),
      ...(input.githubUrl !== undefined ? { githubUrl: input.githubUrl } : {}),
      ...(input.overview !== undefined ? { overview: input.overview } : {}),
      ...(input.caseStudy !== undefined ? { caseStudy: input.caseStudy } : {}),
      ...(input.problem !== undefined ? { problem: input.problem } : {}),
      ...(input.solution !== undefined ? { solution: input.solution } : {}),
      ...(input.architecture !== undefined ? { architecture: input.architecture } : {}),
      ...(input.keyFeatures !== undefined ? { keyFeatures: input.keyFeatures } : {}),
      ...(input.challenges !== undefined ? { challenges: input.challenges } : {}),
      ...(input.results !== undefined ? { results: input.results } : {}),
      ...(input.gallery !== undefined ? { gallery: input.gallery } : {}),
      ...(input.sortOrder !== undefined ? { sortOrder: input.sortOrder } : {}),
      ...(input.isPublished !== undefined ? { isPublished: input.isPublished } : {}),
    },
  });

  return mapProject(project);
};

export const deleteProject = async (id: string) => {
  const existing = await prisma.project.findFirst({
    where: { OR: [{ id }, { slug: id }] },
  });

  if (!existing) {
    throw new ApiError(404, "Project not found", "NOT_FOUND");
  }

  await prisma.project.delete({ where: { id: existing.id } });
  return { id: existing.id };
};

export const getStats = async () => {
  const [projectCount, featuredCount, messageCount, unreadCount] = await Promise.all([
    prisma.project.count(),
    prisma.project.count({ where: { featured: true } }),
    prisma.contactMessage.count(),
    prisma.contactMessage.count({ where: { status: "NEW" } }),
  ]);

  return { projectCount, featuredCount, messageCount, unreadCount };
};
