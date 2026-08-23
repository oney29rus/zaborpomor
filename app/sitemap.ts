import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { getIndexableRoutes } from "@/lib/seo/indexable-routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return getIndexableRoutes().map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority:
      path === "/"
        ? 1
        : path.includes("/zabory/") ||
            path.includes("/arhangelsk") ||
            path.includes("/severodvinsk") ||
            path.includes("/novodvinsk") ||
            path.includes("/holmogory") ||
            path.includes("/primorskiy-rayon") ||
            path === "/raboty/"
          ? 0.9
          : path.startsWith("/raboty/")
            ? 0.7
            : 0.8,
  }));
}
