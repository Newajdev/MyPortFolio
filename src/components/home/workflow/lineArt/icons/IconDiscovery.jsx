import { motion } from "framer-motion";
import { pop, float, pulse } from "../motionPresets";

const IconDiscovery = () => (
  <>
    <motion.g {...pop}>
      <motion.g {...float(0, 8)}>
        <rect x="108" y="48" width="64" height="80" rx="10" fill="url(#g-surface)" stroke="rgba(255,255,255,0.14)" strokeWidth="3" />
        <rect x="118" y="62" width="44" height="8" rx="4" fill="url(#g-orange)" />
        <rect x="118" y="78" width="36" height="6" rx="3" fill="#444" />
        <rect x="118" y="92" width="40" height="6" rx="3" fill="#444" />
        <circle cx="132" cy="118" r="5" fill="url(#g-mint)" />
        <circle cx="148" cy="118" r="5" fill="url(#g-mint)" />
        <path d="M128 128 q12 8 24 0" fill="none" stroke="#ff9f66" strokeWidth="2.5" strokeLinecap="round" />
      </motion.g>
      <motion.g {...float(0.3, 8)}>
        <circle cx="72" cy="72" r="36" fill="#1f1f1f" stroke="#ff9f66" strokeWidth="4" />
        <circle cx="72" cy="72" r="24" fill="#0a0a0a" stroke="#ff9f66" strokeWidth="3" />
        <line x1="98" y1="98" x2="118" y2="118" stroke="#ff9f66" strokeWidth="5" strokeLinecap="round" />
        <circle cx="64" cy="66" r="4" fill="#fff" />
        <circle cx="80" cy="66" r="4" fill="#fff" />
        <circle cx="65" cy="67" r="2" fill="#111" />
        <circle cx="81" cy="67" r="2" fill="#111" />
      </motion.g>
    </motion.g>
    <motion.circle cx="168" cy="36" r="6" fill="url(#g-mint)" {...pulse(0)} />
    <motion.circle cx="36" cy="44" r="4" fill="url(#g-orange)" {...pulse(0.4)} />
    <motion.path d="M24 28 l4 4 l-4 4" stroke="#7ee787" strokeWidth="2.5" fill="none" strokeLinecap="round" {...pulse(0.2)} />
  </>
);

export default IconDiscovery;
