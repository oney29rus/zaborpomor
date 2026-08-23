import type { Metadata } from "next";
import { CityLandingView } from "@/components/geo-pages/CityLandingView";
import {
  SEVERODVINSK_MOUNT_ONLY,
  SEVERODVINSK_PAGE,
} from "@/lib/geo-pages/severodvinsk/content";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: SEVERODVINSK_PAGE.metadata.title,
  description: SEVERODVINSK_PAGE.metadata.description,
  path: SEVERODVINSK_PAGE.path,
  image: SEVERODVINSK_PAGE.hero.image ?? undefined,
});

export default function SeverodvinskPage() {
  return (
    <CityLandingView
      content={SEVERODVINSK_PAGE}
      mountOnlyPromo={SEVERODVINSK_MOUNT_ONLY}
    />
  );
}
