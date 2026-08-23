import { getFenceTypeConfig } from "@/lib/calculator/prices";

/** Каркас забора за п.м. — из централизованного конфига цен. */
export const KARKAS_PRICE_PER_METER =
  getFenceTypeConfig("karkas").pricePerMeter15 ?? 2_000;

export {
  GATE_AUTOMATION_NICE_PRICE,
  SCREW_PILE_57_PRICE,
  SCREW_PILE_76_PRICE,
  SCREW_PILE_PRICE_FROM,
  SCREW_PILE_PRICE_TO,
  SLIDING_GATE_CALCULATOR_SURCHARGE,
  SLIDING_GATE_STANDALONE_FROM,
  SWING_GATE_CALCULATOR_SURCHARGE,
  SWING_GATE_STANDALONE_FROM,
} from "@/lib/calculator/prices";

/** Standalone: распашные ворота шириной 4 м. */
export { SWING_GATE_STANDALONE_FROM as SWING_GATES_PRICE } from "@/lib/calculator/prices";

/** Standalone: откатные ворота шириной 4 м. */
export { SLIDING_GATE_STANDALONE_FROM as SLIDING_GATE_PRICE } from "@/lib/calculator/prices";

export function formatServicePrice(amount: number): string {
  return `${amount.toLocaleString("ru-RU")} ₽`;
}

export function formatServicePricePerUnit(
  amount: number,
  unit: "m" | "piece",
): string {
  const suffix = unit === "m" ? "/м" : "/шт.";
  return `${formatServicePrice(amount)}${suffix}`;
}
