import { motion } from "framer-motion";
import { pop, float, pulse } from "../motionPresets";

const IconDesign = () => (
  <>
    <motion.g {...pop}>
      <motion.g {...float(0, 10)}>
        <rect x="56" y="24" width="88" height="112" rx="16" fill="url(#g-surface)" stroke="rgba(255,255,255,0.14)" strokeWidth="3" />
        <rect x="88" y="36" width="24" height="8" rx="4" fill="#333" />
        <motion.rect x="68" y="56" width="64" height="20" rx="6" fill="url(#g-orange)" {...pulse(0)} />
        <motion.rect x="68" y="84" width="28" height="28" rx="6" fill="url(#g-mint)" {...pulse(0.3)} />
        <motion.rect x="104" y="84" width="28" height="28" rx="6" fill="url(#g-orange)" opacity="0.7" {...pulse(0.5)} />
        <rect x="68" y="120" width="64" height="8" rx="4" fill="#333" />
      </motion.g>
      <motion.g {...float(0.6, 7)}>
        <circle cx="164" cy="52" r="16" fill="url(#g-mint)" stroke="#fff" strokeWidth="2" />
        <circle cx="160" cy="48" r="3" fill="#111" />
        <circle cx="168" cy="48" r="3" fill="#111" />
        <path d="M158 58 q6 4 12 0" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" />
      </motion.g>
    </motion.g>
  </>
);

export default IconDesign;
