import { InternalLink } from "@/components/ui/InternalLink";
import type { FencePageRelatedFences } from "@/lib/fence-pages/types";
import {
  FENCE_SECTION_PY,
  SECTION_CONTAINER,
  SECTION_LINK,
} from "@/lib/section-styles";

type FenceRelatedLinksProps = {
  relatedFences: FencePageRelatedFences;
};

export function FenceRelatedLinks({ relatedFences }: FenceRelatedLinksProps) {
  return (
    <section className={`border-y border-border bg-background ${FENCE_SECTION_PY}`}>
      <div className={SECTION_CONTAINER}>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <p className="text-sm font-semibold text-foreground">
            {relatedFences.title}
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {relatedFences.links.map((link) => (
              <li key={link.href}>
                <InternalLink href={link.href} className={`text-sm ${SECTION_LINK}`}>
                  {link.label} →
                </InternalLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
