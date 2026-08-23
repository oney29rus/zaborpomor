import {
  CUSTOM_MATERIAL_INSTALL_FROM,
  MONTAZH_IZ_MATERIALA_HREF,
  MONTAZH_IZ_MATERIALA_RANGE_LABEL,
} from "@/lib/services/mount-only";

export const CITY_MOUNT_ONLY_PROMO = {
  label: "МАТЕРИАЛ УЖЕ ЕСТЬ?",
  title: "Установим забор из вашего материала",
  description:
    "Если материал уже куплен, можем выполнить только монтаж. Стоимость работ зависит от типа забора, комплектации и условий участка.",
  priceLabel: `от ${CUSTOM_MATERIAL_INSTALL_FROM.toLocaleString("ru-RU")} ₽/м`,
  priceCaption: `обычно ${MONTAZH_IZ_MATERIALA_RANGE_LABEL}`,
  ctaLabel: "Подробнее об установке →",
  ctaHref: MONTAZH_IZ_MATERIALA_HREF,
} as const;
