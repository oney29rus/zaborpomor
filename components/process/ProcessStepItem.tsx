import type { ProcessStep as ProcessStepType } from "@/lib/process/steps";

type ProcessStepProps = {
  step: ProcessStepType;
  variant?: "horizontal" | "vertical";
  compactMobile?: boolean;
};

export function ProcessStepItem({
  step,
  variant = "horizontal",
  compactMobile = false,
}: ProcessStepProps) {
  const isHighlighted = step.highlighted;
  const isCompactVertical = variant === "vertical" && compactMobile;

  return (
    <article className={variant === "horizontal" ? "min-w-0 flex-1" : ""}>
      <div className="flex items-center gap-1.5">
        <span
          className={`text-xs font-semibold tracking-[0.12em] lg:text-sm ${
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
        className={`font-bold leading-snug lg:mt-2.5 lg:text-[0.9375rem] ${
          isCompactVertical
            ? "mt-0.5 text-sm"
            : "mt-2 text-base lg:mt-2.5 lg:text-[0.9375rem]"
        } ${isHighlighted ? "text-accent" : "text-foreground"}`}
      >
        {step.title}
      </h3>

      <p
        className={`leading-snug text-muted lg:mt-1 lg:text-[0.8125rem] lg:leading-snug ${
          isCompactVertical
            ? "mt-0.5 line-clamp-2 text-xs"
            : "mt-1.5 text-sm lg:mt-1"
        }`}
      >
        {step.description}
      </p>
    </article>
  );
}
