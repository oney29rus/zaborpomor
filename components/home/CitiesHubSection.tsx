import Image from "next/image";
import { TrackedCityLink } from "@/components/analytics/TrackedCityLink";
import {
  CITIES_HUB_CARDS,
  CITIES_HUB_SECONDARY_AREAS,
} from "@/lib/homepage/cities-hub";
import {
  HOME_SECTION_CONTENT_MT,
  HOME_SECTION_DESC,
  HOME_SECTION_PY,
  HOME_SECTION_TITLE,
} from "@/lib/homepage/mobile-styles";
import {
  SECTION_CONTAINER,
  SECTION_LABEL,
} from "@/lib/section-styles";

function CityHubCard({
  card,
  compact,
}: {
  card: (typeof CITIES_HUB_CARDS)[number];
  compact?: boolean;
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface">
      <TrackedCityLink href={card.href} city={card.name} className="block">
        <div className="relative aspect-[3/2] overflow-hidden sm:aspect-video">
          <Image
            src={card.image}
            alt={card.imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
      </TrackedCityLink>

      <div className={`flex flex-1 flex-col ${compact ? "p-2 sm:p-4 lg:p-5" : "p-4 sm:p-5"}`}>
        <h3
          className={`font-bold tracking-tight text-foreground ${
            compact ? "text-sm sm:text-lg lg:text-2xl" : "text-xl sm:text-2xl"
          }`}
        >
          <TrackedCityLink
            href={card.href}
            city={card.name}
            className="transition-colors hover:text-accent"
          >
            {card.name}
          </TrackedCityLink>
        </h3>

        <p
          className={`mt-0.5 leading-snug text-muted ${
            compact ? "text-[0.6875rem] line-clamp-2 sm:text-sm lg:text-base" : "text-sm sm:text-base"
          }`}
        >
          <span className="lg:hidden">{card.shortDescription}</span>
          <span className="hidden lg:inline">{card.fullDescription}</span>
        </p>

        <TrackedCityLink
          href={card.href}
          city={card.name}
          className={`mt-auto inline-flex font-semibold text-accent transition-colors hover:text-accent-hover ${
            compact ? "pt-1.5 text-[0.6875rem] sm:text-sm lg:text-base" : "pt-3 text-sm sm:text-base"
          }`}
        >
          {card.ctaLabel}
        </TrackedCityLink>
      </div>
    </article>
  );
}

export function CitiesHubSection() {
  return (
    <section className={`scroll-mt-24 bg-[#f5f5f5] ${HOME_SECTION_PY}`}>
      <div className={SECTION_CONTAINER}>
        <div className="max-w-2xl">
          <p className={SECTION_LABEL}>География работ</p>
          <h2 className={HOME_SECTION_TITLE}>
            Устанавливаем заборы в трёх городах
          </h2>
          <p className={HOME_SECTION_DESC}>
            Работаем в Архангельске, Северодвинске, Новодвинске и выезжаем в
            ближайшие районы.
          </p>
        </div>

        <div
          className={`${HOME_SECTION_CONTENT_MT} grid grid-cols-3 gap-2 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-5`}
        >
          {CITIES_HUB_CARDS.map((card) => (
            <CityHubCard key={card.href} card={card} compact />
          ))}
        </div>

        <div className="mt-3 flex flex-col gap-1 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-2 sm:gap-y-1">
          <p className="text-sm font-semibold text-foreground">
            Также работаем:
          </p>
          {CITIES_HUB_SECONDARY_AREAS.map((area, index) => (
            <span key={area.href} className="inline-flex items-center gap-2">
              {index > 0 ? (
                <span aria-hidden="true" className="hidden text-muted sm:inline">
                  ·
                </span>
              ) : null}
              <TrackedCityLink
                href={area.href}
                city={area.name}
                className="text-sm font-semibold text-foreground transition-colors hover:text-accent"
              >
                {area.name} →
              </TrackedCityLink>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
