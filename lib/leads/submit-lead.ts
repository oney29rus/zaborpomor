import type { LeadSubmissionPayload, LeadSubmissionResult } from "./types";

export async function submitLead(
  payload: LeadSubmissionPayload,
): Promise<LeadSubmissionResult> {
  try {
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = (await response.json()) as { error?: string };

    if (!response.ok) {
      return {
        ok: false,
        error: data.error ?? "Не удалось отправить заявку. Попробуйте позже.",
      };
    }

    return { ok: true };
  } catch {
    return {
      ok: false,
      error: "Не удалось отправить заявку. Проверьте соединение и попробуйте снова.",
    };
  }
}
