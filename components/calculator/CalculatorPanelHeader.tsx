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
      className={`flex items-baseline gap-1.5 ${compactMobile ? "mb-0 lg:mb-3 lg:gap-2.5" : "mb-3 gap-2.5"}`}
    >
      <span className={`font-semibold tracking-[0.12em] text-accent ${compactMobile ? "text-[0.6875rem] lg:text-xs" : "text-xs"}`}>
        {step}
      </span>
      <h3
        className={`font-semibold text-foreground ${compactMobile ? "text-sm lg:text-base" : "text-base"}`}
      >
        {title}
      </h3>
    </div>
  );
}
