import type { CalculatorLeadData, LeadSource, LeadUtmParams } from "./types";
import { resolvePageLabel } from "./resolve-page-label";
import { escapeHtml } from "./sanitize";

export type EmailLeadView = {
  name: string | null;
  phone: string;
  phoneTel: string;
  city: string | null;
  formSource: LeadSource;
  formSourceLabel: string;
  pagePath: string;
  pageLabel: string;
  pageUrl: string;
  referrer: string | null;
  utm: LeadUtmParams;
  yclid: string | null;
  calculator: CalculatorLeadData | null;
};

const FORM_SOURCE_LABELS: Record<LeadSource, string> = {
  calculator: "Калькулятор",
  cta: "Форма расчёта",
};

function formatWicket(hasWicket: boolean | undefined): string | null {
  if (hasWicket === undefined) {
    return null;
  }
  return hasWicket ? "Да" : "Нет";
}

function formatAutomation(hasAutomation: boolean | undefined): string | null {
  if (hasAutomation === undefined) {
    return null;
  }
  return hasAutomation ? "Да" : "Нет";
}

function hasAdsData(view: EmailLeadView): boolean {
  return Boolean(
    view.utm.source ||
      view.utm.medium ||
      view.utm.campaign ||
      view.utm.content ||
      view.utm.term ||
      view.yclid,
  );
}

export function buildEmailSubject(view: EmailLeadView): string {
  const fence = view.calculator?.fenceTypeLabel;
  const city = view.city;
  const length = view.calculator?.length;

  if (fence && city && length) {
    return `Новая заявка — ${fence} — ${city} — ${length} м`;
  }

  if (fence && city) {
    return `Новая заявка — ${fence} — ${city}`;
  }

  if (fence && length) {
    return `Новая заявка — ${fence} — ${length} м`;
  }

  if (fence) {
    return `Новая заявка — ${fence}`;
  }

  if (city) {
    return `Новая заявка — ${city}`;
  }

  return "Новая заявка — Заборы Поморья";
}

function renderRow(label: string, value: string | null | undefined): string {
  if (!value) {
    return "";
  }

  return `
    <tr>
      <td style="padding:6px 12px 6px 0;color:#64748b;font-size:14px;vertical-align:top;white-space:nowrap;">${escapeHtml(label)}</td>
      <td style="padding:6px 0;font-size:14px;color:#0f172a;vertical-align:top;">${escapeHtml(value)}</td>
    </tr>`;
}

function renderSection(title: string, rows: string): string {
  if (!rows.trim()) {
    return "";
  }

  return `
    <h2 style="margin:28px 0 12px;font-size:13px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#475569;">${escapeHtml(title)}</h2>
    <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;">${rows}</table>`;
}

function renderCallButton(phoneTel: string): string {
  return `
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin:18px 0 4px;">
      <tr>
        <td>
          <a href="tel:${escapeHtml(phoneTel)}" style="display:inline-block;padding:14px 28px;background:#16a34a;color:#ffffff;text-decoration:none;font-size:16px;font-weight:700;border-radius:8px;line-height:1.2;">Позвонить клиенту</a>
        </td>
      </tr>
    </table>`;
}

