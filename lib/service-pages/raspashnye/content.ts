import { HERO_BENEFITS } from "@/lib/constants";
import { SERVICE_PAGE_GEO } from "@/lib/service-pages/shared-geo";
import type { ServicePageContent } from "@/lib/service-pages/types";
import {
  SERVICE_IMAGE_ALTS,
  SERVICE_IMAGES,
  SWING_GATES_PRICE,
  formatServicePrice,
} from "@/lib/services";

const CANONICAL_PATH = "/vorota/raspashnye/";

export const RASPASHNYE_VOROTA_PAGE: ServicePageContent = {
  slug: "raspashnye",
  seo: {
    title:
      "Распашные ворота в Архангельске — изготовление и установка | Заборы Поморья",
    description: `Изготовление и установка распашных ворот для забора в Архангельске и области. Металлические ворота шириной 4 м — от ${formatServicePrice(SWING_GATES_PRICE)}.`,
    canonicalPath: CANONICAL_PATH,
  },
  breadcrumbs: [
    { label: "Главная", href: "/" },
    { label: "Ворота", href: "/#additional-services" },
    { label: "Распашные ворота", href: CANONICAL_PATH },
  ],
  hero: {
    label: "РАСПАШНЫЕ ВОРОТА",
    title: "Распашные ворота для забора\nв Архангельске",
    description:
      "Изготавливаем и устанавливаем металлические распашные ворота для въезда на участок.",
    priceLabel: `от ${formatServicePrice(SWING_GATES_PRICE)}`,
    priceCaption: "для ворот шириной 4 метра",
    primaryCtaLabel: "Рассчитать распашные ворота",
    primaryCtaHref: "#request",
    secondaryCtaLabel: "Посмотреть работы",
    secondaryCtaHref: "#raspashnye-works",
    benefits: HERO_BENEFITS,
    image: SERVICE_IMAGES.raspashnyeVorota,
    imageAlt: SERVICE_IMAGE_ALTS.raspashnyeVorota,
  },
  specs: [
    { label: "Тип", value: "распашные" },
    { label: "Ширина", value: "4 м" },
    { label: "Материал", value: "металлоконструкция" },
    { label: "Монтаж", value: "под ключ" },
    { label: "Гарантия", value: "24 месяца" },
  ],
  pricing: {
    title: "Цена на распашные ворота",
    description:
      "Ориентировочная стоимость изготовления и установки распашных ворот.",
    rows: [
      {
        label: "Распашные ворота 4 м",
        value: `от ${formatServicePrice(SWING_GATES_PRICE)}`,
      },
    ],
    disclaimer:
      "Точная цена зависит от заполнения, комплектации и особенностей участка.",
    ctaLabel: "Рассчитать распашные ворота",
    ctaHref: "#request",
  },
  includes: {
    title: "Конструкция ворот",
    intro:
      "Распашные ворота изготавливаем из металлоконструкции и устанавливаем на участке.",
    steps: [],
    listItems: [
      "металлический каркас ворот",
      "петли и фурнитура",
      "заполнение в едином стиле с забором",
      "монтаж на участке",
    ],
  },
  variants: {
    title: "Варианты заполнения",
    items: [
      {
        title: "Профнастил",
        description: "Заполнение ворот профлистом в стиле основного забора.",
      },
      {
        title: "Металлоштакетник",
        description: "Штакетник на воротах — в том же исполнении, что и забор.",
      },
      {
        title: "Сетка",
        description: "Заполнение сварной или 3D-сеткой по согласованию.",
      },
      {
        title: "Под ваш материал",
        description:
          "Подберём заполнение под уже выбранный материал ограждения.",
      },
    ],
  },
  features: {
    title: "Установка распашных ворот",
    points: [
      {
        title: "Замер проёма",
        description: "Уточняем ширину проёма и условия монтажа на участке.",
      },
      {
        title: "Изготовление",
        description: "Изготавливаем ворота под согласованные параметры.",
      },
      {
        title: "Монтаж на участке",
        description: "Устанавливаем ворота и проверяем работу створок.",
      },
    ],
  },
  works: {
    title: "Наши работы",
  },
  process: {
    title: "Этапы работы",
    steps: [
      { step: "01", title: "Расчёт и согласование" },
      { step: "02", title: "Замер проёма" },
      { step: "03", title: "Изготовление ворот" },
      { step: "04", title: "Монтаж на участке" },
      { step: "05", title: "Готовые ворота" },
    ],
  },
  faq: {
    title: "Частые вопросы о распашных воротах",
    items: [
      {
        id: "swing-price",
        question: "Сколько стоят распашные ворота?",
        answer: `Ориентировочная цена — от ${formatServicePrice(SWING_GATES_PRICE)} за ворота шириной 4 м с изготовлением и установкой.`,
      },
      {
        id: "swing-width",
        question: "Какая ширина ворот указана в цене?",
        answer: "Базовая цена указана для ворот шириной 4 метра.",
      },
      {
        id: "swing-fill",
        question: "Можно ли сделать ворота в стиле моего забора?",
        answer:
          "Да, подбираем заполнение — профнастил, металлоштакетник, сетку или другой согласованный материал.",
      },
      {
        id: "swing-warranty",
        question: "Есть ли гарантия?",
        answer: "На выполненные работы действует гарантия 24 месяца.",
      },
    ],
  },
  relatedLinks: {
    title: "Заборы с распашными воротами",
    links: [
      { label: "Профнастил", href: "/zabory/profnastil/" },
      { label: "Металлоштакетник", href: "/zabory/metalloshtaketnik/" },
      { label: "Откатные ворота", href: "/vorota/otkatnye/" },
    ],
  },
  geo: SERVICE_PAGE_GEO,
  cta: {
    label: "Рассчитаем ворота",
    title: "Рассчитаем стоимость\nраспашных ворот",
    description:
      "Оставьте номер телефона — уточним ширину проёма, заполнение и рассчитаем стоимость ворот.",
  },
};
