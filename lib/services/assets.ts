/** Пути к фотографиям услуг в /public/images/projects/ */
export const SERVICE_IMAGES = {
  montazhIzMateriala: "/images/projects/montaj.png",
  montazhIzMaterialaHero: "/images/projects/montaj.png",
  karkasZabora: "/images/projects/karkas.png",
  vintovyeSvai: "/images/projects/venti.png",
  raspashnyeVorota: "/images/projects/rasp-vorota.jpg",
  otkatnyeVorota: "/images/projects/otk-vorota.png",
} as const;

export const SERVICE_IMAGE_ALTS = {
  montazhIzMateriala: "Монтаж забора из материала заказчика",
  montazhIzMaterialaHero: "Монтаж забора из материала заказчика",
  karkasZabora: "Металлический каркас забора",
  vintovyeSvai: "Установка винтовых свай под забор",
  raspashnyeVorota: "Распашные ворота для забора",
  otkatnyeVorota: "Откатные ворота для забора",
} as const;

/** Индивидуальный кадр для карточек доп. услуг (object-position). */
export const SERVICE_CARD_IMAGE_OBJECT_POSITION: Partial<
  Record<(typeof SERVICE_IMAGES)[keyof typeof SERVICE_IMAGES], string>
> = {
  "/images/projects/montaj.png": "50% 40%",
  "/images/projects/karkas.png": "50% 45%",
  "/images/projects/venti.png": "50% 50%",
  "/images/projects/rasp-vorota.jpg": "50% 45%",
  "/images/projects/otk-vorota.png": "50% 45%",
};
