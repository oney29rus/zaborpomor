import type { Metadata } from "next";
import { CityLandingView } from "@/components/geo-pages/CityLandingView";
import { CITY_MOUNT_ONLY_PROMO } from "@/lib/geo-pages/mount-only-promo";
import { HOLMOGORY_PAGE } from "@/lib/geo-pages/holmogory/content";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: HOLMOGORY_PAGE.metadata.title,
  description: HOLMOGORY_PAGE.metadata.description,
  path: HOLMOGORY_PAGE.path,
});

export default function HolmogoryPage() {
  return (
    <CityLandingView
      content={HOLMOGORY_PAGE}
      mountOnlyPromo={CITY_MOUNT_ONLY_PROMO}
    />
  );
}
