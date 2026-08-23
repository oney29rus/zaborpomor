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
        className={`font-semibold text-foreground ${compactMobile ? "mb-1 text-[0.8125rem] lg:mb-2 lg:text-sm" : "mb-2 text-sm"}`}
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
    (parameterFlags.gapWhenMetallOnly &&
      fenceType === "metalloshtaketnik");

  return (
    <div className={compactMobile ? "space-y-2.5 lg:space-y-3.5" : "space-y-4 lg:space-y-3.5"}>
      <div>
        <FieldLabel compactMobile={compactMobile}>Длина</FieldLabel>
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

      {parameterFlags.metallVariant ? (
        <div>
          <FieldLabel>Вариант</FieldLabel>
          <MetallVariantSelector
            value={metallVariant}
            onChange={onMetallVariantChange}
          />
        </div>
      ) : null}

      {showGapSelector ? (
        <div>
          <FieldLabel>Зазор</FieldLabel>
          <GapSelector value={gap} onChange={onGapChange} />
        </div>
      ) : null}

      {parameterFlags.doubleSidedPaint ? (
        <div>
          <FieldLabel>Двусторонняя окраска</FieldLabel>
          <OptionToggle
            label="Двусторонняя окраска"
            note={`+${formatPrice(PROFNASTIL_DOUBLE_SIDED_SURCHARGE_PER_METER)}/м`}
            value={hasDoubleSidedPaint}
            onChange={onDoubleSidedPaintChange}
          />
        </div>
      ) : null}

      {parameterFlags.pPlank ? (
        <div>
          <FieldLabel>П-планка</FieldLabel>
          <OptionToggle
            label="П-планка"
            note={`+${formatPrice(PROFNASTIL_P_PLANK_SURCHARGE_PER_METER)}/м`}
            value={hasPPlank}
            onChange={onPPlankChange}
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
          <FieldLabel compactMobile={compactMobile}>Автоматика</FieldLabel>
          <OptionToggle
            label="Автоматика Nice"
            note={`+${formatPrice(GATE_AUTOMATION_NICE_PRICE)}`}
            value={hasGateAutomation}
            onChange={onGateAutomationChange}
          />
        </div>
      ) : null}

      <div>
        <FieldLabel compactMobile={compactMobile}>Калитка</FieldLabel>
        <WicketToggle
          value={hasWicket}
          compactMobile={compactMobile}
          onChange={onWicketChange}
        />
      </div>
    </div>
  );
}
