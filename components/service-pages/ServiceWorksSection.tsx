import {
  FENCE_SECTION_PY,
  SECTION_CONTAINER,
  SECTION_CONTENT_MT,
  SECTION_TITLE,
} from "@/lib/section-styles";

type ServiceWorksSectionProps = {
  title: string;
  sectionId?: string;
};

export function ServiceWorksSection({
  title,
  sectionId,
}: ServiceWorksSectionProps) {
  return (
    <section
      id={sectionId}
      className={`bg-[#f5f5f5] ${FENCE_SECTION_PY}`}
    >
      <div className={SECTION_CONTAINER}>
        <div className="max-w-2xl">
          <h2 className={SECTION_TITLE.replace("mt-2 ", "")}>{title}</h2>
        </div>

        <div className={SECTION_CONTENT_MT}>
          <div className="rounded-xl border border-dashed border-border bg-surface px-5 py-8 text-center sm:px-6">
            <p className="text-sm leading-relaxed text-muted">
              Фото объектов скоро будут добавлены в портфолио.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
