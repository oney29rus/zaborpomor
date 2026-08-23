"use client";

import { usePathname } from "next/navigation";
import { useState, type FormEvent } from "react";
import { PhoneInput } from "@/components/leads/PhoneInput";
import { PrivacyConsent } from "@/components/leads/PrivacyConsent";
import { trackEvent } from "@/lib/analytics/track";
import { enrichLeadSubmissionPayload } from "@/lib/leads/client-context";
import { submitLead } from "@/lib/leads/submit-lead";
import { isCompletePhone } from "@/lib/phone/mask";

type LeadFormProps = {
  className?: string;
};

const inputClassName =
  "h-12 w-full min-w-0 rounded-lg border border-border bg-background px-4 text-base text-foreground outline-none transition-colors placeholder:text-muted focus:border-accent focus:ring-1 focus:ring-accent";

export function LeadForm({ className = "" }: LeadFormProps) {
  const pathname = usePathname();
  const [phone, setPhone] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

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

    const pageUrl =
      typeof window !== "undefined" ? window.location.href : pathname;

    const response = await submitLead(
      enrichLeadSubmissionPayload({
        source: "cta",
        phone,
        pagePath: pathname,
        pageUrl,
      }),
    );

    setIsSubmitting(false);

    if (!response.ok) {
      setError(response.error);
      return;
    }

    trackEvent("lead_submitted", {
      source: "cta",
      pagePath: pathname,
    });

    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div
        className={`rounded-2xl bg-surface p-5 sm:p-6 ${className}`}
        role="status"
      >
        <p className="text-base font-semibold text-foreground">
          Спасибо! Заявка отправлена. Мы свяжемся с вами в ближайшее время.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-2xl bg-surface p-5 sm:p-6 ${className}`}
      noValidate
    >
      <label
        htmlFor="lead-phone"
        className="block text-sm font-semibold text-foreground"
      >
        Ваш телефон
      </label>
      <PhoneInput
        id="lead-phone"
        value={phone}
        onChange={setPhone}
        className={`mt-2 ${inputClassName}`}
      />

      {error ? (
        <p className="mt-3 text-sm text-red-600" role="alert">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-accent px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:opacity-70"
      >
        {isSubmitting ? "Отправляем…" : "Получить расчёт"}
      </button>

      <PrivacyConsent
        id="lead-privacy"
        checked={privacyAccepted}
        onChange={setPrivacyAccepted}
        className="mt-3"
      />
    </form>
  );
}
