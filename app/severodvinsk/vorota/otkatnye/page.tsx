import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServicePageView } from "@/components/service-pages/ServicePageView";
import { SEVERODVINSK_OTKATNYE_PAGE } from "@/lib/geo-local-pages/severodvinsk/otkatnye";
import { buildServiceJsonLd } from "@/lib/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: SEVERODVINSK_OTKATNYE_PAGE.seo.title,
  description: SEVERODVINSK_OTKATNYE_PAGE.seo.description,
  path: SEVERODVINSK_OTKATNYE_PAGE.seo.canonicalPath,
});

const serviceJsonLd = buildServiceJsonLd({
  name: "Откатные ворота в Северодвинске",
  description: SEVERODVINSK_OTKATNYE_PAGE.seo.description,
  areaServed: "Северодвинск",
  url: SEVERODVINSK_OTKATNYE_PAGE.seo.canonicalPath,
});

export default function SeverodvinskOtkatnyePage() {
  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <ServicePageView content={SEVERODVINSK_OTKATNYE_PAGE} />
    </>
  );
}
