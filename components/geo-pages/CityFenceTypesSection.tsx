import { getCityFenceCatalogItems } from "@/lib/geo-pages/fence-catalog";
import {
  FENCE_SECTION_PY,
  SECTION_CONTAINER,
  SECTION_CONTENT_MT,
  SECTION_TITLE,
} from "@/lib/section-styles";
import { CompactFenceTypeCard } from "./CompactFenceTypeCard";

type CityFenceTypesSectionProps = {
  title: string;
  slugs: string[];
  imageOverrides: Record<string, string>;
};

export function CityFenceTypesSection({
  title,
  slugs,
  imageOverrides,
}: CityFenceTypesSectionProps) {
  const items = getCityFenceCatalogItems(slugs, imageOverrides);

  return (
    <section className={`bg-surface ${FENCE_SECTION_PY}`}>
      <div className={SECTION_CONTAINER}>
        <h2 className={`max-w-2xl ${SECTION_TITLE.replace("mt-2 ", "")}`}>
          {title}
        </h2>

        <div
          className={`${SECTION_CONTENT_MT} grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3 lg:gap-5`}
        >
          {items.map((item) => (
            <CompactFenceTypeCard key={item.slug} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
