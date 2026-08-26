import Link from "next/link";
import type { FeaturedPricePlan } from "@/lib/pricing/featured-plans";
import { getPlanPriceLabel, getPlanTitle } from "@/lib/pricing/resolve-plan";

type PriceCardProps = {
  plan: FeaturedPricePlan;
  compactMobile?: boolean;
};

export function PriceCard({ plan, compactMobile = false }: PriceCardProps) {
  const title = getPlanTitle(plan.fenceTypeId);
  const priceLabel = getPlanPriceLabel(plan.fenceTypeId);

  return (
    <article
      className={`rounded-xl border border-border bg-surface ${
        compactMobile ? "px-3.5 py-3 lg:px-5 lg:py-4" : "px-4 py-4 lg:px-5 lg:py-4"
      }`}
    >
      <h3 className="text-base font-bold text-foreground lg:text-[1.0625rem]">
        {title}
      </h3>

      <p className="mt-1 text-lg font-bold tracking-tight text-foreground lg:mt-1.5 lg:text-xl">
        {priceLabel}
      </p>

      <p className="mt-1 text-sm leading-snug text-muted lg:mt-1.5">{plan.caption}</p>

      <Link
        href="#calculator"
        className="mt-2 inline-flex text-sm font-semibold text-accent transition-colors hover:text-accent-hover lg:mt-3"
      >
        Рассчитать стоимость
      </Link>
    </article>
  );
}
