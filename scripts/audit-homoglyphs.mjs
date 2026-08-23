import fs from "node:fs";
import path from "node:path";

const SKIP_DIRS = new Set(["node_modules", ".next", ".git", "scripts"]);
const USER_EXT = new Set([".tsx", ".ts", ".md"]);

const LATIN_IN_WORD =
  /[\u0400-\u04FF][A-Za-z][\u0400-\u04FF]|[\u0400-\u04FF][A-Za-z]+[\u0400-\u04FF]/g;

const STRING_RE = /(['"`])(?:\\.|(?!\1)[^\\])*?\1/g;

const ALLOWED_LATIN_WORDS = new Set([
  "Nice",
  "RAL",
  "PVH",
  "PVC",
  "FAQ",
  "CTA",
  "SEO",
  "3D",
]);

function walk(dir, files = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(ent.name)) continue;
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, files);
    else if (USER_EXT.has(path.extname(ent.name))) files.push(p);
  }
  return files;
}

const findings = [];

for (const file of walk(".")) {
  const rel = file.replace(/\\/g, "/");
  const text = fs.readFileSync(file, "utf8");
  const lines = text.split("\n");

  STRING_RE.lastIndex = 0;
  let m;
  while ((m = STRING_RE.exec(text)) !== null) {
    const raw = m[0];
    const quote = raw[0];
    const s = raw.slice(1, -1);
    if (!/[\u0400-\u04FF]/.test(s)) continue;
    if (/^\/[a-z0-9\-/.#]+$/.test(s)) continue;
    if (/^[a-z0-9\-_]+$/.test(s) && !/[\u0400-\u04FF]/.test(s)) continue;

    LATIN_IN_WORD.lastIndex = 0;
    let mm;
    while ((mm = LATIN_IN_WORD.exec(s)) !== null) {
      const line = text.slice(0, m.index).split("\n").length;
      findings.push({
        file: rel,
        line,
        match: mm[0],
        context: s.length <= 140 ? s : `${s.slice(0, 140)}…`,
      });
    }

    for (const w of s.match(/[A-Za-z]+/g) ?? []) {
      if (ALLOWED_LATIN_WORDS.has(w)) continue;
      if (/^https?$/.test(w)) continue;
      const idx = s.indexOf(w);
      const prev = s[idx - 1] ?? "";
      const next = s[idx + w.length] ?? "";
      const adjacentCyrillic = /[\u0400-\u04FF]/.test(prev + next);
      if (adjacentCyrillic && w.length >= 2) {
        const line = text.slice(0, m.index).split("\n").length;
        findings.push({
          file: rel,
          line,
          match: w,
          context: s.length <= 140 ? s : `${s.slice(0, 140)}…`,
        });
      }
    }
  }
}

const seen = new Set();
const uniq = findings.filter((f) => {
  const k = `${f.file}|${f.line}|${f.match}|${f.context}`;
  if (seen.has(k)) return false;
  seen.add(k);
  return true;
});

for (const f of uniq) {
  console.log(`${f.file}:${f.line}\t${f.match}\t${f.context}`);
}
console.error(`Total: ${uniq.length}`);
