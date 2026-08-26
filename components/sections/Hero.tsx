import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { HERO_BENEFITS } from "@/lib/constants";
import { WORKS_ALL_HREF } from "@/lib/works/projects";
import {
  SECTION_CONTAINER,
  SECTION_LABEL,
} from "@/lib/section-styles";

const HERO_CTA_CLASS =
  "w-full max-lg:!min-h-[3.25rem] max-lg:px-5 max-lg:!py-2.5 max-lg:text-base sm:w-auto lg:!min-h-12 lg:px-8 lg:!py-3";

export function Hero() {
  return (
    <section className="bg-background">
      <div
        className={`${SECTION_CONTAINER} max-lg:flex max-lg:flex-col max-lg:gap-2 max-lg:py-2 sm:py-10 lg:grid lg:grid-cols-2 lg:items-center lg:gap-10 lg:py-10`}
      >
        <div className="contents lg:flex lg:flex-col lg:justify-center">
          <p
            className={`order-1 ${SECTION_LABEL} max-lg:text-[0.8125rem] max-lg:leading-none max-lg:tracking-[0.12em]`}
          >
            Производство и монтаж заборов
          </p>

          <h1 className="order-2 max-w-xl font-bold tracking-tight text-foreground max-lg:mt-0.5 max-lg:text-[clamp(2.125rem,8.8vw,2.375rem)] max-lg:leading-[1.06] lg:mt-3 lg:max-w-2xl lg:text-[clamp(1.875rem,4.5vw,3.25rem)] lg:leading-[1.15] xl:max-w-3xl">
            Заборы под ключ
            <br />
            в&nbsp;Архангельске,
            <br className="sm:hidden" />
            {" "}
            Северодвинске
            <br className="hidden lg:block" />
            {" "}
            и&nbsp;Новодвинске
          </h1>

          <p className="order-3 mt-1 max-w-xl text-muted max-lg:mt-1 max-lg:text-base max-lg:leading-[1.45] sm:text-lg lg:mt-2 lg:text-base lg:leading-snug">
            Изготовим и установим забор в Архангельске, Северодвинске,
            Новодвинске и по области. Гарантия 24 месяца. Стоимость известна
            до начала работ.
          </p>

          <div className="relative z-10 order-6 mt-1.5 flex flex-col gap-1 max-lg:gap-1 sm:mt-6 sm:flex-row sm:items-center sm:gap-3 lg:order-none lg:mt-6">
            <ButtonLink href="#calculator" className={HERO_CTA_CLASS}>
              Рассчитать стоимость
            </ButtonLink>
            <ButtonLink
              href={WORKS_ALL_HREF}
              variant="secondary"
              className={HERO_CTA_CLASS}
            >
              Посмотреть работы
            </ButtonLink>
          </div>

          <ul className="order-7 mt-1.5 grid grid-cols-2 gap-1 max-lg:gap-0.5 sm:mt-6 sm:flex sm:flex-wrap sm:gap-x-0 sm:gap-y-3 lg:order-none lg:mt-6 lg:flex-row lg:items-center">
            {HERO_BENEFITS.map((benefit, index) => (
              <li
                key={benefit}
                className={`flex items-center rounded-full border border-border bg-surface text-foreground/85 max-lg:px-2 max-lg:py-px max-lg:text-sm max-lg:leading-tight sm:rounded-none sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:text-sm lg:text-[0.9375rem] ${
                  index === 2 ? "col-span-2 max-lg:justify-self-start sm:col-span-1" : ""
                }`}
              >
                {index > 0 ? (
                  <span
                    aria-hidden="true"
                    className="mx-4 hidden h-1 w-1 rounded-full bg-border sm:block"
                  />
                ) : null}
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className="order-4 max-lg:-mt-0.5 lg:order-2">
          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="relative aspect-[13/5] overflow-hidden rounded-xl border border-border sm:aspect-[5/4] sm:rounded-2xl lg:aspect-[4/3]">
              <Image
                src="/images/hero-fence.jpg"
                alt="Готовый забор, установленный компанией Заборы Поморья"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-[35%_52%] sm:object-[38%_50%] lg:object-[32%_48%]"
              />
            </div>

            <div className="absolute -bottom-2 left-2 rounded-lg border border-border bg-surface px-2.5 py-1.5 sm:-bottom-4 sm:left-4 sm:rounded-xl sm:px-5 sm:py-4 lg:bottom-6 lg:left-6">
              <p className="text-sm font-bold tracking-tight text-foreground sm:text-xl lg:text-2xl">
                от 2 400 ₽/м
              </p>
              <p className="mt-0.5 text-[0.6875rem] text-muted sm:text-sm">
                с материалом и монтажом
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
