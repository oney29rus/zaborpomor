export type AnalyticsEventName =
  | "calculator_started"
  | "calculator_changed"
  | "calculator_submit_opened"
  | "lead_submitted"
  | "phone_clicked"
  | "city_click"
  | "fence_type_click";

export type AnalyticsPayload = Record<string, string | number | boolean | null>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function trackEvent(
  name: AnalyticsEventName,
  payload: AnalyticsPayload = {},
): void {
  if (typeof window === "undefined") {
    return;
  }

  const detail = { event: name, ...payload, timestamp: Date.now() };

  window.dispatchEvent(new CustomEvent("zp-analytics", { detail }));

  window.dataLayer?.push(detail);

  if (process.env.NODE_ENV === "development") {
    console.info("[analytics]", name, payload);
  }
}
