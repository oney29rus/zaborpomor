import { FENCE_CATALOG } from "@/lib/catalog/fence-types";
import {
  SECTION_CONTAINER,
  SECTION_CONTENT_MT,
  SECTION_DESC,
  SECTION_LABEL,
  SECTION_PY,
  SECTION_TITLE,
} from "@/lib/section-styles";
import { FenceTypeCard } from "./FenceTypeCard";

export function FenceTypesSection() {
  return (
    <section id="fence-types" className={`scroll-mt-24 bg-surface ${SECTION_PY}`}>
      <div className={SECTION_CONTAINER}>
        <div className="max-w-2xl">
          <p className={SECTION_LABEL}>Виды заборов</p>
          <h2 className={SECTION_TITLE}>Выберите забор для своего участка</h2>
          <p className={SECTION_DESC}>
            Покажем популярные варианты с материалом и монтажом. Точную
            стоимость можно рассчитать под размеры вашего участка.
          </p>
        </div>

        <div className={`${SECTION_CONTENT_MT} grid gap-8 sm:gap-10 lg:grid-cols-3 lg:gap-5`}>
          {FENCE_CATALOG.map((item) => (
            <FenceTypeCard key={item.slug} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
