import type { Metadata } from "next";
import { CityLandingView } from "@/components/geo-pages/CityLandingView";
import { CITY_MOUNT_ONLY_PROMO } from "@/lib/geo-pages/mount-only-promo";
import { PRIMORSKIY_RAYON_PAGE } from "@/lib/geo-pages/primorskiy-rayon/content";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: PRIMORSKIY_RAYON_PAGE.metadata.title,
  description: PRIMORSKIY_RAYON_PAGE.metadata.description,
  path: PRIMORSKIY_RAYON_PAGE.path,
});

export default function PrimorskiyRayonPage() {
  return (
    <CityLandingView
      content={PRIMORSKIY_RAYON_PAGE}
      mountOnlyPromo={CITY_MOUNT_ONLY_PROMO}
    />
  );
}
