type CalculatorPanelHeaderProps = {
  step: string;
  title: string;
  compactMobile?: boolean;
};

export function CalculatorPanelHeader({
  step,
  title,
  compactMobile = false,
}: CalculatorPanelHeaderProps) {
  return (
    <div
      className={`flex items-baseline gap-2 ${compactMobile ? "mb-1.5 lg:mb-3 lg:gap-2.5" : "mb-3 gap-2.5"}`}
    >
      <span className="text-xs font-semibold tracking-[0.12em] text-accent">
        {step}
      </span>
      <h3
        className={`font-semibold text-foreground ${compactMobile ? "text-[0.9375rem] lg:text-base" : "text-base"}`}
      >
        {title}
      </h3>
    </div>
  );
}
