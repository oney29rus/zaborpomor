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
  fencePriceFromLabel18,
  fencePriceFromLabel20,
} from "@/lib/pricing/fence-price-labels";
import { MONTAZH_IZ_MATERIALA_HREF } from "@/lib/services/mount-only";
import { WORK_IMAGE_ALTS, WORK_IMAGES } from "@/lib/works/assets";

const CANONICAL_PATH = "/zabory/svarnaya-setka-pvh/";

export const SVARNAYA_SETKA_PVH_PAGE: FencePageContent = {
  slug: "svarnaya-setka-pvh",
  fenceTypeId: "svarka-setka-pvh",
  seo: {
    title:
      "Забор из сварной сетки ПВХ — цена от 2 800 ₽/м | Заборы Поморья",
    description:
      "Установка заборов из сварной сетки ПВХ в Архангельске, Северодвинске и Новодвинске. Цена от 2 800 ₽/м с материалом и монтажом. Расчёт стоимости и гарантия 24 месяца.",
    canonicalPath: CANONICAL_PATH,
  },
  breadcrumbs: [
    { label: "Главная", href: "/" },
    { label: "Заборы", href: FENCE_CATALOG_ALL_HREF },
    { label: "Сварная сетка ПВХ", href: CANONICAL_PATH },
  ],
  hero: {
    label: "СВАРНАЯ СЕТКА ПВХ",
    title: "Забор из сварной сетки ПВХ под ключ",
    description:
      "Установим забор из сварной сетки с ПВХ-покрытием в Архангельске, Северодвинске, Новодвинске и ближайших районах. Материал и монтаж — от 2 800 ₽/м.",
    priceLabel: fencePriceFromLabel15("svarka-setka-pvh"),
    priceCaption: "с материалом и монтажом",
    primaryCtaLabel: "Рассчитать стоимость",
    primaryCtaHref: "#calculator",
    secondaryCtaLabel: "Посмотреть работы",
    secondaryCtaHref: "#svarnaya-setka-pvh-works",
    benefits: ["Своё производство", "Гарантия 24 месяца", "Бесплатный замер"],
    image: WORK_IMAGES.setkaPvh25,
    imageAlt: WORK_IMAGE_ALTS.setkaPvh25,
    imageObjectPosition: "62% 42%",
  },
  specs: [
    { label: "Тип", value: "сварная сетка ПВХ" },
    { label: "Высота", value: FENCE_HEIGHTS_SPEC_LABEL },
    { label: "Покрытие", value: "оцинковка + ПВХ" },
    { label: "Лаги", value: "верхняя и нижняя" },
    { label: "Гарантия", value: "24 месяца" },
  ],
  pricing: {
    title: "Цены на забор из сварной сетки ПВХ",
    description:
      "Ориентировочная стоимость с материалом и монтажом за погонный метр.",
    rows: buildFenceHeightPricingRows("svarka-setka-pvh"),
    disclaimer:
      "Цена указана ориентировочно за погонный метр забора с материалом и монтажом. Итоговая стоимость зависит от длины, особенностей участка, комплектации, ворот и других параметров.",
    ctaLabel: "Рассчитать мой забор",
    ctaHref: "#calculator",
  },
  includes: {
    title: "Что входит в забор из сварной сетки ПВХ под ключ",
    listItems: [
      "оцинкованная сварная сетка с ПВХ-покрытием",
      "металлические столбы",
      "поперечные лаги сверху и снизу",
      "крепёж",
      "доставка материала",
      "монтаж",
      "гарантия 24 месяца",
    ],
    steps: [],
  },
  calculator: {
    label: "Быстрый расчёт",
    title: "Рассчитайте стоимость забора из сварной сетки ПВХ",
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
    title: "Варианты забора из сварной сетки ПВХ",
    items: [
      {
        title: "Сетка ПВХ 1,5 м",
        description:
          "Зелёное ПВХ-покрытие, поперечные лаги сверху и снизу — практичный вариант для дачи.",
        priceNote: fencePriceFromLabel15("svarka-setka-pvh"),
        image: WORK_IMAGES.setkaPvh25,
        imageAlt: WORK_IMAGE_ALTS.setkaPvh25,
      },
      {
        title: "Сетка ПВХ 1,8 м",
        description:
          "Более высокое ограждение с тем же типом конструкции — лаги и натянутое полотно.",
        priceNote: fencePriceFromLabel18("svarka-setka-pvh"),
        image: WORK_IMAGES.setkaPvh18,
        imageAlt: WORK_IMAGE_ALTS.setkaPvh18,
      },
      {
        title: "Сетка ПВХ 2,0 м",
        description:
          "Максимальная высота из стандартного прайса — подходит, когда нужна повышенная приватность участка.",
        priceNote: fencePriceFromLabel20("svarka-setka-pvh"),
        image: WORK_IMAGES.setkaPvh18,
        imageAlt: WORK_IMAGE_ALTS.setkaPvh18,
      },
      {
        title: "С поперечными лагами",
        description:
          "Как и обычная сварная сетка, полотно ПВХ крепится с верхней и нижней лагой между столбами.",
        image: WORK_IMAGES.setkaPvh25,
        imageAlt: WORK_IMAGE_ALTS.setkaPvh25,
      },
    ],
  },
  works: {
    title: "Наши заборы из сварной сетки ПВХ",
    filterCategory: "setka-pvh",
    projectSlugs: ["setka-pvh-25", "setka-pvh-18"],
    allWorksHref: "/raboty/",
    allWorksPublished: true,
  },
  features: {
    title: "Почему выбирают сварную сетку ПВХ",
    points: [
      {
        title: "ПВХ-покрытие",
        description:
          "Металлическая сварная сетка с полимерным слоем поверх оцинковки.",
      },
      {
        title: "Аккуратный зелёный вид",
        description:
          "Цветное покрытие выглядит опрятнее оцинкованной сетки и сочетается с растительностью.",
      },
      {
        title: "Для дач и участков",
        description:
          "Практичный вариант ограждения без сплошной стены по периметру.",
      },
      {
        title: "Участок продувается",
        description: "Сквозная конструкция не создаёт глухого барьера для воздуха.",
      },
      {
        title: "Средний ценовой сегмент",
        description:
          "Дороже обычной оцинкованной сетки, но доступнее сплошных заборов из профнастила.",
      },
      {
        title: "Лаги сверху и снизу",
        description:
          "Поперечные лаги фиксируют полотно — конструкция держит форму по всей длине.",
      },
    ],
  },
  gates: {
    title: "Ворота и калитки для забора из сетки ПВХ",
    intro:
      "Изготовим ворота и калитку в том же стиле, что и забор из сварной сетки ПВХ.",
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
    title: "Как устанавливаем забор из сварной сетки ПВХ",
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
        description: "Устанавливаем заборы из сетки ПВХ в регионе.",
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
    title: "Частые вопросы о сварной сетке ПВХ",
    items: [
      {
        id: "pvh-price",
        question: "Сколько стоит забор из сварной сетки ПВХ?",
        answer: fenceFaqPriceByHeightAnswer(
          "svarka-setka-pvh",
          "Итог зависит от длины, ворот и особенностей участка.",
        ),
      },
      {
        id: "pvh-vs-ocink",
        question: "Чем сетка ПВХ отличается от обычной сварной сетки?",
        answer:
          "У сетки ПВХ есть цветное полимерное покрытие поверх оцинковки — забор выглядит аккуратнее. Обычная оцинкованная сетка дешевле. Подробнее — ",
        answerLink: {
          href: "/zabory/svarnaya-setka/",
          label: "забор из сварной сетки",
          after: ".",
        },
      },
      {
        id: "pvh-vs-3d",
        question: "Что лучше: 3D-сетка или сварная сетка ПВХ?",
        answer:
          "3D-сетка — жёсткие панели с изгибами, монтируются без поперечных лаг. Сетка ПВХ — полотно с лагами сверху и снизу, дешевле 3D-панелей. Выбор зависит от бюджета и вида ограждения. Сравните — ",
        answerLink: {
          href: "/zabory/3d-setka/",
          label: "забор из 3D-сетки",
          after: ".",
        },
      },
      {
        id: "pvh-lags",
        question: "Для чего нужны поперечные лаги?",
        answer:
          "Верхняя и нижняя лаги натягивают и фиксируют полотно сетки между столбами — оно не провисает и держит ровную линию.",
      },
      {
        id: "pvh-height",
        question: "Какую высоту выбрать?",
        answer: fenceFaqHeightChoiceAnswer("svarka-setka-pvh"),
      },
      {
        id: "pvh-gates",
        question: "Можно ли поставить ворота и калитку?",
        answer:
          "Да, изготавливаем распашные и откатные ворота, а также калитки в комплектации с забором. Стоимость ворот учитывается в калькуляторе.",
      },
      {
        id: "pvh-duration",
        question: "Сколько занимает монтаж?",
        answer:
          "Срок зависит от длины забора и условий на участке. Небольшие объекты часто монтируем за 1–2 дня. После замера назовём ориентировочные сроки.",
      },
      {
        id: "pvh-client-material",
        question: "Можно ли установить мой материал?",
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
    title: "Устанавливаем заборы из сварной сетки ПВХ в Архангельске и рядом",
    paragraphs: [
      "Изготавливаем и монтируем заборы из сварной сетки ПВХ под ключ в Архангельске и по области. Выезжаем на замер, рассчитываем цену за метр и устанавливаем ограждение с материалом и монтажом.",
    ],
    servicePhrase: "заборы из сварной сетки ПВХ",
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
      { label: "Сварная сетка", href: "/zabory/svarnaya-setka/" },
      { label: "3D-сетка", href: "/zabory/3d-setka/" },
      { label: "Профнастил", href: "/zabory/profnastil/" },
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
