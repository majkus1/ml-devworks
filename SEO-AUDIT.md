# ML DevWorks — Audyt SEO / Tech SEO / Performance / AEO — i plan wdrożenia

> Dokument handoff dla Codex/GPT-5.5. Zawiera diagnozę + priorytetyzowany plan wdrożenia end-to-end w kodzie Next.js.
> Domena: `ml-devworks.com` · Stack: Next.js 15.5.7 (App Router), React 19, Tailwind, framer-motion, Supabase, nodemailer, googleapis.

## 0. Najważniejsze wnioski (TL;DR)

1. **Krytyczny problem tożsamości w SERP i AI:** Google opisuje stronę główną tekstem z portfolio projektu **Planopia** („Kompleksowy system SaaS do zarządzania czasem pracy i urlopami…") oraz **Sweet Steviam** (na `/en`). To jedyny „gęsty" tekst na home — `<meta description>` przegrywa z opisami cudzych projektów. Efekt: klient B2B i asystent AI myślą, że sprzedajesz system HR/SaaS, a nie usługi programistyczne.
2. **Krytyczny problem wydajności (mobile LCP 8,3 s):** hero renderuje **~5 MB wideo** (`iStock-1262670453-compress-more.mp4`) z `preload="auto"` — i to **dwa razy** (Hero + Footer). Do tego H1 jest animowany `framer-motion` z `opacity: 0`, więc tekst LCP maluje się dopiero po hydracji JS.
3. **Krytyczny problem indeksacji/linkowania:** **Footer nie ma ani jednego linku**, a Navbar „Usługi" prowadzi do kotwicy `#services` — **nie ma strony-huba `/uslugi`**. Podstrony usługowe mają tylko jeden link wewnętrzny (kafelek na home). To tłumaczy słabą indeksację mimo sitemap.
4. **Treść nie jest sprzedażowa pod B2B:** brak sekcji problem→rozwiązanie, brak FAQ na stronach usług, brak cen/widełek, brak case studies z wynikami, generyczne nagłówki (H1 = „ML Devworks", „Automatyzacja i AI").
5. **Frazy z potencjałem marnują się:** „automatyzacje ai dla firm" (30 wyśw.), „usługi automatyzacji procesów" (26), „system rezerwacji klientów" (16), „agencja automatyzacji" — mnóstwo wyświetleń, **0 kliknięć**.
6. **Schema.org powierzchowna i częściowo błędna:** `FAQPage` w blogu jest **zahardkodowany identycznie dla każdego artykułu**, `Organization.sameAs` puste, brak `LocalBusiness`, brak `aggregateRating` mimo opinii Google.
7. **Brak warstwy AEO/GEO:** brak `llms.txt`, brak FAQ w danych strukturalnych na usługach, brak jasnych definicji usług dla LLM-ów.

---

## 1. Struktura projektu, routing, i18n, indeksowalność

**Routing (PL / EN mirror):**
- PL: `/`, `/blog`, `/blog/[slug]`, `/uslugi/{strony-internetowe, aplikacje-internetowe-i-mobilne, automatyzacja-i-ai, sklepy-internetowe-systemy-rezerwacji, devops-wdrozenia, naprawa-optymalizacja-utrzymanie}`
- EN: `/en`, `/en/blog`, `/en/blog/[slug]`, `/en/services/{...}`
- API: `/api/{contact, booking, booking/availability, google-reviews}`

**Problemy strukturalne:**

| # | Problem | Dowód w kodzie |
|---|---------|----------------|
| 1 | Brak strony-huba usług `/uslugi` i `/en/services` (404) | `Glob app/{uslugi,en/services}/page.tsx` → 0 plików |
| 2 | Navbar „Usługi" = kotwica `#services`, nie hub | `components/Navbar.tsx` `navItems` `href:"#services"` |
| 3 | Footer bez linków (0 linków wewnętrznych) | `components/Footer.tsx` – tylko logo + adres |
| 4 | Podstrony usług = 1 link wewnętrzny (kafelek home) | `components/Services.tsx` |
| 5 | `public/robots.txt` **i** `app/robots.ts` istnieją jednocześnie (redundancja) | oba pliki |
| 6 | `lang` w `<html>` liczony z nagłówka `x-pathname` — kruche, wymusza dynamic rendering | `app/layout.tsx` + `middleware.ts` |

**Indeksowalność:** strony są technicznie `index,follow`, canonical i hreflang (`pl`/`en`/`x-default`) poprawne. Problem indeksacji **nie** wynika z blokad, tylko z: słabego linkowania wewnętrznego, cienkiej/duplikującej się treści podstron, braku świeżości (wszystkie wpisy z jedną datą `2026-03-11`).

---

## 2. Dlaczego część stron jest w Google, a część nie

Zgłoszenie sitemap i „Poproś o indeksowanie" nie gwarantują indeksacji. Przyczyny tutaj:

1. **Sierocość podstron** – brak stałych linków z nagłówka/stopki; strony usług dostają link tylko z jednej sekcji home → niska „importance".
2. **Duplikacja szablonu** – strony usług bardzo podobne strukturalnie → „near-duplicate" (screen `site:` wprost: *„pominęliśmy kilka pozycji bardzo podobnych do już wyświetlonych"*).
3. **Konkurencja o snippet z portfolio** – home „mówi" o cudzych produktach → Google gubi temat serwisu.
4. **Historia domeny** – fraza `planopia` (262 wyświetlenia) sugeruje wcześniejsze skojarzenie domeny z Planopią; reindeksacja tożsamości trwa.

