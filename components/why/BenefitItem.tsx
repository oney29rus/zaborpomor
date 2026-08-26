import type { WhyBenefit } from "@/lib/why/benefits";
import { MobileExpandableText } from "@/components/ui/MobileExpandableText";

type BenefitItemProps = {
  benefit: WhyBenefit;
  compactMobile?: boolean;
};

export function BenefitItem({ benefit, compactMobile = false }: BenefitItemProps) {
  return (
    <article>
      <p className="text-xs font-semibold tracking-[0.14em] text-accent">
        {benefit.step}
      </p>
      <h3
        className={`font-bold leading-snug text-foreground ${
          compactMobile ? "mt-1.5 text-base sm:mt-2 sm:text-lg" : "mt-2 text-base sm:text-lg"
        }`}
      >
        {benefit.title}
      </h3>
      {compactMobile ? (
        <MobileExpandableText
          collapsedLines={2}
          className="mt-1.5 text-sm leading-relaxed text-muted sm:mt-2"
        >
          {benefit.description}
        </MobileExpandableText>
      ) : (
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {benefit.description}
        </p>
      )}
    </article>
  );
}
