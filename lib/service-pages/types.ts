import type { FaqItem } from "@/lib/faq/types";
import type {
  FencePageBreadcrumb,
  FencePageCta,
  FencePageFaq,
  FencePageGeo,
  FencePageHero,
  FencePageIncludes,
  FencePagePricing,
  FencePageProcess,
  FencePageRelatedLink,
  FencePageSpec,
  FencePageVariant,
  FencePageWhyPoint,
} from "@/lib/fence-pages/types";

export type ServicePageAutomation = {
  title: string;
  description: string;
  baseLabel: string;
  basePriceLabel: string;
  addonLabel: string;
  addonPriceLabel: string;
};

export type ServicePageSeo = {
  title: string;
  description: string;
  canonicalPath: string;
};

export type ServicePageContent = {
  slug: string;
  seo: ServicePageSeo;
  breadcrumbs: FencePageBreadcrumb[];
  hero: FencePageHero;
  specs?: FencePageSpec[];
  pricing: FencePagePricing;
  includes: FencePageIncludes;
  variants?: {
    title: string;
    items: FencePageVariant[];
  };
  features?: {
    title: string;
    points: FencePageWhyPoint[];
  };
  automation?: ServicePageAutomation;
  works: {
    title: string;
    projectSlugs?: string[];
  };
  process: FencePageProcess;
  faq: FencePageFaq;
  relatedLinks?: {
    title: string;
    links: FencePageRelatedLink[];
  };
  geo: FencePageGeo;
  cta: FencePageCta;
};

export type { FaqItem };
