"use client";

import type { ReactNode } from "react";
import type { CalculatorParameterFlags } from "@/lib/calculator/config";
import { formatPrice } from "@/lib/calculator/format";
import {
  GATE_AUTOMATION_NICE_PRICE,
  PROFNASTIL_DOUBLE_SIDED_SURCHARGE_PER_METER,
  PROFNASTIL_P_PLANK_SURCHARGE_PER_METER,
} from "@/lib/calculator/prices";
import type {
  FenceHeight,
  FenceTypeId,
  GapOption,
  GateType,
  MetallVariant,
} from "@/lib/calculator/types";
import { CalculatorAdvancedSection } from "./CalculatorAdvancedSection";
import { GatesSelector } from "./GatesSelector";
import { GapSelector } from "./GapSelector";
import { HeightSelector } from "./HeightSelector";
import { LengthControl } from "./LengthControl";
import { MetallVariantSelector } from "./MetallVariantSelector";
import { OptionToggle } from "./OptionToggle";
import { WicketToggle } from "./WicketToggle";

type CalculatorParametersProps = {
  length: number;
  height: FenceHeight;
  gateType: GateType;
  hasGateAutomation: boolean;
  hasWicket: boolean;
  hasDoubleSidedPaint: boolean;
  hasPPlank: boolean;
  metallVariant: MetallVariant;
  gap: GapOption;
  fenceType: FenceTypeId;
  parameterFlags: CalculatorParameterFlags;
  compactMobile?: boolean;
  onLengthChange: (value: number) => void;
  onHeightChange: (value: FenceHeight) => void;
  onGateTypeChange: (value: GateType) => void;
  onGateAutomationChange: (value: boolean) => void;
  onWicketChange: (value: boolean) => void;
  onDoubleSidedPaintChange: (value: boolean) => void;
  onPPlankChange: (value: boolean) => void;
  onMetallVariantChange: (value: MetallVariant) => void;
  onGapChange: (value: GapOption) => void;
};

function FieldLabel({
  children,
  compactMobile = false,
}: {
  children: ReactNode;
  compactMobile?: boolean;
}) {
  return (
    <p
      className={`font-semibold text-foreground ${compactMobile ? "mb-0 text-xs lg:mb-2 lg:text-sm" : "mb-2 text-sm"}`}
    >
      {children}
    </p>
  );
}

export function CalculatorParameters({
  length,
  height,
  gateType,
  hasGateAutomation,
  hasWicket,
  hasDoubleSidedPaint,
  hasPPlank,
  metallVariant,
  gap,
  parameterFlags,
  compactMobile = false,
  onLengthChange,
  onHeightChange,
  onGateTypeChange,
  onGateAutomationChange,
  onWicketChange,
  onDoubleSidedPaintChange,
  onPPlankChange,
  onMetallVariantChange,
  onGapChange,
  fenceType,
}: CalculatorParametersProps) {
  const showGapSelector =
    parameterFlags.gap ||
    (parameterFlags.gapWhenMetallOnly && fenceType === "metalloshtaketnik");

  const hasAdvancedOptions =
    parameterFlags.metallVariant ||
    parameterFlags.doubleSidedPaint ||
    parameterFlags.pPlank;

  const advancedBlock = (
    <>
      {parameterFlags.metallVariant ? (
        <div>
          <FieldLabel compactMobile={compactMobile}>Вариант</FieldLabel>
          <MetallVariantSelector
            value={metallVariant}
            compactMobile={compactMobile}
            onChange={onMetallVariantChange}
          />
        </div>
      ) : null}

      {parameterFlags.doubleSidedPaint ? (
        <div>
          <OptionToggle
            label="Двусторонняя окраска"
            note={`+${formatPrice(PROFNASTIL_DOUBLE_SIDED_SURCHARGE_PER_METER)}/м`}
            value={hasDoubleSidedPaint}
            compactMobile={compactMobile}
            onChange={onDoubleSidedPaintChange}
          />
        </div>
      ) : null}

      {parameterFlags.pPlank ? (
        <div>
          <OptionToggle
            label="П-планка"
            note={`+${formatPrice(PROFNASTIL_P_PLANK_SURCHARGE_PER_METER)}/м`}
            value={hasPPlank}
            compactMobile={compactMobile}
            onChange={onPPlankChange}
          />
        </div>
      ) : null}
    </>
  );

  return (
    <div className={compactMobile ? "space-y-1.5 lg:space-y-3.5" : "space-y-4 lg:space-y-3.5"}>
      <div>
        {!compactMobile ? (
          <FieldLabel compactMobile={compactMobile}>Длина</FieldLabel>
        ) : null}
        <LengthControl
          value={length}
          compactMobile={compactMobile}
          onChange={onLengthChange}
        />
      </div>

      <div>
        <FieldLabel compactMobile={compactMobile}>Высота</FieldLabel>
        <HeightSelector
          value={height}
          compactMobile={compactMobile}
          onChange={onHeightChange}
        />
      </div>

      {showGapSelector ? (
        <div>
          <FieldLabel compactMobile={compactMobile}>Зазор</FieldLabel>
          <GapSelector
            value={gap}
            compactMobile={compactMobile}
            onChange={onGapChange}
          />
        </div>
      ) : null}

      <div>
        <FieldLabel compactMobile={compactMobile}>Ворота</FieldLabel>
        <GatesSelector
          value={gateType}
          compactMobile={compactMobile}
          onChange={(value) => {
            onGateTypeChange(value);
            if (value !== "sliding") {
              onGateAutomationChange(false);
            }
          }}
        />
      </div>

      {gateType === "sliding" ? (
        <div>
          <OptionToggle
            label="Автоматика Nice"
            note={`+${formatPrice(GATE_AUTOMATION_NICE_PRICE)}`}
            value={hasGateAutomation}
            compactMobile={compactMobile}
            onChange={onGateAutomationChange}
          />
        </div>
      ) : null}

      <div>
        {!compactMobile ? (
          <FieldLabel compactMobile={compactMobile}>Калитка</FieldLabel>
        ) : null}
        <WicketToggle
          value={hasWicket}
          compactMobile={compactMobile}
          onChange={onWicketChange}
        />
      </div>

      {hasAdvancedOptions ? (
        compactMobile ? (
          <CalculatorAdvancedSection>{advancedBlock}</CalculatorAdvancedSection>
        ) : (
          advancedBlock
        )
      ) : null}
    </div>
  );
}
