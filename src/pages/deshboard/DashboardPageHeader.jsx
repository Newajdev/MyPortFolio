const DashboardPageHeader = ({ eyebrow = "Admin", title, description, action }) => {
  return (
    <div className="dashboard-page-header flex flex-wrap items-end justify-between gap-4">
      <div>
        {eyebrow && <span className="dashboard-eyebrow">{eyebrow}</span>}
        <h2 className="mt-4 text-2xl font-semibold text-white md:text-3xl">{title}</h2>
        {description && (
          <p className="mt-2 max-w-2xl text-sm text-text-muted md:text-base">{description}</p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
};

export default DashboardPageHeader;
