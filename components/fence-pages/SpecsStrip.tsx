import type { FencePageSpec } from "@/lib/fence-pages/types";
import { SECTION_CONTAINER } from "@/lib/section-styles";

type SpecsStripProps = {
  specs: FencePageSpec[];
};

export function SpecsStrip({ specs }: SpecsStripProps) {
  return (
    <section className="border-y border-border bg-surface py-5 sm:py-6">
      <div className={SECTION_CONTAINER}>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-y-0">
          {specs.map((spec) => (
            <div key={spec.label}>
              <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                {spec.label}
              </dt>
              <dd className="mt-1 text-sm font-semibold text-foreground sm:text-base">
                {spec.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
