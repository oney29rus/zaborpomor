import { WORK_IMAGE_ALTS, WORK_IMAGES } from "@/lib/works/assets";
import { MONTAZH_IZ_MATERIALA_RANGE_LABEL } from "@/lib/services/mount-only";
import type { CityPageContent } from "@/lib/geo-pages/types";

export const HOLMOGORY_PAGE: CityPageContent = {
  slug: "holmogory",
  path: "/holmogory/",
  metadata: {
    title:
      "Заборы в Холмогорах под ключ — установка и цены | Заборы Поморья",
    description:
      "Установка заборов под ключ в Холмогорах и Холмогорском районе. Металлоштакетник, профнастил, 3D-сетка и сварная сетка, ворота и монтаж. Рассчитайте стоимость забора.",
  },
  breadcrumbs: [
    { label: "Главная", href: "/" },
    { label: "Холмогоры", href: "/holmogory/" },
  ],
  hero: {
    label: "ЗАБОРЫ В ХОЛМОГОРАХ",
    title: "Заборы под ключ\nв Холмогорах и Холмогорском районе",
    description:
      "Изготавливаем и устанавливаем заборы для частных домов, дач и участков в Холмогорах, деревнях и СНТ Холмогорского района.",
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
    image: WORK_IMAGES.holmogoryButy,
    imageAlt: WORK_IMAGE_ALTS.holmogoryButy,
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
    metalloshtaketnik: WORK_IMAGES.holmogoryButy,
    "3d-setka": WORK_IMAGES.threeDBerezka,
    "svarnaya-setka": WORK_IMAGES.setkaOcink,
    "svarnaya-setka-pvh": WORK_IMAGES.setkaPvh25,
    "derevyannyy-shtaketnik": WORK_IMAGES.derevyannyyZaostrovye,
  },
  workProjectSlugs: [
    "metalloshtaketnik-derevnya-buty",
    "metalloshtaketnik-derevnya-harlovo",
    "metalloshtaketnik-derevnya-demidovo",
    "metalloshtaketnik-derevnya-novinki-matigory",
  ],
  worksLayout: "two-by-two",
  process: {
    title: "Как заказать забор в Холмогорском районе",
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
    title: "Устанавливаем заборы в Холмогорах и по району",
    paragraphs: [
      "Работаем в Холмогорах и выезжаем на объекты по Холмогорскому району. Устанавливаем заборы для частных домов, дач и загородных участков.",
      "Среди реальных объектов компании — Буты, Харлово, Демидово и Новинки-Матигоры. Монтаж ведём своими бригадами, комплектацию согласуем до начала работ.",
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
          "На странице — фото и параметры реальных работ в деревнях Холмогорского района.",
      },
    ],
  },
  faq: {
    title: "Частые вопросы о заборах в Холмогорах",
    items: [
      {
        id: "cost",
        question: "Сколько стоит забор под ключ в Холмогорах?",
        answer:
          "Стоимость зависит от материала, длины, высоты и комплектации. Ориентир — от 2 400 ₽/м с материалом и монтажом. Точнее — в калькуляторе или после уточнения параметров участка.",
      },
      {
        id: "types",
        question: "Какие заборы устанавливаете?",
        answer:
          "Металлоштакетник, профнастил, 3D-сетку, сварную сетку с покрытием и без, деревянный штакетник. Подберём вариант под участок и бюджет.",
      },
      {
        id: "area",
        question: "Выезжаете ли по Холмогорскому району?",
        answer:
          "Да. Работаем в Холмогорах и выезжаем по Холмогорскому району — в том числе в Буты, Харлово, Демидово и Новинки-Матигоры, где уже выполняли объекты.",
      },
      {
        id: "install-only",
        question: "Можно заказать только монтаж?",
        answer: `Да. Если материал уже куплен, выполним установку. Стоимость работ — ${MONTAZH_IZ_MATERIALA_RANGE_LABEL} в зависимости от конструкции и условий на участке.`,
      },
      {
        id: "svai",
        question: "Можно поставить забор на винтовые сваи?",
        answer:
          "Да. Устанавливаем винтовые сваи под каркас — подходит, когда нужно надёжное основание без масштабной подготовки грунта.",
      },
      {
        id: "gates",
        question: "Устанавливаете ли ворота и калитки?",
        answer:
          "Да. Изготавливаем и монтируем распашные и откатные ворота, калитки — комплектацию подбираем вместе с забором.",
      },
      {
        id: "timeline",
        question: "Сколько занимает монтаж?",
        answer:
          "Зависит от длины, материала и комплектации. Небольшие объекты часто выполняем за 1–3 дня, более крупные — дольше. Срок согласовываем до начала работ.",
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
    title: "Другие города",
    links: [
      { label: "Архангельск", href: "/arhangelsk/", published: true },
      { label: "Северодвинск", href: "/severodvinsk/", published: true },
      { label: "Новодвинск", href: "/novodvinsk/", published: true },
    ],
  },
  finalCta: {
    title:
      "Рассчитаем стоимость забора\nдля вашего участка в Холмогорском районе",
  },
  sections: {
    fenceTypes: "Какие заборы устанавливаем в Холмогорском районе",
    pricing: "Цены на заборы под ключ в Холмогорах",
    calculator: "Рассчитайте стоимость забора в Холмогорах",
    works: "Наши работы в Холмогорском районе",
    additionalServices: "Дополнительные услуги в Холмогорском районе",
  },
};
