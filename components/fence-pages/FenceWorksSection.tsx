import Link from "next/link";
import type { FencePageWorks } from "@/lib/fence-pages/types";
import {
  FENCE_SECTION_PY,
  SECTION_CONTAINER,
  SECTION_CONTENT_MT,
  SECTION_LINK,
  SECTION_TITLE,
} from "@/lib/section-styles";
import { WorksGrid } from "@/components/works/WorksGrid";

type FenceWorksSectionProps = {
  works: FencePageWorks;
  sectionId?: string;
};

export function FenceWorksSection({
  works,
  sectionId = "fence-works",
}: FenceWorksSectionProps) {
  return (
    <section id={sectionId} className={`bg-[#f5f5f5] ${FENCE_SECTION_PY}`}>
      <div className={SECTION_CONTAINER}>
        <div className="max-w-2xl">
          <h2 className={SECTION_TITLE.replace("mt-2 ", "")}>{works.title}</h2>
        </div>

        <div className={SECTION_CONTENT_MT}>
          <WorksGrid
            initialFilter={works.filterCategory}
            projectSlugs={works.projectSlugs}
            showFilters={false}
            compactPlaceholder
            enableLightbox
            mobileLayout="stack"
            linkProjects
          />
        </div>

        {works.allWorksPublished ? (
          <div className="mt-6 text-center">
            <Link href={works.allWorksHref} className={SECTION_LINK}>
              Смотреть все работы →
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