**Wniosek:** to problem architektury linków + unikalności treści, nie `robots`/`canonical`.

---

## 3. Google Search Console — zapytania, CTR, kanibalizacja

**Rozkład zapytań (3 mies.):**
- **Brandowe/nawigacyjne (mylone):** `planopia` 262, `ml devnew email` 35, `ml devnew` 22, `devworks` 21, `ml` 7, `dev works` 7, `mlworks` 3, `ml works` 4, `ml devnew phone number` 12. → Marka błędnie zapisywana („devnew" zamiast „devworks") i mieszana z Planopią.
- **Wysokointencyjne B2B (potencjał, 0 klików):** `automatyzacje ai dla firm` 30, `usługi automatyzacji procesów` 26, `automatyzacja ai dla firm` 18, `automatyzacja procesów ai` 18, `system rezerwacji klientów` 16, `elektroniczne systemy sprzedaży` 14, `system elektronicznych rezerwacji` 10, `automatyzacja wdrożeń w chmurze` 10, `system ticketowy dla e-commerce` 8, `agencja automatyzacji` 6, `usługi automatyzacji dla firm` 5, `system płatności dla rezerwacji online` 4, `automatyzacja procesów biznesowych ai` 2, `firma od automatyzacji ai` 2.
- **Lokalne (Kraków) — niewykorzystane:** `software developer kraków` 5, `producent oprogramowania kraków` 4, `serwis komputerowy kraków` 4, `oprogramowanie komputerowe kraków` 4, `software producent kraków` 4. → Masz wizytówkę Google (Kraków, 50.06,19.93), ale zero optymalizacji lokalnej na stronie.

**Strony (kliknięcia/wyświetlenia):** `/en` 2/287, `/` 1/364, `/uslugi/automatyzacja-i-ai` 1/143, `/uslugi/sklepy-…-rezerwacji` 0/87, `/en/blog/when-ai-process-automation…` 0/54. **CTR ~0%** → pozycje niskie i/lub snippety nieklikalne.

**Kraje:** Polska 614/3, USA 197/0, reszta długi ogon. → Ruch EN „przypadkowy" (brak realnego targetu geo).

