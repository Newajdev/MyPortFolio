import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GoProject, GoProjectSymlink } from "react-icons/go";
import { HiArrowRight } from "react-icons/hi";
import { MdOutlineMessage, MdOutlineFolderCopy, MdOutlineStar } from "react-icons/md";
import { fetchDashboardStats } from "../../services/adminService";
import { useAuth } from "../../provider/AuthProvider";
import DashboardPageHeader from "./DashboardPageHeader";

const StatCard = ({ label, value, icon: Icon, accent }) => (
  <div className="dashboard-stat-card">
    <div className="relative z-10 flex items-start justify-between gap-3">
      <div>
        <p className="text-sm text-text-muted">{label}</p>
        <p className={`mt-2 text-3xl font-semibold md:text-4xl ${accent ?? "text-white"}`}>
          {value ?? "—"}
        </p>
      </div>
      <div className="dashboard-action-card-icon !h-11 !w-11 !text-xl">
        <Icon />
      </div>
    </div>
  </div>
);

const ActionCard = ({ to, icon: Icon, title, description }) => (
  <Link to={to} className="dashboard-action-card group block">
    <div className="dashboard-action-card-icon">
      <Icon />
    </div>
    <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
    <p className="mt-2 text-sm leading-relaxed text-text-muted">{description}</p>
    <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-[#7ee787] transition group-hover:gap-2">
      Open <HiArrowRight />
    </span>
  </Link>
);

const DeshboardHome = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetchDashboardStats().then(setStats).catch(() => {});
  }, []);

  const greeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
  };

  return (
    <>
      <DashboardPageHeader
        eyebrow="Overview"
        title={`${greeting()}${user?.name ? `, ${user.name}` : ""}`}
        description="Manage projects, case studies, and client messages from your admin workspace."
      />

      <div className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Total Projects" value={stats?.projectCount} icon={MdOutlineFolderCopy} />
        <StatCard
          label="Featured"
          value={stats?.featuredCount}
          icon={MdOutlineStar}
          accent="text-[#7ee787]"
        />
        <StatCard label="Messages" value={stats?.messageCount} icon={MdOutlineMessage} />
        <StatCard
          label="Unread"
          value={stats?.unreadCount}
          icon={MdOutlineMessage}
          accent="text-[#2B9C7F]"
        />
      </div>

      <div>
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-text-soft">
          Quick Actions
        </h3>
        <div className="grid gap-4 md:grid-cols-3">
          <ActionCard
            to="/deshboard/addproject"
            icon={GoProjectSymlink}
            title="Add Project"
            description="Publish a new case study with overview, tech stack, and gallery."
          />
          <ActionCard
            to="/deshboard/manageprojects"
            icon={GoProject}
            title="Manage Projects"
            description="Edit, feature, or remove existing portfolio projects."
          />
          <ActionCard
            to="/deshboard/inbox"
            icon={MdOutlineMessage}
            title="Inbox"
            description="Read contact form messages and follow up with clients."
          />
        </div>
      </div>
    </>
  );
};

export default DeshboardHome;
