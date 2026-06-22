import type { Response, NextFunction } from "express";
import { sendSuccess } from "../../shared/response.js";
import { projectBodySchema, projectUpdateSchema } from "./project.schema.js";
import * as projectService from "./project.service.js";
import type { AuthRequest } from "../../middleware/auth.js";

export const getStats = async (_req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const stats = await projectService.getStats();
    sendSuccess(res, stats);
  } catch (err) {
    next(err);
  }
};

export const listProjects = async (_req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const projects = await projectService.listProjects();
    sendSuccess(res, projects);
  } catch (err) {
    next(err);
  }
};

export const getProject = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const project = await projectService.getProject(String(req.params.id));
    sendSuccess(res, project);
  } catch (err) {
    next(err);
  }
};

export const createProject = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const input = projectBodySchema.parse(req.body);
    const project = await projectService.createProject(input);
    sendSuccess(res, project, 201);
  } catch (err) {
    next(err);
  }
};

export const updateProject = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const input = projectUpdateSchema.parse(req.body);
    const project = await projectService.updateProject(String(req.params.id), input);
    sendSuccess(res, project);
  } catch (err) {
    next(err);
  }
};

export const deleteProject = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const result = await projectService.deleteProject(String(req.params.id));
    sendSuccess(res, result);
  } catch (err) {
    next(err);
  }
};
