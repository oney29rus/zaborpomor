import {
  GATE_AUTOMATION_NICE_PRICE,
  SLIDING_GATE_STANDALONE_FROM,
  SWING_GATE_STANDALONE_FROM,
} from "@/lib/calculator/prices";
import { WORK_IMAGE_ALTS, WORK_IMAGES } from "@/lib/works/assets";
import {
  CUSTOM_MATERIAL_INSTALL_FROM,
  MONTAZH_IZ_MATERIALA_HREF,
  MONTAZH_IZ_MATERIALA_RANGE_LABEL,
} from "@/lib/services/mount-only";
import type { CityPageContent } from "@/lib/geo-pages/types";

export const NOVODVINSK_MOUNT_ONLY = {
  label: "МОНТАЖ ИЗ ВАШЕГО МАТЕРИАЛА",
  title: "Материал для забора уже куплен?",
  description: "Установим забор из вашего материала в Новодвинске.",
  priceLabel: `от ${CUSTOM_MATERIAL_INSTALL_FROM.toLocaleString("ru-RU")} ₽/м`,
  priceCaption:
    "Стоимость монтажа зависит от материала и конструкции — ориентировочно 800–1 500 ₽/м.",
  ctaLabel: "Подробнее →",
  ctaHref: MONTAZH_IZ_MATERIALA_HREF,
} as const;

