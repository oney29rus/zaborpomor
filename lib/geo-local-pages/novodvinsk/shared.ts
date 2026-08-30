import type { FencePageBreadcrumb, FencePageGeo } from "@/lib/fence-pages/types";

export const NOVODVINSK_CITY_PATH = "/novodvinsk";

export function novodvinskBreadcrumbs(
  serviceLabel: string,
  servicePath: string,
): FencePageBreadcrumb[] {
  return [
    { label: "Главная", href: "/" },
    { label: "Новодвинск", href: NOVODVINSK_CITY_PATH },
    { label: serviceLabel, href: servicePath },
  ];
}

/** Подтверждённые объекты в Новодвинске и ближайших СНТ. */
export const NOVODVINSK_WORK_SLUGS = {
  metalloshtaketnik: [
    "metalloshtaketnik-snt-avtomobilist",
    "metalloshtaketnik-snt-druzhba",
    "metalloshtaketnik-shahmatka-snt-nadezhda",
  ],
  otkatnye: [
    "metalloshtaketnik-snt-druzhba",
    "metalloshtaketnik-shahmatka-snt-nadezhda",
  ],
  /** Распашные ворота — примеры из других районов (в базе нет новодвинских объектов с распашными). */
  raspashnyeExamples: [
    "kombinirovannyy-zabor-snt-pomorochka",
    "metalloshtaketnik-derevnya-buty",
  ],
} as const;

export function buildNovodvinskGeo(options: {
  servicePhrase: string;
  intro?: string;
}): FencePageGeo {
  return {
    title: `${options.servicePhrase} в Новодвинске`,
    paragraphs: [
      options.intro ??
        `Выполняем ${options.servicePhrase} под ключ в Новодвинске и ближайших дачных посёлках. Замер, расчёт и согласование комплектации — до начала монтажа.`,
      "Среди выполненных объектов — СНТ «Автомобилист», «Дружба» и «Надежда»: металлоштакетник, откатные ворота и калитки.",
    ],
    servicePhrase: options.servicePhrase,
    cityLinks: [
      { label: "Новодвинск", href: NOVODVINSK_CITY_PATH, published: true },
      { label: "Архангельск", href: "/arhangelsk", published: true },
      { label: "Северодвинск", href: "/severodvinsk", published: true },
      { label: "Приморский район", href: "/primorskiy-rayon", published: true },
      { label: "Холмогоры", href: "/holmogory", published: true },
    ],
    areaMentions: [],
  };
}

export const NOVODVINSK_LOCAL_SERVICE_LINKS = [
  {
    label: "Заборы из профнастила",
    href: "/novodvinsk/zabory/profnastil",
    description: "Профлист с установкой под ключ — цена за метр",
  },
  {
    label: "Заборы из металлоштакетника",
    href: "/novodvinsk/zabory/metalloshtaketnik",
    description: "Металлический штакетник и евроштакетник с монтажом",
  },
  {
    label: "Откатные ворота",
    href: "/novodvinsk/vorota/otkatnye",
    description: "Изготовление и установка откатных ворот",
  },
  {
    label: "Распашные ворота",
    href: "/novodvinsk/vorota/raspashnye",
    description: "Распашные ворота для забора с калиткой",
  },
] as const;
