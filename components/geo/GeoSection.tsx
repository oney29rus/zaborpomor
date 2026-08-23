import Link from "next/link";
import {
  GEO_EXTRA_AREAS,
  GEO_PRIMARY_CITIES,
  GEO_SECONDARY_AREAS,
} from "@/lib/geo/cities";
import {
  SECTION_CONTAINER,
  SECTION_CONTENT_MT,
  SECTION_DESC,
  SECTION_LABEL,
  SECTION_PY,
  SECTION_TITLE,
} from "@/lib/section-styles";
import { CityRow } from "./CityRow";

function GeoSecondaryAreas() {
  return (
    <div className="mt-6 lg:mt-8">
      <p className="text-sm font-semibold text-foreground">
        Также выезжаем по области
      </p>
      <ul className="mt-3 space-y-2">
        {GEO_SECONDARY_AREAS.map((area) => (
          <li key={area.href}>
            <Link
              href={area.href}
              className="text-sm font-semibold text-foreground transition-colors hover:text-accent"
            >
              {area.name} →
            </Link>
          </li>
        ))}
      </ul>
      <ul className="mt-3 space-y-1 text-sm leading-relaxed text-muted">
        {GEO_EXTRA_AREAS.map((area) => (
          <li key={area}>{area}</li>
        ))}
      </ul>
    </div>
  );
}

export function GeoSection() {
  return (
    <section className={`bg-[#f5f5f5] ${SECTION_PY}`}>
      <div className={SECTION_CONTAINER}>
        <div className="lg:grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-10">
          <div>
            <p className={SECTION_LABEL}>География работ</p>
            <h2 className={SECTION_TITLE}>
              Работаем в трёх городах
              <br className="hidden sm:block" />
              {" "}
              и по всей области
            </h2>
            <p className={SECTION_DESC}>
              Основные направления — Архангельск, Северодвинск и Новодвинск.
              Также выезжаем в Холмогорский и Приморский районы.
            </p>

            <div className="hidden lg:block">
              <GeoSecondaryAreas />
            </div>
          </div>

          <div className={`${SECTION_CONTENT_MT} flex flex-col gap-2 lg:mt-0`}>
            <p className="mb-1 text-sm font-semibold uppercase tracking-[0.1em] text-accent">
              Основные города
            </p>
            {GEO_PRIMARY_CITIES.map((city) => (
              <CityRow key={city.href} city={city} />
            ))}
          </div>
        </div>

        <div className="lg:hidden">
          <GeoSecondaryAreas />
        </div>
      </div>
    </section>
  );
}
