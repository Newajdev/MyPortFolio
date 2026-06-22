const StepRailItem = ({ step, index, activeStep, onSelect }) => {
  const isActive = index === activeStep;
  const isDone = index < activeStep;

  return (
    <button
      type="button"
      onClick={() => onSelect(index)}
      className={`group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-all duration-300 ${
        isActive ? "bg-accent/10" : "hover:bg-white/[0.04]"
      }`}
      data-cursor-hover
    >
      <span
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold transition-colors ${
          isActive
            ? "bg-accent text-bg"
            : isDone
              ? "bg-accent/20 text-accent"
              : "border border-white/10 text-text-soft group-hover:border-white/20"
        }`}
      >
        {isDone ? "✓" : step.step}
      </span>
      <span
        className={`truncate text-sm transition-colors ${
          isActive
            ? "font-medium text-white"
            : isDone
              ? "text-text-muted"
              : "text-text-soft"
        }`}
      >
        {step.title}
      </span>
    </button>
  );
};

export default StepRailItem;
