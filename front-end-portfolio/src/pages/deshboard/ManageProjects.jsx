import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { deleteProject, fetchAllProjects } from "../../services/adminService";
import DashboardPageHeader from "./DashboardPageHeader";

const ManageProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);

  const loadProjects = () => {
    setLoading(true);
    fetchAllProjects()
      .then(setProjects)
      .catch((err) => toast.error(err.message ?? "Failed to load projects"))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const handleDelete = async (project) => {
    if (!window.confirm(`Delete "${project.name}"? This cannot be undone.`)) return;

    setDeletingId(project.id);
    try {
      await deleteProject(project.id);
      toast.success("Project deleted");
      setProjects((prev) => prev.filter((item) => item.id !== project.id));
    } catch (err) {
      toast.error(err.message ?? "Failed to delete project");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <>
      <DashboardPageHeader
        eyebrow="Projects"
        title="Manage Projects"
        description="View, edit, or remove portfolio projects."
        action={
          <Link to="/deshboard/addproject" className="dashboard-btn-primary">
            + Add Project
          </Link>
        }
      />

      {loading ? (
        <div className="flex min-h-[30vh] items-center justify-center">
          <span className="loading loading-spinner loading-lg text-[#2B9C7F]" />
        </div>
      ) : projects.length === 0 ? (
        <div className="dashboard-panel p-10 text-center">
          <p className="text-text-muted">No projects yet. Add your first project to get started.</p>
          <Link to="/deshboard/addproject" className="dashboard-btn-primary mt-6">
            Add Project
          </Link>
        </div>
      ) : (
        <div className="dashboard-panel overflow-hidden">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr className="border-white/8 text-text-muted">
                  <th className="bg-transparent">Project</th>
                  <th className="bg-transparent">Category</th>
                  <th className="bg-transparent">Status</th>
                  <th className="bg-transparent">Featured</th>
                  <th className="bg-transparent text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr key={project.id} className="border-white/8 hover:bg-white/3">
                    <td>
                      <div className="flex items-center gap-3">
                        <img
                          src={project.thumbnail}
                          alt=""
                          className="h-12 w-16 rounded-xl border border-white/8 object-cover"
                        />
                        <div>
                          <p className="font-medium text-white">{project.name}</p>
                          <p className="text-xs text-text-soft">{project.slug}</p>
                        </div>
                      </div>
                    </td>
                    <td className="text-text-muted">{project.category}</td>
                    <td>
                      <span
                        className={`badge badge-sm ${
                          project.isPublished ? "badge-success" : "badge-ghost"
                        }`}
                      >
                        {project.isPublished ? "Published" : "Draft"}
                      </span>
                    </td>
                    <td className="text-text-muted">{project.featured ? "Yes" : "No"}</td>
                    <td>
                      <div className="flex justify-end gap-2">
                        <Link
                          to={`/deshboard/edit/${project.id}`}
                          className="btn btn-ghost btn-sm text-white hover:bg-[#2B9C7F]/15 hover:text-[#7ee787]"
                        >
                          <FiEdit2 />
                          Edit
                        </Link>
                        <button
                          type="button"
                          onClick={() => handleDelete(project)}
                          disabled={deletingId === project.id}
                          className="btn btn-ghost btn-sm text-red-400 hover:bg-red-400/10"
                        >
                          <FiTrash2 />
                          {deletingId === project.id ? "..." : "Delete"}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default ManageProjects;
