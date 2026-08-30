import { HERO_BENEFITS } from "@/lib/constants";
import type { ServicePageContent } from "@/lib/service-pages/types";
import {
  GATE_AUTOMATION_NICE_PRICE,
  SERVICE_IMAGE_ALTS,
  SERVICE_IMAGES,
  SLIDING_GATE_PRICE,
  formatServicePrice,
} from "@/lib/services";
import {
  buildSeverodvinskGeo,
  severodvinskBreadcrumbs,
  SEVERODVINSK_CITY_PATH,
  SEVERODVINSK_WORK_SLUGS,
} from "./shared";

const CANONICAL_PATH = "/severodvinsk/vorota/otkatnye/";

export const SEVERODVINSK_OTKATNYE_PAGE: ServicePageContent = {
  slug: "otkatnye",
  seo: {
    title:
      "Откатные ворота в Северодвинске — цена с установкой | Заборы Поморья",
    description:
      "Изготовление и установка откатных ворот в Северодвинске. Ворота под ключ, варианты с автоматикой и без. Рассчитаем стоимость под ваш проём.",
    canonicalPath: CANONICAL_PATH,
  },
  breadcrumbs: severodvinskBreadcrumbs("Откатные ворота", CANONICAL_PATH),
  hero: {
    label: "ОТКАТНЫЕ ВОРОТА",
    title: "Откатные ворота в Северодвинске",
    description:
      "Изготавливаем и устанавливаем откатные ворота для въезда на участок в Северодвинске и ближайших СНТ.",
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
    title: "Цена на откатные ворота в Северодвинске",
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
        description: "Заполнение откатных ворот профлистом — в стиле основного забора.",
      },
      {
        title: "Металлоштакетник",
        description: "Штакетник на воротах в едином стиле с ограждением.",
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
    title: "Когда выбирают откатные ворота",
    points: [
      {
        title: "Мало места для распашных створок",
        description:
          "Откатная створка уезжает вдоль забора — удобно для узких проездов в СНТ.",
      },
      {
        title: "Въезд с наклоном",
        description:
          "При небольшом уклоне участка откатные ворота часто удобнее распашных.",
      },
      {
        title: "Единый стиль с забором",
        description:
          "Заполнение подбираем под уже установленный или планируемый забор.",
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
    title: "Откатные ворота в Северодвинске — наши работы",
    projectSlugs: [...SEVERODVINSK_WORK_SLUGS.gates],
  },
  process: {
    title: "Этапы установки откатных ворот",
    steps: [
      { step: "01", title: "Расчёт и согласование" },
      { step: "02", title: "Замер проёма" },
      { step: "03", title: "Изготовление ворот" },
      { step: "04", title: "Монтаж на участке" },
      { step: "05", title: "Проверка хода ворот" },
    ],
  },
  faq: {
    title: "Частые вопросы об откатных воротах в Северодвинске",
    items: [
      {
        id: "sv-slide-price",
        question: "Сколько стоят откатные ворота в Северодвинске?",
        answer: `Ориентировочная цена — от ${formatServicePrice(SLIDING_GATE_PRICE)} за ворота шириной 4 м с изготовлением и установкой.`,
      },
      {
        id: "sv-slide-space",
        question: "Подойдут ли откатные ворота для узкого проезда в СНТ?",
        answer:
          "Да. Откатная створка движется вдоль забора и не требует места для раскрывания — это удобно, когда рядом с проёмом мало свободного пространства.",
      },
      {
        id: "sv-slide-auto",
        question: "Можно ли поставить автоматику?",
        answer: `Да. Комплект автоматики Nice — дополнительно +${formatServicePrice(GATE_AUTOMATION_NICE_PRICE)} к стоимости откатных ворот.`,
      },
      {
        id: "sv-slide-fill",
        question: "Какое заполнение можно выбрать?",
        answer:
          "Профнастил, металлоштакетник или сетку — подбираем в едином стиле с вашим забором. Если забор ещё не установлен, согласуем комплектацию заранее.",
        answerLink: {
          href: "/severodvinsk/zabory/profnastil/",
          label: "Заборы из профнастила в Северодвинске",
          after: " и металлоштакетник — отдельные страницы.",
        },
      },
      {
        id: "sv-slide-vs-swing",
        question: "Откатные или распашные — что выбрать?",
        answer:
          "Откатные — когда мало места для открывания створок. Распашные — проще по конструкции и часто дешевле. Поможем выбрать после замера проёма.",
        answerLink: {
          href: "/severodvinsk/vorota/raspashnye/",
          label: "Распашные ворота в Северодвинске",
          after: ".",
        },
      },
      {
        id: "sv-slide-warranty",
        question: "Есть ли гарантия?",
        answer: "На выполненные работы действует гарантия 24 месяца.",
      },
    ],
  },
  relatedLinks: {
    title: "Связанные услуги в Северодвинске",
    links: [
      { label: "Распашные ворота", href: "/severodvinsk/vorota/raspashnye/" },
      { label: "Профнастил", href: "/severodvinsk/zabory/profnastil/" },
      {
        label: "Металлоштакетник",
        href: "/severodvinsk/zabory/metalloshtaketnik/",
      },
      { label: "Заборы в Северодвинске", href: SEVERODVINSK_CITY_PATH },
      { label: "Откатные ворота — общая страница", href: "/vorota/otkatnye/" },
    ],
  },
  geo: buildSeverodvinskGeo({
    servicePhrase: "откатные ворота",
    intro:
      "Изготавливаем и устанавливаем откатные ворота под ключ в Северодвинске и ближайших СНТ. Выезжаем на замер, уточняем ширину проёма и рассчитываем стоимость до начала работ.",
  }),
  cta: {
    label: "Рассчитаем ворота",
    title: "Рассчитаем стоимость\nоткатных ворот в Северодвинске",
    description:
      "Оставьте номер телефона — уточним ширину проёма, заполнение, автоматику и рассчитаем стоимость.",
  },
};
