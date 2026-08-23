import type { Metadata } from "next";
import { FencePageView } from "@/components/fence-pages/FencePageView";
import { METALLOSHTAKETNIK_PAGE } from "@/lib/fence-pages/metalloshtaketnik/content";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: METALLOSHTAKETNIK_PAGE.seo.title,
  description: METALLOSHTAKETNIK_PAGE.seo.description,
  path: METALLOSHTAKETNIK_PAGE.seo.canonicalPath,
});

export default function MetalloshtaketnikPage() {
  return <FencePageView content={METALLOSHTAKETNIK_PAGE} />;
}
