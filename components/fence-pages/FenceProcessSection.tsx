import type { FencePageProcessStep } from "@/lib/fence-pages/types";
import {
  SECTION_CONTAINER,
  SECTION_CONTENT_MT,
  FENCE_SECTION_PY,
  SECTION_TITLE,
} from "@/lib/section-styles";

type FenceProcessSectionProps = {
  title: string;
  steps: FencePageProcessStep[];
};

export function FenceProcessSection({ title, steps }: FenceProcessSectionProps) {
  return (
    <section className={`bg-background ${FENCE_SECTION_PY}`}>
      <div className={SECTION_CONTAINER}>
        <h2 className={`max-w-2xl ${SECTION_TITLE.replace("mt-2 ", "")}`}>
          {title}
        </h2>

        <ol
          className={`${SECTION_CONTENT_MT} grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5`}
        >
          {steps.map((step, index) => (
            <li
              key={step.step}
              className="rounded-xl border border-border bg-surface px-4 py-4 lg:px-5 lg:py-5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                {step.step}
              </p>
              <h3 className="mt-2 text-base font-semibold text-foreground">
                {step.title}
              </h3>
              {step.description ? (
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              ) : null}
              {index === steps.length - 1 ? (
                <span className="sr-only">Финальный этап</span>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
