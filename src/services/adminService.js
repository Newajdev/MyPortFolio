import { apiRequest, setAuthToken, clearAuthToken } from "./api";

export const loginAdmin = async ({ email, password }) => {
  const data = await apiRequest("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
  setAuthToken(data.token);
  return data.user;
};

export const registerAdmin = async ({ name, email, password }) => {
  const data = await apiRequest("/auth/register", {
    method: "POST",
    body: JSON.stringify({ name, email, password }),
  });
  setAuthToken(data.token);
  return data.user;
};

export const fetchAdminProfile = () => apiRequest("/auth/me");

export const logoutAdmin = () => {
  clearAuthToken();
};

export const fetchDashboardStats = () => apiRequest("/admin/stats");

export const fetchAllProjects = () => apiRequest("/admin/projects");

export const fetchAdminProject = (id) => apiRequest(`/admin/projects/${id}`);

export const createProject = (payload) =>
  apiRequest("/admin/projects", {
    method: "POST",
    body: JSON.stringify(payload),
  });

export const updateProject = (id, payload) =>
  apiRequest(`/admin/projects/${id}`, {
    method: "PATCH",
    body: JSON.stringify(payload),
  });

export const deleteProject = (id) =>
  apiRequest(`/admin/projects/${id}`, {
    method: "DELETE",
  });

export const fetchMessages = () => apiRequest("/admin/messages");

export const updateMessageStatus = (id, status) =>
  apiRequest(`/admin/messages/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ status }),
  });

export const deleteMessage = (id) =>
  apiRequest(`/admin/messages/${id}`, {
    method: "DELETE",
  });

export const fetchAdminContent = () => apiRequest("/admin/content");

export const updateHeroContent = (payload) =>
  apiRequest("/admin/content/hero", {
    method: "PATCH",
    body: JSON.stringify(payload),
  });

export const updateAboutPreview = (payload) =>
  apiRequest("/admin/content/about-preview", {
    method: "PATCH",
    body: JSON.stringify(payload),
  });

export const updateSiteSettingsContent = (payload) =>
  apiRequest("/admin/content/site-settings", {
    method: "PATCH",
    body: JSON.stringify(payload),
  });

export const fetchAdminSkills = () => apiRequest("/admin/skills");

export const createSkill = (payload) =>
  apiRequest("/admin/skills", {
    method: "POST",
    body: JSON.stringify(payload),
  });

export const updateSkill = (id, payload) =>
  apiRequest(`/admin/skills/${id}`, {
    method: "PATCH",
    body: JSON.stringify(payload),
  });

export const deleteSkill = (id) =>
  apiRequest(`/admin/skills/${id}`, {
    method: "DELETE",
  });

export const fetchSkillsSection = () => apiRequest("/admin/content/skills-section");

export const updateSkillsSection = (payload) =>
  apiRequest("/admin/content/skills-section", {
    method: "PATCH",
    body: JSON.stringify(payload),
  });

export const fetchSocialLinks = () => apiRequest("/admin/social-links");

export const createSocialLink = (payload) =>
  apiRequest("/admin/social-links", {
    method: "POST",
    body: JSON.stringify(payload),
  });

export const updateSocialLink = (id, payload) =>
  apiRequest(`/admin/social-links/${id}`, {
    method: "PATCH",
    body: JSON.stringify(payload),
  });

export const deleteSocialLink = (id) =>
  apiRequest(`/admin/social-links/${id}`, {
    method: "DELETE",
  });
