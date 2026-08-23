"use client";

import Image from "next/image";
import { useState } from "react";
import { ImageLightbox } from "@/components/ui/ImageLightbox";
import { getWorkProjectHeroAlt } from "@/lib/works/project-detail";
import type { WorkProject } from "@/lib/works/types";

type WorkProjectGalleryProps = {
  project: WorkProject;
};

export function WorkProjectGallery({ project }: WorkProjectGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const images = project.images;
  const alt = getWorkProjectHeroAlt(project);

  if (images.length === 0) {
    return null;
  }

  if (images.length === 1) {
    return (
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border lg:aspect-[5/4]">
        <Image
          src={images[0]}
          alt={alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
          style={
            project.imageObjectPosition
              ? { objectPosition: project.imageObjectPosition }
              : undefined
          }
        />
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {images.map((image, index) => (
          <button
            key={`${project.slug}-${index}`}
            type="button"
            onClick={() => setLightboxIndex(index)}
            className={`relative overflow-hidden rounded-xl border border-border transition-opacity hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
              index === 0
                ? "col-span-2 aspect-[16/10]"
                : "aspect-[4/3]"
            }`}
            aria-label={`Увеличить фото ${index + 1}: ${alt}`}
          >
            <Image
              src={image}
              alt={`${alt} — фото ${index + 1}`}
              fill
              priority={index === 0}
              sizes={
                index === 0
                  ? "(max-width: 1024px) 100vw, 50vw"
                  : "(max-width: 640px) 50vw, 25vw"
              }
              className="object-cover"
              style={
                index === 0 && project.imageObjectPosition
                  ? { objectPosition: project.imageObjectPosition }
                  : undefined
              }
            />
          </button>
        ))}
      </div>

      {lightboxIndex !== null ? (
        <ImageLightbox
          src={images[lightboxIndex]}
          alt={`${alt} — фото ${lightboxIndex + 1}`}
          onClose={() => setLightboxIndex(null)}
        />
      ) : null}
    </>
  );
}
