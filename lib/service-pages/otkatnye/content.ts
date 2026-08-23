import { HERO_BENEFITS } from "@/lib/constants";
import { SERVICE_PAGE_GEO } from "@/lib/service-pages/shared-geo";
import type { ServicePageContent } from "@/lib/service-pages/types";
import {
  GATE_AUTOMATION_NICE_PRICE,
  SERVICE_IMAGE_ALTS,
  SERVICE_IMAGES,
  SLIDING_GATE_PRICE,
  formatServicePrice,
} from "@/lib/services";

const CANONICAL_PATH = "/vorota/otkatnye/";

export const OTKATNYE_VOROTA_PAGE: ServicePageContent = {
  slug: "otkatnye",
  seo: {
    title: "Откатные ворота в Архангельске под ключ | Заборы Поморья",
    description: `Изготовление и установка откатных ворот под ключ в Архангельске и области. Ворота шириной 4 м — от ${formatServicePrice(SLIDING_GATE_PRICE)}. Автоматика Nice — дополнительная опция.`,
    canonicalPath: CANONICAL_PATH,
  },
  breadcrumbs: [
    { label: "Главная", href: "/" },
    { label: "Ворота", href: "/#additional-services" },
    { label: "Откатные ворота", href: CANONICAL_PATH },
  ],
  hero: {
    label: "ОТКАТНЫЕ ВОРОТА",
    title: "Откатные ворота под ключ\nв Архангельске",
    description:
      "Изготавливаем и устанавливаем откатные ворота для въезда на участок.",
    priceLabel: `от ${formatServicePrice(SLIDING_GATE_PRICE)}`,
    priceCaption: "ворота шириной 4 метра",
    primaryCtaLabel: "Рассчитать откатные ворота",
    primaryCtaHref: "#request",
    secondaryCtaLabel: "Посмотреть работы",
    secondaryCtaHref: "#otkatnye-works",
    benefits: HERO_BENEFITS,
    image: SERVICE_IMAGES.otkatnyeVorota,
    imageAlt: SERVICE_IMAGE_ALTS.otkatnyeVorota,
  },
  specs: [
    { label: "Тип", value: "откатные" },
    { label: "Ширина", value: "4 м" },
    { label: "Монтаж", value: "под ключ" },
    { label: "Автоматика", value: "Nice — опция" },
    { label: "Гарантия", value: "24 месяца" },
  ],
  pricing: {
    title: "Цена на откатные ворота",
    description:
      "Ориентировочная стоимость изготовления и установки откатных ворот под ключ.",
    rows: [
      {
        label: "Откатные ворота 4 м",
        value: `от ${formatServicePrice(SLIDING_GATE_PRICE)}`,
      },
      {
        label: "Автоматика Nice",
        value: `+${formatServicePrice(GATE_AUTOMATION_NICE_PRICE)}`,
      },
    ],
    disclaimer:
      "Автоматика — дополнительная опция. Точная цена зависит от заполнения и условий на участке.",
    ctaLabel: "Рассчитать откатные ворота",
    ctaHref: "#request",
  },
  includes: {
    title: "Конструкция откатных ворот",
    intro:
      "Откатные ворота включают металлоконструкцию, направляющую систему и монтаж на участке.",
    steps: [],
    listItems: [
      "металлический каркас откатной створки",
      "направляющая и роликовая система",
      "заполнение в стиле забора",
      "монтаж под ключ",
    ],
  },
  variants: {
    title: "Варианты заполнения",
    items: [
      {
        title: "Профнастил",
        description: "Заполнение откатных ворот профлистом.",
      },
      {
        title: "Металлоштакетник",
        description: "Штакетник на воротах в едином стиле с забором.",
      },
      {
        title: "Сетка",
        description: "Заполнение сеткой по согласованию с основным ограждением.",
      },
      {
        title: "Индивидуально",
        description: "Подберём заполнение под ваш проект забора.",
      },
    ],
  },
  features: {
    title: "Монтаж откатных ворот",
    points: [
      {
        title: "Замер и расчёт",
        description: "Уточняем ширину проёма, тип заполнения и условия монтажа.",
      },
      {
        title: "Изготовление",
        description: "Изготавливаем откатную конструкцию под параметры участка.",
      },
      {
        title: "Установка",
        description: "Монтируем направляющую, створку и проверяем ход ворот.",
      },
    ],
  },
  automation: {
    title: "Автоматика для откатных ворот",
    description:
      "Откатные ворота можно дополнительно оборудовать автоматикой Nice.",
    baseLabel: "Откатные ворота",
    basePriceLabel: `от ${formatServicePrice(SLIDING_GATE_PRICE)}`,
    addonLabel: "Автоматика Nice",
    addonPriceLabel: `+${formatServicePrice(GATE_AUTOMATION_NICE_PRICE)}`,
  },
  works: {
    title: "Наши работы",
  },
  process: {
    title: "Этапы установки",
    steps: [
      { step: "01", title: "Расчёт и согласование" },
      { step: "02", title: "Замер проёма" },
      { step: "03", title: "Изготовление ворот" },
      { step: "04", title: "Монтаж на участке" },
      { step: "05", title: "Готовые откатные ворота" },
    ],
  },
  faq: {
    title: "Частые вопросы об откатных воротах",
    items: [
      {
        id: "slide-price",
        question: "Сколько стоят откатные ворота?",
        answer: `Ориентировочная цена — от ${formatServicePrice(SLIDING_GATE_PRICE)} за ворота шириной 4 м под ключ.`,
      },
      {
        id: "slide-auto",
        question: "Сколько стоит автоматика?",
        answer: `Комплект автоматики Nice — дополнительно +${formatServicePrice(GATE_AUTOMATION_NICE_PRICE)} к стоимости откатных ворот.`,
      },
      {
        id: "slide-width",
        question: "Какая ширина указана в цене?",
        answer: "Базовая цена указана для откатных ворот шириной 4 метра.",
      },
      {
        id: "slide-warranty",
        question: "Есть ли гарантия?",
        answer: "На выполненные работы действует гарантия 24 месяца.",
      },
    ],
  },
  relatedLinks: {
    title: "Связанные разделы",
    links: [
      { label: "Профнастил", href: "/zabory/profnastil/" },
      { label: "Металлоштакетник", href: "/zabory/metalloshtaketnik/" },
      { label: "Распашные ворота", href: "/vorota/raspashnye/" },
    ],
  },
  geo: SERVICE_PAGE_GEO,
  cta: {
    label: "Рассчитаем ворота",
    title: "Рассчитаем стоимость\nоткатных ворот",
    description:
      "Оставьте номер телефона — уточним ширину проёма, заполнение, автоматику и рассчитаем стоимость.",
  },
};
