import { HERO_BENEFITS } from "@/lib/constants";
import type { ServicePageContent } from "@/lib/service-pages/types";
import {
  SERVICE_IMAGE_ALTS,
  SERVICE_IMAGES,
  SWING_GATES_PRICE,
  formatServicePrice,
} from "@/lib/services";
import {
  buildSeverodvinskGeo,
  severodvinskBreadcrumbs,
  SEVERODVINSK_CITY_PATH,
  SEVERODVINSK_WORK_SLUGS,
} from "./shared";

const CANONICAL_PATH = "/severodvinsk/vorota/raspashnye/";

export const SEVERODVINSK_RASPASHNYE_PAGE: ServicePageContent = {
  slug: "raspashnye",
  seo: {
    title:
      "Распашные ворота в Северодвинске — изготовление и установка | Заборы Поморья",
    description:
      "Распашные ворота для забора в Северодвинске. Изготовление и установка под ключ, варианты с калиткой. Рассчитаем стоимость под размеры вашего проёма.",
    canonicalPath: CANONICAL_PATH,
  },
  breadcrumbs: severodvinskBreadcrumbs("Распашные ворота", CANONICAL_PATH),
  hero: {
    label: "РАСПАШНЫЕ ВОРОТА",
    title: "Распашные ворота в Северодвинске",
    description:
      "Изготавливаем и устанавливаем металлические распашные ворота для въезда на участок в Северодвинске и ближайших СНТ.",
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
    title: "Цена на распашные ворота в Северодвинске",
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
    title: "Конструкция распашных ворот",
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
        description:
          "Штакетник на воротах — в том же исполнении, что и забор.",
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
    title: "Когда выбирают распашные ворота",
    points: [
      {
        title: "Классический вариант для дачи",
        description:
          "Распашные ворота привычны для частных участков и СНТ — простая и понятная конструкция.",
      },
      {
        title: "Достаточно места для открывания",
        description:
          "Подходят, когда рядом с проёмом есть пространство для раскрывания створок.",
      },
      {
        title: "Калитка рядом с воротами",
        description:
          "Часто заказывают вместе с калиткой — удобный проход без открывания основных ворот.",
      },
    ],
  },
  works: {
    title: "Распашные ворота в Северодвинске — наши работы",
    projectSlugs: [...SEVERODVINSK_WORK_SLUGS.gates],
  },
  process: {
    title: "Этапы установки распашных ворот",
    steps: [
      { step: "01", title: "Расчёт и согласование" },
      { step: "02", title: "Замер проёма" },
      { step: "03", title: "Изготовление ворот" },
      { step: "04", title: "Монтаж на участке" },
      { step: "05", title: "Проверка работы створок" },
    ],
  },
  faq: {
    title: "Частые вопросы о распашных воротах в Северодвинске",
    items: [
      {
        id: "sv-swing-price",
        question: "Сколько стоят распашные ворота в Северодвинске?",
        answer: `Ориентировочная цена — от ${formatServicePrice(SWING_GATES_PRICE)} за ворота шириной 4 м с изготовлением и установкой.`,
      },
      {
        id: "sv-swing-wicket",
        question: "Можно заказать калитку вместе с воротами?",
        answer:
          "Да. Калитку изготавливаем в том же стиле, что и распашные ворота — удобный проход на участок без открывания основного проёма.",
      },
      {
        id: "sv-swing-fill",
        question: "Можно сделать ворота в стиле моего забора?",
        answer:
          "Да. Подбираем заполнение — профнастил, металлоштакетник или сетку — чтобы ворота совпадали с уже установленным ограждением.",
        answerLink: {
          href: "/severodvinsk/zabory/profnastil/",
          label: "Заборы из профнастила",
          after: " и металлоштакетник — страницы с ценами и примерами работ.",
        },
      },
      {
        id: "sv-swing-vs-slide",
        question: "Распашные или откатные — что лучше?",
        answer:
          "Распашные проще и часто дешевле — если рядом с проёмом достаточно места для открывания. Откатные удобнее на узких проездах. Подскажем после замера.",
        answerLink: {
          href: "/severodvinsk/vorota/otkatnye/",
          label: "Откатные ворота в Северодвинске",
          after: ".",
        },
      },
      {
        id: "sv-swing-width",
        question: "Можно сделать ворота другой ширины?",
        answer:
          "Базовая цена указана для проёма 4 м. Другие размеры рассчитываем индивидуально после замера — оставьте заявку, и мы уточним параметры.",
      },
      {
        id: "sv-swing-warranty",
        question: "Есть ли гарантия?",
        answer: "На выполненные работы действует гарантия 24 месяца.",
      },
    ],
  },
  relatedLinks: {
    title: "Связанные услуги в Северодвинске",
    links: [
      { label: "Откатные ворота", href: "/severodvinsk/vorota/otkatnye/" },
      { label: "Профнастил", href: "/severodvinsk/zabory/profnastil/" },
      {
        label: "Металлоштакетник",
        href: "/severodvinsk/zabory/metalloshtaketnik/",
      },
      { label: "Заборы в Северодвинске", href: SEVERODVINSK_CITY_PATH },
      {
        label: "Распашные ворота — общая страница",
        href: "/vorota/raspashnye/",
      },
    ],
  },
  geo: buildSeverodvinskGeo({
    servicePhrase: "распашные ворота",
    intro:
      "Изготавливаем и устанавливаем распашные ворота под ключ в Северодвинске и ближайших СНТ. Выезжаем на замер, согласовываем заполнение и рассчитываем стоимость до начала работ.",
  }),
  cta: {
    label: "Рассчитаем ворота",
    title: "Рассчитаем стоимость\nраспашных ворот в Северодвинске",
    description:
      "Оставьте номер телефона — уточним ширину проёма, заполнение и рассчитаем стоимость ворот.",
  },
};
