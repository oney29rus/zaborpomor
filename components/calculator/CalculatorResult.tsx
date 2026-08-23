"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TrackedPhoneLink } from "@/components/leads/TrackedPhoneLink";
import { trackEvent } from "@/lib/analytics/track";
import type { CalculatorParameterFlags } from "@/lib/calculator/config";
import { canShowPricePerMeter } from "@/lib/calculator/display";
import { formatPrice } from "@/lib/calculator/format";
import type {
  CalculatorParams,
  CalculatorResult as CalculatorResultType,
} from "@/lib/calculator/types";
import { buildCalculatorSummaryLine } from "@/lib/leads/format-calculator-lead";
import { CalculatorSubmitForm } from "./CalculatorSubmitForm";

type CalculatorResultProps = {
  params: CalculatorParams;
  result: CalculatorResultType;
  parameterFlags: CalculatorParameterFlags;
  compactMobile?: boolean;
};

export function CalculatorResult({
  params,
  result,
  parameterFlags,
  compactMobile = false,
}: CalculatorResultProps) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const showPricePerMeter =
    result.kind === "priced" && canShowPricePerMeter(result);

  const shellClass = compactMobile
    ? "mt-2 border-t border-border pt-3 max-lg:mt-2 max-lg:border-border/80 lg:mt-0 lg:border-t-0 lg:pt-0"
    : "border-t border-border pt-4 lg:border-t-0 lg:pt-0";

  const summaryLine = buildCalculatorSummaryLine(params, parameterFlags);

  const handleOpenForm = () => {
    setIsFormOpen(true);
    trackEvent("calculator_submit_opened", {
      fenceType: params.fenceType,
      length: params.length,
    });
  };

  return (
    <div className={shellClass}>
      <p
        className={`font-medium text-muted ${compactMobile ? "text-xs lg:text-sm" : "text-sm"}`}
      >
        Ориентировочная стоимость
      </p>

      {result.kind === "priced" ? (
        <>
          <p
            className={`font-bold leading-none tracking-tight text-foreground ${
              compactMobile
                ? "mt-1 text-[1.5rem] lg:mt-2 lg:text-[2rem]"
                : "mt-2 text-[clamp(1.875rem,4vw,2.25rem)] lg:text-[2rem]"
            }`}
          >
            {formatPrice(result.total)}
          </p>
          {showPricePerMeter && (
            <p
              className={`text-muted ${compactMobile ? "mt-0.5 hidden text-sm lg:mt-1.5 lg:block lg:text-[0.9375rem]" : "mt-1.5 text-sm lg:text-[0.9375rem]"}`}
            >
              ≈ {formatPrice(result.pricePerMeter)}/м
            </p>
          )}
        </>
      ) : (
        <p className="mt-2 text-[clamp(1.5rem,4vw,1.875rem)] font-bold leading-tight tracking-tight text-foreground">
          {result.message}
        </p>
      )}

      <p
        className={`text-foreground/80 ${compactMobile ? "mt-1.5 text-xs lg:mt-3 lg:text-[0.875rem]" : "mt-3 text-sm lg:text-[0.875rem]"}`}
      >
        {summaryLine}
      </p>

      <p
        className={`leading-relaxed text-muted ${compactMobile ? "mt-1.5 hidden text-xs lg:mt-3 lg:block lg:text-sm" : "mt-3 text-xs lg:text-sm"}`}
      >
        Предварительный расчёт. Точная стоимость зависит от участка и
        комплектации.
      </p>

      <div className={compactMobile ? "mt-2.5 lg:mt-4" : "mt-4"}>
        {!isFormOpen ? (
          <Button
            type="button"
            className={`w-full ${compactMobile ? "max-lg:min-h-11 max-lg:py-2.5 max-lg:text-sm" : ""}`}
            onClick={handleOpenForm}
          >
            Получить точный расчёт
          </Button>
        ) : null}
      </div>

      {isFormOpen ? (
        <CalculatorSubmitForm
          params={params}
          result={result}
          parameterFlags={parameterFlags}
          compactMobile={compactMobile}
        />
      ) : null}

      <p
        className={`text-center ${compactMobile ? "mt-2 max-lg:hidden lg:mt-3" : "mt-3"}`}
      >
        <TrackedPhoneLink
          location="calculator_result"
          className="text-sm font-semibold text-foreground transition-colors hover:text-accent"
        />
      </p>
    </div>
  );
}
