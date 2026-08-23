"use client";

import Link from "next/link";

type PrivacyConsentProps = {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
};

export function PrivacyConsent({
  id,
  checked,
  onChange,
  className = "",
}: PrivacyConsentProps) {
  return (
    <label
      htmlFor={id}
      className={`flex cursor-pointer items-start gap-2.5 text-xs leading-relaxed text-muted ${className}`}
    >
      <input
        id={id}
        name="privacyConsent"
        type="checkbox"
        required
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="mt-0.5 size-4 shrink-0 rounded border-border text-accent focus:ring-accent"
      />
      <span>
        Я согласен с{" "}
        <Link
          href="/privacy/"
          className="font-medium text-foreground underline-offset-2 hover:underline"
        >
          политикой конфиденциальности
        </Link>
      </span>
    </label>
  );
}
