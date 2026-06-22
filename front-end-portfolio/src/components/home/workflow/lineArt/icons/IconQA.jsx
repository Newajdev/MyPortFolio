import { motion } from "framer-motion";
import { pop, float } from "../motionPresets";

const IconQA = () => (
  <>
    <motion.g {...pop}>
      <motion.g {...float(0, 8)}>
        <path d="M68 36 h64 l16 16 v56 h-80 z" fill="url(#g-surface)" stroke="#ff9f66" strokeWidth="3" strokeLinejoin="round" />
        <motion.path
          d="M84 72 l16 16 l32-32"
          fill="none"
          stroke="#7ee787"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </motion.g>
      <motion.g
        {...float(0.4, 12)}
        animate={{ x: [0, 4, 0], y: [0, -6, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ellipse cx="164" cy="88" rx="14" ry="10" fill="url(#g-orange)" stroke="#fff" strokeWidth="2" />
        <line x1="154" y1="82" x2="148" y2="74" stroke="#ff9f66" strokeWidth="2" strokeLinecap="round" />
        <line x1="174" y1="82" x2="180" y2="74" stroke="#ff9f66" strokeWidth="2" strokeLinecap="round" />
        <circle cx="160" cy="86" r="2" fill="#111" />
        <circle cx="168" cy="86" r="2" fill="#111" />
        <line x1="158" y1="94" x2="170" y2="94" stroke="#111" strokeWidth="2" strokeLinecap="round" />
      </motion.g>
    </motion.g>
  </>
);

export default IconQA;
