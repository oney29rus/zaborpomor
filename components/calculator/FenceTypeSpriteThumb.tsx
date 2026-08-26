import {
  getFenceTypeSpriteStyleById,
} from "@/lib/calculator/fence-type-sprites";
import type { FenceTypeId } from "@/lib/calculator/types";

/** Видимая область одной ячейки спрайта (512×379 px в сетке 1536×1024). */
const SPRITE_CELL_ASPECT = 512 / 379;

const THUMB_PATTERNS: Partial<Record<FenceTypeId, string>> = {
  profnastil: "bg-slate-200",
  metalloshtaketnik: "bg-stone-200",
  "3d-setka": "bg-zinc-200",
  "svarka-setka": "bg-neutral-200",
  "svarka-setka-pvh": "bg-stone-300",
  "derevyannyy-shtaketnik": "bg-amber-100",
  "shtaketnik-shahmatka": "bg-stone-200",
};

function FenceTypePlaceholder({ typeId }: { typeId: FenceTypeId }) {
  return (
    <div
      className={`flex h-full w-full items-center justify-center ${THUMB_PATTERNS[typeId] ?? "bg-slate-100"}`}
    >
      <div className="h-[70%] w-[70%] max-w-[88%] rounded-t border border-border/60 bg-surface/40" />
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

  return (
    <div
      className={`flex items-center justify-center overflow-hidden bg-white px-2 py-1.5 [container-type:size] lg:px-2.5 lg:py-2 ${className}`}
    >
      {spriteStyle ? (
        <div
          role="img"
          aria-hidden="true"
          className="shrink-0 bg-no-repeat"
          style={{
            ...spriteStyle,
            width: `min(100cqw, calc(100cqh * ${SPRITE_CELL_ASPECT}))`,
            height: `min(100cqh, calc(100cqw / ${SPRITE_CELL_ASPECT}))`,
          }}
        />
      ) : (
        <FenceTypePlaceholder typeId={typeId} />
      )}
    </div>
  );
}
