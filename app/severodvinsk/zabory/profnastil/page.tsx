import type { Metadata } from "next";
import { FencePageView } from "@/components/fence-pages/FencePageView";
import { SEVERODVINSK_PROFNASTIL_PAGE } from "@/lib/geo-local-pages/severodvinsk/profnastil";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: SEVERODVINSK_PROFNASTIL_PAGE.seo.title,
  description: SEVERODVINSK_PROFNASTIL_PAGE.seo.description,
  path: SEVERODVINSK_PROFNASTIL_PAGE.seo.canonicalPath,
  image: SEVERODVINSK_PROFNASTIL_PAGE.hero.image ?? undefined,
});

export default function SeverodvinskProfnastilPage() {
  return <FencePageView content={SEVERODVINSK_PROFNASTIL_PAGE} />;
}
