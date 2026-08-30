import type { FencePageBreadcrumb, FencePageGeo } from "@/lib/fence-pages/types";

export const SEVERODVINSK_CITY_PATH = "/severodvinsk";

export function severodvinskBreadcrumbs(
  serviceLabel: string,
  servicePath: string,
): FencePageBreadcrumb[] {
  return [
    { label: "Главная", href: "/" },
    { label: "Северодвинск", href: SEVERODVINSK_CITY_PATH },
    { label: serviceLabel, href: servicePath },
  ];
}

export const SEVERODVINSK_WORK_SLUGS = {
  profnastil: [
    "profnastil-snt-sever",
    "profnastil-pod-derevo-snt-karkul",
    "kombinirovannyy-zabor-snt-pomorochka",
  ],
  metalloshtaketnik: [
    "metalloshtaketnik-shahmatka-snt-uyma",
    "metalloshtaketnik-shahmatka-snt-dvina",
  ],
  gates: ["profnastil-snt-sever", "kombinirovannyy-zabor-snt-pomorochka"],
} as const;

export function buildSeverodvinskGeo(options: {
  servicePhrase: string;
  intro?: string;
}): FencePageGeo {
  return {
    title: `${options.servicePhrase} в Северодвинске`,
    paragraphs: [
      options.intro ??
        `Изготавливаем и устанавливаем ${options.servicePhrase} под ключ в Северодвинске и ближайших СНТ. Выезжаем на замер, согласовываем комплектацию и рассчитываем стоимость до начала работ.`,
      "Среди реальных объектов компании — СНТ «Север», «Поморочка», «Каркуль», «Уйма», «Двина» и другие дачные посёлки рядом с городом.",
    ],
    servicePhrase: options.servicePhrase,
    cityLinks: [
      { label: "Северодвинск", href: SEVERODVINSK_CITY_PATH, published: true },
      { label: "Архангельск", href: "/arhangelsk", published: true },
      { label: "Новодвинск", href: "/novodvinsk", published: true },
      { label: "Приморский район", href: "/primorskiy-rayon", published: true },
      { label: "Холмогоры", href: "/holmogory", published: true },
    ],
    areaMentions: [],
  };
}

export const SEVERODVINSK_LOCAL_SERVICE_LINKS = [
  {
    label: "Заборы из профнастила",
    href: "/severodvinsk/zabory/profnastil",
    description: "Сплошное ограждение из профлиста с установкой под ключ",
  },
  {
    label: "Заборы из металлоштакетника",
    href: "/severodvinsk/zabory/metalloshtaketnik",
    description: "Металлический штакетник и евроштакетник с монтажом",
  },
  {
    label: "Откатные ворота",
    href: "/severodvinsk/vorota/otkatnye",
    description: "Изготовление и установка откатных ворот",
  },
  {
    label: "Распашные ворота",
    href: "/severodvinsk/vorota/raspashnye",
    description: "Распашные ворота для забора с калиткой",
  },
] as const;
