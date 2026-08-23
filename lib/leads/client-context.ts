import { getLeadAttributionFields } from "@/lib/analytics/attribution";
import type { LeadSubmissionPayload } from "./types";

type LeadSubmissionInput = Omit<
  LeadSubmissionPayload,
  "utm" | "yclid" | "referrer" | "city"
>;

/** Добавляет UTM, yclid, referrer и geo к заявке перед отправкой на сервер. */
export function enrichLeadSubmissionPayload(
  input: LeadSubmissionInput,
): LeadSubmissionPayload {
  const attribution = getLeadAttributionFields();

  return {
    ...input,
    ...attribution,
  };
}
