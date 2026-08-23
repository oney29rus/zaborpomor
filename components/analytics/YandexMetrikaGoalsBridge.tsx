"use client";

import { useEffect } from "react";
import type { AnalyticsEventName } from "@/lib/analytics/track";

declare global {
  interface Window {
    ym?: (counterId: number, method: string, ...args: unknown[]) => void;
  }
}

function getMetrikaCounterId(): number | null {
  const raw = process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID?.trim();

  if (!raw) {
    return null;
  }

  const counterId = Number(raw);

  if (!Number.isFinite(counterId) || counterId <= 0) {
    return null;
  }

  return counterId;
}

function resolveMetrikaGoals(
  eventName: AnalyticsEventName,
  payload: Record<string, unknown>,
): string[] {
  switch (eventName) {
    case "lead_submitted":
      return payload.source === "calculator"
        ? ["lead_submit", "calculator_submit"]
        : ["lead_submit"];
    case "phone_clicked":
      return ["phone_click"];
    case "city_click":
      return ["city_click"];
    case "fence_type_click":
      return ["fence_type_click"];
    default:
      return [];
  }
}

export function YandexMetrikaGoalsBridge() {
  useEffect(() => {
    const counterId = getMetrikaCounterId();

    if (!counterId) {
      return;
    }

    const handler = (event: Event) => {
      if (!(event instanceof CustomEvent)) {
        return;
      }

      const detail = event.detail as Record<string, unknown> | undefined;

      if (!detail || typeof detail.event !== "string") {
        return;
      }

      const goals = resolveMetrikaGoals(
        detail.event as AnalyticsEventName,
        detail,
      );

      if (goals.length === 0 || typeof window.ym !== "function") {
        return;
      }

      for (const goal of goals) {
        window.ym(counterId, "reachGoal", goal, detail);
      }
    };

    window.addEventListener("zp-analytics", handler);

    return () => {
      window.removeEventListener("zp-analytics", handler);
    };
  }, []);

  return null;
}
