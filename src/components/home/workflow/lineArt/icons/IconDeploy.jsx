import { motion } from "framer-motion";
import { pop, float } from "../motionPresets";

const IconDeploy = () => (
  <>
    <motion.g {...pop}>
      <motion.g {...float(0, 10)}>
        <path d="M100 28 l28 56 h-56 z" fill="url(#g-orange)" stroke="#fff" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="100" cy="56" r="10" fill="#0a0a0a" stroke="#7ee787" strokeWidth="2" />
        <rect x="88" y="84" width="24" height="16" rx="4" fill="url(#g-surface)" stroke="rgba(255,255,255,0.14)" strokeWidth="2" />
        <motion.g
          animate={{ scaleY: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          style={{ originX: "100px", originY: "108px" }}
        >
          <ellipse cx="88" cy="108" rx="8" ry="14" fill="url(#g-mint)" opacity="0.8" />
          <ellipse cx="100" cy="112" rx="8" ry="18" fill="url(#g-orange)" />
          <ellipse cx="112" cy="108" rx="8" ry="14" fill="url(#g-mint)" opacity="0.8" />
        </motion.g>
      </motion.g>
      <motion.g {...float(0.6, 8)}>
        <rect x="32" y="100" width="136" height="8" rx="4" fill="#333" />
        <circle cx="52" cy="104" r="6" fill="url(#g-orange)" />
        <circle cx="100" cy="104" r="6" fill="url(#g-mint)" />
        <circle cx="148" cy="104" r="6" fill="url(#g-orange)" />
      </motion.g>
    </motion.g>
  </>
);

export default IconDeploy;
