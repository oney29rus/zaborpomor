import type { WorkProject } from "./types";

export type GeoPageLink = {
  href: string;
  label: string;
};

const GEO_PAGE_BY_CITY: Record<string, GeoPageLink> = {
  Архангельск: {
    href: "/arhangelsk/",
    label: "Заборы в Архангельске",
  },
  Северодвинск: {
    href: "/severodvinsk/",
    label: "Заборы в Северодвинске",
  },
  Новодвинск: {
    href: "/novodvinsk/",
    label: "Заборы в Новодвинске",
  },
  "Холмогорский район": {
    href: "/holmogory/",
    label: "Заборы в Холмогорском районе",
  },
  "Приморский район": {
    href: "/primorskiy-rayon/",
    label: "Заборы в Приморском районе",
  },
};

/** Geo-страница только при явном совпадении поля city с известным mapping. */
export function getGeoPageLink(project: WorkProject): GeoPageLink | null {
  if (!project.city) {
    return null;
  }

  return GEO_PAGE_BY_CITY[project.city] ?? null;
}
