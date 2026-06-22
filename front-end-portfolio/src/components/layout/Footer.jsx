import { useLocation, useNavigate } from "react-router-dom";
import Container from "../Container";
import { useContent } from "../../provider/ContentProvider";
import { scrollToSection } from "../../utils/scrollToSection";
import { getSocialIcon } from "../../utils/resolveIcon";

const Footer = () => {
  const { content } = useContent();
  const { navLinks, siteSettings, socialLinks } = content;
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleSectionNav = (event, href) => {
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

  return (
    <footer className="border-t border-white/5 bg-bg-elevated py-16">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="font-display text-2xl font-bold text-white">
              {siteSettings.brand}
              <span className="text-accent">.</span>
            </h3>
            <p className="mt-4 max-w-sm text-sm leading-7 text-text-muted">
              {siteSettings.tagline}
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-accent">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith("/#") ? (
                    <a
                      href={link.href}
                      className="text-sm text-text-muted transition hover:text-white"
                      onClick={(event) => handleSectionNav(event, link.href)}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <a href={link.href} className="text-sm text-text-muted transition hover:text-white">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-accent">
              Connect
            </h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ platform, url, label }) => {
                const Icon = getSocialIcon(platform);
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="rounded-full border border-white/10 p-3 text-lg text-text-muted transition hover:border-accent/40 hover:text-accent"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-sm text-text-soft md:flex-row">
          <p>© {new Date().getFullYear()} {siteSettings.name}. All rights reserved.</p>
          <p>Engineered for production. Designed for impact.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