export function buildLeadEmailHtml(view: EmailLeadView): string {
  const calc = view.calculator;

  const mainRows = [
    renderRow("Имя", view.name),
    renderRow("Телефон", view.phone),
  ].join("");

  const cityRow = view.city ? renderRow("Город", view.city) : "";

  const costBlock = calc?.estimatedCostLabel
    ? `
      <div style="margin:24px 0;padding:18px 20px;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:10px;">
        <div style="font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#166534;">Ориентировочная стоимость</div>
        <div style="margin-top:8px;font-size:28px;font-weight:700;line-height:1.2;color:#14532d;">${escapeHtml(calc.estimatedCostLabel)}</div>
      </div>`
    : "";

  const fenceRows = calc
    ? [
        renderRow("Тип забора", calc.fenceTypeLabel),
        renderRow("Длина", `${calc.length} м`),
        renderRow("Высота", `${calc.height.toString().replace(".", ",")} м`),
        renderRow("Вариант", calc.executionVariant),
        renderRow("Зазор", calc.gap),
        renderRow("Ворота", calc.gateTypeLabel),
        renderRow("Калитка", formatWicket(calc.hasWicket)),
        renderRow("Автоматика", formatAutomation(calc.hasGateAutomation)),
      ].join("")
    : "";

  const sourceRows = [
    renderRow("Страница", view.pageLabel),
    renderRow("URL", view.pageUrl),
    renderRow("Тип формы", view.formSourceLabel),
    renderRow("Реферер", view.referrer),
  ].join("");

  const adsRows = [
    renderRow("Источник", view.utm.source),
    renderRow("Канал", view.utm.medium),
    renderRow("Кампания", view.utm.campaign),
    renderRow("Объявление", view.utm.content),
    renderRow("Поисковый запрос", view.utm.term),
    renderRow("yclid", view.yclid),
  ].join("");

  return `<!DOCTYPE html>
<html lang="ru">
  <body style="margin:0;padding:24px;background:#f8fafc;font-family:Arial,Helvetica,sans-serif;">
    <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;">
      <div style="padding:24px 28px;background:#0f172a;color:#ffffff;">
        <h1 style="margin:0;font-size:22px;line-height:1.35;font-weight:700;">НОВАЯ ЗАЯВКА — ЗАБОРЫ ПОМОРЬЯ</h1>
      </div>
      <div style="padding:28px;">
        <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;">${mainRows}</table>
        ${renderCallButton(view.phoneTel)}
        ${cityRow ? `<table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;margin-top:8px;">${cityRow}</table>` : ""}
        ${costBlock}
        ${renderSection("Параметры забора", fenceRows)}
        ${renderSection("Источник заявки", sourceRows)}
        ${hasAdsData(view) ? renderSection("Реклама", adsRows) : ""}
      </div>
    </div>
  </body>
</html>`;
}

export function buildLeadEmailText(view: EmailLeadView): string {
  const lines = ["НОВАЯ ЗАЯВКА — ЗАБОРЫ ПОМОРЬЯ", ""];

  const add = (label: string, value: string | null | undefined) => {
    if (value) {
      lines.push(`${label}: ${value}`);
    }
  };

  add("Имя", view.name);
  add("Телефон", view.phone);
  lines.push(`Позвонить: tel:${view.phoneTel}`);
  add("Город", view.city);

  const calc = view.calculator;
  if (calc?.estimatedCostLabel) {
    lines.push("", `ОРИЕНТИРОВОЧНАЯ СТОИМОСТЬ: ${calc.estimatedCostLabel}`);
  }

  if (calc) {
    lines.push("", "ПАРАМЕТРЫ ЗАБОРА");
    add("Тип забора", calc.fenceTypeLabel);
    add("Длина", `${calc.length} м`);
    add("Высота", `${calc.height.toString().replace(".", ",")} м`);
    add("Вариант", calc.executionVariant);
    add("Зазор", calc.gap);
    add("Ворота", calc.gateTypeLabel);
    add("Калитка", formatWicket(calc.hasWicket));
    add("Автоматика", formatAutomation(calc.hasGateAutomation));
  }

  lines.push("", "ИСТОЧНИК ЗАЯВКИ");
  add("Страница", view.pageLabel);
  add("URL", view.pageUrl);
  add("Тип формы", view.formSourceLabel);
  add("Реферер", view.referrer);

  if (hasAdsData(view)) {
    lines.push("", "РЕКЛАМА");
    add("Источник", view.utm.source);
    add("Канал", view.utm.medium);
    add("Кампания", view.utm.campaign);
    add("Объявление", view.utm.content);
    add("Поисковый запрос", view.utm.term);
    add("yclid", view.yclid);
  }

  return lines.join("\n");
}

export function buildEmailLeadView(input: {
  source: LeadSource;
  phone: string;
  name?: string;
  city?: string | null;
  pagePath: string;
  pageUrl: string;
  referrer?: string;
  utm?: LeadUtmParams;
  yclid?: string;
  calculator?: CalculatorLeadData;
}): EmailLeadView {
  const phoneTel = input.phone.replace(/[^\d+]/g, "");

  return {
    name: input.name?.trim() || null,
    phone: input.phone,
    phoneTel,
    city: input.city ?? null,
    formSource: input.source,
    formSourceLabel: FORM_SOURCE_LABELS[input.source],
    pagePath: input.pagePath,
    pageLabel: resolvePageLabel(input.pagePath),
    pageUrl: input.pageUrl,
    referrer: input.referrer?.trim() || null,
    utm: input.utm ?? {},
    yclid: input.yclid?.trim() || null,
    calculator: input.calculator ?? null,
  };
}
