import type { WhyBenefit } from "@/lib/why/benefits";

type BenefitItemProps = {
  benefit: WhyBenefit;
};

export function BenefitItem({ benefit }: BenefitItemProps) {
  return (
    <article>
      <p className="text-xs font-semibold tracking-[0.14em] text-accent">
        {benefit.step}
      </p>
      <h3 className="mt-2 text-base font-bold leading-snug text-foreground sm:text-lg">
        {benefit.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {benefit.description}
      </p>
    </article>
  );
}
