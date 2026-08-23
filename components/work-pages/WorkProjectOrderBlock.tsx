import Link from "next/link";
import { getFenceCalculatorHref } from "@/lib/works/fence-routes";
import type { WorkProject } from "@/lib/works/types";

type WorkProjectOrderBlockProps = {
  project: WorkProject;
};

export function WorkProjectOrderBlock({ project }: WorkProjectOrderBlockProps) {
  return (
    <section className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
      <h2 className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
        Нужен похожий забор?
      </h2>

      <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
        Рассчитайте ориентировочную стоимость с материалом и монтажом —
        калькулятор сразу подставит тип забора «{project.fenceType}».
      </p>

      <div className="mt-5">
        <Link
          href={getFenceCalculatorHref(project)}
          className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-accent px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:w-auto"
        >
          Рассчитать стоимость
        </Link>
      </div>
    </section>
  );
}
