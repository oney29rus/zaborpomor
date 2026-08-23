import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  FENCE_SECTION_PY,
  SECTION_CONTAINER,
  SECTION_PY,
} from "@/lib/section-styles";
import { buildBreadcrumbJsonLd } from "@/lib/seo/json-ld";
import {
  buildWorkProjectNarrative,
  getWorkProjectSpecs,
} from "@/lib/works/project-detail";
import {
  getSimilarWorkProjects,
} from "@/lib/works/project-seo";
import type { WorkProject } from "@/lib/works/types";
import { WorkProjectGallery } from "./WorkProjectGallery";
import { WorkProjectOrderBlock } from "./WorkProjectOrderBlock";
import { WorkSimilarProjects } from "./WorkSimilarProjects";

type WorkProjectViewProps = {
  project: WorkProject;
};

export function WorkProjectView({ project }: WorkProjectViewProps) {
  const breadcrumbs = [
    { label: "Главная", href: "/" },
    { label: "Наши работы", href: "/raboty/" },
    { label: project.title, href: `/raboty/${project.slug}/` },
  ];

  const specs = getWorkProjectSpecs(project);
  const narrative = buildWorkProjectNarrative(project);
  const similarProjects = getSimilarWorkProjects(project);

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

            <h1 className="mt-4 text-[clamp(1.625rem,4vw,2.5rem)] font-bold leading-tight tracking-tight text-foreground">
              {project.title}
            </h1>

            <div className="mt-6 grid gap-6 lg:grid-cols-2 lg:items-start lg:gap-8">
              <div className="min-w-0">
                <WorkProjectGallery project={project} />
              </div>

              {specs.length > 0 ? (
                <dl className="space-y-3 rounded-2xl border border-border bg-surface p-4 sm:p-5">
                  {specs.map((item) => (
                    <div
                      key={item.label}
                      className="grid gap-1 sm:grid-cols-[9.5rem_1fr] sm:gap-3"
                    >
                      <dt className="text-sm font-medium text-muted">
                        {item.label}
                      </dt>
                      <dd className="text-sm leading-relaxed text-foreground">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              ) : null}
            </div>

            <div className="mt-8 max-w-3xl">
              <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                Что сделали
              </h2>

              <p className="mt-3 text-base leading-relaxed text-foreground/90 sm:text-lg">
                {narrative}
              </p>

              {project.priceLabel ? (
                <div className="mt-6 rounded-2xl border border-border bg-[#f5f5f5] p-4 sm:p-5">
                  <p className="text-sm font-medium text-muted">
                    Стоимость на объекте
                  </p>
                  <p className="mt-1 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                    {project.priceLabel.startsWith("от")
                      ? project.priceLabel
                      : `от ${project.priceLabel}`}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    Цена указана для этого выполненного объекта. Текущая
                    стоимость рассчитывается индивидуально.
                  </p>
                  {project.priceNote ? (
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {project.priceNote}
                    </p>
                  ) : null}
                </div>
              ) : null}
            </div>
          </div>
        </section>

        <section className={`bg-background ${FENCE_SECTION_PY}`}>
          <div className={`${SECTION_CONTAINER} max-w-3xl min-w-0`}>
            <WorkProjectOrderBlock project={project} />
          </div>
        </section>

        <WorkSimilarProjects projects={similarProjects} />
      </main>
      <Footer />
    </>
  );
}
