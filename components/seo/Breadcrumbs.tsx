import { InternalLink } from "@/components/ui/InternalLink";
import type { FencePageBreadcrumb } from "@/lib/fence-pages/types";

type BreadcrumbsProps = {
  items: FencePageBreadcrumb[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Хлебные крошки">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.href}-${item.label}`} className="flex items-center gap-2">
              {index > 0 ? (
                <span aria-hidden="true" className="text-border">
                  →
                </span>
              ) : null}
              {isLast ? (
                <span aria-current="page" className="text-foreground/80">
                  {item.label}
                </span>
              ) : (
                <InternalLink
                  href={item.href}
                  className="transition-colors hover:text-accent"
                >
                  {item.label}
                </InternalLink>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
