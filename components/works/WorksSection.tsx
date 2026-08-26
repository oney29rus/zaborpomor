import Link from "next/link";
import {
  HOME_SECTION_CONTENT_MT,
  HOME_SECTION_DESC,
  HOME_SECTION_TITLE,
} from "@/lib/homepage/mobile-styles";
import {
  SECTION_CONTAINER,
  SECTION_CONTENT_MT,
  SECTION_DESC,
  SECTION_LABEL,
  SECTION_LINK,
  SECTION_PY,
  SECTION_TITLE,
} from "@/lib/section-styles";
import { WorksGrid } from "./WorksGrid";

type WorksSectionProps = {
  projectSlugs?: string[];
  showFilters?: boolean;
  mobileLayout?: "carousel" | "stack" | "grid-two";
  compactMobile?: boolean;
};

export function WorksSection({
  projectSlugs,
  showFilters = true,
  mobileLayout = "carousel",
  compactMobile = false,
}: WorksSectionProps = {}) {
  const titleClassName = compactMobile ? HOME_SECTION_TITLE : SECTION_TITLE;
  const descClassName = compactMobile ? HOME_SECTION_DESC : SECTION_DESC;
  const contentMtClassName = compactMobile ? HOME_SECTION_CONTENT_MT : SECTION_CONTENT_MT;

  return (
    <section
      className={`bg-[#f5f5f5] ${compactMobile ? "py-8 sm:py-14 lg:py-16" : SECTION_PY}`}
    >
      <div className={SECTION_CONTAINER}>
        <div className="max-w-2xl">
          <p className={SECTION_LABEL}>Реальные объекты</p>
          <h2 className={titleClassName}>
            Посмотрите, какие заборы мы уже установили
          </h2>
          <p className={descClassName}>
            Показываем реальные работы в Архангельске и области: длина,
            материал, высота и срок монтажа.
          </p>
        </div>

        <div className={contentMtClassName}>
          <WorksGrid
            projectSlugs={projectSlugs}
            showFilters={showFilters}
            mobileLayout={mobileLayout}
            cardVariant={compactMobile ? "portfolio" : "default"}
          />
        </div>

        <div className="mt-4 text-center lg:mt-6">
          <Link href="/raboty/" className={SECTION_LINK}>
            Смотреть все работы →
          </Link>
        </div>
      </div>
    </section>
  );
}
