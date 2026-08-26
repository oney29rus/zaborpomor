import Link from "next/link";
import { HomeFaqAccordion } from "@/components/faq/HomeFaqAccordion";
import { PHONE, PHONE_HREF } from "@/lib/constants";
import { HOMEPAGE_FAQ } from "@/lib/faq/items";
import {
  HOME_SECTION_DESC,
  HOME_SECTION_PY,
  HOME_SECTION_TITLE,
} from "@/lib/homepage/mobile-styles";
import {
  SECTION_CONTAINER,
  SECTION_LABEL,
  SECTION_LINK,
} from "@/lib/section-styles";

function FaqSidebar() {
  return (
    <div className="mt-4 lg:mt-8">
      <p className="text-base font-semibold text-foreground">Не нашли ответ?</p>
      <p className="mt-1.5 text-sm text-muted lg:mt-2">Позвоните нам:</p>
      <div className="mt-2 flex flex-col gap-3 lg:mt-3 lg:gap-4">
        <a href={PHONE_HREF} className={SECTION_LINK}>
          {PHONE}
        </a>
        <Link href="#calculator" className={`text-sm ${SECTION_LINK}`}>
          Рассчитать стоимость →
        </Link>
      </div>
    </div>
  );
}

export function FaqSection() {
  return (
    <section className={`bg-[#f5f5f5] ${HOME_SECTION_PY}`}>
      <div className={SECTION_CONTAINER}>
        <div className="lg:grid lg:grid-cols-[minmax(0,0.34fr)_minmax(0,0.66fr)] lg:items-start lg:gap-10">
          <div>
            <p className={SECTION_LABEL}>Частые вопросы</p>
            <h2 className={HOME_SECTION_TITLE}>
              Ответы на вопросы
              <br className="hidden sm:block" />
              {" "}
              перед установкой забора
            </h2>
            <p className={HOME_SECTION_DESC}>
              Собрали главное о стоимости, монтаже, материалах и гарантии.
            </p>

            <div className="hidden lg:block">
              <FaqSidebar />
            </div>
          </div>

          <div className="mt-4 lg:mt-0">
            <HomeFaqAccordion
              items={HOMEPAGE_FAQ.items}
              desktopDefaultOpenId={HOMEPAGE_FAQ.items[0]?.id}
            />
          </div>
        </div>

        <div className="lg:hidden">
          <FaqSidebar />
        </div>
      </div>
    </section>
  );
}
