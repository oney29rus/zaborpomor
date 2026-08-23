import Image from "next/image";
import type { FencePageVariant } from "@/lib/fence-pages/types";
import {
  SECTION_CONTAINER,
  SECTION_CONTENT_MT,
  FENCE_SECTION_PY,
  SECTION_TITLE,
} from "@/lib/section-styles";

type FenceVariantsSectionProps = {
  title: string;
  items: FencePageVariant[];
  intro?: string;
};

export function FenceVariantsSection({
  title,
  items,
  intro,
}: FenceVariantsSectionProps) {
  return (
    <section className={`bg-background ${FENCE_SECTION_PY}`}>
      <div className={SECTION_CONTAINER}>
        <h2 className={`max-w-2xl ${SECTION_TITLE.replace("mt-2 ", "")}`}>
          {title}
        </h2>
        {intro ? (
          <p className="mt-2 max-w-3xl text-base leading-relaxed text-muted">
            {intro}
          </p>
        ) : null}

        <ul
          className={`${SECTION_CONTENT_MT} grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5`}
        >
          {items.map((item) => (
            <li
              key={item.title}
              className="overflow-hidden rounded-xl border border-border bg-surface"
            >
              {item.image ? (
                <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-border">
                  <Image
                    src={item.image}
                    alt={item.imageAlt ?? item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                    style={
                      item.imageObjectPosition
                        ? { objectPosition: item.imageObjectPosition }
                        : undefined
                    }
                  />
                </div>
              ) : null}
              <div className="px-4 py-4 lg:px-5 lg:py-5">
              <h3 className="text-base font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
              {item.priceNote ? (
                <p className="mt-2 text-sm font-semibold text-foreground/90">
                  {item.priceNote}
                </p>
              ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
