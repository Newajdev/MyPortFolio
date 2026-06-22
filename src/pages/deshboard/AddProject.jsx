import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createProject } from "../../services/adminService";
import ProjectForm, { emptyForm } from "./ProjectForm";
import { formToPayload } from "./projectFormUtils";
import DashboardPageHeader from "./DashboardPageHeader";

const AddProject = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState(emptyForm);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await createProject(formToPayload(form));
      toast.success("Project added successfully!");
      navigate("/deshboard/manageprojects");
    } catch (err) {
      toast.error(err.message ?? "Failed to add project");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <DashboardPageHeader
        eyebrow="Projects"
        title="Add New Project"
        description="Fill in the details to publish a new portfolio case study."
      />
      <div className="dashboard-panel p-6 md:p-8">
        <ProjectForm
          form={form}
          onChange={setForm}
          onSubmit={handleSubmit}
          submitting={submitting}
          submitLabel="Add Project"
        />
      </div>
    </>
  );
};

export default AddProject;
