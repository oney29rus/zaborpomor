import Link from "next/link";
import { PHONE, PHONE_HREF } from "@/lib/constants";
import { FEATURED_PRICE_PLANS } from "@/lib/pricing/featured-plans";
import {
  HOME_SECTION_CONTENT_MT,
  HOME_SECTION_DESC,
  HOME_SECTION_PY,
  HOME_SECTION_TITLE,
} from "@/lib/homepage/mobile-styles";
import {
  SECTION_CONTAINER,
  SECTION_LABEL,
  SECTION_LINK,
} from "@/lib/section-styles";
import { PriceCard } from "./PriceCard";
import { PricingAddons } from "./PricingAddons";
import { PricingIncluded } from "./PricingIncluded";

export function PricingSection() {
  return (
    <section id="prices" className={`scroll-mt-24 bg-surface ${HOME_SECTION_PY}`}>
      <div className={SECTION_CONTAINER}>
        <div className="max-w-2xl">
          <p className={SECTION_LABEL}>Понятные цены</p>
          <h2 className={HOME_SECTION_TITLE}>Сколько стоит забор под ключ</h2>
          <p className={HOME_SECTION_DESC}>
            Показываем ориентировочные цены с материалом и монтажом. Точная
            стоимость зависит от длины, высоты, участка и комплектации.
          </p>
        </div>

        <div
          className={`${HOME_SECTION_CONTENT_MT} flex flex-col gap-4 lg:grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start lg:gap-6`}
        >
          <div className="grid gap-2.5 sm:grid-cols-2 sm:gap-4">
            {FEATURED_PRICE_PLANS.map((plan) => (
              <PriceCard key={plan.fenceTypeId} plan={plan} compactMobile />
            ))}
          </div>

          <PricingIncluded compactMobile />
        </div>

        <div className="mt-4 border-t border-border pt-4 lg:mt-6 lg:pt-5">
          <PricingAddons />
        </div>

        <div className="mt-5 flex flex-col items-center gap-2.5 lg:mt-8 lg:gap-3">
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
