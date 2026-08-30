import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo/metadata";
import { workProjectPath } from "@/lib/urls";import { formatWorkLocation } from "./format";
import { WORK_PROJECTS } from "./projects";
import type { WorkProject } from "./types";

export type WorkProjectAuditIssue = {
  id: string;
  reason: string;
};

export function isPublishableWorkProject(project: WorkProject): boolean {
  return (
    Boolean(project.slug?.trim()) &&
    Boolean(project.title?.trim()) &&
    project.images.length > 0
  );
}

export function getPublishableWorkProjects(): WorkProject[] {
  return WORK_PROJECTS.filter(isPublishableWorkProject);
}

export function auditWorkProjects(): {
  total: number;
  publishable: number;
  issues: WorkProjectAuditIssue[];
  duplicateSlugs: string[];
} {
  const slugCounts = new Map<string, number>();
  const issues: WorkProjectAuditIssue[] = [];

  for (const project of WORK_PROJECTS) {
    slugCounts.set(project.slug, (slugCounts.get(project.slug) ?? 0) + 1);

    if (!project.slug?.trim()) {
      issues.push({ id: project.id, reason: "отсутствует slug" });
    }

    if (!project.title?.trim()) {
      issues.push({ id: project.id, reason: "отсутствует title" });
    }

    if (project.images.length === 0) {
      issues.push({ id: project.id, reason: "нет изображений" });
    }

    if (!project.fenceType?.trim()) {
      issues.push({ id: project.id, reason: "отсутствует fenceType" });
    }
  }

  const duplicateSlugs = [...slugCounts.entries()]
    .filter(([, count]) => count > 1)
    .map(([slug]) => slug);

  const publishable = getPublishableWorkProjects();

  return {
    total: WORK_PROJECTS.length,
    publishable: publishable.length,
    issues,
    duplicateSlugs,
  };
}

export function buildWorkProjectDescription(project: WorkProject): string {
  const location = formatWorkLocation(project);
  const locationPart =
    location !== "Населённый пункт уточняется" ? ` в ${location}` : "";
  const details: string[] = [];

  if (project.length !== null) {
    details.push(`${project.length} м`);
  }

  if (project.height !== null) {
    details.push(`высота ${project.height.toString().replace(".", ",")} м`);
  }

  if (project.duration) {
    details.push(`монтаж ${project.duration}`);
  }

  const detailText = details.length > 0 ? `: ${details.join(", ")}` : "";

  return `Установили забор из ${project.fenceType.toLowerCase()}${locationPart}${detailText}. Фото готовой работы и стоимость.`;
}

export function buildWorkProjectMetadata(project: WorkProject): Metadata {
  const path = workProjectPath(project.slug);
  const image = project.images[0] ?? undefined;

  return createPageMetadata({
    title: `${project.title} — фото и цена`,
    description: buildWorkProjectDescription(project),
    path,
    image,
  });
}

export function getSimilarWorkProjects(
  project: WorkProject,
  limit = 3,
): WorkProject[] {
  const candidates = getPublishableWorkProjects().filter(
    (item) => item.slug !== project.slug,
  );

  const sameType = candidates.filter(
    (item) => item.filterCategory === project.filterCategory,
  );
  const sameGeo =
    project.city !== null
      ? sameType.filter((item) => item.city === project.city)
      : [];

  const ordered = [...sameGeo, ...sameType, ...candidates];
  const seen = new Set<string>();
  const result: WorkProject[] = [];

  for (const item of ordered) {
    if (seen.has(item.slug)) {
      continue;
    }

    seen.add(item.slug);
    result.push(item);

    if (result.length >= limit) {
      break;
    }
  }

  return result;
}

export function getWorkProjectRoutes(): string[] {
  return getPublishableWorkProjects().map((project) =>
    workProjectPath(project.slug),
  );
}

export function getWorkProjectOgImageUrl(project: WorkProject): string | null {
  const image = project.images[0];

  if (!image) {
    return null;
  }

  return `${SITE_URL}${image}`;
}
