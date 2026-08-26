import Image from "next/image";
import Link from "next/link";
import type { FenceCatalogItem } from "@/lib/catalog/fence-types";

type FenceTypeCardProps = {
  item: FenceCatalogItem;
  compactMobile?: boolean;
};

function FenceImage({
  item,
  compactMobile,
}: {
  item: FenceCatalogItem;
  compactMobile?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl lg:rounded-2xl ${
        compactMobile
          ? "aspect-[4/3] lg:aspect-[16/10]"
          : "aspect-[4/3] lg:aspect-[16/10]"
      }`}
    >
      <Image
        src={item.image}
        alt={item.imageAlt}
        fill
        sizes="(max-width: 1024px) 50vw, 33vw"
        className="object-cover"
        style={
          item.imageObjectPosition
            ? { objectPosition: item.imageObjectPosition }
            : undefined
        }
      />
    </div>
  );
}

export function FenceTypeCard({ item, compactMobile = false }: FenceTypeCardProps) {
  return (
    <article className="flex flex-col">
      <Link href={item.href} className="group block">
        <FenceImage item={item} compactMobile={compactMobile} />
      </Link>

      <div className={`flex flex-1 flex-col ${compactMobile ? "mt-2 lg:mt-4" : "mt-3 sm:mt-4"}`}>
        <h3
          className={`font-bold tracking-tight text-foreground ${
            compactMobile
              ? "text-sm leading-snug sm:text-xl lg:text-[1.375rem]"
              : "text-xl sm:text-[1.375rem]"
          }`}
        >
          <Link
            href={item.href}
            className="transition-colors hover:text-accent"
          >
            {item.title}
          </Link>
        </h3>

        <p
          className={`font-semibold text-foreground/90 ${
            compactMobile ? "mt-0.5 text-sm sm:mt-1 sm:text-base" : "mt-1 text-base"
          }`}
        >
          {item.priceLabel}
        </p>

        <p
          className={`leading-relaxed text-muted ${
            compactMobile
              ? "mt-1 hidden text-sm sm:mt-2 sm:block sm:text-[0.9375rem] lg:block"
              : "mt-2 text-sm sm:text-[0.9375rem]"
          }`}
        >
          {item.description}
        </p>

        <div
          className={`flex flex-wrap items-center ${
            compactMobile
              ? "mt-1.5 gap-x-3 gap-y-1 sm:mt-3 sm:gap-x-5 sm:gap-y-2 lg:mt-4"
              : "mt-3 gap-x-5 gap-y-2 sm:mt-4"
          }`}
        >
          <Link
            href={item.href}
            className="text-xs font-semibold text-foreground transition-colors hover:text-accent sm:text-sm"
          >
            Подробнее →
          </Link>
          <Link
            href="#calculator"
            className={`inline-flex items-center rounded-lg border border-border font-semibold text-foreground transition-colors hover:border-muted hover:bg-background ${
              compactMobile
                ? "hidden min-h-10 px-3 text-xs sm:inline-flex sm:px-4 sm:text-sm lg:inline-flex"
                : "min-h-10 px-4 text-sm"
            }`}
          >
            Рассчитать стоимость
          </Link>
        </div>
      </div>
    </article>
  );
}
