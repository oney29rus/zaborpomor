"use client";

import Image from "next/image";
import { useState } from "react";
import { ImageLightbox } from "@/components/ui/ImageLightbox";
import type { WorkProject } from "@/lib/works/types";

type ProjectCardImageProps = {
  project: WorkProject;
  compact?: boolean;
  enableLightbox?: boolean;
  className?: string;
};

export function ProjectCardImage({
  project,
  compact = false,
  enableLightbox = false,
  className = "",
}: ProjectCardImageProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const image = project.images[0];
  const aspectClass = compact ? "aspect-[5/3]" : "aspect-[4/3]";
  const rootClassName =
    `relative block w-full overflow-hidden rounded-2xl ${aspectClass} ${className}`.trim();

  if (!image) {
    return (
      <div
        className={`${rootClassName} flex items-center justify-center bg-slate-100`}
        role="img"
        aria-label={`${project.title} — фото скоро будет добавлено`}
      >
        <span className="max-w-[11rem] px-4 text-center text-sm leading-relaxed text-muted">
          Фото объекта скоро будет добавлено
        </span>
      </div>
    );
  }

  const alt = project.imageAlt ?? project.title;
  const imageStyle = project.imageObjectPosition
    ? { objectPosition: project.imageObjectPosition }
    : undefined;

  if (enableLightbox) {
    return (
      <>
        <button
          type="button"
          onClick={() => setLightboxOpen(true)}
          className={`${rootClassName} transition-opacity hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent`}
          aria-label={`Увеличить фото: ${alt}`}
        >
          <Image
            src={image}
            alt={alt}
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover"
            style={imageStyle}
          />
        </button>

        {lightboxOpen ? (
          <ImageLightbox
            src={image}
            alt={alt}
            onClose={() => setLightboxOpen(false)}
          />
        ) : null}
      </>
    );
  }

  return (
    <div className={rootClassName}>
      <Image
        src={image}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 85vw, 33vw"
        className="object-cover"
        style={imageStyle}
      />
    </div>
  );
}
