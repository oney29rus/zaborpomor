import type { Metadata } from "next";
import { ServicePageView } from "@/components/service-pages/ServicePageView";
import { KARKAS_ZABORA_PAGE } from "@/lib/service-pages/karkas-zabora/content";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: KARKAS_ZABORA_PAGE.seo.title,
  description: KARKAS_ZABORA_PAGE.seo.description,
  path: KARKAS_ZABORA_PAGE.seo.canonicalPath,
});

export default function KarkasZaboraPage() {
  return <ServicePageView content={KARKAS_ZABORA_PAGE} />;
}
