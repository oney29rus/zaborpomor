import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { normalizeInternalPath } from "@/lib/urls";
type CreatePageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

function normalizePageTitle(title: string): string {
  const suffix = ` | ${SITE_NAME}`;

  if (title.endsWith(suffix)) {
    return title;
  }

  return `${title}${suffix}`;
}

export function createPageMetadata({
  title,
  description,
  path,
  image,
}: CreatePageMetadataOptions): Metadata {
  const normalizedTitle = normalizePageTitle(title);
  const canonicalPath = normalizeInternalPath(path);

  return {
    title: {
      absolute: normalizedTitle,
    },
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: normalizedTitle,
      description,
      url: canonicalPath,
      type: "website",
      ...(image
        ? {
            images: [
              {
                url: image.startsWith("http") ? image : `${SITE_URL}${image}`,
              },
            ],
          }
        : {}),
    },
  };
}

export function createFencePageTitle(pageTitle: string): string {
  return `${pageTitle} | ${SITE_NAME}`;
}
