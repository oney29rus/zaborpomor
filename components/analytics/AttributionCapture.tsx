"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { captureAttributionFromLocation } from "@/lib/analytics/attribution";

/** Захватывает UTM / yclid / referrer при загрузке и переходах по сайту. */
export function AttributionCapture() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    captureAttributionFromLocation();
  }, [pathname, searchParams]);

  return null;
}
