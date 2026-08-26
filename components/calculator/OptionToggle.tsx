"use client";

type OptionToggleProps = {
  label: string;
  note?: string;
  value: boolean;
  onChange: (value: boolean) => void;
  compactMobile?: boolean;
};

function CompactToggleRow({
  label,
  note,
  value,
  onChange,
}: Omit<OptionToggleProps, "compactMobile">) {
  return (
    <div className="flex items-center justify-between gap-3 py-0.5">
      <div className="min-w-0">
        <span className="text-sm font-semibold text-foreground">{label}</span>
        {note ? (
          <span className="mt-0.5 block text-xs text-muted">{note}</span>
        ) : null}
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={value}
        aria-label={label}
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
}

export function OptionToggle({
  label,
  note,
  value,
  onChange,
  compactMobile = false,
}: OptionToggleProps) {
  if (compactMobile) {
    return (
      <CompactToggleRow
        label={label}
        note={note}
        value={value}
        onChange={onChange}
      />
    );
  }

  return (
    <>
      <div className="hidden items-center justify-between gap-4 py-0.5 lg:flex">
        <div>
          <span className="text-sm font-semibold text-foreground">{label}</span>
          {note ? (
            <span className="mt-0.5 block text-xs text-muted">{note}</span>
          ) : null}
        </div>
        <button
          type="button"
          role="switch"
          aria-checked={value}
          aria-label={label}
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

      <div className="flex items-center justify-between gap-4 rounded-xl border border-border bg-surface px-4 py-4 lg:hidden">
        <div>
          <p className="text-base font-semibold text-foreground">{label}</p>
          {note ? <p className="mt-0.5 text-sm text-muted">{note}</p> : null}
        </div>
        <button
          type="button"
          role="switch"
          aria-checked={value}
          aria-label={label}
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
