import type { WorkProject } from "./types";

export function formatWorkLocation(project: WorkProject): string {
  if (project.city) {
    return project.location ? `${project.city}, ${project.location}` : project.city;
  }

  if (project.location) {
    return project.location;
  }

  return "Населённый пункт уточняется";
}

/** Компактная строка характеристик для карточки объекта. */
export function formatWorkSpecsLine(project: WorkProject): string {
  const parts: string[] = [];

  if (project.fenceType) {
    parts.push(project.fenceType);
  }

  if (project.length !== null) {
    parts.push(`${project.length} м`);
  }

  if (project.height !== null) {
    parts.push(`${project.height.toString().replace(".", ",")} м`);
  }

  if (parts.length === 0) {
    return "Параметры объекта уточняются";
  }

  return parts.join(" • ");
}

/** Строка цены за п.м. для карточки (без срока монтажа). */
export function formatWorkPricePerMeter(project: WorkProject): string | null {
  return project.priceLabel ?? null;
}

/** Срок монтажа для карточки объекта. */
export function formatWorkDuration(project: WorkProject): string | null {
  return project.duration ?? null;
}

/** Цена и срок монтажа для карточки объекта. */
export function formatWorkPriceLine(project: WorkProject): string | null {
  const parts: string[] = [];

  if (project.priceLabel) {
    parts.push(project.priceLabel);
  }

  if (project.duration) {
    parts.push(project.duration);
  }

  if (parts.length === 0) {
    return null;
  }

  return parts.join(" • ");
}

/** Legacy summary для объектов без расширенных полей. */
export function formatWorkSummaryLine(project: WorkProject): string {
  const specs = formatWorkSpecsLine(project);
  const price = formatWorkPriceLine(project);

  if (price) {
    return `${specs}\n${price}`;
  }

  return specs;
}

export function hasDetailedWorkCard(project: WorkProject): boolean {
  return Boolean(
    project.priceLabel ||
      project.material ||
      project.duration ||
      project.imageAlt,
  );
}
