import fs from "node:fs";
import path from "node:path";

const SKIP_DIRS = new Set(["node_modules", ".next", ".git"]);
const USER_EXT = new Set([".ts", ".tsx"]);

/** Longest first — broken mixed-script → correct Cyrillic */
const REPLACEMENTS = [
  // металлоштaket* (latin a,k,e,t in «aket»)
  ["\u043C\u0435\u0442\u0430\u043B\u043B\u043E\u0448\u0442aket\u043D\u0438\u043A\u043E\u043C", "\u043C\u0435\u0442\u0430\u043B\u043B\u043E\u0448\u0442\u0430\u043A\u0435\u0442\u043D\u0438\u043A\u043E\u043C"],
  ["\u043C\u0435\u0442\u0430\u043B\u043B\u043E\u0448\u0442aket\u043D\u0438\u043A\u0430", "\u043C\u0435\u0442\u0430\u043B\u043B\u043E\u0448\u0442\u0430\u043A\u0435\u0442\u043D\u0438\u043A\u0430"],
  ["\u041C\u0435\u0442\u0430\u043B\u043B\u043E\u0448\u0442aket\u043D\u0438\u043A", "\u041C\u0435\u0442\u0430\u043B\u043B\u043E\u0448\u0442\u0430\u043A\u0435\u0442\u043D\u0438\u043A"],
  ["\u043C\u0435\u0442\u0430\u043B\u043B\u043E\u0448\u0442aket\u043D\u0438\u043A", "\u043C\u0435\u0442\u0430\u043B\u043B\u043E\u0448\u0442\u0430\u043A\u0435\u0442\u043D\u0438\u043A"],
  // шtaket* (latin t,a,k,e,t)
  ["\u043C\u0435\u0442\u0430\u043B\u043B\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0448taketnika", "\u043C\u0435\u0442\u0430\u043B\u043B\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0448\u0442\u0430\u043A\u0435\u0442\u043D\u0438\u043A\u0430"],
  ["\u043C\u0435\u0442\u0430\u043B\u043B\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0448taket\u043D\u0438\u043A", "\u043C\u0435\u0442\u0430\u043B\u043B\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0448\u0442\u0430\u043A\u0435\u0442\u043D\u0438\u043A"],
  ["\u0414\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u044B\u0439 \u0448taket\u043D\u0438\u043A", "\u0414\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u044B\u0439 \u0448\u0442\u0430\u043A\u0435\u0442\u043D\u0438\u043A"],
  ["\u0434\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u043E\u0433\u043E \u0448taketnika", "\u0434\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u043E\u0433\u043E \u0448\u0442\u0430\u043A\u0435\u0442\u043D\u0438\u043A\u0430"],
  ["\u0434\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u044B\u043C \u0448taket\u043D\u0438\u043A\u043E\u043C", "\u0434\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u044B\u043C \u0448\u0442\u0430\u043A\u0435\u0442\u043D\u0438\u043A\u043E\u043C"],
  ["\u0428taket\u043D\u0438\u043A", "\u0428\u0442\u0430\u043A\u0435\u0442\u043D\u0438\u043A"],
  ["\u0448taketnika", "\u0448\u0442\u0430\u043A\u0435\u0442\u043D\u0438\u043A\u0430"],
  ["\u0448taket\u043D\u0438\u043A\u0430", "\u0448\u0442\u0430\u043A\u0435\u0442\u043D\u0438\u043A\u0430"],
  ["\u0448taket\u043D\u0438\u043A", "\u0448\u0442\u0430\u043A\u0435\u0442\u043D\u0438\u043A"],
  // штaket* (latin a,k,e,t after Cyrillic шт)
  ["\u0448\u0442aket\u043D\u0438\u043A\u0430", "\u0448\u0442\u0430\u043A\u0435\u0442\u043D\u0438\u043A\u0430"],
  // штакet* (latin e)
  ["\u0448\u0442\u0430\u043Aet\u043D\u0438\u043A\u0430", "\u0448\u0442\u0430\u043A\u0435\u0442\u043D\u0438\u043A\u0430"],
];

function walk(dir, files = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(ent.name)) continue;
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, files);
    else if (USER_EXT.has(path.extname(ent.name))) files.push(p);
  }
  return files;
}

let total = 0;
const changedFiles = [];

for (const file of walk(".")) {
  const rel = file.replace(/\\/g, "/");
  if (rel.startsWith("scripts/")) continue;

  let text = fs.readFileSync(file, "utf8");
  let fileChanges = 0;

  for (const [from, to] of REPLACEMENTS) {
    if (text.includes(from)) {
      const count = text.split(from).length - 1;
      text = text.split(from).join(to);
      fileChanges += count;
    }
  }

  if (fileChanges > 0) {
    fs.writeFileSync(file, text);
    changedFiles.push({ file: rel, count: fileChanges });
    total += fileChanges;
  }
}

for (const { file, count } of changedFiles) {
  console.log(`${file}: ${count}`);
}
console.error(`Total replacements: ${total} in ${changedFiles.length} files`);
