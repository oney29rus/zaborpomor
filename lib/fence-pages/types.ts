import type { FaqItem } from "@/lib/faq/types";
import type { CalculatorParams, FenceTypeId } from "@/lib/calculator/types";
import type { WorkFilterId } from "@/lib/works/types";

export type FencePageBreadcrumb = {
  label: string;
  href: string;
};

export type FencePageSpec = {
  label: string;
  value: string;
};

export type FencePagePriceRow = {
  label: string;
  value: string;
};

export type FencePageIncludeGroup = {
  title: string;
  items: string[];
};

export type FencePageVariant = {
  title: string;
  description: string;
  priceNote?: string;
  image?: string;
  imageAlt?: string;
  imageObjectPosition?: string;
};

export type FencePageGateOption = {
  title: string;
  description: string;
  priceNote?: string;
  href?: string;
  /** false — страница ещё не опубликована */
  published?: boolean;
};

export type FencePageProcessStep = {
  step: string;
  title: string;
  description?: string;
};

export type FencePageWhyPoint = {
  title: string;
  description: string;
};

export type FencePageGeoLink = {
  label: string;
  href: string;
  published: boolean;
};

export type FencePageRelatedLink = {
  label: string;
  href: string;
};

export type FencePageHero = {
  label: string;
  title: string;
  description: string;
  priceLabel: string;
  priceCaption: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  benefits: readonly string[];
  image: string | null;
  imageAlt: string;
  /** Путь к фото в /public — подпись placeholder, если файл ещё не загружен */
  imageSourcePath?: string;
  /** CSS object-position для hero-фото */
  imageObjectPosition?: string;
};

export type FencePagePriceIncludes = {
  title: string;
  items: string[];
  note: string;
};

export type FencePagePricing = {
  title: string;
  description: string;
  rows: FencePagePriceRow[];
  disclaimer: string;
  ctaLabel: string;
  ctaHref: string;
  priceIncludes?: FencePagePriceIncludes;
};

export type FencePageIncludeStep = {
  step: string;
  title: string;
  detail?: string;
};

export type FencePageIncludes = {
  title: string;
  intro?: string;
  steps: FencePageIncludeStep[];
  /** Маркированный список вместо нумерованных шагов */
  listItems?: string[];
  note?: string;
};

export type FencePageComparisonOption = {
  title: string;
  points: string[];
};

export type FencePageComparison = {
  title: string;
  options: FencePageComparisonOption[];
};

export type FencePageVariants = {
  title: string;
  items: FencePageVariant[];
};

export type FencePageWorks = {
  title: string;
  filterCategory: WorkFilterId;
  /** Показать только указанные объекты (в заданном порядке) */
  projectSlugs?: string[];
  allWorksHref: string;
  allWorksPublished: boolean;
};

export type FencePageGates = {
  title: string;
  intro?: string;
  items: FencePageGateOption[];
};

export type FencePageProcess = {
  title: string;
  steps: FencePageProcessStep[];
};

export type FencePageWhyUs = {
  title: string;
  points: FencePageWhyPoint[];
};

export type FencePageFaq = {
  title: string;
  items: FaqItem[];
};

export type FencePageGeo = {
  title: string;
  paragraphs: string[];
  cityLinks: FencePageGeoLink[];
  areaMentions: readonly string[];
  /** Фраза для блока перелинковки, например «заборы из металлоштакетника» */
  servicePhrase?: string;
};

export type FencePageRelatedFences = {
  title: string;
  links: FencePageRelatedLink[];
};

export type FencePageCta = {
  label: string;
  title: string;
  description: string;
};

export type FencePageCalculator = {
  label: string;
  title: string;
  description: string;
  initialParams?: Partial<CalculatorParams>;
};

export type FencePageSeo = {
  title: string;
  description: string;
  canonicalPath: string;
};

export type FencePageContent = {
  slug: string;
  fenceTypeId: FenceTypeId;
  seo: FencePageSeo;
  breadcrumbs: FencePageBreadcrumb[];
  hero: FencePageHero;
  specs: FencePageSpec[];
  pricing: FencePagePricing;
  includes: FencePageIncludes;
  calculator: FencePageCalculator;
  variants: FencePageVariants;
  /** Сравнение вариантов материала, например обычная сетка vs ПВХ */
  comparison?: FencePageComparison;
  works: FencePageWorks;
  /** Преимущества материала — отдельно от блока о компании */
  features?: FencePageWhyUs;
  gates: FencePageGates;
  process: FencePageProcess;
  whyUs: FencePageWhyUs;
  faq: FencePageFaq;
  geo: FencePageGeo;
  relatedFences?: FencePageRelatedFences;
  cta: FencePageCta;
};
