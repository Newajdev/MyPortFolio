import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../Container";
import ScrollReveal from "../ui/ScrollReveal";
import SectionHeading from "../ui/SectionHeading";
import { useContent } from "../../provider/ContentProvider";
import { resolveIcon } from "../../utils/resolveIcon";

const SkillsOrbit = () => {
  const { content } = useContent();
  const { skillCategories, skillsSection } = content;
  const [activeId, setActiveId] = useState(skillCategories[0]?.id ?? "");

  const active = useMemo(
    () => skillCategories.find((cat) => cat.id === activeId) ?? skillCategories[0],
    [skillCategories, activeId]
  );

  const section = skillsSection ?? {
    eyebrow: "Skills",
    title: "Technologies I work with",
    description: "Explore my core capabilities across frontend, backend, and cloud-native delivery.",
  };

  if (!active) return null;

  const CategoryIcon = resolveIcon(active.icon);

  return (
    <section id="skills" className="section-padding overflow-hidden">
      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow={section.eyebrow}
            title={section.title}
            description={section.description}
          />
        </ScrollReveal>

        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {skillCategories.map((category) => {
            const TabIcon = resolveIcon(category.icon);
            const isActive = category.id === activeId;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveId(category.id)}
                className={`flex items-center gap-3 rounded-2xl border px-5 py-3 transition ${
                  isActive
                    ? "border-accent/50 bg-accent/10 text-white shadow-[0_0_30px_var(--color-accent-glow)]"
                    : "border-white/10 bg-white/3 text-text-muted hover:border-white/20 hover:text-white"
                }`}
                data-cursor-hover
              >
                <span className={`rounded-xl p-2 ${isActive ? "bg-accent/20 text-accent" : "bg-white/5"}`}>
                  <TabIcon className="text-lg" />
                </span>
                <span className="font-medium">{category.title}</span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="mt-10"
          >
            <div className="card-premium rounded-[2rem] p-8 md:p-10">
              <div className="mb-8 flex flex-col gap-4 border-b border-white/8 pb-8 md:flex-row md:items-center md:justify-between">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl border border-accent/30 bg-accent/10 p-4 text-accent">
                    <CategoryIcon className="text-3xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{active.title}</h3>
                    <p className="mt-2 max-w-2xl text-sm leading-7 text-text-muted">
                      {active.description}
                    </p>
                  </div>
                </div>
                <span className="inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-text-muted">
                  {active.skills?.length ?? 0} skills
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {(active.skills ?? []).map((skill, index) => {
                  const SkillIcon = resolveIcon(skill.icon);

                  return (
                    <motion.div
                      key={`${active.id}-${skill.name}`}
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.04 }}
                      className="group rounded-2xl border border-white/8 bg-bg-elevated p-4 transition hover:border-accent/30 hover:bg-accent/5"
                      data-cursor-hover
                    >
                      <div className="mb-3 inline-flex rounded-xl border border-white/10 bg-white/5 p-3 text-accent transition group-hover:border-accent/30 group-hover:bg-accent/10">
                        <SkillIcon className="text-xl" />
                      </div>
                      <p className="text-sm font-medium text-white">{skill.name}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
};

export default SkillsOrbit;
