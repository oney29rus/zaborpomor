import type { CSSProperties } from "react";
import type { FenceTypeId } from "./types";

/** Сетка 3×2: /public/images/projects/kartinki.png (1536×1024). */
export const FENCE_TYPES_SPRITE_SRC = "/images/projects/kartinki.png";

const SPRITE_COLS = 3;
const SPRITE_ROWS = 2;

/** Доля высоты ячейки с забором (без подписи внизу исходника). */
const VISIBLE_CELL_RATIO = 0.74;

/** Позиция вида забора в сетке (col/row, слева направо, сверху вниз). */
export const FENCE_TYPE_SPRITE_CELL: Partial<
  Record<FenceTypeId, { col: number; row: number }>
> = {
  profnastil: { col: 0, row: 0 },
  metalloshtaketnik: { col: 1, row: 0 },
  "3d-setka": { col: 2, row: 0 },
  "svarka-setka": { col: 0, row: 1 },
  "svarka-setka-pvh": { col: 1, row: 1 },
  "derevyannyy-shtaketnik": { col: 2, row: 1 },
};

function spriteAxisPercent(index: number, total: number): number {
  if (total <= 1) return 0;
  return (index / (total - 1)) * 100;
}

/** Вертикальная позиция с обрезкой подписи внизу ячейки. */
function spriteRowPercent(row: number): number {
  if (row === 0) return 0;

  const spriteHeightRatio = SPRITE_ROWS / VISIBLE_CELL_RATIO;
  return (
    ((row / SPRITE_ROWS) * spriteHeightRatio) / (spriteHeightRatio - 1) * 100
  );
}

export function getFenceTypeSpriteStyle(
  col: number,
  row: number,
): CSSProperties {
  const bgHeightPercent = (SPRITE_ROWS * 100) / VISIBLE_CELL_RATIO;

  return {
    backgroundImage: `url(${FENCE_TYPES_SPRITE_SRC})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: `${SPRITE_COLS * 100}% ${bgHeightPercent}%`,
    backgroundPosition: `${spriteAxisPercent(col, SPRITE_COLS)}% ${spriteRowPercent(row)}%`,
  };
}

export function getFenceTypeSpriteStyleById(
  typeId: FenceTypeId,
): CSSProperties | null {
  const cell = FENCE_TYPE_SPRITE_CELL[typeId];
  if (!cell) return null;
  return getFenceTypeSpriteStyle(cell.col, cell.row);
}
