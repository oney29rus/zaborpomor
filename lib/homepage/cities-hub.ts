import { WORK_IMAGE_ALTS, WORK_IMAGES } from "@/lib/works/assets";

export type CitiesHubCard = {
  name: string;
  shortDescription: string;
  fullDescription: string;
  href: string;
  ctaLabel: string;
  image: string;
  imageAlt: string;
};

export const CITIES_HUB_SECONDARY_AREAS = [
  {
    name: "Приморский район",
    href: "/primorskiy-rayon",
  },
  {
    name: "Холмогорский район",
    href: "/holmogory",
  },
] as const;

export const CITIES_HUB_CARDS: CitiesHubCard[] = [
  {
    name: "Архангельск",
    shortDescription: "Заборы под ключ и монтаж из вашего материала.",
    fullDescription:
      "Заборы под ключ, ворота, калитки и монтаж из материала заказчика.",
    href: "/arhangelsk",
    ctaLabel: "Заборы в Архангельске →",
    image: WORK_IMAGES.profnastilShirsha,
    imageAlt: WORK_IMAGE_ALTS.profnastilShirsha,
  },
  {
    name: "Северодвинск",
    shortDescription: "Монтаж заборов в городе и ближайших СНТ.",
    fullDescription:
      "Устанавливаем заборы в Северодвинске и ближайших СНТ.",
    href: "/severodvinsk",
    ctaLabel: "Заборы в Северодвинске →",
    image: WORK_IMAGES.profnastilSntSever,
    imageAlt: WORK_IMAGE_ALTS.profnastilSntSever,
  },
  {
    name: "Новодвинск",
    shortDescription: "Заборы для домов, дач и участков.",
    fullDescription:
      "Заборы для домов, дач и участков в Новодвинске и рядом.",
    href: "/novodvinsk",
    ctaLabel: "Заборы в Новодвинске →",
    image: WORK_IMAGES.novodvinskAvtomobilist,
    imageAlt: WORK_IMAGE_ALTS.novodvinskAvtomobilist,
  },
];