export const NOVODVINSK_PAGE: CityPageContent = {
  slug: "novodvinsk",
  path: "/novodvinsk/",
  metadata: {
    title: "Заборы в Новодвинске под ключ — цены и установка | Заборы Поморья",
    description:
      "Установка заборов под ключ в Новодвинске. Профнастил, металлоштакетник, 3D и сварная сетка, ворота и монтаж. Цены от 2 400 ₽/м, гарантия 24 месяца.",
  },
  breadcrumbs: [
    { label: "Главная", href: "/" },
    { label: "Новодвинск", href: "/novodvinsk/" },
  ],
  hero: {
    label: "ЗАБОРЫ В НОВОДВИНСКЕ",
    title: "Заборы под ключ\nв Новодвинске",
    description:
      "Изготавливаем и устанавливаем заборы в Новодвинске и рядом. Профнастил, металлоштакетник, 3D-сетка, сварная сетка, деревянный штакетник, ворота и калитки.",
    priceLabel: "от 2 400 ₽/м",
    priceCaption: "материал + монтаж",
    primaryCtaLabel: "Рассчитать стоимость",
    primaryCtaHref: "#calculator",
    secondaryCtaLabel: "Посмотреть работы",
    secondaryCtaHref: "#works",
    benefits: [
      "Своё производство",
      "Гарантия 24 месяца",
      "Монтаж своими бригадами",
    ],
    image: WORK_IMAGES.novodvinskAvtomobilist,
    imageAlt: WORK_IMAGE_ALTS.novodvinskAvtomobilist,
    imageObjectPosition: "center",
  },
  fenceTypeSlugs: [
    "profnastil",
    "metalloshtaketnik",
    "3d-setka",
    "svarnaya-setka",
    "svarnaya-setka-pvh",
    "derevyannyy-shtaketnik",
  ],
  fenceImages: {
    profnastil: WORK_IMAGES.profnastilKpRodnik,
    metalloshtaketnik: WORK_IMAGES.novodvinskAvtomobilist,
    "3d-setka": WORK_IMAGES.novodvinskNegino,
    "svarnaya-setka": WORK_IMAGES.setkaOcink,
    "svarnaya-setka-pvh": WORK_IMAGES.setkaPvh25,
    "derevyannyy-shtaketnik": WORK_IMAGES.derevyannyyZaostrovye,
  },
  workProjectSlugs: [
    "metalloshtaketnik-snt-avtomobilist",
    "metalloshtaketnik-snt-druzhba",
    "3d-setka-snt-negino",
    "metalloshtaketnik-shahmatka-snt-nadezhda",
  ],
  worksLayout: "two-by-two",
  calculatorInitialParams: {
    length: 20,
    height: 1.5,
    fenceType: "profnastil",
    gateType: "none",
    hasWicket: false,
  },
  process: {
    title: "Как заказать забор в Новодвинске",
    steps: [
      { step: "01", title: "Заявка" },
      { step: "02", title: "Предварительный расчёт" },
      { step: "03", title: "Замер" },
      { step: "04", title: "Согласование комплектации" },
      { step: "05", title: "Монтаж" },
      { step: "06", title: "Приёмка" },
    ],
  },
  geography: {
    title: "Устанавливаем заборы в Новодвинске и рядом",
    paragraphs: [
      "Выезжаем в Новодвинск на участки частных домов и дач: замеряем периметр, подбираем материал и комплектацию, изготавливаем элементы и монтируем забор под ключ. Можно заказать только работу, если материал уже куплен.",
      "Среди выполненных объектов — заборы в СНТ «Автомобилист», «Дружба», «Негино» и «Надежда»: металлоштакетник, 3D-сетка, откатные ворота и калитки.",
    ],
  },
  gates: {
    title: "Ворота для забора в Новодвинске",
    items: [
      {
        title: "Распашные ворота",
        description:
          "Классический вариант для въезда на участок — изготовим и установим под ваш забор.",
        priceNote: `от ${SWING_GATE_STANDALONE_FROM.toLocaleString("ru-RU")} ₽`,
        href: "/vorota/raspashnye/",
        published: true,
      },
      {
        title: "Откатные ворота",
        description:
          "Подходят, когда рядом с проёмом мало места для открывания створок.",
        priceNote: `от ${SLIDING_GATE_STANDALONE_FROM.toLocaleString("ru-RU")} ₽`,
        href: "/vorota/otkatnye/",
        published: true,
      },
      {
        title: "Автоматика Nice",
        description:
          "Комплект автоматики для откатных ворот — удобное управление без выхода из машины.",
        priceNote: `+${GATE_AUTOMATION_NICE_PRICE.toLocaleString("ru-RU")} ₽`,
        href: "/vorota/otkatnye/",
        published: true,
      },
    ],
  },
  whyUs: {
    title: "Почему выбирают «Заборы Поморья»",
    points: [
      {
        title: "Материал и монтаж в одной компании",
        description:
          "Изготавливаем элементы забора сами и устанавливаем своими бригадами — не нужно искать отдельно производство и монтажников.",
      },
      {
        title: "Бесплатный замер",
        description:
          "Выезжаем на участок в Новодвинске, замеряем периметр и уточняем условия до расчёта стоимости.",
      },
      {
        title: "Гарантия 24 месяца",
        description:
          "На выполненные работы предоставляем гарантию 24 месяца.",
      },
      {
        title: "Под ключ или только монтаж",
        description:
          "Можно заказать забор с материалом и установкой либо только монтаж из вашего материала.",
      },
      {
        title: "Ворота и калитки",
        description:
          "Изготавливаем распашные и откатные ворота, калитки — на объектах в СНТ «Дружба» и «Надежда» уже ставили откатные ворота.",
      },
    ],
  },
  faq: {
    title: "Частые вопросы о заборах в Новодвинске",
    items: [
      {
        id: "cost",
        question: "Сколько стоит забор под ключ в Новодвинске?",
        answer:
          "Зависит от материала, длины, высоты, ворот и условий участка. Ориентировочно — от 2 400 ₽/м с материалом и монтажом для сварной сетки. Точную сумму можно рассчитать в калькуляторе на этой странице.",
      },
      {
        id: "types",
        question: "Какие заборы устанавливаете в Новодвинске?",
        answer:
          "Монтируем профнастил, металлоштакетник, 3D-сетку, сварную сетку с ПВХ-покрытием и деревянный штакетник. На реальных объектах в Новодвинске уже ставили металлоштакетник и 3D-сетку — ",
        answerLink: {
          href: "/zabory/metalloshtaketnik/",
          label: "металлоштакетник",
          after: " и 3D-сетку.",
        },
      },
      {
        id: "install-only-price",
        question: "Сколько стоит установка забора без материала?",
        answer: `Стоимость только монтажа — ${MONTAZH_IZ_MATERIALA_RANGE_LABEL} в зависимости от типа забора, комплектации и условий на участке. Материал заказчик покупает сам.`,
      },
      {
        id: "customer-material",
        question: "Можно ли установить уже купленный мной забор?",
        answer:
          "Да. Перед началом работ уточняем комплектацию, тип конструкции и условия участка, чтобы согласовать стоимость монтажа.",
        answerLink: {
          href: MONTAZH_IZ_MATERIALA_HREF,
          label: "Условия монтажа из материала заказчика",
        },
      },
      {
        id: "timeline",
        question: "Сколько времени занимает монтаж?",
        answer:
          "Срок зависит от длины, материала и комплектации. Например, 28 м 3D-сетки в СНТ «Негино» смонтировали за один день, а 40 м металлоштакетника в «Надежде» — за четыре. Точный срок согласовываем до начала работ.",
      },
      {
        id: "gates",
        question: "Делаете ли откатные и распашные ворота?",
        answer:
          "Да. Изготавливаем и монтируем распашные и откатные ворота, калитки. На объектах в СНТ «Дружба» и «Надежда» уже устанавливали откатные ворота вместе с забором.",
        answerLink: {
          href: "/vorota/otkatnye/",
          label: "Откатные ворота",
          after: " и распашные — с ценами на отдельных страницах.",
        },
      },
      {
        id: "svai",
        question: "Можно ли установить забор на винтовые сваи?",
        answer:
          "Да. Устанавливаем винтовые сваи под каркас забора — удобный вариант, когда нужно надёжное основание без масштабной подготовки участка.",
        answerLink: {
          href: "/uslugi/vintovye-svai/",
          label: "Винтовые сваи под забор",
        },
      },
      {
        id: "warranty",
        question: "Какая гарантия на работы?",
        answer:
          "На выполненные работы предоставляем гарантию 24 месяца.",
      },
      {
        id: "area",
        question: "Выезжаете ли за пределы Новодвинска?",
        answer:
          "Да. Работаем в Новодвинске и выезжаем в ближайшие СНТ и населённые пункты. Также монтируем заборы в Архангельске, Северодвинске и других районах области.",
        answerLink: {
          href: "/arhangelsk/",
          label: "Архангельск",
          after: " и Северодвинск — отдельные страницы с ценами и работами.",
        },
      },
    ],
  },
  otherCities: {
    title: "Другие города и районы",
    links: [
      { label: "Архангельск", href: "/arhangelsk/", published: true },
      { label: "Северодвинск", href: "/severodvinsk/", published: true },
      { label: "Холмогорский район", href: "/holmogory/", published: true },
      { label: "Приморский район", href: "/primorskiy-rayon/", published: true },
    ],
  },
  finalCta: {
    title: "Рассчитаем стоимость забора\nдля вашего участка в Новодвинске",
  },
  sections: {
    fenceTypes: "Какие заборы устанавливаем в Новодвинске",
    pricing: "Цены на заборы под ключ в Новодвинске",
    calculator: "Рассчитайте стоимость забора в Новодвинске",
    works: "Наши работы в Новодвинске и рядом",
    additionalServices: "Дополнительные услуги в Новодвинске",
  },
};
