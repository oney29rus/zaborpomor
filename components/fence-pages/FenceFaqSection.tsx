import { FaqAccordion } from "@/components/faq/FaqAccordion";
import type { FencePageFaq } from "@/lib/fence-pages/types";
import {
  SECTION_CONTAINER,
  SECTION_CONTENT_MT,
  FENCE_SECTION_PY,
  SECTION_TITLE,
} from "@/lib/section-styles";

type FenceFaqSectionProps = {
  faq: FencePageFaq;
  className?: string;
};

export function FenceFaqSection({
  faq,
  className = "bg-surface",
}: FenceFaqSectionProps) {
  return (
    <section className={`${className} ${FENCE_SECTION_PY}`}>
      <div className={SECTION_CONTAINER}>
        <div className="max-w-2xl">
          <h2 className={SECTION_TITLE.replace("mt-2 ", "")}>{faq.title}</h2>
        </div>

        <div className={`${SECTION_CONTENT_MT} max-w-3xl`}>
          <FaqAccordion
            items={faq.items}
            defaultOpenId={faq.items[0]?.id}
          />
        </div>
      </div>
    </section>
  );
}
