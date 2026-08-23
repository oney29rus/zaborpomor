import {
  PRICING_FOOTNOTE,
  PRICING_INCLUDED_ITEMS,
} from "@/lib/pricing/featured-plans";

export function PricingIncluded() {
  return (
    <div className="rounded-2xl border border-border bg-surface p-5 lg:p-6">
      <h3 className="text-lg font-bold tracking-tight text-foreground">
        Что входит в стоимость
      </h3>

      <ul className="mt-4 space-y-2.5">
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

      <p className="mt-5 text-xs leading-relaxed text-muted lg:text-sm">
        {PRICING_FOOTNOTE}
      </p>
    </div>
  );
}
