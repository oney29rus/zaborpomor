import Link from "next/link";
import type { AdditionalService } from "@/lib/services/types";
import { ServicePhoto } from "./ServicePhoto";

type AdditionalServiceCardProps = {
  service: AdditionalService;
  compactMobile?: boolean;
};

export function AdditionalServiceCard({
  service,
  compactMobile = false,
}: AdditionalServiceCardProps) {
  return (
    <article className="group flex h-full flex-col">
      <Link href={service.href} className="block">
        <ServicePhoto
          src={service.image}
          alt={service.imageAlt}
          variant="card"
          compactMobile={compactMobile}
        />
      </Link>

      <div className={`flex flex-1 flex-col ${compactMobile ? "mt-1.5 lg:mt-3" : "mt-3"}`}>
        <h3
          className={`font-bold leading-snug text-foreground ${
            compactMobile ? "text-sm lg:text-base" : "text-base"
          }`}
        >
          <Link
            href={service.href}
            className="transition-colors hover:text-accent"
          >
            {service.title}
          </Link>
        </h3>

        <p
          className={`font-bold tracking-tight text-foreground ${
            compactMobile ? "mt-0.5 text-sm lg:mt-1 lg:text-base" : "mt-1 text-base"
          }`}
        >
          {service.priceLabel}
        </p>

        {service.priceNote ? (
          <p
            className={`text-xs leading-snug text-muted ${
              compactMobile ? "mt-0.5 hidden lg:block" : "mt-0.5"
            }`}
          >
            {service.priceNote}
          </p>
        ) : null}

        <p
          className={`leading-snug text-muted ${
            compactMobile
              ? "mt-1 hidden line-clamp-2 text-sm lg:block"
              : "mt-2 line-clamp-2 text-sm"
          }`}
        >
          {service.shortDescription}
        </p>

        {service.extraNote ? (
          <p
            className={`text-xs leading-snug text-foreground/75 ${
              compactMobile ? "mt-1 hidden lg:block" : "mt-1.5"
            }`}
          >
            {service.extraNote}
          </p>
        ) : null}

        <Link
          href={service.href}
          className={`mt-auto inline-flex font-semibold text-accent transition-colors hover:text-accent-hover ${
            compactMobile ? "pt-1.5 text-xs lg:pt-3 lg:text-sm" : "pt-3 text-sm"
          }`}
        >
          Подробнее →
        </Link>
      </div>
    </article>
  );
}
