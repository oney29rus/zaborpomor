import Image from "next/image";
import Link from "next/link";
import type { FenceCatalogItem } from "@/lib/catalog/fence-types";

type FenceTypeCardProps = {
  item: FenceCatalogItem;
};

function FenceImage({ item }: { item: FenceCatalogItem }) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-[16/10]">
      <Image
        src={item.image}
        alt={item.imageAlt}
        fill
        sizes="(max-width: 1024px) 100vw, 33vw"
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

export function FenceTypeCard({ item }: FenceTypeCardProps) {
  return (
    <article className="flex flex-col">
      <Link href={item.href} className="group block">
        <FenceImage item={item} />
      </Link>

      <div className="mt-3 flex flex-1 flex-col sm:mt-4">
        <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-[1.375rem]">
          <Link
            href={item.href}
            className="transition-colors hover:text-accent"
          >
            {item.title}
          </Link>
        </h3>

        <p className="mt-1 text-base font-semibold text-foreground/90">
          {item.priceLabel}
        </p>

        <p className="mt-2 text-sm leading-relaxed text-muted sm:text-[0.9375rem]">
          {item.description}
        </p>

        <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 sm:mt-4">
          <Link
            href={item.href}
            className="text-sm font-semibold text-foreground transition-colors hover:text-accent"
          >
            Подробнее →
          </Link>
          <Link
            href="#calculator"
            className="inline-flex min-h-10 items-center rounded-lg border border-border px-4 text-sm font-semibold text-foreground transition-colors hover:border-muted hover:bg-background"
          >
            Рассчитать стоимость
          </Link>
        </div>
      </div>
    </article>
  );
}
