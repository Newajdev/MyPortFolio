import type { Response, NextFunction } from "express";
import { sendSuccess } from "../../shared/response.js";
import {
  aboutPreviewUpdateSchema,
  heroUpdateSchema,
  siteSettingsUpdateSchema,
  skillBodySchema,
  skillUpdateSchema,
  skillsSectionUpdateSchema,
  socialLinkBodySchema,
  socialLinkUpdateSchema,
} from "./content.schema.js";
import * as contentService from "./content.service.js";
import type { AuthRequest } from "../../middleware/auth.js";

export const getContent = async (_req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const content = await contentService.getAdminContent();
    sendSuccess(res, content);
  } catch (err) {
    next(err);
  }
};

export const updateHero = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const input = heroUpdateSchema.parse(req.body);
    const hero = await contentService.updateHero(input);
    sendSuccess(res, hero);
  } catch (err) {
    next(err);
  }
};

export const updateAboutPreview = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const input = aboutPreviewUpdateSchema.parse(req.body);
    const preview = await contentService.updateAboutPreview(input);
    sendSuccess(res, preview);
  } catch (err) {
    next(err);
  }
};

export const updateSiteSettings = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const input = siteSettingsUpdateSchema.parse(req.body);
    const settings = await contentService.updateSiteSettings(input);
    sendSuccess(res, settings);
  } catch (err) {
    next(err);
  }
};

export const getSkillsSection = async (_req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const section = await contentService.getSkillsSection();
    sendSuccess(res, section);
  } catch (err) {
    next(err);
  }
};

export const updateSkillsSection = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const input = skillsSectionUpdateSchema.parse(req.body);
    const section = await contentService.updateSkillsSection(input);
    sendSuccess(res, section);
  } catch (err) {
    next(err);
  }
};

export const listSkills = async (_req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const skills = await contentService.listSkills();
    sendSuccess(res, skills);
  } catch (err) {
    next(err);
  }
};

export const createSkill = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const input = skillBodySchema.parse(req.body);
    const skill = await contentService.createSkill(input);
    sendSuccess(res, skill, 201);
  } catch (err) {
    next(err);
  }
};

export const updateSkill = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const input = skillUpdateSchema.parse(req.body);
    const skill = await contentService.updateSkill(String(req.params.id), input);
    sendSuccess(res, skill);
  } catch (err) {
    next(err);
  }
};

export const deleteSkill = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const result = await contentService.deleteSkill(String(req.params.id));
    sendSuccess(res, result);
  } catch (err) {
    next(err);
  }
};

export const listSocialLinks = async (_req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const links = await contentService.listSocialLinks();
    sendSuccess(res, links);
  } catch (err) {
    next(err);
  }
};

export const createSocialLink = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const input = socialLinkBodySchema.parse(req.body);
    const link = await contentService.createSocialLink(input);
    sendSuccess(res, link, 201);
  } catch (err) {
    next(err);
  }
};

export const updateSocialLink = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const input = socialLinkUpdateSchema.parse(req.body);
    const link = await contentService.updateSocialLink(String(req.params.id), input);
    sendSuccess(res, link);
  } catch (err) {
    next(err);
  }
};

export const deleteSocialLink = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const result = await contentService.deleteSocialLink(String(req.params.id));
    sendSuccess(res, result);
  } catch (err) {
    next(err);
  }
};
