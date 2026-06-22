import { motion } from "framer-motion";
import { pop, float, pulse } from "../motionPresets";

const IconDevelopment = () => (
  <>
    <motion.g {...pop}>
      <motion.g {...float(0, 9)}>
        <rect x="40" y="48" width="120" height="72" rx="12" fill="url(#g-surface)" stroke="rgba(255,255,255,0.14)" strokeWidth="3" />
        <rect x="52" y="60" width="96" height="48" rx="6" fill="#0a0a0a" stroke="#444" strokeWidth="2" />
        <motion.text
          x="100"
          y="92"
          textAnchor="middle"
          fill="url(#g-orange)"
          fontSize="22"
          fontWeight="bold"
          fontFamily="monospace"
          {...float(0, 3)}
        >
          {"</>"}
        </motion.text>
        <rect x="68" y="128" width="64" height="8" rx="4" fill="#333" />
      </motion.g>
      <motion.g {...float(0.5, 14)} {...pulse(0.3)}>
        <rect x="148" y="32" width="32" height="32" rx="8" fill="url(#g-mint)" stroke="#fff" strokeWidth="2" />
        <text x="164" y="54" textAnchor="middle" fill="#111" fontSize="18" fontWeight="bold">
          +
        </text>
      </motion.g>
    </motion.g>
  </>
);

export default IconDevelopment;
