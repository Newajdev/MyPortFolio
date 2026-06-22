import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../Container";
import ScrollReveal from "../ui/ScrollReveal";
import SectionHeading from "../ui/SectionHeading";
import { useContent } from "../../provider/ContentProvider";

const Services = () => {
  const { content } = useContent();
  const { services } = content;
  const [activeId, setActiveId] = useState(services[0]?.id);
  const active = services.find((service) => service.id === activeId);

  return (
    <section id="services" className="section-padding">
      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Services"
            title="Professional services for serious products"
            description="From MVP launches to architecture consulting — engineered for business outcomes."
          />
        </ScrollReveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-3">
            {services.map((service) => (
              <button
                key={service.id}
                type="button"
                onClick={() => setActiveId(service.id)}
                className={`w-full rounded-2xl border p-5 text-left transition ${
                  activeId === service.id
                    ? "border-accent/40 bg-accent/10"
                    : "border-white/10 bg-surface hover:border-white/20"
                }`}
                data-cursor-hover
              >
                <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                <p className="mt-2 text-sm text-text-muted">{service.summary}</p>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              className="card-premium rounded-[2rem] p-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
            >
              <p className="text-sm uppercase tracking-[0.2em] text-accent">Service Detail</p>
              <h3 className="mt-3 text-3xl font-bold text-white">{active.title}</h3>
              <p className="mt-4 text-base leading-8 text-text-muted">{active.description}</p>

              <div className="mt-8">
                <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">
                  Problems it solves
                </h4>
                <ul className="mt-4 space-y-3">
                  {active.problems.map((problem) => (
                    <li key={problem} className="flex gap-3 text-sm text-text-muted">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {problem}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-5">
                <p className="text-sm font-semibold text-accent">Your role</p>
                <p className="mt-2 text-sm leading-7 text-text-muted">{active.role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
};

export default Services;
