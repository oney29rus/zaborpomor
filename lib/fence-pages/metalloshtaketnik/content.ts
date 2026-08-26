import {
  METALLOSHTAKETNIK_GAP_2CM_SURCHARGE_PER_METER,
  SLIDING_GATE_CALCULATOR_SURCHARGE,
  SWING_GATE_CALCULATOR_SURCHARGE,
} from "@/lib/calculator/prices";

import {
  buildFenceHeightPricingRows,
  FENCE_HEIGHTS_SPEC_LABEL,
  fenceFaqHeightChoiceAnswer,
  fenceFaqPriceByHeightAnswer,
  fencePriceFromLabel15,
  fencePriceNoteForAllHeights,
} from "@/lib/pricing/fence-price-labels";

import { FENCE_CATALOG_ALL_HREF } from "@/lib/catalog/fence-types";

import type { FencePageContent } from "@/lib/fence-pages/types";

import { WORK_IMAGE_ALTS, WORK_IMAGES } from "@/lib/works/assets";

const CANONICAL_PATH = "/zabory/metalloshtaketnik/";

export const METALLOSHTAKETNIK_PAGE: FencePageContent = {
  slug: "metalloshtaketnik",

  fenceTypeId: "metalloshtaketnik",

  seo: {
    title:
      "Забор из металлоштакетника под ключ — цена от 3 600 ₽/м | Заборы Поморья",

    description:
      "Установка заборов из металлического штакетника в Архангельске, Северодвинске и Новодвинске. Цена от 3 600 ₽/м с материалом и монтажом. Расчёт стоимости, замер, гарантия 24 месяца.",

    canonicalPath: CANONICAL_PATH,
  },

  breadcrumbs: [
    { label: "Главная", href: "/" },

    { label: "Заборы", href: FENCE_CATALOG_ALL_HREF },

    { label: "Металлоштакетник", href: CANONICAL_PATH },
  ],

  hero: {
    label: "МЕТАЛЛИЧЕСКИЙ ШТАКЕТНИК",

    title: "Забор из металлоштакетника под ключ",

    description:
      "Изготовим и установим металлический штакетник в Архангельске, Северодвинске, Новодвинске и ближайших районах. Материал и монтаж — от 3 600 ₽/м.",

    priceLabel: fencePriceFromLabel15("metalloshtaketnik"),

    priceCaption: "с материалом и монтажом",

    primaryCtaLabel: "Рассчитать стоимость",

    primaryCtaHref: "#calculator",

    secondaryCtaLabel: "Посмотреть работы",

    secondaryCtaHref: "#metalloshtaketnik-works",

    benefits: ["Своё производство", "Гарантия 24 месяца", "Бесплатный замер"],

    image: WORK_IMAGES.novodvinskAvtomobilist,

    imageAlt: WORK_IMAGE_ALTS.novodvinskAvtomobilist,

    imageObjectPosition: "50% 40%",
  },

  specs: [
    { label: "Высота", value: FENCE_HEIGHTS_SPEC_LABEL },

    { label: "Материал", value: "Металлоштакетник" },

    { label: "Зазор", value: "4 см / 2 см" },

    { label: "Монтаж", value: "под ключ" },

    { label: "Гарантия", value: "24 месяца" },
  ],

  pricing: {
    title: "Цены на забор из металлоштакетника",

    description:
      "Ориентировочная стоимость с материалом и монтажом за погонный метр.",

    rows: [
      ...buildFenceHeightPricingRows("metalloshtaketnik", "Металлоштакетник"),
      {
        label: "Зазор 4 см",

        value: "стандартная стоимость",
      },

      {
        label: "Зазор 2 см",

        value: `+${METALLOSHTAKETNIK_GAP_2CM_SURCHARGE_PER_METER.toLocaleString("ru-RU")} ₽/м`,
      },

      ...buildFenceHeightPricingRows("shtaketnik-shahmatka", "Шахматка"),
    ],

    disclaimer:
      "Цена указана ориентировочно за погонный метр забора с материалом и монтажом. Итоговая стоимость зависит от длины, участка, комплектации, ворот и других параметров.",

    ctaLabel: "Рассчитать мой забор",

    ctaHref: "#calculator",
  },

  includes: {
    title: "Что входит в забор из металлоштакетника под ключ",

    steps: [
      {
        step: "01",

        title: "Столбы",

        detail: "50×50 или 60×60 мм в зависимости от конструкции.",
      },

      {
        step: "02",

        title: "Лаги",

        detail: "40×20×1,5 мм.",
      },

      {
        step: "03",

        title: "Металлоштакетник",
      },

      {
        step: "04",

        title: "Крепёж",
      },

      {
        step: "05",

        title: "Изготовление каркаса",
      },

      {
        step: "06",

        title: "Монтаж",
      },
    ],
  },

  calculator: {
    label: "Быстрый расчёт",

    title: "Рассчитайте стоимость забора из металлоштакетника",

    description:
      "Выберите длину, высоту и комплектацию — покажем ориентировочную цену с материалом и монтажом.",

    initialParams: {
      length: 20,

      height: 1.5,

      metallVariant: "standard",

      gap: "4cm",

      gateType: "none",

      hasWicket: false,
    },
  },

  variants: {
    title: "Варианты забора из металлоштакетника",

    items: [
      {
        title: "Обычный металлоштакетник",

        description:
          "Классическое заполнение с одной стороны каркаса. Участок остаётся продуваемым, зазор между планками — 4 см.",

        priceNote: fencePriceFromLabel15("metalloshtaketnik"),

        image: WORK_IMAGES.novodvinskAvtomobilist,

        imageAlt: WORK_IMAGE_ALTS.novodvinskAvtomobilist,
      },

      {
        title: "Плотный металлоштакетник",

        description:
          "Зазор 2 см между планками — участок меньше просматривается с улицы, ограждение выглядит плотнее.",

        priceNote: `+${METALLOSHTAKETNIK_GAP_2CM_SURCHARGE_PER_METER.toLocaleString("ru-RU")} ₽/м к базовой цене`,

        image: WORK_IMAGES.primorskiyEmelyanovskaya,

        imageAlt: WORK_IMAGE_ALTS.primorskiyEmelyanovskaya,
      },

      {
        title: "Шахматка",

        description:
          "Штакетник устанавливается с двух сторон каркаса — лучше закрывает участок от посторонних взглядов и выглядит аккуратно с обеих сторон.",

        priceNote: fencePriceNoteForAllHeights("shtaketnik-shahmatka"),

        image: WORK_IMAGES.novodvinskNadezhda,

        imageAlt: WORK_IMAGE_ALTS.novodvinskNadezhda,
      },
    ],
  },

  works: {
    title: "Наши заборы из металлоштакетника",

    filterCategory: "metalloshtaketnik",

    projectSlugs: [
      "metalloshtaketnik-snt-avtomobilist",

      "metalloshtaketnik-snt-druzhba",

      "metalloshtaketnik-shahmatka-snt-nadezhda",

      "metalloshtaketnik-derevnya-buty",

      "metalloshtaketnik-derevnya-harlovo",

      "metalloshtaketnik-derevnya-demidovo",

      "metalloshtaketnik-derevnya-novinki-matigory",

      "metalloshtaketnik-izhma",

      "metalloshtaketnik-emelyanovskaya",
    ],

    allWorksHref: "/raboty/",

    allWorksPublished: true,
  },

  features: {
    title: "Почему выбирают металлический штакетник",

    points: [
      {
        title: "Участок остаётся продуваемым",

        description:
          "Между планками остаётся зазор — воздух проходит свободнее, чем через сплошное ограждение.",
      },

      {
        title: "Не создаёт сплошную стену",

        description:
          "Забор выглядит легче и не «давит» на пространство участка.",
      },

      {
        title: "Аккуратно с обеих сторон",

        description:
          "При одностороннем монтаже вид с обратной стороны остаётся опрятным; при шахматке — с двух сторон.",
      },

      {
        title: "Не требует регулярной покраски",

        description:
          "Металлоштакетник покрыт полимерным слоем — уход сводится к периодической мойке.",
      },

      {
        title: "Степень закрытости на выбор",

        description:
          "Регулируется зазором между планками: 4 см — стандарт, 2 см — плотнее.",
      },

      {
        title: "Ворота и калитки в едином стиле",

        description:
          "Распашные и откатные ворота, калитку можно выполнить из того же материала.",
      },
    ],
  },

  gates: {
    title: "Ворота и калитки из металлоштакетника",

    intro:
      "Изготовим ворота и калитку в том же стиле, что и забор из металлоштакетника.",

    items: [
      {
        title: "Распашные ворота",

        description: "Классический вариант для частных участков.",

        priceNote: `+${SWING_GATE_CALCULATOR_SURCHARGE.toLocaleString("ru-RU")} ₽ в калькуляторе`,

        href: "/vorota/raspashnye/",

        published: true,
      },

      {
        title: "Откатные ворота",

        description:
          "Подходят, когда рядом с проёмом мало места для открывания.",

        priceNote: `+${SLIDING_GATE_CALCULATOR_SURCHARGE.toLocaleString("ru-RU")} ₽ в калькуляторе`,

        href: "/vorota/otkatnye/",

        published: true,
      },

      {
        title: "Калитка",

        description: "Удобный проход на участок без открывания основных ворот.",

        priceNote: "цена по расчёту",
      },
    ],
  },

  process: {
    title: "Как устанавливаем забор из металлоштакетника",

    steps: [
      { step: "01", title: "Заявка" },

      { step: "02", title: "Расчёт" },

      { step: "03", title: "Замер участка" },

      { step: "04", title: "Согласование комплектации" },

      { step: "05", title: "Монтаж" },

      { step: "06", title: "Приёмка работы" },
    ],
  },

  whyUs: {
    title: "Почему «Заборы Поморья»",

    points: [
      {
        title: "Своё производство",

        description: "Изготавливаем каркас и комплектуем материалы.",
      },

      {
        title: "Монтаж своими бригадами",

        description: "Устанавливаем заборы в Архангельске и области.",
      },

      {
        title: "Цена до начала работ",

        description: "Согласовываем стоимость до начала монтажа.",
      },

      {
        title: "Гарантия 24 месяца",

        description: "Даём гарантию на выполненные работы.",
      },

      {
        title: "Работаем в регионе",

        description:
          "Монтаж металлоштакетника в Архангельске, Северодвинске, Новодвинске и области.",
      },
    ],
  },

  faq: {
    title: "Частые вопросы о металлоштакетнике",

    items: [
      {
        id: "metall-price",

        question: "Сколько стоит забор из металлоштакетника?",

        answer: fenceFaqPriceByHeightAnswer(
          "metalloshtaketnik",
          `Шахматное заполнение: ${fencePriceNoteForAllHeights("shtaketnik-shahmatka")}. Итог зависит от длины, зазора, ворот и особенностей участка.`,
        ),
      },

      {
        id: "metall-gap",

        question: "Какой зазор между штакетником выбрать?",

        answer:
          "Стандартный зазор — 4 см: участок остаётся продуваемым, ограждение выглядит легко. Если нужно меньше просматривать участок — выбирают зазор 2 см с доплатой +250 ₽/м.",
      },

      {
        id: "metall-gap-compare",

        question: "Что лучше — зазор 4 см или 2 см?",

        answer:
          "4 см — универсальный вариант: продуваемость и аккуратный вид. 2 см — если важнее приватность и плотное заполнение. Оба варианта монтируем в едином стиле с воротами и калиткой.",
      },

      {
        id: "metall-shahmatka",

        question: "Что такое штакетник шахматкой?",

        answer: `Планки крепятся с двух сторон каркаса в шахматном порядке — забор лучше закрывает участок от посторонних взглядов и выглядит аккуратно с обеих сторон. ${fenceFaqPriceByHeightAnswer("shtaketnik-shahmatka", "Итог зависит от длины, зазора, ворот и особенностей участка.")}`,
      },

      {
        id: "metall-height",

        question: "Какой высоты сделать забор?",

        answer: fenceFaqHeightChoiceAnswer("metalloshtaketnik"),
      },

      {
        id: "metall-sliding-gates",

        question: "Можно ли установить откатные ворота из металлоштакетника?",

        answer:
          "Да, изготавливаем откатные ворота из металлоштакетника в том же стиле, что и забор. В калькуляторе к стоимости забора добавляется +100 000 ₽ за изготовление откатных ворот.",
      },

      {
        id: "metall-client-material",

        question: "Можно ли поставить забор из моего материала?",

        answer:
          "Возможность монтажа с вашим материалом зависит от комплектации и объекта. Уточните при расчёте — подскажем, как лучше организовать работу. Подробнее — на странице монтажа из вашего материала.",
      },

      {
        id: "metall-duration",

        question: "Сколько занимает монтаж?",

        answer:
          "Срок зависит от длины забора, варианта заполнения и условий на участке. Небольшие объекты часто монтируем за 2–4 дня. После замера назовём ориентировочные сроки.",
      },
    ],
  },

  geo: {
    title: "Устанавливаем заборы из металлоштакетника в Архангельске и рядом",

    paragraphs: [
      "Изготавливаем и монтируем заборы из металлоштакетника под ключ в Архангельске и по области. Выезжаем на замер, рассчитываем цену за метр и устанавливаем ограждение с материалом и монтажом.",
    ],

    servicePhrase: "заборы из металлоштакетника",

    cityLinks: [
      { label: "Архангельск", href: "/arhangelsk/", published: true },

      { label: "Северодвинск", href: "/severodvinsk/", published: true },

      { label: "Новодвинск", href: "/novodvinsk/", published: true },

      {
        label: "Приморский район",
        href: "/primorskiy-rayon/",
        published: true,
      },

      { label: "Холмогорский район", href: "/holmogory/", published: true },
    ],

    areaMentions: [],
  },

  relatedFences: {
    title: "Другие варианты заборов",

    links: [
      { label: "Профнастил", href: "/zabory/profnastil/" },

      {
        label: "Деревянный штакетник",
        href: "/zabory/derevyannyy-shtaketnik/",
      },

      { label: "3D-сетка", href: "/zabory/3d-setka/" },

      { label: "Сварная сетка", href: "/zabory/svarnaya-setka/" },

      { label: "Все виды заборов", href: FENCE_CATALOG_ALL_HREF },
    ],
  },

  cta: {
    label: "Рассчитаем ваш забор",

    title: "Рассчитаем стоимость забора для вашего участка",

    description:
      "Оставьте телефон — рассчитаем ориентировочную стоимость с материалом и монтажом.",
  },
};
