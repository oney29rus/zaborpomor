import Link from "next/link";
import {
  SECTION_CONTAINER,
  SECTION_CONTENT_MT,
  SECTION_DESC,
  SECTION_LABEL,
  SECTION_LINK,
  SECTION_PY,
  SECTION_TITLE,
} from "@/lib/section-styles";
import {
  ProcessTimelineDesktop,
  ProcessTimelineMobile,
} from "./ProcessTimeline";

export function ProcessSection() {
  return (
    <section className={`bg-surface ${SECTION_PY}`}>
      <div className={SECTION_CONTAINER}>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
          <div className="max-w-2xl">
            <p className={SECTION_LABEL}>Как мы работаем</p>
            <h2 className={SECTION_TITLE}>От заявки до готового забора</h2>
            <p className={SECTION_DESC}>
              Берём весь процесс на себя — вам остаётся принять готовую работу.
            </p>
          </div>

          <Link href="#calculator" className={`shrink-0 lg:pb-1 ${SECTION_LINK}`}>
            Рассчитать стоимость →
          </Link>
        </div>

        <div className={SECTION_CONTENT_MT}>
          <ProcessTimelineDesktop />
          <ProcessTimelineMobile />
        </div>
      </div>
    </section>
  );
}
