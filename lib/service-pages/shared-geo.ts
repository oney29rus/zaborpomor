import type { FencePageGeo } from "@/lib/fence-pages/types";

export const SERVICE_PAGE_GEO: FencePageGeo = {
  title: "Работаем в Архангельске и области",
  paragraphs: [
    "Выполняем монтаж каркасов, установку винтовых свай и изготовление ворот в Архангельске, Северодвинске, Новодвинске и по области.",
    "Выезжаем на объект, уточняем параметры и рассчитываем стоимость до начала работ.",
  ],
  cityLinks: [
    { label: "Архангельск", href: "/arhangelsk/", published: true },
    { label: "Северодвинск", href: "/severodvinsk/", published: true },
    { label: "Новодвинск", href: "/novodvinsk/", published: true },
    { label: "Холмогоры", href: "/holmogory/", published: true },
    { label: "Приморский район", href: "/primorskiy-rayon/", published: true },
  ],
  areaMentions: ["Приморский район"],
};
