import type { FencePageComparison } from "@/lib/fence-pages/types";
import {
  SECTION_CONTAINER,
  SECTION_CONTENT_MT,
  FENCE_SECTION_PY,
  SECTION_TITLE,
} from "@/lib/section-styles";

type FenceComparisonSectionProps = {
  comparison: FencePageComparison;
};

export function FenceComparisonSection({
  comparison,
}: FenceComparisonSectionProps) {
  return (
    <section className={`bg-[#f5f5f5] ${FENCE_SECTION_PY}`}>
      <div className={SECTION_CONTAINER}>
        <h2 className={`max-w-2xl ${SECTION_TITLE.replace("mt-2 ", "")}`}>
          {comparison.title}
        </h2>

        <div
          className={`${SECTION_CONTENT_MT} grid gap-4 sm:grid-cols-2 lg:gap-5`}
        >
          {comparison.options.map((option) => (
            <article
              key={option.title}
              className="rounded-xl border border-border bg-surface px-4 py-4 lg:px-5 lg:py-5"
            >
              <h3 className="text-base font-semibold text-foreground">
                {option.title}
              </h3>
              <ul className="mt-3 space-y-2">
                {option.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2 text-sm leading-relaxed text-muted"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
