import {

  GATE_AUTOMATION_NICE_PRICE,

  LENGTH_MAX,

  LENGTH_MIN,

  PROFNASTIL_DOUBLE_SIDED_SURCHARGE_PER_METER,

  PROFNASTIL_P_PLANK_SURCHARGE_PER_METER,

  SLIDING_GATE_CALCULATOR_SURCHARGE,

  SWING_GATE_CALCULATOR_SURCHARGE,

  WICKET_PRICE,

  getFenceTypeConfig,

  getMetalloshtaketnikGapSurchargePerMeter,

  getPricePerMeter,

} from "./prices";

import type {

  CalculatorParams,

  CalculatorResult,

  FenceTypeId,

  GateType,

} from "./types";



function resolveEffectiveFenceType(params: CalculatorParams): FenceTypeId {

  if (params.metallVariant === "shahmatka") {

    return "shtaketnik-shahmatka";

  }



  return params.fenceType;

}



function getProfnastilAddonsPerMeter(params: CalculatorParams): {

  doubleSidedPaintCost: number;

  pPlankCost: number;

} {

  if (params.fenceType !== "profnastil") {

    return { doubleSidedPaintCost: 0, pPlankCost: 0 };

  }



  return {

    doubleSidedPaintCost: params.hasDoubleSidedPaint

      ? PROFNASTIL_DOUBLE_SIDED_SURCHARGE_PER_METER * params.length

      : 0,

    pPlankCost: params.hasPPlank

      ? PROFNASTIL_P_PLANK_SURCHARGE_PER_METER * params.length

      : 0,

  };

}



function getGateCost(gateType: GateType): number {

  switch (gateType) {

    case "swing":

      return SWING_GATE_CALCULATOR_SURCHARGE;

    case "sliding":

      return SLIDING_GATE_CALCULATOR_SURCHARGE;

    default:

      return 0;

  }

}



function getGateAutomationCost(params: CalculatorParams): number {

  if (params.gateType === "sliding" && params.hasGateAutomation) {

    return GATE_AUTOMATION_NICE_PRICE;

  }



  return 0;

}



export function calculateFenceCost(params: CalculatorParams): CalculatorResult {

  const effectiveFenceType = resolveEffectiveFenceType(params);

  const fenceConfig = getFenceTypeConfig(effectiveFenceType);

  const basePrice = fenceConfig.pricePerMeter15;



  if (basePrice === null) {

    return {

      kind: "unpriced",

      message: "Цена по расчёту",

    };

  }



  const pricePerMeter = getPricePerMeter(effectiveFenceType, params.height);

  const gapSurchargePerMeter = getMetalloshtaketnikGapSurchargePerMeter(

    params.fenceType,

    params.gap,

  );

  const fenceLineCost = (pricePerMeter + gapSurchargePerMeter) * params.length;

  const price15 = getPricePerMeter(effectiveFenceType, 1.5);

  const heightSurcharge =

    params.height === 1.8 ? (pricePerMeter - price15) * params.length : 0;

  const { doubleSidedPaintCost, pPlankCost } =

    getProfnastilAddonsPerMeter(params);

  const gateCost = getGateCost(params.gateType);

  const gateAutomationCost = getGateAutomationCost(params);

  const wicketCost = params.hasWicket ? WICKET_PRICE : 0;



  const addonPerMeter =

    (params.fenceType === "profnastil" && params.hasDoubleSidedPaint

      ? PROFNASTIL_DOUBLE_SIDED_SURCHARGE_PER_METER

      : 0) +

    (params.fenceType === "profnastil" && params.hasPPlank

      ? PROFNASTIL_P_PLANK_SURCHARGE_PER_METER

      : 0);



  const total =

    fenceLineCost +

    doubleSidedPaintCost +

    pPlankCost +

    gateCost +

    gateAutomationCost +

    wicketCost;



  return {

    kind: "priced",

    total,

    pricePerMeter: pricePerMeter + addonPerMeter + gapSurchargePerMeter,

    breakdown: {

      fenceLineCost,

      heightSurcharge,

      doubleSidedPaintCost,

      pPlankCost,

      gateCost,

      gateAutomationCost,

      wicketCost,

    },

  };

}



export function clampLength(value: number): number {

  return Math.min(LENGTH_MAX, Math.max(LENGTH_MIN, Math.round(value)));

}



export function getEffectiveFenceTypeLabel(params: CalculatorParams): string {

  return getFenceTypeConfig(resolveEffectiveFenceType(params)).label;

}


