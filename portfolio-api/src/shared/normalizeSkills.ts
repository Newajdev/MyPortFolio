type SkillItem = { name: string; icon: string };

export const normalizeSkills = (technologies: unknown): SkillItem[] => {
  if (!Array.isArray(technologies)) return [];

  return technologies
    .map((item) => {
      if (typeof item === "string") {
        return { name: item, icon: "" };
      }

      if (item && typeof item === "object" && "name" in item) {
        const record = item as { name?: string; icon?: string };
        return {
          name: record.name ?? "",
          icon: record.icon ?? "",
        };
      }

      return { name: String(item), icon: "" };
    })
    .filter((item) => item.name);
};
