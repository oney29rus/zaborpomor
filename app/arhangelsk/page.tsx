import type { Metadata } from "next";
import { CityLandingView } from "@/components/geo-pages/CityLandingView";
import {
  ARKHANGELSK_MOUNT_ONLY,
  ARKHANGELSK_PAGE,
} from "@/lib/geo-pages/arhangelsk/content";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: ARKHANGELSK_PAGE.metadata.title,
  description: ARKHANGELSK_PAGE.metadata.description,
  path: ARKHANGELSK_PAGE.path,
  image: ARKHANGELSK_PAGE.hero.image ?? undefined,
});

export default function ArkhangelskPage() {
  return (
    <CityLandingView
      content={ARKHANGELSK_PAGE}
      mountOnlyPromo={ARKHANGELSK_MOUNT_ONLY}
    />
  );
}
