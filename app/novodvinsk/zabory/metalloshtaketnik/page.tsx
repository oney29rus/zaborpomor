import type { Metadata } from "next";
import { FencePageView } from "@/components/fence-pages/FencePageView";
import { NOVODVINSK_METALLOSHTAKETNIK_PAGE } from "@/lib/geo-local-pages/novodvinsk/metalloshtaketnik";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: NOVODVINSK_METALLOSHTAKETNIK_PAGE.seo.title,
  description: NOVODVINSK_METALLOSHTAKETNIK_PAGE.seo.description,
  path: NOVODVINSK_METALLOSHTAKETNIK_PAGE.seo.canonicalPath,
  image: NOVODVINSK_METALLOSHTAKETNIK_PAGE.hero.image ?? undefined,
});

export default function NovodvinskMetalloshtaketnikPage() {
  return <FencePageView content={NOVODVINSK_METALLOSHTAKETNIK_PAGE} />;
}
