import { MobileExpandableText } from "@/components/ui/MobileExpandableText";
import { WHY_WARRANTY } from "@/lib/why/benefits";

type WarrantyHighlightProps = {
  compactMobile?: boolean;
};

export function WarrantyHighlight({ compactMobile = false }: WarrantyHighlightProps) {
  return (
    <div className="lg:max-w-sm">
      <p
        className={`font-bold leading-none tracking-tight text-accent ${
          compactMobile
            ? "text-[clamp(3.25rem,14vw,4.5rem)] sm:text-[clamp(4.5rem,10vw,6rem)]"
            : "text-[clamp(4.5rem,10vw,6rem)]"
        }`}
      >
        {WHY_WARRANTY.value}
      </p>
      <p
        className={`font-bold tracking-tight text-foreground ${
          compactMobile ? "mt-0.5 text-xl sm:mt-1 sm:text-2xl lg:text-[1.75rem]" : "mt-1 text-2xl sm:text-[1.75rem]"
        }`}
      >
        {WHY_WARRANTY.unit}
      </p>
      <p
        className={`font-semibold leading-snug text-foreground ${
          compactMobile ? "mt-2 text-base sm:mt-4 sm:text-lg lg:text-xl" : "mt-4 text-lg sm:text-xl"
        }`}
      >
        {WHY_WARRANTY.title}
      </p>
      {compactMobile ? (
        <MobileExpandableText
          collapsedLines={2}
          className="mt-2 text-sm leading-relaxed text-muted sm:mt-3 sm:text-[0.9375rem]"
        >
          {WHY_WARRANTY.description}
        </MobileExpandableText>
      ) : (
        <p className="mt-3 text-sm leading-relaxed text-muted sm:text-[0.9375rem]">
          {WHY_WARRANTY.description}
        </p>
      )}
    </div>
  );
}
