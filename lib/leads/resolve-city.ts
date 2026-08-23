const GEO_CITY_BY_SEGMENT: Record<string, string> = {
  arhangelsk: "Архангельск",
  severodvinsk: "Северодвинск",
  novodvinsk: "Новодвинск",
  holmogory: "Холмогорский район",
  "primorskiy-rayon": "Приморский район",
};

/**
 * Определяет город/район по pathname гео-страницы.
 * Возвращает null, если geography нельзя однозначно определить.
 */
export function resolveCityFromPath(pagePath: string): string | null {
  const normalized = pagePath.replace(/\/+$/, "") || "/";
  const segments = normalized.split("/").filter(Boolean);

  if (segments.length === 0) {
    return null;
  }

  const firstSegment = segments[0];
  return GEO_CITY_BY_SEGMENT[firstSegment] ?? null;
}
