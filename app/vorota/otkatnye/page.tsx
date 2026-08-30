import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServicePageView } from "@/components/service-pages/ServicePageView";
import { OTKATNYE_VOROTA_PAGE } from "@/lib/service-pages/otkatnye/content";
import { buildServiceJsonLd } from "@/lib/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: OTKATNYE_VOROTA_PAGE.seo.title,
  description: OTKATNYE_VOROTA_PAGE.seo.description,
  path: OTKATNYE_VOROTA_PAGE.seo.canonicalPath,
});

const serviceJsonLd = buildServiceJsonLd({
  name: "Откатные ворота в Архангельске",
  description: OTKATNYE_VOROTA_PAGE.seo.description,
  areaServed: "Архангельск",
  url: OTKATNYE_VOROTA_PAGE.seo.canonicalPath,
});

export default function OtkatnyeVorotaPage() {
  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <ServicePageView content={OTKATNYE_VOROTA_PAGE} />
    </>
  );
}
