import nodemailer from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";
import {
  buildEmailLeadView,
  buildLeadEmailHtml,
  buildLeadEmailText,
  buildEmailSubject,
} from "./email-template";
import { resolveCityFromPath } from "./resolve-city";
import type { LeadSubmissionPayload } from "./types";

export type SendToEmailResult =
  | { status: "sent" }
  | { status: "skipped"; reason: "not_configured" }
  | { status: "failed"; error: string };

type SmtpConfig = {
  host: string;
  port: number;
  user: string;
  password: string;
  leadsEmail: string;
  from: string;
};

function getSmtpConfig(): SmtpConfig | null {
  const host = process.env.SMTP_HOST?.trim();
  const port = Number(process.env.SMTP_PORT ?? "465");
  const user = process.env.SMTP_USER?.trim();
  const password = process.env.SMTP_PASSWORD?.trim();
  const leadsEmail = process.env.LEADS_EMAIL?.trim();

  if (!host || !user || !password || !leadsEmail) {
    return null;
  }

  const fromName = process.env.LEADS_EMAIL_FROM?.trim();
  const from = fromName
    ? `${fromName} <${user}>`
    : `Заборы Поморья <${user}>`;

  return {
    host,
    port: Number.isFinite(port) ? port : 465,
    user,
    password,
    leadsEmail,
    from,
  };
}

function createTransport(config: SmtpConfig) {
  const isYandex =
    config.host === "smtp.yandex.ru" || config.host === "smtp.yandex.com";

  if (isYandex && config.port === 465) {
    return nodemailer.createTransport({
      host: "smtp.yandex.ru",
      port: 465,
      secure: true,
      auth: {
        user: config.user,
        pass: config.password,
      },
      tls: {
        minVersion: "TLSv1.2",
      },
    } satisfies SMTPTransport.Options);
  }

  if (isYandex && config.port === 587) {
    return nodemailer.createTransport({
      host: "smtp.yandex.ru",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: config.user,
        pass: config.password,
      },
      tls: {
        minVersion: "TLSv1.2",
      },
    } satisfies SMTPTransport.Options);
  }

  return nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.port === 465,
    auth: {
      user: config.user,
      pass: config.password,
    },
  } satisfies SMTPTransport.Options);
}

/**
 * Отправляет заявку на LEADS_EMAIL через SMTP Яндекса.
 * Секреты читаются только из process.env на сервере.
 */
export async function sendLeadToEmail(
  payload: LeadSubmissionPayload,
): Promise<SendToEmailResult> {
  const config = getSmtpConfig();

  if (!config) {
    console.info(
      "[email] skipped: SMTP_HOST, SMTP_USER, SMTP_PASSWORD or LEADS_EMAIL is not configured",
    );
    return { status: "skipped", reason: "not_configured" };
  }

  const city =
    payload.city ?? resolveCityFromPath(payload.pagePath) ?? null;

  const view = buildEmailLeadView({
    source: payload.source,
    phone: payload.phone,
    name: payload.name,
    city,
    pagePath: payload.pagePath,
    pageUrl: payload.pageUrl,
    referrer: payload.referrer,
    utm: payload.utm,
    yclid: payload.yclid,
    calculator: payload.calculator,
  });

  const subject = buildEmailSubject(view);
  const html = buildLeadEmailHtml(view);
  const text = buildLeadEmailText(view);

  try {
    const transport = createTransport(config);

    await transport.sendMail({
      from: config.user,
      to: config.leadsEmail,
      replyTo: config.user,
      subject,
      text,
      html,
    });

    return { status: "sent" };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Email send failed";

    console.error("[email] send failed", {
      errorType: error instanceof Error ? error.name : "UnknownError",
      message,
      source: payload.source,
      pagePath: payload.pagePath,
      timestamp: new Date().toISOString(),
    });

    return {
      status: "failed",
      error: message,
    };
  }
}
