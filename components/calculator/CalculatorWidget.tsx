"use client";

import { useMemo, useRef, useState } from "react";
import {
  getFenceTypeSelectorVariant,
  shouldShowFenceTypeSelector,
  type CalculatorConfig,
  UNIVERSAL_CALCULATOR_CONFIG,
} from "@/lib/calculator/config";
import { calculateFenceCost } from "@/lib/calculator/calculate";
import { LENGTH_DEFAULT } from "@/lib/calculator/prices";
import type {
  CalculatorParams,
  FenceHeight,
  FenceTypeId,
  GateType,
  GapOption,
  MetallVariant,
} from "@/lib/calculator/types";
import { trackEvent } from "@/lib/analytics/track";
import { CalculatorPanelHeader } from "./CalculatorPanelHeader";
import { CalculatorParameters } from "./CalculatorParameters";
import { CalculatorResult } from "./CalculatorResult";
import { FenceTypeSelector } from "./FenceTypeSelector";

const UNIVERSAL_LENGTH_DEFAULT = 20;
const PAGE_LENGTH_DEFAULT = LENGTH_DEFAULT;
const PAGE_HEIGHT_DEFAULT: FenceHeight = 1.8;
const UNIVERSAL_HEIGHT_DEFAULT: FenceHeight = 1.5;

const SHARED_DEFAULT_PARAMS = {
  gateType: "none" as const,
  hasGateAutomation: false,
  hasWicket: false,
  hasDoubleSidedPaint: false,
  hasPPlank: false,
  metallVariant: "standard" as const,
  gap: "4cm" as const,
};

type CalculatorWidgetProps = {
  config?: CalculatorConfig;
  defaultFenceType?: FenceTypeId;
  initialParams?: Partial<CalculatorParams>;
};

function buildInitialParams({
  config,
  defaultFenceType,
  initialParams,
}: CalculatorWidgetProps & { config: CalculatorConfig }): CalculatorParams {
  const resolvedFenceType = defaultFenceType ?? config.defaultFenceType;
  const isUniversal = config.mode === "universal";

  return {
    ...SHARED_DEFAULT_PARAMS,
    fenceType: resolvedFenceType,
    length: isUniversal ? UNIVERSAL_LENGTH_DEFAULT : PAGE_LENGTH_DEFAULT,
    height: isUniversal ? UNIVERSAL_HEIGHT_DEFAULT : PAGE_HEIGHT_DEFAULT,
    ...initialParams,
    ...(defaultFenceType ? { fenceType: defaultFenceType } : {}),
  };
}

export function CalculatorWidget({
  config = UNIVERSAL_CALCULATOR_CONFIG,
  defaultFenceType,
  initialParams,
}: CalculatorWidgetProps = {}) {
  const [params, setParams] = useState<CalculatorParams>(() =>
    buildInitialParams({ config, defaultFenceType, initialParams }),
  );
  const hasInteractionRef = useRef(false);

  const result = useMemo(() => calculateFenceCost(params), [params]);

  const showFenceTypeSelector = shouldShowFenceTypeSelector(config);
  const fenceSelectorVariant = getFenceTypeSelectorVariant(config);
  const isUniversal = config.mode === "universal";
  const compactMobile = isUniversal;

  const trackFirstCalculatorInteraction = () => {
    if (hasInteractionRef.current) {
      return;
    }

    hasInteractionRef.current = true;
    trackEvent("calculator_interaction", {
      mode: config.mode,
      fenceType: params.fenceType,
    });
  };

  const update = <K extends keyof CalculatorParams>(
    key: K,
    value: CalculatorParams[K],
  ) => {
    trackFirstCalculatorInteraction();
    setParams((prev) => ({ ...prev, [key]: value }));
  };

  const parametersBlock = (
    <CalculatorParameters
      length={params.length}
      height={params.height}
      gateType={params.gateType}
      hasGateAutomation={params.hasGateAutomation}
      hasWicket={params.hasWicket}
      hasDoubleSidedPaint={params.hasDoubleSidedPaint}
      hasPPlank={params.hasPPlank}
      metallVariant={params.metallVariant}
      gap={params.gap}
      fenceType={params.fenceType}
      parameterFlags={config.parameters}
      compactMobile={compactMobile}
      onLengthChange={(value) => update("length", value)}
      onHeightChange={(value: FenceHeight) => update("height", value)}
      onGateTypeChange={(value: GateType) => update("gateType", value)}
      onGateAutomationChange={(value) => update("hasGateAutomation", value)}
      onWicketChange={(value) => update("hasWicket", value)}
      onDoubleSidedPaintChange={(value) => update("hasDoubleSidedPaint", value)}
      onPPlankChange={(value) => update("hasPPlank", value)}
      onMetallVariantChange={(value: MetallVariant) =>
        update("metallVariant", value)
      }
      onGapChange={(value: GapOption) => update("gap", value)}
    />
  );

  const resultBlock = (
    <CalculatorResult
      params={params}
      result={result}
      parameterFlags={config.parameters}
      compactMobile={compactMobile}
    />
  );

  const shellClassName = compactMobile
    ? "max-lg:border-0 max-lg:bg-transparent max-lg:p-0 lg:rounded-2xl lg:border lg:border-border lg:bg-surface lg:p-7"
    : "rounded-2xl border border-border bg-surface p-5 sm:p-6 lg:p-7";

  if (isUniversal) {
    return (
      <div className={shellClassName}>
        <div className="flex flex-col gap-1.5 max-lg:gap-1.5 lg:grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.85fr)] lg:items-start lg:gap-6">
          <div className="min-w-0">
            <CalculatorPanelHeader
              step="01"
              title="Выберите вид забора"
              compactMobile={compactMobile}
            />
            <FenceTypeSelector
              value={params.fenceType}
              allowedTypes={config.allowedFenceTypes}
              variant={fenceSelectorVariant}
              compactMobile={compactMobile}
              sortByPrice={config.sortFenceTypesByPrice}
              onChange={(value: FenceTypeId) => update("fenceType", value)}
            />
          </div>

          <div className="min-w-0 max-lg:border-t max-lg:border-border/80 max-lg:pt-1.5 lg:border-l lg:border-border lg:pl-6">
            <CalculatorPanelHeader
              step="02"
              title="Параметры"
              compactMobile={compactMobile}
            />
            {parametersBlock}
            {resultBlock}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={shellClassName}>
      <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-start lg:gap-6">
        <div className="min-w-0 space-y-4 lg:space-y-3.5">
          {showFenceTypeSelector ? (
            <div>
              <CalculatorPanelHeader step="01" title="Тип сетки" />
              <FenceTypeSelector
                value={params.fenceType}
                allowedTypes={config.allowedFenceTypes}
                variant={fenceSelectorVariant}
                onChange={(value: FenceTypeId) => update("fenceType", value)}
              />
            </div>
          ) : null}

          <div>
            <CalculatorPanelHeader
              step={showFenceTypeSelector ? "02" : "01"}
              title="Параметры"
            />
            {parametersBlock}
          </div>
        </div>

        <div className="min-w-0 lg:border-l lg:border-border lg:pl-6">
          {resultBlock}
        </div>
      </div>
    </div>
  );
}
