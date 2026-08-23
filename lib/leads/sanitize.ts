const MAX_LENGTHS = {
  name: 100,
  pagePath: 500,
  pageUrl: 2000,
  referrer: 2000,
  yclid: 200,
  utmField: 200,
  fenceTypeLabel: 200,
  executionVariant: 200,
  gap: 100,
  gateTypeLabel: 100,
  estimatedCostLabel: 50,
  summaryLine: 500,
} as const;

export function stripControlChars(value: string): string {
  return value.replace(/[\u0000-\u001F\u007F]/g, "").trim();
}

export function sanitizeText(
  value: string | undefined,
  maxLength: number,
): string | undefined {
  if (value === undefined) {
    return undefined;
  }

  const cleaned = stripControlChars(value.replace(/<[^>]*>/g, ""));
  if (!cleaned) {
    return undefined;
  }

  return cleaned.slice(0, maxLength);
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export { MAX_LENGTHS };
