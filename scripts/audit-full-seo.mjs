/**
 * Full production technical SEO audit — read-only output JSON.
 * Usage: node scripts/audit-full-seo.mjs
 */
import { writeFileSync } from "node:fs";

const BASE = "https://zaborpomor.ru";
const CONCURRENCY = 8;

function normalizePath(p) {
  if (p === "/") return "/";
  return p.replace(/\/+$/, "") || "/";
}

const STATIC_ROUTES = [
  "/",
  "/arhangelsk",
  "/severodvinsk",
  "/severodvinsk/zabory/profnastil",
  "/severodvinsk/zabory/metalloshtaketnik",
  "/severodvinsk/vorota/otkatnye",
  "/severodvinsk/vorota/raspashnye",
  "/novodvinsk",
  "/novodvinsk/zabory/profnastil",
  "/novodvinsk/zabory/metalloshtaketnik",
  "/novodvinsk/vorota/otkatnye",
  "/novodvinsk/vorota/raspashnye",
  "/holmogory",
  "/primorskiy-rayon",
  "/raboty",
  "/zabory/profnastil",
  "/zabory/metalloshtaketnik",
  "/zabory/3d-setka",
  "/zabory/svarnaya-setka",
  "/zabory/svarnaya-setka-pvh",
  "/zabory/derevyannyy-shtaketnik",
  "/uslugi/karkas-zabora",
  "/uslugi/vintovye-svai",
  "/uslugi/montazh-zabora-iz-materiala-zakazchika",
  "/vorota/otkatnye",
  "/vorota/raspashnye",
];
const sitemapRes = await fetch(`${BASE}/sitemap.xml`);
const sitemapText = await sitemapRes.text();
const sitemapUrls = [...sitemapText.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const sitemapPaths = sitemapUrls.map((u) => {
  try {
    const p = new URL(u).pathname;
    return normalizePath(p === "" ? "/" : p);
  } catch {
    return u;
  }
});

const workRoutes = sitemapPaths.filter((p) => p.startsWith("/raboty/") && p !== "/raboty");
const routes = [...new Set([...STATIC_ROUTES, ...workRoutes])];
const routeSet = new Set(routes.map((p) => normalizePath(p)));

function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractH1s(html) {
  return [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) =>
    m[1].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim(),
  );
}

function extractMeta(html, attr, value) {
  const re1 = new RegExp(
    `<meta[^>]+${attr}=["']${value}["'][^>]+content=["']([^"']*)["']`,
    "i",
  );
  const re2 = new RegExp(
    `<meta[^>]+content=["']([^"']*)["'][^>]+${attr}=["']${value}["']`,
    "i",
  );
  return html.match(re1)?.[1] ?? html.match(re2)?.[1] ?? null;
}

function extractCanonical(html) {
  return (
    html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i)?.[1] ??
    html.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i)?.[1] ??
    null
  );
}

function extractJsonLdTypes(html) {
  const types = new Set();
  for (const block of html.matchAll(
    /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi,
  )) {
    try {
      const data = JSON.parse(block[1]);
      const walk = (node) => {
        if (!node || typeof node !== "object") return;
        if (Array.isArray(node)) {
          node.forEach(walk);
          return;
        }
        if (node["@type"]) {
          const t = node["@type"];
          if (Array.isArray(t)) t.forEach((x) => types.add(x));
          else types.add(t);
        }
        for (const v of Object.values(node)) walk(v);
      };
      walk(data);
    } catch {
      types.add("INVALID_JSON_LD");
    }
  }
  return [...types];
}

function extractInternalLinks(html) {
  const links = new Set();
  for (const m of html.matchAll(/href=["'](\/[^"'#?]*)["']/gi)) {
    const p = m[1];
    if (!p.startsWith("/")) continue;
    links.add(normalizePath(p));
  }
  return [...links];
}

