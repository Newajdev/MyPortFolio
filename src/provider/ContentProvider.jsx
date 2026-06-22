import { createContext, useContext, useEffect, useState } from "react";
import * as staticContent from "../data/siteContent";
import { fetchHomeContent } from "../services/contentService";

const defaultContent = {
  siteSettings: staticContent.siteSettings,
  navLinks: staticContent.navLinks,
  socialLinks: staticContent.socialLinks,
  heroContent: staticContent.heroContent,
  aboutPreview: staticContent.aboutPreview,
  aboutFull: staticContent.aboutFull,
  skillCategories: staticContent.skillCategories,
  skillsSection: staticContent.skillsSection,
  services: staticContent.services,
  workflowSteps: staticContent.workflowSteps,
  valueBanner: staticContent.valueBanner,
  featuredProjects: staticContent.getFeaturedProjects(),
  testimonials: [],
};

export const ContentContext = createContext({
  content: defaultContent,
  loading: true,
  source: "static",
});

export const ContentProvider = ({ children }) => {
  const [content, setContent] = useState(defaultContent);
  const [loading, setLoading] = useState(true);
  const [source, setSource] = useState("static");

  useEffect(() => {
    let active = true;

    fetchHomeContent().then((data) => {
      if (!active) return;
      setContent((prev) => ({ ...prev, ...data }));
      setSource("api");
      setLoading(false);
    }).catch(() => {
      if (!active) setLoading(false);
    });

    return () => {
      active = false;
    };
  }, []);

  return (
    <ContentContext.Provider value={{ content, loading, source }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => useContext(ContentContext);
