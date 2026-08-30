import { getWorkProjectRoutes } from "@/lib/works/project-seo";

/** Статические индексируемые маршруты (без динамических /raboty/{slug}/). */
export const STATIC_INDEXABLE_ROUTES = [
  "/",
  "/arhangelsk/",
  "/severodvinsk/",
  "/severodvinsk/zabory/profnastil/",
  "/severodvinsk/zabory/metalloshtaketnik/",
  "/severodvinsk/vorota/otkatnye/",
  "/severodvinsk/vorota/raspashnye/",
  "/novodvinsk/",
  "/holmogory/",
  "/primorskiy-rayon/",
  "/raboty/",
  "/zabory/profnastil/",
  "/zabory/metalloshtaketnik/",
  "/zabory/3d-setka/",
  "/zabory/svarnaya-setka/",
  "/zabory/svarnaya-setka-pvh/",
  "/zabory/derevyannyy-shtaketnik/",
  "/uslugi/karkas-zabora/",
  "/uslugi/vintovye-svai/",
  "/uslugi/montazh-zabora-iz-materiala-zakazchika/",
  "/vorota/otkatnye/",
  "/vorota/raspashnye/",
] as const;

export type StaticIndexableRoute = (typeof STATIC_INDEXABLE_ROUTES)[number];

/** Все индексируемые URL, включая страницы объектов. */
export function getIndexableRoutes(): string[] {
  return [...STATIC_INDEXABLE_ROUTES, ...getWorkProjectRoutes()];
}

/** @deprecated Используйте getIndexableRoutes() */
export const INDEXABLE_ROUTES = STATIC_INDEXABLE_ROUTES;
