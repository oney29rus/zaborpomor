import type { Metadata } from "next";
import { FencePageView } from "@/components/fence-pages/FencePageView";
import { NOVODVINSK_PROFNASTIL_PAGE } from "@/lib/geo-local-pages/novodvinsk/profnastil";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: NOVODVINSK_PROFNASTIL_PAGE.seo.title,
  description: NOVODVINSK_PROFNASTIL_PAGE.seo.description,
  path: NOVODVINSK_PROFNASTIL_PAGE.seo.canonicalPath,
  image: NOVODVINSK_PROFNASTIL_PAGE.hero.image ?? undefined,
});

export default function NovodvinskProfnastilPage() {
  return <FencePageView content={NOVODVINSK_PROFNASTIL_PAGE} />;
}
