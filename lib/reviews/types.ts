export type ReviewSource = "yandex" | "vk" | "other" | null;

export type Review = {
  id: string;
  isDemo: boolean;
  name: string | null;
  city: string | null;
  rating: number | null;
  text: string;
  fenceType: string | null;
  projectSlug: string | null;
  source: ReviewSource;
  sourceUrl: string | null;
  date: string | null;
};
