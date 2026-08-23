import { ProjectCard } from "@/components/works/ProjectCard";
import {
  FENCE_SECTION_PY,
  SECTION_CONTAINER,
  SECTION_CONTENT_MT,
  SECTION_TITLE,
} from "@/lib/section-styles";
import type { WorkProject } from "@/lib/works/types";

type WorkSimilarProjectsProps = {
  projects: WorkProject[];
};

export function WorkSimilarProjects({ projects }: WorkSimilarProjectsProps) {
  if (projects.length === 0) {
    return null;
  }

  return (
    <section className={`bg-[#f5f5f5] ${FENCE_SECTION_PY}`}>
      <div className={SECTION_CONTAINER}>
        <h2 className={SECTION_TITLE.replace("mt-2 ", "")}>Похожие работы</h2>

        <div
          className={`${SECTION_CONTENT_MT} grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5`}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              compact
              aligned
              linkToDetail
            />
          ))}
        </div>
      </div>
    </section>
  );
}
