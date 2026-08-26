"use client";

import {
  LENGTH_MAX,
  LENGTH_MIN,
  LENGTH_STEP,
} from "@/lib/calculator/prices";
import { clampLength } from "@/lib/calculator/calculate";

type LengthControlProps = {
  value: number;
  onChange: (value: number) => void;
  compactMobile?: boolean;
};

export function LengthControl({
  value,
  onChange,
  compactMobile = false,
}: LengthControlProps) {
  const decrease = () => onChange(clampLength(value - LENGTH_STEP));
  const increase = () => onChange(clampLength(value + LENGTH_STEP));

  const handleInputChange = (raw: string) => {
    const parsed = Number.parseInt(raw, 10);
    if (Number.isNaN(parsed)) {
      return;
    }
    onChange(clampLength(parsed));
  };

  const btnClass = compactMobile
    ? "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-base font-medium text-foreground transition-colors hover:bg-background disabled:cursor-not-allowed disabled:opacity-40 lg:h-10 lg:w-10 lg:text-lg"
    : "inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-xl font-medium text-foreground transition-colors hover:bg-background disabled:cursor-not-allowed disabled:opacity-40 lg:h-10 lg:w-10 lg:text-lg";

  const inputClass = compactMobile
    ? "h-9 w-full rounded-lg border border-border bg-surface px-3 pr-8 text-center text-sm font-semibold text-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent lg:h-10 lg:px-4 lg:pr-10 lg:text-base"
    : "h-12 w-full rounded-lg border border-border bg-surface px-4 pr-10 text-center text-lg font-semibold text-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent lg:h-10 lg:text-base";

  const controls = (
    <>
      <label htmlFor="fence-length" className="sr-only">
        Длина забора в метрах
      </label>
      <button
        type="button"
        aria-label="Уменьшить длину"
        onClick={decrease}
        disabled={value <= LENGTH_MIN}
        className={btnClass}
      >
        −
      </button>

      <div className="relative min-w-0 flex-1">
        <input
          id="fence-length"
          type="number"
          inputMode="numeric"
          min={LENGTH_MIN}
          max={LENGTH_MAX}
          step={LENGTH_STEP}
          value={value}
          onChange={(event) => handleInputChange(event.target.value)}
          className={inputClass}
        />
        <span
          className={`pointer-events-none absolute inset-y-0 flex items-center text-muted ${
            compactMobile ? "right-2.5 text-xs lg:right-4 lg:text-sm" : "right-4 text-sm"
          }`}
        >
          м
        </span>
      </div>

      <button
        type="button"
        aria-label="Увеличить длину"
        onClick={increase}
        disabled={value >= LENGTH_MAX}
        className={btnClass}
      >
        +
      </button>
    </>
  );

  return (
    <div>
      {compactMobile ? (
        <div className="flex items-center gap-2 lg:block">
          <span
            aria-hidden="true"
            className="w-11 shrink-0 text-xs font-semibold text-foreground lg:hidden"
          >
            Длина
          </span>
          <div className="flex min-w-0 flex-1 items-center gap-1.5 lg:gap-2">
            {controls}
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-3">{controls}</div>
      )}

      <input
        type="range"
        min={LENGTH_MIN}
        max={LENGTH_MAX}
        step={LENGTH_STEP}
        value={value}
        onChange={(event) => onChange(clampLength(Number(event.target.value)))}
        aria-label="Длина забора, ползунок"
        className={`w-full cursor-pointer appearance-none rounded-full bg-border accent-accent lg:h-1.5 ${
          compactMobile
            ? "mt-1.5 hidden h-1.5 lg:block lg:mt-2"
            : "mt-4 h-2 lg:mt-2"
        }`}
      />

      <div
        className={`flex justify-between text-xs text-muted lg:hidden ${
          compactMobile ? "hidden" : "mt-1"
        }`}
      >
        <span>{LENGTH_MIN} м</span>
        <span>{LENGTH_MAX} м</span>
      </div>
    </div>
  );
}
