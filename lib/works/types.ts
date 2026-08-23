export type WorkFilterId =
  | "all"
  | "profnastil"
  | "metalloshtaketnik"
  | "3d"
  | "setka"
  | "setka-pvh"
  | "derevyannyy-shtaketnik";

export type WorkProject = {
  id: string;
  slug: string;
  title: string;
  city: string | null;
  location: string | null;
  fenceType: string;
  filterCategory: Exclude<WorkFilterId, "all">;
  length: number | null;
  height: number | null;
  /** Цвет покрытия, например «графит». */
  color: string | null;
  material: string | null;
  /** Зазор между планками, например «1 см». */
  gap: string | null;
  configuration: string | null;
  duration: string | null;
  /** Цена за п.м. — для расчётов и будущих страниц объектов. */
  price: number | null;
  /** Отображаемая цена, например «6 000 ₽/м» */
  priceLabel: string | null;
  /** Дополнительная строка к цене */
  priceNote: string | null;
  /** Подарок к заказу, например «калитка в подарок» */
  gift: string | null;
  images: string[];
  /** Alt для основного фото */
  imageAlt: string | null;
  /** CSS object-position для основного фото */
  imageObjectPosition?: string;
  description: string | null;
  /** Размер карточки на desktop-сетке главной. */
  layout: "featured" | "compact";
};

export type WorkFilter = {
  id: WorkFilterId;
  label: string;
};
