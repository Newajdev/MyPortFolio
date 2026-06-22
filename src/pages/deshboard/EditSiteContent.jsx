import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  fetchAdminContent,
  updateAboutPreview,
  updateHeroContent,
  updateSiteSettingsContent,
} from "../../services/adminService";
import DashboardPageHeader from "./DashboardPageHeader";

const fieldClass = "dashboard-input";
const textareaClass = "dashboard-input min-h-24 resize-y";

const emptyHero = {
  greeting: "",
  headline: "",
  positioning: "",
};

const emptyAbout = {
  title: "",
  shortIntro: "",
  highlights: "",
};

const emptySettings = {
  name: "",
  role: "",
  tagline: "",
  heroVideoId: "",
  resumeUrl: "",
};

const tabs = [
  { id: "hero", label: "Hero Intro" },
  { id: "about", label: "About Preview" },
  { id: "media", label: "Video & Resume" },
];

const EditSiteContent = () => {
  const [activeTab, setActiveTab] = useState("hero");
  const [loading, setLoading] = useState(true);
  const [hero, setHero] = useState(emptyHero);
  const [about, setAbout] = useState(emptyAbout);
  const [settings, setSettings] = useState(emptySettings);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchAdminContent()
      .then((data) => {
        if (data.heroContent) {
          setHero({
            greeting: data.heroContent.greeting ?? "",
            headline: data.heroContent.headline ?? "",
            positioning: data.heroContent.positioning ?? "",
          });
        }
        if (data.aboutPreview) {
          setAbout({
            title: data.aboutPreview.title ?? "",
            shortIntro: data.aboutPreview.shortIntro ?? "",
            highlights: (data.aboutPreview.highlights ?? []).join("\n"),
          });
        }
        if (data.siteSettings) {
          setSettings({
            name: data.siteSettings.name ?? "",
            role: data.siteSettings.role ?? "",
            tagline: data.siteSettings.tagline ?? "",
            heroVideoId: data.siteSettings.heroVideoId ?? "",
            resumeUrl: data.siteSettings.resumeUrl ?? "",
          });
        }
      })
      .catch((err) => toast.error(err.message ?? "Failed to load content"))
      .finally(() => setLoading(false));
  }, []);

  const handleHeroSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await updateHeroContent(hero);
      toast.success("Hero intro updated!");
    } catch (err) {
      toast.error(err.message ?? "Failed to save hero content");
    } finally {
      setSaving(false);
    }
  };

  const handleAboutSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await updateAboutPreview({
        title: about.title,
        shortIntro: about.shortIntro,
        highlights: about.highlights,
      });
      toast.success("About preview updated!");
    } catch (err) {
      toast.error(err.message ?? "Failed to save about preview");
    } finally {
      setSaving(false);
    }
  };

  const handleSettingsSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await updateSiteSettingsContent(settings);
      toast.success("Video & resume settings updated!");
    } catch (err) {
      toast.error(err.message ?? "Failed to save settings");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[30vh] items-center justify-center">
        <span className="loading loading-spinner loading-lg text-[#2B9C7F]" />
      </div>
    );
  }

  return (
    <>
      <DashboardPageHeader
        eyebrow="Content"
        title="Site Content"
        description="Update your homepage intro, about preview, YouTube video, and resume link from here."
      />

      <div className="mb-6 flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              activeTab === tab.id
                ? "bg-[#2B9C7F] text-white"
                : "border border-white/10 bg-white/5 text-text-muted hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="dashboard-panel p-6 md:p-8">
        {activeTab === "hero" && (
          <form onSubmit={handleHeroSubmit} className="space-y-4">
            <h2 className="text-lg font-semibold text-white">Hero Section</h2>
            <label className="block">
              <span className="mb-2 block text-sm text-text-muted">Greeting</span>
              <input
                className={fieldClass}
                value={hero.greeting}
                onChange={(e) => setHero((prev) => ({ ...prev, greeting: e.target.value }))}
                placeholder="Hello, I'm"
                required
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm text-text-muted">Headline</span>
              <input
                className={fieldClass}
                value={hero.headline}
                onChange={(e) => setHero((prev) => ({ ...prev, headline: e.target.value }))}
                required
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm text-text-muted">Positioning text</span>
              <textarea
                className={textareaClass}
                value={hero.positioning}
                onChange={(e) => setHero((prev) => ({ ...prev, positioning: e.target.value }))}
                required
              />
            </label>
            <button type="submit" disabled={saving} className="dashboard-btn-primary px-8">
              {saving ? "Saving..." : "Save Hero"}
            </button>
          </form>
        )}

        {activeTab === "about" && (
          <form onSubmit={handleAboutSubmit} className="space-y-4">
            <h2 className="text-lg font-semibold text-white">About Preview (Homepage)</h2>
            <label className="block">
              <span className="mb-2 block text-sm text-text-muted">Section title</span>
              <input
                className={fieldClass}
                value={about.title}
                onChange={(e) => setAbout((prev) => ({ ...prev, title: e.target.value }))}
                required
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm text-text-muted">Short intro</span>
              <textarea
                className={textareaClass}
                value={about.shortIntro}
                onChange={(e) => setAbout((prev) => ({ ...prev, shortIntro: e.target.value }))}
                required
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm text-text-muted">Highlights (one per line)</span>
              <textarea
                className={textareaClass}
                value={about.highlights}
                onChange={(e) => setAbout((prev) => ({ ...prev, highlights: e.target.value }))}
                placeholder="Production-ready SaaS architecture"
              />
            </label>
            <button type="submit" disabled={saving} className="dashboard-btn-primary px-8">
              {saving ? "Saving..." : "Save About Preview"}
            </button>
          </form>
        )}

        {activeTab === "media" && (
          <form onSubmit={handleSettingsSubmit} className="space-y-4">
            <h2 className="text-lg font-semibold text-white">Video & Resume</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm text-text-muted">Your name</span>
                <input
                  className={fieldClass}
                  value={settings.name}
                  onChange={(e) => setSettings((prev) => ({ ...prev, name: e.target.value }))}
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm text-text-muted">Role / title</span>
                <input
                  className={fieldClass}
                  value={settings.role}
                  onChange={(e) => setSettings((prev) => ({ ...prev, role: e.target.value }))}
                />
              </label>
            </div>
            <label className="block">
              <span className="mb-2 block text-sm text-text-muted">Tagline</span>
              <input
                className={fieldClass}
                value={settings.tagline}
                onChange={(e) => setSettings((prev) => ({ ...prev, tagline: e.target.value }))}
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm text-text-muted">YouTube Video ID</span>
              <input
                className={fieldClass}
                value={settings.heroVideoId}
                onChange={(e) => setSettings((prev) => ({ ...prev, heroVideoId: e.target.value }))}
                placeholder="ScMzIvxBSi4"
              />
              <p className="mt-1 text-xs text-text-soft">
                Only the ID from the URL — e.g. youtube.com/watch?v=<strong>ScMzIvxBSi4</strong>
              </p>
            </label>
            <label className="block">
              <span className="mb-2 block text-sm text-text-muted">Resume URL</span>
              <input
                className={fieldClass}
                value={settings.resumeUrl}
                onChange={(e) => setSettings((prev) => ({ ...prev, resumeUrl: e.target.value }))}
                placeholder="/resume.pdf or https://..."
              />
              <p className="mt-1 text-xs text-text-soft">
                Put your PDF in the frontend public folder or use an external link.
              </p>
            </label>
            <button type="submit" disabled={saving} className="dashboard-btn-primary px-8">
              {saving ? "Saving..." : "Save Video & Resume"}
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export default EditSiteContent;
