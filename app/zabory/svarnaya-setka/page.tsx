import type { Metadata } from "next";
import { FencePageView } from "@/components/fence-pages/FencePageView";
import { SVARNAYA_SETKA_PAGE } from "@/lib/fence-pages/svarnaya-setka/content";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: SVARNAYA_SETKA_PAGE.seo.title,
  description: SVARNAYA_SETKA_PAGE.seo.description,
  path: SVARNAYA_SETKA_PAGE.seo.canonicalPath,
  image: SVARNAYA_SETKA_PAGE.hero.image ?? undefined,
});

export default function SvarnayaSetkaPage() {
  return <FencePageView content={SVARNAYA_SETKA_PAGE} />;
}
