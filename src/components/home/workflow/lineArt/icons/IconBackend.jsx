import { motion } from "framer-motion";
import { pop, float, pulse } from "../motionPresets";

const IconBackend = () => (
  <>
    <motion.g {...pop}>
      <motion.g {...float(0, 8)}>
        <ellipse cx="72" cy="118" rx="36" ry="10" fill="#111" />
        <path d="M36 118 v-52 c0-14 72-14 72 0 v52" fill="url(#g-surface)" stroke="#7ee787" strokeWidth="3" />
        <ellipse cx="72" cy="66" rx="36" ry="10" fill="#1f1f1f" stroke="#7ee787" strokeWidth="3" />
        <ellipse cx="72" cy="88" rx="36" ry="10" fill="none" stroke="#7ee787" strokeWidth="2" opacity="0.5" />
        <circle cx="60" cy="78" r="4" fill="url(#g-mint)" />
        <circle cx="84" cy="78" r="4" fill="url(#g-mint)" />
        <path d="M66 100 q6 4 12 0" fill="none" stroke="#ff9f66" strokeWidth="2" strokeLinecap="round" />
      </motion.g>
      <motion.g {...float(0.3, 12)}>
        <rect x="118" y="48" width="56" height="40" rx="10" fill="url(#g-surface)" stroke="#ff9f66" strokeWidth="3" />
        <circle cx="132" cy="68" r="5" fill="url(#g-mint)" />
        <circle cx="146" cy="68" r="5" fill="url(#g-orange)" />
        <circle cx="160" cy="68" r="5" fill="url(#g-mint)" />
        <motion.path
          d="M174 68 h16"
          stroke="#ff9f66"
          strokeWidth="4"
          strokeLinecap="round"
          animate={{ pathLength: [0.3, 1, 0.3] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        />
        <motion.circle cx="168" cy="68" r="4" fill="url(#g-orange)" {...pulse(0.2)} />
      </motion.g>
    </motion.g>
  </>
);

export default IconBackend;
