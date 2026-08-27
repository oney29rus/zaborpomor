export type MetrikaGoalName =
  | "lead_success"
  | "phone_click"
  | "calculator_interaction"
  | "calculator_cta";

declare global {
  interface Window {
    ym?: (counterId: number, method: string, ...args: unknown[]) => void;
  }
}

export function getMetrikaCounterId(): number | null {
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

export function reachMetrikaGoal(
  goalName: MetrikaGoalName,
  params?: Record<string, unknown>,
): void {
  if (typeof window === "undefined") {
    return;
  }

  const counterId = getMetrikaCounterId();

  if (!counterId || typeof window.ym !== "function") {
    return;
  }

  try {
    if (params && Object.keys(params).length > 0) {
      window.ym(counterId, "reachGoal", goalName, params);
    } else {
      window.ym(counterId, "reachGoal", goalName);
    }
  } catch {
    // AdBlock / blocked Metrika — ignore silently
  }
}

export function hitMetrikaPage(url: string): void {
  if (typeof window === "undefined") {
    return;
  }

  const counterId = getMetrikaCounterId();

  if (!counterId || typeof window.ym !== "function") {
    return;
  }

  try {
    window.ym(counterId, "hit", url, { referer: document.referrer });
  } catch {
    // AdBlock / blocked Metrika — ignore silently
  }
}
