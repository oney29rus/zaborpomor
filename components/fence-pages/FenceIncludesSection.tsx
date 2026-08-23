import type { FencePageIncludes } from "@/lib/fence-pages/types";
import {
  FENCE_SECTION_PY,
  SECTION_CONTAINER,
  SECTION_CONTENT_MT,
  SECTION_TITLE,
} from "@/lib/section-styles";

type FenceIncludesSectionProps = {
  includes: FencePageIncludes;
};

export function FenceIncludesSection({ includes }: FenceIncludesSectionProps) {
  return (
    <section className={`bg-surface ${FENCE_SECTION_PY}`}>
      <div className={SECTION_CONTAINER}>
        <div className="max-w-2xl">
          <h2 className={SECTION_TITLE.replace("mt-2 ", "")}>{includes.title}</h2>
          {includes.intro ? (
            <p className="mt-2 text-base leading-relaxed text-muted">
              {includes.intro}
            </p>
          ) : null}
        </div>

        {includes.listItems && includes.listItems.length > 0 ? (
          <ul
            className={`${SECTION_CONTENT_MT} grid gap-2 sm:grid-cols-2 lg:gap-x-8 lg:gap-y-2`}
          >
            {includes.listItems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-foreground/90 sm:text-base"
              >
                <span
                  aria-hidden="true"
                  className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent"
                />
                {item}
              </li>
            ))}
          </ul>
        ) : (
        <ol
          className={`${SECTION_CONTENT_MT} grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-4`}
        >
          {includes.steps.map((step) => (
            <li key={step.step} className="flex gap-3">
              <span
                aria-hidden="true"
                className="shrink-0 text-xs font-semibold tabular-nums tracking-[0.12em] text-accent"
              >
                {step.step}
              </span>
              <div className="min-w-0">
                <h3 className="text-base font-semibold text-foreground">
                  {step.title}
                </h3>
                {step.detail ? (
                  <p className="mt-0.5 text-sm leading-relaxed text-muted">
                    {step.detail}
                  </p>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
        )}

        {includes.note ? (
          <p className="mt-5 text-sm leading-relaxed text-muted">{includes.note}</p>
        ) : null}
      </div>
    </section>
  );
}
