"use client";

import type { ReactNode } from "react";
import { PHONE, PHONE_HREF } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics/track";

type TrackedPhoneLinkProps = {
  className?: string;
  location: string;
  children?: ReactNode;
};

export function TrackedPhoneLink({
  className = "",
  location,
  children = PHONE,
}: TrackedPhoneLinkProps) {
  return (
    <a
      href={PHONE_HREF}
      className={className}
      onClick={() =>
        trackEvent("phone_clicked", {
          location,
        })
      }
    >
      {children}
    </a>
  );
}
