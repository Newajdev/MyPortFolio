import { Link, useLocation, useNavigate } from "react-router-dom";
import { scrollToSection } from "../../utils/scrollToSection";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300";

const variants = {
  primary:
    "bg-accent text-black hover:shadow-[0_0_30px_var(--color-accent-glow)] hover:-translate-y-0.5",
  secondary:
    "border border-white/15 bg-white/5 text-white hover:border-accent/50 hover:bg-accent/10",
  ghost: "text-text-muted hover:text-accent px-0 py-0",
};

const Button = ({ children, variant = "primary", href, to, className = "", ...props }) => {
  const classes = `${base} ${variants[variant]} ${className}`;
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleSectionClick = (event) => {
    if (!href?.includes("#")) return;

    const hash = href.split("#")[1];
    if (!hash) return;

    event.preventDefault();

    if (pathname === "/") {
      scrollToSection(hash);
      window.history.replaceState(null, "", `/#${hash}`);
      return;
    }

    navigate(`/#${hash}`);
  };

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    const isExternal = href.startsWith("http");
    const isSectionLink = href.startsWith("/#");

    return (
      <a
        href={href}
        className={classes}
        {...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}
        {...(isSectionLink ? { onClick: handleSectionClick } : {})}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={props.type || "button"} className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
