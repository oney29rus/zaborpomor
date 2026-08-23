import type { FenceHeight, FenceTypeConfig, FenceTypeId, GapOption } from "./types";

/**
 * Централизованный конфигурационный файл цен.
 * Все изменения актуального коммерческого прайса — только здесь.
 *
 * Standalone-цены ворот и calculator surcharge — разные значения.
 * Исторические цены выполненных объектов (lib/works/projects.ts) не трогать.
 */

/** @deprecated Используйте getPricePerMeter() — надбавки теперь задаются явно в pricePerMeter18. */
export const HEIGHT_SURCHARGE_PER_METER = 300;

/** Доплата за распашные ворота в калькуляторе забора. */
export const SWING_GATE_CALCULATOR_SURCHARGE = 15_000;

/** Доплата за откатные ворота в калькуляторе забора. */
export const SLIDING_GATE_CALCULATOR_SURCHARGE = 100_000;

/** Standalone: распашные ворота шириной 4 м под ключ. */
export const SWING_GATE_STANDALONE_FROM = 25_000;

/** Standalone: откатные ворота шириной 4 м под ключ. */
export const SLIDING_GATE_STANDALONE_FROM = 110_000;

/** Автоматика Nice — доп. опция к откатным воротам. */
export const GATE_AUTOMATION_NICE_PRICE = 70_000;

/** @deprecated Используйте SWING_GATE_CALCULATOR_SURCHARGE в калькуляторе. */
export const SWING_GATE_PRICE = SWING_GATE_CALCULATOR_SURCHARGE;

/** @deprecated Используйте getPricePerMeter("svarka-setka-pvh", 1.8). */
export const SVARKA_PVH_PRICE_PER_METER_18 = 3_000;

/** Калитка — стоимость уточняется. */
export const WICKET_PRICE = 0;

/** Двусторонняя окраска профнастила за п.м. */
export const PROFNASTIL_DOUBLE_SIDED_SURCHARGE_PER_METER = 200;

/** П-планка для профнастила за п.м. */
export const PROFNASTIL_P_PLANK_SURCHARGE_PER_METER = 300;

/** Зазор 2 см у металлоштакетника — доплата за п.м. */
export const METALLOSHTAKETNIK_GAP_2CM_SURCHARGE_PER_METER = 250;

/** Винтовая свая Ø57 мм — комплект под ключ. */
export const SCREW_PILE_57_PRICE = 5_000;

/** Винтовая свая Ø76 мм — комплект под ключ. */
export const SCREW_PILE_76_PRICE = 5_500;

/** Минимальная цена сваи (для карточек «от …»). */
export const SCREW_PILE_PRICE_FROM = SCREW_PILE_57_PRICE;

/** Верхняя граница типовой комплектации свай. */
export const SCREW_PILE_PRICE_TO = SCREW_PILE_76_PRICE;

export const LENGTH_MIN = 10;
export const LENGTH_MAX = 300;
export const LENGTH_STEP = 1;
export const LENGTH_DEFAULT = 50;

export const FENCE_TYPES: FenceTypeConfig[] = [
  {
    id: "profnastil",
    label: "Профнастил",
    pricePerMeter15: 3_400,
    pricePerMeter18: 3_600,
    visibleInCalculator: true,
  },
  {
    id: "metalloshtaketnik",
    label: "Металлоштакетник",
    pricePerMeter15: 3_600,
    pricePerMeter18: 3_900,
    visibleInCalculator: true,
  },
  {
    id: "3d-setka",
    label: "3D-сетка",
    pricePerMeter15: 3_000,
    pricePerMeter18: 3_200,
    visibleInCalculator: true,
  },
  {
    id: "svarka-setka",
    label: "Сварная сетка",
    pricePerMeter15: 2_400,
    pricePerMeter18: 2_600,
    visibleInCalculator: true,
  },
  {
    id: "svarka-setka-pvh",
    label: "Сварная сетка ПВХ",
    pricePerMeter15: 2_800,
    pricePerMeter18: 3_000,
    visibleInCalculator: true,
  },
  {
    id: "derevyannyy-shtaketnik",
    label: "Деревянный штакетник",
    pricePerMeter15: 3_600,
    pricePerMeter18: 3_800,
    visibleInCalculator: true,
  },
  {
    id: "shtaketnik-shahmatka",
    label: "Штакетник «шахматка»",
    pricePerMeter15: 6_000,
    pricePerMeter18: 6_300,
    visibleInCalculator: false,
  },
  {
    id: "karkas",
    label: "Каркас",
    pricePerMeter15: 2_000,
    pricePerMeter18: 2_000,
    visibleInCalculator: false,
  },
];

export function getFenceTypeConfig(id: FenceTypeId): FenceTypeConfig {
  const config = FENCE_TYPES.find((type) => type.id === id);
  if (!config) {
    throw new Error(`Unknown fence type: ${id}`);
  }
  return config;
}

export function getCalculatorFenceTypes(): FenceTypeConfig[] {
  return FENCE_TYPES.filter((type) => type.visibleInCalculator);
}

/** Типы для universal-калькулятора: от меньшей цены (1,5 м) к большей. */
export function getCalculatorFenceTypesSortedByPrice(): FenceTypeConfig[] {
  return [...getCalculatorFenceTypes()].sort((a, b) => {
    const priceA = a.pricePerMeter15 ?? Number.POSITIVE_INFINITY;
    const priceB = b.pricePerMeter15 ?? Number.POSITIVE_INFINITY;

    if (priceA !== priceB) {
      return priceA - priceB;
    }

    if (a.id === "metalloshtaketnik") {
      return -1;
    }

    if (b.id === "metalloshtaketnik") {
      return 1;
    }

    return 0;
  });
}

export function getPricePerMeter(
  id: FenceTypeId,
  height: FenceHeight,
): number {
  const config = getFenceTypeConfig(id);
  const price15 = config.pricePerMeter15;

  if (price15 === null) {
    throw new Error(`Fence type ${id} has no price configured`);
  }

  if (height === 1.5) {
    return price15;
  }

  return config.pricePerMeter18 ?? price15 + HEIGHT_SURCHARGE_PER_METER;
}

export function formatPricePerMeterLabel(amount: number): string {
  return `от ${amount.toLocaleString("ru-RU")} ₽/м`;
}

export function formatCalculatorSurchargeLabel(amount: number): string {
  return `+${amount.toLocaleString("ru-RU")} ₽`;
}

/** Доплата за п.м. при зазоре 2 см у металлоштакетника. */
export function getMetalloshtaketnikGapSurchargePerMeter(
  fenceType: FenceTypeId,
  gap: GapOption,
): number {
  if (fenceType === "metalloshtaketnik" && gap === "2cm") {
    return METALLOSHTAKETNIK_GAP_2CM_SURCHARGE_PER_METER;
  }

  return 0;
}
