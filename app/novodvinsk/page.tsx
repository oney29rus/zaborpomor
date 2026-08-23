import type { Metadata } from "next";
import { CityLandingView } from "@/components/geo-pages/CityLandingView";
import {
  NOVODVINSK_MOUNT_ONLY,
  NOVODVINSK_PAGE,
} from "@/lib/geo-pages/novodvinsk/content";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: NOVODVINSK_PAGE.metadata.title,
  description: NOVODVINSK_PAGE.metadata.description,
  path: NOVODVINSK_PAGE.path,
  image: NOVODVINSK_PAGE.hero.image ?? undefined,
});

export default function NovodvinskPage() {
  return (
    <CityLandingView
      content={NOVODVINSK_PAGE}
      mountOnlyPromo={NOVODVINSK_MOUNT_ONLY}
    />
  );
}
