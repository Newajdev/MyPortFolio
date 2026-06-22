const MobileStepPills = ({ steps, activeStep, onSelectStep }) => (
  <div className="flex gap-2 overflow-x-auto pb-1 lg:hidden">
    {steps.map((step, index) => (
      <button
        key={step.step}
        type="button"
        onClick={() => onSelectStep(index)}
        className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold transition ${
          index === activeStep
            ? "bg-accent text-bg"
            : "border border-white/10 text-text-muted"
        }`}
      >
        {step.step}
      </button>
    ))}
  </div>
);

export default MobileStepPills;
