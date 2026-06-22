import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import {
  createSocialLink,
  deleteSocialLink,
  fetchSocialLinks,
  updateSocialLink,
} from "../../services/adminService";
import DashboardPageHeader from "./DashboardPageHeader";
import { getSocialIcon } from "../../utils/resolveIcon";

const fieldClass = "dashboard-input";

const platformOptions = [
  { value: "github", label: "GitHub" },
  { value: "linkedin", label: "LinkedIn" },
  { value: "facebook", label: "Facebook" },
  { value: "twitter", label: "X (Twitter)" },
  { value: "instagram", label: "Instagram" },
  { value: "youtube", label: "YouTube" },
  { value: "whatsapp", label: "WhatsApp" },
  { value: "dribbble", label: "Dribbble" },
  { value: "behance", label: "Behance" },
];

const emptyForm = {
  platform: "github",
  url: "",
  label: "",
  sortOrder: 0,
};

const ManageSocialLinks = () => {
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

  const loadLinks = () => {
    setLoading(true);
    fetchSocialLinks()
      .then(setLinks)
      .catch((err) => toast.error(err.message ?? "Failed to load social links"))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadLinks();
  }, []);

  const resetForm = () => {
    setForm(emptyForm);
    setEditingId(null);
  };

  const handleEdit = (link) => {
    setEditingId(link.id);
    setForm({
      platform: link.platform,
      url: link.url,
      label: link.label,
      sortOrder: link.sortOrder,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const payload = {
        platform: form.platform,
        url: form.url,
        label: form.label,
        sortOrder: Number(form.sortOrder) || 0,
      };

      if (editingId) {
        await updateSocialLink(editingId, payload);
        toast.success("Social link updated!");
      } else {
        await createSocialLink(payload);
        toast.success("Social link added!");
      }

      resetForm();
      loadLinks();
    } catch (err) {
      toast.error(err.message ?? "Failed to save social link");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (link) => {
    if (!window.confirm(`Delete ${link.label}?`)) return;

    setDeletingId(link.id);
    try {
      await deleteSocialLink(link.id);
      toast.success("Social link deleted");
      if (editingId === link.id) resetForm();
      setLinks((prev) => prev.filter((item) => item.id !== link.id));
    } catch (err) {
      toast.error(err.message ?? "Failed to delete social link");
    } finally {
      setDeletingId(null);
    }
  };

  const PreviewIcon = getSocialIcon(form.platform);

  return (
    <>
      <DashboardPageHeader
        eyebrow="Content"
        title="Social Links"
        description="Update your GitHub, LinkedIn, and other social profile links shown on the site."
      />

      <div className="dashboard-panel mb-6 p-6 md:p-8">
        <h2 className="mb-4 text-lg font-semibold text-white">
          {editingId ? "Edit Social Link" : "Add Social Link"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm text-text-muted">Platform *</span>
              <select
                className={fieldClass}
                value={form.platform}
                onChange={(e) => setForm((prev) => ({ ...prev, platform: e.target.value }))}
                required
              >
                {platformOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="mb-2 block text-sm text-text-muted">Label *</span>
              <input
                className={fieldClass}
                value={form.label}
                onChange={(e) => setForm((prev) => ({ ...prev, label: e.target.value }))}
                placeholder="GitHub"
                required
              />
            </label>
          </div>

          <label className="block">
            <span className="mb-2 block text-sm text-text-muted">Profile URL *</span>
            <input
              type="url"
              className={fieldClass}
              value={form.url}
              onChange={(e) => setForm((prev) => ({ ...prev, url: e.target.value }))}
              placeholder="https://github.com/username"
              required
            />
          </label>

          <div className="flex flex-wrap items-center gap-6">
            <label className="flex items-center gap-2 text-sm text-white">
              Sort order
              <input
                type="number"
                className="input input-bordered w-24 bg-surface text-white"
                value={form.sortOrder}
                onChange={(e) => setForm((prev) => ({ ...prev, sortOrder: e.target.value }))}
              />
            </label>
            <div className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-text-muted">
              <PreviewIcon className="text-lg text-accent" />
              Preview icon
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button type="submit" disabled={submitting} className="dashboard-btn-primary px-8">
              {submitting ? "Saving..." : editingId ? "Update Link" : "Add Link"}
            </button>
            {editingId && (
              <button
                type="button"
                onClick={resetForm}
                className="rounded-full border border-white/10 px-6 py-2 text-sm text-text-muted hover:text-white"
              >
                Cancel edit
              </button>
            )}
          </div>
        </form>
      </div>

      {loading ? (
        <div className="flex min-h-[20vh] items-center justify-center">
          <span className="loading loading-spinner loading-lg text-[#2B9C7F]" />
        </div>
      ) : links.length === 0 ? (
        <div className="dashboard-panel p-10 text-center text-text-muted">
          No social links yet. Add your first profile link above.
        </div>
      ) : (
        <div className="dashboard-panel overflow-hidden">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr className="border-white/8 text-text-muted">
                  <th className="bg-transparent">Platform</th>
                  <th className="bg-transparent">Label</th>
                  <th className="bg-transparent">URL</th>
                  <th className="bg-transparent text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {links.map((link) => {
                  const Icon = getSocialIcon(link.platform);
                  return (
                    <tr key={link.id} className="border-white/8 hover:bg-white/3">
                      <td>
                        <div className="flex items-center gap-3">
                          <span className="rounded-xl border border-white/10 p-2 text-accent">
                            <Icon />
                          </span>
                          <span className="capitalize text-white">{link.platform}</span>
                        </div>
                      </td>
                      <td className="text-text-muted">{link.label}</td>
                      <td className="max-w-xs truncate text-sm text-text-soft">{link.url}</td>
                      <td>
                        <div className="flex justify-end gap-2">
                          <button
                            type="button"
                            onClick={() => handleEdit(link)}
                            className="btn btn-ghost btn-sm text-white hover:bg-[#2B9C7F]/15 hover:text-[#7ee787]"
                          >
                            <FiEdit2 />
                            Edit
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDelete(link)}
                            disabled={deletingId === link.id}
                            className="btn btn-ghost btn-sm text-red-400 hover:bg-red-400/10"
                          >
                            <FiTrash2 />
                            {deletingId === link.id ? "..." : "Delete"}
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default ManageSocialLinks;
