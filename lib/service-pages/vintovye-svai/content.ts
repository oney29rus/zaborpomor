import { HERO_BENEFITS } from "@/lib/constants";
import { SERVICE_PAGE_GEO } from "@/lib/service-pages/shared-geo";
import type { ServicePageContent } from "@/lib/service-pages/types";
import {
  SCREW_PILE_57_PRICE,
  SCREW_PILE_76_PRICE,
  SCREW_PILE_PRICE_FROM,
  SERVICE_IMAGE_ALTS,
  SERVICE_IMAGES,
  formatServicePricePerUnit,
} from "@/lib/services";

const CANONICAL_PATH = "/uslugi/vintovye-svai/";

export const VINTOVYE_SVAI_PAGE: ServicePageContent = {
  slug: "vintovye-svai",
  seo: {
    title:
      "Винтовые сваи под забор в Архангельске — установка | Заборы Поморья",
    description:
      "Установка винтовых свай под забор в Архангельске и области. Диаметр 57 или 76 мм, длина 2–3 м — от 5 000 ₽/шт. с материалом и работой.",
    canonicalPath: CANONICAL_PATH,
  },
  breadcrumbs: [
    { label: "Главная", href: "/" },
    { label: "Услуги", href: "/#additional-services" },
    { label: "Винтовые сваи", href: CANONICAL_PATH },
  ],
  hero: {
    label: "ВИНТОВЫЕ СВАИ",
    title: "Винтовые сваи под забор\nв Архангельске",
    description:
      "Установим винтовые сваи под каркас будущего забора. Комплект с материалом и работой — от 5 000 ₽ за одну сваю.",
    priceLabel: `от ${formatServicePricePerUnit(SCREW_PILE_PRICE_FROM, "piece")}`,
    priceCaption: "материал и установка одной сваи",
    primaryCtaLabel: "Рассчитать сваи для забора",
    primaryCtaHref: "#request",
    secondaryCtaLabel: "Посмотреть работы",
    secondaryCtaHref: "#vintovye-svai-works",
    benefits: HERO_BENEFITS,
    image: SERVICE_IMAGES.vintovyeSvai,
    imageAlt: SERVICE_IMAGE_ALTS.vintovyeSvai,
  },
  specs: [
    { label: "Диаметр", value: "57 или 76 мм" },
    { label: "Длина", value: "от 2 до 3 м" },
    { label: "Оголовок", value: "усиленный" },
    { label: "Заполнение", value: "ЦПС" },
    { label: "Монтаж", value: "закручивание на участке" },
  ],
  pricing: {
    title: "Цена на винтовые сваи",
    description:
      "Стоимость одной установленной сваи с материалом и работой. Цена зависит от диаметра и длины.",
    rows: [
      {
        label: "Винтовая свая Ø57 мм",
        value: formatServicePricePerUnit(SCREW_PILE_57_PRICE, "piece"),
      },
      {
        label: "Винтовая свая Ø76 мм",
        value: formatServicePricePerUnit(SCREW_PILE_76_PRICE, "piece"),
      },
    ],
    disclaimer:
      "Цена зависит от диаметра, длины сваи и количества. Точную стоимость рассчитаем после уточнения параметров участка.",
    ctaLabel: "Рассчитать сваи для забора",
    ctaHref: "#request",
    priceIncludes: {
      title: "В стоимость одной установленной сваи входит",
      items: [
        "винтовая свая",
        "ЦПС для заполнения сваи",
        "усиленный оголовок",
        "работа по закручиванию сваи",
      ],
      note: "Указанная цена включает материал и работу, а не только монтаж.",
    },
  },
  includes: {
    title: "Что входит в установку сваи",
    steps: [],
    listItems: [
      "винтовая свая",
      "ЦПС для заполнения сваи",
      "усиленный оголовок",
      "работа по закручиванию сваи",
    ],
  },
  features: {
    title: "Когда стоит выбрать винтовые сваи",
    points: [
      {
        title: "Сложный грунт",
        description:
          "Сваи можно установить там, где затруднён классический фундамент под столбы.",
      },
      {
        title: "Перепады участка",
        description:
          "Помогают выровнять основание под каркас на участке с перепадами высот.",
      },
      {
        title: "Прочное основание",
        description:
          "Дают устойчивую опору для каркаса забора на выбранной глубине.",
      },
      {
        title: "Каркас на сваях",
        description:
          "Подходят для установки металлического каркаса забора на винтовых опорах.",
      },
    ],
  },
  works: {
    title: "Наши работы",
  },
  process: {
    title: "Как устанавливаем винтовые сваи",
    steps: [
      { step: "01", title: "Расчёт количества и параметров" },
      { step: "02", title: "Разметка на участке" },
      { step: "03", title: "Закручивание свай" },
      { step: "04", title: "Монтаж оголовков" },
      { step: "05", title: "Готовое основание под каркас" },
    ],
  },
  faq: {
    title: "Частые вопросы о винтовых сваях",
    items: [
      {
        id: "svai-price",
        question: "Сколько стоит одна винтовая свая?",
        answer: `Ориентировочная цена — от ${formatServicePricePerUnit(SCREW_PILE_PRICE_FROM, "piece")} с материалом и установкой. Ø57 мм — ${formatServicePricePerUnit(SCREW_PILE_57_PRICE, "piece")}, Ø76 мм — ${formatServicePricePerUnit(SCREW_PILE_76_PRICE, "piece")}.`,
      },
      {
        id: "svai-diameter",
        question: "Какой диаметр сваи используете?",
        answer: "Устанавливаем винтовые сваи диаметром 57 или 76 мм.",
      },
      {
        id: "svai-length",
        question: "Какая длина сваи доступна?",
        answer: "Длина сваи — от 2 до 3 метров, подбираем под условия участка.",
      },
      {
        id: "svai-includes",
        question: "Что входит в стоимость?",
        answer:
          "В цену входят свая, ЦПС для заполнения, усиленный оголовок и работа по закручиванию — не только монтаж без материала.",
      },
    ],
  },
  relatedLinks: {
    title: "Связанные услуги",
    links: [
      { label: "Каркас забора", href: "/uslugi/karkas-zabora/" },
      { label: "Профнастил", href: "/zabory/profnastil/" },
      { label: "Металлоштакетник", href: "/zabory/metalloshtaketnik/" },
    ],
  },
  geo: SERVICE_PAGE_GEO,
  cta: {
    label: "Рассчитаем сваи",
    title: "Рассчитаем винтовые сваи\nдля вашего участка",
    description:
      "Оставьте номер телефона — уточним количество, диаметр и длину свай и рассчитаем стоимость.",
  },
};
