import Link from "next/link";
import { WorksGrid } from "@/components/works/WorksGrid";
import {
  FENCE_SECTION_PY,
  SECTION_CONTAINER,
  SECTION_CONTENT_MT,
  SECTION_TITLE,
} from "@/lib/section-styles";

type ServiceWorksSectionProps = {
  title: string;
  sectionId?: string;
  projectSlugs?: string[];
};

export function ServiceWorksSection({
  title,
  sectionId,
  projectSlugs,
}: ServiceWorksSectionProps) {
  return (
    <section
      id={sectionId}
      className={`bg-[#f5f5f5] ${FENCE_SECTION_PY}`}
    >
      <div className={SECTION_CONTAINER}>
        <div className="max-w-2xl">
          <h2 className={SECTION_TITLE.replace("mt-2 ", "")}>{title}</h2>
        </div>

        <div className={SECTION_CONTENT_MT}>
          {projectSlugs && projectSlugs.length > 0 ? (
            <>
              <WorksGrid
                showFilters={false}
                projectSlugs={projectSlugs}
                compactPlaceholder
                enableLightbox
                mobileLayout="stack"
                linkProjects
              />
              <div className="mt-6 text-center">
                <Link
                  href="/raboty/"
                  className="text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
                >
                  Смотреть все работы →
                </Link>
              </div>
            </>
          ) : (
            <div className="rounded-xl border border-dashed border-border bg-surface px-5 py-8 text-center sm:px-6">
              <p className="text-sm leading-relaxed text-muted">
                Фото объектов скоро будут добавлены в портфолио.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
