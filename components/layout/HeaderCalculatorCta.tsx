"use client";

import { usePathname } from "next/navigation";
import { ButtonLink } from "@/components/ui/Button";
import { getCalculatorCtaHref } from "@/lib/navigation/calculator-cta";

type HeaderCalculatorCtaProps = {
  className?: string;
  onClick?: () => void;
};

export function HeaderCalculatorCta({
  className,
  onClick,
}: HeaderCalculatorCtaProps) {
  const pathname = usePathname();
  const href = getCalculatorCtaHref(pathname);

  return (
    <ButtonLink
      href={href}
      variant="secondary"
      className={className}
      onClick={onClick}
    >
      Рассчитать стоимость
    </ButtonLink>
  );
}
