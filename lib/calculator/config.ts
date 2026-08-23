import type { FenceTypeId } from "./types";

export type CalculatorMode = "universal" | "page";

export type CalculatorParameterFlags = {
  doubleSidedPaint: boolean;
  pPlank: boolean;
  metallVariant: boolean;
  gap: boolean;
  /** Universal mode: gap selector only when metalloshtaketnik is selected. */
  gapWhenMetallOnly?: boolean;
};

export type CalculatorConfig = {
  mode: CalculatorMode;
  defaultFenceType: FenceTypeId;
  /** "all" — все типы из конфигурации цен; иначе ограниченный список. */
  allowedFenceTypes: FenceTypeId[] | "all";
  parameters: CalculatorParameterFlags;
  /** Сортировать типы заборов по цене (1,5 м) в селекторе. */
  sortFenceTypesByPrice?: boolean;
};

export const UNIVERSAL_CALCULATOR_CONFIG: CalculatorConfig = {
  mode: "universal",
  defaultFenceType: "svarka-setka",
  allowedFenceTypes: "all",
  sortFenceTypesByPrice: true,
  parameters: {
    doubleSidedPaint: false,
    pPlank: false,
    metallVariant: false,
    gap: false,
    gapWhenMetallOnly: true,
  },
};

const PAGE_CONFIGS: Record<FenceTypeId, CalculatorConfig | undefined> = {
  profnastil: {
    mode: "page",
    defaultFenceType: "profnastil",
    allowedFenceTypes: ["profnastil"],
    parameters: {
      doubleSidedPaint: true,
      pPlank: true,
      metallVariant: false,
      gap: false,
    },
  },
  metalloshtaketnik: {
    mode: "page",
    defaultFenceType: "metalloshtaketnik",
    allowedFenceTypes: ["metalloshtaketnik"],
    parameters: {
      doubleSidedPaint: false,
      pPlank: false,
      metallVariant: true,
      gap: true,
    },
  },
  "3d-setka": {
    mode: "page",
    defaultFenceType: "3d-setka",
    allowedFenceTypes: ["3d-setka"],
    parameters: {
      doubleSidedPaint: false,
      pPlank: false,
      metallVariant: false,
      gap: false,
    },
  },
  "svarka-setka": {
    mode: "page",
    defaultFenceType: "svarka-setka",
    allowedFenceTypes: ["svarka-setka", "svarka-setka-pvh"],
    parameters: {
      doubleSidedPaint: false,
      pPlank: false,
      metallVariant: false,
      gap: false,
    },
  },
  "svarka-setka-pvh": {
    mode: "page",
    defaultFenceType: "svarka-setka-pvh",
    allowedFenceTypes: ["svarka-setka-pvh"],
    parameters: {
      doubleSidedPaint: false,
      pPlank: false,
      metallVariant: false,
      gap: false,
    },
  },
  "derevyannyy-shtaketnik": {
    mode: "page",
    defaultFenceType: "derevyannyy-shtaketnik",
    allowedFenceTypes: ["derevyannyy-shtaketnik"],
    parameters: {
      doubleSidedPaint: false,
      pPlank: false,
      metallVariant: false,
      gap: false,
    },
  },
  "shtaketnik-shahmatka": undefined,
  karkas: undefined,
};

export function getFencePageCalculatorConfig(
  fenceTypeId: FenceTypeId,
): CalculatorConfig {
  return PAGE_CONFIGS[fenceTypeId] ?? {
    mode: "page",
    defaultFenceType: fenceTypeId,
    allowedFenceTypes: [fenceTypeId],
    parameters: {
      doubleSidedPaint: false,
      pPlank: false,
      metallVariant: false,
      gap: false,
    },
  };
}

export function resolveAllowedFenceTypes(
  config: CalculatorConfig,
): FenceTypeId[] | "all" {
  return config.allowedFenceTypes;
}

export function shouldShowFenceTypeSelector(config: CalculatorConfig): boolean {
  if (config.mode === "universal") {
    return true;
  }

  const allowed = config.allowedFenceTypes;
  return Array.isArray(allowed) && allowed.length > 1;
}

export function getFenceTypeSelectorVariant(
  config: CalculatorConfig,
): "cards" | "compact" {
  return config.mode === "universal" ? "cards" : "compact";
}
