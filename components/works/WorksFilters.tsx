"use client";

import type { WorkFilterId } from "@/lib/works/types";
import { WORK_FILTERS } from "@/lib/works/projects";

type WorksFiltersProps = {
  active: WorkFilterId;
  onChange: (filter: WorkFilterId) => void;
};

export function WorksFilters({ active, onChange }: WorksFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {WORK_FILTERS.map((filter) => {
        const isActive = active === filter.id;

        return (
          <button
            key={filter.id}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(filter.id)}
            className={`inline-flex min-h-10 items-center rounded-lg border px-4 py-2 text-sm font-semibold transition-colors ${
              isActive
                ? "border-accent bg-accent/[0.04] text-accent"
                : "border-border bg-surface text-foreground hover:border-muted"
            }`}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
