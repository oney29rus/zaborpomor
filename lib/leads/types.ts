export type LeadUtmParams = {
  source?: string;
  medium?: string;
  campaign?: string;
  content?: string;
  term?: string;
};

export type LeadSource = "calculator" | "cta";

export type CalculatorLeadData = {
  fenceType: string;
  fenceTypeLabel: string;
  length: number;
  height: number;
  executionVariant: string | null;
  gap: string | null;
  gateType: string;
  gateTypeLabel: string;
  hasWicket: boolean;
  hasGateAutomation: boolean;
  estimatedCost: number | null;
  estimatedCostLabel: string | null;
  summaryLine: string;
};

export type LeadSubmissionPayload = {
  source: LeadSource;
  phone: string;
  name?: string;
  city?: string;
  pagePath: string;
  pageUrl: string;
  utm?: LeadUtmParams;
  yclid?: string;
  referrer?: string;
  calculator?: CalculatorLeadData;
};

export type LeadSubmissionResult =
  | { ok: true }
  | { ok: false; error: string };
