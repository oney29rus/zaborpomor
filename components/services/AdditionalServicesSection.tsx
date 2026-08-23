import {
  ADDITIONAL_SERVICES,
  ADDITIONAL_SERVICES_SECTION,
} from "@/lib/services/additional-services";
import {
  SECTION_CONTAINER,
  SECTION_CONTENT_MT,
  SECTION_DESC,
  SECTION_LABEL,
  SECTION_PY,
  SECTION_TITLE,
} from "@/lib/section-styles";
import { AdditionalServiceCard } from "./AdditionalServiceCard";

type AdditionalServicesSectionProps = {
  className?: string;
  title?: string;
};

export function AdditionalServicesSection({
  className = "bg-background",
  title,
}: AdditionalServicesSectionProps = {}) {
  const { label, title: defaultTitle, description } = ADDITIONAL_SERVICES_SECTION;
  const sectionTitle = title ?? defaultTitle;

  return (
    <section
      id="additional-services"
      className={`${className} ${SECTION_PY}`}
    >
      <div className={SECTION_CONTAINER}>
        <div className="max-w-2xl">
          <p className={SECTION_LABEL}>{label}</p>
          <h2 className={SECTION_TITLE}>{sectionTitle}</h2>
          <p className={SECTION_DESC}>{description}</p>
        </div>

        <div
          className={`${SECTION_CONTENT_MT} grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4`}
        >
          {ADDITIONAL_SERVICES.map((service, index) => (
            <div
              key={service.id}
              className={`lg:col-span-2 ${index === 3 ? "lg:col-start-2" : ""}`}
            >
              <AdditionalServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
