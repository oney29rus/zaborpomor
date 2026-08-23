import {
  getFenceTypeSpriteStyleById,
} from "@/lib/calculator/fence-type-sprites";
import type { FenceTypeId } from "@/lib/calculator/types";

const THUMB_PATTERNS: Partial<Record<FenceTypeId, string>> = {
  profnastil: "bg-slate-200",
  metalloshtaketnik: "bg-stone-200",
  "3d-setka": "bg-zinc-200",
  "svarka-setka": "bg-neutral-200",
  "svarka-setka-pvh": "bg-stone-300",
  "derevyannyy-shtaketnik": "bg-amber-100",
  "shtaketnik-shahmatka": "bg-stone-200",
};

function FenceTypePlaceholder({
  typeId,
  className = "",
}: {
  typeId: FenceTypeId;
  className?: string;
}) {
  return (
    <div
      className={`flex h-full w-full items-end justify-center px-2 pb-2 ${THUMB_PATTERNS[typeId] ?? "bg-slate-100"} ${className}`}
    >
      <div className="h-[78%] w-full max-w-[88%] rounded-t border border-border/60 bg-surface/40" />
    </div>
  );
}

type FenceTypeSpriteThumbProps = {
  typeId: FenceTypeId;
  className?: string;
};

export function FenceTypeSpriteThumb({
  typeId,
  className = "",
}: FenceTypeSpriteThumbProps) {
  const spriteStyle = getFenceTypeSpriteStyleById(typeId);

  if (!spriteStyle) {
    return <FenceTypePlaceholder typeId={typeId} className={className} />;
  }

  return (
    <div
      role="img"
      aria-hidden="true"
      className={`bg-white bg-no-repeat ${className}`}
      style={spriteStyle}
    />
  );
}
