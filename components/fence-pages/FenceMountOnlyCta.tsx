import Link from "next/link";
import {
  MONTAZH_IZ_MATERIALA_HREF,
  MONTAZH_IZ_MATERIALA_PRICE_LABEL,
} from "@/lib/services/mount-only";
import { FENCE_SECTION_PY, SECTION_CONTAINER } from "@/lib/section-styles";

export function FenceMountOnlyCta() {
  return (
    <section className={`bg-surface ${FENCE_SECTION_PY}`}>
      <div className={SECTION_CONTAINER}>
        <div className="flex flex-col gap-4 rounded-xl border border-border bg-background px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-5 sm:py-5">
          <div className="min-w-0 max-w-xl">
            <h2 className="text-base font-bold text-foreground sm:text-lg">
              Материал уже куплен?
            </h2>
            <p className="mt-1 text-sm leading-relaxed text-muted">
              Можем выполнить только монтаж забора из вашего материала.
            </p>
            <p className="mt-1.5 text-sm font-semibold text-foreground">
              {MONTAZH_IZ_MATERIALA_PRICE_LABEL}
            </p>
          </div>
          <Link
            href={MONTAZH_IZ_MATERIALA_HREF}
            className="inline-flex shrink-0 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
          >
            Подробнее →
          </Link>
        </div>
      </div>
    </section>
  );
}
