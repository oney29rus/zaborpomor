"use client";

import { useState, type ReactNode } from "react";

type CalculatorAdvancedSectionProps = {
  children: ReactNode;
  defaultOpen?: boolean;
};

export function CalculatorAdvancedSection({
  children,
  defaultOpen = false,
}: CalculatorAdvancedSectionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="lg:contents">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between rounded-lg border border-border bg-surface px-3 py-2 text-left text-sm font-semibold text-foreground lg:hidden"
      >
        Дополнительные параметры
        <span
          aria-hidden="true"
          className={`ml-2 text-xs text-muted transition-transform ${open ? "rotate-180" : ""}`}
        >
          ▼
        </span>
      </button>
      <div className={`space-y-2.5 ${open ? "max-lg:block" : "max-lg:hidden"} lg:contents`}>
        {children}
      </div>
    </div>
  );
}
