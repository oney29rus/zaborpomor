export type GeoCity = {
  step: string;
  name: string;
  tagline: string;
  href: string;
};

/** Три основных города работы компании. */
export const GEO_PRIMARY_CITIES: GeoCity[] = [
  {
    step: "01",
    name: "Архангельск",
    tagline: "Заборы под ключ в Архангельске",
    href: "/arhangelsk",
  },
  {
    step: "02",
    name: "Северодвинск",
    tagline: "Заборы под ключ в Северодвинске",
    href: "/severodvinsk",
  },
  {
    step: "03",
    name: "Новодвинск",
    tagline: "Заборы под ключ в Новодвинске",
    href: "/novodvinsk",
  },
];

/** Дополнительная география — районы и населённые пункты области. */
export const GEO_SECONDARY_AREAS: GeoCity[] = [
  {
    step: "04",
    name: "Холмогоры",
    tagline: "Заборы под ключ в Холмогорском районе",
    href: "/holmogory",
  },
  {
    step: "05",
    name: "Приморский район",
    tagline: "Заборы под ключ в Приморском районе",
    href: "/primorskiy-rayon",
  },
];

/** @deprecated Используйте GEO_PRIMARY_CITIES и GEO_SECONDARY_AREAS. */
export const GEO_CITIES: GeoCity[] = [
  ...GEO_PRIMARY_CITIES,
  ...GEO_SECONDARY_AREAS,
];

export const GEO_EXTRA_AREAS = [
  "и другие населённые пункты Архангельской области",
] as const;
