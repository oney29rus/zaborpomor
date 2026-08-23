"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics/track";

type TrackedCityLinkProps = {
  href: string;
  city: string;
  className?: string;
  children: ReactNode;
};

export function TrackedCityLink({
  href,
  city,
  className,
  children,
}: TrackedCityLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => {
        trackEvent("city_click", { city, href });
      }}
    >
      {children}
    </Link>
  );
}
