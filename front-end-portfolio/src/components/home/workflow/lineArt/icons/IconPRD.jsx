import { motion } from "framer-motion";
import { pop, float } from "../motionPresets";

const IconPRD = () => (
  <>
    <motion.g {...pop}>
      <motion.g {...float(0, 8)}>
        <path d="M44 28 h80 l20 20 v84 h-100 z" fill="url(#g-surface)" stroke="rgba(255,255,255,0.14)" strokeWidth="3" strokeLinejoin="round" />
        <path d="M124 28 v20 h20" fill="url(#g-orange)" stroke="#ff9f66" strokeWidth="2" />
        <rect x="58" y="68" width="56" height="8" rx="4" fill="url(#g-orange)" />
        <rect x="58" y="84" width="44" height="6" rx="3" fill="#555" />
        <rect x="58" y="98" width="50" height="6" rx="3" fill="#555" />
        <motion.path
          d="M58 118 h20 l10 10 l10-10 h20"
          fill="none"
          stroke="#7ee787"
          strokeWidth="3"
          strokeLinejoin="round"
          animate={{ pathLength: [0.4, 1, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
      </motion.g>
      <motion.g {...float(0.4, 7)}>
        <rect x="136" y="56" width="12" height="56" rx="4" fill="url(#g-orange)" transform="rotate(25 142 84)" />
        <polygon points="128,52 152,44 148,56" fill="url(#g-mint)" transform="rotate(25 142 84)" />
      </motion.g>
    </motion.g>
  </>
);

export default IconPRD;
