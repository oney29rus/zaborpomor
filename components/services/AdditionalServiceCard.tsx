import Link from "next/link";
import type { AdditionalService } from "@/lib/services/types";
import { ServicePhoto } from "./ServicePhoto";

type AdditionalServiceCardProps = {
  service: AdditionalService;
};

export function AdditionalServiceCard({ service }: AdditionalServiceCardProps) {
  return (
    <article className="group flex h-full flex-col">
      <Link href={service.href} className="block">
        <ServicePhoto
          src={service.image}
          alt={service.imageAlt}
          variant="card"
        />
      </Link>

      <div className="mt-3 flex flex-1 flex-col">
        <h3 className="text-base font-bold leading-snug text-foreground">
          <Link
            href={service.href}
            className="transition-colors hover:text-accent"
          >
            {service.title}
          </Link>
        </h3>

        <p className="mt-1 text-base font-bold tracking-tight text-foreground">
          {service.priceLabel}
        </p>

        {service.priceNote ? (
          <p className="mt-0.5 text-xs leading-snug text-muted">
            {service.priceNote}
          </p>
        ) : null}

        <p className="mt-2 line-clamp-2 text-sm leading-snug text-muted">
          {service.shortDescription}
        </p>

        {service.extraNote ? (
          <p className="mt-1.5 text-xs leading-snug text-foreground/75">
            {service.extraNote}
          </p>
        ) : null}

        <Link
          href={service.href}
          className="mt-auto inline-flex pt-3 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
        >
          Подробнее →
        </Link>
      </div>
    </article>
  );
}
