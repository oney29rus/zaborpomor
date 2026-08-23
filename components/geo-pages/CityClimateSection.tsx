import Link from "next/link";
import {
  FENCE_SECTION_PY,
  SECTION_CONTAINER,
  SECTION_CONTENT_MT,
  SECTION_TITLE,
} from "@/lib/section-styles";

type CityClimateSectionProps = {
  title: string;
  points: readonly {
    title: string;
    description: string;
  }[];
  footer: string;
  link?: {
    href: string;
    label: string;
  };
  className?: string;
};

export function CityClimateSection({
  title,
  points,
  footer,
  link,
  className = "bg-background",
}: CityClimateSectionProps) {
  return (
    <section className={`${className} ${FENCE_SECTION_PY}`}>
      <div className={SECTION_CONTAINER}>
        <h2 className={`max-w-2xl ${SECTION_TITLE.replace("mt-2 ", "")}`}>
          {title}
        </h2>

        <div className={`${SECTION_CONTENT_MT} max-w-3xl`}>
          <ul className="grid gap-4 sm:grid-cols-2">
            {points.map((point) => (
              <li
                key={point.title}
                className="rounded-xl border border-border bg-surface px-4 py-4 sm:px-5 sm:py-5"
              >
                <h3 className="text-base font-semibold text-foreground">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {point.description}
                </p>
              </li>
            ))}
          </ul>

          <p className="mt-4 text-sm leading-relaxed text-muted">
            {footer}
            {link ? (
              <>
                {" "}
                <Link
                  href={link.href}
                  className="font-semibold text-accent transition-colors hover:text-accent-hover"
                >
                  {link.label}
                </Link>
                .
              </>
            ) : null}
          </p>
        </div>
      </div>
    </section>
  );
}
