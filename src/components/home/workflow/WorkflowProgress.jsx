import { motion } from "framer-motion";

const WorkflowProgress = ({ activeStep, total, currentTitle, progressWidth }) => (
  <div className="mt-5 shrink-0">
    <div className="flex items-center justify-between text-sm">
      <span className="text-text-muted">
        Progress{" "}
        <span className="font-semibold text-white">
          {activeStep + 1}/{total}
        </span>
      </span>
      <span className="truncate pl-4 text-accent">{currentTitle}</span>
    </div>
    <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/[0.08]">
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-accent to-accent-mint"
        style={{ width: progressWidth }}
      />
    </div>
  </div>
);

export default WorkflowProgress;
