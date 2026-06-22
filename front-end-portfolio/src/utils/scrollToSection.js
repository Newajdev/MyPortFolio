const NAV_OFFSET = -100;

let lenisInstance = null;

export const setLenisInstance = (instance) => {
  lenisInstance = instance;
};

export const getLenisInstance = () => lenisInstance;

export const scrollToSection = (hash, options = {}) => {
  const target = hash.startsWith("#") ? hash : `#${hash}`;
  const id = target.slice(1);

  if (!id) return;

  if (lenisInstance) {
    lenisInstance.scrollTo(target, { offset: NAV_OFFSET, ...options });
    return;
  }

  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export const NAV_SCROLL_OFFSET = NAV_OFFSET;
