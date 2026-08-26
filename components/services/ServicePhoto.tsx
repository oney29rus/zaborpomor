import Image from "next/image";
import { SERVICE_CARD_IMAGE_OBJECT_POSITION } from "@/lib/services/assets";
import {
  getPublicImageFilename,
  publicImageExists,
} from "@/lib/services/images";

type ServicePhotoProps = {
  src: string;
  alt: string;
  /** Компактная карточка каталога */
  variant?: "card" | "hero";
  compactMobile?: boolean;
  priority?: boolean;
  className?: string;
  objectPosition?: string;
};

const VARIANT_CLASSES = {
  card: "relative w-full aspect-video overflow-hidden rounded-xl",
  hero:
    "relative aspect-[4/3] overflow-hidden rounded-2xl border border-border lg:aspect-[5/4]",
} as const;

export function ServicePhoto({
  src,
  alt,
  variant = "card",
  compactMobile = false,
  priority = false,
  className = "",
  objectPosition,
}: ServicePhotoProps) {
  const compactCardClass =
    compactMobile && variant === "card"
      ? "max-lg:aspect-[3/2] max-lg:rounded-lg"
      : "";
  const containerClass =
    `${VARIANT_CLASSES[variant]} ${compactCardClass} ${className}`.trim();
  const filename = getPublicImageFilename(src);
  const resolvedObjectPosition =
    objectPosition ??
    SERVICE_CARD_IMAGE_OBJECT_POSITION[
      src as keyof typeof SERVICE_CARD_IMAGE_OBJECT_POSITION
    ];

  if (!publicImageExists(src)) {
    return (
      <div
        className={`${containerClass} flex flex-col items-center justify-center bg-slate-100 px-3 text-center`}
        role="img"
        aria-label={`${alt} — фото скоро будет добавлено`}
      >
        <span className="text-sm leading-relaxed text-muted">
          Фото скоро будет добавлено
        </span>
        <span className="mt-1.5 font-mono text-[0.6875rem] text-muted/80">
          {filename}
        </span>
      </div>
    );
  }

  return (
    <div className={containerClass}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={
          variant === "card"
            ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            : "(max-width: 1024px) 100vw, 50vw"
        }
        className="h-full w-full object-cover"
        style={
          resolvedObjectPosition
            ? { objectPosition: resolvedObjectPosition }
            : undefined
        }
      />
    </div>
  );
}
