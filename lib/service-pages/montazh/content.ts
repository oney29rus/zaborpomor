import { HERO_BENEFITS } from "@/lib/constants";
import { SERVICE_PAGE_GEO } from "@/lib/service-pages/shared-geo";
import type { ServicePageContent } from "@/lib/service-pages/types";
import {
  CUSTOM_MATERIAL_INSTALL_FROM,
  MONTAZH_IZ_MATERIALA_HREF,
  MONTAZH_IZ_MATERIALA_PRICE_LABEL,
  MONTAZH_IZ_MATERIALA_RANGE_LABEL,
  SERVICE_IMAGE_ALTS,
  SERVICE_IMAGES,
  formatServicePricePerUnit,
} from "@/lib/services";

const CANONICAL_PATH = MONTAZH_IZ_MATERIALA_HREF;

export type MontazhPageComparisonOption = {
  title: string;
  subtitle: string;
  priceLabel?: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
};

export type MontazhPageContent = ServicePageContent & {
  requirements: {
    title: string;
    items: string[];
    note: string;
  };
  mountComparison: {
    title: string;
    options: MontazhPageComparisonOption[];
  };
  variantsIntro?: string;
};

export const MONTAZH_ZABORA_PAGE: MontazhPageContent = {
  slug: "montazh-zabora-iz-materiala-zakazchika",
  seo: {
    title:
      "Установка забора из материала заказчика в Архангельске — от 800 ₽/м | Заборы Поморья",
    description:
      `Установка забора из вашего материала в Архангельске и области. Монтаж профнастила, штакетника и сетки. Стоимость работ — ${MONTAZH_IZ_MATERIALA_PRICE_LABEL}.`,
    canonicalPath: CANONICAL_PATH,
  },
  breadcrumbs: [
    { label: "Главная", href: "/" },
    { label: "Услуги", href: "/#additional-services" },
    {
      label: "Монтаж из материала заказчика",
      href: CANONICAL_PATH,
    },
  ],
  hero: {
    label: "МОНТАЖ ЗАБОРА",
    title: "Установка забора из вашего материала в Архангельске",
    description:
      "Материал уже куплен? Выполним монтаж забора из материала заказчика. Вы покупаете материал самостоятельно — мы приезжаем на участок и выполняем установку.",
    priceLabel: MONTAZH_IZ_MATERIALA_PRICE_LABEL,
    priceCaption: `Стоимость монтажа — ${MONTAZH_IZ_MATERIALA_RANGE_LABEL} в зависимости от типа забора и сложности работ.`,
    primaryCtaLabel: "Рассчитать стоимость монтажа",
    primaryCtaHref: "#request",
    secondaryCtaLabel: "Посмотреть работы",
    secondaryCtaHref: "#montazh-zabora-iz-materiala-zakazchika-works",
    benefits: HERO_BENEFITS,
    image: SERVICE_IMAGES.montazhIzMaterialaHero,
    imageAlt: SERVICE_IMAGE_ALTS.montazhIzMaterialaHero,
  },
  pricing: {
    title: "Стоимость монтажа",
    description:
      `Ориентировочная стоимость работ — ${MONTAZH_IZ_MATERIALA_RANGE_LABEL}. Точная цена зависит от типа забора и условий на участке.`,
    rows: [
      {
        label: "Монтаж из материала заказчика",
        value: `от ${formatServicePricePerUnit(CUSTOM_MATERIAL_INSTALL_FROM, "m")}`,
      },
      {
        label: "Фактический диапазон",
        value: `${MONTAZH_IZ_MATERIALA_RANGE_LABEL}`,
      },
    ],
    disclaimer:
      "Фактическая стоимость определяется после уточнения типа забора, комплектации и условий монтажа. Не каждый забор можно установить по минимальной цене.",
    ctaLabel: "Рассчитать стоимость монтажа",
    ctaHref: "#request",
  },
  includes: {
    title: "Что входит в монтаж",
    steps: [],
    listItems: [
      "выезд бригады на участок",
      "монтаж забора из материала заказчика",
      "крепление и установка по уровню",
      "проверка готового ограждения",
    ],
  },
  variants: {
    title: "Установим забор из вашего материала",
    items: [
      {
        title: "Профнастил",
        description: "Монтаж забора из профлиста на подготовленный каркас.",
      },
      {
        title: "Металлоштакетник",
        description: "Установка металлического штакетника из вашего комплекта.",
      },
      {
        title: "Деревянный штакетник",
        description: "Монтаж деревянных планок на металлическую основу.",
      },
      {
        title: "3D-сетка",
        description: "Установка секций 3D-сетки из материала заказчика.",
      },
      {
        title: "Сварная сетка",
        description: "Монтаж сварной сетки на подготовленные опоры.",
      },
      {
        title: "Сварная сетка ПВХ",
        description: "Установка сетки с ПВХ-покрытием из вашего комплекта.",
      },
    ],
  },
  variantsIntro: `Основная цена услуги — ${MONTAZH_IZ_MATERIALA_RANGE_LABEL}. Фактическая стоимость определяется после уточнения типа забора, комплектации и условий монтажа.`,
  process: {
    title: "Как заказать только монтаж",
    steps: [
      {
        step: "01",
        title: "Заявка",
        description:
          "Вы сообщаете длину забора, тип материала и где находится участок.",
      },
      {
        step: "02",
        title: "Проверяем комплектацию",
        description:
          "Уточняем, какие материалы уже куплены и всё ли необходимое есть для монтажа.",
      },
      {
        step: "03",
        title: "Расчёт",
        description: "Рассчитываем стоимость монтажных работ.",
      },
      {
        step: "04",
        title: "Монтаж",
        description: "Бригада приезжает на участок и устанавливает забор.",
      },
      {
        step: "05",
        title: "Готовый забор",
        description: "Принимаете выполненную работу.",
      },
    ],
  },
  requirements: {
    title: "Что нужно для точного расчёта",
    items: [
      "длина забора",
      "высота",
      "тип материала",
      "фотографии участка",
      "какие столбы, лаги, крепёж и другие комплектующие уже куплены",
      "нужны ли ворота и калитка",
    ],
    note: "Если вы не уверены, хватает ли купленного материала, расскажите, что уже есть. Мы проверим комплектацию перед началом работ.",
  },
  mountComparison: {
    title: "Материал ваш или наш — выбирайте удобный вариант",
    options: [
      {
        title: "ТОЛЬКО МОНТАЖ",
        subtitle: "Материал заказчика",
        priceLabel: MONTAZH_IZ_MATERIALA_PRICE_LABEL,
        description:
          "Вы самостоятельно приобретаете материал, а мы выполняем монтаж.",
        ctaLabel: "Рассчитать монтаж",
        ctaHref: "#request",
      },
      {
        title: "ЗАБОР ПОД КЛЮЧ",
        subtitle: "Материал + монтаж",
        description:
          "Мы сами комплектуем объект материалами и выполняем установку.",
        ctaLabel: "Рассчитать забор под ключ",
        ctaHref: "/#calculator",
      },
    ],
  },
  works: {
    title: "Наши работы",
  },
  faq: {
    title: "Частые вопросы о монтаже из вашего материала",
    items: [
      {
        id: "mount-only",
        question: "Можно заказать только монтаж забора из моего материала?",
        answer:
          `Да. Если материал уже куплен, можем выполнить только монтаж. Стоимость работ — ${MONTAZH_IZ_MATERIALA_RANGE_LABEL} в зависимости от типа забора, комплектации и условий на участе.`,
      },
      {
        id: "mount-price",
        question: "От чего зависит стоимость монтажа?",
        answer:
          "На стоимость влияют тип забора, длина и высота, комплектация, сложность участка, а также наличие ворот и калитки. Точную цену рассчитываем после уточнения параметров.",
      },
      {
        id: "mount-posts",
        question: "Можно использовать уже купленные столбы и лаги?",
        answer:
          "Да, если комплектация подходит для монтажа. Перед началом работ проверим, что материала достаточно и он соответствует конструкции забора.",
      },
      {
        id: "mount-enough",
        question: "Что делать, если я не знаю, хватает ли материала?",
        answer:
          "Расскажите, что уже куплено, и при необходимости пришлите фото участка. Проверим комплектацию перед началом работ и подскажем, чего не хватает.",
      },
      {
        id: "mount-gates",
        question: "Можно заказать монтаж ворот и калитки?",
        answer:
          "Да, можем выполнить монтаж ворот и калитки из вашего материала. Стоимость уточняется отдельно после согласования комплектации.",
      },
    ],
  },
  relatedLinks: {
    title: "Заборы под ключ",
    links: [
      { label: "Профнастил", href: "/zabory/profnastil/" },
      { label: "Металлоштакетник", href: "/zabory/metalloshtaketnik/" },
      { label: "Деревянный штакетник", href: "/zabory/derevyannyy-shtaketnik/" },
      { label: "Каркас забора", href: "/uslugi/karkas-zabora/" },
    ],
  },
  geo: SERVICE_PAGE_GEO,
  cta: {
    label: "Рассчитаем монтаж",
    title: "Рассчитаем стоимость монтажа\nиз вашего материала",
    description:
      "Оставьте номер телефона — уточним тип забора, комплектацию и условия участка и рассчитаем стоимость работ.",
  },
};
