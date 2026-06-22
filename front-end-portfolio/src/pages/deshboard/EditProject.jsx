import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchAdminProject, updateProject } from "../../services/adminService";
import ProjectForm, { emptyForm } from "./ProjectForm";
import { formToPayload, projectToForm } from "./projectFormUtils";
import DashboardPageHeader from "./DashboardPageHeader";

const EditProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState(emptyForm);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchAdminProject(id)
      .then((project) => setForm(projectToForm(project)))
      .catch((err) => toast.error(err.message ?? "Failed to load project"))
      .finally(() => setLoading(false));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await updateProject(id, formToPayload(form));
      toast.success("Project updated!");
      navigate("/deshboard/manageprojects");
    } catch (err) {
      toast.error(err.message ?? "Failed to update project");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <span className="loading loading-spinner loading-lg text-[#2B9C7F]" />
      </div>
    );
  }

  return (
    <>
      <DashboardPageHeader
        eyebrow="Projects"
        title="Edit Project"
        description="Update project details and case study content."
        action={
          <Link
            to="/deshboard/manageprojects"
            className="rounded-full border border-border px-4 py-2 text-sm text-text-muted transition hover:border-[#2B9C7F]/40 hover:text-white"
          >
            Back to list
          </Link>
        }
      />
      <div className="dashboard-panel p-6 md:p-8">
        <ProjectForm
          form={form}
          onChange={setForm}
          onSubmit={handleSubmit}
          submitting={submitting}
          submitLabel="Save Changes"
        />
      </div>
    </>
  );
};

export default EditProject;
