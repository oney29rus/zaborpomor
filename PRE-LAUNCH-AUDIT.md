# PRE-LAUNCH AUDIT — «Заборы Поморья»

**Дата:** 23 августа 2026  
**Домен:** https://zabory-pomorya.ru  
**Режим:** read-only аудит, код не изменялся  
**Build:** `npm run build` — ✓ (55 static pages)  
**Lint:** `npm run lint` — ✓ (2 warning в `scripts/audit-homoglyphs.mjs`, не в app)  
**Homoglyphs:** `node scripts/audit-homoglyphs.mjs` — **Total: 0**

---

## Вердикт

### **YES, AFTER FIXING P0**

Сайт технически собирается, контент и SEO-архитектура зрелые, формы и калькулятор реализованы правильно. **Публиковать «в рекламу» сейчас нельзя** без устранения блокеров: placeholder политики конфиденциальности, проверки SMTP на production и ошибок в meta ценах ворот.

---

## Launch readiness: **72 / 100**

| Категория | Оценка |
|-----------|--------|
| SEO | 78 |
| Mobile | 82 |
| Performance | 65 |
| Forms | 70 |
| Security | 75 |
| Internal linking | 85 |
| Content | 72 |
| Analytics | 35 |

---

# P0 — BLOCKER

## 1. Политика конфиденциальности — placeholder

| | |
|---|---|
| **URL / файл** | `/privacy/`, `app/privacy/page.tsx` |
| **Описание** | Страница содержит текст «Страница находится в разработке». При этом все формы (`LeadForm`, `CalculatorSubmitForm`) требуют согласия со ссылкой на `/privacy/`. |
| **Почему важно** | Юридический риск при сборе телефона/имени (152-ФЗ). Нельзя принимать заявки с формальной ссылкой на пустую политику. |
| **Как проверить** | Открыть `/privacy/`, отправить форму на главной — checkbox ведёт на placeholder. |
| **Решение** | Написать полноценную политику: оператор, цели обработки, срок хранения, права субъекта, контакты. Оставить `noindex`. |

## 2. SMTP на production не верифицирован

| | |
|---|---|
| **URL / файл** | `/api/leads`, `lib/leads/send-to-email.ts`, `.env.local` |
| **Описание** | Если `SMTP_HOST`, `SMTP_USER`, `SMTP_PASSWORD`, `LEADS_EMAIL` не заданы — API возвращает **503** «Отправка заявок временно недоступна». |
| **Почему важно** | Сайт без рабочих заявок = потеря всех лидов. |
| **Как проверить** | На production отправить тестовую заявку после деплоя; проверить env на хостинге. |
| **Решение** | Заполнить env по `.env.example`, проверить Yandex SMTP (пароль приложения), один smoke-test заявки. |

## 3. Неверные цены ворот в meta description

| | |
|---|---|
| **URL / файл** | `/vorota/raspashnye/` — `lib/service-pages/raspashnye/content.ts` |
| **Описание** | Description: «от **15 000 ₽**» — это **calculator surcharge**, не standalone. Фактическая standalone-цена: **25 000 ₽** (`SWING_GATE_STANDALONE_FROM`). Hero на странице показывает правильную цену из config. |
| **Почему важно** | Вводит в заблуждение в SERP и при шаринге; конфликт с карточкой услуг на главной. |
| **Решение** | Description → «от 25 000 ₽». |

| | |
|---|---|
| **URL / файл** | `/vorota/otkatnye/` — `lib/service-pages/otkatnye/content.ts` |
| **Описание** | Description: «от **100 000 ₽**». Standalone: **110 000 ₽** (`SLIDING_GATE_STANDALONE_FROM`). |
| **Решение** | Description → «от 110 000 ₽». |

---

# P1 — MUST FIX

## 4. Аналитика не подключена

| | |
|---|---|
| **Файлы** | `lib/analytics/track.ts`, `app/layout.tsx` |
| **Описание** | События пишутся в `window.dataLayer` и `CustomEvent`, но **нет скрипта Яндекс Метрики / GTM / GA**. Счётчик не инициализирован. |
| **События в коде** | `calculator_started`, `calculator_changed`, `calculator_submit_opened`, `lead_submitted`, `phone_clicked` |
| **Отсутствуют** | `city_click`, `fence_type_click` (рекомендация) |
| **Решение** | Установить счётчик Метрики + цели на `lead_submitted`, `phone_clicked`, `calculator_submit_opened`. |

