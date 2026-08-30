import {
  METALLOSHTAKETNIK_GAP_2CM_SURCHARGE_PER_METER,
  SLIDING_GATE_CALCULATOR_SURCHARGE,
  SWING_GATE_CALCULATOR_SURCHARGE,
} from "@/lib/calculator/prices";
import type { FencePageContent } from "@/lib/fence-pages/types";
import {
  buildFenceHeightPricingRows,
  FENCE_HEIGHTS_SPEC_LABEL,
  fenceFaqHeightChoiceAnswer,
  fenceFaqPriceByHeightAnswer,
  fencePriceFromLabel15,
  fencePriceNoteForAllHeights,
} from "@/lib/pricing/fence-price-labels";
import { MONTAZH_IZ_MATERIALA_HREF } from "@/lib/services/mount-only";
import { WORK_IMAGE_ALTS, WORK_IMAGES } from "@/lib/works/assets";
import {
  buildSeverodvinskGeo,
  severodvinskBreadcrumbs,
  SEVERODVINSK_CITY_PATH,
  SEVERODVINSK_WORK_SLUGS,
} from "./shared";

const CANONICAL_PATH = "/severodvinsk/zabory/metalloshtaketnik/";

export const SEVERODVINSK_METALLOSHTAKETNIK_PAGE: FencePageContent = {
  slug: "metalloshtaketnik",
  fenceTypeId: "metalloshtaketnik",
  seo: {
    title:
      "Забор из металлического штакетника в Северодвинске — цена | Заборы Поморья",
    description:
      "Заборы из металлического штакетника и евроштакетника в Северодвинске с установкой. Расчёт цены за метр, бесплатный замер и гарантия 24 месяца.",
    canonicalPath: CANONICAL_PATH,
  },
  breadcrumbs: severodvinskBreadcrumbs(
    "Забор из металлоштакетника",
    CANONICAL_PATH,
  ),
  hero: {
    label: "МЕТАЛЛИЧЕСКИЙ ШТАКЕТНИК",
    title: "Заборы из металлического штакетника в Северодвинске",
    description:
      `Металлический штакетник также называют металлоштакетником или евроштакетником. Изготовим и установим забор в Северодвинске и ближайших СНТ — ${fencePriceFromLabel15("metalloshtaketnik")} с материалом и монтажом.`,
    priceLabel: fencePriceFromLabel15("metalloshtaketnik"),
    priceCaption: "с материалом и монтажом",
    primaryCtaLabel: "Рассчитать стоимость",
    primaryCtaHref: "#calculator",
    secondaryCtaLabel: "Посмотреть работы",
    secondaryCtaHref: "#metalloshtaketnik-works",
    benefits: ["Своё производство", "Гарантия 24 месяца", "Бесплатный замер"],
    image: WORK_IMAGES.metallSntUyma,
    imageAlt: WORK_IMAGE_ALTS.metallSntUyma,
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
    title: "Цены на забор из металлоштакетника в Северодвинске",
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
      "Цена указана ориентировочно за погонный метр забора с материалом и монтажом. Итоговая стоимость зависит от длины, зазора, ворот и особенностей участка.",
    ctaLabel: "Рассчитать мой забор",
    ctaHref: "#calculator",
  },
  includes: {
    title: "Что входит в забор из металлоштакетника под ключ",
    steps: [
      { step: "01", title: "Столбы", detail: "50×50 или 60×60 мм" },
      { step: "02", title: "Лаги", detail: "40×20×1,5 мм" },
      { step: "03", title: "Металлоштакетник" },
      { step: "04", title: "Крепёж" },
      { step: "05", title: "Изготовление каркаса" },
      { step: "06", title: "Монтаж на участке" },
    ],
  },
  calculator: {
    label: "Быстрый расчёт",
    title: "Рассчитайте стоимость забора из металлоштакетника в Северодвинске",
    description:
      "Выберите длину, высоту, зазор и комплектацию — покажем ориентировочную стоимость с материалом и монтажом.",
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
        image: WORK_IMAGES.metallSntUyma,
        imageAlt: WORK_IMAGE_ALTS.metallSntUyma,
      },
      {
        title: "Шахматка",
        description:
          "Штакетник с двух сторон каркаса — лучше закрывает участок и выглядит аккуратно с обеих сторон. Популярен в СНТ «Уйма» и «Двина».",
        priceNote: fencePriceNoteForAllHeights("shtaketnik-shahmatka"),
        image: WORK_IMAGES.metallSntDvina,
        imageAlt: WORK_IMAGE_ALTS.metallSntDvina,
      },
      {
        title: "Плотный зазор 2 см",
        description:
          "Меньший зазор между планками — участок меньше просматривается с дорожки СНТ.",
        priceNote: `+${METALLOSHTAKETNIK_GAP_2CM_SURCHARGE_PER_METER.toLocaleString("ru-RU")} ₽/м к базовой цене`,
        image: WORK_IMAGES.metallSntUyma,
        imageAlt: WORK_IMAGE_ALTS.metallSntUyma,
      },
    ],
  },
  works: {
    title: "Заборы из металлоштакетника в Северодвинске — наши работы",
    filterCategory: "metalloshtaketnik",
    projectSlugs: [...SEVERODVINSK_WORK_SLUGS.metalloshtaketnik],
    allWorksHref: "/raboty/",
    allWorksPublished: true,
  },
  features: {
    title: "Почему выбирают металлоштакетник для дачи в Северодвинске",
    points: [
      {
        title: "Участок остаётся продуваемым",
        description:
          "Между планками остаётся зазор — воздух проходит свободнее, чем через сплошной профнастил.",
      },
      {
        title: "Шахматка для приватности",
        description:
          "Двустороннее заполнение закрывает участок с обеих сторон — удобно для дачных посёлков с проходными дорожками.",
      },
      {
        title: "Аккуратный вид",
        description:
          "Металлоштакетник не создаёт сплошной «стены» — ограждение выглядит легче на небольших участках.",
      },
      {
        title: "Ворота в едином стиле",
        description:
          "Распашные и откатные ворота выполняем из того же материала, что и забор.",
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
        href: "/severodvinsk/vorota/raspashnye/",
        published: true,
      },
      {
        title: "Откатные ворота",
        description: "Подходят, когда рядом с проёмом мало места для открывания.",
        priceNote: `+${SLIDING_GATE_CALCULATOR_SURCHARGE.toLocaleString("ru-RU")} ₽ в калькуляторе`,
        href: "/severodvinsk/vorota/otkatnye/",
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
    title: "Как устанавливаем забор из металлоштакетника в Северодвинске",
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
        description: "Устанавливаем заборы в Северодвинске и ближайших СНТ.",
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
        title: "Объекты в СНТ «Уйма» и «Двина»",
        description:
          "На странице — фото реальных работ с шахматным заполнением в дачных посёлках рядом с городом.",
      },
    ],
  },
  faq: {
    title: "Частые вопросы о металлоштакетнике в Северодвинске",
    items: [
      {
        id: "sv-metall-price",
        question: "Сколько стоит забор из металлоштакетника в Северодвинске?",
        answer: fenceFaqPriceByHeightAnswer(
          "metalloshtaketnik",
          `Шахматное заполнение: ${fencePriceNoteForAllHeights("shtaketnik-shahmatka")}. Итог зависит от длины, зазора, ворот и особенностей участка.`,
        ),
      },
      {
        id: "sv-metall-shahmatka",
        question: "Что такое штакетник шахматкой?",
        answer:
          "Планки крепятся с двух сторон каркаса в шахматном порядке — забор лучше закрывает участок и выглядит аккуратно с обеих сторон. Такой вариант часто заказывают для дач в СНТ «Уйма» и «Двина».",
      },
      {
        id: "sv-metall-gap",
        question: "Какой зазор выбрать для дачного участка?",
        answer:
          "4 см — стандарт: участок продувается, ограждение выглядит легко. 2 см — если важнее приватность и меньше просматриваемость с соседней дорожки. Оба варианта монтируем в едином стиле с воротами.",
      },
      {
        id: "sv-metall-height",
        question: "Какой высоты сделать забор?",
        answer: fenceFaqHeightChoiceAnswer("metalloshtaketnik"),
      },
      {
        id: "sv-metall-vs-profnastil",
        question: "Металлоштакетник или профнастил для СНТ?",
        answer:
          "Металлоштакетник продуваемее и выглядит легче — удобен, когда участок не нужно закрывать сплошной стеной. Профнастил даёт полную приватность. Часто комбинируют: профнастил с дороги, штакетник с остальных сторон.",
        answerLink: {
          href: "/severodvinsk/zabory/profnastil/",
          label: "Заборы из профнастила в Северодвинске",
          after: ".",
        },
      },
      {
        id: "sv-metall-gates",
        question: "Делаете ли ворота из металлоштакетника?",
        answer:
          "Да. Изготавливаем распашные и откатные ворота в том же стиле, что и забор. Стоимость ворот можно учесть в калькуляторе или рассчитать отдельно.",
        answerLink: {
          href: "/severodvinsk/vorota/raspashnye/",
          label: "Распашные ворота в Северодвинске",
          after: ".",
        },
      },
      {
        id: "sv-metall-material",
        question: "Можно установить забор из моего штакетника?",
        answer:
          "Если материал уже куплен, можем выполнить только монтаж. Уточним комплектацию и условия участка перед расчётом.",
        answerLink: {
          href: MONTAZH_IZ_MATERIALA_HREF,
          label: "Монтаж из вашего материала",
          after: ".",
        },
      },
    ],
  },
  geo: buildSeverodvinskGeo({
    servicePhrase: "заборы из металлоштакетника",
    intro:
      "Изготавливаем и устанавливаем заборы из металлического штакетника под ключ в Северодвинске и ближайших СНТ. Выезжаем на замер, согласовываем зазор и вариант заполнения.",
  }),
  relatedFences: {
    title: "Другие услуги в Северодвинске",
    links: [
      { label: "Профнастил", href: "/severodvinsk/zabory/profnastil/" },
      { label: "Откатные ворота", href: "/severodvinsk/vorota/otkatnye/" },
      { label: "Распашные ворота", href: "/severodvinsk/vorota/raspashnye/" },
      { label: "Все заборы в Северодвинске", href: SEVERODVINSK_CITY_PATH },
      {
        label: "Металлоштакетник — общая страница",
        href: "/zabory/metalloshtaketnik/",
      },
    ],
  },
  cta: {
    label: "Рассчитаем ваш забор",
    title:
      "Рассчитаем стоимость забора из металлоштакетника\nдля вашего участка в Северодвинске",
    description:
      "Оставьте телефон — рассчитаем ориентировочную стоимость с материалом и монтажом.",
  },
};
