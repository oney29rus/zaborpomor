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

const GATE_OPTIONS: { id: GateType; label: string; note?: string }[] = [
  { id: "none", label: "Без ворот" },
  {
    id: "swing",
    label: "Распашные ворота",
    note: `+${formatPrice(SWING_GATE_CALCULATOR_SURCHARGE)}`,
  },
  {
    id: "sliding",
    label: "Откатные ворота",
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
          ? "grid grid-cols-1 gap-2 sm:grid-cols-3"
          : "grid gap-3 sm:grid-cols-3"
      }
    >
      {GATE_OPTIONS.map((option) => {
        const isActive = value === option.id;

        return (
          <button
            key={option.id}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(option.id)}
            className={`rounded-lg border text-left transition-colors lg:py-2 ${
              compactMobile ? "px-2.5 py-2" : "px-3 py-2.5"
            } ${
              isActive
                ? "border-accent bg-accent/5"
                : "border-border bg-surface hover:border-muted"
            }`}
          >
            <span
              className={`block font-semibold text-foreground lg:text-[0.875rem] ${
                compactMobile ? "text-[0.8125rem] leading-snug" : "text-sm"
              }`}
            >
              {option.label}
            </span>
            {option.note && (
              <span className="mt-0.5 block text-xs text-muted">
                {option.note}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
