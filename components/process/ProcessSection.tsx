import Link from "next/link";
import {
  HOME_SECTION_CONTENT_MT,
  HOME_SECTION_DESC,
  HOME_SECTION_PY,
  HOME_SECTION_TITLE,
} from "@/lib/homepage/mobile-styles";
import {
  SECTION_CONTAINER,
  SECTION_LABEL,
  SECTION_LINK,
} from "@/lib/section-styles";
import {
  ProcessTimelineDesktop,
  ProcessTimelineMobile,
} from "./ProcessTimeline";

export function ProcessSection() {
  return (
    <section className={`bg-surface ${HOME_SECTION_PY}`}>
      <div className={SECTION_CONTAINER}>
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
          <div className="max-w-2xl">
            <p className={SECTION_LABEL}>Как мы работаем</p>
            <h2 className={HOME_SECTION_TITLE}>От заявки до готового забора</h2>
            <p className={HOME_SECTION_DESC}>
              Берём весь процесс на себя — вам остаётся принять готовую работу.
            </p>
          </div>

          <Link
            href="#calculator"
            className={`hidden shrink-0 lg:inline-flex lg:pb-1 ${SECTION_LINK}`}
          >
            Рассчитать стоимость →
          </Link>
        </div>

        <div className={HOME_SECTION_CONTENT_MT}>
          <ProcessTimelineDesktop />
          <ProcessTimelineMobile compactMobile />
        </div>
      </div>
    </section>
  );
}
