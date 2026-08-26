import { FENCE_CATALOG } from "@/lib/catalog/fence-types";
import {
  HOME_SECTION_CONTENT_MT,
  HOME_SECTION_DESC,
  HOME_SECTION_PY,
  HOME_SECTION_TITLE,
} from "@/lib/homepage/mobile-styles";
import {
  SECTION_CONTAINER,
  SECTION_LABEL,
} from "@/lib/section-styles";
import { FenceTypeCard } from "./FenceTypeCard";

export function FenceTypesSection() {
  return (
    <section id="fence-types" className={`scroll-mt-24 bg-surface ${HOME_SECTION_PY}`}>
      <div className={SECTION_CONTAINER}>
        <div className="max-w-2xl">
          <p className={SECTION_LABEL}>Виды заборов</p>
          <h2 className={HOME_SECTION_TITLE}>Выберите забор для своего участка</h2>
          <p className={HOME_SECTION_DESC}>
            Покажем популярные варианты с материалом и монтажом. Точную
            стоимость можно рассчитать под размеры вашего участка.
          </p>
        </div>

        <div
          className={`${HOME_SECTION_CONTENT_MT} grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3 lg:gap-5`}
        >
          {FENCE_CATALOG.map((item) => (
            <FenceTypeCard key={item.slug} item={item} compactMobile />
          ))}
        </div>
      </div>
    </section>
  );
}
