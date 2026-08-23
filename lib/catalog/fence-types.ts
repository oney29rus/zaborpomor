import type { FenceTypeId } from "@/lib/calculator/types";
import {
  formatPricePerMeterLabel,
  getFenceTypeConfig,
  getPricePerMeter,
} from "@/lib/calculator/prices";
import { getFenceHeroMedia } from "@/lib/fence-pages/hero-media";

export type FenceCatalogSize = "featured" | "standard" | "wide";

export type FenceCatalogItem = {
  slug: string;
  title: string;
  /** Готовая строка для UI: «от 4 000 ₽/м» или «Цена по расчёту». */
  priceLabel: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
  imageObjectPosition?: string;
  size: FenceCatalogSize;
};

const CATALOG_FENCE_TYPE_IDS: Record<string, FenceTypeId> = {
  metalloshtaketnik: "metalloshtaketnik",
  profnastil: "profnastil",
  "3d-setka": "3d-setka",
  "svarnaya-setka": "svarka-setka",
  "svarnaya-setka-pvh": "svarka-setka-pvh",
  "derevyannyy-shtaketnik": "derevyannyy-shtaketnik",
};

function buildCatalogPriceLabel(slug: string): string {
  const fenceTypeId = CATALOG_FENCE_TYPE_IDS[slug];

  if (!fenceTypeId) {
    return "Цена по расчёту";
  }

  const config = getFenceTypeConfig(fenceTypeId);

  if (config.pricePerMeter15 === null) {
    return "Цена по расчёту";
  }

  return formatPricePerMeterLabel(getPricePerMeter(fenceTypeId, 1.5));
}

function buildCatalogHero(slug: string): Pick<
  FenceCatalogItem,
  "image" | "imageAlt" | "imageObjectPosition"
> {
  const hero = getFenceHeroMedia(slug);

  if (!hero) {
    throw new Error(`Missing hero media for fence catalog slug: ${slug}`);
  }

  return {
    image: hero.image,
    imageAlt: hero.imageAlt,
    imageObjectPosition: hero.imageObjectPosition,
  };
}

export const FENCE_CATALOG: FenceCatalogItem[] = [
  {
    slug: "metalloshtaketnik",
    title: "Металлоштакетник",
    priceLabel: buildCatalogPriceLabel("metalloshtaketnik"),
    description:
      "Современный металлический забор с хорошей продуваемостью участка.",
    href: "/zabory/metalloshtaketnik/",
    ...buildCatalogHero("metalloshtaketnik"),
    size: "featured",
  },
  {
    slug: "profnastil",
    title: "Профнастил",
    priceLabel: buildCatalogPriceLabel("profnastil"),
    description:
      "Сплошной забор, закрывающий участок от посторонних взглядов.",
    href: "/zabory/profnastil/",
    ...buildCatalogHero("profnastil"),
    size: "featured",
  },
  {
    slug: "3d-setka",
    title: "3D-сетка",
    priceLabel: buildCatalogPriceLabel("3d-setka"),
    description:
      "Практичный вариант для дачи, участка или коммерческой территории.",
    href: "/zabory/3d-setka/",
    ...buildCatalogHero("3d-setka"),
    size: "standard",
  },
  {
    slug: "svarnaya-setka",
    title: "Сварная сетка",
    priceLabel: buildCatalogPriceLabel("svarnaya-setka"),
    description: "Один из самых доступных вариантов ограждения участка.",
    href: "/zabory/svarnaya-setka/",
    ...buildCatalogHero("svarnaya-setka"),
    size: "standard",
  },
  {
    slug: "svarnaya-setka-pvh",
    title: "Сварная сетка ПВХ",
    priceLabel: buildCatalogPriceLabel("svarnaya-setka-pvh"),
    description:
      "Оцинкованная сварная сетка с ПВХ-покрытием — практичный вариант для дачи.",
    href: "/zabory/svarnaya-setka-pvh/",
    ...buildCatalogHero("svarnaya-setka-pvh"),
    size: "standard",
  },
  {
    slug: "derevyannyy-shtaketnik",
    title: "Деревянный штакетник",
    priceLabel: buildCatalogPriceLabel("derevyannyy-shtaketnik"),
    description: "Классический внешний вид с натуральной фактурой дерева.",
    href: "/zabory/derevyannyy-shtaketnik/",
    ...buildCatalogHero("derevyannyy-shtaketnik"),
    size: "standard",
  },
];

export const FENCE_CATALOG_ALL_HREF = "/";

export function getFeaturedFenceTypes(): FenceCatalogItem[] {
  return FENCE_CATALOG.filter((item) => item.size === "featured");
}

export function getStandardFenceTypes(): FenceCatalogItem[] {
  return FENCE_CATALOG.filter((item) => item.size === "standard");
}

export function getWideFenceTypes(): FenceCatalogItem[] {
  return FENCE_CATALOG.filter((item) => item.size === "wide");
}
