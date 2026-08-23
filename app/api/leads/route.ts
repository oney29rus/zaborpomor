import { NextResponse } from "next/server";
import { normalizeLeadPayload } from "@/lib/leads/normalize-lead";
import { processLeadSubmission } from "@/lib/leads/process-lead";
import {
  isDuplicateSubmission,
  markSubmission,
} from "@/lib/leads/rate-limit";
import type {
  CalculatorLeadData,
  LeadSubmissionPayload,
  LeadUtmParams,
} from "@/lib/leads/types";
import { toE164Phone } from "@/lib/phone/mask";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isValidUtm(value: unknown): value is LeadUtmParams {
  if (!isRecord(value)) {
    return false;
  }

  const keys = ["source", "medium", "campaign", "content", "term"] as const;

  return keys.every(
    (key) => value[key] === undefined || typeof value[key] === "string",
  );
}

function isValidCalculator(value: unknown): value is CalculatorLeadData {
  if (!isRecord(value)) {
    return false;
  }

  return (
    typeof value.fenceType === "string" &&
    typeof value.fenceTypeLabel === "string" &&
    typeof value.length === "number" &&
    typeof value.height === "number" &&
    (value.executionVariant === null ||
      typeof value.executionVariant === "string") &&
    (value.gap === null || typeof value.gap === "string") &&
    typeof value.gateType === "string" &&
    typeof value.gateTypeLabel === "string" &&
    typeof value.hasWicket === "boolean" &&
    typeof value.hasGateAutomation === "boolean" &&
    (value.estimatedCost === null || typeof value.estimatedCost === "number") &&
    (value.estimatedCostLabel === null ||
      typeof value.estimatedCostLabel === "string") &&
    typeof value.summaryLine === "string"
  );
}

function isValidPayload(body: unknown): body is LeadSubmissionPayload {
  if (!isRecord(body)) {
    return false;
  }

  return (
    (body.source === "calculator" || body.source === "cta") &&
    typeof body.phone === "string" &&
    typeof body.pagePath === "string" &&
    typeof body.pageUrl === "string" &&
    (body.name === undefined || typeof body.name === "string") &&
    (body.city === undefined || typeof body.city === "string") &&
    (body.yclid === undefined || typeof body.yclid === "string") &&
    (body.referrer === undefined || typeof body.referrer === "string") &&
    (body.utm === undefined || isValidUtm(body.utm)) &&
    (body.calculator === undefined || isValidCalculator(body.calculator))
  );
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Некорректный формат данных." },
      { status: 400 },
    );
  }

  if (!isValidPayload(body)) {
    return NextResponse.json(
      { error: "Некорректные данные заявки." },
      { status: 400 },
    );
  }

  const phone = toE164Phone(body.phone);

  if (!phone) {
    return NextResponse.json(
      { error: "Укажите корректный номер телефона." },
      { status: 400 },
    );
  }

  if (isDuplicateSubmission(phone)) {
    return NextResponse.json(
      {
        error:
          "Заявка уже отправлена. Подождите минуту перед повторной отправкой.",
      },
      { status: 429 },
    );
  }

  const payload = normalizeLeadPayload({
    ...body,
    phone,
    name: body.name?.trim() || undefined,
    city: body.city?.trim() || undefined,
    yclid: body.yclid?.trim() || undefined,
    referrer: body.referrer?.trim() || undefined,
  });

  const result = await processLeadSubmission(payload);

  if (result.email.status === "skipped") {
    return NextResponse.json(
      {
        error:
          "Отправка заявок временно недоступна. Попробуйте позже или позвоните нам.",
      },
      { status: 503 },
    );
  }

  if (result.email.status === "failed") {
    return NextResponse.json(
      { error: "Не удалось отправить заявку. Попробуйте позже." },
      { status: 502 },
    );
  }

  markSubmission(phone);

  return NextResponse.json({ ok: true });
}
