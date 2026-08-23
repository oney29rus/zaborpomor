import type { Metadata } from "next";
import { FencePageView } from "@/components/fence-pages/FencePageView";
import { PROFNASTIL_PAGE } from "@/lib/fence-pages/profnastil/content";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: PROFNASTIL_PAGE.seo.title,
  description: PROFNASTIL_PAGE.seo.description,
  path: PROFNASTIL_PAGE.seo.canonicalPath,
  image: PROFNASTIL_PAGE.hero.image ?? undefined,
});

export default function ProfnastilPage() {
  return <FencePageView content={PROFNASTIL_PAGE} />;
}
