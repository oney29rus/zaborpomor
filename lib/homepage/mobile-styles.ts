/** Homepage mobile spacing — desktop values preserved via lg: breakpoints. */

export const HOME_SECTION_PY = "py-6 sm:py-14 lg:py-16" as const;

export const HOME_SECTION_PY_COMPACT = "py-6 sm:py-12 lg:py-14" as const;

export const HOME_SECTION_CONTENT_MT = "mt-3 lg:mt-6" as const;

/** Калькулятор на главной — компактнее остальных секций на mobile */
export const CALCULATOR_SECTION_PY =
  "scroll-mt-24 bg-background pt-3 pb-3 sm:pt-12 sm:pb-12 lg:pt-12 lg:pb-16" as const;

export const CALCULATOR_SECTION_LABEL =
  "text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-accent lg:text-xs lg:tracking-[0.18em]" as const;

export const CALCULATOR_SECTION_TITLE =
  "mt-0.5 text-[clamp(1.25rem,3.2vw,2.5rem)] font-bold leading-tight tracking-tight text-foreground lg:mt-2 lg:text-[clamp(1.625rem,4vw,2.5rem)]" as const;

export const CALCULATOR_SECTION_CONTENT_MT = "mt-2 lg:mt-6" as const;

export const HOME_SECTION_TITLE =
  "mt-1 text-[clamp(1.625rem,4vw,2.5rem)] font-bold leading-tight tracking-tight text-foreground lg:mt-2" as const;

export const HOME_SECTION_DESC =
  "mt-1 text-sm leading-snug text-muted sm:text-lg lg:mt-2 lg:text-base lg:leading-snug" as const;
