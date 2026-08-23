export type AdditionalServiceId =
  | "montazh-iz-materiala"
  | "karkas-zabora"
  | "vintovye-svai"
  | "raspashnye-vorota"
  | "otkatnye-vorota";

export type AdditionalService = {
  id: AdditionalServiceId;
  slug: string;
  title: string;
  /** Готовая строка цены для UI */
  priceLabel: string;
  priceNote?: string;
  /** Краткое описание для карточки на главной */
  shortDescription: string;
  /** Дополнительная строка на карточке (например, автоматика) */
  extraNote?: string;
  image: string;
  imageAlt: string;
  href: string;
  published: boolean;
};

export type AdditionalServicesSectionContent = {
  label: string;
  title: string;
  description: string;
};
