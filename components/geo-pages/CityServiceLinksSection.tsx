import Link from "next/link";
import {
  FENCE_SECTION_PY,
  SECTION_CONTAINER,
  SECTION_CONTENT_MT,
  SECTION_LINK,
  SECTION_TITLE,
} from "@/lib/section-styles";

type CityServiceLinksSectionProps = {
  title: string;
  links: readonly {
    label: string;
    href: string;
    description: string;
  }[];
  className?: string;
};

export function CityServiceLinksSection({
  title,
  links,
  className = "bg-background",
}: CityServiceLinksSectionProps) {
  if (links.length === 0) {
    return null;
  }

  return (
    <section className={`${className} ${FENCE_SECTION_PY}`}>
      <div className={SECTION_CONTAINER}>
        <h2 className={`max-w-2xl ${SECTION_TITLE.replace("mt-2 ", "")}`}>
          {title}
        </h2>

        <ul
          className={`${SECTION_CONTENT_MT} grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5`}
        >
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="flex h-full flex-col rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent/40"
              >
                <h3 className="text-base font-bold leading-snug text-foreground">
                  {link.label}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {link.description}
                </p>
                <span className={`mt-3 text-sm ${SECTION_LINK}`}>
                  Подробнее →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
