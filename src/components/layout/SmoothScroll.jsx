import { useEffect } from "react";
import Lenis from "lenis";
import { setLenisInstance } from "../../utils/scrollToSection";

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
    });

    setLenisInstance(lenis);

    let frame;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      setLenisInstance(null);
    };
  }, []);

  return children;
};

export default SmoothScroll;
