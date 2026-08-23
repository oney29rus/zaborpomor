import type { ProcessStep as ProcessStepType } from "@/lib/process/steps";

type ProcessStepProps = {
  step: ProcessStepType;
  variant?: "horizontal" | "vertical";
};

export function ProcessStepItem({
  step,
  variant = "horizontal",
}: ProcessStepProps) {
  const isHighlighted = step.highlighted;

  return (
    <article className={variant === "horizontal" ? "min-w-0 flex-1" : ""}>
      <div className="flex items-center gap-2">
        <span
          className={`text-sm font-semibold tracking-[0.12em] ${
            isHighlighted ? "text-accent" : "text-accent/80"
          }`}
        >
          {step.step}
        </span>
        {variant === "horizontal" && (
          <span
            aria-hidden="true"
            className={`hidden h-1.5 w-1.5 rounded-full lg:inline-block ${
              isHighlighted ? "bg-accent" : "bg-border"
            }`}
          />
        )}
      </div>

      <h3
        className={`mt-2 text-base font-bold leading-snug lg:mt-2.5 lg:text-[0.9375rem] ${
          isHighlighted ? "text-accent" : "text-foreground"
        }`}
      >
        {step.title}
      </h3>

      <p className="mt-1.5 text-sm leading-snug text-muted lg:mt-1 lg:text-[0.8125rem] lg:leading-snug">
        {step.description}
      </p>
    </article>
  );
}
