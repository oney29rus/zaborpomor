import {
  FENCE_SECTION_PY,
  SECTION_CONTAINER,
  SECTION_CONTENT_MT,
  SECTION_TITLE,
} from "@/lib/section-styles";

type MountRequirementsSectionProps = {
  title: string;
  items: string[];
  note: string;
};

export function MountRequirementsSection({
  title,
  items,
  note,
}: MountRequirementsSectionProps) {
  return (
    <section className={`bg-surface ${FENCE_SECTION_PY}`}>
      <div className={SECTION_CONTAINER}>
        <h2 className={`max-w-2xl ${SECTION_TITLE.replace("mt-2 ", "")}`}>
          {title}
        </h2>

        <ul
          className={`${SECTION_CONTENT_MT} grid gap-2 sm:grid-cols-2 lg:gap-x-8 lg:gap-y-2`}
        >
          {items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-sm text-foreground/90 sm:text-base"
            >
              <span
                aria-hidden="true"
                className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent"
              />
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted">
          {note}
        </p>
      </div>
    </section>
  );
}
