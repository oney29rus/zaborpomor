import { getEffectiveFenceTypeLabel } from "@/lib/calculator/calculate";
import type { CalculatorParameterFlags } from "@/lib/calculator/config";
import {
  formatGap,
  formatGateType,
  formatMetallVariant,
  formatPrice,
} from "@/lib/calculator/format";
import type {
  CalculatorParams,
  CalculatorResult,
} from "@/lib/calculator/types";
import type { CalculatorLeadData } from "./types";

function formatExecutionVariant(
  params: CalculatorParams,
  parameterFlags: CalculatorParameterFlags,
): string | null {
  const parts: string[] = [];

  if (parameterFlags.metallVariant) {
    parts.push(
      params.metallVariant === "shahmatka"
        ? formatMetallVariant("shahmatka")
        : `Обычный ${formatMetallVariant("standard")}`,
    );
  }

  if (parameterFlags.doubleSidedPaint && params.hasDoubleSidedPaint) {
    parts.push("Двусторонняя окраска");
  }

  if (parameterFlags.pPlank && params.hasPPlank) {
    parts.push("П-планка");
  }

  return parts.length > 0 ? parts.join(", ") : null;
}

export function buildCalculatorSummaryLine(
  params: CalculatorParams,
  parameterFlags: CalculatorParameterFlags,
): string {
  const fenceLabel =
    parameterFlags.metallVariant && params.metallVariant === "shahmatka"
      ? formatMetallVariant(params.metallVariant)
      : getEffectiveFenceTypeLabel(params).toLowerCase();
  const height = `${params.height.toString().replace(".", ",")} м`;
  const gate = formatGateType(params.gateType).toLowerCase();
  const parts = [`${params.length} м`, fenceLabel, height];

  if (parameterFlags.doubleSidedPaint && params.hasDoubleSidedPaint) {
    parts.push("двусторонняя окраска");
  }

  if (parameterFlags.pPlank && params.hasPPlank) {
    parts.push("П-планка");
  }

  if (
    parameterFlags.gap ||
    (parameterFlags.gapWhenMetallOnly &&
      params.fenceType === "metalloshtaketnik")
  ) {
    parts.push(formatGap(params.gap));
  }

  parts.push(gate);

  if (params.gateType === "sliding" && params.hasGateAutomation) {
    parts.push("автоматика Nice");
  }

  if (params.hasWicket) {
    parts.push("калитка");
  }

  return parts.join(" • ");
}

export function buildCalculatorLeadData(
  params: CalculatorParams,
  result: CalculatorResult,
  parameterFlags: CalculatorParameterFlags,
): CalculatorLeadData {
  const executionVariant = formatExecutionVariant(params, parameterFlags);

  const showGap =
    parameterFlags.gap ||
    (parameterFlags.gapWhenMetallOnly &&
      params.fenceType === "metalloshtaketnik");

  return {
    fenceType: params.fenceType,
    fenceTypeLabel: getEffectiveFenceTypeLabel(params),
    length: params.length,
    height: params.height,
    executionVariant,
    gap: showGap ? formatGap(params.gap) : null,
    gateType: params.gateType,
    gateTypeLabel: formatGateType(params.gateType),
    hasWicket: params.hasWicket,
    hasGateAutomation:
      params.gateType === "sliding" && params.hasGateAutomation,
    estimatedCost: result.kind === "priced" ? result.total : null,
    estimatedCostLabel:
      result.kind === "priced" ? formatPrice(result.total) : null,
    summaryLine: buildCalculatorSummaryLine(params, parameterFlags),
  };
}
