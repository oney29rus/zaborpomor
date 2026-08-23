import type { FenceTypeId } from "@/lib/calculator/types";

/** Метаданные карточек цен — цены берутся из lib/calculator/prices.ts */
export type FeaturedPricePlan = {
  fenceTypeId: FenceTypeId;
  caption: string;
};

export const FEATURED_PRICE_PLANS: FeaturedPricePlan[] = [
  {
    fenceTypeId: "svarka-setka",
    caption: "Доступный вариант ограждения участка",
  },
  {
    fenceTypeId: "3d-setka",
    caption: "Практичное решение для дачи и участка",
  },
  {
    fenceTypeId: "metalloshtaketnik",
    caption: "Современный забор с хорошей продуваемостью",
  },
  {
    fenceTypeId: "profnastil",
    caption: "Сплошной забор, закрывающий участок от посторонних взглядов",
  },
];

export const PRICING_INCLUDED_ITEMS = [
  "материал забора",
  "металлические столбы",
  "лаги",
  "крепёж",
  "монтаж",
  "установка по уровню",
  "гарантия 24 месяца",
] as const;

export const PRICING_FOOTNOTE =
  "Окончательная стоимость фиксируется после уточнения параметров участка и комплектации.";
