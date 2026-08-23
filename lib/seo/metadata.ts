import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
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

  return {
    title: {
      absolute: normalizedTitle,
    },
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: normalizedTitle,
      description,
      url: path,
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
