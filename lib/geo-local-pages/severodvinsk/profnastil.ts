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
  buildSeverodvinskGeo,
  severodvinskBreadcrumbs,
  SEVERODVINSK_CITY_PATH,
  SEVERODVINSK_WORK_SLUGS,
} from "./shared";

const CANONICAL_PATH = "/severodvinsk/zabory/profnastil/";

export const SEVERODVINSK_PROFNASTIL_PAGE: FencePageContent = {
  slug: "profnastil",
  fenceTypeId: "profnastil",
  seo: {
    title:
      "Забор из профнастила в Северодвинске — цена с установкой | Заборы Поморья",
    description:
      "Заборы из профнастила и профлиста в Северодвинске под ключ. Рассчитайте стоимость забора с материалами и установкой. Бесплатный замер, гарантия 24 месяца.",
    canonicalPath: CANONICAL_PATH,
  },
  breadcrumbs: severodvinskBreadcrumbs(
    "Забор из профнастила",
    CANONICAL_PATH,
  ),
  hero: {
    label: "ЗАБОРЫ ИЗ ПРОФНАСТИЛА",
    title: "Заборы из профнастила в Северодвинске",
    description: `Изготовим и установим забор из профнастила в Северодвинске и ближайших СНТ. Материал и монтаж — ${fencePriceFromLabel15("profnastil")}.`,
    priceLabel: fencePriceFromLabel15("profnastil"),
    priceCaption: "с материалом и монтажом",
    primaryCtaLabel: "Рассчитать стоимость",
    primaryCtaHref: "#calculator",
    secondaryCtaLabel: "Посмотреть работы",
    secondaryCtaHref: "#profnastil-works",
    benefits: ["Своё производство", "Гарантия 24 месяца", "Бесплатный замер"],
    image: WORK_IMAGES.profnastilSntSever,
    imageAlt: WORK_IMAGE_ALTS.profnastilSntSever,
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
    title: "Цены на забор из профнастила в Северодвинске",
    description:
      "Ориентировочная стоимость с материалом и монтажом за погонный метр.",
    rows: buildFenceHeightPricingRows("profnastil"),
    disclaimer:
      "Цена указана ориентировочно за погонный метр забора с материалом и монтажом. Итоговая стоимость зависит от длины, особенностей участка, комплектации, ворот и других параметров.",
    ctaLabel: "Рассчитать мой забор",
    ctaHref: "#calculator",
  },
  includes: {
    title: "Что входит в забор из профнастила под ключ",
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
    title: "Рассчитайте стоимость забора из профнастила в Северодвинске",
    description:
      "Выберите длину, высоту и комплектацию — покажем ориентировочную стоимость с материалом и монтажом.",
    initialParams: {
      length: 20,
      height: 1.5,
      gateType: "none",
      hasWicket: false,
    },
  },
  variants: {
    title: "Варианты забора из профнастила",
    items: [
      {
        title: "Классический профнастил",
        description:
          "Сплошное заполнение профлистом — участок закрыт от посторонних взглядов. Подходит для фасадной части и периметра дачи.",
        priceNote: fencePriceFromLabel15("profnastil"),
        image: WORK_IMAGES.profnastilSntSever,
        imageAlt: WORK_IMAGE_ALTS.profnastilSntSever,
      },
      {
        title: "Профнастил под дерево",
        description:
          "Оттенок профлиста под дерево — аккуратный вид рядом с дачным домом и садом.",
        priceNote: fencePriceFromLabel15("profnastil"),
        image: WORK_IMAGES.profnastilSntKarkul,
        imageAlt: WORK_IMAGE_ALTS.profnastilSntKarkul,
      },
      {
        title: "Комбинированный забор",
        description:
          "Сочетание профнастила с другим заполнением — когда нужно закрыть одну сторону плотнее, а другую оставить легче.",
        priceNote: "цена по расчёту",
        image: WORK_IMAGES.profnastilSntPomorochka,
        imageAlt: WORK_IMAGE_ALTS.profnastilSntPomorochka,
      },
    ],
  },
  works: {
    title: "Заборы из профнастила в Северодвинске — наши работы",
    filterCategory: "profnastil",
    projectSlugs: [...SEVERODVINSK_WORK_SLUGS.profnastil],
    allWorksHref: "/raboty/",
    allWorksPublished: true,
  },
  features: {
    title: "Почему выбирают профнастил для участка в Северодвинске",
    points: [
      {
        title: "Сплошное ограждение",
        description:
          "Профлист закрывает участок от взглядов с соседних дорожек и проезда — удобно для дач в СНТ.",
      },
      {
        title: "Подходит для ветреных участков",
        description:
          "Жёсткий каркас и профлист хорошо переносят порывы ветра у открытых дачных посёлков.",
      },
      {
        title: "Большой выбор цветов",
        description:
          "Графит, коричневый, зелёный, оттенки под дерево — подберём под дом и окружение.",
      },
      {
        title: "Ворота в том же стиле",
        description:
          "Распашные и откатные ворота, калитку выполняем из того же материала.",
      },
    ],
  },
  gates: {
    title: "Ворота и калитки для забора из профнастила",
    intro:
      "Изготовим ворота и калитку в том же стиле, что и забор из профнастила.",
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
        description: "Подходят при ограниченном пространстве для открывания.",
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
    title: "Как устанавливаем забор из профнастила в Северодвинске",
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
        title: "Реальные объекты рядом",
        description:
          "На странице — фото работ в СНТ «Север», «Поморочка», «Каркуль» и других посёлках.",
      },
    ],
  },
  faq: {
    title: "Частые вопросы о заборах из профнастила в Северодвинске",
    items: [
      {
        id: "sv-profnastil-price",
        question: "Сколько стоит забор из профнастила в Северодвинске?",
        answer: fenceFaqPriceByHeightAnswer(
          "profnastil",
          "Итог зависит от длины, комплектации, ворот и особенностей участка в СНТ или частном секторе.",
        ),
      },
      {
        id: "sv-profnastil-snt",
        question: "Работаете ли в СНТ рядом с Северодвинском?",
        answer:
          "Да. Устанавливали заборы из профнастила в СНТ «Север», «Поморочка», «Каркуль» и других дачных посёлках. На странице — фото реальных объектов.",
        answerLink: {
          href: SEVERODVINSK_CITY_PATH,
          label: "Заборы в Северодвинске",
          after: " — все виды ограждений и калькулятор.",
        },
      },
      {
        id: "sv-profnastil-height",
        question: "Какую высоту выбрать для дачного участка?",
        answer:
          "1,5 м — распространённый вариант для СНТ: достаточно для приватности, не создаёт «стену» на участке. 1,8 м и 2,0 м — если нужно более плотное ограждение. Высоту подбираем с учётом соседних заборов и правил посёлка.",
      },
      {
        id: "sv-profnastil-vs-metall",
        question: "Профнастил или металлоштакетник для дачи?",
        answer:
          "Профнастил закрывает участок сплошным ограждением. Металлоштакетник продуваемее и выглядит легче. Для СНТ с открытыми участками часто выбирают профнастил на фасадной стороне. Подробнее — ",
        answerLink: {
          href: "/severodvinsk/zabory/metalloshtaketnik/",
          label: "заборы из металлоштакетника в Северодвинске",
          after: ".",
        },
      },
      {
        id: "sv-profnastil-gates",
        question: "Можно заказать ворота вместе с забором?",
        answer:
          "Да. Изготавливаем распашные и откатные ворота из профнастила в едином стиле с ограждением. Стоимость ворот учитывается в калькуляторе или рассчитывается отдельно.",
        answerLink: {
          href: "/severodvinsk/vorota/otkatnye/",
          label: "Откатные ворота в Северодвинске",
          after: " и распашные — отдельные страницы с ценами.",
        },
      },
      {
        id: "sv-profnastil-timeline",
        question: "Сколько занимает монтаж в СНТ?",
        answer:
          "Срок зависит от длины и комплектации. Например, 25–30 м профнастила в СНТ «Север» монтировали за 1–2 дня. После замера назовём ориентировочные сроки для вашего участка.",
      },
      {
        id: "sv-profnastil-material",
        question: "Можно установить забор из моего профлиста?",
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
    servicePhrase: "заборы из профнастила",
    intro:
      "Изготавливаем и устанавливаем заборы из профнастила под ключ в Северодвинске и ближайших СНТ. Выезжаем на замер, согласовываем цвет профлиста и рассчитываем стоимость до начала работ.",
  }),
  relatedFences: {
    title: "Другие услуги в Северодвинске",
    links: [
      {
        label: "Металлоштакетник",
        href: "/severodvinsk/zabory/metalloshtaketnik/",
      },
      { label: "Откатные ворота", href: "/severodvinsk/vorota/otkatnye/" },
      { label: "Распашные ворота", href: "/severodvinsk/vorota/raspashnye/" },
      { label: "Все заборы в Северодвинске", href: SEVERODVINSK_CITY_PATH },
      { label: "Профнастил — общая страница", href: "/zabory/profnastil/" },
    ],
  },
  cta: {
    label: "Рассчитаем ваш забор",
    title: "Рассчитаем стоимость забора из профнастила\nдля вашего участка в Северодвинске",
    description:
      "Оставьте телефон — рассчитаем ориентировочную стоимость с материалом и монтажом.",
  },
};
