import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";

type CityStubPageProps = {
  cityName: string;
  title: string;
};

export function createCityStubMetadata(cityName: string): Metadata {
  return {
    title: `Заборы под ключ в ${cityName}`,
  };
}

export function CityStubPage({ cityName, title }: CityStubPageProps) {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">
        <section className="bg-background py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {title}
            </h1>
            <p className="mt-4 text-base text-muted">
              Страница для {cityName} находится в разработке.
            </p>
            <Link
              href="/"
              className="mt-8 inline-flex text-base font-semibold text-foreground transition-colors hover:text-accent"
            >
              На главную →
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
