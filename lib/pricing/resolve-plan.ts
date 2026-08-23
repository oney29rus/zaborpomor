import { getFenceTypeConfig } from "@/lib/calculator/prices";
import { formatPrice } from "@/lib/calculator/format";
import type { FeaturedPricePlan } from "@/lib/pricing/featured-plans";

export function getPlanPriceLabel(fenceTypeId: FeaturedPricePlan["fenceTypeId"]): string {
  const config = getFenceTypeConfig(fenceTypeId);
  const price = config.pricePerMeter15;

  if (price === null) {
    return "Цена по расчёту";
  }

  return `от ${formatPrice(price)}/м`;
}

export function getPlanTitle(fenceTypeId: FeaturedPricePlan["fenceTypeId"]): string {
  return getFenceTypeConfig(fenceTypeId).label;
}
