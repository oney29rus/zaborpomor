import { FENCE_CATALOG, type FenceCatalogItem } from "@/lib/catalog/fence-types";
import type { FenceTypeId } from "@/lib/calculator/types";
import { getPlanPriceLabel } from "@/lib/pricing/resolve-plan";

const CATALOG_TO_CALCULATOR_ID: Record<string, FenceTypeId> = {
  profnastil: "profnastil",
  metalloshtaketnik: "metalloshtaketnik",
  "3d-setka": "3d-setka",
  "svarnaya-setka": "svarka-setka",
  "svarnaya-setka-pvh": "svarka-setka-pvh",
  "derevyannyy-shtaketnik": "derevyannyy-shtaketnik",
};

export function getCityFenceCatalogItems(
  slugs: string[],
  imageOverrides: Record<string, string> = {},
): FenceCatalogItem[] {
  return slugs.map((slug) => {
    const item = FENCE_CATALOG.find((entry) => entry.slug === slug);

    if (!item) {
      throw new Error(`Unknown fence catalog slug: ${slug}`);
    }

    const calculatorId = CATALOG_TO_CALCULATOR_ID[slug];

    if (!calculatorId) {
      throw new Error(`Missing calculator mapping for fence slug: ${slug}`);
    }

    return {
      ...item,
      priceLabel: getPlanPriceLabel(calculatorId),
      image: imageOverrides[slug] ?? item.image,
    };
  });
}

export const CALCULATOR_TO_CATALOG_SLUG: Partial<Record<FenceTypeId, string>> = {
  profnastil: "profnastil",
  metalloshtaketnik: "metalloshtaketnik",
  "3d-setka": "3d-setka",
  "svarka-setka": "svarnaya-setka",
  "svarka-setka-pvh": "svarnaya-setka-pvh",
  "derevyannyy-shtaketnik": "derevyannyy-shtaketnik",
};
