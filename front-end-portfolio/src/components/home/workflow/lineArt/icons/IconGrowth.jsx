import { motion } from "framer-motion";
import { pop, float, pulse } from "../motionPresets";

const IconGrowth = () => (
  <>
    <motion.g {...pop}>
      <motion.g {...float(0, 8)}>
        <rect x="36" y="108" width="128" height="8" rx="4" fill="#333" />
        <rect x="52" y="88" width="16" height="20" rx="4" fill="#444" />
        <rect x="80" y="68" width="16" height="40" rx="4" fill="url(#g-orange)" />
        <rect x="108" y="48" width="16" height="60" rx="4" fill="url(#g-mint)" />
        <motion.path
          d="M52 88 l36-36 l28 12 l24-28"
          fill="none"
          stroke="#7ee787"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ pathLength: [0.5, 1, 0.5] }}
          transition={{ duration: 2.2, repeat: Infinity }}
        />
        <motion.polygon
          points="136,36 148,24 160,36 148,44"
          fill="url(#g-orange)"
          {...pulse(0.2)}
        />
      </motion.g>
      <motion.g
        {...float(0.5, 14)}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        style={{ originX: "168px", originY: "48px" }}
      >
        <circle cx="168" cy="48" r="14" fill="none" stroke="#ff9f66" strokeWidth="2" strokeDasharray="4 6" />
        <text x="168" y="54" textAnchor="middle" fill="url(#g-mint)" fontSize="16">
          ↻
        </text>
      </motion.g>
    </motion.g>
    <motion.circle cx="28" cy="52" r="5" fill="url(#g-mint)" {...pulse(0)} />
    <motion.circle cx="180" cy="100" r="4" fill="url(#g-orange)" {...pulse(0.5)} />
  </>
);

export default IconGrowth;
