import { apiRequest } from "./api";
import * as content from "../data/siteContent";

const fromApi = async (path, fallback) => {
  try {
    return await apiRequest(path);
  } catch {
    return fallback;
  }
};

export const fetchSiteSettings = () => fromApi("/content/site", content.siteSettings);
export const fetchNavLinks = () => fromApi("/content/nav", content.navLinks);
export const fetchSocialLinks = () => fromApi("/content/social", content.socialLinks);
export const fetchHeroContent = () => fromApi("/content/hero", content.heroContent);
export const fetchAboutPreview = () => fromApi("/content/about/preview", content.aboutPreview);
export const fetchAboutFull = () => fromApi("/content/about", content.aboutFull);
export const fetchSkillCategories = () => fromApi("/content/skills", content.skillCategories);
export const fetchServices = () => fromApi("/content/services", content.services);
export const fetchWorkflowSteps = () => fromApi("/content/workflow", content.workflowSteps);
export const fetchValueBanner = () => fromApi("/content/value-banner", content.valueBanner);
export const fetchFeaturedProjects = () => fromApi("/content/projects/featured", content.getFeaturedProjects());
export const fetchProjectBySlug = (slug) =>
  fromApi(`/content/projects/${slug}`, content.getProjectBySlug(slug));
export const fetchTestimonials = () => fromApi("/content/testimonials", []);
export const fetchHomeContent = () =>
  fromApi("/content/home", {
    siteSettings: content.siteSettings,
    navLinks: content.navLinks,
    socialLinks: content.socialLinks,
    heroContent: content.heroContent,
    aboutPreview: content.aboutPreview,
    skillCategories: content.skillCategories,
    skillsSection: content.skillsSection,
    services: content.services,
    workflowSteps: content.workflowSteps,
    valueBanner: content.valueBanner,
    featuredProjects: content.getFeaturedProjects(),
    testimonials: [],
  });

export const submitContactMessage = async (formData) => {
  return apiRequest("/contact", {
    method: "POST",
    body: JSON.stringify(formData),
  });
};
