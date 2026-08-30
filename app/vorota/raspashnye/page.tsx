import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServicePageView } from "@/components/service-pages/ServicePageView";
import { RASPASHNYE_VOROTA_PAGE } from "@/lib/service-pages/raspashnye/content";
import { buildServiceJsonLd } from "@/lib/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: RASPASHNYE_VOROTA_PAGE.seo.title,
  description: RASPASHNYE_VOROTA_PAGE.seo.description,
  path: RASPASHNYE_VOROTA_PAGE.seo.canonicalPath,
});

const serviceJsonLd = buildServiceJsonLd({
  name: "Распашные ворота в Архангельске",
  description: RASPASHNYE_VOROTA_PAGE.seo.description,
  areaServed: "Архангельск",
  url: RASPASHNYE_VOROTA_PAGE.seo.canonicalPath,
});

export default function RaspashnyeVorotaPage() {
  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <ServicePageView content={RASPASHNYE_VOROTA_PAGE} />
    </>
  );
}