## 5. Навигация Header — якоря только на главной

| | |
|---|---|
| **Файл** | `lib/constants.ts` — `NAV_LINKS` |
| **Описание** | «Заборы» → `#fence-types`, «Цены» → `#prices`, «О компании» → `#why-us`. На `/zabory/profnastil/` и других страницах якоря **не существуют** — пользователь остаётся на той же URL без скролла. |
| **Решение** | Использовать `/#fence-types`, `/#prices`, `/#why-us`, `/#calculator` для глобального header. |

## 6. Performance — тяжёлые изображения

| Файл | Размер |
|------|--------|
| `public/images/projects/novodvinsk2.jpg` | **5.4 MB** |
| `public/images/projects/prof-sever.jpg` | **4.1 MB** |
| `public/images/projects/prof-shirsha.jpg` | **4.0 MB** |
| `public/images/hero-fence.jpg` (LCP) | **3.6 MB** |
| `public/images/projects/laya.png` | **3.5 MB** |
| `public/images/projects/3d-katuninec.jpg` | **3.3 MB** |

| | |
|---|---|
| **Описание** | Hero и project images без WebP/AVIF; `next/image` оптимизирует on-the-fly, но исходники критично тяжёлые. Hero + logo оба с `priority` — конкуренция за LCP. |
| **Решение** | Сжать исходники до ≤300–500 KB; оставить `priority` только на hero. |

## 7. Favicon — вероятно дефолтный Next.js

| | |
|---|---|
| **Файл** | `app/favicon.ico` (25 931 bytes) |
| **Описание** | Нет `icon.png`, `apple-touch-icon`, `manifest.json`. Favicon не брендирован логотипом «Заборы Поморья». |
| **Решение** | Сгенерировать favicon из `public/images/projects/logo.png`; добавить apple-touch-icon. |

## 8. PII в server logs

| | |
|---|---|
| **Файл** | `lib/leads/process-lead.ts` |
| **Описание** | `console.info("[lead]", JSON.stringify(payload))` логирует телефон, UTM, calculator data на сервере. |
| **Решение** | В production логировать только id/source/pagePath без телефона; или отключить verbose logging. |

## 9. 404 — битая подпись кнопки

| | |
|---|---|
| **Файл** | `app/not-found.tsx` |
| **Описание** | Кнопка «Виды заборов» ведёт на `/`, а не на `/#fence-types`. |
| **Решение** | Исправить href на `/#fence-types`. |

---

# P2 — SHOULD FIX

## 10. OG image отсутствует на части страниц

Страницы **без** `image` в `createPageMetadata`:
- `/uslugi/karkas-zabora/`
- `/uslugi/vintovye-svai/`
- `/vorota/raspashnye/`
- `/vorota/otkatnye/`
- `/uslugi/montazh-zabora-iz-materiala-zakazchika/` (проверить)

Есть OG: главная, geo (5), fence (6), `/raboty/`, work detail pages.

## 11. robots.txt не закрывает `/api/`

| | |
|---|---|
| **Файл** | `app/robots.ts` |
| **Описание** | `allow: /` для всех — `/api/leads` теоретически crawlable (POST не индексируется, но лучше явно `Disallow: /api/`). |

## 12. Footer — VK без URL

| | |
|---|---|
| **Файл** | `lib/footer/navigation.ts` |
| **Описание** | `social.href: null`, TODO комментарий. Не блокер, но снижает доверие. |

## 13. DEMO-отзывы в кодовой базе

| | |
|---|---|
| **Файл** | `lib/reviews/reviews.ts` |
| **Описание** | `[DEMO]`, `[Имя клиента]` — **не рендерятся** на главной (ReviewsSection убран). Риск случайного возврата блока. |
| **Решение** | Перед возвратом блока — только реальные отзывы. |

## 14. Service JSON-LD не используется

| | |
|---|---|
| **Файл** | `lib/seo/json-ld.ts` — `buildServiceJsonLd` определён, но нигде не подключён. |
| **Решение** | Опционально добавить на service/fence pages (не блокер). |

---

# P3 — NICE TO HAVE

- Honeypot-поле в формах (сейчас только rate-limit 60 сек по телефону)
- `city_click` / `fence_type_click` analytics events
- WebP исходники в `/public`
- Manifest PWA
- Verification meta для Вебмастера (после регистрации)

---

# 1. INDEXABLE URL (48 страниц)

**Источник:** `lib/seo/indexable-routes.ts` + 30 work slugs из `lib/works/projects.ts`

