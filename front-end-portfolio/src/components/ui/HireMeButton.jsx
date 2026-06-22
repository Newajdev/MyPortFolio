import { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";
import { scrollToSection } from "../../utils/scrollToSection";

const MAGNETIC_RANGE = 140;
const MAGNETIC_STRENGTH = 0.38;

const HireMeButton = ({ href = "/#contact", className = "" }) => {
  const wrapperRef = useRef(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const fullWidth = className.includes("w-full");

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 22, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 260, damping: 22, mass: 0.6 });

  const handleMouseMove = (event) => {
    const el = wrapperRef.current;
    if (!el || window.matchMedia("(max-width: 1024px)").matches) return;

    const rect = el.getBoundingClientRect();
    const offsetX = event.clientX - (rect.left + rect.width / 2);
    const offsetY = event.clientY - (rect.top + rect.height / 2);
    const distance = Math.hypot(offsetX, offsetY);

    if (distance < MAGNETIC_RANGE) {
      const pull = 1 - distance / MAGNETIC_RANGE;
      x.set(offsetX * MAGNETIC_STRENGTH * pull);
      y.set(offsetY * MAGNETIC_STRENGTH * pull);
      return;
    }

    x.set(0);
    y.set(0);
  };

  const resetMagnet = () => {
    x.set(0);
    y.set(0);
  };

  const handleClick = (event) => {
    if (!href.includes("#")) return;

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

  const isExternal = href.startsWith("http");
  const isSectionLink = href.startsWith("/#");
  const linkClasses = `hire-me-btn group ${className}`;

  const inner = (
    <>
      <span className="hire-me-beam" aria-hidden="true" />
      <span className="hire-me-inner">
        <span className="relative z-10">Hire Me</span>
        <span className="hire-me-arrow" aria-hidden="true">
          <HiArrowRight className="h-4 w-4" />
        </span>
      </span>
    </>
  );

  return (
    <div
      ref={wrapperRef}
      className={fullWidth ? "block w-full" : "inline-block"}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetMagnet}
    >
      <motion.div style={{ x: springX, y: springY }} className={fullWidth ? "w-full" : undefined}>
        {isExternal ? (
          <a href={href} className={linkClasses} target="_blank" rel="noreferrer">
            {inner}
          </a>
        ) : (
          <a
            href={href}
            className={linkClasses}
            {...(isSectionLink ? { onClick: handleClick } : {})}
          >
            {inner}
          </a>
        )}
      </motion.div>
    </div>
  );
};

export default HireMeButton;
