import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
  duration = 0.7,
  as = "div",
}) => {
  const Component = motion[as] || motion.div;

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      variants={variants}
    >
      {children}
    </Component>
  );
};

export default ScrollReveal;
