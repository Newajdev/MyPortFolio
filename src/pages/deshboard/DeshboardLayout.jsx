import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashboardSidebar from "./DashboardSidebar";
import DashboardTopbar from "./DashboardTopbar";
import { useAuth } from "../../provider/AuthProvider";

const authPaths = ["/deshboard/login", "/deshboard/register"];

const DashboardBackground = () => (
  <div className="dashboard-bg" aria-hidden="true">
    <div className="dashboard-bg-grid" />
    <div className="dashboard-orb dashboard-orb-mint" />
    <div className="dashboard-orb dashboard-orb-orange" />
  </div>
);

const DeshboardLayout = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, loading, logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isAuthPage = authPaths.includes(pathname);
  const showShell = !loading && isAuthenticated && !isAuthPage;

  const handleLogout = () => {
    logout();
    navigate("/deshboard/login");
  };

  if (isAuthPage) {
    return (
      <div className="dashboard-shell">
        <DashboardBackground />
        <Outlet />
        <ToastContainer position="bottom-right" theme="dark" />
      </div>
    );
  }

  if (loading) {
    return (
      <div className="dashboard-shell flex min-h-screen items-center justify-center">
        <DashboardBackground />
        <span className="loading loading-spinner loading-lg text-[#2B9C7F]" />
      </div>
    );
  }

  return (
    <div className="dashboard-shell">
      <DashboardBackground />

      {showShell && (
        <DashboardSidebar
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          onLogout={handleLogout}
        />
      )}

      <div className="dashboard-main">
        {showShell && <DashboardTopbar onMenuOpen={() => setSidebarOpen(true)} />}
        <div className="dashboard-content">
          <Outlet />
        </div>
      </div>

      <ToastContainer position="bottom-right" theme="dark" />
    </div>
  );
};

export default DeshboardLayout;
