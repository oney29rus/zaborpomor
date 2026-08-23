const CALCULATOR_PATH_PREFIXES = [
  "/zabory/",
  "/arhangelsk",
  "/severodvinsk",
  "/novodvinsk",
  "/holmogory",
  "/primorskiy-rayon",
] as const;

/**
 * CTA «Рассчитать стоимость»:
 * — на главной и страницах с секцией калькулятора → #calculator;
 * — иначе → /#calculator.
 */
export function getCalculatorCtaHref(pathname: string): string {
  if (pathname === "/") {
    return "#calculator";
  }

  if (
    CALCULATOR_PATH_PREFIXES.some((prefix) => pathname.startsWith(prefix))
  ) {
    return "#calculator";
  }

  return "/#calculator";
}
