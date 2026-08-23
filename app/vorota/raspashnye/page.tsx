import type { Metadata } from "next";
import { ServicePageView } from "@/components/service-pages/ServicePageView";
import { RASPASHNYE_VOROTA_PAGE } from "@/lib/service-pages/raspashnye/content";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: RASPASHNYE_VOROTA_PAGE.seo.title,
  description: RASPASHNYE_VOROTA_PAGE.seo.description,
  path: RASPASHNYE_VOROTA_PAGE.seo.canonicalPath,
});

export default function RaspashnyeVorotaPage() {
  return <ServicePageView content={RASPASHNYE_VOROTA_PAGE} />;
}
