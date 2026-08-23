import Link from "next/link";
import { PHONE, PHONE_HREF } from "@/lib/constants";
import { FEATURED_PRICE_PLANS } from "@/lib/pricing/featured-plans";
import {
  SECTION_CONTAINER,
  SECTION_CONTENT_MT,
  SECTION_DESC,
  SECTION_LABEL,
  SECTION_LINK,
  SECTION_PY,
  SECTION_TITLE,
} from "@/lib/section-styles";
import { PriceCard } from "./PriceCard";
import { PricingAddons } from "./PricingAddons";
import { PricingIncluded } from "./PricingIncluded";

export function PricingSection() {
  return (
    <section id="prices" className={`scroll-mt-24 bg-surface ${SECTION_PY}`}>
      <div className={SECTION_CONTAINER}>
        <div className="max-w-2xl">
          <p className={SECTION_LABEL}>Понятные цены</p>
          <h2 className={SECTION_TITLE}>Сколько стоит забор под ключ</h2>
          <p className={SECTION_DESC}>
            Показываем ориентировочные цены с материалом и монтажом. Точная
            стоимость зависит от длины, высоты, участка и комплектации.
          </p>
        </div>

        <div
          className={`${SECTION_CONTENT_MT} flex flex-col gap-6 lg:grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start lg:gap-6`}
        >
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            {FEATURED_PRICE_PLANS.map((plan) => (
              <PriceCard key={plan.fenceTypeId} plan={plan} />
            ))}
          </div>

          <PricingIncluded />
        </div>

        <div className="mt-6 border-t border-border pt-5">
          <PricingAddons />
        </div>

        <div className="mt-8 flex flex-col items-center gap-3">
          <Link href="#calculator" className={SECTION_LINK}>
            Рассчитать стоимость →
          </Link>
          <a href={PHONE_HREF} className={SECTION_LINK}>
            {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}
