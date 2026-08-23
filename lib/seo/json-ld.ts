import { PHONE, SITE_URL } from "@/lib/constants";
import type { FaqItem } from "@/lib/faq/types";

export type BreadcrumbJsonLdItem = {
  name: string;
  path: string;
};

export function buildBreadcrumbJsonLd(items: BreadcrumbJsonLdItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Заборы Поморья",
    url: SITE_URL,
    telephone: PHONE,
    areaServed: [
      "Архангельск",
      "Северодвинск",
      "Новодвинск",
      "Холмогорский район",
      "Приморский район",
    ],
  };
}

export function buildServiceJsonLd(options: {
  name: string;
  description: string;
  areaServed?: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: options.name,
    description: options.description,
    url: `${SITE_URL}${options.url}`,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "Заборы Поморья",
      url: SITE_URL,
      telephone: PHONE,
    },
    ...(options.areaServed
      ? {
          areaServed: options.areaServed,
        }
      : {}),
  };
}

export function buildFaqPageJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answerLink
          ? `${item.answer}${item.answerLink.label}${item.answerLink.after ?? ""}`
          : item.answer,
      },
    })),
  };
}
