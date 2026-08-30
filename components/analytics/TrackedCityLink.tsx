"use client";

import type { ReactNode } from "react";
import { InternalLink } from "@/components/ui/InternalLink";

type TrackedCityLinkProps = {
  href: string;
  city: string;
  className?: string;
  children: ReactNode;
};

export function TrackedCityLink({
  href,
  className,
  children,
}: TrackedCityLinkProps) {
  return (
    <InternalLink href={href} className={className}>
      {children}
    </InternalLink>
  );
}
