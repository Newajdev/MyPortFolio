import { motion } from "framer-motion";
import PremiumDefs from "./PremiumDefs";

const PremiumIconWrap = ({ children, step }) => (
  <motion.div
    key={step}
    className="relative flex w-full items-center justify-center"
    initial={{ opacity: 0, scale: 0.96 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
  >
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <div className="h-28 w-28 rounded-full bg-gradient-to-br from-accent/20 via-transparent to-accent-mint/15 blur-3xl md:h-32 md:w-32" />
    </div>
    <svg
      viewBox="0 0 200 160"
      className="relative h-28 w-full max-w-[320px] md:h-32 lg:h-36"
      aria-hidden="true"
    >
      <PremiumDefs />
      {children}
    </svg>
  </motion.div>
);

export default PremiumIconWrap;
