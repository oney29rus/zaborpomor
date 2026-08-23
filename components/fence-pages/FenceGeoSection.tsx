import Link from "next/link";
import type { FencePageGeo } from "@/lib/fence-pages/types";
import {
  FENCE_SECTION_PY,
  SECTION_CONTAINER,
  SECTION_CONTENT_MT,
  SECTION_DESC,
  SECTION_TITLE,
} from "@/lib/section-styles";

type FenceGeoSectionProps = {
  geo: FencePageGeo;
};

export function FenceGeoSection({ geo }: FenceGeoSectionProps) {
  return (
    <section className={`bg-[#f5f5f5] ${FENCE_SECTION_PY}`}>
      <div className={SECTION_CONTAINER}>
        <div className="max-w-3xl">
          <h2 className={SECTION_TITLE.replace("mt-2 ", "")}>{geo.title}</h2>

          {geo.paragraphs.map((paragraph) => (
            <p key={paragraph} className={SECTION_DESC}>
              {paragraph}
            </p>
          ))}

          <div className={SECTION_CONTENT_MT}>
            <p className="text-base leading-relaxed text-muted">
              Устанавливаем {geo.servicePhrase ?? "заборы"} в{" "}
              {geo.cityLinks.map((city, index) => (
                <span key={city.href}>
                  {index > 0 ? ", " : ""}
                  {city.published ? (
                    <Link
                      href={city.href}
                      className="font-medium text-foreground transition-colors hover:text-accent"
                    >
                      {city.label}
                    </Link>
                  ) : (
                    city.label
                  )}
                </span>
              ))}
              {geo.areaMentions.length > 0
                ? `, ${geo.areaMentions.join(", ")}`
                : ""}{" "}
              и других населённых пунктах области.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
