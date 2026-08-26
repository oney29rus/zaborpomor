"use client";

import { FenceTypeSpriteThumb } from "@/components/calculator/FenceTypeSpriteThumb";
import { trackEvent } from "@/lib/analytics/track";
import { resolveFenceFromPricePerMeter } from "@/lib/calculator/display";
import { formatPrice } from "@/lib/calculator/format";
import {
  getCalculatorFenceTypes,
  getCalculatorFenceTypesSortedByPrice,
} from "@/lib/calculator/prices";
import type { FenceTypeId } from "@/lib/calculator/types";

type FenceTypeSelectorProps = {
  value: FenceTypeId;
  onChange: (value: FenceTypeId) => void;
  allowedTypes?: FenceTypeId[] | "all";
  variant?: "cards" | "compact";
  compactMobile?: boolean;
  sortByPrice?: boolean;
};

function CheckIndicator({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`flex h-3.5 w-3.5 items-center justify-center rounded-full bg-accent text-white ${className}`}
    >
      <svg width="8" height="8" viewBox="0 0 12 12" fill="none">
        <path
          d="M2.5 6L5 8.5L9.5 3.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function resolveFenceTypes(
  allowedTypes?: FenceTypeId[] | "all",
  sortByPrice = false,
) {
  const allTypes = sortByPrice
    ? getCalculatorFenceTypesSortedByPrice()
    : getCalculatorFenceTypes();

  if (!allowedTypes || allowedTypes === "all") {
    return allTypes;
  }

  return allowedTypes
    .map((id) => allTypes.find((type) => type.id === id))
    .filter((type): type is NonNullable<typeof type> => Boolean(type));
}

function MobileFenceTypeGrid({
  fenceTypes,
  value,
  onChange,
}: {
  fenceTypes: ReturnType<typeof resolveFenceTypes>;
  value: FenceTypeId;
  onChange: (value: FenceTypeId) => void;
}) {
  return (
    <div className="grid grid-cols-2 gap-1 lg:hidden">
      {fenceTypes.map((type) => {
        const isActive = value === type.id;
        const pricePerMeter = resolveFenceFromPricePerMeter(type.id);

        return (
          <button
            key={type.id}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(type.id)}
            className={`relative flex flex-col rounded-lg border px-1 py-0.5 text-left transition-colors ${
              isActive
                ? "border-accent bg-accent/[0.06]"
                : "border-border bg-surface hover:border-muted"
            }`}
          >
            {isActive ? (
              <CheckIndicator className="absolute top-0.5 right-0.5 z-10 h-3 w-3" />
            ) : null}

            <div className="relative h-[40px] w-full overflow-hidden rounded border border-border/30 bg-white">
              <FenceTypeSpriteThumb
                typeId={type.id}
                contained
                className="absolute inset-0"
              />
            </div>

            <span className="mt-0.5 line-clamp-2 text-[0.6875rem] font-semibold leading-tight text-foreground">
              {type.label}
            </span>

            <span className="mt-px text-[0.625rem] leading-none text-muted">
              {pricePerMeter !== null
                ? `от ${formatPrice(pricePerMeter)}/м`
                : "Цена по расчёту"}
            </span>
          </button>
        );
      })}
    </div>
  );
}

