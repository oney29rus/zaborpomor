"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { hitMetrikaPage } from "@/lib/analytics/metrika";

/** Отправляет hit при клиентской навигации Next.js (первый просмотр учитывает init). */
export function YandexMetrikaRouteTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstRenderRef = useRef(true);

  useEffect(() => {
    const query = searchParams.toString();
    const url = query ? `${pathname}?${query}` : pathname;

    if (isFirstRenderRef.current) {
      isFirstRenderRef.current = false;
      return;
    }

    hitMetrikaPage(url);
  }, [pathname, searchParams]);

  return null;
}
