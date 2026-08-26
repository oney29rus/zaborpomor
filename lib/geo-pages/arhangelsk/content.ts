import {
  GATE_AUTOMATION_NICE_PRICE,
  SLIDING_GATE_STANDALONE_FROM,
  SWING_GATE_STANDALONE_FROM,
} from "@/lib/calculator/prices";
import { WORK_IMAGE_ALTS, WORK_IMAGES } from "@/lib/works/assets";
import { WORKS_ALL_HREF } from "@/lib/works/projects";
import {
  CUSTOM_MATERIAL_INSTALL_FROM,
  MONTAZH_IZ_MATERIALA_HREF,
  MONTAZH_IZ_MATERIALA_RANGE_LABEL,
} from "@/lib/services/mount-only";
import type { CityPageContent } from "@/lib/geo-pages/types";

export const ARKHANGELSK_MOUNT_ONLY = {
  label: "МОНТАЖ ИЗ ВАШЕГО МАТЕРИАЛА",
  title: "Материал для забора уже куплен?",
  description: "Выполним монтаж забора из вашего материала в Архангельске.",
  priceLabel: `от ${CUSTOM_MATERIAL_INSTALL_FROM.toLocaleString("ru-RU")} ₽/м`,
  priceCaption:
    "Ориентировочная стоимость работ — 800–1 500 ₽/м в зависимости от материала и конструкции.",
  ctaLabel: "Подробнее →",
  ctaHref: MONTAZH_IZ_MATERIALA_HREF,
} as const;

