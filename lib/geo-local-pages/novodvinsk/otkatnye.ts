import { HERO_BENEFITS } from "@/lib/constants";
import type { ServicePageContent } from "@/lib/service-pages/types";
import {
  GATE_AUTOMATION_NICE_PRICE,
  SLIDING_GATE_PRICE,
  formatServicePrice,
} from "@/lib/services";
import { WORK_IMAGE_ALTS, WORK_IMAGES } from "@/lib/works/assets";
import {
  buildNovodvinskGeo,
  NOVODVINSK_CITY_PATH,
  NOVODVINSK_WORK_SLUGS,
  novodvinskBreadcrumbs,
} from "./shared";

const CANONICAL_PATH = "/novodvinsk/vorota/otkatnye/";

export const NOVODVINSK_OTKATNYE_PAGE: ServicePageContent = {
  slug: "otkatnye",
  seo: {
    title:
      "Откатные ворота в Новодвинске — цена с установкой | Заборы Поморья",
    description:
      "Изготовление и установка откатных ворот в Новодвинске. Ворота под ключ с автоматикой или без неё. Рассчитаем стоимость под размеры вашего проёма.",
    canonicalPath: CANONICAL_PATH,
  },
  breadcrumbs: novodvinskBreadcrumbs("Откатные ворота", CANONICAL_PATH),
  hero: {
    label: "ОТКАТНЫЕ ВОРОТА",
    title: "Откатные ворота в Новодвинске",
    description:
      "Изготавливаем откатные ворота для въезда на участок — с автоматикой или без. На объектах в СНТ «Дружба» и «Надежда» уже ставили откатные ворота вместе с забором.",
    priceLabel: `от ${formatServicePrice(SLIDING_GATE_PRICE)}`,
    priceCaption: "ворота шириной 4 метра",
    primaryCtaLabel: "Рассчитать откатные ворота",
    primaryCtaHref: "#request",
    secondaryCtaLabel: "Посмотреть работы",
    secondaryCtaHref: "#otkatnye-works",
    benefits: HERO_BENEFITS,
    image: WORK_IMAGES.novodvinskDruzhba,
    imageAlt: WORK_IMAGE_ALTS.novodvinskDruzhba,
  },
  specs: [
    { label: "Тип", value: "откатные" },
    { label: "Ширина", value: "4 м" },
    { label: "Монтаж", value: "под ключ" },
    { label: "Автоматика", value: "Nice — опция" },
    { label: "Гарантия", value: "24 месяца" },
  ],
  pricing: {
    title: "Стоимость откатных ворот",
    description:
      "Ориентировочная цена изготовления и установки под ключ.",
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
    title: "Что входит в комплект",
    intro:
      "Откатные ворота включают металлоконструкцию, направляющую систему и монтаж.",
    steps: [],
    listItems: [
      "металлический каркас откатной створки",
      "направляющая и роликовая система",
      "заполнение в стиле забора",
      "монтаж под ключ",
    ],
  },
  variants: {
    title: "Заполнение ворот",
    items: [
      {
        title: "Металлоштакетник",
        description:
          "Как на объектах в «Дружбе» и «Надежде» — ворота в едином стиле с забором.",
      },
      {
        title: "Профнастил",
        description: "Сплошное заполнение профлистом.",
      },
      {
        title: "Сетка",
        description: "3D- или сварная сетка по согласованию.",
      },
      {
        title: "Под ваш проект",
        description: "Подберём заполнение под уже установленное ограждение.",
      },
    ],
  },
  features: {
    title: "Когда нужны откатные ворота",
    points: [
      {
        title: "Узкий проезд в СНТ",
        description:
          "Створка движется вдоль забора — не нужно место для раскрывания.",
      },
      {
        title: "Въезд вплотную к забору",
        description:
          "Удобно, когда парковка или дорожка начинается сразу за проёмом.",
      },
      {
        title: "Автоматика по желанию",
        description:
          "Можно добавить комплект Nice — открывание без выхода из машины.",
      },
    ],
  },
  automation: {
    title: "Автоматика для откатных ворот",
    description:
      "Откатные ворота можно оборудовать автоматикой Nice — управление с пульта или со смартфона.",
    baseLabel: "Откатные ворота",
    basePriceLabel: `от ${formatServicePrice(SLIDING_GATE_PRICE)}`,
    addonLabel: "Автоматика Nice",
    addonPriceLabel: `+${formatServicePrice(GATE_AUTOMATION_NICE_PRICE)}`,
  },
  works: {
    title: "Откатные ворота — работы в Новодвинске",
    projectSlugs: [...NOVODVINSK_WORK_SLUGS.otkatnye],
  },
  process: {
    title: "Как устанавливаем",
    steps: [
      { step: "01", title: "Заявка и расчёт" },
      { step: "02", title: "Замер проёма" },
      { step: "03", title: "Изготовление" },
      { step: "04", title: "Монтаж" },
      { step: "05", title: "Проверка хода створки" },
    ],
  },
  faq: {
    title: "Вопросы об откатных воротах",
    items: [
      {
        id: "nv-slide-price",
        question: "Сколько стоят откатные ворота?",
        answer: `Ориентировочно — от ${formatServicePrice(SLIDING_GATE_PRICE)} за ворота шириной 4 м с изготовлением и установкой. Другие размеры считаем после замера.`,
      },
      {
        id: "nv-slide-auto",
        question: "Сколько стоит автоматика?",
        answer: `Комплект Nice — дополнительно +${formatServicePrice(GATE_AUTOMATION_NICE_PRICE)} к стоимости откатных ворот.`,
      },
      {
        id: "nv-slide-local",
        question: "Ставили ли откатные ворота в Новодвинске?",
        answer:
          "Да. В СНТ «Дружба» — 25 м металлоштакетника с откатными воротами. В «Надежде» — 40 м шахматки с откатными воротами и калиткой в подарок. Фото — в блоке работ выше.",
      },
      {
        id: "nv-slide-vs-swing",
        question: "Откатные или распашные?",
        answer:
          "Откатные — если мало места для открывания. Распашные — проще и обычно дешевле, когда пространства достаточно. Подскажем после замера.",
        answerLink: {
          href: "/novodvinsk/vorota/raspashnye/",
          label: "Распашные ворота",
          after: " — отдельная страница с ценами.",
        },
      },
      {
        id: "nv-slide-fill",
        question: "Можно сделать ворота в стиле моего забора?",
        answer:
          "Да. Подберём заполнение — металлоштакетник, профнастил или сетку — чтобы ворота совпадали с ограждением.",
        answerLink: {
          href: "/novodvinsk/zabory/metalloshtaketnik/",
          label: "Заборы из металлоштакетника",
          after: " и профнастил — страницы с примерами.",
        },
      },
      {
        id: "nv-slide-warranty",
        question: "Есть ли гарантия?",
        answer: "На выполненные работы — 24 месяца.",
      },
    ],
  },
  relatedLinks: {
    title: "Смотрите также",
    links: [
      { label: "Распашные ворота", href: "/novodvinsk/vorota/raspashnye/" },
      { label: "Металлоштакетник", href: "/novodvinsk/zabory/metalloshtaketnik/" },
      { label: "Профнастил", href: "/novodvinsk/zabory/profnastil/" },
      { label: "Заборы в Новодвинске", href: NOVODVINSK_CITY_PATH },
      { label: "Откатные ворота — общая страница", href: "/vorota/otkatnye/" },
    ],
  },
  geo: buildNovodvinskGeo({
    servicePhrase: "откатные ворота",
    intro:
      "Изготавливаем и монтируем откатные ворота под ключ в Новодвинске и ближайших СНТ. Замер проёма, подбор заполнения и расчёт — до начала работ.",
  }),
  cta: {
    label: "Рассчитаем ворота",
    title: "Рассчитаем откатные ворота\nпод ваш проём",
    description:
      "Оставьте телефон — уточним ширину, заполнение и нужна ли автоматика.",
  },
};
