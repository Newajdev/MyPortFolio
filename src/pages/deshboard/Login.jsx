import { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../provider/AuthProvider";
import AuthLayout from "./AuthLayout";

const Login = () => {
  const { login, isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  const from = location.state?.from ?? "/deshboard/manageprojects";

  if (!loading && isAuthenticated) {
    return <Navigate to={from} replace />;
  }

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await login(form);
      toast.success("Welcome back!");
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err.message ?? "Login failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AuthLayout
      title="Admin Login"
      subtitle="Sign in to manage your portfolio content"
      footer={
        <>
          No account yet?{" "}
          <Link to="/deshboard/register" className="text-[#2B9C7F] hover:text-lime-300">
            Create admin account
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-5">
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
            placeholder="••••••••"
          />
        </label>

        <button
          type="submit"
          disabled={submitting}
          className="dashboard-btn-primary w-full"
        >
          {submitting ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </AuthLayout>
  );
};

export default Login;
