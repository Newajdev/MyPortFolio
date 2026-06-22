import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Container from "../Container";
import HireMeButton from "../ui/HireMeButton";
import { useContent } from "../../provider/ContentProvider";
import { scrollToSection } from "../../utils/scrollToSection";

const sectionLinkClass =
  "text-sm font-medium text-text-muted transition hover:text-white";

const Navbar = () => {
  const { content } = useContent();
  const { navLinks, siteSettings } = content;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSectionNav = (event, href) => {
    const hash = href.split("#")[1];
    if (!hash) return;

    event.preventDefault();
    setOpen(false);

    if (pathname === "/") {
      scrollToSection(hash);
      window.history.replaceState(null, "", `/#${hash}`);
      return;
    }

    navigate(`/#${hash}`);
  };

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-300 ${
      isActive ? "text-accent" : "text-text-muted hover:text-white"
    }`;

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-nav py-3" : "bg-transparent py-5"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Container className="flex items-center justify-between gap-6">
        <Link to="/" className="font-display text-2xl font-bold tracking-tight text-white">
          {siteSettings.brand}
          <span className="text-accent">.</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) =>
            link.href.startsWith("/#") ? (
              <a
                key={link.href}
                href={link.href}
                className={sectionLinkClass}
                onClick={(event) => handleSectionNav(event, link.href)}
              >
                {link.label}
              </a>
            ) : (
              <NavLink key={link.href} to={link.href} className={linkClass}>
                {link.label}
              </NavLink>
            )
          )}
        </nav>

        <div className="hidden lg:block">
          <HireMeButton />
        </div>

        <button
          type="button"
          className="rounded-lg border border-white/10 p-2 text-white lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className="block h-0.5 w-6 bg-white" />
          <span className="mt-1.5 block h-0.5 w-6 bg-white" />
          <span className="mt-1.5 block h-0.5 w-4 bg-accent" />
        </button>
      </Container>

      {open && (
        <div className="glass-nav border-t border-white/5 lg:hidden">
          <Container className="flex flex-col gap-4 py-6">
            {navLinks.map((link) =>
              link.href.startsWith("/#") ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-base text-text-muted"
                  onClick={(event) => handleSectionNav(event, link.href)}
                >
                  {link.label}
                </a>
              ) : (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className="text-base text-text-muted"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </NavLink>
              )
            )}
            <HireMeButton className="w-full" />
          </Container>
        </div>
      )}
    </motion.header>
  );
};

export default Navbar;
