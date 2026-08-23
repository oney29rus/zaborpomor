import type { Metadata } from "next";
import { ServicePageView } from "@/components/service-pages/ServicePageView";
import { OTKATNYE_VOROTA_PAGE } from "@/lib/service-pages/otkatnye/content";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: OTKATNYE_VOROTA_PAGE.seo.title,
  description: OTKATNYE_VOROTA_PAGE.seo.description,
  path: OTKATNYE_VOROTA_PAGE.seo.canonicalPath,
});

export default function OtkatnyeVorotaPage() {
  return <ServicePageView content={OTKATNYE_VOROTA_PAGE} />;
}
