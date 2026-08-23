import type { WorkProject } from "./types";

export type FencePageLink = {
  href: string;
  label: string;
};

const FENCE_ROUTE_BY_CATEGORY: Record<
  Exclude<WorkProject["filterCategory"], never>,
  FencePageLink
> = {
  profnastil: {
    href: "/zabory/profnastil/",
    label: "Забор из профнастила",
  },
  metalloshtaketnik: {
    href: "/zabory/metalloshtaketnik/",
    label: "Забор из металлоштакетника",
  },
  "3d": {
    href: "/zabory/3d-setka/",
    label: "Забор из 3D-сетки",
  },
  setka: {
    href: "/zabory/svarnaya-setka/",
    label: "Забор из сварной сетки",
  },
  "setka-pvh": {
    href: "/zabory/svarnaya-setka-pvh/",
    label: "Забор из сварной сетки ПВХ",
  },
  "derevyannyy-shtaketnik": {
    href: "/zabory/derevyannyy-shtaketnik/",
    label: "Деревянный забор из штакетника",
  },
};

function isPvhSetkaProject(project: WorkProject): boolean {
  if (project.id.includes("pvh") || project.slug.includes("pvh")) {
    return true;
  }

  const haystack = `${project.material ?? ""} ${project.fenceType}`.toLowerCase();

  return haystack.includes("пвх");
}

/** Ссылка на товарную страницу вида забора для объекта. */
export function getFencePageLink(project: WorkProject): FencePageLink {
  if (project.filterCategory === "setka" && isPvhSetkaProject(project)) {
    return {
      href: "/zabory/svarnaya-setka-pvh/",
      label: "Забор из сварной сетки ПВХ",
    };
  }

  return FENCE_ROUTE_BY_CATEGORY[project.filterCategory];
}

export function getFenceCalculatorHref(project: WorkProject): string {
  return `${getFencePageLink(project).href}#calculator`;
}
