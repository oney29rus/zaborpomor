const DIGITS_AFTER_COUNTRY = 10;

export function extractPhoneDigits(value: string): string {
  let digits = value.replace(/\D/g, "");

  if (digits.startsWith("8")) {
    digits = `7${digits.slice(1)}`;
  }

  if (digits.startsWith("7")) {
    digits = digits.slice(1);
  }

  return digits.slice(0, DIGITS_AFTER_COUNTRY);
}

export function formatPhoneInput(value: string): string {
  const digits = extractPhoneDigits(value);

  if (digits.length === 0) {
    return "+7 ";
  }

  let formatted = "+7";

  formatted += ` (${digits.slice(0, 3)}`;

  if (digits.length < 3) {
    return formatted;
  }

  formatted += ")";

  if (digits.length > 3) {
    formatted += ` ${digits.slice(3, 6)}`;
  }

  if (digits.length > 6) {
    formatted += `-${digits.slice(6, 8)}`;
  }

  if (digits.length > 8) {
    formatted += `-${digits.slice(8, 10)}`;
  }

  return formatted;
}

export function isCompletePhone(value: string): boolean {
  return extractPhoneDigits(value).length === DIGITS_AFTER_COUNTRY;
}

export function toE164Phone(value: string): string {
  const digits = extractPhoneDigits(value);
  return digits.length === DIGITS_AFTER_COUNTRY ? `+7${digits}` : "";
}
