import { WHY_BENEFITS } from "@/lib/why/benefits";
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
import { BenefitItem } from "./BenefitItem";
import { WarrantyHighlight } from "./WarrantyHighlight";

export function WhyUsSection() {
  return (
    <section id="why-us" className={`scroll-mt-24 bg-green-background ${HOME_SECTION_PY}`}>
      <div className={SECTION_CONTAINER}>
        <div className="max-w-2xl">
          <p className={SECTION_LABEL}>Почему мы</p>
          <h2 className={HOME_SECTION_TITLE}>
            Не просто устанавливаем заборы — отвечаем за результат
          </h2>
          <p className={HOME_SECTION_DESC}>
            Берём на себя изготовление, комплектацию и монтаж — от первого
            расчёта до готового забора.
          </p>
        </div>

        <div
          className={`${HOME_SECTION_CONTENT_MT} flex flex-col gap-4 lg:grid lg:grid-cols-[2fr_3fr] lg:items-start lg:gap-10`}
        >
          <WarrantyHighlight compactMobile />

          <div className="grid grid-cols-2 gap-3 sm:gap-7 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-6">
            {WHY_BENEFITS.map((benefit) => (
              <BenefitItem key={benefit.step} benefit={benefit} compactMobile />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
