"use client";

import { usePathname } from "next/navigation";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { PhoneInput } from "@/components/leads/PhoneInput";
import { PrivacyConsent } from "@/components/leads/PrivacyConsent";
import { trackEvent } from "@/lib/analytics/track";
import type { CalculatorParameterFlags } from "@/lib/calculator/config";
import { formatPrice } from "@/lib/calculator/format";
import type {
  CalculatorParams,
  CalculatorResult,
} from "@/lib/calculator/types";
import {
  buildCalculatorLeadData,
  buildCalculatorSummaryLine,
} from "@/lib/leads/format-calculator-lead";
import { enrichLeadSubmissionPayload } from "@/lib/leads/client-context";
import { submitLead } from "@/lib/leads/submit-lead";
import { isCompletePhone } from "@/lib/phone/mask";

type CalculatorSubmitFormProps = {
  params: CalculatorParams;
  result: CalculatorResult;
  parameterFlags: CalculatorParameterFlags;
  compactMobile?: boolean;
  onClose?: () => void;
};

const inputClassName =
  "h-12 w-full min-w-0 rounded-lg border border-border bg-background px-4 text-base text-foreground outline-none transition-colors placeholder:text-muted focus:border-accent focus:ring-1 focus:ring-accent";

const compactInputClassName =
  "h-11 w-full min-w-0 rounded-lg border border-border bg-background px-3 text-base text-foreground outline-none transition-colors placeholder:text-muted focus:border-accent focus:ring-1 focus:ring-accent lg:h-12 lg:px-4";

export function CalculatorSubmitForm({
  params,
  result,
  parameterFlags,
  compactMobile = false,
}: CalculatorSubmitFormProps) {
  const pathname = usePathname();
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const summaryLine = buildCalculatorSummaryLine(params, parameterFlags);
  const estimatedLabel =
    result.kind === "priced" ? formatPrice(result.total) : null;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    if (!isCompletePhone(phone)) {
      setError("Укажите номер телефона полностью.");
      return;
    }

    if (!privacyAccepted) {
      setError("Подтвердите согласие с политикой конфиденциальности.");
      return;
    }

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    const calculator = buildCalculatorLeadData(params, result, parameterFlags);
    const pageUrl =
      typeof window !== "undefined" ? window.location.href : pathname;

    const response = await submitLead(
      enrichLeadSubmissionPayload({
        source: "calculator",
        phone,
        name: name.trim() || undefined,
        pagePath: pathname,
        pageUrl,
        calculator,
      }),
    );

    setIsSubmitting(false);

    if (!response.ok) {
      setError(response.error);
      return;
    }

    trackEvent("lead_submitted", {
      source: "calculator",
      pagePath: pathname,
      fenceType: params.fenceType,
    });

    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div
        className={`rounded-xl border border-border bg-background/80 p-4 ${
          compactMobile ? "mt-2.5 lg:mt-4" : "mt-4"
        }`}
        role="status"
      >
        <p className="text-sm font-semibold text-foreground">
          Спасибо! Заявка отправлена. Мы свяжемся с вами в ближайшее время.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-xl border border-border bg-background/80 ${
        compactMobile ? "mt-2 p-3 lg:mt-4 lg:p-4" : "mt-4 p-4"
      }`}
      noValidate
    >
      <p className={`font-semibold text-foreground ${compactMobile ? "text-sm lg:text-base" : "text-sm"}`}>
        Оставьте номер — уточним расчёт
      </p>
      {!compactMobile ? (
        <>
          <p className="mt-1 text-sm leading-relaxed text-foreground/85">
            {summaryLine}
          </p>
          {estimatedLabel ? (
            <p className="mt-2 text-sm text-muted">
              Ориентировочно:{" "}
              <span className="font-semibold text-foreground">{estimatedLabel}</span>
            </p>
          ) : null}
        </>
      ) : null}

      <div className={compactMobile ? "mt-3 space-y-2.5 lg:mt-4 lg:space-y-3" : "mt-4 space-y-3"}>
        <div>
          <label
            htmlFor="calculator-lead-phone"
            className="block text-sm font-semibold text-foreground"
          >
            Телефон <span className="text-accent">*</span>
          </label>
          <PhoneInput
            id="calculator-lead-phone"
            value={phone}
            onChange={setPhone}
            className={`mt-1 ${compactMobile ? compactInputClassName : inputClassName}`}
          />
        </div>

        <div>
          <label
            htmlFor="calculator-lead-name"
            className="block text-sm font-semibold text-foreground"
          >
            Имя
          </label>
          <input
            id="calculator-lead-name"
            name="name"
            type="text"
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Как к вам обращаться"
            className={`mt-1 ${compactMobile ? compactInputClassName : inputClassName}`}
          />
        </div>
      </div>

      <PrivacyConsent
        id="calculator-lead-privacy"
        checked={privacyAccepted}
        onChange={setPrivacyAccepted}
        className="mt-2 lg:mt-3"
      />

      {error ? (
        <p className="mt-3 text-sm text-red-600" role="alert">
          {error}
        </p>
      ) : null}

      <Button
        type="submit"
        disabled={isSubmitting}
        className={`mt-3 w-full ${compactMobile ? "max-lg:!h-11 max-lg:!min-h-11 max-lg:!py-0 max-lg:text-sm" : ""}`}
      >
        {isSubmitting ? "Отправляем…" : "Отправить расчёт"}
      </Button>
    </form>
  );
}
