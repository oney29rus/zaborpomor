import Link from "next/link";
import type { MontazhPageComparisonOption } from "@/lib/service-pages/montazh/content";
import {
  FENCE_SECTION_PY,
  SECTION_CONTAINER,
  SECTION_CONTENT_MT,
  SECTION_TITLE,
} from "@/lib/section-styles";

type MountComparisonSectionProps = {
  title: string;
  options: MontazhPageComparisonOption[];
};

export function MountComparisonSection({
  title,
  options,
}: MountComparisonSectionProps) {
  return (
    <section className={`bg-[#f5f5f5] ${FENCE_SECTION_PY}`}>
      <div className={SECTION_CONTAINER}>
        <h2 className={`max-w-2xl ${SECTION_TITLE.replace("mt-2 ", "")}`}>
          {title}
        </h2>

        <div
          className={`${SECTION_CONTENT_MT} grid gap-4 sm:grid-cols-2 lg:gap-5`}
        >
          {options.map((option) => (
            <article
              key={option.title}
              className="flex h-full flex-col rounded-xl border border-border bg-surface px-4 py-4 lg:px-5 lg:py-5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                {option.title}
              </p>
              <h3 className="mt-2 text-base font-semibold text-foreground">
                {option.subtitle}
              </h3>
              {option.priceLabel ? (
                <p className="mt-2 text-lg font-bold tracking-tight text-foreground">
                  {option.priceLabel}
                </p>
              ) : null}
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {option.description}
              </p>
              <Link
                href={option.ctaHref}
                className="mt-4 inline-flex text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
              >
                {option.ctaLabel} →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
