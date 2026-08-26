import { PROCESS_STEPS } from "@/lib/process/steps";
import { ProcessStepItem } from "./ProcessStepItem";

export function ProcessTimelineDesktop() {
  return (
    <div className="relative hidden lg:block">
      <div
        aria-hidden="true"
        className="absolute top-[0.6875rem] right-0 left-0 h-px bg-border"
      />

      <div className="relative flex items-start">
        {PROCESS_STEPS.map((step, index) => (
          <div key={step.id} className="flex min-w-0 flex-1 items-start">
            <div className="min-w-0 flex-1 pr-1">
              <ProcessStepItem step={step} variant="horizontal" />
            </div>
            {index < PROCESS_STEPS.length - 1 && (
              <span
                aria-hidden="true"
                className="mt-0.5 shrink-0 px-0.5 text-[0.625rem] text-muted/60"
              >
                →
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProcessTimelineMobile({ compactMobile = false }: { compactMobile?: boolean }) {
  return (
    <ol
      className={`relative border-l border-border pl-5 lg:hidden ${
        compactMobile ? "space-y-3.5" : "space-y-5"
      }`}
    >
      {PROCESS_STEPS.map((step) => (
        <li key={step.id} className="relative">
          <span
            aria-hidden="true"
            className={`absolute top-1.5 -left-[1.375rem] h-2 w-2 rounded-full ${
              step.highlighted ? "bg-accent" : "bg-border"
            }`}
          />
          <ProcessStepItem step={step} variant="vertical" />
        </li>
      ))}
    </ol>
  );
}
