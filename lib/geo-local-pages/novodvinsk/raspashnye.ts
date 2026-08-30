import { HERO_BENEFITS } from "@/lib/constants";
import type { ServicePageContent } from "@/lib/service-pages/types";
import {
  SERVICE_IMAGE_ALTS,
  SERVICE_IMAGES,
  SWING_GATES_PRICE,
  formatServicePrice,
} from "@/lib/services";
import {
  buildNovodvinskGeo,
  NOVODVINSK_CITY_PATH,
  NOVODVINSK_WORK_SLUGS,
  novodvinskBreadcrumbs,
} from "./shared";

const CANONICAL_PATH = "/novodvinsk/vorota/raspashnye/";

export const NOVODVINSK_RASPASHNYE_PAGE: ServicePageContent = {
  slug: "raspashnye",
  seo: {
    title:
      "Распашные ворота в Новодвинске — изготовление и установка | Заборы Поморья",
    description:
      "Распашные ворота для забора в Новодвинске. Изготовление и установка под ключ, варианты с калиткой. Рассчитаем стоимость под ваш проём.",
    canonicalPath: CANONICAL_PATH,
  },
  breadcrumbs: novodvinskBreadcrumbs("Распашные ворота", CANONICAL_PATH),
  hero: {
    label: "РАСПАШНЫЕ ВОРОТА",
    title: "Распашные ворота в Новодвинске",
    description:
      "Изготавливаем металлические распашные ворота для въезда на участок. Классический вариант — когда рядом с проёмом достаточно места для открывания створок.",
    priceLabel: `от ${formatServicePrice(SWING_GATES_PRICE)}`,
    priceCaption: "для ворот шириной 4 метра",
    primaryCtaLabel: "Рассчитать распашные ворота",
    primaryCtaHref: "#request",
    secondaryCtaLabel: "Примеры работ",
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
    title: "Цена распашных ворот",
    description: "Ориентировочная стоимость с изготовлением и установкой.",
    rows: [
      {
        label: "Распашные ворота 4 м",
        value: `от ${formatServicePrice(SWING_GATES_PRICE)}`,
      },
    ],
    disclaimer:
      "Точная цена зависит от заполнения, комплектации и условий на участке.",
    ctaLabel: "Рассчитать распашные ворота",
    ctaHref: "#request",
  },
  includes: {
    title: "Из чего состоят ворота",
    intro: "Распашные ворота — металлокаркас, фурнитура и заполнение в стиле забора.",
    steps: [],
    listItems: [
      "металлический каркас створок",
      "петли и фурнитура",
      "заполнение профнастилом, штакетником или сеткой",
      "монтаж на участке",
    ],
  },
  variants: {
    title: "Заполнение",
    items: [
      {
        title: "Профнастил",
        description: "Сплошное заполнение в стиле забора из профлиста.",
      },
      {
        title: "Металлоштакетник",
        description: "Штакетник на воротах — как на основном ограждении.",
      },
      {
        title: "С калиткой",
        description:
          "Калитку делаем рядом с воротами — удобный проход без открывания створок.",
      },
    ],
  },
  features: {
    title: "Когда подходят распашные ворота",
    points: [
      {
        title: "Простая конструкция",
        description:
          "Распашные ворота понятны в эксплуатации — без направляющих и откатной системы.",
      },
      {
        title: "Достаточно места для открывания",
        description:
          "Нужен запас по ширине проёма — створки раскрываются внутрь или наружу.",
      },
      {
        title: "Часто дешевле откатных",
        description:
          "Если места хватает — распашные ворота обычно обходятся дешевле откатных.",
      },
    ],
  },
  works: {
    title: "Примеры распашных ворот",
    projectSlugs: [...NOVODVINSK_WORK_SLUGS.raspashnyeExamples],
  },
  process: {
    title: "Этапы",
    steps: [
      { step: "01", title: "Расчёт" },
      { step: "02", title: "Замер проёма" },
      { step: "03", title: "Изготовление" },
      { step: "04", title: "Монтаж" },
      { step: "05", title: "Проверка створок" },
    ],
  },
  faq: {
    title: "Вопросы о распашных воротах",
    items: [
      {
        id: "nv-swing-price",
        question: "Сколько стоят распашные ворота?",
        answer: `Ориентировочно — от ${formatServicePrice(SWING_GATES_PRICE)} за ворота шириной 4 м с изготовлением и установкой.`,
      },
      {
        id: "nv-swing-wicket",
        question: "Можно заказать калитку?",
        answer:
          "Да. Калитку изготавливаем в том же стиле, что и ворота — отдельный проход на участок.",
      },
      {
        id: "nv-swing-vs-slide",
        question: "Распашные или откатные?",
        answer:
          "Распашные — если есть место для открывания. Откатные — когда проезд узкий. В Новодвинске на объектах в «Дружбе» и «Надежде» чаще ставили откатные.",
        answerLink: {
          href: "/novodvinsk/vorota/otkatnye/",
          label: "Откатные ворота",
          after: " — страница с ценами и фото.",
        },
      },
      {
        id: "nv-swing-fill",
        question: "Сделаете ворота под мой забор?",
        answer:
          "Да. Подберём заполнение — профнастил, металлоштакетник или сетку.",
        answerLink: {
          href: "/novodvinsk/zabory/profnastil/",
          label: "Заборы из профнастила",
          after: " и металлоштакетник — примеры на отдельных страницах.",
        },
      },
      {
        id: "nv-swing-warranty",
        question: "Какая гарантия?",
        answer: "24 месяца на выполненные работы.",
      },
    ],
  },
  relatedLinks: {
    title: "Смотрите также",
    links: [
      { label: "Откатные ворота", href: "/novodvinsk/vorota/otkatnye/" },
      { label: "Профнастил", href: "/novodvinsk/zabory/profnastil/" },
      {
        label: "Металлоштакетник",
        href: "/novodvinsk/zabory/metalloshtaketnik/",
      },
      { label: "Заборы в Новодвинске", href: NOVODVINSK_CITY_PATH },
      { label: "Распашные ворота — общая страница", href: "/vorota/raspashnye/" },
    ],
  },
  geo: buildNovodvinskGeo({
    servicePhrase: "распашные ворота",
    intro:
      "Изготавливаем и устанавливаем распашные ворота под ключ в Новодвинске. Замер, подбор заполнения и расчёт — до начала монтажа.",
  }),
  cta: {
    label: "Рассчитаем ворота",
    title: "Рассчитаем распашные ворота\nпод ваш проём",
    description:
      "Оставьте телефон — уточним ширину проёма и заполнение, назовём ориентировочную цену.",
  },
};
