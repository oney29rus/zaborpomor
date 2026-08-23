import { WORK_IMAGE_ALTS, WORK_IMAGES } from "@/lib/works/assets";

export type FenceHeroMedia = {
  image: string;
  imageAlt: string;
  /** Совпадает с hero.imageObjectPosition на странице вида забора. */
  imageObjectPosition?: string;
};

/**
 * Hero-фото видов заборов — те же пути, что на страницах видов в lib/fence-pages.
 * Единый источник для каталога на главной и других карточек.
 */
export const FENCE_HERO_MEDIA: Record<string, FenceHeroMedia> = {
  profnastil: {
    image: WORK_IMAGES.profnastilShirsha,
    imageAlt: WORK_IMAGE_ALTS.profnastilShirsha,
    imageObjectPosition: "42% 55%",
  },
  metalloshtaketnik: {
    image: WORK_IMAGES.metallSvyazist,
    imageAlt: WORK_IMAGE_ALTS.metallSvyazist,
    imageObjectPosition: "50% 45%",
  },
  "3d-setka": {
    image: WORK_IMAGES.threeDKatuninec,
    imageAlt: WORK_IMAGE_ALTS.threeDKatuninec,
    imageObjectPosition: "50% 45%",
  },
  "svarnaya-setka": {
    image: WORK_IMAGES.setkaOcink,
    imageAlt: WORK_IMAGE_ALTS.setkaOcink,
    imageObjectPosition: "50% 45%",
  },
  "svarnaya-setka-pvh": {
    image: WORK_IMAGES.setkaPvh25,
    imageAlt: WORK_IMAGE_ALTS.setkaPvh25,
    imageObjectPosition: "62% 42%",
  },
  "derevyannyy-shtaketnik": {
    image: WORK_IMAGES.derevyannyyZaostrovye,
    imageAlt: "Деревянный штакетник в Заостровье — Заборы Поморья",
    imageObjectPosition: "58% 45%",
  },
};

export function getFenceHeroMedia(slug: string): FenceHeroMedia | undefined {
  return FENCE_HERO_MEDIA[slug];
}
