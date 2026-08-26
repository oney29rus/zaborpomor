"use client";

import { formatHeightValue } from "@/lib/calculator/format";
import { FENCE_HEIGHTS } from "@/lib/calculator/prices";
import type { FenceHeight } from "@/lib/calculator/types";

type HeightSelectorProps = {
  value: FenceHeight;
  onChange: (value: FenceHeight) => void;
  compactMobile?: boolean;
};

export function HeightSelector({
  value,
  onChange,
  compactMobile = false,
}: HeightSelectorProps) {
  return (
    <div
      className={`grid grid-cols-3 ${compactMobile ? "gap-1.5" : "gap-3"}`}
    >
      {FENCE_HEIGHTS.map((height) => {
        const isActive = value === height;
        const label = `${formatHeightValue(height)} м`;

        return (
          <button
            key={height}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(height)}
            className={`rounded-lg border font-semibold transition-colors ${
              compactMobile
                ? "min-h-9 px-1 py-1.5 text-sm lg:min-h-10 lg:px-4 lg:py-3 lg:text-base"
                : "px-3 py-3 text-base"
            } ${
              isActive
                ? "border-accent bg-accent/5 text-accent"
                : "border-border bg-surface text-foreground hover:border-muted"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
