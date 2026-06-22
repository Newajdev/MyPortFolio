export const SCROLL_PER_STEP = 36;

export const PHASES = [
  {
    id: "discover",
    label: "Discover",
    steps: [
      { deliverable: "Goals & success metrics mapped" },
      { deliverable: "Scope, milestones & risk plan" },
      { deliverable: "PRD with flows & acceptance criteria" },
    ],
  },
  {
    id: "design",
    label: "Design",
    steps: [{ deliverable: "Wireframes & visual system" }],
  },
  {
    id: "build",
    label: "Build",
    steps: [
      { deliverable: "API contracts & data architecture" },
      { deliverable: "Full-stack product implementation" },
    ],
  },
  {
    id: "ship",
    label: "Ship",
    steps: [
      { deliverable: "QA validation & performance checks" },
      { deliverable: "Production deployment & monitoring" },
      { deliverable: "Post-launch iteration roadmap" },
    ],
  },
];
