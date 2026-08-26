"use client";

import { formatPrice } from "@/lib/calculator/format";
import { getFenceTypeConfig } from "@/lib/calculator/prices";
import type { MetallVariant } from "@/lib/calculator/types";

type MetallVariantSelectorProps = {
  value: MetallVariant;
  onChange: (value: MetallVariant) => void;
  compactMobile?: boolean;
};

const VARIANT_OPTIONS: {
  id: MetallVariant;
  label: string;
  fenceTypeId: "metalloshtaketnik" | "shtaketnik-shahmatka";
}[] = [
  {
    id: "standard",
    label: "Обычный металлоштакетник",
    fenceTypeId: "metalloshtaketnik",
  },
  {
    id: "shahmatka",
    label: "Шахматка",
    fenceTypeId: "shtaketnik-shahmatka",
  },
];

export function MetallVariantSelector({
  value,
  onChange,
  compactMobile = false,
}: MetallVariantSelectorProps) {
  return (
    <div className={`grid ${compactMobile ? "grid-cols-2 gap-1.5" : "gap-3 sm:grid-cols-2"}`}>
      {VARIANT_OPTIONS.map((option) => {
        const isActive = value === option.id;
        const basePrice =
          getFenceTypeConfig(option.fenceTypeId).pricePerMeter15 ?? 0;

        return (
          <button
            key={option.id}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(option.id)}
            className={`rounded-lg border text-left transition-colors lg:py-2 ${
              compactMobile ? "px-2 py-2" : "px-3 py-2.5"
            } ${
              isActive
                ? "border-accent bg-accent/5"
                : "border-border bg-surface hover:border-muted"
            }`}
          >
            <span className="block text-sm font-semibold text-foreground lg:text-[0.875rem]">
              {option.label}
            </span>
            <span className="mt-0.5 block text-xs text-muted">
              от {formatPrice(basePrice)}/м
            </span>
          </button>
        );
      })}
    </div>
  );
}
