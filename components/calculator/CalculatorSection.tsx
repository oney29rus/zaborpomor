import Link from "next/link";
import type { CalculatorConfig } from "@/lib/calculator/config";
import { UNIVERSAL_CALCULATOR_CONFIG } from "@/lib/calculator/config";
import type { FenceTypeId } from "@/lib/calculator/types";
import { MONTAZH_IZ_MATERIALA_HREF } from "@/lib/services/mount-only";
import type { CalculatorParams } from "@/lib/calculator/types";
import { CalculatorWidget } from "./CalculatorWidget";
import {
  SECTION_CONTAINER,
  SECTION_CONTENT_MT,
  SECTION_DESC,
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
}: CalculatorSectionProps) {
  const resolvedConfig = config ?? UNIVERSAL_CALCULATOR_CONFIG;
  const isUniversal = resolvedConfig.mode === "universal";
  const sectionClassName =
    className ??
    (isUniversal
      ? "scroll-mt-24 bg-background pt-12 pb-10 sm:pt-12 sm:pb-12 lg:pt-12 lg:pb-16"
      : "bg-background pt-10 pb-12 sm:pt-12 sm:pb-14 lg:pt-12 lg:pb-16");

  return (
    <section id={id} className={sectionClassName}>
      <div className={SECTION_CONTAINER}>
        <div className="max-w-2xl">
          <p className={SECTION_LABEL}>{label}</p>
          <h2 className={SECTION_TITLE}>{title}</h2>
          <p className={SECTION_DESC}>{description}</p>
        </div>

        <div
          className={`${SECTION_CONTENT_MT} ${isUniversal ? "max-lg:overflow-x-hidden" : ""}`}
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
