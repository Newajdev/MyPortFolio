import emptyForm from "./projectFormUtils";

const fieldClass = "dashboard-input";
const textareaClass = "dashboard-input min-h-24 resize-y";

const ProjectForm = ({ form, onChange, onSubmit, submitting, submitLabel }) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    onChange((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <section className="space-y-4">
        <h2 className="border-b border-white/8 pb-2 text-lg font-semibold text-white">Basic Info</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="block md:col-span-2">
            <span className="mb-2 block text-sm text-text-muted">Project Name *</span>
            <input name="name" required value={form.name} onChange={handleChange} className={fieldClass} />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm text-text-muted">Slug</span>
            <input name="slug" value={form.slug} onChange={handleChange} className={fieldClass} placeholder="auto-generated from name" />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm text-text-muted">Category *</span>
            <input name="category" required value={form.category} onChange={handleChange} className={fieldClass} placeholder="React, SaaS, AI..." />
          </label>
          <label className="block md:col-span-2">
            <span className="mb-2 block text-sm text-text-muted">Short Description *</span>
            <textarea name="shortDescription" required value={form.shortDescription} onChange={handleChange} className={textareaClass} />
          </label>
          <label className="block md:col-span-2">
            <span className="mb-2 block text-sm text-text-muted">Thumbnail URL *</span>
            <input name="thumbnail" type="url" required value={form.thumbnail} onChange={handleChange} className={fieldClass} />
          </label>
          <label className="block md:col-span-2">
            <span className="mb-2 block text-sm text-text-muted">Tech Stack (comma separated) *</span>
            <input name="techStack" required value={form.techStack} onChange={handleChange} className={fieldClass} placeholder="React, Node.js, PostgreSQL" />
          </label>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-white">Links</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm text-text-muted">Live URL</span>
            <input name="liveUrl" type="url" value={form.liveUrl} onChange={handleChange} className={fieldClass} />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm text-text-muted">GitHub URL</span>
            <input name="githubUrl" type="url" value={form.githubUrl} onChange={handleChange} className={fieldClass} />
          </label>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-white">Case Study</h2>
        <label className="block">
          <span className="mb-2 block text-sm text-text-muted">Overview *</span>
          <textarea name="overview" required value={form.overview} onChange={handleChange} className={textareaClass} />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm text-text-muted">Case Study Summary</span>
          <textarea name="caseStudy" value={form.caseStudy} onChange={handleChange} className={textareaClass} />
        </label>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm text-text-muted">Problem</span>
            <textarea name="problem" value={form.problem} onChange={handleChange} className={textareaClass} />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm text-text-muted">Solution</span>
            <textarea name="solution" value={form.solution} onChange={handleChange} className={textareaClass} />
          </label>
        </div>
        <label className="block">
          <span className="mb-2 block text-sm text-text-muted">Architecture</span>
          <textarea name="architecture" value={form.architecture} onChange={handleChange} className={textareaClass} />
        </label>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-white">Details (one item per line)</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm text-text-muted">Key Features</span>
            <textarea name="keyFeatures" value={form.keyFeatures} onChange={handleChange} className={textareaClass} />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm text-text-muted">Challenges</span>
            <textarea name="challenges" value={form.challenges} onChange={handleChange} className={textareaClass} />
          </label>
          <label className="block md:col-span-2">
            <span className="mb-2 block text-sm text-text-muted">Results</span>
            <textarea name="results" value={form.results} onChange={handleChange} className={textareaClass} />
          </label>
          <label className="block md:col-span-2">
            <span className="mb-2 block text-sm text-text-muted">Gallery URLs</span>
            <textarea name="gallery" value={form.gallery} onChange={handleChange} className={textareaClass} placeholder="One image URL per line" />
          </label>
        </div>
      </section>

      <section className="flex flex-wrap items-center gap-6">
        <label className="flex cursor-pointer items-center gap-2 text-sm text-white">
          <input type="checkbox" name="featured" checked={form.featured} onChange={handleChange} className="checkbox checkbox-success" />
          Featured on homepage
        </label>
        <label className="flex cursor-pointer items-center gap-2 text-sm text-white">
          <input type="checkbox" name="isPublished" checked={form.isPublished} onChange={handleChange} className="checkbox checkbox-success" />
          Published
        </label>
        <label className="flex items-center gap-2 text-sm text-white">
          Sort order
          <input type="number" name="sortOrder" value={form.sortOrder} onChange={handleChange} className="input input-bordered w-24 bg-surface text-white" />
        </label>
      </section>

      <button
        type="submit"
        disabled={submitting}
        className="dashboard-btn-primary px-8"
      >
        {submitting ? "Saving..." : submitLabel}
      </button>
    </form>
  );
};

export { emptyForm };
export default ProjectForm;
