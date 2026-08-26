import type { FenceTypeId } from "@/lib/calculator/types";
import {
  formatCalculatorSurchargeLabel,
  formatPricePerMeterLabel,
  getPricePerMeter,
  SWING_GATE_CALCULATOR_SURCHARGE,
  SLIDING_GATE_CALCULATOR_SURCHARGE,
  GATE_AUTOMATION_NICE_PRICE,
} from "@/lib/calculator/prices";

export function fencePriceFromLabel15(fenceTypeId: FenceTypeId): string {
  return formatPricePerMeterLabel(getPricePerMeter(fenceTypeId, 1.5));
}

export function fencePriceFromLabel18(fenceTypeId: FenceTypeId): string {
  return formatPricePerMeterLabel(getPricePerMeter(fenceTypeId, 1.8));
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

