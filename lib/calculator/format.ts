import type { FenceHeight } from "@/lib/calculator/types";

const currencyFormatter = new Intl.NumberFormat("ru-RU", {
  style: "currency",
  currency: "RUB",
  maximumFractionDigits: 0,
});

export function formatPrice(amount: number): string {
  return currencyFormatter.format(amount);
}

export function formatLength(meters: number): string {
  return `${meters} м`;
}

export function formatHeight(height: FenceHeight): string {
  return `Высота ${height.toString().replace(".", ",")} м`;
}

export function formatGateType(
  gateType: "none" | "swing" | "sliding",
): string {
  switch (gateType) {
    case "none":
      return "Без ворот";
    case "swing":
      return "Распашные ворота";
    case "sliding":
      return "Откатные ворота";
    default:
      return "";
  }
}

export function formatGateTypeShort(
  gateType: "none" | "swing" | "sliding",
): string {
  switch (gateType) {
    case "none":
      return "без ворот";
    case "swing":
      return "распашные ворота";
    case "sliding":
      return "откатные ворота";
    default:
      return "";
  }
}

export function formatMetallVariant(variant: "standard" | "shahmatka"): string {
  return variant === "shahmatka"
    ? "металлоштакетник «шахматка»"
    : "металлоштакетник";
}

export function formatGap(gap: "4cm" | "2cm" | "closed"): string {
  switch (gap) {
    case "4cm":
      return "зазор 4 см";
    case "2cm":
      return "зазор 2 см";
    case "closed":
      return "без зазора";
    default:
      return "";
  }
}
