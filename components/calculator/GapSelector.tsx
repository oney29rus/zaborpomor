"use client";

import {
  METALLOSHTAKETNIK_GAP_2CM_SURCHARGE_PER_METER,
} from "@/lib/calculator/prices";
import type { GapOption } from "@/lib/calculator/types";

type GapSelectorProps = {
  value: GapOption;
  onChange: (value: GapOption) => void;
  compactMobile?: boolean;
};

const GAP_OPTIONS: { id: GapOption; label: string; note?: string }[] = [
  { id: "4cm", label: "4 см", note: "стандартный зазор" },
  {
    id: "2cm",
    label: "2 см",
    note: `+${METALLOSHTAKETNIK_GAP_2CM_SURCHARGE_PER_METER.toLocaleString("ru-RU")} ₽/м`,
  },
  { id: "closed", label: "Без зазора" },
];

export function GapSelector({
  value,
  onChange,
  compactMobile = false,
}: GapSelectorProps) {
  return (
    <div className={`grid grid-cols-3 ${compactMobile ? "gap-1.5" : "gap-2 sm:gap-3"}`}>
      {GAP_OPTIONS.map((option) => {
        const isActive = value === option.id;

        return (
          <button
            key={option.id}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(option.id)}
            className={`rounded-lg border text-center transition-colors lg:py-2 ${
              compactMobile ? "min-h-10 px-1 py-2" : "px-2 py-2.5 sm:px-3"
            } ${
              isActive
                ? "border-accent bg-accent/5"
                : "border-border bg-surface hover:border-muted"
            }`}
          >
            <span
              className={`block font-semibold text-foreground lg:text-[0.875rem] ${
                compactMobile ? "text-xs" : "text-sm"
              }`}
            >
              {option.label}
            </span>
            {option.note ? (
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