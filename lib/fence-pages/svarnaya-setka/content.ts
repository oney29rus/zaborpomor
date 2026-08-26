import {
  SLIDING_GATE_CALCULATOR_SURCHARGE,
  SWING_GATE_CALCULATOR_SURCHARGE,
} from "@/lib/calculator/prices";
import { FENCE_CATALOG_ALL_HREF } from "@/lib/catalog/fence-types";
import type { FencePageContent } from "@/lib/fence-pages/types";
import {
  buildFenceHeightPricingRows,
  FENCE_HEIGHTS_SPEC_LABEL,
  fenceFaqHeightChoiceAnswer,
  fenceFaqPriceByHeightAnswer,
  fencePriceFromLabel15,
} from "@/lib/pricing/fence-price-labels";
import { MONTAZH_IZ_MATERIALA_HREF } from "@/lib/services/mount-only";
import { WORK_IMAGE_ALTS, WORK_IMAGES } from "@/lib/works/assets";

const CANONICAL_PATH = "/zabory/svarnaya-setka/";

export const SVARNAYA_SETKA_PAGE: FencePageContent = {
  slug: "svarnaya-setka",
  fenceTypeId: "svarka-setka",
  seo: {
    title:
      "Забор из сварной сетки под ключ — цена от 2 400 ₽/м | Заборы Поморья",
    description:
      "Установка заборов из сварной сетки в Архангельске, Северодвинске и Новодвинске. Цена от 2 400 ₽/м с материалом и монтажом. Расчёт стоимости и гарантия 24 месяца.",
    canonicalPath: CANONICAL_PATH,
  },
  breadcrumbs: [
    { label: "Главная", href: "/" },
    { label: "Заборы", href: FENCE_CATALOG_ALL_HREF },
    { label: "Сварная сетка", href: CANONICAL_PATH },
  ],
  hero: {
    label: "СВАРНАЯ СЕТКА",
    title: "Забор из сварной сетки под ключ",
    description:
      "Установим практичный забор из сварной сетки в Архангельске, Северодвинске, Новодвинске и ближайших районах. Материал и монтаж — от 2 400 ₽/м.",
    priceLabel: fencePriceFromLabel15("svarka-setka"),
    priceCaption: "с материалом и монтажом",
    primaryCtaLabel: "Рассчитать стоимость",
    primaryCtaHref: "#calculator",
    secondaryCtaLabel: "Посмотреть работы",
    secondaryCtaHref: "#svarnaya-setka-works",
    benefits: ["Своё производство", "Гарантия 24 месяца", "Бесплатный замер"],
    image: WORK_IMAGES.setkaOcink,
    imageAlt: WORK_IMAGE_ALTS.setkaOcink,
    imageObjectPosition: "50% 45%",
  },
  specs: [
    { label: "Тип", value: "сварная сетка" },
    { label: "Высота", value: FENCE_HEIGHTS_SPEC_LABEL },
    { label: "Лаги", value: "верхняя и нижняя" },
    { label: "Монтаж", value: "под ключ" },
    { label: "Гарантия", value: "24 месяца" },
  ],
  pricing: {
    title: "Цены на забор из сварной сетки",
    description:
      "Ориентировочная стоимость с материалом и монтажом за погонный метр.",
    rows: buildFenceHeightPricingRows("svarka-setka"),
    disclaimer:
      "Цена указана ориентировочно за погонный метр забора с материалом и монтажом. Итоговая стоимость зависит от длины, особенностей участка, комплектации, ворот и других параметров.",
    ctaLabel: "Рассчитать мой забор",
    ctaHref: "#calculator",
  },
  includes: {
    title: "Что входит в забор из сварной сетки под ключ",
    steps: [
      { step: "01", title: "Металлические столбы" },
      { step: "02", title: "Поперечные лаги" },
      { step: "03", title: "Сварная сетка" },
      { step: "04", title: "Крепление" },
      { step: "05", title: "Монтаж" },
      { step: "06", title: "Приёмка работы" },
    ],
  },
  calculator: {
    label: "Быстрый расчёт",
    title: "Рассчитайте стоимость забора из сварной сетки",
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
    title: "Варианты забора из сварной сетки",
    items: [
      {
        title: "Оцинкованная сварная сетка",
        description:
          "Практичный вариант для дачи и участка — сетка натягивается между столбами с верхней и нижней лагой.",
        priceNote: fencePriceFromLabel15("svarka-setka"),
        image: WORK_IMAGES.setkaOcink,
        imageAlt: WORK_IMAGE_ALTS.setkaOcink,
      },
      {
        title: "С поперечными лагами",
        description:
          "Верхняя и нижняя лаги фиксируют полотно сетки — конструкция держит форму и не провисает.",
        image: WORK_IMAGES.setkaOcink,
        imageAlt: WORK_IMAGE_ALTS.setkaOcink,
      },
      {
        title: "Сварная сетка ПВХ",
        description:
          "Сетка с полимерным покрытием — аккуратнее по виду, чем оцинковка. Дороже обычной сетки.",
        priceNote: fencePriceFromLabel15("svarka-setka-pvh"),
        image: WORK_IMAGES.setkaPvh25,
        imageAlt: WORK_IMAGE_ALTS.setkaPvh25,
      },
    ],
  },
  works: {
    title: "Наши заборы из сварной сетки",
    filterCategory: "setka",
    projectSlugs: ["setka-ocink"],
    allWorksHref: "/raboty/",
    allWorksPublished: true,
  },
  features: {
    title: "Почему выбирают сварную сетку",
    points: [
      {
        title: "Доступная цена",
        description:
          "Один из самых экономичных вариантов ограждения с материалом и монтажом.",
      },
      {
        title: "Для дачных участков",
        description:
          "Подходит, когда нужно обозначить границу без сплошного забора.",
      },
      {
        title: "Не затеняет участок",
        description: "Сквозная конструкция пропускает свет — грядки и газон не в тени.",
      },
      {
        title: "Хорошо продувается",
        description: "Ветер проходит через сетку — меньше парусный эффект, чем у сплошных заборов.",
      },
      {
        title: "Простой и практичный",
        description:
          "Понятная конструкция: столбы, лаги сверху и снизу, натянутое полотно сетки.",
      },
      {
        title: "Быстрый монтаж",
        description:
          "На типовом участке монтаж занимает немного времени — точный срок зависит от длины.",
      },
    ],
  },
  gates: {
    title: "Ворота и калитки для сетчатого забора",
    intro:
      "Изготовим ворота и калитку в том же стиле, что и забор из сварной сетки.",
    items: [
      {
        title: "Распашные ворота",
        description: "Классический вариант для дачных участков.",
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
    title: "Как устанавливаем забор из сварной сетки",
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
        description: "Устанавливаем сетчатые заборы в Архангельске и области.",
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
    title: "Частые вопросы о сварной сетке",
    items: [
      {
        id: "setka-price",
        question: "Сколько стоит забор из сварной сетки?",
        answer: fenceFaqPriceByHeightAnswer(
          "svarka-setka",
          "Итог зависит от длины, ворот и особенностей участка.",
        ),
      },
      {
        id: "setka-vs-3d",
        question: "Чем сварная сетка отличается от 3D-сетки?",
        answer:
          "Сварная сетка — это полотно в рулоне, которое натягивается между столбами с лагами сверху и снизу. 3D-сетка — готовые жёсткие панели с изгибами, без таких лаг. Подробнее — ",
        answerLink: {
          href: "/zabory/3d-setka/",
          label: "забор из 3D-сетки",
          after: ".",
        },
      },
      {
        id: "setka-lags",
        question: "Зачем нужны верхняя и нижняя лаги?",
        answer:
          "Поперечные лаги фиксируют полотно сетки между столбами — оно не провисает и держит ровную линию по всей длине забора.",
      },
      {
        id: "setka-dacha",
        question: "Подходит ли сварная сетка для дачи?",
        answer:
          "Да, это распространённый вариант для дачного участка — недорогое практичное ограждение без сплошной стены.",
      },
      {
        id: "setka-height",
        question: "Какую высоту выбрать?",
        answer: fenceFaqHeightChoiceAnswer("svarka-setka"),
      },
      {
        id: "setka-gates",
        question: "Можно ли установить калитку и ворота?",
        answer:
          "Да, изготавливаем калитки, распашные и откатные ворота в комплектации с забором. Стоимость ворот учитывается в калькуляторе.",
      },
      {
        id: "setka-duration",
        question: "Сколько занимает монтаж?",
        answer:
          "Срок зависит от длины забора и условий на участке. После замера назовём ориентировочные сроки — на типовом объекте монтаж часто укладывается в 1–2 дня.",
      },
      {
        id: "setka-mount-only",
        question: "Можно ли заказать только монтаж?",
        answer: "Возможность монтажа с вашим материалом зависит от комплектации и объекта. Подробнее — ",
        answerLink: {
          href: MONTAZH_IZ_MATERIALA_HREF,
          label: "монтаж из вашего материала",
          after: ".",
        },
      },
    ],
  },
  geo: {
    title: "Устанавливаем заборы из сварной сетки в Архангельске и рядом",
    paragraphs: [
      "Монтируем заборы из сварной сетки под ключ в Архангельске и по области. Выезжаем на замер, рассчитываем цену за метр и устанавливаем сетчатое ограждение с материалом и монтажом.",
    ],
    servicePhrase: "заборы из сварной сетки",
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
      { label: "Сварная сетка ПВХ", href: "/zabory/svarnaya-setka-pvh/" },
      { label: "3D-сетка", href: "/zabory/3d-setka/" },
      { label: "Профнастил", href: "/zabory/profnastil/" },
      { label: "Металлоштакетник", href: "/zabory/metalloshtaketnik/" },
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
