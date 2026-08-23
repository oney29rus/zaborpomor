import Link from "next/link";
import {
  SLIDING_GATE_CALCULATOR_SURCHARGE,
  SLIDING_GATE_STANDALONE_FROM,
  SWING_GATE_CALCULATOR_SURCHARGE,
  SWING_GATE_STANDALONE_FROM,
} from "@/lib/calculator/prices";
import { formatPrice } from "@/lib/calculator/format";

const CALCULATOR_GATE_OPTIONS = [
  {
    label: "Распашные ворота",
    price: `+${formatPrice(SWING_GATE_CALCULATOR_SURCHARGE)} к расчёту`,
  },
  {
    label: "Откатные ворота",
    price: `+${formatPrice(SLIDING_GATE_CALCULATOR_SURCHARGE)} к расчёту`,
  },
] as const;

const STANDALONE_GATE_LINKS = [
  {
    label: "распашные",
    price: formatPrice(SWING_GATE_STANDALONE_FROM),
    href: "/vorota/raspashnye/",
  },
  {
    label: "откатные",
    price: formatPrice(SLIDING_GATE_STANDALONE_FROM),
    href: "/vorota/otkatnye/",
  },
] as const;

export function PricingAddons() {
  return (
    <div className="space-y-4">
      <div>
        <p className="text-sm font-semibold text-foreground">
          При расчёте забора:
        </p>
        <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-2">
          {CALCULATOR_GATE_OPTIONS.map((option) => (
            <div key={option.label} className="flex items-baseline gap-2">
              <span className="text-sm text-foreground">{option.label}</span>
              <span className="text-sm font-bold text-foreground/90">
                {option.price}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="text-sm font-semibold text-foreground">
          Отдельно ворота:
        </p>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">
          {STANDALONE_GATE_LINKS.map((gate, index) => (
            <span key={gate.href}>
              {index > 0 ? "; " : null}
              <Link
                href={gate.href}
                className="font-semibold text-foreground transition-colors hover:text-accent"
              >
                {gate.label}
              </Link>
              {" — от "}
              {gate.price}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
