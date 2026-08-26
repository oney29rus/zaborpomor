import Link from "next/link";
import {
  FENCE_SECTION_PY,
  SECTION_CONTAINER,
  SECTION_LABEL,
  SECTION_TITLE,
} from "@/lib/section-styles";
import { HOME_SECTION_TITLE } from "@/lib/homepage/mobile-styles";

type CityMountOnlyPromoProps = {
  label: string;
  title: string;
  description: string;
  priceLabel: string;
  priceCaption: string;
  ctaLabel: string;
  ctaHref: string;
  className?: string;
  compactMobile?: boolean;
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
  compactMobile = false,
}: CityMountOnlyPromoProps) {
  const sectionPy = compactMobile
    ? "py-6 sm:py-12 lg:py-14"
    : FENCE_SECTION_PY;
  const titleClassName = compactMobile ? HOME_SECTION_TITLE : SECTION_TITLE;

  return (
    <section className={`${className} ${sectionPy}`}>
      <div className={SECTION_CONTAINER}>
        <div
          className={`rounded-xl border border-border bg-background lg:flex lg:items-center lg:justify-between lg:gap-8 ${
            compactMobile ? "px-3.5 py-3.5 sm:px-5 sm:py-5" : "px-4 py-4 sm:px-5 sm:py-5"
          }`}
        >
          <div className="min-w-0 max-w-2xl">
            <p className={`${SECTION_LABEL} max-lg:sr-only`}>{label}</p>
            <h2 className={`${titleClassName} max-w-xl max-lg:text-[clamp(1.25rem,4vw,1.75rem)]`}>
              {title}
            </h2>
            {description ? (
              <p className="mt-1 text-sm leading-snug text-muted sm:text-base lg:mt-2">
                {description}
              </p>
            ) : null}
            <div className="mt-2 lg:mt-3">
              <p className="text-base font-bold tracking-tight text-foreground sm:text-lg">
                {priceLabel}
              </p>
              <p className="mt-0.5 hidden text-sm text-muted sm:block">{priceCaption}</p>
            </div>
          </div>

          <Link
            href={ctaHref}
            className="mt-3 inline-flex shrink-0 text-sm font-semibold text-accent transition-colors hover:text-accent-hover lg:mt-0"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
