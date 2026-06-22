import { Router } from "express";
import { requireAuth } from "../../middleware/auth.js";
import * as projectController from "./project.controller.js";
import * as messageController from "./message.controller.js";
import * as contentController from "./content.controller.js";

const router = Router();

router.use(requireAuth);

router.get("/stats", projectController.getStats);
router.get("/projects", projectController.listProjects);
router.get("/projects/:id", projectController.getProject);
router.post("/projects", projectController.createProject);
router.patch("/projects/:id", projectController.updateProject);
router.delete("/projects/:id", projectController.deleteProject);

router.get("/content", contentController.getContent);
router.patch("/content/hero", contentController.updateHero);
router.patch("/content/about-preview", contentController.updateAboutPreview);
router.patch("/content/site-settings", contentController.updateSiteSettings);

router.get("/content/skills-section", contentController.getSkillsSection);
router.patch("/content/skills-section", contentController.updateSkillsSection);

router.get("/social-links", contentController.listSocialLinks);
router.post("/social-links", contentController.createSocialLink);
router.patch("/social-links/:id", contentController.updateSocialLink);
router.delete("/social-links/:id", contentController.deleteSocialLink);

router.get("/skills", contentController.listSkills);
router.post("/skills", contentController.createSkill);
router.patch("/skills/:id", contentController.updateSkill);
router.delete("/skills/:id", contentController.deleteSkill);

router.get("/messages", messageController.listMessages);
router.patch("/messages/:id", messageController.updateMessageStatus);
router.delete("/messages/:id", messageController.deleteMessage);

export default router;
