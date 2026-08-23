"use client";

import {
  extractPhoneDigits,
  formatPhoneInput,
  isCompletePhone,
} from "@/lib/phone/mask";
import type { ChangeEvent, ClipboardEvent, FocusEvent, KeyboardEvent } from "react";

type PhoneInputProps = {
  id: string;
  name?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  autoComplete?: string;
  className?: string;
  onBlur?: () => void;
};

export function PhoneInput({
  id,
  name = "phone",
  value,
  onChange,
  required = true,
  autoComplete = "tel",
  className = "",
  onBlur,
}: PhoneInputProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(formatPhoneInput(event.target.value));
  };

  const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    if (!value.trim()) {
      onChange("+7 ");
    }

    requestAnimationFrame(() => {
      const position = event.currentTarget.value.length;
      event.currentTarget.setSelectionRange(position, position);
    });
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    const selectionStart = event.currentTarget.selectionStart ?? 0;

    if (event.key === "Backspace" && selectionStart <= 3) {
      event.preventDefault();
    }
  };

  const handlePaste = (event: ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    const pasted = event.clipboardData.getData("text");
    const currentDigits = extractPhoneDigits(value);
    const pastedDigits = extractPhoneDigits(pasted);
    onChange(formatPhoneInput(`${currentDigits}${pastedDigits}`));
  };

  return (
    <input
      id={id}
      name={name}
      type="tel"
      autoComplete={autoComplete}
      inputMode="tel"
      required={required}
      value={value}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={onBlur}
      onKeyDown={handleKeyDown}
      onPaste={handlePaste}
      placeholder="+7 (___) ___-__-__"
      aria-invalid={value.length > 3 && !isCompletePhone(value)}
      className={className}
    />
  );
}
