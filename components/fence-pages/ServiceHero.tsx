import Image from "next/image";
import Link from "next/link";
import type { FencePageHero } from "@/lib/fence-pages/types";
import {
  SECTION_CONTAINER,
  SECTION_DESC,
  SECTION_LABEL,
} from "@/lib/section-styles";

const primaryButtonClassName =
  "inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-accent px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:w-auto sm:px-8";

const secondaryButtonClassName =
  "inline-flex min-h-12 w-full items-center justify-center rounded-lg border border-border bg-surface px-6 py-3 text-base font-semibold text-foreground transition-colors hover:border-muted hover:bg-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:w-auto sm:px-8";

type ServiceHeroProps = {
  breadcrumbs: React.ReactNode;
  hero: FencePageHero;
};

function ServiceHeroImage({ hero }: { hero: FencePageHero }) {
  if (hero.image) {
    return (
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border lg:aspect-[5/4]">
        <Image
          src={hero.image}
          alt={hero.imageAlt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
          style={
            hero.imageObjectPosition
              ? { objectPosition: hero.imageObjectPosition }
              : undefined
          }
        />
      </div>
    );
  }

  const placeholderFile = hero.imageSourcePath?.split("/").pop();

  return (
    <div
      className="flex aspect-[4/3] flex-col items-center justify-center overflow-hidden rounded-2xl border border-border bg-slate-100 px-6 lg:aspect-[5/4]"
      role="img"
      aria-label={`${hero.imageAlt} — фото скоро будет добавлено`}
    >
      <span className="max-w-[14rem] text-center text-sm leading-relaxed text-muted">
        Фото скоро будет добавлено
      </span>
      {placeholderFile ? (
        <span className="mt-2 font-mono text-[0.6875rem] text-muted/80">
          {placeholderFile}
        </span>
      ) : null}
    </div>
  );
}

export function ServiceHero({ breadcrumbs, hero }: ServiceHeroProps) {
  const titleLines = hero.title.split("\n");

  return (
    <section className="bg-background pb-10 pt-6 sm:pb-12 sm:pt-8 lg:pb-12 lg:pt-8">
      <div className={`${SECTION_CONTAINER} grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-10`}>
        <div>
          {breadcrumbs}

          <p className={`${SECTION_LABEL} mt-4`}>{hero.label}</p>

          <h1 className="mt-2 text-[clamp(1.875rem,4vw,2.75rem)] font-bold leading-tight tracking-tight text-foreground">
            {titleLines.map((line, index) => (
              <span key={line}>
                {index > 0 ? (
                  <>
                    <br />
                    {line}
                  </>
                ) : (
                  line
                )}
              </span>
            ))}
          </h1>

          <p className={`${SECTION_DESC} max-w-xl`}>{hero.description}</p>

          <div className="mt-5">
            <p className="text-2xl font-bold tracking-tight text-foreground sm:text-[1.75rem]">
              {hero.priceLabel}
            </p>
            <p className="mt-0.5 text-sm text-muted">{hero.priceCaption}</p>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href={hero.primaryCtaHref} className={primaryButtonClassName}>
              {hero.primaryCtaLabel}
            </Link>
            <Link
              href={hero.secondaryCtaHref}
              className={secondaryButtonClassName}
            >
              {hero.secondaryCtaLabel}
            </Link>
          </div>

          <ul className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-0">
            {hero.benefits.map((benefit, index) => (
              <li
                key={benefit}
                className="flex items-center text-sm text-foreground/85 sm:text-[0.9375rem]"
              >
                {index > 0 ? (
                  <span
                    aria-hidden="true"
                    className="mx-4 hidden h-1 w-1 rounded-full bg-border sm:block"
                  />
                ) : null}
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <ServiceHeroImage hero={hero} />
        </div>
      </div>
    </section>
  );
}
