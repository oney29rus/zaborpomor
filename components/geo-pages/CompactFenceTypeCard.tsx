import Image from "next/image";
import Link from "next/link";
import type { FenceCatalogItem } from "@/lib/catalog/fence-types";

type CompactFenceTypeCardProps = {
  item: FenceCatalogItem;
};

function CompactFenceImage({ item }: { item: FenceCatalogItem }) {
  return (
    <div className="relative aspect-[3/2] overflow-hidden rounded-lg border border-border/60">
      <Image
        src={item.image}
        alt={item.imageAlt}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
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

export function CompactFenceTypeCard({ item }: CompactFenceTypeCardProps) {
  return (
    <article className="flex h-full flex-col">
      <Link href={item.href} className="block">
        <CompactFenceImage item={item} />
      </Link>

      <div className="mt-2.5 flex flex-1 flex-col">
        <h3 className="text-sm font-bold leading-snug text-foreground sm:text-base">
          <Link
            href={item.href}
            className="transition-colors hover:text-accent"
          >
            {item.title}
          </Link>
        </h3>

        <p className="mt-0.5 text-sm font-semibold text-foreground/90">
          {item.priceLabel}
        </p>

        <p className="mt-1 line-clamp-2 text-xs leading-snug text-muted sm:text-sm">
          {item.description}
        </p>

        <Link
          href={item.href}
          className="mt-auto inline-flex pt-2 text-xs font-semibold text-accent transition-colors hover:text-accent-hover sm:text-sm"
        >
          Подробнее →
        </Link>
      </div>
    </article>
  );
}