export const ARKHANGELSK_PAGE: CityPageContent = {
  slug: "arhangelsk",
  path: "/arhangelsk/",
  metadata: {
    title: "Заборы в Архангельске под ключ — цены и установка | Заборы Поморья",
    description:
      "Установка заборов под ключ в Архангельске. Профнастил, металлоштакетник, 3D и сварная сетка, ворота и монтаж. Цены от 2 400 ₽/м, гарантия 24 месяца.",
  },
  breadcrumbs: [
    { label: "Главная", href: "/" },
    { label: "Архангельск", href: "/arhangelsk/" },
  ],
  hero: {
    label: "ЗАБОРЫ В АРХАНГЕЛЬСКЕ",
    title: "Заборы под ключ\nв Архангельске",
    description:
      "Изготавливаем и устанавливаем заборы в Архангельске и рядом. Профнастил, металлоштакетник, 3D-сетка, сварная сетка, деревянный штакетник, ворота и калитки.",
    priceLabel: "от 2 400 ₽/м",
    priceCaption: "материал + монтаж",
    primaryCtaLabel: "Рассчитать стоимость",
    primaryCtaHref: "#calculator",
    secondaryCtaLabel: "Посмотреть работы",
    secondaryCtaHref: "#works",
    benefits: [
      "Своё производство",
      "Гарантия 24 месяца",
      "Бесплатный замер",
      "Монтаж своими бригадами",
    ],
    image: WORK_IMAGES.profnastilShirsha,
    imageAlt: WORK_IMAGE_ALTS.profnastilShirsha,
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
    profnastil: WORK_IMAGES.profnastilShirsha,
    metalloshtaketnik: WORK_IMAGES.metallZaostrovye,
    "3d-setka": WORK_IMAGES.threeDKatuninec,
    "svarnaya-setka": WORK_IMAGES.setkaOcink,
    "svarnaya-setka-pvh": WORK_IMAGES.setkaPvh25,
    "derevyannyy-shtaketnik": WORK_IMAGES.derevyannyyZaostrovye,
  },
  workProjectSlugs: [
    "profnastil-shirsha",
    "metalloshtaketnik-zaostrovye",
    "metalloshtaketnik-maloe-toynokurye",
    "3d-katuninec",
    "setka-ocink",
    "setka-pvh-25",
    "derevyannyy-shtaketnik-zaostrovye",
    "profnastil-kp-rodnik",
  ],
  worksLayout: "default",
  worksAllWorksHref: WORKS_ALL_HREF,
  calculatorInitialParams: {
    length: 20,
    height: 1.5,
    fenceType: "profnastil",
    gateType: "none",
    hasWicket: false,
  },
  pricingDisclaimer:
    "Стоимость зависит от высоты, длины, выбранного материала, конструкции участка, ворот, калитки и дополнительных работ. Точную стоимость рассчитываем после уточнения параметров и замера.",
  process: {
    title: "Как заказать забор в Архангельске",
    steps: [
      { step: "01", title: "Заявка" },
      { step: "02", title: "Предварительный расчёт" },
      { step: "03", title: "Замер участка" },
      { step: "04", title: "Согласование комплектации" },
      { step: "05", title: "Монтаж" },
      { step: "06", title: "Приёмка" },
    ],
  },
  geography: {
    title: "Устанавливаем заборы в Архангельске и рядом",
    paragraphs: [
      "Работаем с частными домами и дачными участками: выезжаем на замер, подбираем материал и комплектацию, изготавливаем элементы и монтируем забор под ключ. Можно заказать только монтаж, если материал уже куплен. Устанавливаем ворота, калитки и при необходимости винтовые сваи.",
      "Среди выполненных объектов — Ширша, Заостровье, Малое Тойнокурье, СНТ «Катунинец» и «Исток». На странице — реальные фото и параметры этих работ.",
    ],
  },
  turnkeyIncludes: {
    title: "Что входит в забор под ключ",
    items: [
      "Материал забора",
      "Металлический каркас",
      "Крепёж и комплектующие",
      "Доставка материала",
      "Монтаж",
      "Ворота и калитка — при заказе соответствующей комплектации",
    ],
    note: "Точная комплектация зависит от выбранного типа забора и рассчитывается перед заключением договора.",
  },
  gates: {
    title: "Ворота и калитки в Архангельске",
    items: [
      {
        title: "Распашные ворота",
        description:
          "Классический вариант для въезда на участок шириной 4 м — изготовим и установим под ваш забор.",
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
  climate: {
    title: "Что учитывать при выборе забора в Архангельске",
    points: [
      {
        title: "Ветровая нагрузка",
        description:
          "На открытых участках ветер сильнее давит на конструкцию — важно учитывать направление и экспозицию периметра.",
      },
      {
        title: "Состояние грунта",
        description:
          "На слабых или влажных грунтах опоры могут со временем смещаться — перед монтажом оцениваем участок на месте.",
      },
      {
        title: "Глубина установки опор",
        description:
          "Столбы закапывают с учётом высоты забора и типа грунта, чтобы конструкция держала нагрузку.",
      },
      {
        title: "Вес и парусность материала",
        description:
          "Сплошной профнастил создаёт большую парусность, чем сетка или штакетник с зазорами.",
      },
    ],
    footer:
      "Сплошной профнастил имеет большую парусность, поэтому конструкцию опор нужно подбирать с учётом участка. Для сложных условий возможен вариант установки на",
    link: {
      href: "/uslugi/vintovye-svai/",
      label: "винтовые сваи",
    },
  },
  whyUs: {
    title: "Почему выбирают «Заборы Поморья»",
    points: [
      {
        title: "Своё производство",
        description:
          "Изготавливаем элементы забора сами и контролируем комплектацию каждого объекта.",
      },
      {
        title: "Несколько монтажных бригад",
        description:
          "Монтаж ведём своими бригадами — не передаём работу сторонним подрядчикам.",
      },
      {
        title: "Бесплатный замер",
        description:
          "Выезжаем на участок в Архангельске и рядом, замеряем периметр и уточняем условия до расчёта.",
      },
      {
        title: "Гарантия 24 месяца",
        description:
          "На выполненные работы предоставляем гарантию 24 месяца.",
      },
      {
        title: "Материал и монтаж в одной компании",
        description:
          "Можно заказать забор под ключ или только монтаж из вашего материала.",
      },
    ],
  },
  faq: {
    title: "Частые вопросы о заборах в Архангельске",
    items: [
      {
        id: "cost",
        question: "Сколько стоит забор под ключ в Архангельске?",
        answer:
          "Стоимость зависит от типа забора, длины, высоты, ворот и условий участка. Ориентировочно — от 2 400 ₽/м с материалом и монтажом для сварной сетки. Точную сумму можно рассчитать в калькуляторе на этой странице.",
      },
      {
        id: "cheapest",
        question: "Какой забор дешевле всего?",
        answer:
          "Самый доступный вариант — сварная сетка: от 2 400 ₽/м с материалом и монтажом. Подходит для дачи и участков, где нужен практичный периметр без сплошного заполнения.",
        answerLink: {
          href: "/zabory/svarnaya-setka/",
          label: "Забор из сварной сетки",
        },
      },
      {
        id: "included",
        question: "Что входит в стоимость забора под ключ?",
        answer:
          "В базовую стоимость входят материал забора, металлические столбы, лаги, крепёж, доставка, монтаж и гарантия 24 месяца. Ворота, калитка и дополнительные опции рассчитываются отдельно — комплектацию согласуем до начала работ.",
      },
      {
        id: "height",
        question: "Какую высоту забора выбрать?",
        answer:
          "Чаще всего выбирают 1,5, 1,8 или 2,0 м — зависит от задачи участка, соседних построек и желаемой степени закрытости. Для дачи часто достаточно 1,5 м, для частного дома — 1,8 или 2,0 м. Поможем подобрать высоту на замере.",
      },
      {
        id: "customer-material",
        question: "Можно ли установить забор из моего материала?",
        answer: `Да. Если материал уже куплен, выполним только монтаж. Стоимость работ — ${MONTAZH_IZ_MATERIALA_RANGE_LABEL} в зависимости от типа забора и условий на участке.`,
        answerLink: {
          href: MONTAZH_IZ_MATERIALA_HREF,
          label: "Монтаж из материала заказчика",
        },
      },
      {
        id: "timeline",
        question: "Сколько занимает монтаж?",
        answer:
          "Срок зависит от длины, материала и комплектации. Например, 50 м профнастила в Ширше монтировали за 3 дня, а 20 м 3D-сетки — за один. Точный срок согласовываем до начала работ.",
      },
      {
        id: "gates",
        question: "Делаете ли откатные и распашные ворота?",
        answer:
          "Да. Изготавливаем и монтируем распашные и откатные ворота, калитки — комплектацию подбираем вместе с забором.",
        answerLink: {
          href: "/vorota/otkatnye/",
          label: "Откатные ворота",
          after: " и распашные — с ценами на отдельных страницах.",
        },
      },
      {
        id: "season",
        question: "Когда лучше ставить забор в Архангельске?",
        answer:
          "Монтаж возможен в тёплый сезон, когда грунт позволяет установить опоры. Заявку и расчёт можно оставить заранее — согласуем удобные сроки и комплектацию до начала сезона.",
      },
      {
        id: "svai",
        question: "Можно ли установить забор на винтовые сваи?",
        answer:
          "Да. Устанавливаем винтовые сваи под каркас забора — удобный вариант на участках с неровным или влажным грунтом.",
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
    ],
  },
  otherCities: {
    title: "Другие города и районы",
    links: [
      { label: "Северодвинск", href: "/severodvinsk/", published: true },
      { label: "Новодвинск", href: "/novodvinsk/", published: true },
      { label: "Приморский район", href: "/primorskiy-rayon/", published: true },
      { label: "Холмогорский район", href: "/holmogory/", published: true },
    ],
  },
  finalCta: {
    title: "Рассчитаем стоимость забора\nдля вашего участка в Архангельске",
  },
  sections: {
    fenceTypes: "Заборы, которые устанавливаем в Архангельске",
    pricing: "Цены на заборы под ключ в Архангельске",
    calculator: "Рассчитайте стоимость забора в Архангельске",
    works: "Наши работы в Архангельске и рядом",
    additionalServices: "Дополнительные услуги",
  },
};
