import {
  FENCE_SECTION_PY,
  SECTION_CONTAINER,
  SECTION_CONTENT_MT,
  SECTION_TITLE,
} from "@/lib/section-styles";
import type { ServicePageAutomation } from "@/lib/service-pages/types";

type GateAutomationSectionProps = {
  automation: ServicePageAutomation;
};

export function GateAutomationSection({
  automation,
}: GateAutomationSectionProps) {
  return (
    <section className={`bg-surface ${FENCE_SECTION_PY}`}>
      <div className={SECTION_CONTAINER}>
        <div className="max-w-2xl">
          <h2 className={SECTION_TITLE.replace("mt-2 ", "")}>
            {automation.title}
          </h2>
          <p className="mt-2 text-base leading-relaxed text-muted">
            {automation.description}
          </p>
        </div>

        <div className={`${SECTION_CONTENT_MT} max-w-2xl`}>
          <div className="rounded-2xl border border-border bg-background px-5 py-5 sm:px-6 sm:py-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {automation.baseLabel}
                </p>
                <p className="mt-1 text-xl font-bold tracking-tight text-foreground">
                  {automation.basePriceLabel}
                </p>
              </div>

              <span
                aria-hidden="true"
                className="hidden text-2xl font-light text-muted sm:block"
              >
                +
              </span>
              <span
                aria-hidden="true"
                className="text-center text-xl font-light text-muted sm:hidden"
              >
                +
              </span>

              <div className="sm:text-right">
                <p className="text-sm font-semibold text-foreground">
                  {automation.addonLabel}
                </p>
                <p className="mt-1 text-xl font-bold tracking-tight text-accent">
                  {automation.addonPriceLabel}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
