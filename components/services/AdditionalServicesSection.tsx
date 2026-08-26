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
import {
  HOME_SECTION_CONTENT_MT,
  HOME_SECTION_DESC,
  HOME_SECTION_TITLE,
} from "@/lib/homepage/mobile-styles";
import { AdditionalServiceCard } from "./AdditionalServiceCard";

type AdditionalServicesSectionProps = {
  className?: string;
  title?: string;
  compactMobile?: boolean;
};

export function AdditionalServicesSection({
  className = "bg-background",
  title,
  compactMobile = false,
}: AdditionalServicesSectionProps = {}) {
  const { label, title: defaultTitle, description } = ADDITIONAL_SERVICES_SECTION;
  const sectionTitle = title ?? defaultTitle;
  const sectionPy = compactMobile
    ? "py-6 sm:py-14 lg:py-16"
    : SECTION_PY;
  const titleClassName = compactMobile ? HOME_SECTION_TITLE : SECTION_TITLE;
  const descClassName = compactMobile ? HOME_SECTION_DESC : SECTION_DESC;
  const contentMtClassName = compactMobile ? HOME_SECTION_CONTENT_MT : SECTION_CONTENT_MT;

  return (
    <section
      id="additional-services"
      className={`${className} ${sectionPy}`}
    >
      <div className={SECTION_CONTAINER}>
        <div className="max-w-2xl">
          <p className={SECTION_LABEL}>{label}</p>
          <h2 className={titleClassName}>{sectionTitle}</h2>
          <p className={descClassName}>{description}</p>
        </div>

        <div
          className={
            compactMobile
              ? `${contentMtClassName} grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-6 lg:gap-4`
              : `${contentMtClassName} grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4`
          }
        >
          {ADDITIONAL_SERVICES.map((service, index) => (
            <div
              key={service.id}
              className={`lg:col-span-2 ${index === 3 ? "lg:col-start-2" : ""}`}
            >
              <AdditionalServiceCard service={service} compactMobile={compactMobile} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
