import Link from "next/link";
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
  mobileLayout?: "carousel" | "stack";
};

export function WorksSection({
  projectSlugs,
  showFilters = true,
  mobileLayout = "carousel",
}: WorksSectionProps = {}) {
  return (
    <section className={`bg-[#f5f5f5] ${SECTION_PY}`}>
      <div className={SECTION_CONTAINER}>
        <div className="max-w-2xl">
          <p className={SECTION_LABEL}>Реальные объекты</p>
          <h2 className={SECTION_TITLE}>
            Посмотрите, какие заборы мы уже установили
          </h2>
          <p className={SECTION_DESC}>
            Показываем реальные работы в Архангельске и области: длина,
            материал, высота и срок монтажа.
          </p>
        </div>

        <div className={SECTION_CONTENT_MT}>
          <WorksGrid
            projectSlugs={projectSlugs}
            showFilters={showFilters}
            mobileLayout={mobileLayout}
          />
        </div>

        <div className="mt-6 text-center">
          <Link href="/raboty/" className={SECTION_LINK}>
            Смотреть все работы →
          </Link>
        </div>
      </div>
    </section>
  );
}
