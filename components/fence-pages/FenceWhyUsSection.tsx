import type { FencePageWhyPoint } from "@/lib/fence-pages/types";
import {
  SECTION_CONTAINER,
  SECTION_CONTENT_MT,
  FENCE_SECTION_PY,
  SECTION_TITLE,
} from "@/lib/section-styles";

type FenceWhyUsSectionProps = {
  title: string;
  points: FencePageWhyPoint[];
  className?: string;
};

export function FenceWhyUsSection({
  title,
  points,
  className = "bg-green-background",
}: FenceWhyUsSectionProps) {
  return (
    <section className={`${className} ${FENCE_SECTION_PY}`}>
      <div className={SECTION_CONTAINER}>
        <h2 className={`max-w-2xl ${SECTION_TITLE.replace("mt-2 ", "")}`}>
          {title}
        </h2>

        <ul
          className={`${SECTION_CONTENT_MT} grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6`}
        >
          {points.map((point) => (
            <li key={point.title}>
              <h3 className="text-base font-semibold text-foreground">
                {point.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                {point.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
