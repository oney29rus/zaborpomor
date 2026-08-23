import { MAX_LENGTHS, sanitizeText } from "./sanitize";
import type {
  CalculatorLeadData,
  LeadSubmissionPayload,
  LeadUtmParams,
} from "./types";

function sanitizeUtm(utm: LeadUtmParams | undefined): LeadUtmParams | undefined {
  if (!utm) {
    return undefined;
  }

  const sanitized: LeadUtmParams = {
    source: sanitizeText(utm.source, MAX_LENGTHS.utmField),
    medium: sanitizeText(utm.medium, MAX_LENGTHS.utmField),
    campaign: sanitizeText(utm.campaign, MAX_LENGTHS.utmField),
    content: sanitizeText(utm.content, MAX_LENGTHS.utmField),
    term: sanitizeText(utm.term, MAX_LENGTHS.utmField),
  };

  const hasValues = Object.values(sanitized).some(Boolean);
  return hasValues ? sanitized : undefined;
}

function sanitizeCalculator(
  calculator: CalculatorLeadData | undefined,
): CalculatorLeadData | undefined {
  if (!calculator) {
    return undefined;
  }

  return {
    fenceType: sanitizeText(calculator.fenceType, 100) ?? calculator.fenceType,
    fenceTypeLabel:
      sanitizeText(calculator.fenceTypeLabel, MAX_LENGTHS.fenceTypeLabel) ??
      calculator.fenceTypeLabel,
    length: calculator.length,
    height: calculator.height,
    executionVariant: sanitizeText(
      calculator.executionVariant ?? undefined,
      MAX_LENGTHS.executionVariant,
    ) ?? null,
    gap:
      sanitizeText(calculator.gap ?? undefined, MAX_LENGTHS.gap) ?? null,
    gateType: sanitizeText(calculator.gateType, 50) ?? calculator.gateType,
    gateTypeLabel:
      sanitizeText(calculator.gateTypeLabel, MAX_LENGTHS.gateTypeLabel) ??
      calculator.gateTypeLabel,
    hasWicket: calculator.hasWicket,
    hasGateAutomation: calculator.hasGateAutomation,
    estimatedCost: calculator.estimatedCost,
    estimatedCostLabel:
      sanitizeText(
        calculator.estimatedCostLabel ?? undefined,
        MAX_LENGTHS.estimatedCostLabel,
      ) ?? null,
    summaryLine:
      sanitizeText(calculator.summaryLine, MAX_LENGTHS.summaryLine) ??
      calculator.summaryLine,
  };
}

export function normalizeLeadPayload(
  payload: LeadSubmissionPayload,
): LeadSubmissionPayload {
  return {
    source: payload.source,
    phone: payload.phone,
    name: sanitizeText(payload.name, MAX_LENGTHS.name),
    city: sanitizeText(payload.city ?? undefined, 100),
    pagePath: sanitizeText(payload.pagePath, MAX_LENGTHS.pagePath) ?? "/",
    pageUrl: sanitizeText(payload.pageUrl, MAX_LENGTHS.pageUrl) ?? payload.pageUrl,
    referrer: sanitizeText(payload.referrer, MAX_LENGTHS.referrer),
    yclid: sanitizeText(payload.yclid, MAX_LENGTHS.yclid),
    utm: sanitizeUtm(payload.utm),
    calculator: sanitizeCalculator(payload.calculator),
  };
}