**Kanibalizacja treści:**
- „automatyzacja AI dla firm": `/uslugi/automatyzacja-i-ai` vs blog `/blog/kiedy-firmie-oplaca-sie-automatyzacja…` vs home → ustal: **usługa = money page**, **blog = informacyjna**, linkuj blog→usługa.
- „system rezerwacji": `/uslugi/sklepy-internetowe-systemy-rezerwacji` vs blog o salonie beauty → rozdziel intencje; rozważ osobną stronę „System rezerwacji online dla firm".
- „strona internetowa dla firmy": home vs `/uslugi/strony-internetowe` vs blog.

---

## 4. PageSpeed / Core Web Vitals

| Metryka | Mobile | Desktop | Cel |
|---|---|---|---|
| Performance | **72** | 92 | ≥90 |
| LCP | **8,3 s** 🔴 | 1,8 s | <2,5 s |
| FCP | 1,1 s | 0,3 s | <1,8 s |
| TBT | 70 ms | 40 ms | <200 ms |
| CLS | 0 ✅ | 0 ✅ | <0,1 |
| Speed Index | 4,7 s | — | <3,4 s |

**Diagnostyka PSI:** render-blocking ~320 ms, „Ulepsz dostarczanie obrazów" **785 KiB**, „nieużywany JS" **152 KiB**, „starszy JS" 11 KiB, **łączny ładunek 5103 KiB**, elementy graficzne bez `width`/`height`.

**Przyczyny w kodzie:**
1. **Wideo 5 MB × 2** (`Hero.tsx` i `Footer.tsx`), `preload="auto"` → to te „5103 KiB".
2. **LCP-tekst chowany animacją** – H1 startuje `opacity:0` z `delay:0.2`, opis `delay:0.6` → maluje się po JS.
3. **Obrazy przez `<img>`, nie `next/image`** (portfolio `.webp`, logo) → brak lazy/sizing/priority, stąd 785 KiB do odzyskania.
4. **`framer-motion` na kliencie** w Navbar/Hero/Services/Realizations/Footer → duży, częściowo nieużywany JS.
5. **Brak `width`/`height` na `<img>`** → ryzyko CLS przy wolnym łączu.

---

## 5. Jakość treści (B2B)

**OK:** realizacje z linkami i technologiami, opinie Google inline, dwujęzyczność, sensowne tematy bloga.

**Braki sprzedażowe:**
- **H1 niesprzedażowe:** home = „ML Devworks", usługa = „Automatyzacja i AI", blog = „Blog". Brak fraz kluczowych w H1.
- **Zero cen/widełek/„od X zł"**, zero czasu realizacji na stronach usług.
- **Brak sekcji problem → rozwiązanie** kierowanej do decydenta B2B.
- **Brak dowodów wyników** (case study z liczbami).
- **Emoji zamiast treści** na `/uslugi/automatyzacja-i-ai` (💬📊📈) — słabe pod B2B i pod ekstrakcję AI.
- **Brak sekcji zaufania na podstronach** (opinie/logo/gwarancje tylko na home).
- **Diakrytyki:** widoczne `title`/`description` bez polskich znaków, np. „Automatyzacja **Procesow**", „**obslugi**", „**wiecej leadow**" (`app/uslugi/automatyzacja-i-ai/page.tsx`) — wygląda jak literówka w SERP i obniża trafność exact-match. Diakrytyki trzymaj w widocznym tekście; warianty bez ogonków ewentualnie tylko w `keywords`.

---

## 6. Potencjał Next.js pod SEO — co wykorzystać

- **`generateMetadata`** tylko w blogu; usługi mają statyczny `metadata` (OK), ale brak OG-image per strona i brak huba.
- **JSON-LD**: dobra baza (`StructuredData.tsx`, `Service`, `BreadcrumbList`), ale:
  - `Organization.sameAs: []` (puste) — dodaj profile (Google Business, LinkedIn, GitHub).
  - Brak **`ProfessionalService`/`LocalBusiness`** z adresem Kraków i `geo` (masz współrzędne w linku do map).
  - Brak **`aggregateRating`/`Review`** mimo API opinii.
  - Brak **`Offer`/cennika** w `Service`.
  - `FAQPage` **zahardkodowany identyczny** dla każdego wpisu (`app/blog/[slug]/page.tsx` `FAQSchema()`) → ryzyko mismatch/spam.
