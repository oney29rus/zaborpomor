import { PROCESS_STEPS } from "@/lib/process/steps";
import { ProcessStepItem } from "./ProcessStepItem";

export function ProcessTimeline({ compactMobile = false }: { compactMobile?: boolean }) {
  return (
    <ol
      className={`relative border-l border-border pl-4 lg:border-l-0 lg:pl-0 lg:before:absolute lg:before:top-[0.6875rem] lg:before:right-0 lg:before:left-0 lg:before:h-px lg:before:bg-border lg:before:content-[''] ${
        compactMobile ? "space-y-2.5 lg:space-y-0" : "space-y-5 lg:space-y-0"
      } lg:flex lg:items-start`}
    >
      {PROCESS_STEPS.map((step, index) => (
        <li
          key={step.id}
          className="relative lg:flex lg:min-w-0 lg:flex-1 lg:items-start"
        >
          <span
            aria-hidden="true"
            className={`absolute top-1 -left-[1.125rem] h-1.5 w-1.5 rounded-full lg:hidden ${
              step.highlighted ? "bg-accent" : "bg-border"
            }`}
          />
          <div className="min-w-0 lg:flex-1 lg:pr-1">
            <ProcessStepItem
              step={step}
              variant="responsive"
              compactMobile={compactMobile}
            />
          </div>
          {index < PROCESS_STEPS.length - 1 ? (
            <span
              aria-hidden="true"
              className="mt-0.5 hidden shrink-0 px-0.5 text-[0.625rem] text-muted/60 lg:inline"
            >
              →
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
