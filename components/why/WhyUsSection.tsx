import { WHY_BENEFITS } from "@/lib/why/benefits";
import {
  SECTION_CONTAINER,
  SECTION_CONTENT_MT,
  SECTION_DESC,
  SECTION_LABEL,
  SECTION_PY,
  SECTION_TITLE,
} from "@/lib/section-styles";
import { BenefitItem } from "./BenefitItem";
import { WarrantyHighlight } from "./WarrantyHighlight";

export function WhyUsSection() {
  return (
    <section id="why-us" className={`scroll-mt-24 bg-green-background ${SECTION_PY}`}>
      <div className={SECTION_CONTAINER}>
        <div className="max-w-2xl">
          <p className={SECTION_LABEL}>Почему мы</p>
          <h2 className={SECTION_TITLE}>
            Не просто устанавливаем заборы — отвечаем за результат
          </h2>
          <p className={SECTION_DESC}>
            Берём на себя изготовление, комплектацию и монтаж — от первого
            расчёта до готового забора.
          </p>
        </div>

        <div
          className={`${SECTION_CONTENT_MT} flex flex-col gap-8 lg:grid lg:grid-cols-[2fr_3fr] lg:items-start lg:gap-10`}
        >
          <WarrantyHighlight />

          <div className="grid gap-6 sm:gap-7 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-6">
            {WHY_BENEFITS.map((benefit) => (
              <BenefitItem key={benefit.step} benefit={benefit} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
