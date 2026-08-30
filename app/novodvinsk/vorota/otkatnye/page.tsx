import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServicePageView } from "@/components/service-pages/ServicePageView";
import { NOVODVINSK_OTKATNYE_PAGE } from "@/lib/geo-local-pages/novodvinsk/otkatnye";
import { buildServiceJsonLd } from "@/lib/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: NOVODVINSK_OTKATNYE_PAGE.seo.title,
  description: NOVODVINSK_OTKATNYE_PAGE.seo.description,
  path: NOVODVINSK_OTKATNYE_PAGE.seo.canonicalPath,
});

const serviceJsonLd = buildServiceJsonLd({
  name: "Откатные ворота в Новодвинске",
  description: NOVODVINSK_OTKATNYE_PAGE.seo.description,
  areaServed: "Новодвинск",
  url: NOVODVINSK_OTKATNYE_PAGE.seo.canonicalPath,
});

export default function NovodvinskOtkatnyePage() {
  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <ServicePageView content={NOVODVINSK_OTKATNYE_PAGE} />
    </>
  );
}
