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
  buildNovodvinskGeo,
  NOVODVINSK_CITY_PATH,
  NOVODVINSK_WORK_SLUGS,
  novodvinskBreadcrumbs,
} from "./shared";

const CANONICAL_PATH = "/novodvinsk/zabory/metalloshtaketnik/";

export const NOVODVINSK_METALLOSHTAKETNIK_PAGE: FencePageContent = {
  slug: "metalloshtaketnik",
  fenceTypeId: "metalloshtaketnik",
  seo: {
    title:
      "Забор из металлического штакетника в Новодвинске — цена | Заборы Поморья",
    description:
      "Заборы из металлического штакетника и евроштакетника в Новодвинске с установкой. Цена за метр, варианты заполнения, бесплатный замер и гарантия 24 месяца.",
    canonicalPath: CANONICAL_PATH,
  },
  breadcrumbs: novodvinskBreadcrumbs(
    "Забор из металлоштакетника",
    CANONICAL_PATH,
  ),
  hero: {
    label: "МЕТАЛЛИЧЕСКИЙ ШТАКЕТНИК",
    title: "Заборы из металлического штакетника в Новодвинске",
    description: `Металлический штакетник также называют металлоштакетником или евроштакетником. Изготовим и установим забор — ${fencePriceFromLabel15("metalloshtaketnik")} с материалом и монтажом.`,
    priceLabel: fencePriceFromLabel15("metalloshtaketnik"),
    priceCaption: "с материалом и монтажом",
    primaryCtaLabel: "Рассчитать стоимость",
    primaryCtaHref: "#calculator",
    secondaryCtaLabel: "Посмотреть работы",
    secondaryCtaHref: "#metalloshtaketnik-works",
    benefits: ["Своё производство", "Гарантия 24 месяца", "Бесплатный замер"],
    image: WORK_IMAGES.novodvinskAvtomobilist,
    imageAlt: WORK_IMAGE_ALTS.novodvinskAvtomobilist,
    imageObjectPosition: "50% 45%",
  },
  specs: [
    { label: "Высота", value: FENCE_HEIGHTS_SPEC_LABEL },
    { label: "Материал", value: "Металлоштакетник" },
    { label: "Зазор", value: "4 см / 2 см" },
    { label: "Монтаж", value: "под ключ" },
    { label: "Гарантия", value: "24 месяца" },
  ],
  pricing: {
    title: "Цена за метр с установкой",
    description:
      "Ориентировочная стоимость металлоштакетника за погонный метр с материалом и монтажом.",
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
      "Итог зависит от длины, зазора между планками, ворот и условий на участке.",
    ctaLabel: "Рассчитать мой забор",
    ctaHref: "#calculator",
  },
  includes: {
    title: "Комплектация забора",
    steps: [
      { step: "01", title: "Столбы", detail: "50×50 или 60×60 мм" },
      { step: "02", title: "Лаги", detail: "40×20×1,5 мм" },
      { step: "03", title: "Металлоштакетник" },
      { step: "04", title: "Крепёж" },
      { step: "05", title: "Изготовление каркаса" },
      { step: "06", title: "Монтаж" },
    ],
  },
  calculator: {
    label: "Быстрый расчёт",
    title: "Калькулятор металлоштакетника",
    description:
      "Выберите длину, высоту, зазор и комплектацию — покажем ориентировочную цену.",
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
    title: "Варианты заполнения",
    items: [
      {
        title: "Обычное заполнение",
        description:
          "Планки с одной стороны каркаса, стандартный зазор 4 см — участок продувается, ограждение выглядит легко.",
        priceNote: fencePriceFromLabel15("metalloshtaketnik"),
        image: WORK_IMAGES.novodvinskAvtomobilist,
        imageAlt: WORK_IMAGE_ALTS.novodvinskAvtomobilist,
      },
      {
        title: "Шахматное заполнение",
        description:
          "Планки с двух сторон — лучше закрывает участок с обеих сторон. Ставили в СНТ «Надежда».",
        priceNote: fencePriceNoteForAllHeights("shtaketnik-shahmatka"),
        image: WORK_IMAGES.novodvinskNadezhda,
        imageAlt: WORK_IMAGE_ALTS.novodvinskNadezhda,
      },
      {
        title: "Зазор 2 см",
        description:
          "Более плотное заполнение — меньше просматривается с соседней дорожки.",
        priceNote: `+${METALLOSHTAKETNIK_GAP_2CM_SURCHARGE_PER_METER.toLocaleString("ru-RU")} ₽/м`,
        image: WORK_IMAGES.novodvinskDruzhba,
        imageAlt: WORK_IMAGE_ALTS.novodvinskDruzhba,
      },
    ],
  },
  works: {
    title: "Металлоштакетник в Новодвинске — наши работы",
    filterCategory: "metalloshtaketnik",
    projectSlugs: [...NOVODVINSK_WORK_SLUGS.metalloshtaketnik],
    allWorksHref: "/raboty/",
    allWorksPublished: true,
  },
  features: {
    title: "Плюсы металлоштакетника для дачи",
    points: [
      {
        title: "Лёгкий вид ограждения",
        description:
          "Штакетник не создаёт сплошной стены — участок остаётся визуально открытым.",
      },
      {
        title: "Есть реальные объекты рядом",
        description:
          "В СНТ «Автомобилист», «Дружба» и «Надежда» уже монтировали металлоштакетник — фото на этой странице.",
      },
      {
        title: "Шахматка для приватности",
        description:
          "Двустороннее заполнение закрывает участок с обеих сторон проходной дорожки.",
      },
      {
        title: "Цвета на выбор",
        description:
          "Графит, коричневый, зелёный — подберём под дом и окружение.",
      },
    ],
  },
  gates: {
    title: "Ворота из металлоштакетника",
    intro:
      "На объектах в «Дружбе» и «Надежде» ставили откатные ворота вместе с забором.",
    items: [
      {
        title: "Откатные ворота",
        description: "Удобны, когда мало места для открывания створок.",
        priceNote: `+${SLIDING_GATE_CALCULATOR_SURCHARGE.toLocaleString("ru-RU")} ₽ в калькуляторе`,
        href: "/novodvinsk/vorota/otkatnye/",
        published: true,
      },
      {
        title: "Распашные ворота",
        description: "Классический вариант при достаточном пространстве.",
        priceNote: `+${SWING_GATE_CALCULATOR_SURCHARGE.toLocaleString("ru-RU")} ₽ в калькуляторе`,
        href: "/novodvinsk/vorota/raspashnye/",
        published: true,
      },
      {
        title: "Калитка",
        description: "На нескольких объектах калитку делали в подарок.",
        priceNote: "цена по расчёту",
      },
    ],
  },
  process: {
    title: "Этапы работ",
    steps: [
      { step: "01", title: "Заявка" },
      { step: "02", title: "Расчёт по параметрам" },
      { step: "03", title: "Замер" },
      { step: "04", title: "Согласование зазора и цвета" },
      { step: "05", title: "Монтаж" },
      { step: "06", title: "Сдача объекта" },
    ],
  },
  whyUs: {
    title: "Почему заказывают металлоштакетник у нас",
    points: [
      {
        title: "Своё производство",
        description: "Изготавливаем каркас и комплектуем материалы.",
      },
      {
        title: "Опыт в местных СНТ",
        description:
          "Знаем типовые участки в «Автомобилисте», «Дружбе» и «Надежде».",
      },
      {
        title: "Цена до монтажа",
        description: "Согласовываем стоимость до начала работ.",
      },
      {
        title: "Гарантия 24 месяца",
        description: "На выполненный монтаж.",
      },
    ],
  },
  faq: {
    title: "Вопросы о металлоштакетнике",
    items: [
      {
        id: "nv-metall-price",
        question: "Сколько стоит металлоштакетник за метр?",
        answer: fenceFaqPriceByHeightAnswer(
          "metalloshtaketnik",
          "Шахматное заполнение и зазор 2 см считаются отдельно — уточним при расчёте.",
        ),
      },
      {
        id: "nv-metall-names",
        question: "Металлоштакетник, евроштакетник — это одно?",
        answer:
          "Да. Металлический штакетник, металлоштакетник и евроштакетник — разные названия одного материала для забора. Мы устанавливаем ограждение под ключ, а не продаём планки поштучно.",
      },
      {
        id: "nv-metall-gap",
        question: "Какой зазор лучше — 4 см или 2 см?",
        answer:
          "4 см — стандарт: участок продувается, цена ниже. 2 см — плотнее, меньше просматривается с дорожки. Зазор подбираем с учётом вашего участка.",
      },
      {
        id: "nv-metall-shahmatka",
        question: "Что такое шахматное заполнение?",
        answer:
          "Планки крепят с двух сторон каркаса в шахматном порядке — ограждение выглядит аккуратно с обеих сторон. Так делали 40 м в СНТ «Надежда».",
      },
      {
        id: "nv-metall-height",
        question: "Какую высоту выбрать?",
        answer: `${fenceFaqHeightChoiceAnswer("metalloshtaketnik")} На объектах в Новодвинске чаще ставили 1,8 м.`,
      },
      {
        id: "nv-metall-vs-profnastil",
        question: "Штакетник или профнастил?",
        answer:
          "Штакетник легче и продуваемее. Профнастил — сплошное ограждение. Сравните варианты на странице ",
        answerLink: {
          href: "/novodvinsk/zabory/profnastil/",
          label: "заборов из профнастила",
          after: ".",
        },
      },
      {
        id: "nv-metall-material",
        question: "Можно поставить мой штакетник?",
        answer:
          "Да, выполним монтаж из вашего материала. Уточним комплектацию перед расчётом.",
        answerLink: {
          href: MONTAZH_IZ_MATERIALA_HREF,
          label: "Монтаж из вашего материала",
          after: ".",
        },
      },
    ],
  },
  geo: buildNovodvinskGeo({
    servicePhrase: "заборы из металлоштакетника",
    intro:
      "Изготавливаем и монтируем металлоштакетник в Новодвинске и ближайших СНТ. Подберём зазор, цвет и тип заполнения, рассчитаем цену за метр до начала работ.",
  }),
  relatedFences: {
    title: "Смотрите также",
    links: [
      { label: "Профнастил", href: "/novodvinsk/zabory/profnastil/" },
      { label: "Откатные ворота", href: "/novodvinsk/vorota/otkatnye/" },
      { label: "Распашные ворота", href: "/novodvinsk/vorota/raspashnye/" },
      { label: "Заборы в Новодвинске", href: NOVODVINSK_CITY_PATH },
      {
        label: "Металлоштакетник — общая страница",
        href: "/zabory/metalloshtaketnik/",
      },
    ],
  },
  cta: {
    label: "Рассчитаем забор",
    title: "Рассчитаем стоимость металлоштакетника\nдля вашего участка",
    description:
      "Оставьте телефон — уточним длину, зазор и комплектацию, назовём ориентировочную цену.",
  },
};
