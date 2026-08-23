import type { LeadUtmParams } from "@/lib/leads/types";
import { resolveCityFromPath } from "@/lib/leads/resolve-city";

const STORAGE_KEY = "zp_attribution";
const TTL_MS = 30 * 24 * 60 * 60 * 1000;

export type StoredAttribution = {
  utm: LeadUtmParams;
  yclid?: string;
  referrer?: string;
  landingUrl?: string;
  /** Город/район с geo-страницы первого визита (first-touch). */
  geoCity?: string;
  capturedAt: number;
};

function isBrowser(): boolean {
  return typeof window !== "undefined";
}

function readStorage(): StoredAttribution | null {
  if (!isBrowser()) {
    return null;
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return null;
    }

    const parsed = JSON.parse(raw) as StoredAttribution;

    if (!parsed.capturedAt || Date.now() - parsed.capturedAt > TTL_MS) {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }

    return parsed;
  } catch {
    return null;
  }
}

function writeStorage(data: StoredAttribution): void {
  if (!isBrowser()) {
    return;
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function parseUtmFromSearchParams(
  searchParams: URLSearchParams,
): LeadUtmParams {
  const utm: LeadUtmParams = {};

  const source = searchParams.get("utm_source");
  const medium = searchParams.get("utm_medium");
  const campaign = searchParams.get("utm_campaign");
  const content = searchParams.get("utm_content");
  const term = searchParams.get("utm_term");

  if (source) utm.source = source;
  if (medium) utm.medium = medium;
  if (campaign) utm.campaign = campaign;
  if (content) utm.content = content;
  if (term) utm.term = term;

  return utm;
}

function hasUtmParams(utm: LeadUtmParams): boolean {
  return Object.values(utm).some(Boolean);
}

function mergeUtmFirstTouch(
  existing: LeadUtmParams,
  incoming: LeadUtmParams,
): LeadUtmParams {
  return {
    source: existing.source ?? incoming.source,
    medium: existing.medium ?? incoming.medium,
    campaign: existing.campaign ?? incoming.campaign,
    content: existing.content ?? incoming.content,
    term: existing.term ?? incoming.term,
  };
}

function normalizeReferrer(referrer: string): string | undefined {
  const trimmed = referrer.trim();
  if (!trimmed) {
    return undefined;
  }

  try {
    const currentHost = window.location.hostname;
    const referrerHost = new URL(trimmed).hostname;
    if (referrerHost === currentHost) {
      return undefined;
    }
  } catch {
    return undefined;
  }

  return trimmed;
}

/**
 * Сохраняет UTM, yclid и referrer при первом визите (first-touch, 30 дней).
 * Вызывается на клиенте при загрузке страницы.
 */
export function captureAttributionFromLocation(): void {
  if (!isBrowser()) {
    return;
  }

  const searchParams = new URLSearchParams(window.location.search);
  const incomingUtm = parseUtmFromSearchParams(searchParams);
  const incomingYclid = searchParams.get("yclid") ?? undefined;
  const incomingReferrer = normalizeReferrer(document.referrer);
  const landingUrl = window.location.href;
  const incomingGeoCity =
    resolveCityFromPath(window.location.pathname) ?? undefined;

  const existing = readStorage();

  if (!existing) {
    const initial: StoredAttribution = {
      utm: incomingUtm,
      yclid: incomingYclid,
      referrer: incomingReferrer,
      landingUrl,
      geoCity: incomingGeoCity,
      capturedAt: Date.now(),
    };

    if (
      hasUtmParams(initial.utm) ||
      initial.yclid ||
      initial.referrer ||
      initial.geoCity ||
      initial.landingUrl
    ) {
      writeStorage(initial);
    }

    return;
  }

  const next: StoredAttribution = {
    ...existing,
    utm: mergeUtmFirstTouch(existing.utm, incomingUtm),
    yclid: existing.yclid ?? incomingYclid,
    referrer: existing.referrer ?? incomingReferrer,
    landingUrl: existing.landingUrl ?? landingUrl,
    geoCity: existing.geoCity ?? incomingGeoCity,
  };

  writeStorage(next);
}

/** Возвращает сохранённые UTM / yclid / referrer для отправки в заявке. */
export function getStoredAttribution(): StoredAttribution | null {
  return readStorage();
}

/** UTM, yclid, referrer и geo для payload заявки. */
export function getLeadAttributionFields(): {
  utm?: LeadUtmParams;
  yclid?: string;
  referrer?: string;
  city?: string;
} {
  const stored = readStorage();

  if (!stored) {
    return {};
  }

  const utm = hasUtmParams(stored.utm) ? stored.utm : undefined;

  return {
    utm,
    yclid: stored.yclid,
    referrer: stored.referrer,
    city: stored.geoCity,
  };
}
