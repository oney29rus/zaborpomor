export type FenceTypeId =
  | "profnastil"
  | "metalloshtaketnik"
  | "3d-setka"
  | "svarka-setka"
  | "svarka-setka-pvh"
  | "derevyannyy-shtaketnik"
  | "shtaketnik-shahmatka"
  | "karkas";

export type FenceHeight = 1.5 | 1.8;

export type GateType = "none" | "swing" | "sliding";

export type MetallVariant = "standard" | "shahmatka";

export type GapOption = "4cm" | "2cm" | "closed";

export type CalculatorParams = {
  fenceType: FenceTypeId;
  length: number;
  height: FenceHeight;
  gateType: GateType;
  hasGateAutomation: boolean;
  hasWicket: boolean;
  hasDoubleSidedPaint: boolean;
  hasPPlank: boolean;
  metallVariant: MetallVariant;
  gap: GapOption;
};

export type CalculatorBreakdown = {
  fenceLineCost: number;
  heightSurcharge: number;
  doubleSidedPaintCost: number;
  pPlankCost: number;
  gateCost: number;
  gateAutomationCost: number;
  wicketCost: number;
};

export type PricedResult = {
  kind: "priced";
  total: number;
  breakdown: CalculatorBreakdown;
  pricePerMeter: number;
};

export type UnpricedResult = {
  kind: "unpriced";
  message: string;
};

export type CalculatorResult = PricedResult | UnpricedResult;

export type FenceTypeConfig = {
  id: FenceTypeId;
  label: string;
  /** Цена за п.м. при высоте 1,5 м. null — цена не установлена (TODO). */
  pricePerMeter15: number | null;
  /** Цена за п.м. при высоте 1,8 м. */
  pricePerMeter18: number | null;
  visibleInCalculator: boolean;
};
