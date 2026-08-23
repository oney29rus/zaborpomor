import type { Metadata } from "next";
import { FencePageView } from "@/components/fence-pages/FencePageView";
import { THREE_D_SETKA_PAGE } from "@/lib/fence-pages/3d-setka/content";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: THREE_D_SETKA_PAGE.seo.title,
  description: THREE_D_SETKA_PAGE.seo.description,
  path: THREE_D_SETKA_PAGE.seo.canonicalPath,
  image: THREE_D_SETKA_PAGE.hero.image ?? undefined,
});

export default function ThreeDSetkaPage() {
  return <FencePageView content={THREE_D_SETKA_PAGE} />;
}
