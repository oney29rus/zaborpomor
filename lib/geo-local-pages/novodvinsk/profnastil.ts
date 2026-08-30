import {
  SLIDING_GATE_CALCULATOR_SURCHARGE,
  SWING_GATE_CALCULATOR_SURCHARGE,
} from "@/lib/calculator/prices";
import type { FencePageContent } from "@/lib/fence-pages/types";
import {
  buildFenceHeightPricingRows,
  FENCE_HEIGHTS_SPEC_LABEL,
  fenceFaqPriceByHeightAnswer,
  fencePriceFromLabel15,
} from "@/lib/pricing/fence-price-labels";
import { MONTAZH_IZ_MATERIALA_HREF } from "@/lib/services/mount-only";
import { WORK_IMAGE_ALTS, WORK_IMAGES } from "@/lib/works/assets";
import {
  buildNovodvinskGeo,
  NOVODVINSK_CITY_PATH,
  novodvinskBreadcrumbs,
} from "./shared";

const CANONICAL_PATH = "/novodvinsk/zabory/profnastil/";

export const NOVODVINSK_PROFNASTIL_PAGE: FencePageContent = {
  slug: "profnastil",
  fenceTypeId: "profnastil",
  seo: {
    title:
      "Забор из профнастила в Новодвинске — цена с установкой | Заборы Поморья",
    description:
      "Заборы из профнастила и профлиста в Новодвинске под ключ. Цена за метр с материалами и установкой. Бесплатный замер, расчёт стоимости и гарантия 24 месяца.",
    canonicalPath: CANONICAL_PATH,
  },
  breadcrumbs: novodvinskBreadcrumbs(
    "Забор из профнастила",
    CANONICAL_PATH,
  ),
  hero: {
    label: "ЗАБОРЫ ИЗ ПРОФНАСТИЛА",
    title: "Заборы из профнастила в Новодвинске",
    description: `Монтируем заборы из профлиста на частных участках и дачах — ${fencePriceFromLabel15("profnastil")} с материалом и установкой. Профнастил и профлист — одна услуга: сплошное ограждение под ключ.`,
    priceLabel: fencePriceFromLabel15("profnastil"),
    priceCaption: "с материалом и монтажом",
    primaryCtaLabel: "Рассчитать стоимость",
    primaryCtaHref: "#calculator",
    secondaryCtaLabel: "Посмотреть работы",
    secondaryCtaHref: "#profnastil-works",
    benefits: ["Своё производство", "Гарантия 24 месяца", "Бесплатный замер"],
    image: WORK_IMAGES.profnastilKpRodnik,
    imageAlt: WORK_IMAGE_ALTS.profnastilKpRodnik,
    imageObjectPosition: "50% 50%",
  },
  specs: [
    { label: "Высота", value: FENCE_HEIGHTS_SPEC_LABEL },
    { label: "Профлист", value: "С8" },
    { label: "Каркас", value: "металлический" },
    { label: "Монтаж", value: "под ключ" },
    { label: "Гарантия", value: "24 месяца" },
  ],
  pricing: {
    title: "Стоимость забора из профнастила",
    description:
      "Ориентировочная цена за погонный метр с материалом и монтажом.",
    rows: buildFenceHeightPricingRows("profnastil"),
    disclaimer:
      "Итоговая сумма зависит от длины периметра, высоты, ворот и особенностей участка. Точный расчёт — после замера.",
    ctaLabel: "Рассчитать мой забор",
    ctaHref: "#calculator",
  },
  includes: {
    title: "Что входит в стоимость",
    steps: [
      { step: "01", title: "Столбы", detail: "50×50 или 60×60 мм" },
      { step: "02", title: "Лаги", detail: "40×20×1,5 мм" },
      { step: "03", title: "Профлист С8" },
      { step: "04", title: "Крепёж", detail: "саморезы, заглушки" },
      { step: "05", title: "Изготовление каркаса" },
      { step: "06", title: "Монтаж на участке" },
    ],
  },
  calculator: {
    label: "Быстрый расчёт",
    title: "Калькулятор забора из профнастила",
    description:
      "Укажите длину, высоту и комплектацию — получите ориентировочную цену с материалом и установкой.",
    initialParams: {
      length: 20,
      height: 1.5,
      gateType: "none",
      hasWicket: false,
    },
  },
  variants: {
    title: "Варианты по высоте и цвету",
    items: [
      {
        title: "Высота 1,5 м",
        description:
          "Стандарт для дачных участков: достаточная приватность без лишней массивности.",
        priceNote: fencePriceFromLabel15("profnastil"),
        image: WORK_IMAGES.profnastilKpRodnik,
        imageAlt: WORK_IMAGE_ALTS.profnastilKpRodnik,
      },
      {
        title: "Графит и коричневый",
        description:
          "Популярные цвета профлиста — нейтрально смотрятся рядом с деревянными домами и садом.",
        priceNote: fencePriceFromLabel15("profnastil"),
        image: WORK_IMAGES.profnastilSntSever,
        imageAlt: WORK_IMAGE_ALTS.profnastilSntSever,
      },
      {
        title: "Профлист под дерево",
        description:
          "Оттенок под натуральное дерево — когда нужен более «тёплый» вид ограждения.",
        priceNote: fencePriceFromLabel15("profnastil"),
        image: WORK_IMAGES.profnastilSntKarkul,
        imageAlt: WORK_IMAGE_ALTS.profnastilSntKarkul,
      },
    ],
  },
  works: {
    title: "Примеры заборов из профнастила",
    filterCategory: "profnastil",
    allWorksHref: "/raboty/",
    allWorksPublished: true,
  },
  features: {
    title: "Когда выбирают профнастил",
    points: [
      {
        title: "Сплошное ограждение",
        description:
          "Профлист закрывает участок от проезда и соседних дорожек — актуально для дач в СНТ.",
      },
      {
        title: "Цена за метр понятна заранее",
        description:
          "Стоимость считаем за погонный метр с материалом и монтажом — без скрытых доплат на этапе расчёта.",
      },
      {
        title: "Быстрый монтаж",
        description:
          "На типовом участке 20–30 м ограждения монтируем за один–два дня после согласования.",
      },
      {
        title: "Ворота в комплекте",
        description:
          "Распашные или откатные ворота и калитку делаем из того же профлиста.",
      },
    ],
  },
  gates: {
    title: "Ворота и калитки",
    intro:
      "Изготовим проём для въезда и проходную калитку в том же материале, что и забор.",
    items: [
      {
        title: "Распашные ворота",
        description: "Классический вариант, если рядом с проёмом достаточно места.",
        priceNote: `+${SWING_GATE_CALCULATOR_SURCHARGE.toLocaleString("ru-RU")} ₽ в калькуляторе`,
        href: "/novodvinsk/vorota/raspashnye/",
        published: true,
      },
      {
        title: "Откатные ворота",
        description: "Створка уезжает вдоль забора — удобно на узком проезде.",
        priceNote: `+${SLIDING_GATE_CALCULATOR_SURCHARGE.toLocaleString("ru-RU")} ₽ в калькуляторе`,
        href: "/novodvinsk/vorota/otkatnye/",
        published: true,
      },
      {
        title: "Калитка",
        description: "Отдельный проход на участок без открывания ворот.",
        priceNote: "цена по расчёту",
      },
    ],
  },
  process: {
    title: "Как проходит монтаж",
    steps: [
      { step: "01", title: "Заявка и расчёт" },
      { step: "02", title: "Выезд на замер" },
      { step: "03", title: "Согласование цвета и высоты" },
      { step: "04", title: "Изготовление" },
      { step: "05", title: "Установка на участке" },
      { step: "06", title: "Приёмка" },
    ],
  },
  whyUs: {
    title: "Почему заказывают у нас",
    points: [
      {
        title: "Материал и работа в одном месте",
        description:
          "Не нужно отдельно искать профлист и бригаду — комплектуем и монтируем сами.",
      },
      {
        title: "Замер бесплатно",
        description:
          "Приедем на участок в Новодвинске, замерим периметр и уточним условия.",
      },
      {
        title: "Гарантия 24 месяца",
        description: "На выполненный монтаж.",
      },
      {
        title: "Работаем в СНТ",
        description:
          "Выезжаем в дачные посёлки рядом с городом — «Автомобилист», «Дружба», «Надежда» и другие.",
      },
    ],
  },
  faq: {
    title: "Вопросы о заборах из профнастила",
    items: [
      {
        id: "nv-profnastil-price",
        question: "Сколько стоит забор из профнастила в Новодвинске?",
        answer: fenceFaqPriceByHeightAnswer(
          "profnastil",
          "Точная сумма зависит от длины, высоты, ворот и рельефа участка.",
        ),
      },
      {
        id: "nv-profnastil-proflist",
        question: "Профнастил и профлист — это одно и то же?",
        answer:
          "Да. Профнастил и профлист — разговорные названия одного материала: профилированного листа для ограждения. Мы монтируем забор под ключ, а не продаём листы отдельно.",
      },
      {
        id: "nv-profnastil-install",
        question: "Сколько стоит установка за метр?",
        answer:
          "Цена указана за погонный метр с материалом и монтажом. Рассчитать ориентировочную сумму можно в калькуляторе на этой странице или после бесплатного замера.",
      },
      {
        id: "nv-profnastil-vs-metall",
        question: "Чем профнастил отличается от металлоштакетника?",
        answer:
          "Профлист закрывает участок сплошным полотном. Штакетник — продуваемый, с зазорами между планками. Если нужен более лёгкий вид — смотрите ",
        answerLink: {
          href: "/novodvinsk/zabory/metalloshtaketnik/",
          label: "заборы из металлоштакетника",
          after: ".",
        },
      },
      {
        id: "nv-profnastil-material",
        question: "Можно установить мой профлист?",
        answer:
          "Да, выполним только монтаж из вашего материала. Уточним комплектацию и условия участка перед расчётом.",
        answerLink: {
          href: MONTAZH_IZ_MATERIALA_HREF,
          label: "Монтаж из вашего материала",
          after: ".",
        },
      },
      {
        id: "nv-profnastil-timeline",
        question: "Как быстро можно поставить забор?",
        answer:
          "Срок зависит от длины и комплектации. После замера назовём ориентировочные даты — обычно монтаж занимает от одного до нескольких дней.",
      },
    ],
  },
  geo: buildNovodvinskGeo({
    servicePhrase: "заборы из профнастила",
    intro:
      "Устанавливаем заборы из профлиста на участках в Новодвинске и ближайших СНТ. Подберём высоту, цвет и комплектацию, рассчитаем цену за метр до начала работ.",
  }),
  relatedFences: {
    title: "Другие услуги в Новодвинске",
    links: [
      {
        label: "Металлоштакетник",
        href: "/novodvinsk/zabory/metalloshtaketnik/",
      },
      { label: "Откатные ворота", href: "/novodvinsk/vorota/otkatnye/" },
      { label: "Распашные ворота", href: "/novodvinsk/vorota/raspashnye/" },
      { label: "Все заборы в Новодвинске", href: NOVODVINSK_CITY_PATH },
      { label: "Профнастил — общая страница", href: "/zabory/profnastil/" },
    ],
  },
  cta: {
    label: "Рассчитаем ваш забор",
    title: "Узнайте стоимость забора из профнастила\nдля вашего участка",
    description:
      "Оставьте телефон — перезвоним, уточним параметры и рассчитаем цену с материалом и установкой.",
  },
};
