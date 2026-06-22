import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../provider/AuthProvider";
import AuthLayout from "./AuthLayout";

const Register = () => {
  const { register, isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });

  if (!loading && isAuthenticated) {
    return <Navigate to="/deshboard/manageprojects" replace />;
  }

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setSubmitting(true);
    try {
      await register({ name: form.name, email: form.email, password: form.password });
      toast.success("Admin account created!");
      navigate("/deshboard/manageprojects", { replace: true });
    } catch (err) {
      toast.error(err.message ?? "Registration failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AuthLayout
      title="Create Admin Account"
      subtitle="First-time setup — only works when no admin exists yet"
      footer={
        <>
          Already have an account?{" "}
          <Link to="/deshboard/login" className="text-[#2B9C7F] hover:text-lime-300">
            Sign in
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <label className="block">
          <span className="mb-2 block text-sm text-text-muted">Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="dashboard-input"
            placeholder="Your name"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm text-text-muted">Email</span>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            className="dashboard-input"
            placeholder="you@example.com"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm text-text-muted">Password</span>
          <input
            type="password"
            name="password"
            required
            minLength={6}
            value={form.password}
            onChange={handleChange}
            className="dashboard-input"
            placeholder="At least 6 characters"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm text-text-muted">Confirm Password</span>
          <input
            type="password"
            name="confirmPassword"
            required
            minLength={6}
            value={form.confirmPassword}
            onChange={handleChange}
            className="dashboard-input"
            placeholder="Repeat password"
          />
        </label>

        <button
          type="submit"
          disabled={submitting}
          className="dashboard-btn-primary w-full"
        >
          {submitting ? "Creating account..." : "Create Account"}
        </button>
      </form>
    </AuthLayout>
  );
};

export default Register;
