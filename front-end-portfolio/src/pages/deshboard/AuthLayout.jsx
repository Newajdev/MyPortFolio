import { Link } from "react-router-dom";
import Profile_Logo from "../../assets/Profile logo.png";

const AuthLayout = ({ title, subtitle, children, footer }) => {
  return (
    <div className="dashboard-auth-shell">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Link to="/" className="inline-flex flex-col items-center gap-3">
            <img
              src={Profile_Logo}
              alt="Newaj"
              className="h-16 w-16 rounded-full border-2 border-[#2B9C7F]/50 object-cover shadow-[0_0_40px_rgba(43,156,127,0.25)]"
            />
            <span className="Irish text-3xl text-white">Newaj</span>
          </Link>
          <h1 className="mt-6 text-2xl font-semibold text-white">{title}</h1>
          {subtitle && <p className="mt-2 text-sm text-text-muted">{subtitle}</p>}
        </div>

        <div className="dashboard-auth-card">{children}</div>

        {footer && <div className="mt-6 text-center text-sm text-text-muted">{footer}</div>}
      </div>
    </div>
  );
};

export default AuthLayout;
