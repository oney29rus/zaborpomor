import { SERVICE_IMAGE_ALTS, SERVICE_IMAGES } from "./assets";
import type {
  AdditionalService,
  AdditionalServicesSectionContent,
} from "./types";
import {
  GATE_AUTOMATION_NICE_PRICE,
  KARKAS_PRICE_PER_METER,
  SCREW_PILE_PRICE_FROM,
  SLIDING_GATE_PRICE,
  SWING_GATES_PRICE,
  formatServicePrice,
  formatServicePricePerUnit,
} from "./prices";
import {
  MONTAZH_IZ_MATERIALA_HREF,
  MONTAZH_IZ_MATERIALA_PRICE_LABEL,
} from "./mount-only";

export const ADDITIONAL_SERVICES_SECTION: AdditionalServicesSectionContent = {
  label: "НЕ ТОЛЬКО ЗАБОРЫ",
  title: "Дополнительные услуги",
  description:
    "Можем выполнить как установку забора под ключ, так и отдельные этапы работ.",
};

export const ADDITIONAL_SERVICES: AdditionalService[] = [
  {
    id: "montazh-iz-materiala",
    slug: "montazh-zabora-iz-materiala-zakazchika",
    title: "Монтаж из вашего материала",
    priceLabel: MONTAZH_IZ_MATERIALA_PRICE_LABEL,
    shortDescription:
      "Материал уже куплен? Выполним установку забора из материала заказчика.",
    image: SERVICE_IMAGES.montazhIzMateriala,
    imageAlt: SERVICE_IMAGE_ALTS.montazhIzMateriala,
    href: MONTAZH_IZ_MATERIALA_HREF,
    published: true,
  },
  {
    id: "karkas-zabora",
    slug: "karkas-zabora",
    title: "Каркас забора",
    priceLabel: `от ${formatServicePricePerUnit(KARKAS_PRICE_PER_METER, "m")}`,
    shortDescription:
      "Металлические столбы и лаги — готовая основа под монтаж материала забора.",
    image: SERVICE_IMAGES.karkasZabora,
    imageAlt: SERVICE_IMAGE_ALTS.karkasZabora,
    href: "/uslugi/karkas-zabora/",
    published: true,
  },
  {
    id: "vintovye-svai",
    slug: "vintovye-svai",
    title: "Винтовые сваи под забор",
    priceLabel: `от ${formatServicePricePerUnit(SCREW_PILE_PRICE_FROM, "piece")}`,
    shortDescription:
      "Комплект сваи с установкой под каркас будущего забора.",
    image: SERVICE_IMAGES.vintovyeSvai,
    imageAlt: SERVICE_IMAGE_ALTS.vintovyeSvai,
    href: "/uslugi/vintovye-svai/",
    published: true,
  },
  {
    id: "raspashnye-vorota",
    slug: "raspashnye",
    title: "Распашные ворота",
    priceLabel: `от ${formatServicePrice(SWING_GATES_PRICE)}`,
    priceNote: "за ворота шириной 4 м",
    shortDescription:
      "Изготовим и установим распашные ворота для въезда на участок.",
    image: SERVICE_IMAGES.raspashnyeVorota,
    imageAlt: SERVICE_IMAGE_ALTS.raspashnyeVorota,
    href: "/vorota/raspashnye/",
    published: true,
  },
  {
    id: "otkatnye-vorota",
    slug: "otkatnye",
    title: "Откатные ворота",
    priceLabel: `от ${formatServicePrice(SLIDING_GATE_PRICE)}`,
    priceNote: "ворота шириной 4 м",
    shortDescription:
      "Изготовление и установка откатных ворот под ключ.",
    extraNote: `Автоматика Nice — +${formatServicePrice(GATE_AUTOMATION_NICE_PRICE)}`,
    image: SERVICE_IMAGES.otkatnyeVorota,
    imageAlt: SERVICE_IMAGE_ALTS.otkatnyeVorota,
    href: "/vorota/otkatnye/",
    published: true,
  },
];

export function getAdditionalServiceBySlug(
  slug: string,
): AdditionalService | undefined {
  return ADDITIONAL_SERVICES.find(
    (service) => service.slug === slug || service.id === slug,
  );
}

export function getAdditionalServiceById(
  id: AdditionalService["id"],
): AdditionalService | undefined {
  return ADDITIONAL_SERVICES.find((service) => service.id === id);
}
