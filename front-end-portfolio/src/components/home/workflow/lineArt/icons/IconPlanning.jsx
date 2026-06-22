import { motion } from "framer-motion";
import { pop, float, pulse } from "../motionPresets";

const IconPlanning = () => (
  <>
    <motion.g {...pop}>
      <motion.g {...float(0, 9)}>
        <rect x="48" y="32" width="104" height="96" rx="14" fill="url(#g-surface)" stroke="rgba(255,255,255,0.14)" strokeWidth="3" />
        <rect x="48" y="32" width="104" height="28" rx="14" fill="url(#g-orange)" />
        <rect x="48" y="46" width="104" height="14" fill="url(#g-orange)" />
        <circle cx="68" cy="46" r="5" fill="#fff" />
        <circle cx="88" cy="46" r="5" fill="#fff" />
        <circle cx="108" cy="46" r="5" fill="#fff" />
        <circle cx="128" cy="46" r="5" fill="#fff" />
        <rect x="62" y="76" width="76" height="10" rx="5" fill="url(#g-mint)" opacity="0.9" />
        <rect x="62" y="96" width="56" height="10" rx="5" fill="#444" />
        <rect x="62" y="106" width="64" height="10" rx="5" fill="#444" />
      </motion.g>
      <motion.g {...float(0.5, 7)}>
        <rect x="138" y="88" width="36" height="48" rx="8" fill="#1a1a1a" stroke="#7ee787" strokeWidth="3" />
        <path d="M146 104 l8 8 l16-16" fill="none" stroke="#7ee787" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      </motion.g>
    </motion.g>
    <motion.circle cx="32" cy="80" r="8" fill="url(#g-orange)" opacity="0.5" {...pulse()} />
  </>
);

export default IconPlanning;
