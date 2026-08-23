import type { Metadata } from "next";
import { FencePageView } from "@/components/fence-pages/FencePageView";
import { DEREVYANNY_SHTAKETNIK_PAGE } from "@/lib/fence-pages/derevyannyy-shtaketnik/content";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: DEREVYANNY_SHTAKETNIK_PAGE.seo.title,
  description: DEREVYANNY_SHTAKETNIK_PAGE.seo.description,
  path: DEREVYANNY_SHTAKETNIK_PAGE.seo.canonicalPath,
  image: DEREVYANNY_SHTAKETNIK_PAGE.hero.image ?? undefined,
});

export default function DerevyannyyShtaketnikPage() {
  return <FencePageView content={DEREVYANNY_SHTAKETNIK_PAGE} />;
}
