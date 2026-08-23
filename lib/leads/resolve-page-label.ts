import { getFenceTypeConfig } from "@/lib/calculator/prices";
import type { FenceTypeId } from "@/lib/calculator/types";
import { resolveCityFromPath } from "./resolve-city";

const FENCE_SLUG_TO_TYPE: Record<string, FenceTypeId> = {
  profnastil: "profnastil",
  metalloshtaketnik: "metalloshtaketnik",
  "3d-setka": "3d-setka",
  "svarnaya-setka": "svarka-setka",
  "svarnaya-setka-pvh": "svarka-setka-pvh",
  "derevyannyy-shtaketnik": "derevyannyy-shtaketnik",
};

const SERVICE_LABELS: Record<string, string> = {
  "karkas-zabora": "Каркас забора",
  "montazh-zabora-iz-materiala-zakazchika": "Монтаж из материала заказчика",
  "vintovye-svai": "Винтовые сваи",
};

const GATE_LABELS: Record<string, string> = {
  raspashnye: "Распашные ворота",
  otkatnye: "Откатные ворота",
};

/** Человекочитаемое название страницы отправки заявки. */
export function resolvePageLabel(pagePath: string): string {
  const normalized = pagePath.replace(/\/+$/, "") || "/";

  if (normalized === "/") {
    return "Главная";
  }

  const segments = normalized.split("/").filter(Boolean);
  const [first, second] = segments;

  const geoOnly = resolveCityFromPath(normalized);
  if (geoOnly && segments.length === 1) {
    return geoOnly;
  }

  if (first === "zabory" && second) {
    const fenceType = FENCE_SLUG_TO_TYPE[second];
    if (fenceType) {
      return getFenceTypeConfig(fenceType).label;
    }
  }

  if (first === "uslugi" && second && SERVICE_LABELS[second]) {
    return SERVICE_LABELS[second];
  }

  if (first === "vorota" && second && GATE_LABELS[second]) {
    return GATE_LABELS[second];
  }

  if (first === "raboty") {
    return second ? "Объект — Наши работы" : "Наши работы";
  }

  if (first === "privacy") {
    return "Политика конфиденциальности";
  }

  return normalized;
}