| Группа | Кол-во | Index | Canonical |
|--------|--------|-------|-------------|
| Главная | 1 | index | `/` |
| Geo | 5 | index | self |
| Fence | 6 | index | self |
| Uslugi | 3 | index | self |
| Vorota | 2 | index | self |
| /raboty/ | 1 | index | `/raboty/` |
| /raboty/[slug]/ | 30 | index | `/raboty/{slug}/` |
| **Итого** | **48** | | |

**Не индексируется:** `/privacy/` (`noindex, nofollow`), `/_not-found`, `/api/leads`

### Дубли Title / Description / H1

| Тип | Результат |
|-----|-----------|
| Exact duplicate Title | **0** |
| Exact duplicate Description | **0** |
| Exact duplicate H1 | **0** |
| Template similarity | Geo trio (Архангельск/Северодvinsk/Новodvinsk) — шаблонные descriptions, различаются городом |
| Fence pages | Шаблон «Установка заборов из {type} в Архангельске, Северодvinske…» — ожидаемо |

### Canonical

Все коммерческие страницы используют `createPageMetadata` → `alternates.canonical` = относительный path. `metadataBase`: `https://zabory-pomorya.ru`. Geo pages **не** canonical на homepage — ✓.

### Краткая таблица static pages

| URL | Title (суть) | H1 | Status |
|-----|--------------|-----|--------|
| `/` | Заборы Поморья — заборы под ключ в Архангельской области | Заборы под ключ в 3 городах | ✓ |
| `/arhangelsk/` | Заборы в Архангельске под ключ | Заборы под ключ в Архангельске | ✓ |
| `/severodvinsk/` | Заборы в Северодvinske под ключ | Заборы под ключ в Северodvinske | ✓ |
| `/novodvinsk/` | Заборы в Новodvinske под ключ | Заборы под ключ в Новodvinske | ✓ |
| `/holmogory/` | Заборы в Холmogory… | Заборы под ключ в Холmogorsky районе | ✓ |
| `/primorskiy-rayon/` | Заборы в Примorsky районе | Заборы под ключ в Примorsky районе | ✓ |
| `/zabory/*` (6) | Забор из {материал} — цена от X ₽/м | Забор из {материал} под ключ | ✓ |
| `/uslugi/*` (3) | Услуга + Архангельск | Специфичный H1 | ✓ |
| `/vorota/*` (2) | Ворота в Архангельске | Специфичный H1 | ⚠ meta price |
| `/raboty/` | Наши работы — фото | Наши работы — установленные заборы | ✓ |

Work pages (30): unique title = `{project.title} — фото и цена`, H1 = `project.title`, canonical = `/raboty/{slug}/`.

---

# 2. ROBOTS.TXT

```
User-agent: *
Allow: /

Sitemap: https://zabory-pomorya.ru/sitemap.xml
```

| Проверка | Статус |
|----------|--------|
| Коммерческие страницы открыты | ✓ |
| /raboty/ открыты | ✓ |
| /images/ открыты | ✓ (нет Disallow) |
| /api/ закрыт | ✗ (рекомендация Disallow) |
| Sitemap указан | ✓ |

---

# 3. SITEMAP.XML

**48 URL** из `getIndexableRoutes()`. Нет localhost, privacy, api, 404.

| Включено | ✓ |
|----------|---|
| `/` | ✓ |
| 6 fence | ✓ |
| 5 geo | ✓ |
| 3 uslugi | ✓ |
| 2 vorota | ✓ |
| /raboty/ | ✓ |
| 30 work slugs | ✓ |

Уникальность URL: ✓ (нет дублей).

---

# 4. 404

| | |
|---|---|
| Custom 404 | ✓ `app/not-found.tsx` — Header, Footer, CTA |
| `href="#"` | **0** в коде |
| `href=""` | **0** |
| `/otzyvy/` | **Не линкуется** с homepage (ReviewsSection убран). Ссылка остаётся только в `lib/reviews/reviews.ts` — orphan constant |
| Broken internal links | 404 «Виды заборов» → `/` (P1) |

---

# 5. REDIRECTS

| | |
|---|---|
| `next.config.ts` | Пустой — **нет redirects** |
| `middleware.ts` | **Отсутствует** |
| Циклы | Нет |
| 302 vs 301 | N/A |

Trailing slash: Next.js App Router — routes без slash в build output (`/arhangelsk`), canonical paths в metadata с `/` — проверить поведение на production.

