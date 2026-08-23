import Link from "next/link";
import {
  FENCE_SECTION_PY,
  SECTION_CONTAINER,
  SECTION_CONTENT_MT,
  SECTION_LINK,
  SECTION_TITLE,
} from "@/lib/section-styles";
import { WorksGrid } from "@/components/works/WorksGrid";

type CityWorksSectionProps = {
  id?: string;
  title: string;
  projectSlugs: string[];
  layout?: "default" | "three-two" | "two-by-two";
  allWorksHref?: string;
};
export function CityWorksSection({
  id = "works",
  title,
  projectSlugs,
  layout = "default",
  allWorksHref,
}: CityWorksSectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 bg-[#f5f5f5] ${FENCE_SECTION_PY}`}>
      <div className={SECTION_CONTAINER}>
        <h2 className={`max-w-2xl ${SECTION_TITLE.replace("mt-2 ", "")}`}>
          {title}
        </h2>

        <div className={SECTION_CONTENT_MT}>
          <WorksGrid
            showFilters={false}
            projectSlugs={projectSlugs}
            compactPlaceholder
            enableLightbox
            mobileLayout="stack"
            linkProjects
            gridLayout={layout}
          />

          {allWorksHref ? (
            <div className="mt-6">
              <Link href={allWorksHref} className={SECTION_LINK}>
                Смотреть все работы →
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}