/** Единая система вертикального ритма секций главной страницы */

/** Обычная секция: 48 → 56 → 64 px */
export const SECTION_PY =
  "py-12 sm:py-14 lg:py-16" as const;

/** Компактная секция: 40 → 48 → 56 px */
export const SECTION_PY_COMPACT =
  "py-10 sm:py-12 lg:py-14" as const;

/** Секции внутренних страниц услуг: 40 → 48 → 56 px */
export const FENCE_SECTION_PY = SECTION_PY_COMPACT;

/** Label над заголовком секции */
export const SECTION_LABEL =
  "text-xs font-semibold uppercase tracking-[0.18em] text-accent sm:text-[0.8125rem]" as const;

/** H2 секции */
export const SECTION_TITLE =
  "mt-2 text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-tight tracking-tight text-foreground" as const;

/** Подзаголовок секции */
export const SECTION_DESC =
  "mt-2 text-base leading-relaxed text-muted sm:text-lg lg:text-base lg:leading-snug" as const;

/** Отступ от блока заголовка до контента */
export const SECTION_CONTENT_MT = "mt-6 lg:mt-6" as const;

/** Контейнер секции */
export const SECTION_CONTAINER = "mx-auto max-w-7xl px-4 sm:px-6" as const;

/** Текстовая CTA-ссылка для промежуточных секций */
export const SECTION_LINK =
  "text-base font-semibold text-foreground transition-colors hover:text-accent" as const;