---

# 6. HOMEPAGE (после доработки)

| Блок | Статус |
|------|--------|
| Hero | ✓ H1 tri-city, CTA → `#calculator`, badge 2 400 ₽/м |
| Calculator | ✓ default svarka 20m 1.5m, sort by price, gap metall |
| Cities Hub | ✓ 3 карточки + secondary geo links |
| Fence Types | ✓ 6 ссылок, id `#fence-types`, «Смотреть все» убрана |
| Mount-only promo | ✓ 800–1500 ₽/м |
| Additional Services | ✓ 5 URL |
| Works | ✓ 8 curated, без фильтров |
| Pricing | ✓ addons с пояснением calculator vs standalone |
| Why Us / Process / FAQ / Final CTA | ✓ |
| DEMO reviews | ✓ убраны |
| Header CTA | ✓ `#calculator` |

---

# 7. КАЛЬКУЛЯТОР — контрольные расчёты

Логика: `fenceLineCost = (pricePerMeter + gapSurcharge) × length + gateSurcharge + nice`.

| Сценарий | Ожидание | Расчёт | ✓ |
|----------|----------|--------|---|
| Сварная 20м 1.5м | 48 000 ₽ | 2400×20 | ✓ |
| Профнастил 50м 1.5м | 170 000 ₽ | 3400×50 | ✓ |
| Профнастил 50м 1.8м | 180 000 ₽ | 3600×50 | ✓ |
| Металл 50м 1.8м | 195 000 ₽ | 3900×50 | ✓ |
| Металл 40м 1.8м gap 2см | 166 000 ₽ | 40×(3900+250) | ✓ |
| + распашные | 181 000 ₽ | 166000+15000 | ✓ |
| + откатные | 266 000 ₽ | 166000+100000 | ✓ |
| 50м 1.8м откатные + Nice | 365 000 ₽ | 195000+100000+70000 | ✓ |

UI форматирует через `formatPrice()` → «48 000 ₽» (Intl ru-RU).

Default homepage: svarka-setka, 1.5m, 20m, gate none, wicket false ✓  
Sort: по цене 1.5m ✓  
Gap metall: только при metalloshtaketnik ✓

---

# 8. ФОРМЫ

| Форма | Endpoint | source |
|-------|----------|--------|
| CalculatorSubmitForm | POST `/api/leads` | `calculator` |
| LeadForm (FinalCta) | POST `/api/leads` | `cta` |
| Geo / fence / service pages | LeadForm через FinalCtaSection | `cta` |
| Work pages | **Нет формы** — CTA → калькулятор вида забора |

### Payload fields

| Поле | Calculator | CTA |
|------|------------|-----|
| phone | ✓ | ✓ |
| name | ✓ optional | ✗ |
| city | ✓ attribution | ✓ attribution |
| pagePath | ✓ | ✓ |
| pageUrl | ✓ | ✓ |
| source | ✓ | ✓ |
| calculator object | ✓ | ✗ |
| utm (5 fields) | ✓ first-touch | ✓ |
| yclid | ✓ | ✓ |
| referrer | ✓ | ✓ |

### Защита

| Механизм | Статус |
|----------|--------|
| Server validation | ✓ `isValidPayload` |
| Phone E.164 | ✓ |
| Rate limit 60s/phone | ✓ in-memory |
| Double submit UI | ✓ disabled button |
| Honeypot | ✗ |
| SMTP secrets in frontend | ✗ нет |

---

# 9. SMTP SECURITY

| Проверка | Статус |
|----------|--------|
| `.env*` в `.gitignore` | ✓ |
| `SMTP_PASSWORD` только server-side | ✓ |
| `NEXT_PUBLIC_*` SMTP | ✗ нет |
| Hardcoded password | ✗ не найдено |
| `.env.example` | Содержит `SMTP_USER=pomorzabor@yandex.ru`, password пустой — OK для шаблона |

**CRITICAL в git:** не проверено (git недоступен в shell). Рекомендуется `git log -p -- .env*` перед push.

---

# 10. UTM / ATTRIBUTION

| | |
|---|---|
| Storage | localStorage `zp_attribution`, TTL 30 дней |
| Mode | **First-touch** для UTM, yclid, referrer, geoCity |
| Scenario | `/severodvinsk/?utm_source=yandex` → `/zabory/profnastil/` → submit |
| Result | UTM сохраняются ✓; geoCity = «Северодvinsk» ✓; city в заявке из attribution ✓ |

