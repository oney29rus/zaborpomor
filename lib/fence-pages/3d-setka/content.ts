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
import { MONTAZH_IZ_MATERIALA_HREF } from "@/lib/services/mount-only";
import { WORK_IMAGE_ALTS, WORK_IMAGES } from "@/lib/works/assets";

const CANONICAL_PATH = "/zabory/3d-setka/";

export const THREE_D_SETKA_PAGE: FencePageContent = {
  slug: "3d-setka",
  fenceTypeId: "3d-setka",
  seo: {
    title: "Забор из 3D-сетки под ключ — цена от 3 000 ₽/м | Заборы Поморья",
    description:
      "Установка заборов из 3D-сетки в Архангельске, Северодвинске и Новодвинске. Цена от 3 000 ₽/м с материалом и монтажом. Расчёт стоимости и гарантия 24 месяца.",
    canonicalPath: CANONICAL_PATH,
  },
  breadcrumbs: [
    { label: "Главная", href: "/" },
    { label: "Заборы", href: FENCE_CATALOG_ALL_HREF },
    { label: "3D-сетка", href: CANONICAL_PATH },
  ],
  hero: {
    label: "3D-СЕТКА",
    title: "Забор из 3D-сетки под ключ",
    description:
      "Установим забор из 3D-сетки в Архангельске, Северодвинске, Новодвинске и ближайших районах. Материал и монтаж — от 3 000 ₽/м.",
    priceLabel: fencePriceFromLabel15("3d-setka"),
    priceCaption: "с материалом и монтажом",
    primaryCtaLabel: "Рассчитать стоимость",
    primaryCtaHref: "#calculator",
    secondaryCtaLabel: "Посмотреть работы",
    secondaryCtaHref: "#3d-setka-works",
    benefits: ["Своё производство", "Гарантия 24 месяца", "Бесплатный замер"],
    image: WORK_IMAGES.primorskiyLaya,
    imageAlt: WORK_IMAGE_ALTS.primorskiyLaya,
    imageObjectPosition: "50% 45%",
  },
  specs: [
    { label: "Тип", value: "3D-панели" },
    { label: "Высота", value: "1,5 / 1,8 м" },
    { label: "Конструкция", value: "панели + столбы" },
    { label: "Монтаж", value: "под ключ" },
    { label: "Гарантия", value: "24 месяца" },
  ],
  pricing: {
    title: "Цены на забор из 3D-сетки",
    description:
      "Ориентировочная стоимость с материалом и монтажом за погонный метр.",
    rows: [
      { label: "Высота 1,5 м", value: fencePriceFromLabel15("3d-setka") },
      { label: "Высота 1,8 м", value: fencePriceFromLabel18("3d-setka") },
    ],
    disclaimer:
      "Цена указана ориентировочно за погонный метр забора с материалом и монтажом. Итоговая стоимость зависит от длины, особенностей участка, комплектации, ворот и других параметров.",
    ctaLabel: "Рассчитать мой забор",
    ctaHref: "#calculator",
  },
  includes: {
    title: "Что входит в забор из 3D-сетки под ключ",
    steps: [
      { step: "01", title: "Металлические столбы" },
      { step: "02", title: "3D-панели" },
      { step: "03", title: "Крепления" },
      { step: "04", title: "Комплектация" },
      { step: "05", title: "Монтаж" },
      { step: "06", title: "Приёмка работы" },
    ],
  },
  calculator: {
    label: "Быстрый расчёт",
    title: "Рассчитайте стоимость забора из 3D-сетки",
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
    title: "Варианты забора из 3D-сетки",
    items: [
      {
        title: "Зелёная 3D-панель",
        description:
          "Классический вариант для дачи и частного участка — аккуратный современный вид без сплошного закрытия.",
        priceNote: fencePriceFromLabel15("3d-setka"),
        image: WORK_IMAGES.threeDBerezka,
        imageAlt: WORK_IMAGE_ALTS.threeDBerezka,
      },
      {
        title: "Графитовая 3D-панель",
        description:
          "Тёмное покрытие панелей — сдержанный вид, подходит для участка у дома и дороги.",
        priceNote: fencePriceFromLabel18("3d-setka"),
        image: WORK_IMAGES.threeDKatuninec,
        imageAlt: WORK_IMAGE_ALTS.threeDKatuninec,
      },
      {
        title: "3D-сетка с калиткой",
        description:
          "Забор из 3D-панелей с калиткой в комплектации — удобный проход на участок.",
        image: WORK_IMAGES.novodvinskNegino,
        imageAlt: WORK_IMAGE_ALTS.novodvinskNegino,
      },
    ],
  },
  works: {
    title: "Наши заборы из 3D-сетки",
    filterCategory: "3d",
    allWorksHref: "/raboty/",
    allWorksPublished: true,
  },
  features: {
    title: "Почему выбирают забор из 3D-сетки",
    points: [
      {
        title: "Современный внешний вид",
        description:
          "3D-панели выглядят аккуратно — подходят для дачи, дома и обозначения границы участка.",
      },
      {
        title: "Участок остаётся открытым",
        description:
          "Сквозная конструкция не создаёт сплошной стены — территория не «закрывается».",
      },
      {
        title: "Жёсткость за счёт изгибов",
        description:
          "V-образные профили на панели придают прочность без массивного каркаса.",
      },
      {
        title: "Хорошая продуваемость",
        description:
          "Воздух проходит через панель — забор не создаёт сплошной тени на участке.",
      },
      {
        title: "Подходит для дач и территорий",
        description:
          "Удобный вариант ограждения, когда нужно обозначить границу без глухого забора.",
      },
      {
        title: "Быстрый монтаж",
        description:
          "Секционная конструкция монтируется по отработанной схеме — срок зависит от длины.",
      },
    ],
  },
  gates: {
    title: "Ворота и калитки для забора из 3D-сетки",
    intro:
      "Изготовим ворота и калитку в том же стиле, что и забор из 3D-сетки.",
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
    title: "Как устанавливаем забор из 3D-сетки",
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
        description: "Устанавливаем заборы из 3D-сетки в Архангельске и области.",
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
    title: "Частые вопросы о 3D-сетке",
    items: [
      {
        id: "3d-price",
        question: "Сколько стоит забор из 3D-сетки?",
        answer: `Ориентировочная цена — ${fencePriceFromLabel15("3d-setka")} с материалом и монтажом при высоте 1,5 м, ${fencePriceFromLabel18("3d-setka")} при высоте 1,8 м. Итог зависит от длины, ворот, калитки и особенностей участка.`,
      },
      {
        id: "3d-vs-setka",
        question: "Чем 3D-сетка отличается от сварной сетки?",
        answer:
          "3D-сетка — это готовые жёсткие панели с V-образными изгибами, которые крепятся к столбам. Сварная сетка в рулоне натягивается между столбами с поперечными лагами сверху и снизу. Подробнее — ",
        answerLink: {
          href: "/zabory/svarnaya-setka/",
          label: "забор из сварной сетки",
          after: ".",
        },
      },
      {
        id: "3d-bends",
        question: "Что означают изгибы на 3D-панели?",
        answer:
          "Поперечные V-образные профили придают панели жёсткость — она держит форму и не провисает, как полотно из рулонной сетки.",
      },
      {
        id: "3d-height",
        question: "Какую высоту выбрать?",
        answer: `Для дачи и частного участка чаще выбирают 1,5 м (${fencePriceFromLabel15("3d-setka")}) или 1,8 м (${fencePriceFromLabel18("3d-setka")}). Высоту подбираем под периметр и задачи по ограждению.`,
      },
      {
        id: "3d-gates",
        question: "Можно ли поставить ворота и калитку?",
        answer:
          "Да, изготавливаем распашные и откатные ворота, а также калитки в стиле забора из 3D-сетки. Стоимость ворот учитывается в калькуляторе отдельно.",
      },
      {
        id: "3d-dacha",
        question: "Подходит ли 3D-сетка для дачи?",
        answer:
          "Да, это один из популярных вариантов для дачного участка — обозначает границу, не закрывает участок сплошной стеной и хорошо продувается.",
      },
      {
        id: "3d-duration",
        question: "Сколько занимает монтаж?",
        answer:
          "Срок зависит от длины забора и условий на участке. Небольшие объекты часто монтируем за 1–2 дня. После замера назовём ориентировочные сроки.",
      },
      {
        id: "3d-client-material",
        question: "Можно ли установить забор из моего материала?",
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
    title: "Устанавливаем заборы из 3D-сетки в Архангельске и рядом",
    paragraphs: [
      "Монтируем заборы из 3D-сетки под ключ в Архангельске и по области. Выезжаем на замер, рассчитываем цену за метр и устанавливаем секционное ограждение с материалом и монтажом.",
    ],
    servicePhrase: "заборы из 3D-сетки",
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
      { label: "Сварная сетка ПВХ", href: "/zabory/svarnaya-setka-pvh/" },
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
