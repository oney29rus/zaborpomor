import fs from "node:fs";

const f = "lib/service-pages/montazh/content.ts";
let t = fs.readFileSync(f, "utf8");

const marker = "canonicalPath: CANONICAL_PATH,";
const idx = t.indexOf(marker);
if (idx < 0) throw new Error("marker not found");

const before = t.slice(0, idx);
const seoBlockStart = before.lastIndexOf("  seo: {");
const descStart = t.indexOf("    description:", seoBlockStart);
const descEnd = t.indexOf("\n", t.indexOf('метр."', descStart) + 1);

if (descStart < 0 || descEnd < 0) throw new Error("seo description not found");

const replacement = `    description:
      \`\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0437\u0430\u0431\u043E\u0440\u0430 \u0438\u0437 \u0432\u0430\u0448\u0435\u0433\u043E \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430 \u0432 \u0410\u0440\u0445\u0430\u043D\u0433\u0435\u043B\u044C\u0441\u043A\u0435 \u0438 \u043E\u0431\u043B\u0430\u0441\u0442\u0438. \u041C\u043E\u043D\u0442\u0430\u0436 \u043F\u0440\u043E\u0444\u043D\u0430\u0441\u0442\u0438\u043B\u0430, \u0448\u0442\u0430\u043A\u0435\u0442\u043D\u0438\u043A\u0430 \u0438 \u0441\u0435\u0442\u043A\u0438. \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0440\u0430\u0431\u043E\u0442 \u2014 \${MONTAZH_IZ_MATERIALA_PRICE_LABEL}.\`,`;

t = t.slice(0, descStart) + replacement + t.slice(descEnd);
fs.writeFileSync(f, t);
console.log("seo description fixed");
