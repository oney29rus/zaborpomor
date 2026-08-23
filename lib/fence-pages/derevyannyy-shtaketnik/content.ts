import {
  SLIDING_GATE_CALCULATOR_SURCHARGE,
  SWING_GATE_CALCULATOR_SURCHARGE,
} from "@/lib/calculator/prices";
import { FENCE_CATALOG_ALL_HREF } from "@/lib/catalog/fence-types";
import type { FencePageContent } from "@/lib/fence-pages/types";
import {
  fencePriceFromLabel15,
  fencePriceFromLabel18,
} from "@/lib/pricing/fence-price-labels";
import { WORK_IMAGE_ALTS, WORK_IMAGES } from "@/lib/works/assets";

const CANONICAL_PATH = "/zabory/derevyannyy-shtaketnik/";

export const DEREVYANNY_SHTAKETNIK_PAGE: FencePageContent = {
  slug: "derevyannyy-shtaketnik",
  fenceTypeId: "derevyannyy-shtaketnik",
  seo: {
    title:
      "Забор из деревянного штакетника под ключ — от 3 600 ₽/м | Заборы Поморья",
    description:
      "Установка заборов из деревянного штакетника в Архангельске, Северодвинске и Новодвинске. Цена от 3 600 ₽/м с материалом и монтажом. Расчёт стоимости и гарантия 24 месяца.",
    canonicalPath: CANONICAL_PATH,
  },
  breadcrumbs: [
    { label: "Главная", href: "/" },
    { label: "Заборы", href: FENCE_CATALOG_ALL_HREF },
    { label: "Деревянный штакетник", href: CANONICAL_PATH },
  ],
  hero: {
    label: "ДЕРЕВЯННЫЙ ШТАКЕТНИК",
    title: "Забор из деревянного штакетника под ключ",
    description:
      "Изготовим и установим деревянный штакетник в Архангельске, Северодвинске, Новодвинске и ближайших районах. Материал и монтаж — от 3 600 ₽/м.",
    priceLabel: fencePriceFromLabel15("derevyannyy-shtaketnik"),
    priceCaption: "с материалом и монтажом",
    primaryCtaLabel: "Рассчитать стоимость",
    primaryCtaHref: "#calculator",
    secondaryCtaLabel: "Посмотреть работы",
    secondaryCtaHref: "#derevyannyy-shtaketnik-works",
    benefits: ["Своё производство", "Гарантия 24 месяца", "Бесплатный замер"],
    image: WORK_IMAGES.derevyannyyZaostrovye,
    imageAlt: WORK_IMAGE_ALTS.derevyannyyZaostrovye,
    imageObjectPosition: "58% 45%",
  },
  specs: [
    { label: "Материал", value: "деревянный штакетник" },
    { label: "Высота", value: "1,5 / 1,8 м" },
    { label: "Ширина планки", value: "12 см" },
    { label: "Монтаж", value: "под ключ" },
    { label: "Гарантия", value: "24 месяца" },
  ],
  pricing: {
    title: "Цены на забор из деревянного штакетника",
    description:
      "Ориентировочная стоимость с материалом и монтажом за погонный метр.",
    rows: [
      {
        label: "Высота 1,5 м",
        value: fencePriceFromLabel15("derevyannyy-shtaketnik"),
      },
      {
        label: "Высота 1,8 м",
        value: fencePriceFromLabel18("derevyannyy-shtaketnik"),
      },
    ],
    disclaimer:
      "Цена указана ориентировочно за погонный метр забора с материалом и монтажом. Итоговая стоимость зависит от длины, зазора между планками, варианта заполнения, ворот и других параметров.",
    ctaLabel: "Рассчитать мой забор",
    ctaHref: "#calculator",
  },
  includes: {
    title: "Что входит в деревянный забор из штакетника под ключ",
    steps: [
      { step: "01", title: "Металлические столбы" },
      { step: "02", title: "Лаги" },
      {
        step: "03",
        title: "Деревянный штакетник",
        detail: "Ширина планки — 12 см.",
      },
      { step: "04", title: "Крепёж" },
      { step: "05", title: "Подготовка комплектации" },
      { step: "06", title: "Монтаж" },
    ],
  },
  calculator: {
    label: "Быстрый расчёт",
    title: "Рассчитайте стоимость деревянного забора из штакетника",
    description:
      "Выберите длину, высоту и комплектацию — покажем ориентировочную цену с материалом и монтажом.",
    initialParams: {
      length: 20,
      height: 1.5,
      gateType: "none",
      hasWicket: false,
    },
  },
  variants: {
    title: "Варианты забора из деревянного штакетника",
    items: [
      {
        title: "Обычный деревянный штакетник",
        description:
          "Классическое заполнение с одной стороны каркаса — участок остаётся продуваемым, вид естественный.",
        priceNote: fencePriceFromLabel15("derevyannyy-shtaketnik"),
        image: WORK_IMAGES.primorskiyTripuzovo,
        imageAlt: WORK_IMAGE_ALTS.primorskiyTripuzovo,
      },
      {
        title: "Более плотное заполнение",
        description:
          "Меньший зазор между планками — участок меньше просматривается, ограждение выглядит плотнее.",
        image: WORK_IMAGES.derevyannyyZaostrovye,
        imageAlt: WORK_IMAGE_ALTS.derevyannyyZaostrovye,
      },
      {
        title: "Шахматное заполнение",
        description:
          "Планки с двух сторон каркаса в шахматном порядке — лучше закрывает участок от посторонних взглядов.",
        image: WORK_IMAGES.derevyannyyStroitel,
        imageAlt: WORK_IMAGE_ALTS.derevyannyyStroitel,
      },
    ],
  },
  works: {
    title: "Наши заборы из деревянного штакетника",
    filterCategory: "derevyannyy-shtaketnik",
    projectSlugs: [
      "derevyannyy-shtaketnik-zaostrovye",
      "derevyannyy-shtaketnik-stroitel",
      "derevyannyy-shtaketnik-tripuzovo",
    ],
    allWorksHref: "/raboty/",
    allWorksPublished: true,
  },
  features: {
    title: "Почему выбирают деревянный штакетник",
    points: [
      {
        title: "Натуральный внешний вид",
        description:
          "Дерево выглядит естественно — хорошо сочетается с загородным участком и садом.",
      },
      {
        title: "С деревянными домами",
        description:
          "Классический вариант для дома из бруса, бревна или дачного строения.",
      },
      {
        title: "Участок продувается",
        description: "Между планками остаётся зазор — воздух проходит свободнее, чем через сплошной забор.",
      },
      {
        title: "Зазор на выбор",
        description:
          "Расстояние между штакетинами регулирует степень открытости и приватности.",
      },
      {
        title: "Обычное или шахматное заполнение",
        description:
          "Можно сделать классический монтаж с одной стороны или шахматку с двух сторон.",
      },
      {
        title: "Ворота и калитка в одном стиле",
        description:
          "Распашные и откатные ворота, калитку выполняем из того же материала.",
      },
    ],
  },
  gates: {
    title: "Ворота и калитки для деревянного забора",
    intro:
      "Изготовим ворота и калитку в том же стиле, что и забор из деревянного штакетника.",
    items: [
      {
        title: "Распашные ворота",
        description: "Классический вариант для частных и дачных участков.",
        priceNote: `+${SWING_GATE_CALCULATOR_SURCHARGE.toLocaleString("ru-RU")} ₽ в калькуляторе`,
        href: "/vorota/raspashnye/",
        published: true,
      },
      {
        title: "Откатные ворота",
        description: "Подходят при ограниченном пространстве для открывания.",
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
    title: "Как устанавливаем деревянный забор из штакетника",
    steps: [
      { step: "01", title: "Заявка" },
      { step: "02", title: "Предварительный расчёт" },
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
        description: "Комплектуем материалы и готовим элементы для монтажа.",
      },
      {
        title: "Монтаж своими бригадами",
        description: "Устанавливаем деревянные заборы в Архангельске и области.",
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
          "Монтаж в Архангельске, Северодвинске, Новодвинске и области.",
      },
    ],
  },
  faq: {
    title: "Частые вопросы о деревянном штакетнике",
    items: [
      {
        id: "wood-price",
        question: "Сколько стоит деревянный забор?",
        answer: `Ориентировочная цена — ${fencePriceFromLabel15("derevyannyy-shtaketnik")} с материалом и монтажом при высоте 1,5 м, ${fencePriceFromLabel18("derevyannyy-shtaketnik")} при высоте 1,8 м. Шахматное заполнение и плотный зазор могут повлиять на итог — уточним при расчёте.`,
      },
      {
        id: "wood-gap",
        question: "Какой зазор между штакетинами выбрать?",
        answer:
          "Стандартный зазор — 3–4 см: участок остаётся продуваемым. Меньший зазор (2–3 см) делает ограждение плотнее. Подберём расстояние под ваш участок и задачи по приватности.",
      },
      {
        id: "wood-shahmatka",
        question: "Что такое деревянный штакетник шахматкой?",
        answer:
          "Планки крепятся с двух сторон каркаса в шахматном порядке — забор лучше закрывает участок от посторонних взглядов и выглядит аккуратно с обеих сторон.",
      },
      {
        id: "wood-paint",
        question: "Нужно ли красить деревянный забор?",
        answer:
          "Да, дерево со временем требует защиты от влаги и солнца. Периодически обновляют лакокрасочное или пропиточное покрытие — это продлевает срок службы и сохраняет внешний вид.",
      },
      {
        id: "wood-care",
        question: "Как ухаживать за деревянным штакетником?",
        answer:
          "Раз в несколько лет осматривают планки, при необходимости обновляют защитное покрытие. Убирают мусор у основания, следят за состоянием крепежа. При сильном износе отдельные планки можно заменить.",
      },
      {
        id: "wood-height",
        question: "Какую высоту выбрать?",
        answer: `Чаще всего устанавливают 1,5 м (${fencePriceFromLabel15("derevyannyy-shtaketnik")}) или 1,8 м (${fencePriceFromLabel18("derevyannyy-shtaketnik")}). Высоту подбираем под участок и соседние ограждения.`,
      },
      {
        id: "wood-gates",
        question: "Можно ли сделать ворота из деревянного штакетника?",
        answer:
          "Да, изготавливаем распашные и откатные ворота, а также калитки в том же стиле, что и забор. Стоимость ворот учитывается в калькуляторе.",
      },
      {
        id: "wood-duration",
        question: "Сколько занимает монтаж?",
        answer:
          "Срок зависит от длины забора, варианта заполнения и условий на участке. После замера назовём ориентировочные сроки — от 2 до 4 дней на типовых объектах.",
      },
    ],
  },
  geo: {
    title: "Устанавливаем заборы из деревянного штакетника в Архангельске и рядом",
    paragraphs: [
      "Изготавливаем и устанавливаем деревянные заборы из штакетника под ключ в Архангельске и по области. Выезжаем на замер, рассчитываем цену за метр и монтируем ограждение с материалом и установкой.",
    ],
    servicePhrase: "заборы из деревянного штакетника",
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
      { label: "Металлоштакетник", href: "/zabory/metalloshtaketnik/" },
      { label: "Профнастил", href: "/zabory/profnastil/" },
      { label: "3D-сетка", href: "/zabory/3d-setka/" },
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
