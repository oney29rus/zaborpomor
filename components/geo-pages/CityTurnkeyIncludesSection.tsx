import {
  FENCE_SECTION_PY,
  SECTION_CONTAINER,
  SECTION_CONTENT_MT,
  SECTION_TITLE,
} from "@/lib/section-styles";

type CityTurnkeyIncludesSectionProps = {
  title: string;
  items: readonly string[];
  note: string;
  className?: string;
};

export function CityTurnkeyIncludesSection({
  title,
  items,
  note,
  className = "bg-surface",
}: CityTurnkeyIncludesSectionProps) {
  return (
    <section className={`${className} ${FENCE_SECTION_PY}`}>
      <div className={SECTION_CONTAINER}>
        <h2 className={`max-w-2xl ${SECTION_TITLE.replace("mt-2 ", "")}`}>
          {title}
        </h2>

        <div className={`${SECTION_CONTENT_MT} max-w-3xl`}>
          <ol className="space-y-3">
            {items.map((item, index) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm leading-relaxed text-foreground/90 sm:text-base"
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent"
                >
                  {index + 1}
                </span>
                {item}
              </li>
            ))}
          </ol>

          <p className="mt-4 text-sm leading-relaxed text-muted">{note}</p>
        </div>
      </div>
    </section>
  );
}
