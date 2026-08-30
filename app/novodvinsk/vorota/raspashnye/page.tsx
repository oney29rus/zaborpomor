import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServicePageView } from "@/components/service-pages/ServicePageView";
import { NOVODVINSK_RASPASHNYE_PAGE } from "@/lib/geo-local-pages/novodvinsk/raspashnye";
import { buildServiceJsonLd } from "@/lib/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: NOVODVINSK_RASPASHNYE_PAGE.seo.title,
  description: NOVODVINSK_RASPASHNYE_PAGE.seo.description,
  path: NOVODVINSK_RASPASHNYE_PAGE.seo.canonicalPath,
});

const serviceJsonLd = buildServiceJsonLd({
  name: "Распашные ворота в Новодвинске",
  description: NOVODVINSK_RASPASHNYE_PAGE.seo.description,
  areaServed: "Новодвинск",
  url: NOVODVINSK_RASPASHNYE_PAGE.seo.canonicalPath,
});

export default function NovodvinskRaspashnyePage() {
  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <ServicePageView content={NOVODVINSK_RASPASHNYE_PAGE} />
    </>
  );
}
