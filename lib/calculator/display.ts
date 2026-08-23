import { getPricePerMeter } from "./prices";

import type { FenceHeight, FenceTypeId } from "./types";



/** Маркетинговая цена «от» на карточках материалов — всегда минимальная (1,5 м). */

export function resolveFenceFromPricePerMeter(

  fenceTypeId: FenceTypeId,

): number | null {

  return resolveFencePricePerMeter(fenceTypeId, 1.5);

}



/** UI-хелпер для отображения цены за п.м. по выбранной высоте (расчёт, не карточки). */

export function resolveFencePricePerMeter(

  fenceTypeId: FenceTypeId,

  height: FenceHeight,

): number | null {

  try {

    return getPricePerMeter(fenceTypeId, height);

  } catch {

    return null;

  }

}



/** @deprecated Используйте resolveFencePricePerMeter(fenceTypeId, height). */

export function resolveFencePricePerMeterLegacy(

  basePrice15: number | null,

  height: FenceHeight,

  fenceTypeId?: FenceTypeId,

): number | null {

  if (fenceTypeId) {

    return resolveFencePricePerMeter(fenceTypeId, height);

  }



  if (basePrice15 === null) {

    return null;

  }



  if (height === 1.5) {

    return basePrice15;

  }



  return basePrice15 + 300;

}



/** Можно ли показать цену за п.м. в карточке результата. */

export function canShowPricePerMeter(result: {

  kind: string;

}): boolean {

  return result.kind === "priced";

}


