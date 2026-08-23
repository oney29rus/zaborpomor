import type { Metadata } from "next";
import { ServicePageView } from "@/components/service-pages/ServicePageView";
import { VINTOVYE_SVAI_PAGE } from "@/lib/service-pages/vintovye-svai/content";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: VINTOVYE_SVAI_PAGE.seo.title,
  description: VINTOVYE_SVAI_PAGE.seo.description,
  path: VINTOVYE_SVAI_PAGE.seo.canonicalPath,
});

export default function VintovyeSvaiPage() {
  return <ServicePageView content={VINTOVYE_SVAI_PAGE} />;
}
