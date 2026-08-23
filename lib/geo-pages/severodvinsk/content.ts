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



export const SEVERODVINSK_MOUNT_ONLY = {

  label: "Материал уже куплен?",

  title: "Можем выполнить только монтаж забора из вашего материала.",

  description: "",

  priceLabel: `от ${CUSTOM_MATERIAL_INSTALL_FROM.toLocaleString("ru-RU")} ₽/м`,

  priceCaption: MONTAZH_IZ_MATERIALA_RANGE_LABEL,

  ctaLabel: "Подробнее →",

  ctaHref: MONTAZH_IZ_MATERIALA_HREF,

} as const;



export const SEVERODVINSK_PAGE: CityPageContent = {

  slug: "severodvinsk",

  path: "/severodvinsk/",

  metadata: {

    title:

      "Заборы в Северодвинске под ключ — цены и установка | Заборы Поморья",

    description:

      "Установка заборов под ключ в Северодвинске. Профнастил, металлоштакетник, 3D и сварная сетка, ворота и монтаж. Цены от 2 400 ₽/м, гарантия 24 месяца.",

  },

  breadcrumbs: [

    { label: "Главная", href: "/" },

    { label: "Северодвинск", href: "/severodvinsk/" },

  ],

  hero: {

    label: "ЗАБОРЫ В СЕВЕРОДВИНСКЕ",

    title: "Заборы под ключ\nв Северодвинске",

    description:

      "Изготавливаем и устанавливаем заборы в Северодвинске и ближайших СНТ. Профнастил, металлоштакетник, 3D-сетка, сварная сетка, ворота и монтаж под ключ.",

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

    image: WORK_IMAGES.profnastilSntSever,

    imageAlt: WORK_IMAGE_ALTS.profnastilSntSever,

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

    profnastil: WORK_IMAGES.profnastilSntSever,

    metalloshtaketnik: WORK_IMAGES.metallSntUyma,

    "3d-setka": WORK_IMAGES.threeDBerezka,

    "svarnaya-setka": WORK_IMAGES.setkaOcink,

    "svarnaya-setka-pvh": WORK_IMAGES.setkaPvh25,

    "derevyannyy-shtaketnik": WORK_IMAGES.derevyannyyZaostrovye,

  },

  workProjectSlugs: [

    "profnastil-snt-sever",

    "kombinirovannyy-zabor-snt-pomorochka",

    "profnastil-pod-derevo-snt-karkul",

    "metalloshtaketnik-shahmatka-snt-uyma",

    "metalloshtaketnik-shahmatka-snt-dvina",

  ],

  worksLayout: "three-two",

  calculatorInitialParams: {

    length: 20,

    height: 1.5,

    fenceType: "profnastil",

    gateType: "none",

    hasWicket: false,

  },

  process: {

    title: "Как заказать забор в Северодвинске",

    steps: [

      { step: "01", title: "Заявка" },

      { step: "02", title: "Расчёт" },

      { step: "03", title: "Замер" },

      { step: "04", title: "Комплектация" },

      { step: "05", title: "Монтаж" },

      { step: "06", title: "Приёмка" },

    ],

  },

  geography: {

    title: "Устанавливаем заборы в Северодвинске и ближайших СНТ",

    paragraphs: [

      "Работаем по Северодвинску и выезжаем на участки в ближайшие СНТ и населённые пункты. Устанавливаем заборы для частных домов, дач и загородных участков.",

      "Среди реальных объектов компании — СНТ «Север», «Поморочка», «Каркуль», «Уйма», «Двина» и другие.",

    ],

  },

  gates: {

    title: "Ворота для забора в Северодвинске",

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

        title: "Своё производство",

        description:

          "Изготавливаем элементы забора сами и контролируем комплектацию объекта.",

      },

      {

        title: "Монтаж своими бригадами",

        description:

          "Не просто продаём материал — сами устанавливаем забор и отвечаем за монтаж.",

      },

      {

        title: "Актуальная цена до начала работ",

        description:

          "Сначала согласовываем параметры и стоимость, затем приступаем к выполнению заказа.",

      },

      {

        title: "Гарантия 24 месяца",

        description:

          "На выполненные работы предоставляем гарантию 24 месяца.",

      },

      {

        title: "Реальные объекты в Северодвинске и рядом",

        description:

          "На странице — фото и параметры выполненных работ в СНТ «Север», «Поморочка», «Каркуль», «Уйма» и «Двина».",

      },

    ],

  },

  faq: {

    title: "Частые вопросы о заборах в Северодвинске",

    items: [

      {

        id: "cost",

        question: "Сколько стоит забор под ключ в Северодвинске?",

        answer:

          "Стоимость зависит от типа забора, длины, высоты, ворот и условий участка. Ориентировочно — от 2 400 ₽/м с материалом и монтажом для сварной сетки. Точную сумму можно рассчитать в калькуляторе на этой странице.",

      },

      {

        id: "types",

        question: "Какие виды заборов устанавливаете?",

        answer:

          "В Северодвинске монтируем профнастил, металлоштакетник, 3D-сетку, сварную сетку с ПВХ-покрытием и деревянный штакетник. Для каждого вида — отдельная страница с ценами и примерами работ.",

        answerLink: {

          href: "/zabory/profnastil/",

          label: "Профнастил",

          after: ", металлоштакетник, 3D-сетка и другие виды — в разделе «Заборы».",

        },

      },

      {

        id: "install-only",

        question: "Можно заказать только монтаж?",

        answer: `Да. Если материал уже куплен, выполним только установку. Стоимость работ — ${MONTAZH_IZ_MATERIALA_RANGE_LABEL} в зависимости от типа забора и условий на участке.`,

        answerLink: {

          href: MONTAZH_IZ_MATERIALA_HREF,

          label: "Подробнее об установке из вашего материала",

        },

      },

      {

        id: "customer-material",

        question: "Можно установить забор из моего материала?",

        answer:

          "Да. Перед началом работ уточняем комплектацию, тип конструкции и условия участка, чтобы согласовать стоимость монтажа.",

        answerLink: {

          href: MONTAZH_IZ_MATERIALA_HREF,

          label: "Условия монтажа из материала заказчика",

        },

      },

      {

        id: "timeline",

        question: "Сколько занимает установка?",

        answer:

          "Срок зависит от длины, материала и комплектации. Например, 25–30 м профнастила в СНТ часто монтируем за 1–2 дня. Точный срок согласовываем до начала работ.",

      },

      {

        id: "gates",

        question: "Делаете ли откатные ворота?",

        answer:

          "Да. Изготавливаем и устанавливаем откатные и распашные ворота, калитки — комплектацию подбираем вместе с забором.",

        answerLink: {

          href: "/vorota/otkatnye/",

          label: "Откатные ворота",

          after: " и распашные — отдельные страницы с ценами.",

        },

      },

      {

        id: "svai",

        question: "Можно поставить забор на винтовые сваи?",

        answer:

          "Да. Устанавливаем винтовые сваи под каркас забора — удобный вариант для участков с неровным грунтом или без масштабной подготовки основания.",

        answerLink: {

          href: "/uslugi/vintovye-svai/",

          label: "Винтовые сваи под забор",

        },

      },

      {

        id: "warranty",

        question: "Есть ли гарантия?",

        answer:

          "Да. На выполненные работы предоставляем гарантию 24 месяца.",

      },

      {

        id: "snt",

        question: "Работаете ли в СНТ рядом с Северодвинском?",

        answer:

          "Да. Выезжаем в СНТ «Север», «Поморочка», «Каркуль», «Уйма», «Двина» и другие дачные посёлки рядом с городом. На странице — реальные объекты из этих СНТ.",

        answerLink: {

          href: "/raboty/",

          label: "Все наши работы",

        },

      },

    ],

  },

  otherCities: {

    title: "Другие города",

    links: [

      { label: "Архангельск", href: "/arhangelsk/", published: true },

      { label: "Новодвинск", href: "/novodvinsk/", published: true },

      { label: "Холмогоры", href: "/holmogory/", published: true },

      { label: "Приморский район", href: "/primorskiy-rayon/", published: true },

    ],

  },

  finalCta: {

    title: "Рассчитаем стоимость забора\nдля вашего участка в Северодвинске",

  },

  sections: {

    fenceTypes: "Какие заборы устанавливаем в Северодвинске",

    pricing: "Цены на заборы под ключ в Северодвинске",

    calculator: "Рассчитайте стоимость забора в Северодвинске",

    works: "Наши работы в Северодвинске и рядом",

    additionalServices: "Дополнительные услуги в Северодвинске",

  },

};


