import Link from "next/link";
import type { CalculatorConfig } from "@/lib/calculator/config";
import { UNIVERSAL_CALCULATOR_CONFIG } from "@/lib/calculator/config";
import type { FenceTypeId } from "@/lib/calculator/types";
import { MONTAZH_IZ_MATERIALA_HREF } from "@/lib/services/mount-only";
import type { CalculatorParams } from "@/lib/calculator/types";
import { CalculatorWidget } from "./CalculatorWidget";
import {
  HOME_SECTION_CONTENT_MT,
  HOME_SECTION_DESC,
  HOME_SECTION_TITLE,
} from "@/lib/homepage/mobile-styles";
import {
  SECTION_CONTAINER,
  SECTION_DESC,
  SECTION_CONTENT_MT,
  SECTION_LABEL,
  SECTION_TITLE,
} from "@/lib/section-styles";

type CalculatorSectionProps = {
  id?: string;
  label?: string;
  title?: string;
  description?: string;
  config?: CalculatorConfig;
  /** @deprecated Используйте config.defaultFenceType */
  defaultFenceType?: FenceTypeId;
  initialParams?: Partial<CalculatorParams>;
  className?: string;
  compactMobile?: boolean;
};

export function CalculatorSection({
  id = "calculator",
  label = "Быстрый расчёт",
  title = "Рассчитайте стоимость забора",
  description = "Выберите параметры — сразу покажем ориентировочную стоимость с материалом и монтажом.",
  config,
  defaultFenceType,
  initialParams,
  className,
  compactMobile = false,
}: CalculatorSectionProps) {
  const resolvedConfig = config ?? UNIVERSAL_CALCULATOR_CONFIG;
  const isUniversal = resolvedConfig.mode === "universal";
  const sectionClassName =
    className ??
    (isUniversal
      ? compactMobile
        ? "scroll-mt-24 bg-background pt-8 pb-8 sm:pt-12 sm:pb-12 lg:pt-12 lg:pb-16"
        : "scroll-mt-24 bg-background pt-12 pb-10 sm:pt-12 sm:pb-12 lg:pt-12 lg:pb-16"
      : "bg-background pt-10 pb-12 sm:pt-12 sm:pb-14 lg:pt-12 lg:pb-16");
  const titleClassName = compactMobile ? HOME_SECTION_TITLE : SECTION_TITLE;
  const descClassName = compactMobile ? HOME_SECTION_DESC : SECTION_DESC;
  const contentMtClassName = compactMobile ? HOME_SECTION_CONTENT_MT : SECTION_CONTENT_MT;

  return (
    <section id={id} className={sectionClassName}>
      <div className={SECTION_CONTAINER}>
        <div className="max-w-2xl">
          <p className={SECTION_LABEL}>{label}</p>
          <h2 className={titleClassName}>{title}</h2>
          <p className={descClassName}>{description}</p>
        </div>

        <div
          className={`${contentMtClassName} ${isUniversal ? "max-lg:overflow-x-hidden" : ""}`}
        >
          <CalculatorWidget
            config={resolvedConfig}
            defaultFenceType={defaultFenceType ?? resolvedConfig.defaultFenceType}
            initialParams={initialParams}
          />
          {isUniversal ? (
            <p className="mt-4 text-center text-sm text-muted lg:text-left">
              <Link
                href={MONTAZH_IZ_MATERIALA_HREF}
                className="font-semibold text-accent transition-colors hover:text-accent-hover"
              >
                Материал уже куплен? Рассчитать только монтаж →
              </Link>
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
