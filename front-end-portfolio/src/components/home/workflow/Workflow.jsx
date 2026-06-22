import { useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import Container from "../../Container";
import { useContent } from "../../../provider/ContentProvider";
import { buildWorkflowData } from "./buildWorkflowData";
import { useWorkflowScroll } from "./useWorkflowScroll";
import WorkflowHeader from "./WorkflowHeader";
import WorkflowRail from "./WorkflowRail";
import MobileStepPills from "./MobileStepPills";
import StagePanel from "./StagePanel";
import WorkflowProgress from "./WorkflowProgress";

const Workflow = () => {
  const { content } = useContent();
  const { enrichedSteps, phaseGroups } = useMemo(
    () => buildWorkflowData(content.workflowSteps),
    [content.workflowSteps],
  );

  const total = enrichedSteps.length;
  const { containerRef, sectionHeight, activeStep, progressWidth, scrollToStep } =
    useWorkflowScroll(total);
  const current = enrichedSteps[activeStep];

  return (
    <section
      id="workflow"
      ref={containerRef}
      style={{ height: `${sectionHeight}vh` }}
      className="relative"
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-bg">
        <div className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-accent/8 blur-[120px]" />

        <Container className="relative flex h-full flex-col py-[clamp(3rem,6vw,5rem)]">
          <div className="grid flex-1 gap-8 overflow-hidden lg:grid-cols-[minmax(240px,300px)_1fr] lg:gap-12">
            <div className="flex flex-col lg:min-h-0">
              <WorkflowHeader />
              <WorkflowRail
                phaseGroups={phaseGroups}
                activeStep={activeStep}
                onSelectStep={scrollToStep}
              />
              <MobileStepPills
                steps={enrichedSteps}
                activeStep={activeStep}
                onSelectStep={scrollToStep}
              />
            </div>

            <div className="flex min-h-0 flex-1 flex-col">
              <div className="relative min-h-[360px] flex-1 md:min-h-[400px]">
                <AnimatePresence mode="wait">
                  <StagePanel key={current.step} step={current} total={total} />
                </AnimatePresence>
              </div>

              <WorkflowProgress
                activeStep={activeStep}
                total={total}
                currentTitle={current.title}
                progressWidth={progressWidth}
              />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Workflow;
