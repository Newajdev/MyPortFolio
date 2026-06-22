import type { Request, Response, NextFunction } from "express";
import { ApiError } from "../../shared/ApiError.js";
import { sendSuccess } from "../../shared/response.js";
import * as contentService from "./content.service.js";

export const getSite = async (_req: Request, res: Response) => {
  const data = await contentService.getSiteSettings();
  if (!data) throw new ApiError(404, "Site settings not found", "NOT_FOUND");
  sendSuccess(res, data);
};

export const getNav = async (_req: Request, res: Response) => {
  sendSuccess(res, await contentService.getNavLinks());
};

export const getSocial = async (_req: Request, res: Response) => {
  sendSuccess(res, await contentService.getSocialLinks());
};

export const getHero = async (_req: Request, res: Response) => {
  const data = await contentService.getHeroContent();
  if (!data) throw new ApiError(404, "Hero content not found", "NOT_FOUND");
  sendSuccess(res, data);
};

export const getAboutPreview = async (_req: Request, res: Response) => {
  const data = await contentService.getAboutPreview();
  if (!data) throw new ApiError(404, "About preview not found", "NOT_FOUND");
  sendSuccess(res, data);
};

export const getAboutFull = async (_req: Request, res: Response) => {
  const data = await contentService.getAboutFull();
  if (!data) throw new ApiError(404, "About content not found", "NOT_FOUND");
  sendSuccess(res, data);
};

export const getSkills = async (_req: Request, res: Response) => {
  sendSuccess(res, await contentService.getSkillCategories());
};

export const getServices = async (_req: Request, res: Response) => {
  sendSuccess(res, await contentService.getServices());
};

export const getWorkflow = async (_req: Request, res: Response) => {
  sendSuccess(res, await contentService.getWorkflowSteps());
};

export const getValueBanner = async (_req: Request, res: Response) => {
  const data = await contentService.getValueBanner();
  if (!data) throw new ApiError(404, "Value banner not found", "NOT_FOUND");
  sendSuccess(res, data);
};

export const getProjects = async (_req: Request, res: Response) => {
  sendSuccess(res, await contentService.getProjects());
};

export const getFeaturedProjects = async (_req: Request, res: Response) => {
  sendSuccess(res, await contentService.getFeaturedProjects());
};

export const getProjectBySlug = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const project = await contentService.getProjectBySlug(String(req.params.slug));
    if (!project) throw new ApiError(404, "Project not found", "NOT_FOUND");
    sendSuccess(res, project);
  } catch (err) {
    next(err);
  }
};

export const getTestimonials = async (_req: Request, res: Response) => {
  sendSuccess(res, await contentService.getTestimonials());
};

export const getHome = async (_req: Request, res: Response) => {
  sendSuccess(res, await contentService.getHomeContent());
};
