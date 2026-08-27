"use client";

import type { ReactNode } from "react";
import Link from "next/link";

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
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
