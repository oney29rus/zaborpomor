import Link from "next/link";
import type { FeaturedPricePlan } from "@/lib/pricing/featured-plans";
import { getPlanPriceLabel, getPlanTitle } from "@/lib/pricing/resolve-plan";

type PriceCardProps = {
  plan: FeaturedPricePlan;
};

export function PriceCard({ plan }: PriceCardProps) {
  const title = getPlanTitle(plan.fenceTypeId);
  const priceLabel = getPlanPriceLabel(plan.fenceTypeId);

  return (
    <article className="rounded-xl border border-border bg-surface px-4 py-4 lg:px-5 lg:py-4">
      <h3 className="text-base font-bold text-foreground lg:text-[1.0625rem]">
        {title}
      </h3>

      <p className="mt-1.5 text-lg font-bold tracking-tight text-foreground lg:text-xl">
        {priceLabel}
      </p>

      <p className="mt-1.5 text-sm leading-snug text-muted">{plan.caption}</p>

      <Link
        href="#calculator"
        className="mt-3 inline-flex text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
      >
        Рассчитать стоимость
      </Link>
    </article>
  );
}
