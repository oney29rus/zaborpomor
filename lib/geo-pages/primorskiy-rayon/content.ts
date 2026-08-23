import { WORK_IMAGE_ALTS, WORK_IMAGES } from "@/lib/works/assets";
import { MONTAZH_IZ_MATERIALA_RANGE_LABEL } from "@/lib/services/mount-only";
import type { CityPageContent } from "@/lib/geo-pages/types";

export const PRIMORSKIY_RAYON_PAGE: CityPageContent = {
  slug: "primorskiy-rayon",
  path: "/primorskiy-rayon/",
  metadata: {
    title:
      "Заборы в Приморском районе под ключ — цены и установка | Заборы Поморья",
    description:
      "Установка заборов под ключ в Приморском районе Архангельской области. Профнастил, металлоштакетник, 3D-сетка и сварная сетка, ворота и монтаж. Рассчитайте стоимость забора.",
  },
  breadcrumbs: [
    { label: "Главная", href: "/" },
    { label: "Приморский район", href: "/primorskiy-rayon/" },
  ],
  hero: {
    label: "ЗАБОРЫ В ПРИМОРСКОМ РАЙОНЕ",
    title: "Заборы под ключ\nв Приморском районе",
    description:
      "Изготавливаем и устанавливаем заборы для частных домов, дач и участков по Приморскому району Архангельской области.",
    priceLabel: "от 2 400 ₽/м",
    priceCaption: "материал + монтаж",
    primaryCtaLabel: "Рассчитать стоимость",
    primaryCtaHref: "#calculator",
    secondaryCtaLabel: "Посмотреть наши работы",
    secondaryCtaHref: "#works",
    benefits: [
      "Своё производство",
      "Гарантия 24 месяца",
      "Монтаж своими бригадами",
    ],
    image: WORK_IMAGES.primorskiyTripuzovo,
    imageAlt: WORK_IMAGE_ALTS.primorskiyTripuzovo,
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
    metalloshtaketnik: WORK_IMAGES.primorskiyIzhma,
    "3d-setka": WORK_IMAGES.primorskiyLaya,
    "svarnaya-setka": WORK_IMAGES.setkaOcink,
    "svarnaya-setka-pvh": WORK_IMAGES.setkaPvh25,
    "derevyannyy-shtaketnik": WORK_IMAGES.primorskiyTripuzovo,
  },
  workProjectSlugs: [
    "derevyannyy-shtaketnik-tripuzovo",
    "3d-setka-laya",
    "metalloshtaketnik-izhma",
    "metalloshtaketnik-emelyanovskaya",
  ],
  worksLayout: "two-by-two",
  process: {
    title: "Как заказать забор в Приморском районе",
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
    title: "Устанавливаем заборы по Приморскому району",
    paragraphs: [
      "Выезжаем на участки по Приморскому району Архангельской области. Устанавливаем заборы для частных домов, дач и загородных участков.",
      "Среди реальных объектов — Трипузово, Лая, Ижма и Емельяновская. Монтаж ведём своими бригадами, комплектацию согласуем до начала работ.",
    ],
  },
  whyUs: {
    title: "Почему «Заборы Поморья»",
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
        title: "Цена до начала работ",
        description:
          "Сначала согласовываем параметры и стоимость, затем приступаем к выполнению заказа.",
      },
      {
        title: "Гарантия 24 месяца",
        description:
          "На выполненные работы предоставляем гарантию 24 месяца.",
      },
      {
        title: "Реальные выполненные объекты",
        description:
          "На странице — фото и параметры реальных работ в населённых пунктах Приморского района.",
      },
    ],
  },
  faq: {
    title: "Частые вопросы о заборах в Приморском районе",
    items: [
      {
        id: "cost",
        question: "Сколько стоит забор под ключ в Приморском районе?",
        answer:
          "Зависит от материала, длины, высоты, ворот и условий участка. Ориентир — от 2 400 ₽/м с материалом и монтажом. Точнее — в калькуляторе или после уточнения параметров.",
      },
      {
        id: "types",
        question: "Какие заборы устанавливаете?",
        answer:
          "Профнастил, металлоштакетник, 3D-сетку, сварную сетку с покрытием и без, деревянный штакетник. Подберём вариант под задачи участка и бюджет.",
      },
      {
        id: "area",
        question: "Выезжаете ли в деревни и СНТ Приморского района?",
        answer:
          "Да. Работаем по Приморскому району — в том числе в Трипузово, Лая, Ижма и Емельяновская, где уже выполняли объекты.",
      },
      {
        id: "install-only",
        question: "Можно заказать только монтаж?",
        answer: `Да. Если материал уже куплен, выполним установку. Стоимость работ — ${MONTAZH_IZ_MATERIALA_RANGE_LABEL} в зависимости от конструкции и условий на участке.`,
      },
      {
        id: "svai",
        question: "Можно установить забор на винтовые сваи?",
        answer:
          "Да. Устанавливаем винтовые сваи под каркас — удобно, когда нужно надёжное основание без масштабной подготовки участка.",
      },
      {
        id: "gates",
        question: "Делаете ли ворота и калитки?",
        answer:
          "Да. Изготавливаем и монтируем распашные и откатные ворота, калитки — комплектацию подбираем вместе с забором.",
      },
      {
        id: "timeline",
        question: "Сколько занимает монтаж?",
        answer:
          "Срок зависит от длины, материала и комплектации. Небольшие объекты часто выполняем за 1–2 дня. Точный срок согласовываем до начала работ.",
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
      { label: "Архангельск", href: "/arhangelsk/", published: true },
      { label: "Северодвинск", href: "/severodvinsk/", published: true },
      { label: "Новодвинск", href: "/novodvinsk/", published: true },
      { label: "Холмогоры", href: "/holmogory/", published: true },
    ],
  },
  finalCta: {
    title:
      "Рассчитаем стоимость забора\nдля вашего участка в Приморском районе",
  },
  sections: {
    fenceTypes: "Какие заборы устанавливаем в Приморском районе",
    pricing: "Цены на заборы под ключ в Приморском районе",
    calculator: "Рассчитайте стоимость забора в Приморском районе",
    works: "Наши работы в Приморском районе",
    additionalServices: "Дополнительные услуги в Приморском районе",
  },
};