---

# 11–12. MOBILE / DESKTOP

### Mobile (320–430)

| Область | Оценка |
|---------|--------|
| Header 57px sticky | ✓ |
| Mobile menu | ✓ aria-expanded; CTA `#calculator` |
| Hero | H1 4–5 строк; CTA full-width |
| Calculator | 2-col grid типов; vertical stack params+result |
| Cities Hub | 1 col compact cards aspect-video |
| Works | stack grid 1→2 col |
| Forms | min-h-12 inputs ✓ |
| Horizontal overflow | `max-lg:overflow-x-hidden` на calculator — ✓ |

**Риск:** Header nav `#fence-types` на inner pages — dead anchor (P1).

### Desktop (1024–1920)

| | |
|---|---|
| Container | `max-w-7xl` — ✓ |
| Hero | 2-col lg |
| Calculator | 2-col lg |
| Cities | 3-col lg |
| Fence types | 3-col lg |
| Additional services | 6-col grid с центрированием 5 карточек |

---

# 13. PERFORMANCE

| | |
|---|---|
| next/image | ✓ широко |
| priority | Hero + Header logo (дубль LCP) |
| sizes | ✓ на hero, catalog, cities hub |
| Lazy | default below fold |
| Client components | ~24 файла `"use client"` — calculator, works grid, forms |
| Fonts | Geist single variable |
| Heaviest assets | см. P1 #6 (до 5.4 MB source) |

---

# 14. ACCESSIBILITY

| | Статус |
|---|--------|
| alt на изображениях | ✓ (hero, catalog, cities, works) |
| Button vs link | ✓ CTA теперь ButtonLink |
| Form labels | ✓ phone, name, privacy |
| FAQ aria | ✓ accordion |
| Mobile menu aria-expanded | ✓ |
| Focus states | ✓ focus-visible на кнопках/ссылках |
| Tap targets | ✓ min-h-12 на CTA |
| Contrast | Не тестировалось инструментально — визуально OK |

---

# 15. STRUCTURED DATA

| Schema | Где |
|--------|-----|
| Organization (HomeAndConstructionBusiness) | Global `layout.tsx` |
| FAQPage | Homepage, geo, fence, service pages |
| BreadcrumbList | Geo, fence, service, works, work detail |
| Service | **Не подключён** (функция есть) |
| Review/Rating | **Нет** ✓ |

Duplicate schema: Organization global + FAQ/Breadcrumb per page — норма, не дублируется.

---

# 16. LOCAL SEO

| Страница | H1 unique | Meta unique | Works unique | Canonical |
|----------|-----------|-------------|--------------|-----------|
| `/` | tri-city brand | brand + region | 8 curated | self |
| `/arhangelsk/` | ✓ | ✓ | 8 null-city | self |
| `/severodvinsk/` | ✓ | ✓ | 5 Severodvinsk | self |
| `/novodvinsk/` | ✓ | ✓ | 4 Novodvinsk | self |
| `/holmogory/` | ✓ | ✓ | 4 Holmogory | self |
| `/primorskiy-rayon/` | ✓ | ✓ | 4 Primorskiy | self |

Homepage title брендовый — **не каннибализирует** city-intent ✓.

---

# 17. FENCE PAGES (6)

Все 6: profnastil, metalloshtaketnik, 3d-setka, svarnaya-setka, svarnaya-setka-pvh, derevyannyy-shtaketnik.

| | |
|---|---|
| Цены | Из `lib/calculator/prices.ts` ✓ |
| Calculator initialParams | page-specific ✓ |
| FAQ + JSON-LD | ✓ |
| OG image | ✓ hero image |
| Works | ✓ curated per page |
| Geo links | ✓ через shared blocks |
| CTA | #calculator + FinalCta |

---

# 18. WORK PAGES

| | |
|---|---|
| Slugs | 30 unique |
| Canonical | `/raboty/{slug}/` |
| Sitemap | ✓ all 30 |
| OG | project image[0] |
| Similar works | ✓ 3 related |
| Historical prices | ✓ не тронуты в projects.ts |
| Duplicate pages | ✗ |

---

# 19–20. HOMOGLYPHS / BUILD

```
homoglyphs: Total: 0
build: ✓ 55 pages
lint: ✓ (2 warnings in audit script only)
typecheck: included in build ✓
```

---

# 21. DEPENDENCIES

```json
"dependencies": { "next", "nodemailer", "react", "react-dom" }
"devDependencies": { tailwind, eslint, typescript, types... }
```

