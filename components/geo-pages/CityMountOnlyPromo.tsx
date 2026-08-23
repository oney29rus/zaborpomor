import Link from "next/link";
import {
  FENCE_SECTION_PY,
  SECTION_CONTAINER,
  SECTION_LABEL,
  SECTION_TITLE,
} from "@/lib/section-styles";

type CityMountOnlyPromoProps = {
  label: string;
  title: string;
  description: string;
  priceLabel: string;
  priceCaption: string;
  ctaLabel: string;
  ctaHref: string;
  className?: string;
};

export function CityMountOnlyPromo({
  label,
  title,
  description,
  priceLabel,
  priceCaption,
  ctaLabel,
  ctaHref,
  className = "bg-surface",
}: CityMountOnlyPromoProps) {
  return (
    <section className={`${className} ${FENCE_SECTION_PY}`}>
      <div className={SECTION_CONTAINER}>
        <div className="rounded-xl border border-border bg-background px-4 py-4 sm:px-5 sm:py-5 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div className="min-w-0 max-w-2xl">
            <p className={SECTION_LABEL}>{label}</p>
            <h2 className={`${SECTION_TITLE} max-w-xl`}>{title}</h2>
            {description ? (
              <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                {description}
              </p>
            ) : null}
            <div className="mt-3">
              <p className="text-lg font-bold tracking-tight text-foreground">
                {priceLabel}
              </p>
              <p className="mt-0.5 text-sm text-muted">{priceCaption}</p>
            </div>
          </div>

          <Link
            href={ctaHref}
            className="mt-4 inline-flex shrink-0 text-sm font-semibold text-accent transition-colors hover:text-accent-hover lg:mt-0"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
