import { prisma } from "../../lib/prisma.js";
import { normalizeSkills } from "../../shared/normalizeSkills.js";

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
}) => ({
  id: project.id,
  slug: project.slug,
  name: project.name,
  shortDescription: project.shortDescription,
  thumbnail: project.thumbnail,
  category: project.category,
  techStack: project.techStack as string[],
  featured: project.featured,
  liveUrl: project.liveUrl,
  githubUrl: project.githubUrl,
  overview: project.overview,
  caseStudy: project.caseStudy,
  problem: project.problem,
  solution: project.solution,
  architecture: project.architecture,
  keyFeatures: project.keyFeatures as string[],
  challenges: project.challenges as string[],
  results: project.results as string[],
  gallery: project.gallery as string[],
});

export const getSiteSettings = async () => {
  const settings = await prisma.siteSettings.findUnique({ where: { id: "default" } });
  if (!settings) return null;

  return {
    name: settings.name,
    brand: settings.brand,
    role: settings.role,
    tagline: settings.tagline,
    email: settings.email,
    phone: settings.phone,
    whatsapp: settings.whatsapp,
    resumeUrl: settings.resumeUrl,
    heroVideoId: settings.heroVideoId,
    seo: settings.seo,
  };
};

export const getNavLinks = async () => {
  return prisma.navLink.findMany({ orderBy: { sortOrder: "asc" } });
};

export const getSocialLinks = async () => {
  return prisma.socialLink.findMany({ orderBy: { sortOrder: "asc" } });
};

export const getHeroContent = async () => {
  const hero = await prisma.heroContent.findUnique({ where: { id: "default" } });
  if (!hero) return null;

  return {
    greeting: hero.greeting,
    headline: hero.headline,
    positioning: hero.positioning,
    ctas: hero.ctas,
  };
};

export const getAboutPreview = async () => {
  const about = await prisma.aboutContent.findUnique({ where: { id: "default" } });
  if (!about) return null;
  return about.preview;
};

export const getAboutFull = async () => {
  const about = await prisma.aboutContent.findUnique({ where: { id: "default" } });
  if (!about) return null;
  return about.full;
};

export const getSkillCategories = async () => {
  const skills = await prisma.skillCategory.findMany({
    where: { isPublished: true },
    orderBy: { sortOrder: "asc" },
  });

  return skills.map((skill) => ({
    id: skill.id,
    title: skill.title,
    description: skill.description,
    icon: skill.icon,
    skills: normalizeSkills(skill.technologies),
  }));
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

export const getServices = async () => {
  const services = await prisma.service.findMany({
    where: { isPublished: true },
    orderBy: { sortOrder: "asc" },
  });

  return services.map((service) => ({
    id: service.id,
    title: service.title,
    summary: service.summary,
    description: service.description,
    problems: service.problems as string[],
    role: service.role,
  }));
};

export const getWorkflowSteps = async () => {
  return prisma.workflowStep.findMany({ orderBy: { sortOrder: "asc" } });
};

export const getValueBanner = async () => {
  const banner = await prisma.valueBanner.findUnique({ where: { id: "default" } });
  if (!banner) return null;
  return { statement: banner.statement };
};

export const getProjects = async () => {
  const projects = await prisma.project.findMany({
    where: { isPublished: true },
    orderBy: { sortOrder: "asc" },
  });
  return projects.map(mapProject);
};

export const getFeaturedProjects = async () => {
  const projects = await prisma.project.findMany({
    where: { isPublished: true, featured: true },
    orderBy: { sortOrder: "asc" },
  });
  return projects.map(mapProject);
};

export const getProjectBySlug = async (slug: string) => {
  const project = await prisma.project.findFirst({
    where: { slug, isPublished: true },
  });
  return project ? mapProject(project) : null;
};

export const getTestimonials = async () => {
  return prisma.testimonial.findMany({
    where: { isPublished: true },
    orderBy: { sortOrder: "asc" },
  });
};

export const getHomeContent = async () => {
  const [
    siteSettings,
    navLinks,
    socialLinks,
    heroContent,
    aboutPreview,
    skillCategories,
    skillsSection,
    services,
    workflowSteps,
    valueBanner,
    featuredProjects,
    testimonials,
  ] = await Promise.all([
    getSiteSettings(),
    getNavLinks(),
    getSocialLinks(),
    getHeroContent(),
    getAboutPreview(),
    getSkillCategories(),
    getSkillsSection(),
    getServices(),
    getWorkflowSteps(),
    getValueBanner(),
    getFeaturedProjects(),
    getTestimonials(),
  ]);

  return {
    siteSettings,
    navLinks,
    socialLinks,
    heroContent,
    aboutPreview,
    skillCategories,
    skillsSection,
    services,
    workflowSteps,
    valueBanner,
    featuredProjects,
    testimonials,
  };
};
