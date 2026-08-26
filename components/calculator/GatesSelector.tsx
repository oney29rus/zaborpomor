"use client";

import { formatPrice } from "@/lib/calculator/format";
import {
  SLIDING_GATE_CALCULATOR_SURCHARGE,
  SWING_GATE_CALCULATOR_SURCHARGE,
} from "@/lib/calculator/prices";
import type { GateType } from "@/lib/calculator/types";

type GatesSelectorProps = {
  value: GateType;
  onChange: (value: GateType) => void;
  compactMobile?: boolean;
};

const GATE_OPTIONS: {
  id: GateType;
  label: string;
  compactLabel: string;
  note?: string;
}[] = [
  { id: "none", label: "Без ворот", compactLabel: "Без ворот" },
  {
    id: "swing",
    label: "Распашные ворота",
    compactLabel: "Распашные",
    note: `+${formatPrice(SWING_GATE_CALCULATOR_SURCHARGE)}`,
  },
  {
    id: "sliding",
    label: "Откатные ворота",
    compactLabel: "Откатные",
    note: `+${formatPrice(SLIDING_GATE_CALCULATOR_SURCHARGE)}`,
  },
];

export function GatesSelector({
  value,
  onChange,
  compactMobile = false,
}: GatesSelectorProps) {
  return (
    <div
      className={
        compactMobile
          ? "grid grid-cols-3 gap-1"
          : "grid gap-3 sm:grid-cols-3"
      }
    >
      {GATE_OPTIONS.map((option) => {
        const isActive = value === option.id;
        const displayLabel = compactMobile ? option.compactLabel : option.label;

        return (
          <button
            key={option.id}
            type="button"
            aria-pressed={isActive}
            aria-label={option.label}
            onClick={() => onChange(option.id)}
            className={`rounded-lg border text-center transition-colors lg:py-2 ${
              compactMobile
                ? "min-h-9 px-1 py-1.5 lg:min-h-10 lg:px-3 lg:py-2.5 lg:text-left"
                : "px-3 py-2.5 text-left"
            } ${
              isActive
                ? "border-accent bg-accent/5"
                : "border-border bg-surface hover:border-muted"
            }`}
          >
            <span
              className={`block font-semibold text-foreground lg:text-[0.875rem] ${
                compactMobile
                  ? "text-[0.6875rem] leading-tight lg:text-sm"
                  : "text-sm"
              }`}
            >
              {displayLabel}
            </span>
            {option.note && !compactMobile ? (
              <span className="mt-0.5 block text-xs text-muted">
                {option.note}
              </span>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}
