import { SITE_URL } from "@/lib/constants";

/** Internal path without trailing slash, except root `/`. Preserves query and hash. */
export function normalizeInternalPath(path: string): string {
  if (!path || path === "/") {
    return "/";
  }

  const hashIndex = path.indexOf("#");
  const queryIndex = path.indexOf("?");
  const pathnameEnd = Math.min(
    hashIndex === -1 ? path.length : hashIndex,
    queryIndex === -1 ? path.length : queryIndex,
  );
  const pathname = path.slice(0, pathnameEnd);
  const suffix = path.slice(pathnameEnd);

  if (!pathname || pathname === "/") {
    return suffix ? `/${suffix}` : "/";
  }

  const normalizedPathname = pathname.replace(/\/+$/, "");
  return `${normalizedPathname}${suffix}`;
}

/** Absolute URL for sitemap, canonical, and JSON-LD. Root keeps trailing slash. */
export function toAbsoluteUrl(path: string): string {
  const normalized = normalizeInternalPath(path);

  if (normalized === "/") {
    return `${SITE_URL}/`;
  }

  return `${SITE_URL}${normalized}`;
}

export function workProjectPath(slug: string): string {
  return `/raboty/${slug}`;
}