function DesktopFenceTypeGrid({
  fenceTypes,
  value,
  onChange,
  compactMobile,
}: {
  fenceTypes: ReturnType<typeof resolveFenceTypes>;
  value: FenceTypeId;
  onChange: (value: FenceTypeId) => void;
  compactMobile: boolean;
}) {
  if (!compactMobile) {
    return (
      <div className="-mx-5 px-5 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0">
        <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] lg:grid lg:grid-cols-3 lg:gap-2.5 lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden">
          {fenceTypes.map((type) =>
            renderDesktopCard(type, value, onChange, false),
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="hidden lg:block">
      <div className="grid grid-cols-3 gap-2.5">
        {fenceTypes.map((type) =>
          renderDesktopCard(type, value, onChange, true),
        )}
      </div>
    </div>
  );
}

function renderDesktopCard(
  type: ReturnType<typeof resolveFenceTypes>[number],
  value: FenceTypeId,
  onChange: (value: FenceTypeId) => void,
  compactDesktop: boolean,
) {
  const isActive = value === type.id;
  const pricePerMeter = resolveFenceFromPricePerMeter(type.id);

  const cardClass = compactDesktop
    ? "relative flex h-[7.75rem] w-auto max-w-none flex-col overflow-hidden rounded-xl border text-left transition-colors"
    : "relative flex h-[16.5rem] w-[78vw] max-w-[16.5rem] shrink-0 snap-start flex-col overflow-hidden rounded-xl border text-left transition-colors sm:h-[17rem] sm:max-w-[17rem] lg:h-[7.75rem] lg:w-auto lg:max-w-none";

  return (
    <button
      key={type.id}
      type="button"
      onClick={() => onChange(type.id)}
      aria-pressed={isActive}
      className={`${cardClass} ${
        isActive
          ? "border-accent bg-accent/[0.04]"
          : "border-border bg-surface hover:border-muted"
      }`}
    >
      {isActive ? (
        <CheckIndicator className="absolute top-1.5 right-1.5 z-10 lg:h-4 lg:w-4" />
      ) : null}

      <FenceTypeSpriteThumb
        typeId={type.id}
        className="h-[60px] w-full shrink-0 sm:h-[72px] lg:h-[100px]"
      />

      <div className="flex flex-1 flex-col justify-center border-t border-border/70 px-3 py-2.5 lg:px-2.5 lg:py-2">
        <span className="text-sm font-semibold leading-snug text-foreground lg:text-[0.8125rem] lg:leading-tight">
          {type.label}
        </span>
        <span className="mt-0.5 text-xs text-muted lg:mt-0 lg:text-[0.6875rem]">
          {pricePerMeter !== null
            ? `от ${formatPrice(pricePerMeter)}/м`
            : "Цена по расчёту"}
        </span>
      </div>
    </button>
  );
}

export function FenceTypeSelector({
  value,
  onChange,
  allowedTypes = "all",
  variant = "cards",
  compactMobile = false,
  sortByPrice = false,
}: FenceTypeSelectorProps) {
  const fenceTypes = resolveFenceTypes(allowedTypes, sortByPrice);

  const handleChange = (nextType: FenceTypeId) => {
    if (nextType !== value) {
      trackEvent("fence_type_click", {
        fenceType: nextType,
        previousFenceType: value,
      });
    }

    onChange(nextType);
  };

  if (variant === "compact") {
    return (
      <div className="grid gap-3 sm:grid-cols-2">
        {fenceTypes.map((type) => {
          const isActive = value === type.id;
          const pricePerMeter = resolveFenceFromPricePerMeter(type.id);

          return (
            <button
              key={type.id}
              type="button"
              aria-pressed={isActive}
              onClick={() => handleChange(type.id)}
              className={`rounded-lg border px-3 py-2.5 text-left transition-colors lg:py-2 ${
                isActive
                  ? "border-accent bg-accent/5"
                  : "border-border bg-surface hover:border-muted"
              }`}
            >
              <span className="block text-sm font-semibold text-foreground lg:text-[0.875rem]">
                {type.label}
              </span>
              <span className="mt-0.5 block text-xs text-muted">
                {pricePerMeter !== null
                  ? `от ${formatPrice(pricePerMeter)}/м`
                  : "Цена по расчёту"}
              </span>
            </button>
          );
        })}
      </div>
    );
  }

  if (compactMobile) {
    return (
      <>
        <MobileFenceTypeGrid
          fenceTypes={fenceTypes}
          value={value}
          onChange={handleChange}
        />
        <DesktopFenceTypeGrid
          fenceTypes={fenceTypes}
          value={value}
          onChange={handleChange}
          compactMobile={compactMobile}
        />
      </>
    );
  }

  return (
    <DesktopFenceTypeGrid
      fenceTypes={fenceTypes}
      value={value}
      onChange={handleChange}
      compactMobile={false}
    />
  );
}
