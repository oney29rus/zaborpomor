import {
  FENCE_SECTION_PY,
  SECTION_CONTAINER,
  SECTION_CONTENT_MT,
  SECTION_TITLE,
} from "@/lib/section-styles";

type CityGeoSectionProps = {
  title: string;
  paragraphs: string[];
  className?: string;
};

export function CityGeoSection({
  title,
  paragraphs,
  className = "bg-surface",
}: CityGeoSectionProps) {
  return (
    <section className={`${className} ${FENCE_SECTION_PY}`}>
      <div className={SECTION_CONTAINER}>
        <h2 className={`max-w-2xl ${SECTION_TITLE.replace("mt-2 ", "")}`}>
          {title}
        </h2>

        <div
          className={`${SECTION_CONTENT_MT} max-w-3xl space-y-3 text-sm leading-relaxed text-muted sm:text-base`}
        >
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
