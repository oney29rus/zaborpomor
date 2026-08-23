import Link from "next/link";
import {
  FENCE_SECTION_PY,
  SECTION_CONTAINER,
  SECTION_LINK,
  SECTION_TITLE,
} from "@/lib/section-styles";

type CityOtherCitiesSectionProps = {
  title: string;
  links: {
    label: string;
    href: string;
    published: boolean;
  }[];
  className?: string;
};

export function CityOtherCitiesSection({
  title,
  links,
  className = "bg-background",
}: CityOtherCitiesSectionProps) {
  if (links.length === 0) {
    return null;
  }

  return (
    <section className={`${className} ${FENCE_SECTION_PY}`}>
      <div className={SECTION_CONTAINER}>
        <h2 className={SECTION_TITLE.replace("mt-2 ", "")}>{title}</h2>

        <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
          {links.map((link) => (
            <li key={link.label}>
              {link.published ? (
                <Link href={link.href} className={SECTION_LINK}>
                  {link.label} →
                </Link>
              ) : (
                <span className="text-base font-semibold text-muted">
                  {link.label}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
