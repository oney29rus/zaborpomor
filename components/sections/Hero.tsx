import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { HERO_BENEFITS } from "@/lib/constants";
import { WORKS_ALL_HREF } from "@/lib/works/projects";
import {
  SECTION_CONTAINER,
  SECTION_DESC,
  SECTION_LABEL,
} from "@/lib/section-styles";

export function Hero() {
  return (
    <section className="bg-background">
      <div
        className={`${SECTION_CONTAINER} grid gap-8 py-8 sm:py-10 lg:grid-cols-2 lg:items-center lg:gap-10 lg:py-10`}
      >
        <div className="order-1 flex flex-col justify-center">
          <p className={SECTION_LABEL}>Производство и монтаж заборов</p>

          <h1 className="mt-3 max-w-xl text-[clamp(1.875rem,4.5vw,3.25rem)] font-bold leading-[1.15] tracking-tight text-foreground lg:max-w-2xl xl:max-w-3xl">
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

          <p className={`${SECTION_DESC} max-w-xl`}>
            Изготовим и установим забор в Архангельске, Северодвинске,
            Новодвинске и по области. Гарантия 24 месяца. Стоимость известна
            до начала работ.
          </p>

          <div className="relative z-10 mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
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
          <ul className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-0">
            {HERO_BENEFITS.map((benefit, index) => (
              <li
                key={benefit}
                className="flex items-center text-sm text-foreground/85 sm:text-[0.9375rem]"
              >
                {index > 0 && (
                  <span
                    aria-hidden="true"
                    className="mx-4 hidden h-1 w-1 rounded-full bg-border sm:block"
                  />
                )}
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className="order-3 lg:order-2">
          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border sm:aspect-[5/4] lg:aspect-[4/3]">
              <Image
                src="/images/hero-fence.jpg"
                alt="Готовый забор, установленный компанией Заборы Поморья"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-[35%_52%] sm:object-[38%_50%] lg:object-[32%_48%]"
              />
            </div>

            <div className="absolute -bottom-4 left-4 rounded-xl border border-border bg-surface px-5 py-4 sm:bottom-6 sm:left-6">
              <p className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                от 2 400 ₽/м
              </p>
              <p className="mt-0.5 text-sm text-muted">
                с материалом и монтажом
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
