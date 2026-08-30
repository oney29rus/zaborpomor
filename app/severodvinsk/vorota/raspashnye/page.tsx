import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServicePageView } from "@/components/service-pages/ServicePageView";
import { SEVERODVINSK_RASPASHNYE_PAGE } from "@/lib/geo-local-pages/severodvinsk/raspashnye";
import { buildServiceJsonLd } from "@/lib/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: SEVERODVINSK_RASPASHNYE_PAGE.seo.title,
  description: SEVERODVINSK_RASPASHNYE_PAGE.seo.description,
  path: SEVERODVINSK_RASPASHNYE_PAGE.seo.canonicalPath,
});

const serviceJsonLd = buildServiceJsonLd({
  name: "Распашные ворота в Северодвинске",
  description: SEVERODVINSK_RASPASHNYE_PAGE.seo.description,
  areaServed: "Северодвинск",
  url: SEVERODVINSK_RASPASHNYE_PAGE.seo.canonicalPath,
});

export default function SeverodvinskRaspashnyePage() {
  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <ServicePageView content={SEVERODVINSK_RASPASHNYE_PAGE} />
    </>
  );
}
