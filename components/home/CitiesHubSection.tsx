import Image from "next/image";
import { TrackedCityLink } from "@/components/analytics/TrackedCityLink";
import {
  CITIES_HUB_CARDS,
  CITIES_HUB_SECONDARY_AREAS,
} from "@/lib/homepage/cities-hub";
import {
  SECTION_CONTAINER,
  SECTION_CONTENT_MT,
  SECTION_DESC,
  SECTION_LABEL,
  SECTION_PY,
  SECTION_TITLE,
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
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={card.image}
            alt={card.imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
      </TrackedCityLink>

      <div className={`flex flex-1 flex-col ${compact ? "p-3" : "p-4 sm:p-5"}`}>
        <h3
          className={`font-bold tracking-tight text-foreground ${
            compact ? "text-lg" : "text-xl sm:text-2xl"
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
          className={`mt-1.5 leading-snug text-muted ${
            compact ? "text-sm line-clamp-2" : "text-sm sm:text-base"
          }`}
        >
          <span className="lg:hidden">{card.shortDescription}</span>
          <span className="hidden lg:inline">{card.fullDescription}</span>
        </p>

        <TrackedCityLink
          href={card.href}
          city={card.name}
          className={`mt-auto inline-flex font-semibold text-accent transition-colors hover:text-accent-hover ${
            compact ? "pt-2 text-sm" : "pt-3 text-sm sm:text-base"
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
    <section className={`scroll-mt-24 bg-[#f5f5f5] ${SECTION_PY}`}>
      <div className={SECTION_CONTAINER}>
        <div className="max-w-2xl">
          <p className={SECTION_LABEL}>География работ</p>
          <h2 className={SECTION_TITLE}>
            Устанавливаем заборы в трёх городах
          </h2>
          <p className={SECTION_DESC}>
            Работаем в Архангельске, Северодвинске, Новодвинске и выезжаем в
            ближайшие районы.
          </p>
        </div>

        <div
          className={`${SECTION_CONTENT_MT} grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-5`}
        >
          {CITIES_HUB_CARDS.map((card) => (
            <CityHubCard key={card.href} card={card} compact />
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-2 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-2 sm:gap-y-1">
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
