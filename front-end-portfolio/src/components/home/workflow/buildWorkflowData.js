import { PHASES } from "./constants";

export const buildWorkflowData = (workflowSteps) => {
  const enrichedSteps = workflowSteps.map((step, index) => {
    let cursor = 0;
    for (const phase of PHASES) {
      for (const meta of phase.steps) {
        if (cursor === index) {
          return {
            ...step,
            phase: phase.label,
            phaseId: phase.id,
            deliverable: meta.deliverable,
          };
        }
        cursor += 1;
      }
    }
    return {
      ...step,
      phase: "Process",
      phaseId: "discover",
      deliverable: "Deliverable",
    };
  });

  let offset = 0;
  const phaseGroups = PHASES.map((phase) => {
    const steps = enrichedSteps.slice(offset, offset + phase.steps.length);
    const startIndex = offset;
    offset += phase.steps.length;
    return { ...phase, steps, startIndex };
  });

  return { enrichedSteps, phaseGroups };
};
