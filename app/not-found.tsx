import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">
        <section className="bg-background py-16 sm:py-20">
          <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-muted">
              Ошибка 404
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Страница не найдена
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Такой страницы нет или она была перемещена. Перейдите на главную
              или выберите нужный раздел ниже.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-accent px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-accent-hover sm:w-auto"
              >
                На главную
              </Link>
              <Link
                href="/"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-lg border border-border bg-surface px-6 py-3 text-base font-semibold text-foreground transition-colors hover:border-muted hover:bg-background sm:w-auto"
              >
                Виды заборов
              </Link>
              <Link
                href="/#calculator"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-lg border border-border bg-surface px-6 py-3 text-base font-semibold text-foreground transition-colors hover:border-muted hover:bg-background sm:w-auto"
              >
                Рассчитать стоимость
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
