import {
  SLIDING_GATE_CALCULATOR_SURCHARGE,
  SWING_GATE_CALCULATOR_SURCHARGE,
} from "@/lib/calculator/prices";
import { FENCE_CATALOG_ALL_HREF } from "@/lib/catalog/fence-types";
import type { FencePageContent } from "@/lib/fence-pages/types";
import {
  buildFenceHeightPricingRows,
  FENCE_HEIGHTS_SPEC_LABEL,
  fenceFaqPriceByHeightAnswer,
  fencePriceFromLabel15,
  slidingGateCalculatorSurchargeLabel,
} from "@/lib/pricing/fence-price-labels";
import { MONTAZH_IZ_MATERIALA_HREF } from "@/lib/services/mount-only";
import { WORK_IMAGE_ALTS, WORK_IMAGES } from "@/lib/works/assets";

const CANONICAL_PATH = "/zabory/profnastil/";

export const PROFNASTIL_PAGE: FencePageContent = {
  slug: "profnastil",
  fenceTypeId: "profnastil",
  seo: {
    title:
      "Забор из профнастила в Архангельске — цена с установкой | Заборы Поморья",
    description:
      "Заборы из профнастила и профлиста в Архангельске под ключ. Цена за метр с материалами и установкой. Бесплатный замер, расчёт стоимости и гарантия 24 месяца.",
    canonicalPath: CANONICAL_PATH,
  },
  breadcrumbs: [
    { label: "Главная", href: "/" },
    { label: "Заборы", href: FENCE_CATALOG_ALL_HREF },
    { label: "Профнастил", href: CANONICAL_PATH },
  ],
  hero: {
    label: "ЗАБОРЫ ИЗ ПРОФНАСТИЛА",
    title: "Заборы из профнастила в Архангельске",
    description: `Изготовим и установим забор из профнастила и профлиста в Архангельске и области — ${fencePriceFromLabel15("profnastil")} с материалом и монтажом.`,
    priceLabel: fencePriceFromLabel15("profnastil"),
    priceCaption: "с материалом и монтажом",
    primaryCtaLabel: "Рассчитать стоимость",
    primaryCtaHref: "#calculator",
    secondaryCtaLabel: "Посмотреть работы",
    secondaryCtaHref: "#profnastil-works",
    benefits: ["Своё производство", "Гарантия 24 месяца", "Бесплатный замер"],
    image: WORK_IMAGES.profnastilShirsha,
    imageAlt: WORK_IMAGE_ALTS.profnastilShirsha,
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
    title: "Цены на забор из профнастила",
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
        title: "Профлист С8",
      },
      {
        step: "04",
        title: "Крепёж",
        detail: "кровельные саморезы, заглушки",
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
    title: "Рассчитайте стоимость забора из профнастила",
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
          "Сплошное заполнение металлическим профлистом — участок закрыт от посторонних взглядов. Подходит для фасадной части и периметра.",
        priceNote: fencePriceFromLabel15("profnastil"),
        image: WORK_IMAGES.profnastilSntSever,
        imageAlt: WORK_IMAGE_ALTS.profnastilSntSever,
      },
      {
        title: "Профнастил с распашными воротами",
        description:
          "Забор и ворота в едином стиле — удобный вариант для частного въезда на участок.",
        priceNote: `+${SWING_GATE_CALCULATOR_SURCHARGE.toLocaleString("ru-RU")} ₽ в калькуляторе`,
        image: WORK_IMAGES.profnastilSntPomorochka,
        imageAlt: WORK_IMAGE_ALTS.profnastilSntPomorochka,
      },
      {
        title: "Профнастил с откатными воротами",
        description:
          "Подходит, когда рядом с проёмом мало места для открывания створок — въезд остаётся удобным.",
        priceNote: `+${SLIDING_GATE_CALCULATOR_SURCHARGE.toLocaleString("ru-RU")} ₽ в калькуляторе`,
        image: WORK_IMAGES.profnastilKpRodnik,
        imageAlt: WORK_IMAGE_ALTS.profnastilKpRodnik,
      },
    ],
  },
  works: {
    title: "Заборы из профнастила — наши работы",
    filterCategory: "profnastil",
    projectSlugs: [
      "profnastil-shirsha",
      "profnastil-kp-rodnik",
      "profnastil-snt-sever",
      "profnastil-pod-derevo-snt-karkul",
      "kombinirovannyy-zabor-snt-pomorochka",
    ],
    allWorksHref: "/raboty/",
    allWorksPublished: true,
  },
  features: {
    title: "Почему выбирают забор из профнастила",
    points: [
      {
        title: "Закрывает участок от взглядов",
        description:
          "Сплошное заполнение профлистом — ограждение не просматривается с улицы.",
      },
      {
        title: "Подходит для фасадной части",
        description:
          "Аккуратный вид с дороги и со стороны двора — удобно для участка у проезда.",
      },
      {
        title: "Большой выбор цветов",
        description:
          "Графит, коричневый, зелёный, оттенки под дерево — подберём под дом и окружение.",
      },
      {
        title: "Не требует регулярной покраски",
        description:
          "Полимерное покрытие профлиста защищает от коррозии — уход минимальный.",
      },
      {
        title: "Ворота и калитка в том же стиле",
        description:
          "Распашные и откатные ворота, калитку выполняем из того же материала.",
      },
      {
        title: "Относительно быстрый монтаж",
        description:
          "Каркас и профлист монтируются по отработанной схеме — срок зависит от длины и комплектации.",
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
    title: "Как устанавливаем забор из профнастила",
    steps: [
      { step: "01", title: "Заявка" },
      { step: "02", title: "Предварительный расчёт" },
      { step: "03", title: "Замер участка" },
      { step: "04", title: "Согласование материала и комплектации" },
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
          "Монтаж профнастила в Архангельске, Северодвинске, Новодвинске и области.",
      },
    ],
  },
  faq: {
    title: "Частые вопросы о заборах из профнастила",
    items: [
      {
        id: "profnastil-price",
        question: "Сколько стоит забор из профнастила в Архангельске?",
        answer: fenceFaqPriceByHeightAnswer(
          "profnastil",
          "Итог зависит от длины, комплектации, ворот и особенностей участка.",
        ),
      },
      {
        id: "profnastil-proflist",
        question: "Профнастил и профлист — это одно и то же?",
        answer:
          "Да. Профнастил и профлист — разговорные названия профилированного листа для ограждения. Мы устанавливаем забор под ключ, а не продаём листы отдельно.",
      },
      {
        id: "profnastil-height",
        question: "Какую высоту выбрать — 1,5, 1,8 или 2,0 м?",
        answer:
          "1,5 м — распространённый вариант для дачи и частного участка. 1,8 м даёт более закрытое ограждение, 2,0 м — максимальная приватность. Высоту подбираем под ваш участок, соседние заборы и задачи по приватности.",
      },
      {
        id: "profnastil-color",
        question: "Какого цвета можно сделать профнастил?",
        answer:
          "Подберём цвет под дом и окружение: графит, коричневый, зелёный, оттенки под дерево и другие стандартные варианты покрытия. Точный оттенок согласовываем при расчёте.",
      },
      {
        id: "profnastil-vs-metall",
        question: "Что лучше: профнастил или металлоштакетник?",
        answer:
          "Профнастил даёт сплошное ограждение — участок не просматривается. Металлоштакетник продуваемее и легче по виду. Выбор зависит от того, насколько закрытым должно быть ограждение. Подробнее — ",
        answerLink: {
          href: "/zabory/metalloshtaketnik/",
          label: "забор из металлоштакетника",
          after: ".",
        },
      },
      {
        id: "profnastil-sliding-gates",
        question: "Можно ли установить откатные ворота?",
        answer: `Да, изготавливаем откатные ворота из профнастила в том же стиле, что и забор. В калькуляторе к стоимости забора добавляется ${slidingGateCalculatorSurchargeLabel()} за изготовление откатных ворот. Подробнее — `,
        answerLink: {
          href: "/vorota/otkatnye/",
          label: "откатные ворота",
          after: ".",
        },
      },
      {
        id: "profnastil-client-material",
        question: "Можно ли поставить забор из моего материала?",
        answer:
          "Возможность монтажа с вашим материалом зависит от комплектации и объекта. Подробнее — ",
        answerLink: {
          href: MONTAZH_IZ_MATERIALA_HREF,
          label: "монтаж из вашего материала",
          after: ".",
        },
      },
      {
        id: "profnastil-duration",
        question: "Сколько занимает установка?",
        answer:
          "Срок зависит от длины забора, комплектации и условий на участке. Небольшие объекты часто монтируем за 1–3 дня. После замера назовём ориентировочные сроки.",
      },
      {
        id: "profnastil-calc",
        question: "Как рассчитывается стоимость забора?",
        answer:
          "Стоимость складывается из длины забора, высоты профлиста, дополнительных опций (двусторонняя окраска, П-планка) и ворот. В калькуляторе на этой странице можно выбрать параметры и получить ориентировочную цену с материалом и монтажом.",
      },
    ],
  },
  geo: {
    title: "Устанавливаем заборы из профнастила в Архангельске и рядом",
    paragraphs: [
      "Изготавливаем и монтируем заборы из профнастила под ключ в Архангельске и по области. Выезжаем на замер, рассчитываем цену за метр и устанавливаем ограждение с материалом и монтажом.",
    ],
    servicePhrase: "заборы из профнастила",
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
      { label: "Заборы в Архангельске", href: "/arhangelsk/" },
      { label: "Металлоштакетник", href: "/zabory/metalloshtaketnik/" },
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
