import { PHONE, PHONE_HREF } from "@/lib/constants";
import { SECTION_CONTAINER, SECTION_PY_COMPACT } from "@/lib/section-styles";
import { LeadForm } from "./LeadForm";

const DEFAULT_TRUST_ITEMS = [
  "Бесплатный замер",
  "Гарантия 24 месяца",
  "Расчёт до начала работ",
] as const;

type FinalCtaSectionProps = {
  label?: string;
  title?: string;
  description?: string;
  trustItems?: readonly string[];
  compactMobile?: boolean;
};

function TrustLine({
  items,
  className = "",
}: {
  items: readonly string[];
  className?: string;
}) {
  return (
    <p className={`text-sm text-white/80 ${className}`}>
      {items.join(" • ")}
    </p>
  );
}

export function FinalCtaSection({
  label = "Рассчитаем ваш забор",
  title = "Узнайте стоимость забора для вашего участка",
  description = "Оставьте номер телефона — уточним длину, материал и комплектацию и рассчитаем стоимость вашего забора.",
  trustItems = DEFAULT_TRUST_ITEMS,
  compactMobile = false,
}: FinalCtaSectionProps = {}) {
  const titleLines = title.split("\n");
  const sectionPy = compactMobile
    ? "py-8 sm:py-12 lg:py-14"
    : SECTION_PY_COMPACT;

  return (
    <section className={`bg-accent-section ${sectionPy}`}>
      <div className={SECTION_CONTAINER}>
        <div className="lg:grid lg:max-h-[500px] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-10">
          <div className="flex flex-col">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70 sm:text-[0.8125rem]">
              {label}
            </p>
            <h2 className="mt-1.5 text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-tight tracking-tight text-white lg:mt-2">
              {titleLines.map((line, index) => (
                <span key={line}>
                  {index > 0 ? (
                    <>
                      <br className="hidden sm:block" />
                      {" "}
                    </>
                  ) : null}
                  {line}
                </span>
              ))}
            </h2>
            <p className="mt-2 max-w-xl text-base leading-snug text-white/85 sm:mt-3 sm:text-[1.0625rem] sm:leading-relaxed">
              {description}
            </p>

            <TrustLine items={trustItems} className="mt-4 hidden lg:flex" />

            <div className="mt-6 hidden lg:block">
              <p className="text-sm text-white/70">Или позвоните:</p>
              <a
                href={PHONE_HREF}
                className="mt-1 inline-flex text-lg font-semibold text-white transition-opacity hover:opacity-85"
              >
                {PHONE}
              </a>
            </div>
          </div>

          <LeadForm className="mt-5 lg:mt-0" />

          <div className="mt-4 lg:hidden">
            <p className="text-sm text-white/70">Или позвоните:</p>
            <a
              href={PHONE_HREF}
              className="mt-1 inline-flex text-base font-semibold text-white transition-opacity hover:opacity-85 lg:text-lg"
            >
              {PHONE}
            </a>
          </div>

          <TrustLine items={trustItems} className="mt-3 lg:hidden lg:mt-5" />
        </div>
      </div>
    </section>
  );
}
