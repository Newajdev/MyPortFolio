export const pop = {
  initial: { scale: 0.94, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
};

export const float = (delay = 0, distance = 5) => ({
  animate: { y: [0, -distance, 0] },
  transition: { duration: 3.6, repeat: Infinity, ease: "easeInOut", delay },
});

export const pulse = (delay = 0) => ({
  animate: { scale: [1, 1.08, 1], opacity: [0.5, 0.85, 0.5] },
  transition: { duration: 2.4, repeat: Infinity, ease: "easeInOut", delay },
});
