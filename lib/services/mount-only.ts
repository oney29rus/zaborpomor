/** Монтаж забора из материала заказчика — минимальная цена за п.м. */
export const CUSTOM_MATERIAL_INSTALL_FROM = 800;

/** Монтаж забора из материала заказчика — верхняя граница диапазона за п.м. */
export const CUSTOM_MATERIAL_INSTALL_TO = 1_500;

export const MONTAZH_IZ_MATERIALA_HREF =
  "/uslugi/montazh-zabora-iz-materiala-zakazchika/";

export const MONTAZH_IZ_MATERIALA_PRICE_LABEL = `от ${CUSTOM_MATERIAL_INSTALL_FROM.toLocaleString("ru-RU")} ₽/м`;

export const MONTAZH_IZ_MATERIALA_RANGE_LABEL = `${CUSTOM_MATERIAL_INSTALL_FROM.toLocaleString("ru-RU")}–${CUSTOM_MATERIAL_INSTALL_TO.toLocaleString("ru-RU")} ₽/м`;
