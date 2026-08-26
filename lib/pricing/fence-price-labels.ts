import type { FenceTypeId } from "@/lib/calculator/types";
import {
  formatCalculatorSurchargeLabel,
  formatPricePerMeterLabel,
  getPricePerMeter,
  SWING_GATE_CALCULATOR_SURCHARGE,
  SLIDING_GATE_CALCULATOR_SURCHARGE,
  GATE_AUTOMATION_NICE_PRICE,
} from "@/lib/calculator/prices";

export const FENCE_HEIGHTS_SPEC_LABEL = "1,5 / 1,8 / 2,0 м";

export type FencePricingRow = {
  label: string;
  value: string;
};

export function fencePriceFromLabel15(fenceTypeId: FenceTypeId): string {
  return formatPricePerMeterLabel(getPricePerMeter(fenceTypeId, 1.5));
}

export function fencePriceFromLabel18(fenceTypeId: FenceTypeId): string {
  return formatPricePerMeterLabel(getPricePerMeter(fenceTypeId, 1.8));
}

export function fencePriceFromLabel20(fenceTypeId: FenceTypeId): string {
  return formatPricePerMeterLabel(getPricePerMeter(fenceTypeId, 2.0));
}

export function buildFenceHeightPricingRows(
  fenceTypeId: FenceTypeId,
  labelPrefix = "Высота",
): FencePricingRow[] {
  return [
    { label: `${labelPrefix} 1,5 м`, value: fencePriceFromLabel15(fenceTypeId) },
    { label: `${labelPrefix} 1,8 м`, value: fencePriceFromLabel18(fenceTypeId) },
    { label: `${labelPrefix} 2,0 м`, value: fencePriceFromLabel20(fenceTypeId) },
  ];
}

export function fenceFaqPriceByHeightAnswer(
  fenceTypeId: FenceTypeId,
  suffix: string,
): string {
  return `Ориентировочная цена — ${fencePriceFromLabel15(fenceTypeId)} с материалом и монтажом при высоте 1,5 м, ${fencePriceFromLabel18(fenceTypeId)} при высоте 1,8 м, ${fencePriceFromLabel20(fenceTypeId)} при высоте 2,0 м. ${suffix}`;
}

export function fenceFaqHeightChoiceAnswer(fenceTypeId: FenceTypeId): string {
  return `Доступны высоты 1,5 м (${fencePriceFromLabel15(fenceTypeId)}), 1,8 м (${fencePriceFromLabel18(fenceTypeId)}) и 2,0 м (${fencePriceFromLabel20(fenceTypeId)}). Для дачи часто достаточно 1,5 м, для частного дома — 1,8 или 2,0 м. Высоту подбираем под участок, соседние ограждения и задачи по приватности.`;
}

export function swingGateCalculatorSurchargeLabel(): string {
  return formatCalculatorSurchargeLabel(SWING_GATE_CALCULATOR_SURCHARGE);
}

export function slidingGateCalculatorSurchargeLabel(): string {
  return formatCalculatorSurchargeLabel(SLIDING_GATE_CALCULATOR_SURCHARGE);
}

export function gateAutomationNiceSurchargeLabel(): string {
  return formatCalculatorSurchargeLabel(GATE_AUTOMATION_NICE_PRICE);
}