| | |
|---|---|
| Unused deps | Не обнаружено — минимальный набор |
| Heavy packages | Только Next + nodemailer |
| dev in production | nodemailer correctly in dependencies (API route) |

---

# 22. ANALYTICS

| | |
|---|---|
| Яндекс Метрика | **Не подключена** |
| Google Analytics / GTM | **Не подключена** |
| Event layer | ✓ готов (`trackEvent` → dataLayer) |

---

# 23. ЯНДЕКС — CHECKLIST

- [ ] Зарегистрировать сайт в Яндекс Вебмастер
- [ ] Подтвердить права (meta или DNS)
- [ ] Отправить `https://zabory-pomorya.ru/sitemap.xml`
- [ ] Проверить robots через инструмент Вебмастера
- [ ] Установить счётчик Метрики
- [ ] Настроить цели: заявка, звонок, калькулятор
- [ ] Проверить favicon в выдаче
- [ ] Organization schema уже есть — проверить в Валидаторе

---

# 24. GOOGLE — CHECKLIST

- [ ] Search Console property (domain или URL-prefix)
- [ ] Submit sitemap
- [ ] Inspect canonical on key pages
- [ ] Request indexing for homepage + top geo
- [ ] Monitor Core Web Vitals after image compression
- [ ] Rich Results test for FAQPage

---

# 25. FAVICON / ICONS

| Asset | Статус |
|-------|--------|
| `app/favicon.ico` | Есть (25 KB, вероятно default Next) |
| `icon.png` | ✗ |
| `apple-touch-icon` | ✗ |
| `manifest.json` | ✗ |
| Logo | `public/images/projects/logo.png` ✓ |

---

# 26. OPEN GRAPH

| Страницы | og:title, og:description | og:image |
|----------|--------------------------|----------|
| Homepage | ✓ | ✓ hero-fence.jpg |
| Geo (5) | ✓ | ✓ hero images |
| Fence (6) | ✓ | ✓ |
| Uslugi (3) | ✓ | частично |
| Vorota (2) | ✓ | ✗ |
| /raboty/ | ✓ | ✗ (нет image param) |
| Work detail | ✓ | ✓ project photo |

---

# 27. PRIVACY

| | |
|---|---|
| Страница | `/privacy/` exists |
| noindex | ✓ |
| Ссылка из forms | ✓ PrivacyConsent |
| Ссылка footer | ✓ |
| Контент | **PLACEHOLDER — BLOCKER** |

---

# 28. CONTENT QUALITY

| Pattern | Найдено |
|---------|---------|
| `[DEMO]` | `lib/reviews/reviews.ts` — не на сайте |
| `TODO` | footer VK URL |
| «Страница находится в разработке» | `/privacy/` |
| «Фото скоро будет добавлено» | fallback UI only (ServicePhoto, ProjectCard) — не на live content |
| lorem ipsum | ✗ |
| Debug output | dev-only `[analytics]` console |

---

# 29. SECURITY

| | Статус |
|---|--------|
| dangerouslySetInnerHTML | Только JsonLd (JSON.stringify) ✓ |
| Input sanitize | ✓ stripControlChars, escapeHtml in email |
| API validation | ✓ |
| Rate limiting | ✓ 60s per phone |
| CORS | N/A same-origin |
| Email injection | ✓ sanitized templates |
| Exposed env | ✓ server-only |

---

# TOP-10 задач до запуска

| # | Задача | P |
|---|--------|---|
| 1 | Написать полноценную политику конфиденциальности на `/privacy/` | **P0** |
| 2 | Настроить и smoke-test SMTP на production | **P0** |
| 3 | Исправить meta description цен на `/vorota/raspashnye/` (25k) и `/vorota/otkatnye/` (110k) | **P0** |
| 4 | Подключить Яндекс Метрику + цели на lead/phone/calculator | **P1** |
| 5 | Сжать hero + top-10 project images (≤500 KB) | **P1** |
| 6 | Header NAV: `/#fence-types`, `/#prices`, `/#why-us`, `/#calculator` | **P1** |
| 7 | Брендированный favicon + apple-touch-icon | **P1** |
| 8 | Убрать/маскировать PII из production server logs | **P1** |
| 9 | OG images для vorota + uslugi без image | **P2** |
| 10 | `Disallow: /api/` в robots.txt | **P2** |

---

*Аудит выполнен без изменений в коде приложения.*
