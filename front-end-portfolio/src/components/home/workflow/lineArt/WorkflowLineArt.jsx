import PremiumIconWrap from "./PremiumIconWrap";
import WORKFLOW_ICONS from "./icons";

const WorkflowLineArt = ({ step }) => {
  const Icon = WORKFLOW_ICONS[step] ?? WORKFLOW_ICONS[1];
  return (
    <PremiumIconWrap step={step}>
      <Icon />
    </PremiumIconWrap>
  );
};

export default WorkflowLineArt;
