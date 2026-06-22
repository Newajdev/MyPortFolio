import { useRef, useState, useCallback } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { getLenisInstance } from "../../../utils/scrollToSection";
import { SCROLL_PER_STEP } from "./constants";

export const useWorkflowScroll = (total) => {
  const containerRef = useRef(null);
  const sectionHeight = 100 + (total - 1) * SCROLL_PER_STEP;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [activeStep, setActiveStep] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const next = Math.min(Math.floor(progress * total), total - 1);
    setActiveStep(next);
  });

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const scrollToStep = useCallback(
    (index) => {
      const section = containerRef.current;
      if (!section) return;

      const progress = total <= 1 ? 0 : index / (total - 1);
      const target =
        section.offsetTop +
        progress * (section.offsetHeight - window.innerHeight);
      const lenis = getLenisInstance();

      if (lenis) {
        lenis.scrollTo(target, { duration: 1.1 });
      } else {
        window.scrollTo({ top: target, behavior: "smooth" });
      }
    },
    [total],
  );

  return {
    containerRef,
    sectionHeight,
    activeStep,
    progressWidth,
    scrollToStep,
  };
};
