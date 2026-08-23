"use client";

import { useMemo, useState } from "react";
import {
  WORK_PROJECTS,
  filterWorkProjects,
  getWorkProjectBySlug,
} from "@/lib/works/projects";
import type { WorkFilterId, WorkProject } from "@/lib/works/types";
import { ProjectCard } from "./ProjectCard";
import { WorksFilters } from "./WorksFilters";

type WorksGridProps = {
  initialFilter?: WorkFilterId;
  showFilters?: boolean;
  projects?: WorkProject[];
  projectSlugs?: string[];
  compactPlaceholder?: boolean;
  enableLightbox?: boolean;
  mobileLayout?: "carousel" | "stack";
  linkProjects?: boolean;
  gridLayout?: "default" | "three-two" | "two-by-two";
  /** Все карточки остаются в DOM (SEO /raboty/), фильтр скрывает через CSS. */
  preserveAllInDom?: boolean;
  cardVariant?: "default" | "portfolio";
};

function hasProjectPhotos(project: WorkProject): boolean {
  return project.images.length > 0;
}

export function WorksGrid({
  initialFilter = "all",
  showFilters = true,
  projects = WORK_PROJECTS,
  projectSlugs,
  compactPlaceholder = false,
  enableLightbox = false,
  mobileLayout = "carousel",
  linkProjects = true,
  gridLayout = "default",
  preserveAllInDom = false,
  cardVariant = "default",
}: WorksGridProps) {
  const [activeFilter, setActiveFilter] = useState<WorkFilterId>(initialFilter);

  const sourceProjects = useMemo(() => {
    if (projectSlugs && projectSlugs.length > 0) {
      return projectSlugs
        .map((slug) => getWorkProjectBySlug(slug))
        .filter((project): project is WorkProject => project !== undefined);
    }

    return projects;
  }, [projectSlugs, projects]);

  const readyProjects = useMemo(
    () => sourceProjects.filter(hasProjectPhotos),
    [sourceProjects],
  );

  const visibleProjects = useMemo(() => {
    if (projectSlugs && projectSlugs.length > 0) {
      return readyProjects;
    }

    return filterWorkProjects(readyProjects, activeFilter);
  }, [activeFilter, projectSlugs, readyProjects]);

  const visibleSlugSet = useMemo(
    () => new Set(visibleProjects.map((project) => project.slug)),
    [visibleProjects],
  );

  const projectsToRender = preserveAllInDom ? readyProjects : visibleProjects;

  const showCompactEmpty =
    compactPlaceholder &&
    visibleProjects.length > 0 &&
    visibleProjects.filter(hasProjectPhotos).length === 0;

  const cardProps = {
    compact: compactPlaceholder || cardVariant === "portfolio",
    enableLightbox,
    aligned: compactPlaceholder,
    linkToDetail: linkProjects,
    variant: cardVariant,
  };

  const topSpacing = showFilters ? "mt-5 lg:mt-4" : "";

  const renderCard = (project: WorkProject) => {
    const hidden =
      preserveAllInDom && !visibleSlugSet.has(project.slug) ? "hidden" : "";

    return (
      <div key={project.id} className={hidden} aria-hidden={hidden ? true : undefined}>
        <ProjectCard project={project} {...cardProps} />
      </div>
    );
  };

  const stackGridClass =
    gridLayout === "three-two"
      ? `grid grid-cols-1 items-stretch gap-6 ${topSpacing} sm:grid-cols-2 lg:grid-cols-3 lg:gap-5`
      : gridLayout === "two-by-two"
        ? `grid grid-cols-1 items-stretch gap-6 ${topSpacing} sm:grid-cols-2 lg:gap-5`
        : `grid grid-cols-1 items-stretch gap-6 ${topSpacing} sm:grid-cols-2 lg:grid-cols-3 lg:gap-5`;

  return (
    <>
      {showFilters ? (
        <WorksFilters active={activeFilter} onChange={setActiveFilter} />
      ) : null}

      {visibleProjects.length === 0 ? (
        <p className="mt-4 text-sm text-muted">
          Объекты этого типа скоро будут добавлены в портфолио.
        </p>
      ) : showCompactEmpty ? (
        <p className="rounded-lg border border-dashed border-border bg-surface px-4 py-3 text-sm leading-relaxed text-muted">
          Фото объектов скоро будут добавлены в портфолио.
        </p>
      ) : mobileLayout === "stack" ? (
        gridLayout === "three-two" ? (
          <>
            <div className={stackGridClass}>
              {projectsToRender.slice(0, 3).map(renderCard)}
            </div>
            {projectsToRender.length > 3 ? (
              <div className="mt-5 grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:mx-auto lg:max-w-[calc(66.666%-0.625rem)] lg:grid-cols-2 lg:gap-5">
                {projectsToRender.slice(3).map(renderCard)}
              </div>
            ) : null}
          </>
        ) : (
          <div className={stackGridClass}>{projectsToRender.map(renderCard)}</div>
        )
      ) : (
        <>
          <div className={`${topSpacing} hidden gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3`}>
            {projectsToRender.map(renderCard)}
          </div>

          <div
            className={`-mx-4 ${topSpacing} flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:hidden [&::-webkit-scrollbar]:hidden`}
          >
            {projectsToRender.map((project) => {
              const hidden =
                preserveAllInDom && !visibleSlugSet.has(project.slug)
                  ? "hidden"
                  : "";

              return (
                <div
                  key={project.id}
                  className={`w-full max-w-none shrink-0 snap-start ${hidden}`}
                  aria-hidden={hidden ? true : undefined}
                >
                  <ProjectCard project={project} {...cardProps} />
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}
