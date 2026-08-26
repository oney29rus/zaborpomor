import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { HERO_BENEFITS } from "@/lib/constants";
import { WORKS_ALL_HREF } from "@/lib/works/projects";
import {
  SECTION_CONTAINER,
  SECTION_LABEL,
} from "@/lib/section-styles";
import { HOME_SECTION_DESC } from "@/lib/homepage/mobile-styles";

export function Hero() {
  return (
    <section className="bg-background">
      <div
        className={`${SECTION_CONTAINER} grid gap-5 py-5 sm:gap-8 sm:py-10 lg:grid-cols-2 lg:items-center lg:gap-10 lg:py-10`}
      >
        <div className="order-1 flex flex-col justify-center">
          <p className={SECTION_LABEL}>Производство и монтаж заборов</p>

          <h1 className="mt-2 max-w-xl text-[clamp(1.875rem,4.5vw,3.25rem)] font-bold leading-[1.15] tracking-tight text-foreground sm:mt-3 lg:max-w-2xl xl:max-w-3xl">
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

          <p className={`${HOME_SECTION_DESC} max-w-xl`}>
            Изготовим и установим забор в Архангельске, Северодвинске,
            Новодвинске и по области. Гарантия 24 месяца. Стоимость известна
            до начала работ.
          </p>

          <div className="relative z-10 mt-4 flex flex-col gap-2.5 sm:mt-6 sm:flex-row sm:items-center sm:gap-3">
            <ButtonLink href="#calculator" className="w-full sm:w-auto">
              Рассчитать стоимость
            </ButtonLink>
            <ButtonLink
              href={WORKS_ALL_HREF}
              variant="secondary"
              className="w-full sm:w-auto"
            >
              Посмотреть работы
            </ButtonLink>
          </div>
          <ul className="mt-4 flex flex-wrap gap-2 sm:mt-6 sm:gap-x-0 sm:gap-y-3 lg:flex-row lg:flex-wrap lg:items-center">
            {HERO_BENEFITS.map((benefit, index) => (
              <li
                key={benefit}
                className="flex items-center rounded-full border border-border bg-surface px-2.5 py-1 text-xs text-foreground/85 sm:rounded-none sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:text-sm lg:text-[0.9375rem]"
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

        <div className="order-3 lg:order-2">
          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border sm:aspect-[5/4] lg:aspect-[4/3]">
              <Image
                src="/images/hero-fence.jpg"
                alt="Готовый забор, установленный компанией Заборы Поморья"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-[35%_52%] sm:object-[38%_50%] lg:object-[32%_48%]"
              />
            </div>

            <div className="absolute -bottom-3 left-3 rounded-xl border border-border bg-surface px-4 py-3 sm:-bottom-4 sm:left-4 sm:px-5 sm:py-4 lg:bottom-6 lg:left-6">
              <p className="text-lg font-bold tracking-tight text-foreground sm:text-xl lg:text-2xl">
                от 2 400 ₽/м
              </p>
              <p className="mt-0.5 text-xs text-muted sm:text-sm">
                с материалом и монтажом
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
