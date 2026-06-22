import { Router } from "express";
import * as contentController from "./content.controller.js";

const router = Router();

router.get("/home", contentController.getHome);
router.get("/site", contentController.getSite);
router.get("/nav", contentController.getNav);
router.get("/social", contentController.getSocial);
router.get("/hero", contentController.getHero);
router.get("/about/preview", contentController.getAboutPreview);
router.get("/about", contentController.getAboutFull);
router.get("/skills", contentController.getSkills);
router.get("/services", contentController.getServices);
router.get("/workflow", contentController.getWorkflow);
router.get("/value-banner", contentController.getValueBanner);
router.get("/projects", contentController.getProjects);
router.get("/projects/featured", contentController.getFeaturedProjects);
router.get("/projects/:slug", contentController.getProjectBySlug);
router.get("/testimonials", contentController.getTestimonials);

export default router;
