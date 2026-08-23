import type { WorkProject } from "./types";
import { formatWorkLocation } from "./format";

export type WorkProjectSpecItem = {
  label: string;
  value: string;
};

function formatMeters(value: number): string {
  return `${value.toString().replace(".", ",")} м`;
}

function buildHaystack(project: WorkProject): string {
  return [
    project.configuration,
    project.description,
    project.title,
    project.gift,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

/** Ворота — только если явно указаны в данных объекта. */
export function deriveWorkProjectGate(project: WorkProject): string | null {
  const haystack = buildHaystack(project);

  if (haystack.includes("без ворот")) {
    return "Без ворот";
  }

  if (haystack.includes("откатн") && haystack.includes("ворот")) {
    return "Откатные";
  }

  if (haystack.includes("распашн") && haystack.includes("ворот")) {
    return "Распашные";
  }

  if (/\d+\s*ворот/.test(haystack) || haystack.includes("ворота,")) {
    return "Есть";
  }

  if (haystack.includes("ворота") || haystack.includes("ворот")) {
    return "Есть";
  }

  return null;
}

/** Калитка — только если явно указана в данных объекта. */
export function deriveWorkProjectWicket(project: WorkProject): string | null {
  const haystack = buildHaystack(project);

  if (haystack.includes("калитка — в подарок") || haystack.includes("калитка в подарок") || haystack.includes("калитку в подарок")) {
    return "В подарок";
  }

  if (haystack.includes("калитка") || haystack.includes("калитку")) {
    return "Есть";
  }

  return null;
}

/** Характеристики объекта — только заполненные поля из данных. */
export function getWorkProjectSpecs(project: WorkProject): WorkProjectSpecItem[] {
  const items: WorkProjectSpecItem[] = [];

  if (project.fenceType) {
    items.push({ label: "Тип забора", value: project.fenceType });
  }

  const location = formatWorkLocation(project);

  if (location !== "Населённый пункт уточняется") {
    items.push({ label: "Место", value: location });
  }

  if (project.length !== null) {
    items.push({ label: "Длина", value: formatMeters(project.length) });
  }

  if (project.height !== null) {
    items.push({ label: "Высота", value: formatMeters(project.height) });
  }

  if (project.priceLabel) {
    items.push({ label: "Стоимость за метр", value: project.priceLabel });
  }

  if (project.duration) {
    items.push({ label: "Срок монтажа", value: project.duration });
  }

  const gate = deriveWorkProjectGate(project);

  if (gate) {
    items.push({ label: "Ворота", value: gate });
  }

  const wicket = deriveWorkProjectWicket(project);

  if (wicket) {
    items.push({ label: "Калитка", value: wicket });
  }

  if (project.configuration) {
    items.push({ label: "Комплектация", value: project.configuration });
  }

  if (project.gift) {
    items.push({ label: "Подарок", value: project.gift });
  }

  if (project.color) {
    items.push({ label: "Цвет", value: project.color });
  }

  if (project.gap) {
    items.push({ label: "Зазор", value: project.gap });
  }

  if (
    project.material &&
    project.material.toLowerCase() !== project.fenceType.toLowerCase()
  ) {
    items.push({ label: "Материал", value: project.material });
  }

  return items;
}

function appendSentence(parts: string[], sentence: string): void {
  if (sentence.trim()) {
    parts.push(sentence.trim());
  }
}

function pickVariant(seed: string, count: number): number {
  let hash = 0;

  for (let index = 0; index < seed.length; index += 1) {
    hash = (hash + seed.charCodeAt(index)) % count;
  }

  return hash;
}

function formatLocationPhrase(project: WorkProject): string {
  const location = formatWorkLocation(project);

  if (location === "Населённый пункт уточняется") {
    return "";
  }

  if (location.startsWith("СНТ") || location.startsWith("снт")) {
    return ` в ${location}`;
  }

  return ` в ${location}`;
}

function materialPhrase(project: WorkProject): string {
  if (project.material) {
    return project.material;
  }

  return project.fenceType.toLowerCase();
}

/** Краткое описание только из реальных полей проекта. */
export function buildWorkProjectNarrative(project: WorkProject): string {
  if (project.description?.trim()) {
    return project.description.trim();
  }

  const parts: string[] = [];
  const locationPhrase = formatLocationPhrase(project);
  const variant = pickVariant(project.slug, 4);

  if (project.length !== null && project.height !== null) {
    const openers = [
      `На объекте${locationPhrase} установили ${project.length} метров забора из ${materialPhrase(project)} высотой ${formatMeters(project.height)}.`,
      `В${locationPhrase} смонтировали ${project.length} м забора высотой ${formatMeters(project.height)} из ${materialPhrase(project)}.`,
      `Здесь${locationPhrase} выполнили монтаж ${project.length} метров ${project.fenceType.toLowerCase()} высотой ${formatMeters(project.height)}.`,
      `Для этого участка${locationPhrase} установили забор длиной ${project.length} м и высотой ${formatMeters(project.height)}.`,
    ];
    appendSentence(parts, openers[variant] ?? openers[0]);
  } else if (project.length !== null) {
    appendSentence(
      parts,
      `Установили ${project.length} метров забора${locationPhrase}.`,
    );
  } else if (project.height !== null) {
    appendSentence(
      parts,
      `Забор${locationPhrase} высотой ${formatMeters(project.height)}.`,
    );
  }

  if (project.gap) {
    appendSentence(
      parts,
      `Штакетник смонтирован с зазором ${project.gap}.`,
    );
  }

  if (project.configuration && !project.configuration.toLowerCase().includes("ворот")) {
    appendSentence(parts, `${project.configuration}.`);
  }

  if (project.duration) {
    const closers = [
      `Работы выполнили за ${project.duration}.`,
      `Монтаж занял ${project.duration}.`,
      `Уложились в ${project.duration}.`,
    ];
    appendSentence(parts, closers[pickVariant(project.slug + "d", 3)] ?? closers[0]);
  }

  if (project.gift) {
    appendSentence(
      parts,
      `${project.gift.charAt(0).toUpperCase()}${project.gift.slice(1)}.`,
    );
  }

  if (parts.length === 0 && project.fenceType) {
    return `Выполненный объект: ${project.fenceType}${locationPhrase}.`;
  }

  return parts.join(" ");
}

export function getWorkProjectHeroAlt(project: WorkProject): string {
  return project.imageAlt ?? project.title;
}