function extractVisibleBreadcrumbLabels(html) {
  const nav = html.match(/<nav[^>]*aria-label=["'][^"']*breadcrumb[^"']*["'][\s\S]*?<\/nav>/i);
  if (!nav) return [];
  return [...nav[0].matchAll(/>([^<]{2,80})</g)]
    .map((m) => m[1].trim())
    .filter((t) => t && !t.includes("→") && t.length < 60);
}

function jaccard(a, b) {
  const wa = new Set(a.toLowerCase().split(/\s+/).filter((w) => w.length > 3));
  const wb = new Set(b.toLowerCase().split(/\s+/).filter((w) => w.length > 3));
  if (!wa.size || !wb.size) return 0;
  let inter = 0;
  for (const w of wa) if (wb.has(w)) inter++;
  return inter / (wa.size + wb.size - inter);
}

async function fetchPage(path, opts = {}) {
  const url = path === "/" ? `${BASE}/` : `${BASE}${path}`;
  const res = await fetch(url, { redirect: "manual", ...opts });
  const loc = res.headers.get("location");
  let finalRes = res;
  let chain = [{ url, status: res.status, location: loc }];
  if ([301, 302, 303, 307, 308].includes(res.status) && loc) {
    const next = new URL(loc, url).href;
    finalRes = await fetch(next, { redirect: "follow" });
    chain.push({ url: next, status: finalRes.status, location: null });
  } else if (res.status >= 300 && res.status < 400 && loc) {
    const next = new URL(loc, url).href;
    finalRes = await fetch(next, { redirect: "follow" });
    chain.push({ url: next, status: finalRes.status, location: null });
  }
  const html =
    finalRes.status === 200 ? await finalRes.text() : res.status !== 200 ? "" : await finalRes.text();
  return {
    path,
    requestUrl: url,
    status: res.status,
    finalUrl: finalRes.url,
    redirectChain: chain.length > 1 ? chain : null,
    html,
  };
}

async function pool(items, fn, limit) {
  const results = [];
  let i = 0;
  async function worker() {
    while (i < items.length) {
      const idx = i++;
      results[idx] = await fn(items[idx], idx);
    }
  }
  await Promise.all(Array.from({ length: limit }, worker));
  return results;
}

console.error(`Auditing ${routes.length} indexable routes...`);

// robots + sitemap
const robotsRes = await fetch(`${BASE}/robots.txt`);
const robotsText = await robotsRes.text();

const pages = await pool(routes, async (path) => {
  const page = await fetchPage(path);
  const html = page.html;
  const title = html.match(/<title>([^<]*)<\/title>/i)?.[1]?.trim() ?? null;
  const description = extractMeta(html, "name", "description");
  const robots = extractMeta(html, "name", "robots");
  const canonical = extractCanonical(html);
  const h1s = extractH1s(html);
  const jsonLd = extractJsonLdTypes(html);
  const internalLinks = html ? extractInternalLinks(html) : [];
  const breadcrumbLabels = html ? extractVisibleBreadcrumbLabels(html) : [];
  const imgs = html ? [...html.matchAll(/<img[^>]*>/gi)] : [];
  const imgsNoAlt = imgs.filter((m) => !/\salt=/i.test(m[0])).length;
  const imgsEmptyAlt = imgs.filter((m) => /\salt=["']\s*["']/i.test(m[0])).length;
  const nextImages = imgs.filter((m) => /\sdata-nimg=/i.test(m[0])).length;
  const viewport = extractMeta(html, "name", "viewport");
  const textSample = stripHtml(html).slice(0, 8000);
  const faqVisible = html.includes('id="faq"') || /Частые вопросы|Вопросы о/i.test(html);
  const faqSchema = jsonLd.includes("FAQPage");
  const canonicalNorm = canonical ? normalizePath(new URL(canonical).pathname || "/") : null;
  const finalPath = normalizePath(new URL(page.finalUrl).pathname || "/");

  return {
    path,
    status: page.status,
    finalUrl: page.finalUrl,
    redirectChain: page.redirectChain,
    title,
    titleLen: title?.length ?? 0,
    description,
    descLen: description?.length ?? 0,
    robots,
    canonical,
    canonicalNorm,
    canonicalMismatch: canonicalNorm && canonicalNorm !== normalizePath(path),
    canonicalNotSelf: canonicalNorm && canonicalNorm !== normalizePath(path),
    h1s,
    h1Count: h1s.length,
    jsonLd,
    breadcrumbLabels,
    breadcrumbSchema: jsonLd.includes("BreadcrumbList"),
    faqVisible,
    faqSchema,
    faqSchemaMismatch: faqSchema && !faqVisible,
    internalLinks,
    internalLinkCount: internalLinks.length,
    inSitemap: sitemapPaths.includes(normalizePath(path)),
    imgsTotal: imgs.length,
    imgsNoAlt,
    imgsEmptyAlt,
    nextImages,
    viewport: viewport ?? null,
    textSample,
    metrikaInHtml: html.includes("mc.yandex.ru") || html.includes("ym("),
    yandexVerify:
      extractMeta(html, "name", "yandex-verification") ??
      html.includes("yandex-verification"),
  };
}, CONCURRENCY);

// Trailing slash pairs for static routes without trailing slash variant
const slashTests = [];
for (const path of routes.slice(0, 30)) {
  if (path === "/") continue;
  const noSlash = path.replace(/\/$/, "");
  if (noSlash === path) continue;
}
const keyPaths = [
  "/",
  "/arhangelsk",
  "/arhangelsk/",
  "/zabory/profnastil",
  "/zabory/profnastil/",
  "/vorota/otkatnye",
  "/vorota/otkatnye/",
];
for (const p of keyPaths) {
  const r = await fetch(`${BASE}${p}`, { redirect: "manual" });
  slashTests.push({
    path: p,
    status: r.status,
    location: r.headers.get("location"),
  });
}

// http/www tests
const domainTests = [];
for (const url of [
  "http://zaborpomor.ru/",
  "https://www.zaborpomor.ru/",
  "http://www.zaborpomor.ru/",
]) {
  try {
    const r = await fetch(url, { redirect: "manual" });
    domainTests.push({ url, status: r.status, location: r.headers.get("location") });
  } catch (e) {
    domainTests.push({ url, error: String(e) });
  }
}

// Sitemap diff
const missingFromSitemap = routes.filter((p) => !sitemapPaths.includes(normalizePath(p)));
const extraInSitemap = sitemapPaths.filter((p) => !routeSet.has(normalizePath(p)));

// Duplicate titles/descriptions/h1s
function findDupes(field) {
  const map = new Map();
  for (const p of pages) {
    const val = p[field];
    if (!val) continue;
    const key = Array.isArray(val) ? val.join(" | ") : val;
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(p.path);
  }
  return [...map.entries()].filter(([, paths]) => paths.length > 1).map(([value, paths]) => ({ value, paths }));
}

const dupTitles = findDupes("title");
const dupDescs = findDupes("description");
const dupH1s = findDupes("h1s");

// Similar descriptions (>0.85 jaccard)
const similarDescs = [];
for (let i = 0; i < pages.length; i++) {
  for (let j = i + 1; j < pages.length; j++) {
    const a = pages[i];
    const b = pages[j];
    if (!a.description || !b.description) continue;
    const sim = jaccard(a.description, b.description);
    if (sim >= 0.85) similarDescs.push({ a: a.path, b: b.path, similarity: +sim.toFixed(2) });
  }
}

// Geo cluster content similarity
const geoClusters = {
  profnastil: [
    "/zabory/profnastil",
    "/severodvinsk/zabory/profnastil",
    "/novodvinsk/zabory/profnastil",
  ],
  metall: [
    "/zabory/metalloshtaketnik",
    "/severodvinsk/zabory/metalloshtaketnik",
    "/novodvinsk/zabory/metalloshtaketnik",
  ],
  otkatnye: ["/vorota/otkatnye", "/severodvinsk/vorota/otkatnye", "/novodvinsk/vorota/otkatnye"],
  raspashnye: [
    "/vorota/raspashnye",
    "/severodvinsk/vorota/raspashnye",
    "/novodvinsk/vorota/raspashnye",
  ],
};
const contentSimilarity = {};
for (const [name, paths] of Object.entries(geoClusters)) {
  const texts = paths.map((p) => pages.find((x) => x.path === p)?.textSample ?? "");
  contentSimilarity[name] = {
    pairs: [
      { a: paths[0], b: paths[1], sim: +jaccard(texts[0], texts[1]).toFixed(2) },
      { a: paths[0], b: paths[2], sim: +jaccard(texts[0], texts[2]).toFixed(2) },
      { a: paths[1], b: paths[2], sim: +jaccard(texts[1], texts[2]).toFixed(2) },
    ],
  };
}

// Internal linking: which routes are linked from homepage + cities
const hubPaths = ["/", "/arhangelsk", "/severodvinsk", "/novodvinsk"];
const linkedFrom = new Map(routes.map((p) => [p, []]));
for (const hub of hubPaths) {
  const page = pages.find((p) => p.path === hub);
  if (!page) continue;
  for (const link of page.internalLinks) {
    if (linkedFrom.has(link)) linkedFrom.get(link).push(hub);
  }
}
const orphanCandidates = routes.filter((p) => {
  if (p === "/") return false;
  if (p.startsWith("/raboty/") && p !== "/raboty") return linkedFrom.get(p).length === 0;
  return linkedFrom.get(p)?.length === 0;
});

// Issues collection
const issues = [];
for (const p of pages) {
  if (p.status !== 200) issues.push({ p: "P0", type: "http", path: p.path, detail: `HTTP ${p.status}` });
  if (!p.title) issues.push({ p: "P0", type: "title", path: p.path, detail: "missing title" });
  if (p.h1Count === 0) issues.push({ p: "P0", type: "h1", path: p.path, detail: "no h1" });
  if (p.robots?.toLowerCase().includes("noindex"))
    issues.push({ p: "P0", type: "robots", path: p.path, detail: p.robots });
  if (p.canonicalMismatch)
    issues.push({ p: "P1", type: "canonical", path: p.path, detail: `${p.canonical} vs ${p.path}` });
  if (!p.inSitemap) issues.push({ p: "P1", type: "sitemap", path: p.path, detail: "missing from sitemap" });
  if (p.h1Count > 1) issues.push({ p: "P1", type: "h1", path: p.path, detail: `${p.h1Count} h1 tags` });
  if (!p.description) issues.push({ p: "P1", type: "description", path: p.path, detail: "missing" });
  if (p.titleLen > 70) issues.push({ p: "P2", type: "title", path: p.path, detail: `length ${p.titleLen}` });
  if (p.descLen > 180) issues.push({ p: "P2", type: "description", path: p.path, detail: `length ${p.descLen}` });
  if (p.descLen > 0 && p.descLen < 80) issues.push({ p: "P2", type: "description", path: p.path, detail: `short ${p.descLen}` });
  if (p.faqSchemaMismatch) issues.push({ p: "P1", type: "schema", path: p.path, detail: "FAQPage without visible FAQ" });
  if (p.jsonLd.includes("INVALID_JSON_LD"))
    issues.push({ p: "P0", type: "schema", path: p.path, detail: "invalid JSON-LD" });
  if (p.imgsNoAlt > 0)
    issues.push({ p: "P2", type: "images", path: p.path, detail: `${p.imgsNoAlt} img without alt` });
}

for (const d of dupTitles) issues.push({ p: "P1", type: "dup-title", detail: d });
for (const d of dupDescs) issues.push({ p: "P1", type: "dup-desc", detail: d });

const output = {
  generatedAt: new Date().toISOString(),
  routeCount: routes.length,
  sitemapUrlCount: sitemapPaths.length,
  robots: { status: robotsRes.status, text: robotsText.trim() },
  sitemap: { status: sitemapRes.status, missingFromSitemap, extraInSitemap: extraInSitemap.slice(0, 20) },
  slashTests,
  domainTests,
  dupTitles,
  dupDescs,
  dupH1s,
  similarDescs: similarDescs.slice(0, 30),
  contentSimilarity,
  orphanCandidates: orphanCandidates.slice(0, 40),
  orphanCount: orphanCandidates.length,
  linkedFromSample: Object.fromEntries(
    [...linkedFrom.entries()].filter(([, v]) => v.length > 0).slice(0, 20),
  ),
  issues,
  issueCounts: {
    P0: issues.filter((i) => i.p === "P0").length,
    P1: issues.filter((i) => i.p === "P1").length,
    P2: issues.filter((i) => i.p === "P2").length,
    P3: issues.filter((i) => i.p === "P3").length,
  },
  pagesSummary: pages.map((p) => ({
    path: p.path,
    status: p.status,
    title: p.title,
    h1: p.h1s[0] ?? null,
    h1Count: p.h1Count,
    descLen: p.descLen,
    canonical: p.canonicalNorm,
    robots: p.robots,
    jsonLd: p.jsonLd,
    inSitemap: p.inSitemap,
    linkedFrom: linkedFrom.get(p.path),
  })),
  geoPages: pages
    .filter((p) =>
      [
        "/",
        "/arhangelsk",
        "/severodvinsk",
        "/novodvinsk",
        "/zabory/profnastil",
        "/zabory/metalloshtaketnik",
        "/vorota/otkatnye",
        "/vorota/raspashnye",
        "/severodvinsk/zabory/profnastil",
        "/severodvinsk/zabory/metalloshtaketnik",
        "/severodvinsk/vorota/otkatnye",
        "/severodvinsk/vorota/raspashnye",
        "/novodvinsk/zabory/profnastil",
        "/novodvinsk/zabory/metalloshtaketnik",
        "/novodvinsk/vorota/otkatnye",
        "/novodvinsk/vorota/raspashnye",
      ].includes(p.path),
    )
    .map((p) => ({
      path: p.path,
      title: p.title,
      description: p.description,
      h1: p.h1s[0],
      breadcrumbLabels: p.breadcrumbLabels,
      jsonLd: p.jsonLd,
    })),
};

writeFileSync("scripts/audit-full-seo-output.json", JSON.stringify(output, null, 2));
console.error(
  `Done. Routes: ${routes.length}, Issues P0=${output.issueCounts.P0} P1=${output.issueCounts.P1} P2=${output.issueCounts.P2}`,
);
console.log(JSON.stringify({ issueCounts: output.issueCounts, dupTitles, missingFromSitemap, orphanCount: output.orphanCount }));
