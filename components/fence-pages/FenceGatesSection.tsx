import Link from "next/link";
import type { FencePageGateOption } from "@/lib/fence-pages/types";
import {
  SECTION_CONTAINER,
  SECTION_CONTENT_MT,
  SECTION_DESC,
  FENCE_SECTION_PY,
  SECTION_TITLE,
} from "@/lib/section-styles";

type FenceGatesSectionProps = {
  title: string;
  intro?: string;
  items: FencePageGateOption[];
};

function GateCard({ item }: { item: FencePageGateOption }) {
  const content = (
    <>
      <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {item.description}
      </p>
      {item.priceNote ? (
        <p className="mt-2 text-sm font-semibold text-foreground/90">
          {item.priceNote}
        </p>
      ) : null}
    </>
  );

  if (item.href && item.published) {
    return (
      <Link
        href={item.href}
        className="block rounded-xl border border-border bg-surface px-4 py-4 transition-colors hover:border-muted lg:px-5 lg:py-5"
      >
        {content}
      </Link>
    );
  }

  return (
    <article className="rounded-xl border border-border bg-surface px-4 py-4 lg:px-5 lg:py-5">
      {content}
    </article>
  );
}

export function FenceGatesSection({
  title,
  intro,
  items,
}: FenceGatesSectionProps) {
  return (
    <section className={`bg-surface ${FENCE_SECTION_PY}`}>
      <div className={SECTION_CONTAINER}>
        <div className="max-w-2xl">
          <h2 className={SECTION_TITLE.replace("mt-2 ", "")}>{title}</h2>
          {intro ? <p className={SECTION_DESC}>{intro}</p> : null}
        </div>

        <ul
          className={`${SECTION_CONTENT_MT} grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5`}
        >
          {items.map((item) => (
            <li key={item.title}>
              <GateCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
