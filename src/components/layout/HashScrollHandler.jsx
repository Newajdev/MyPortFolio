import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToSection } from "../../utils/scrollToSection";

const HashScrollHandler = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (pathname !== "/" || !hash) return;

    const id = hash.slice(1);
    let attempts = 0;
    let frame;

    const tryScroll = () => {
      const element = document.getElementById(id);
      if (element || attempts >= 20) {
        scrollToSection(hash);
        return;
      }

      attempts += 1;
      frame = requestAnimationFrame(tryScroll);
    };

    frame = requestAnimationFrame(tryScroll);

    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
};

export default HashScrollHandler;
