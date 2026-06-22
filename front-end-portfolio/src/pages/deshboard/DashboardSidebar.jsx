import { NavLink } from "react-router-dom";
import { GoProject, GoProjectSymlink } from "react-icons/go";
import { HiOutlineExternalLink } from "react-icons/hi";
import {
  MdLogout,
  MdOutlineMessage,
  MdOutlineSettings,
  MdOutlineShare,
  MdSpaceDashboard,
  MdOutlinePsychology,
} from "react-icons/md";
import Profile_Logo from "../../assets/Profile logo.png";
import { useAuth } from "../../provider/AuthProvider";

export const dashboardNavItems = [
  { to: "/deshboard", label: "Dashboard", icon: MdSpaceDashboard, end: true },
  { to: "/deshboard/content", label: "Site Content", icon: MdOutlineSettings },
  { to: "/deshboard/skills", label: "Skills", icon: MdOutlinePsychology },
  { to: "/deshboard/social", label: "Social Links", icon: MdOutlineShare },
  { to: "/deshboard/addproject", label: "Add Project", icon: GoProjectSymlink },
  { to: "/deshboard/manageprojects", label: "Manage Projects", icon: GoProject },
  { to: "/deshboard/inbox", label: "Inbox", icon: MdOutlineMessage },
];

const DashboardSidebar = ({ open, onClose, onLogout }) => {
  const { user } = useAuth();

  return (
    <>
      {open && (
        <button
          type="button"
          className="dashboard-overlay lg:hidden"
          onClick={onClose}
          aria-label="Close menu"
        />
      )}

      <aside
        className={`dashboard-sidebar ${open ? "dashboard-sidebar-open" : "dashboard-sidebar-mobile"}`}
      >
        <div className="dashboard-sidebar-brand">
          <img src={Profile_Logo} alt="Newaj" />
          <div>
            <p className="Irish text-2xl leading-none text-white">Newaj</p>
            <span className="mt-1 inline-block rounded-full bg-[#2B9C7F]/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#7ee787]">
              Admin Panel
            </span>
          </div>
        </div>

        <nav className="mt-2 flex-1 px-1">
          <p className="mb-2 px-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-text-soft">
            Menu
          </p>
          <ul>
            {dashboardNavItems.map(({ to, label, icon: Icon, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `dashboard-nav-link${isActive ? " active" : ""}`
                  }
                >
                  <Icon />
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <p className="mb-2 mt-6 px-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-text-soft">
            Quick Link
          </p>
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="dashboard-nav-link"
          >
            <HiOutlineExternalLink />
            View Portfolio
          </a>
        </nav>

        <div className="border-t border-white/8 p-4">
          <div className="mb-3 rounded-2xl border border-white/8 bg-white/3 p-3">
            <p className="truncate text-sm font-medium text-white">
              {user?.name || "Admin"}
            </p>
            <p className="truncate text-xs text-text-soft">{user?.email}</p>
          </div>
          <button
            type="button"
            onClick={onLogout}
            className="dashboard-nav-link w-full !mx-0 text-red-300 hover:!bg-red-500/10 hover:!text-red-200"
          >
            <MdLogout />
            Sign Out
          </button>
        </div>
      </aside>
    </>
  );
};

export default DashboardSidebar;
