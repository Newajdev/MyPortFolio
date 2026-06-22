import { useLocation } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { dashboardNavItems } from "./DashboardSidebar";

const routeTitles = dashboardNavItems.reduce(
  (acc, item) => ({ ...acc, [item.to]: item.label }),
  { "/deshboard/edit": "Edit Project" }
);

const DashboardTopbar = ({ onMenuOpen }) => {
  const { pathname } = useLocation();

  const title =
    pathname.startsWith("/deshboard/edit")
      ? "Edit Project"
      : routeTitles[pathname] ?? "Dashboard";

  return (
    <header className="dashboard-topbar">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onMenuOpen}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-white lg:hidden"
          aria-label="Open menu"
        >
          <FiMenu className="text-xl" />
        </button>
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-text-soft">
            Admin / {title}
          </p>
          <h1 className="text-lg font-semibold text-white md:text-xl">{title}</h1>
        </div>
      </div>

      <div className="hidden items-center gap-2 rounded-full border border-[#2B9C7F]/30 bg-[#2B9C7F]/10 px-3 py-1.5 text-xs font-medium text-[#7ee787] sm:flex">
        <span className="h-2 w-2 animate-pulse rounded-full bg-[#7ee787]" />
        Live CMS
      </div>
    </header>
  );
};

export default DashboardTopbar;
