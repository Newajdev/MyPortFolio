import StepRailItem from "./StepRailItem";

const WorkflowRail = ({ phaseGroups, activeStep, onSelectStep }) => (
  <div className="hidden flex-1 overflow-y-auto pr-2 lg:block">
    {phaseGroups.map((phase) => (
      <div key={phase.id} className="mb-5 last:mb-0">
        <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-text-soft">
          {phase.label}
        </p>
        <div>
          {phase.steps.map((step, i) => (
            <StepRailItem
              key={step.step}
              step={step}
              index={phase.startIndex + i}
              activeStep={activeStep}
              onSelect={onSelectStep}
            />
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default WorkflowRail;
