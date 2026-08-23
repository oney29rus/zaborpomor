import Link from "next/link";
import type { GeoCity } from "@/lib/geo/cities";

type CityRowProps = {
  city: GeoCity;
};

export function CityRow({ city }: CityRowProps) {
  return (
    <Link
      href={city.href}
      className="group flex items-center gap-4 rounded-xl border border-transparent px-4 py-4 transition-colors hover:border-border hover:bg-surface sm:px-5 sm:py-5"
    >
      <span className="shrink-0 text-xs font-semibold tracking-[0.12em] text-accent">
        {city.step}
      </span>

      <div className="min-w-0 flex-1">
        <h3 className="text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-accent sm:text-2xl">
          {city.name}
        </h3>
        <p className="mt-0.5 text-sm text-muted">{city.tagline}</p>
        <span className="mt-2 inline-flex text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
          Подробнее →
        </span>
      </div>

      <span
        aria-hidden="true"
        className="shrink-0 text-lg text-muted transition-colors group-hover:text-accent"
      >
        →
      </span>
    </Link>
  );
}
