import type { CalculatorParams } from "@/lib/calculator/types";
import type { FaqItem } from "@/lib/faq/types";
import type {
  FencePageBreadcrumb,
  FencePageGates,
  FencePageHero,
  FencePageProcessStep,
  FencePageWhyPoint,
} from "@/lib/fence-pages/types";

export type CityPageContent = {
  slug: string;
  path: string;
  metadata: {
    title: string;
    description: string;
  };
  breadcrumbs: FencePageBreadcrumb[];
  hero: FencePageHero;
  fenceTypeSlugs: string[];
  fenceImages: Record<string, string>;
  workProjectSlugs: string[];
  process: {
    title: string;
    steps: FencePageProcessStep[];
  };
  geography: {
    title: string;
    paragraphs: string[];
  };
  whyUs: {
    title: string;
    points: FencePageWhyPoint[];
  };
  faq: {
    title: string;
    items: FaqItem[];
  };
  otherCities: {
    title: string;
    links: {
      label: string;
      href: string;
      published: boolean;
    }[];
  };
  finalCta: {
    title: string;
  };
  sections: {
    fenceTypes: string;
    pricing: string;
    calculator: string;
    works: string;
    additionalServices: string;
  };
  worksLayout?: "default" | "three-two" | "two-by-two";
  calculatorInitialParams?: Partial<CalculatorParams>;
  gates?: FencePageGates;
  pricingDisclaimer?: string;
  worksAllWorksHref?: string;
  turnkeyIncludes?: {
    title: string;
    items: readonly string[];
    note: string;
  };
  climate?: {
    title: string;
    points: readonly {
      title: string;
      description: string;
    }[];
    footer: string;
    link?: {
      href: string;
      label: string;
    };
  };
  localServiceLinks?: {
    title: string;
    links: readonly {
      label: string;
      href: string;
      description: string;
    }[];
  };
};
