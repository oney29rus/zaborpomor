import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { JsonLd } from "@/components/seo/JsonLd";
import { WorksGrid } from "@/components/works/WorksGrid";
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld";
import {
  SECTION_CONTAINER,
  SECTION_CONTENT_MT,
  SECTION_DESC,
  SECTION_PY,
} from "@/lib/section-styles";

export function WorksIndexView() {
  const breadcrumbs = [
    { label: "Главная", href: "/" },
    { label: "Наши работы", href: "/raboty/" },
  ];

  const breadcrumbJsonLd = buildBreadcrumbJsonLd(
    breadcrumbs.map((item) => ({
      name: item.label,
      path: item.href,
    })),
  );

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />

      <Header />
      <main className="flex flex-1 flex-col">
        <section className={`bg-background ${SECTION_PY}`}>
          <div className={`${SECTION_CONTAINER} min-w-0`}>
            <Breadcrumbs items={breadcrumbs} />

            <h1 className="mt-4 text-[clamp(1.625rem,4vw,2.75rem)] font-bold leading-tight tracking-tight text-foreground">
              Наши работы — установленные заборы
            </h1>

            <p className={`${SECTION_DESC} max-w-3xl`}>
              Реальные объекты «Заборов Поморья» в Архангельске, Северодвинске,
              Новодвинске и области: фотографии, стоимость, длина, высота и сроки
              монтажа.
            </p>

            <div className={SECTION_CONTENT_MT}>
              <WorksGrid
                mobileLayout="stack"
                linkProjects
                preserveAllInDom
                cardVariant="portfolio"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
