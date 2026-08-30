import type { Metadata } from "next";
import { FencePageView } from "@/components/fence-pages/FencePageView";
import { SEVERODVINSK_METALLOSHTAKETNIK_PAGE } from "@/lib/geo-local-pages/severodvinsk/metalloshtaketnik";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: SEVERODVINSK_METALLOSHTAKETNIK_PAGE.seo.title,
  description: SEVERODVINSK_METALLOSHTAKETNIK_PAGE.seo.description,
  path: SEVERODVINSK_METALLOSHTAKETNIK_PAGE.seo.canonicalPath,
  image: SEVERODVINSK_METALLOSHTAKETNIK_PAGE.hero.image ?? undefined,
});

export default function SeverodvinskMetalloshtaketnikPage() {
  return <FencePageView content={SEVERODVINSK_METALLOSHTAKETNIK_PAGE} />;
}
