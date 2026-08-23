import type { Metadata } from "next";
import { MontazhServicePageView } from "@/components/service-pages/MontazhServicePageView";
import { MONTAZH_ZABORA_PAGE } from "@/lib/service-pages/montazh/content";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: MONTAZH_ZABORA_PAGE.seo.title,
  description: MONTAZH_ZABORA_PAGE.seo.description,
  path: MONTAZH_ZABORA_PAGE.seo.canonicalPath,
});

export default function MontazhZaboraPage() {
  return <MontazhServicePageView content={MONTAZH_ZABORA_PAGE} />;
}
