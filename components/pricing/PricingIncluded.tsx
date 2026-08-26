import { MobileExpandableText } from "@/components/ui/MobileExpandableText";
import {
  PRICING_FOOTNOTE,
  PRICING_INCLUDED_ITEMS,
} from "@/lib/pricing/featured-plans";

type PricingIncludedProps = {
  compactMobile?: boolean;
};

export function PricingIncluded({ compactMobile = false }: PricingIncludedProps) {
  return (
    <div
      className={`rounded-2xl border border-border bg-surface ${
        compactMobile ? "p-4 lg:p-6" : "p-5 lg:p-6"
      }`}
    >
      <h3 className="text-lg font-bold tracking-tight text-foreground">
        Что входит в стоимость
      </h3>

      <ul className={`space-y-2 ${compactMobile ? "mt-3 lg:mt-4 lg:space-y-2.5" : "mt-4 space-y-2.5"}`}>
        {PRICING_INCLUDED_ITEMS.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2.5 text-sm text-foreground/90 lg:text-[0.9375rem]"
          >
            <span
              aria-hidden="true"
              className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
            />
            {item}
          </li>
        ))}
      </ul>

      {compactMobile ? (
        <MobileExpandableText
          collapsedLines={3}
          className="mt-3 text-xs leading-relaxed text-muted lg:mt-5 lg:text-sm"
        >
          {PRICING_FOOTNOTE}
        </MobileExpandableText>
      ) : (
        <p className="mt-5 text-xs leading-relaxed text-muted lg:text-sm">
          {PRICING_FOOTNOTE}
        </p>
      )}
    </div>
  );
}
