import { WHY_WARRANTY } from "@/lib/why/benefits";

export function WarrantyHighlight() {
  return (
    <div className="lg:max-w-sm">
      <p className="text-[clamp(4.5rem,10vw,6rem)] font-bold leading-none tracking-tight text-accent">
        {WHY_WARRANTY.value}
      </p>
      <p className="mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-[1.75rem]">
        {WHY_WARRANTY.unit}
      </p>
      <p className="mt-4 text-lg font-semibold leading-snug text-foreground sm:text-xl">
        {WHY_WARRANTY.title}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-muted sm:text-[0.9375rem]">
        {WHY_WARRANTY.description}
      </p>
    </div>
  );
}
