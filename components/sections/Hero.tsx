import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { HERO_BENEFITS } from "@/lib/constants";
import { WORKS_ALL_HREF } from "@/lib/works/projects";
import {
  SECTION_CONTAINER,
  SECTION_LABEL,
} from "@/lib/section-styles";

const HERO_PRIMARY_CTA_CLASS =
  "w-full max-lg:!h-[3.375rem] max-lg:!min-h-[3.375rem] max-lg:px-5 max-lg:!py-0 max-lg:text-[1.0625rem] sm:w-auto lg:!h-auto lg:!min-h-12 lg:px-8 lg:!py-3 lg:text-base";

const HERO_SECONDARY_CTA_CLASS =
  "w-full sm:w-auto lg:!h-auto lg:!min-h-12 lg:px-8 lg:!py-3 lg:text-base";

const HERO_MOBILE_BENEFIT_LABELS: Record<(typeof HERO_BENEFITS)[number], string> = {
  "Своё производство": "Своё производство",
  "Гарантия 24 месяца": "Гарантия 24 мес.",
  "Бесплатный замер": "Бесплатный замер",
};

export function Hero() {
  return (
    <section className="bg-background">
      <div
        className={`${SECTION_CONTAINER} max-lg:flex max-lg:flex-col max-lg:gap-1 max-lg:pb-0 max-lg:pt-0.5 sm:py-10 lg:grid lg:grid-cols-2 lg:items-center lg:gap-10 lg:py-10`}
      >
        <div className="contents lg:flex lg:flex-col lg:justify-center">
          <p
            className={`order-1 ${SECTION_LABEL} max-lg:text-[0.6875rem] max-lg:leading-none max-lg:tracking-[0.1em] min-[360px]:max-lg:text-xs`}
          >
            Производство и монтаж заборов
          </p>

          <h1 className="order-2 max-w-xl font-bold text-foreground max-lg:mt-0 max-lg:text-[2rem] max-lg:leading-[1.06] max-lg:tracking-[-0.02em] min-[360px]:max-lg:text-[2.0625rem] min-[390px]:max-lg:text-[2.125rem] lg:mt-3 lg:max-w-2xl lg:text-[clamp(1.875rem,4.5vw,3.25rem)] lg:leading-[1.15] lg:tracking-tight xl:max-w-3xl">
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

          <p className="order-3 mt-1 max-w-xl text-muted max-lg:mt-0.5 max-lg:text-base max-lg:leading-[1.42] sm:text-lg lg:mt-2 lg:text-base lg:leading-snug">
            Изготовим и установим забор в Архангельске, Северодвинске,
            Новодвинске и по области. Гарантия 24 месяца. Стоимость известна
            до начала работ.
          </p>

          <div className="relative z-10 order-6 max-lg:mt-0.5 flex flex-col items-stretch lg:order-none lg:mt-6 lg:flex-row lg:items-center lg:gap-3">
            <ButtonLink href="#calculator" className={HERO_PRIMARY_CTA_CLASS}>
              Рассчитать стоимость
            </ButtonLink>
            <Link
              href={WORKS_ALL_HREF}
              className="mt-3 max-lg:block max-lg:py-0 max-lg:text-center max-lg:text-sm max-lg:font-semibold max-lg:text-accent max-lg:transition-colors max-lg:hover:text-accent-hover lg:hidden"
            >
              Посмотреть работы →
            </Link>
            <ButtonLink
              href={WORKS_ALL_HREF}
              variant="secondary"
              className={`max-lg:!hidden lg:!inline-flex ${HERO_SECONDARY_CTA_CLASS}`}
            >
              Посмотреть работы
            </ButtonLink>
          </div>

          <ul className="order-7 mt-3 max-lg:grid max-lg:grid-cols-2 max-lg:gap-x-3 max-lg:gap-y-0.5 lg:order-none lg:mt-6 lg:flex lg:flex-row lg:items-center">
            {HERO_BENEFITS.map((benefit, index) => (
              <li
                key={benefit}
                className={`flex items-center max-lg:gap-0.5 max-lg:text-[0.8125rem] max-lg:leading-none max-lg:text-foreground/85 lg:text-sm lg:text-[0.9375rem] ${
                  index === 2
                    ? "max-lg:col-span-2 max-lg:justify-self-start min-[390px]:max-lg:col-span-1"
                    : ""
                }`}
              >
                {index > 0 ? (
                  <span
                    aria-hidden="true"
                    className="mx-4 hidden h-1 w-1 shrink-0 rounded-full bg-border lg:block"
                  />
                ) : null}
                <span
                  aria-hidden="true"
                  className="shrink-0 font-bold text-accent max-lg:text-xs lg:hidden"
                >
                  ✓
                </span>
                <span className="lg:hidden">
                  {HERO_MOBILE_BENEFIT_LABELS[benefit]}
                </span>
                <span className="hidden lg:inline">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="order-4 lg:order-2">
          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="relative aspect-[16/6] overflow-hidden rounded-xl border border-border sm:aspect-[5/4] sm:rounded-2xl lg:aspect-[4/3]">
              <Image
                src="/images/hero-fence.jpg"
                alt="Готовый забор, установленный компанией Заборы Поморья"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-[35%_52%] sm:object-[38%_50%] lg:object-[32%_48%]"
              />
            </div>

            <div className="absolute -bottom-1.5 left-2 rounded-md border border-border bg-surface px-2 py-1 max-lg:-bottom-1.5 max-lg:left-2 sm:-bottom-4 sm:left-4 sm:rounded-xl sm:px-5 sm:py-4 lg:bottom-6 lg:left-6">
              <p className="text-[1.125rem] font-bold leading-none tracking-tight text-foreground sm:text-xl lg:text-2xl">
                от 2 400 ₽/м
              </p>
              <p className="mt-0.5 text-[0.8125rem] leading-snug text-muted sm:text-sm">
                с материалом и монтажом
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
