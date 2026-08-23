"use client";

type WicketToggleProps = {
  value: boolean;
  onChange: (value: boolean) => void;
  compactMobile?: boolean;
};

export function WicketToggle({
  value,
  onChange,
  compactMobile = false,
}: WicketToggleProps) {
  const compactRow = (
    <div className="flex items-center justify-between gap-3 py-0.5">
      <span className="text-sm font-semibold text-foreground">Нужна калитка</span>
      <button
        type="button"
        role="switch"
        aria-checked={value}
        aria-label="Нужна калитка"
        onClick={() => onChange(!value)}
        className={`relative inline-flex h-7 w-12 shrink-0 items-center rounded-full transition-colors ${
          value ? "bg-accent" : "bg-border"
        }`}
      >
        <span
          className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
            value ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );

  if (compactMobile) {
    return compactRow;
  }

  return (
    <>
      <div className="hidden lg:block">{compactRow}</div>

      <div className="flex items-center justify-between gap-4 rounded-xl border border-border bg-surface px-4 py-4 lg:hidden">
        <div>
          <p className="text-base font-semibold text-foreground">Нужна калитка</p>
          <p className="mt-0.5 text-sm text-muted">
            Стоимость уточняется при точном расчёте
          </p>
        </div>
        <button
          type="button"
          role="switch"
          aria-checked={value}
          onClick={() => onChange(!value)}
          className={`relative inline-flex h-8 w-14 shrink-0 items-center rounded-full transition-colors ${
            value ? "bg-accent" : "bg-border"
          }`}
        >
          <span
            className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
              value ? "translate-x-7" : "translate-x-1"
            }`}
          />
        </button>
      </div>
    </>
  );
}
