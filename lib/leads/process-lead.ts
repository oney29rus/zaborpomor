import { sendLeadToEmail, type SendToEmailResult } from "./send-to-email";
import type { LeadSubmissionPayload } from "./types";

export type ProcessLeadResult = {
  payload: LeadSubmissionPayload;
  email: SendToEmailResult;
};

function logLeadReceived(payload: LeadSubmissionPayload): void {
  console.info(
    "[lead]",
    JSON.stringify({
      source: payload.source,
      pagePath: payload.pagePath,
      hasName: Boolean(payload.name),
      hasCalculator: Boolean(payload.calculator),
      city: payload.city ?? null,
      hasUtm: Boolean(payload.utm?.source),
      hasYclid: Boolean(payload.yclid),
      timestamp: new Date().toISOString(),
    }),
  );
}

/**
 * Обрабатывает заявку: логирует и отправляет email через SMTP.
 */
export async function processLeadSubmission(
  payload: LeadSubmissionPayload,
): Promise<ProcessLeadResult> {
  logLeadReceived(payload);

  const email = await sendLeadToEmail(payload);

  if (email.status === "sent") {
    console.info("[email] lead sent", {
      source: payload.source,
      pagePath: payload.pagePath,
      timestamp: new Date().toISOString(),
    });
  }

  return { payload, email };
}
