import Link from "next/link";
import { FENCE_CATALOG } from "@/lib/catalog/fence-types";
import { getCalculatorFenceTypes } from "@/lib/calculator/prices";
import { getPlanPriceLabel } from "@/lib/pricing/resolve-plan";
import { PRICING_INCLUDED_ITEMS } from "@/lib/pricing/featured-plans";
import { CALCULATOR_TO_CATALOG_SLUG } from "@/lib/geo-pages/fence-catalog";
import {
  FENCE_SECTION_PY,
  SECTION_CONTAINER,
  SECTION_CONTENT_MT,
  SECTION_LINK,
  SECTION_TITLE,
} from "@/lib/section-styles";

const PRICING_DISCLAIMER =
  "Цена указана ориентировочно. Точная стоимость зависит от длины, высоты, комплектации, ворот, калитки и условий участка.";

const INCLUDED_SUMMARY = PRICING_INCLUDED_ITEMS.join(", ");

type CityPricingSectionProps = {
  title: string;
  disclaimer?: string;
};

export function CityPricingSection({
  title,
  disclaimer = PRICING_DISCLAIMER,
}: CityPricingSectionProps) {
  const fenceTypes = getCalculatorFenceTypes();

  return (
    <section className={`bg-background ${FENCE_SECTION_PY}`}>
      <div className={SECTION_CONTAINER}>
        <h2 className={`max-w-2xl ${SECTION_TITLE.replace("mt-2 ", "")}`}>
          {title}
        </h2>

        <div className={`${SECTION_CONTENT_MT} w-full lg:w-[70%] lg:max-w-[52rem]`}>
          <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
            <div className="hidden border-b border-border bg-background/60 px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-muted sm:grid sm:grid-cols-[minmax(0,1.1fr)_minmax(0,0.55fr)_minmax(0,1.35fr)] sm:gap-5 sm:px-6 lg:px-7">
              <span>Тип забора</span>
              <span>Цена от</span>
              <span>Что входит</span>
            </div>

            <ul className="divide-y divide-border">
              {fenceTypes.map((type) => {
                const catalogSlug = CALCULATOR_TO_CATALOG_SLUG[type.id];
                const catalogItem = FENCE_CATALOG.find(
                  (entry) => entry.slug === catalogSlug,
                );

                return (
                  <li
                    key={type.id}
                    className="px-5 py-4 sm:grid sm:grid-cols-[minmax(0,1.1fr)_minmax(0,0.55fr)_minmax(0,1.35fr)] sm:items-start sm:gap-5 sm:px-6 sm:py-4 lg:px-7 lg:py-[1.125rem]"
                  >
                    <div>
                      {catalogItem ? (
                        <Link
                          href={catalogItem.href}
                          className="text-base font-semibold text-foreground transition-colors hover:text-accent sm:text-[1.0625rem]"
                        >
                          {type.label}
                        </Link>
                      ) : (
                        <span className="text-base font-semibold text-foreground sm:text-[1.0625rem]">
                          {type.label}
                        </span>
                      )}
                    </div>

                    <p className="mt-1.5 text-base font-bold tracking-tight text-foreground sm:mt-0 sm:text-[1.0625rem]">
                      {getPlanPriceLabel(type.id)}
                    </p>

                    <p className="mt-1.5 text-sm leading-relaxed text-muted sm:mt-0">
                      {INCLUDED_SUMMARY}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-muted">
            {disclaimer}
          </p>

          <div className="mt-4">
            <Link href="#calculator" className={SECTION_LINK}>
              Получить точный расчёт →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
