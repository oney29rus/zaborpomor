import type { FencePageProcessStep } from "@/lib/fence-pages/types";
import {
  FENCE_SECTION_PY,
  SECTION_CONTAINER,
  SECTION_CONTENT_MT,
  SECTION_TITLE,
} from "@/lib/section-styles";

type CityProcessSectionProps = {
  title: string;
  steps: FencePageProcessStep[];
  className?: string;
};

export function CityProcessSection({
  title,
  steps,
  className = "bg-background",
}: CityProcessSectionProps) {
  return (
    <section className={`${className} ${FENCE_SECTION_PY}`}>
      <div className={SECTION_CONTAINER}>
        <h2 className={`max-w-2xl ${SECTION_TITLE.replace("mt-2 ", "")}`}>
          {title}
        </h2>

        <ol
          className={`${SECTION_CONTENT_MT} grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-3`}
        >
          {steps.map((step) => (
            <li
              key={step.step}
              className="rounded-lg border border-border bg-surface px-3 py-3 sm:px-3.5 sm:py-3.5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                {step.step}
              </p>
              <h3 className="mt-1.5 text-sm font-semibold leading-snug text-foreground sm:text-[0.9375rem]">
                {step.title}
              </h3>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
