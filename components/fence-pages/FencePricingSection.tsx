import Link from "next/link";
import type { FencePagePricing } from "@/lib/fence-pages/types";
import {
  FENCE_SECTION_PY,
  SECTION_CONTAINER,
  SECTION_CONTENT_MT,
  SECTION_DESC,
  SECTION_LINK,
  SECTION_TITLE,
} from "@/lib/section-styles";

type FencePricingSectionProps = {
  pricing: FencePagePricing;
};

export function FencePricingSection({ pricing }: FencePricingSectionProps) {
  return (
    <section className={`bg-background ${FENCE_SECTION_PY}`}>
      <div className={SECTION_CONTAINER}>
        <div className="max-w-2xl">
          <h2 className={SECTION_TITLE.replace("mt-2 ", "")}>{pricing.title}</h2>
          <p className={SECTION_DESC}>{pricing.description}</p>
        </div>

        <div
          className={`${SECTION_CONTENT_MT} lg:grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start lg:gap-8`}
        >
          <div>
            <ul className="divide-y divide-border rounded-2xl border border-border bg-surface">
              {pricing.rows.map((row) => (
                <li
                  key={row.label}
                  className="flex flex-col gap-1 px-5 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                >
                  <span className="text-base text-foreground">{row.label}</span>
                  <span className="text-base font-semibold text-foreground sm:text-right">
                    {row.value}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-3 text-sm leading-relaxed text-muted">
              {pricing.disclaimer}
            </p>

            <div className="mt-5">
              <Link href={pricing.ctaHref} className={SECTION_LINK}>
                {pricing.ctaLabel} →
              </Link>
            </div>
          </div>

          {pricing.priceIncludes ? (
            <aside className="mt-6 rounded-xl border border-border bg-surface px-5 py-5 lg:mt-0">
              <h3 className="text-base font-semibold text-foreground">
                {pricing.priceIncludes.title}
              </h3>
              <ul className="mt-3 space-y-2">
                {pricing.priceIncludes.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-foreground/90"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {pricing.priceIncludes.note}
              </p>
            </aside>
          ) : null}
        </div>
      </div>
    </section>
  );
}
