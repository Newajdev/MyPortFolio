import { motion } from "framer-motion";
import WorkflowLineArt from "./lineArt/WorkflowLineArt";

const StagePanel = ({ step, total }) => (
  <motion.div
    className="absolute inset-0 flex flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0a0a0a] md:rounded-[2rem]"
    initial={{ opacity: 0, x: 40 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -30 }}
    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
  >
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.25]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    />

    <div className="relative flex h-full flex-col px-6 py-5 md:px-8 md:py-6 lg:px-10">
      <div className="flex shrink-0 items-center justify-between gap-4">
        <span className="inline-flex rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          {step.phase}
        </span>
        <p className="text-sm font-medium text-text-soft">
          Step {step.step} of {total}
        </p>
      </div>

      <div className="py-40">
        <WorkflowLineArt step={step.step} />
      </div>

      <div>
        <h3 className="text-2xl font-bold leading-snug text-white md:text-3xl lg:text-[2.125rem]">
          {step.title}
        </h3>
        <p className="mt-4 max-w-2xl text-base leading-8 text-text-muted md:text-lg md:leading-9">
          {step.description}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/[0.08] pt-5 md:mt-7 md:pt-6">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-text-soft md:text-sm">
            Output
          </span>
          <span className="rounded-full border border-accent-mint/30 bg-accent-mint/10 px-4 py-2 text-sm font-medium text-accent-mint md:text-base">
            {step.deliverable}
          </span>
        </div>
      </div>
    </div>

    <motion.div
      className="h-1 bg-gradient-to-r from-accent to-accent-mint"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.6, delay: 0.15 }}
      style={{ originX: 0 }}
    />
  </motion.div>
);

export default StagePanel;
