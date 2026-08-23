import Link from "next/link";
import {
  formatWorkDuration,
  formatWorkLocation,
  formatWorkPriceLine,
  formatWorkPricePerMeter,
  formatWorkSpecsLine,
  formatWorkSummaryLine,
  hasDetailedWorkCard,
} from "@/lib/works/format";
import type { WorkProject } from "@/lib/works/types";
import { ProjectCardImage } from "./ProjectCardImage";

type ProjectCardProps = {
  project: WorkProject;
  compact?: boolean;
  enableLightbox?: boolean;
  aligned?: boolean;
  linkToDetail?: boolean;
  variant?: "default" | "portfolio";
};

export function ProjectCard({
  project,
  compact = false,
  enableLightbox = false,
  aligned = false,
  linkToDetail = true,
  variant = "default",
}: ProjectCardProps) {
  const href = `/raboty/${project.slug}/`;
  const detailed = hasDetailedWorkCard(project);
  const priceLine = formatWorkPriceLine(project);
  const useAlignedLayout = aligned && detailed && variant === "default";
  const titleText = detailed ? project.title : project.fenceType;

  if (variant === "portfolio") {
    const pricePerMeter = formatWorkPricePerMeter(project);
    const duration = formatWorkDuration(project);

    return (
      <article className="flex h-full flex-col">
        {linkToDetail ? (
          <Link href={href} className="block shrink-0">
            <ProjectCardImage project={project} compact />
          </Link>
        ) : (
          <ProjectCardImage project={project} compact className="shrink-0" />
        )}

        <div className="mt-2.5 flex flex-1 flex-col lg:mt-3">
          <p className="text-xs font-medium text-muted">
            {formatWorkLocation(project)}
          </p>

          <h3 className="mt-0.5 line-clamp-2 text-base font-bold leading-snug tracking-tight text-foreground">
            {linkToDetail ? (
              <Link href={href} className="transition-colors hover:text-accent">
                {project.title}
              </Link>
            ) : (
              project.title
            )}
          </h3>

          <p className="mt-1 text-sm text-foreground/85">
            {formatWorkSpecsLine(project)}
          </p>

          {pricePerMeter || duration ? (
            <p className="mt-0.5 text-sm font-semibold text-foreground/90">
              {[pricePerMeter, duration].filter(Boolean).join(" • ")}
            </p>
          ) : null}

          {project.description ? (
            <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-foreground/85">
              {project.description}
            </p>
          ) : null}

          {linkToDetail ? (
            <Link
              href={href}
              className="mt-auto inline-flex pt-2 text-sm font-semibold text-foreground transition-colors hover:text-accent"
            >
              Подробнее →
            </Link>
          ) : null}
        </div>
      </article>
    );
  }

  const titleNode = linkToDetail ? (
    <Link href={href} className="transition-colors hover:text-accent">
      {titleText}
    </Link>
  ) : (
    titleText
  );

  return (
    <article className={useAlignedLayout ? "flex h-full flex-col" : undefined}>
      {enableLightbox || !linkToDetail ? (
        <ProjectCardImage
          project={project}
          compact={compact}
          enableLightbox={enableLightbox}
          className={useAlignedLayout ? "shrink-0" : undefined}
        />
      ) : (
        <Link
          href={href}
          className={`block ${useAlignedLayout ? "shrink-0" : ""}`}
        >
          <ProjectCardImage project={project} compact={compact} />
        </Link>
      )}

      <div
        className={
          useAlignedLayout
            ? "mt-2.5 flex flex-1 flex-col lg:mt-3"
            : "mt-2.5 lg:mt-3"
        }
      >
        <p className="text-xs font-medium text-muted sm:text-sm">
          {formatWorkLocation(project)}
        </p>

        <h3
          className={`mt-0.5 text-base font-bold leading-snug tracking-tight text-foreground lg:text-lg ${
            useAlignedLayout ? "lg:line-clamp-2 lg:min-h-[3.25rem]" : ""
          }`}
        >
          {titleNode}
        </h3>

        {detailed ? (
          <>
            <div
              className={
                useAlignedLayout ? "mt-1 lg:flex-1" : "mt-1 space-y-0.5"
              }
            >
              {project.description ? (
                <p
                  className={`text-sm leading-relaxed text-foreground/85 ${
                    useAlignedLayout ? "lg:line-clamp-2 lg:min-h-[2.75rem]" : ""
                  }`}
                >
                  {project.description}
                </p>
              ) : (
                <p
                  className={`text-sm text-foreground/85 ${
                    useAlignedLayout ? "lg:line-clamp-2 lg:min-h-[2.75rem]" : ""
                  }`}
                >
                  {formatWorkSpecsLine(project)}
                </p>
              )}

              {!useAlignedLayout && priceLine ? (
                <p className="text-sm font-semibold text-foreground/90">
                  {priceLine}
                </p>
              ) : null}

              {!useAlignedLayout && project.priceNote ? (
                <p className="text-xs leading-relaxed text-muted">
                  {project.priceNote}
                </p>
              ) : null}
            </div>

            {useAlignedLayout ? (
              <div className="mt-auto pt-2 lg:pt-3">
                {priceLine ? (
                  <p className="text-sm font-semibold leading-snug text-foreground/90 lg:min-h-[1.25rem]">
                    {priceLine}
                  </p>
                ) : (
                  <p
                    aria-hidden="true"
                    className="hidden text-sm lg:block lg:min-h-[1.25rem]"
                  >
                    {" "}
                  </p>
                )}

                <p
                  className={`text-xs leading-relaxed text-muted lg:line-clamp-2 lg:min-h-[2.5rem] ${
                    project.priceNote ? "mt-0.5" : "lg:invisible"
                  }`}
                >
                  {project.priceNote ?? "\u00A0"}
                </p>

                {linkToDetail ? (
                  <Link
                    href={href}
                    className="mt-2 inline-flex text-sm font-semibold text-foreground transition-colors hover:text-accent"
                  >
                    Подробнее →
                  </Link>
                ) : null}
              </div>
            ) : null}
          </>
        ) : (
          <p className="mt-1 whitespace-pre-line text-sm text-foreground/85">
            {formatWorkSummaryLine(project)}
          </p>
        )}

        {!useAlignedLayout && linkToDetail ? (
          <Link
            href={href}
            className="mt-2 inline-flex text-sm font-semibold text-foreground transition-colors hover:text-accent lg:mt-2.5"
          >
            {detailed ? "Подробнее →" : "Смотреть объект →"}
          </Link>
        ) : null}
      </div>
    </article>
  );
}
