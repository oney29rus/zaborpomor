import type { Review } from "./types";

export const REVIEWS_ALL_HREF = "/otzyvy/";

/** DEMO-отзывы — заменить реальными данными перед публикацией. */
export const REVIEWS: Review[] = [
  {
    id: "demo-1",
    isDemo: true,
    name: "[Имя клиента]",
    city: "[Город]",
    rating: null,
    text: "[DEMO — здесь будет реальный отзыв клиента]",
    fenceType: "[Тип забора]",
    projectSlug: null,
    source: null,
    sourceUrl: null,
    date: null,
  },
  {
    id: "demo-2",
    isDemo: true,
    name: "[Имя клиента]",
    city: "[Город]",
    rating: null,
    text: "[DEMO — здесь будет реальный отзыв клиента]",
    fenceType: "[Тип забора]",
    projectSlug: null,
    source: null,
    sourceUrl: null,
    date: null,
  },
  {
    id: "demo-3",
    isDemo: true,
    name: "[Имя клиента]",
    city: "[Город]",
    rating: null,
    text: "[DEMO — здесь будет реальный отзыв клиента]",
    fenceType: "[Тип забора]",
    projectSlug: null,
    source: null,
    sourceUrl: null,
    date: null,
  },
];

export function getPublishedReviews(): Review[] {
  return REVIEWS;
}
