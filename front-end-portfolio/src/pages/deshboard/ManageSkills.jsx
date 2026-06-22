import { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { FiEdit2, FiPlus, FiTrash2, FiX } from "react-icons/fi";
import {
  createSkill,
  deleteSkill,
  fetchAdminSkills,
  fetchSkillsSection,
  updateSkill,
  updateSkillsSection,
} from "../../services/adminService";
import DashboardPageHeader from "./DashboardPageHeader";
import IconPicker from "./IconPicker";
import { categoryIconPresets, resolveIcon, slugify, suggestIconForSkill } from "../../utils/resolveIcon";

const fieldClass = "dashboard-input";
const textareaClass = "dashboard-input min-h-20 resize-y";

const emptySection = {
  eyebrow: "Skills",
  title: "",
  description: "",
};

const emptyCategory = {
  title: "",
  description: "",
  icon: "FaLaptopCode",
  skills: [{ name: "", icon: "" }],
  sortOrder: 0,
  isPublished: true,
};

const ManageSkills = () => {
  const [loading, setLoading] = useState(true);
  const [sectionOpen, setSectionOpen] = useState(false);
  const [section, setSection] = useState(emptySection);
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState(emptyCategory);
  const [editingId, setEditingId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

  const loadData = async () => {
    setLoading(true);
    try {
      const [sectionResult, skillsResult] = await Promise.allSettled([
        fetchSkillsSection(),
        fetchAdminSkills(),
      ]);

      if (sectionResult.status === "fulfilled" && sectionResult.value) {
        setSection({
          eyebrow: sectionResult.value.eyebrow ?? "Skills",
          title: sectionResult.value.title ?? "",
          description: sectionResult.value.description ?? "",
        });
      } else if (sectionResult.status === "rejected") {
        toast.warn("Section heading could not be loaded. You can still manage categories.");
      }

      if (skillsResult.status === "fulfilled") {
        setCategories(skillsResult.value);
      } else {
        toast.error(skillsResult.reason?.message ?? "Failed to load skill categories");
      }
    } catch (err) {
      toast.error(err.message ?? "Failed to load skills data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const previewCategory = useMemo(
    () => ({
      ...form,
      id: editingId ?? (slugify(form.title) || "preview"),
      skills: form.skills.filter((skill) => skill.name.trim()),
    }),
    [form, editingId]
  );

  const openCreateModal = () => {
    setEditingId(null);
    setForm(emptyCategory);
    setModalOpen(true);
  };

  const openEditModal = (category) => {
    setEditingId(category.id);
    setForm({
      title: category.title,
      description: category.description,
      icon: category.icon || "FaLaptopCode",
      skills: category.skills?.length
        ? category.skills.map((skill) => ({
            name: skill.name,
            icon: skill.icon || suggestIconForSkill(skill.name),
          }))
        : [{ name: "", icon: "" }],
      sortOrder: category.sortOrder,
      isPublished: category.isPublished,
    });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditingId(null);
    setForm(emptyCategory);
  };

  const updateSkillRow = (index, field, value) => {
    setForm((prev) => ({
      ...prev,
      skills: prev.skills.map((skill, i) => {
        if (i !== index) return skill;

        if (field === "name") {
          const suggested = suggestIconForSkill(value);
          const previousSuggestion = suggestIconForSkill(skill.name);
          const iconWasAuto = !skill.icon || skill.icon === previousSuggestion;

          return {
            ...skill,
            name: value,
            icon: iconWasAuto ? suggested || skill.icon : skill.icon,
          };
        }

        return { ...skill, [field]: value };
      }),
    }));
  };

  const addSkillRow = () => {
    setForm((prev) => ({
      ...prev,
      skills: [...prev.skills, { name: "", icon: "" }],
    }));
  };

  const removeSkillRow = (index) => {
    setForm((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index),
    }));
  };

  const handleSectionSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await updateSkillsSection(section);
      toast.success("Section heading saved!");
      setSectionOpen(false);
    } catch (err) {
      toast.error(err.message ?? "Failed to save section");
    } finally {
      setSubmitting(false);
    }
  };

  const handleCategorySubmit = async (e) => {
    e.preventDefault();

    const skills = form.skills
      .filter((skill) => skill.name.trim())
      .map((skill) => ({
        name: skill.name.trim(),
        icon: skill.icon || suggestIconForSkill(skill.name) || "FaCode",
      }));

    if (skills.length === 0) {
      toast.error("Add at least one skill");
      return;
    }

    const categoryId = editingId || slugify(form.title);
    if (!categoryId) {
      toast.error("Please enter a category name");
      return;
    }

    setSubmitting(true);
    try {
      const payload = {
        title: form.title.trim(),
        description: form.description.trim(),
        icon: form.icon || "FaLaptopCode",
        skills,
        sortOrder: Number(form.sortOrder) || 0,
        isPublished: form.isPublished,
      };

      if (editingId) {
        await updateSkill(editingId, payload);
        toast.success("Category updated!");
      } else {
        await createSkill({ ...payload, id: categoryId });
        toast.success("Category added!");
      }

      closeModal();
      loadData();
    } catch (err) {
      toast.error(err.message ?? "Failed to save category");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (category) => {
    if (!window.confirm(`Delete "${category.title}"?`)) return;

    setDeletingId(category.id);
    try {
      await deleteSkill(category.id);
      toast.success("Category deleted");
      if (editingId === category.id) closeModal();
      setCategories((prev) => prev.filter((item) => item.id !== category.id));
    } catch (err) {
      toast.error(err.message ?? "Failed to delete category");
    } finally {
      setDeletingId(null);
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
        title="Manage Skills"
        description="Add categories, pick icons visually, and manage each skill separately — no technical names needed."
        action={
          <button type="button" onClick={openCreateModal} className="dashboard-btn-primary">
            + New Category
          </button>
        }
      />

      <div className="dashboard-panel mb-6 overflow-hidden">
        <button
          type="button"
          onClick={() => setSectionOpen((prev) => !prev)}
          className="flex w-full items-center justify-between px-6 py-5 text-left"
        >
          <div>
            <p className="text-sm font-medium text-white">Section heading</p>
            <p className="mt-1 text-xs text-text-soft">
              Title and description shown above skills on your homepage
            </p>
          </div>
          <span className="text-sm text-[#7ee787]">{sectionOpen ? "Hide" : "Edit"}</span>
        </button>

        {sectionOpen && (
          <form onSubmit={handleSectionSubmit} className="space-y-4 border-t border-white/8 px-6 pb-6 pt-5">
            <label className="block">
              <span className="mb-2 block text-sm text-text-muted">Small label</span>
              <input
                className={fieldClass}
                value={section.eyebrow}
                onChange={(e) => setSection((prev) => ({ ...prev, eyebrow: e.target.value }))}
                placeholder="Skills"
                required
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm text-text-muted">Main title</span>
              <input
                className={fieldClass}
                value={section.title}
                onChange={(e) => setSection((prev) => ({ ...prev, title: e.target.value }))}
                placeholder="Technologies I work with"
                required
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm text-text-muted">Short description</span>
              <textarea
                className={textareaClass}
                value={section.description}
                onChange={(e) => setSection((prev) => ({ ...prev, description: e.target.value }))}
                required
              />
            </label>
            <button type="submit" disabled={submitting} className="dashboard-btn-primary px-8">
              {submitting ? "Saving..." : "Save heading"}
            </button>
          </form>
        )}
      </div>

      {categories.length === 0 ? (
        <div className="dashboard-panel p-10 text-center">
          <p className="text-text-muted">No categories yet. Create your first one to get started.</p>
          <button type="button" onClick={openCreateModal} className="dashboard-btn-primary mt-6">
            + New Category
          </button>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => {
            const CategoryIcon = resolveIcon(category.icon);

            return (
              <div key={category.id} className="dashboard-panel p-5">
                <div className="flex items-start gap-4">
                  <span className="rounded-2xl border border-accent/20 bg-accent/10 p-3 text-accent">
                    <CategoryIcon className="text-2xl" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-semibold text-white">{category.title}</h3>
                        <p className="mt-1 line-clamp-2 text-sm text-text-muted">
                          {category.description}
                        </p>
                      </div>
                      <span
                        className={`badge badge-sm shrink-0 ${
                          category.isPublished ? "badge-success" : "badge-ghost"
                        }`}
                      >
                        {category.isPublished ? "Live" : "Hidden"}
                      </span>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {(category.skills ?? []).slice(0, 6).map((skill) => {
                        const SkillIcon = resolveIcon(skill.icon);
                        return (
                          <span
                            key={skill.name}
                            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-text-muted"
                          >
                            <SkillIcon className="text-sm text-accent" />
                            {skill.name}
                          </span>
                        );
                      })}
                      {(category.skills?.length ?? 0) > 6 && (
                        <span className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-text-soft">
                          +{category.skills.length - 6} more
                        </span>
                      )}
                    </div>

                    <div className="mt-5 flex gap-2">
                      <button
                        type="button"
                        onClick={() => openEditModal(category)}
                        className="btn btn-ghost btn-sm text-white hover:bg-[#2B9C7F]/15 hover:text-[#7ee787]"
                      >
                        <FiEdit2 />
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(category)}
                        disabled={deletingId === category.id}
                        className="btn btn-ghost btn-sm text-red-400 hover:bg-red-400/10"
                      >
                        <FiTrash2 />
                        {deletingId === category.id ? "..." : "Delete"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black p-4 md:p-8">
          <div className="dashboard-panel relative my-auto w-full max-w-5xl p-6 md:p-8">
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-4 top-4 rounded-full p-2 text-text-muted hover:bg-white/5 hover:text-white"
              aria-label="Close"
            >
              <FiX className="text-xl" />
            </button>

            <h2 className="pr-10 text-xl font-semibold text-white">
              {editingId ? "Edit category" : "New category"}
            </h2>
            <p className="mt-1 text-sm text-text-muted">
              Pick an icon, add skills one by one — icons are suggested automatically.
            </p>

            <form onSubmit={handleCategorySubmit} className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-5">
                <label className="block">
                  <span className="mb-2 block text-sm text-text-muted">Category name *</span>
                  <input
                    className={fieldClass}
                    value={form.title}
                    onChange={(e) => setForm((prev) => ({ ...prev, title: e.target.value }))}
                    placeholder="Frontend, Backend, DevOps..."
                    required
                  />
                  {!editingId && form.title && (
                    <p className="mt-1 text-xs text-text-soft">
                      Will appear on site as: <span className="text-white">{form.title}</span>
                    </p>
                  )}
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm text-text-muted">Short description *</span>
                  <textarea
                    className={textareaClass}
                    value={form.description}
                    onChange={(e) => setForm((prev) => ({ ...prev, description: e.target.value }))}
                    placeholder="What kind of skills are in this group?"
                    required
                  />
                </label>

                <IconPicker
                  label="Category icon"
                  value={form.icon}
                  onChange={(value) => setForm((prev) => ({ ...prev, icon: value }))}
                  presets={categoryIconPresets}
                  hint="Choose the icon shown on the category tab"
                />

                <div>
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-medium text-white">Skills in this category</p>
                      <p className="text-xs text-text-soft">Type the name — icon picks automatically</p>
                    </div>
                    <button
                      type="button"
                      onClick={addSkillRow}
                      className="inline-flex items-center gap-2 rounded-full border border-[#2B9C7F]/30 bg-[#2B9C7F]/10 px-3 py-1.5 text-sm text-[#7ee787]"
                    >
                      <FiPlus />
                      Add skill
                    </button>
                  </div>

                  <div className="space-y-3">
                    {form.skills.map((skill, index) => (
                      <div
                        key={index}
                        className="rounded-2xl border border-white/8 bg-white/3 p-3"
                      >
                        <div className="grid gap-3 md:grid-cols-[1fr_auto]">
                          <label className="block">
                            <span className="mb-2 block text-xs text-text-muted">Skill name</span>
                            <input
                              className={fieldClass}
                              value={skill.name}
                              onChange={(e) => updateSkillRow(index, "name", e.target.value)}
                              placeholder="React, Docker, PostgreSQL..."
                            />
                          </label>
                          <div className="flex items-end gap-2">
                            <div className="min-w-[180px] flex-1">
                              <IconPicker
                                label="Icon"
                                value={skill.icon || suggestIconForSkill(skill.name) || "FaCode"}
                                onChange={(value) => updateSkillRow(index, "icon", value)}
                                compact
                              />
                            </div>
                            <button
                              type="button"
                              onClick={() => removeSkillRow(index)}
                              disabled={form.skills.length === 1}
                              className="btn btn-ghost btn-sm mb-1 text-red-400 hover:bg-red-400/10 disabled:opacity-40"
                              aria-label="Remove skill"
                            >
                              <FiTrash2 />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-6">
                  <label className="flex cursor-pointer items-center gap-2 text-sm text-white">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-success"
                      checked={form.isPublished}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, isPublished: e.target.checked }))
                      }
                    />
                    Show on website
                  </label>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button type="submit" disabled={submitting} className="dashboard-btn-primary px-8">
                    {submitting ? "Saving..." : editingId ? "Save changes" : "Create category"}
                  </button>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="rounded-full border border-white/10 px-6 py-2 text-sm text-text-muted hover:text-white"
                  >
                    Cancel
                  </button>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-white/8 bg-bg-elevated p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                  Live preview
                </p>
                <div className="mt-4 rounded-2xl border border-white/8 bg-white/3 p-4">
                  <div className="flex items-start gap-3">
                    <span className="rounded-xl border border-accent/20 bg-accent/10 p-3 text-accent">
                      {(() => {
                        const PreviewIcon = resolveIcon(previewCategory.icon);
                        return <PreviewIcon className="text-2xl" />;
                      })()}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {previewCategory.title || "Category name"}
                      </h3>
                      <p className="mt-1 text-sm text-text-muted">
                        {previewCategory.description || "Category description will appear here."}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {previewCategory.skills.length > 0 ? (
                      previewCategory.skills.map((skill) => {
                        const SkillIcon = resolveIcon(skill.icon || suggestIconForSkill(skill.name));
                        return (
                          <div
                            key={skill.name}
                            className="rounded-xl border border-white/8 bg-bg-elevated p-3"
                          >
                            <SkillIcon className="mb-2 text-lg text-accent" />
                            <p className="text-sm font-medium text-white">{skill.name}</p>
                          </div>
                        );
                      })
                    ) : (
                      <p className="col-span-2 text-sm text-text-soft">
                        Add skills to see preview cards here.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ManageSkills;