- **OG/Twitter**: jeden globalny `ogimg.png` — brak dedykowanych OG.
- **Fonts**: `Inter` przez `next/font` (dobrze), ale ładowany osobno w root i w `en/layout` (duplikacja instancji).
- **`sitemap.ts`**: OK, ale `lastModified: new Date()` (zawsze „teraz") — lepiej realne daty.

---

## 7. AI search / AEO / GEO

- **Brak `llms.txt`** — nic nie kieruje asystentów AI.
- **Definicje usług nieekstrahowalne** — opisy w kafelkach + emoji, brak zwięzłych zdań typu „ML DevWorks to software house z Krakowa, który buduje X, Y, Z dla firm".
- **Brak FAQ w treści** stron usług (tylko schema w blogu).
- **Snippet mówi o Planopii** → modele języka podsumują firmę błędnie.

---

# PLAN WDROŻENIA (priorytetyzowany)

## 🔴 KRYTYCZNE (robić najpierw)

### K1. Napraw tożsamość strony w SERP/AI (opisy Planopii)
- Dodaj na home **sekcję „Kto jesteśmy / Co robimy"** (2–3 akapity B2B) **nad** sekcją Realizacje (dominujący, tematyczny content).
- `components/Realizations.tsx`: skróć `shortDescription` na kartach do ~120 zn.; pełne opisy tylko w modalu.
- Utrzymaj mocny meta description + realny tekst na stronie.

### K2. Radykalnie zredukuj wagę wideo (mobile LCP)
- Usuń wideo z **Footer** (dekoracja, podwójny koszt) — gradient/statyczne tło.
- Hero: `preload="none"`, dodaj **`poster`** (lekki `.webp` ~30–60 KB), **nie ładuj wideo na mobile** (`matchMedia`). Transkoduj do WebM/AV1 <1,5 MB.
- Statyczny obraz/gradient jako tło malowane od razu (LCP), wideo dogrywaj po `requestIdleCallback`.

### K3. Odblokuj LCP-tekst
- `Hero.tsx`: H1 i pierwszy akapit **bez `opacity:0`** na starcie (renderuj widoczne, animuj subtelnie po hydracji albo wcale).

### K4. Zbuduj architekturę linkowania wewnętrznego
- Utwórz **hub `/uslugi`** i **`/en/services`** (lista 6 usług + opis + linki), canonical/hreflang/sitemap.
- Navbar „Usługi" → link do `/uslugi` (dropdown z 6 usługami).
- **Footer: mapa linków** — Usługi (6), Blog, Kontakt, wersja językowa, NAP (nazwa, adres Kraków, telefon, e-mail), polityka prywatności.
- Dodaj **breadcrumbs UI** (nie tylko schema) na usługach i blogu.
- Cross-linkuj: artykuł → powiązana usługa; usługa → 2–3 artykuły.

### K5. Napraw/zdynamizuj FAQ schema w blogu
- `lib/blog.ts`: pole `faq?: {q,a}[]` per język. `app/blog/[slug]/page.tsx` + EN: renderuj FAQ z danych wpisu, tylko gdy pasuje. Usuń hardkod 3 pytań o strony WWW z każdego artykułu.

---

## 🟡 WAŻNE

### W1. Przepisz strony usług pod B2B + AEO (×6, PL+EN)
Struktura sekcji:
1. **H1 z frazą** (np. „Automatyzacja procesów i AI dla firm – agenci AI, integracje, workflow").
2. **Problem → rozwiązanie** (3–4 realne bóle klienta).
3. **Co dostajesz / zakres** (konkretne deliverables).
4. **Dla kogo / branże**.
5. **Proces** (zostaw istniejący).
6. **Case/mini-dowód** + opinie.
7. **Widełki cen / czas realizacji** („od…", „2–6 tygodni").
8. **FAQ (4–6 pytań)** w treści **i** jako `FAQPage` JSON-LD.
9. **CTA** kontekstowe.
- Popraw **diakrytyki** we wszystkich widocznych `title`/`description`.

### W2. Rozszerz Schema.org
- `Organization` → `sameAs` (Google Business, LinkedIn, GitHub), `address` (Kraków), `logo` absolutny.
- Dodaj **`ProfessionalService`/`LocalBusiness`** z `geo` (50.06248, 19.936336), `areaServed`, `priceRange`, `openingHours`.
- **`AggregateRating`+`Review`** (server-side z `/api/google-reviews`, żeby były w HTML).
- W `Service` dodaj `hasOfferCatalog`/`Offer`.
- `Article`: realne `dateModified`.

### W3. Optymalizacja obrazów i fontów
- `<img>` → **`next/image`** (portfolio, logo, avatary opinii) z `width/height`, `sizes`, `priority` tylko dla LCP.
- Logo w Footer: dodaj `height`.
- Fonty: jedna instancja `Inter`, `display: "swap"`, `preload` tylko potrzebnych wag.

### W4. Redukcja JS
- Ogranicz `framer-motion` w krytycznych komponentach (Navbar/Hero) — CSS transitions lub dynamiczny import poza-krytycznych animacji.
- Zweryfikuj „nieużywany JS 152 KiB" (`next build` + analiza bundle).

### W5. Świeżość i sygnały treści bloga
- Realne, zróżnicowane `dateModified`; publikacja 2–4 wpisy/mies. pod frazy B2B.
- Powiązane wpisy + spis treści (TOC).

### W6. Ujednolić robots
- Zostaw tylko `app/robots.ts`, usuń `public/robots.txt`, dodaj `host`, reguły dla botów AI (allow GPTBot/PerplexityBot).

---

## 🟢 OPCJONALNE
- `opengraph-image.tsx` (dynamiczny OG per usługa/wpis).
- Strona `/kontakt` jako indeksowalny URL (dziś tylko sekcja `#contact`).
- Sekcja „Technologie" (stack) pod frazy techniczne.
- PWA/manifest dopieszczenie.
- Strona „O nas" z E-E-A-T.

---

## Rekomendowane nowe podstrony

**Usługowe (money pages):**
1. `/uslugi` + `/en/services` — **hub** (K4).
2. Wzmocnić „aplikacje-…" pod „aplikacje dla firm", „aplikacje wieloplatformowe", „android i ios".
3. Mocne SEO na „automatyzacja-i-ai" pod „usługi automatyzacji procesów", „agencja automatyzacji", „firma od automatyzacji ai".
4. `/uslugi/systemy-rezerwacji-online` — „system rezerwacji klientów", „system elektronicznych rezerwacji", „system płatności dla rezerwacji online".
5. „integracje-api-crm" / dedykowane oprogramowanie / panele / CRM — „oprogramowanie dla firm", „panel klienta".
6. Landing lokalny: `/software-house-krakow` (lub sekcja lokalna na home).

**Blogowe (pod potwierdzone zapytania):**
- „Ile kosztuje automatyzacja procesów w firmie i jak liczyć ROI"
- „System rezerwacji dla firmy usługowej — funkcje, integracje płatności, wdrożenie"
- „Agenci AI w obsłudze klienta — kiedy się opłacają"
- „Integracja systemów w firmie: API, CRM, ERP — jak zacząć"
- „Aplikacja webowa vs mobilna dla firmy — co wybrać"
- „System ticketowy dla e-commerce — kiedy i jak wdrożyć"

## Rekomendowane frazy (priorytet: potwierdzone w GSC)
`usługi automatyzacji procesów`, `automatyzacja ai dla firm`, `agencja automatyzacji (ai)`, `firma od automatyzacji ai`, `system rezerwacji klientów`, `system elektronicznych rezerwacji`, `system płatności dla rezerwacji online`, `elektroniczne systemy sprzedaży`, `system ticketowy dla e-commerce`, `aplikacje wieloplatformowe`, `android i ios aplikacje mobilne`, `oprogramowanie dla firm`, `dedykowane oprogramowanie / panel klienta`, `automatyzacja wdrożeń w chmurze / ci-cd`, + lokalne `software house / producent oprogramowania kraków`.

## Rekomendowane Schema.org (docelowo)
`Organization` (pełne, `sameAs`, `address`), `ProfessionalService`+`LocalBusiness` (geo Kraków, `priceRange`), `WebSite`+`SearchAction`, `Service`+`OfferCatalog` (per usługa), `BreadcrumbList` (wszędzie), `FAQPage` (per usługa/wpis, dopasowane), `BlogPosting`/`Article` (realne `dateModified`), `AggregateRating`+`Review`.

## Plan poprawy indeksowania
1. Wdróż K4 (hub + footer + breadcrumbs + cross-linki).
2. Uzupełnij unikatową treść (W1) — zabij „near-duplicate".
3. GSC: „Sprawdź URL" + „Poproś o indeksowanie" dla huba i 6 usług; monitoruj „Strony → Dlaczego nie zaindeksowano".
4. Realne `lastModified` w sitemap; ping sitemap po publikacjach.
5. Ujednolić brand „ML DevWorks", uzupełnić Google Business Profile (zbić „ml devnew").

## Plan poprawy wydajności (kolejność)
1. Footer bez wideo → −~2,5 MB.
2. Hero: `poster` + brak wideo na mobile + `preload="none"` → LCP z 8,3 s do ~2–3 s.
3. Usuń `opacity:0` z H1/opisu → szybszy LCP-paint.
4. `next/image` wszędzie (+ `width/height`) → −785 KiB, brak CLS.
5. Ogranicz `framer-motion`/nieużywany JS → −152 KiB.

---

## ✅ Checklista dla Codexa (krok po kroku)

**A. Tożsamość i treść home**
- [ ] `app/page.tsx` + `app/en/page.tsx`: dodać komponent `AboutIntro` (2–3 akapity B2B) nad `Realizations`.
- [ ] `components/Realizations.tsx`: skrócić `shortDescription` w `ProjectCard` do ≤120 zn.; pełny opis tylko w modalu.

**B. Wydajność**
- [ ] `components/Footer.tsx`: usunąć `<video>` + powiązany `useEffect`/stan; zostawić gradient.
- [ ] `components/Hero.tsx`: `preload="none"`, `poster="/hero-poster.webp"`, nie montować `<video>` na mobile (`matchMedia("(min-width: 768px)")`); usunąć `opacity:0`/`delay` z H1 i pierwszego `<p>`.
- [ ] Wygenerować `public/hero-poster.webp` (lekki) i wariant wideo WebM/AV1 <1,5 MB.
- [ ] Zamienić `<img>`→`next/image` w: `Realizations.tsx`, `Footer.tsx` (logo), `Navbar.tsx` (logo, `priority`), avatary w reviews; dodać `width/height/sizes`.

**C. Architektura linków**
- [ ] Utworzyć `app/uslugi/page.tsx` i `app/en/services/page.tsx` (hub, metadata, canonical, hreflang, JSON-LD `CollectionPage`+`BreadcrumbList`).
- [ ] Dodać do `app/sitemap.ts` wpisy hubów; dodać do `lib/i18n-routes.ts` mapowanie `/uslugi ↔ /en/services`.
- [ ] `components/Navbar.tsx`: „Usługi" → `Link href="/uslugi"` (+ opcjonalny dropdown 6 usług).
- [ ] `components/Footer.tsx`: dodać kolumny linków (Usługi×6, Blog, Kontakt, NAP, polityka prywatności, przełącznik języka).
- [ ] Dodać komponent `Breadcrumbs` (UI) na stronach usług i blogu.
- [ ] Dodać sekcję „Powiązane usługi/wpisy" na końcu każdej usługi i wpisu.

**D. Treść usług (×6, PL+EN)**
- [ ] Przepisać wg struktury W1 (problem→rozwiązanie, zakres, dla kogo, proces, dowód, widełki/czas, FAQ, CTA).
- [ ] Naprawić diakrytyki w `title`/`description`/`openGraph` wszystkich `app/uslugi/*` i `app/en/services/*`.
- [ ] Dodać `FAQPage` JSON-LD dopasowany do każdej usługi.

**E. Schema.org**
- [ ] `components/StructuredData.tsx`: uzupełnić `Organization` (`sameAs`, `address`, `telephone`), dodać `ProfessionalService`/`LocalBusiness` z `geo`, `priceRange`, `areaServed`, `openingHours`.
- [ ] Dodać `AggregateRating`+`Review` (server-side z `/api/google-reviews`) na home.
- [ ] `lib/blog.ts`: dodać pole `faq` per język; `app/blog/[slug]/page.tsx` i EN: renderować FAQ z danych wpisu (usunąć hardkod), realne `dateModified`.

**F. AEO/GEO**
- [ ] Dodać `app/llms.txt/route.ts` (lub `public/llms.txt`) z opisem firmy, listą usług (URL-e), obszarem działania (Kraków/PL/EN), kontaktem.
- [ ] Dodać zwięzłe, ekstrahowalne definicje usług (1–2 zdania) na górze każdej strony usługi.
- [ ] W `app/robots.ts` skonsolidować (usunąć `public/robots.txt`), dodać `host`, reguły dla botów AI (allow).

**G. Nowe treści**
- [ ] Utworzyć 3–4 nowe wpisy blogowe pod frazy z sekcji „Rekomendowane frazy".
- [ ] Rozważyć nowe/wzmocnione landing pages: systemy rezerwacji, automatyzacja procesów, aplikacje dla firm, integracje/CRM, landing lokalny Kraków.

**H. Weryfikacja**
- [ ] `next build` + Lighthouse mobile (cel LCP <2,5 s, Perf ≥90).
- [ ] Rich Results Test dla Organization/Service/FAQ/Article.
- [ ] GSC: reindeksacja hubów i 6 usług, monitoring „Strony".

---

# ITERACJA 2 (wrzesień 2026) — asystent AI + klastry z GSC

## Co pokazał eksport GSC (`Zapytania.csv`, 74 zapytania)
~1200 wyświetleń, 1 kliknięcie, pozycje 36–80 dla fraz komercyjnych. Klastry:

| Klaster | Wyśw. | Money page | Działanie |
|---|---|---|---|
| Automatyzacje AI dla firm (automatyzacje ai dla firm 58, automatyzacja ai 54, agencja automatyzacji ai 47, automatyzacja ai dla firm 34, automatyzacja biznesu 34, automatyzacja ai kraków 20 …) | ~420 | `/uslugi/automatyzacja-i-ai` | Przepisana strona (title/H1 „Automatyzacje AI dla firm"), sekcja „Co można zautomatyzować" (12 procesów), „Agencja czy programista", Kraków, +3 FAQ, wpisy P1/P2/P4 |
| Aplikacje mobilne dla firm (125 wyśw., aplikacje mobilne na zamówienie 51) | ~190 | **nowy** `/uslugi/aplikacje-mobilne-dla-firm` | Dedykowany landing PL/EN + wpis P3 + link z `aplikacje-internetowe-i-mobilne` |
| Automatyzacja obsługi zgłoszeń / contact center / obsługi klienta / zamówień | ~70 | `/uslugi/automatyzacja-i-ai` | Wpis P2 + karta oferty „Automatyzacja obsługi klienta i zgłoszeń" + FAQ |
| DevOps (automatyzacja wdrożeń w chmurze poz. 4,2 / 0 klików) | ~17 | `/uslugi/devops-wdrozenia` | Title/description z frazą, keywords |
| Brand/nawigacyjne (ml devnew email/phone ~130) | ~200 | **nowy** `/kontakt`, `/en/contact` | Strona kontaktu z NAP, `ContactPage` schema, asystent AI |
| Lokalne (automatyzacja ai kraków) | ~21 | `/programista-krakow` | Sekcja „Automatyzacja AI Kraków" PL/EN |
| Serwis / serwis terenowy (optymalizacja serwisu, procesy serwisowe) | ~30 | — | Backlog: wpis P5; na razie punkt 10 w liście 12 procesów |

## Co wdrożono
- **Asystent AI** (OpenAI, `lib/ai-assistant/*`, `components/ai-assistant/*`, `app/api/ai-assistant/*`): sekcja inline na home PL/EN i `/kontakt`, pływający przycisk na podstronach, streaming NDJSON, limity, honeypot, wysyłka transkryptu + podsumowania AI na `OWNER_EMAIL`. Env: `OPENAI_API_KEY`, `OPENAI_MODEL`, `AI_ASSISTANT_ENABLED`, `AI_SEND_CLIENT_COPY` (patrz `.env.example`).
- **Nowe strony**: `/uslugi/aplikacje-mobilne-dla-firm`, `/en/services/mobile-apps-for-companies`, `/kontakt`, `/en/contact`; usługa `mobile-apps` i `booking-systems` w `lib/service-details.ts`.
- **Nowe wpisy (PL+EN)**: `co-mozna-zautomatyzowac-w-firmie-z-ai-przyklady-procesow`, `automatyzacja-obslugi-zgloszen-i-klienta-z-ai-helpdesk-contact-center`, `aplikacje-mobilne-dla-firm-na-zamowienie-koszt-czas-natywna-czy-cross-platform`, `agencja-automatyzacji-ai-czy-programista-jak-wybrac-wykonawce`.
- **Poprawki**: automatyzacja PL/EN (przepisane), devops meta, aplikacje (box → mobile), programista-krakow (sekcja AI Kraków), wpis „kiedy opłaca się automatyzacja" (sekcja „mała firma" + FAQ, `dateModified`), HomeFAQ (+1 pytanie), footer → `/kontakt`.
- **AEO**: `llms.txt` rozbudowany (FAQ, cennik, asystent, lista wpisów), nowy `llms-full.txt`, `Organization.knowsAbout/slogan`, `WebSite.publisher`, `robots` disallow `/api/`, sitemap `2026-09-06`.

## Do zrobienia po wdrożeniu
1. Uzupełnić `OPENAI_API_KEY` (i `OWNER_EMAIL`) w `.env` / Vercel; ustawić limit budżetu w panelu OpenAI.
2. GSC: „Poproś o indeksowanie" dla: `/kontakt`, `/en/contact`, `/uslugi/aplikacje-mobilne-dla-firm`, `/en/services/mobile-apps-for-companies`, 4×2 wpisów, `/uslugi/automatyzacja-i-ai`, `/en/services/automation-and-ai`.
3. `components/StructuredData.tsx` → `socialProfiles`: dopisać LinkedIn/GitHub/Clutch.
4. Po 4–6 tygodniach sprawdzić w GSC pozycje fraz z tabeli wyżej; jeśli klaster „serwis" rośnie — napisać P5.
5. Rozważyć kafelek „Aplikacje mobilne" w `components/Services.tsx` na home (obecnie 6 kafelków, mobile tylko w hubie/footerze).
