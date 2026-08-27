"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics/track";

function isCalculatorCtaHref(href: string): boolean {
  const normalized = href.trim();

  return (
    normalized === "#calculator" ||
    normalized === "/#calculator" ||
    normalized.endsWith("#calculator")
  );
}

/** Централизованный трекинг tel: и CTA к калькулятору без изменения внешнего вида ссылок. */
export function AnalyticsClickBridge() {
  useEffect(() => {
    const handler = (event: MouseEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const anchor = target.closest("a[href]");

      if (!(anchor instanceof HTMLAnchorElement)) {
        return;
      }

      const href = anchor.getAttribute("href") ?? "";

      if (href.startsWith("tel:")) {
        trackEvent("phone_click", {
          location: anchor.dataset.analyticsLocation ?? href,
        });
        return;
      }

      if (isCalculatorCtaHref(href)) {
        trackEvent("calculator_cta", { href });
      }
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler, true);
    };
  }, []);

  return null;
}
