import { HERO_BENEFITS } from "@/lib/constants";
import { SERVICE_PAGE_GEO } from "@/lib/service-pages/shared-geo";
import type { ServicePageContent } from "@/lib/service-pages/types";
import {
  KARKAS_PRICE_PER_METER,
  SERVICE_IMAGE_ALTS,
  SERVICE_IMAGES,
  formatServicePricePerUnit,
} from "@/lib/services";

const CANONICAL_PATH = "/uslugi/karkas-zabora/";

export const KARKAS_ZABORA_PAGE: ServicePageContent = {
  slug: "karkas-zabora",
  seo: {
    title:
      "Каркас забора под ключ в Архангельске — цена от 2 000 ₽/м | Заборы Поморья",
    description:
      "Установка металлического каркаса забора в Архангельске и области. Столбы, лаги, сварка и монтаж на участке — от 2 000 ₽/м.",
    canonicalPath: CANONICAL_PATH,
  },
  breadcrumbs: [
    { label: "Главная", href: "/" },
    { label: "Услуги", href: "/#additional-services" },
    { label: "Каркас забора", href: CANONICAL_PATH },
  ],
  hero: {
    label: "КАРКАС ЗАБОРА",
    title: "Каркас забора под ключ\nв Архангельске",
    description:
      "Установим металлический каркас для дальнейшего монтажа профнастила, металлоштакетника, деревянного штакетника и других материалов.",
    priceLabel: `от ${formatServicePricePerUnit(KARKAS_PRICE_PER_METER, "m")}`,
    priceCaption: "металлический каркас с монтажом",
    primaryCtaLabel: "Рассчитать стоимость каркаса",
    primaryCtaHref: "#request",
    secondaryCtaLabel: "Посмотреть работы",
    secondaryCtaHref: "#karkas-zabora-works",
    benefits: HERO_BENEFITS,
    image: SERVICE_IMAGES.karkasZabora,
    imageAlt: SERVICE_IMAGE_ALTS.karkasZabora,
  },
  specs: [
    { label: "Столбы", value: "металлические" },
    { label: "Лаги", value: "горизонтальные" },
    { label: "Монтаж", value: "на участке" },
    { label: "Применение", value: "под любой материал забора" },
    { label: "Гарантия", value: "24 месяца" },
  ],
  pricing: {
    title: "Цена на каркас забора",
    description:
      "Ориентировочная стоимость металлического каркаса с монтажом на участке.",
    rows: [
      {
        label: "Каркас забора",
        value: `от ${formatServicePricePerUnit(KARKAS_PRICE_PER_METER, "m")}`,
      },
    ],
    disclaimer:
      "Точная цена зависит от длины, высоты, типа грунта и особенностей участка.",
    ctaLabel: "Рассчитать стоимость каркаса",
    ctaHref: "#request",
    priceIncludes: {
      title: "В стоимость входит металлический каркас",
      items: [
        "установка столбов",
        "монтаж горизонтальных лаг",
        "сварочные работы",
        "монтаж каркаса на участке",
      ],
      note: "Материал забора (профнастил, штакетник и др.) рассчитывается отдельно.",
    },
  },
  includes: {
    title: "Что входит в каркас забора",
    steps: [],
    listItems: [
      "металлические столбы",
      "горизонтальные лаги",
      "сварочные работы",
      "монтаж каркаса на участке",
    ],
  },
  variants: {
    title: "Для каких заборов подходит каркас",
    items: [
      {
        title: "Профнастил",
        description:
          "Каркас подходит для монтажа профлиста на металлическую основу.",
      },
      {
        title: "Металлоштакетник",
        description:
          "Столбы и лаги выдерживают крепление металлического штакетника.",
      },
      {
        title: "Деревянный штакетник",
        description:
          "Металлический каркас — основа для деревянных планок.",
      },
      {
        title: "Сварная сетка и другие варианты",
        description:
          "Каркас можно использовать под сварную сетку и другие материалы ограждения.",
      },
    ],
  },
  works: {
    title: "Наши работы",
  },
  process: {
    title: "Как устанавливаем каркас",
    steps: [
      { step: "01", title: "Расчёт и согласование" },
      { step: "02", title: "Замер участка" },
      { step: "03", title: "Изготовление элементов каркаса" },
      { step: "04", title: "Монтаж столбов и лаг" },
      { step: "05", title: "Готовый каркас под материал" },
    ],
  },
  faq: {
    title: "Частые вопросы о каркасе забора",
    items: [
      {
        id: "karkas-price",
        question: "Сколько стоит каркас забора?",
        answer: `Ориентировочная цена — от ${formatServicePricePerUnit(KARKAS_PRICE_PER_METER, "m")} с монтажом. Итог зависит от длины, высоты и условий на участке.`,
      },
      {
        id: "karkas-materials",
        question: "Можно заказать только каркас без материала забора?",
        answer:
          "Да, устанавливаем металлический каркас как отдельную услугу — под дальнейший монтаж вашего или нашего материала.",
      },
      {
        id: "karkas-types",
        question: "Под какие заборы подходит каркас?",
        answer:
          "Каркас подходит для профнастила, металлоштакетника, деревянного штакетника, сварной сетки и других вариантов ограждения.",
      },
      {
        id: "karkas-duration",
        question: "Сколько времени занимает монтаж?",
        answer:
          "Срок зависит от длины ограждения и условий на участке. Назовём ориентировочные сроки после замера.",
      },
    ],
  },
  relatedLinks: {
    title: "Материалы для каркаса",
    links: [
      { label: "Профнастил", href: "/zabory/profnastil/" },
      { label: "Металлоштакетник", href: "/zabory/metalloshtaketnik/" },
      { label: "Деревянный штакетник", href: "/zabory/derevyannyy-shtaketnik/" },
      { label: "Сварная сетка", href: "/zabory/svarnaya-setka/" },
    ],
  },
  geo: SERVICE_PAGE_GEO,
  cta: {
    label: "Рассчитаем каркас",
    title: "Рассчитаем стоимость каркаса\nдля вашего участка",
    description:
      "Оставьте номер телефона — уточним длину, высоту и параметры каркаса и рассчитаем стоимость.",
  },
};
