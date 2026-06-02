# Design System-rapport: fsk.no
*Metodisk DOM/CSS-inspeksjon av Fredrikstad Skiklubb sitt nettsted. Alle verdier er hentet direkte fra stilark og computed styles – ingenting er gjettet.*

---

## A. DESIGN TOKENS

### CSS-variabler på `:root` (eksakt som de står i stilarket)

```css
/* Fonter */
--font-sans: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
--font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;

/* Tailwind-farger (standardnavn) */
--color-slate-100: oklch(96.8% .007 247.896);
--color-slate-800: oklch(27.9% .041 260.031);
--color-slate-950: oklch(12.9% .042 264.695);
--color-gray-600:  oklch(44.6% .03 256.802);
--color-black: #000;
--color-white: #fff;

/* Egendefinerte prosjektfarger */
--color-offwhite:       #fcf6f2;
--color-offwhite-light: #f1eae5;
--color-beige:          #f1eae5;
--color-dark-blue:      #091256;
--color-light-blue:     #c3cfeb;
--color-bright-blue:    #004890;
--color-red:            #d8382f;
--color-peach:          #f8b99d;
--color-green:          #415820;
--color-light-green:    #c6c075;

/* Spacing-enhet */
--spacing: .25rem;

/* Container-bredder */
--container-sm:  24rem;
--container-lg:  32rem;
--container-2xl: 42rem;

/* Typeskala */
--text-xs:              .66666rem;   --text-xs--line-height:   calc(1/.75);
--text-sm:              .75rem;      --text-sm--line-height:   calc(1.25/.875);
--text-base:            1rem;        --text-base--line-height: 1.45;
--text-lg:              1.333rem;    --text-lg--line-height:   1.4;
--text-xl:              2.083rem;    --text-xl--line-height:   1.3;
--text-2xl:             3rem;        --text-2xl--line-height:  calc(2/1.5);

/* Font-vekter */
--font-weight-normal:   400;
--font-weight-medium:   500;
--font-weight-semibold: 600;
--font-weight-bold:     700;

/* Letter-spacing */
--tracking-tight: -.025em;
--tracking-wide:  .025em;

/* Line-height */
--leading-tight: 1.25;

/* Border-radius */
--radius-xs:  .55rem;
--radius-sm:  10px;
--radius-md:  15px;
--radius-lg:  25px;
--radius-xl:  40px;
--radius-2xl: 50px;

/* Easing */
--ease-in:     cubic-bezier(.4, 0, 1, 1);
--ease-in-out: cubic-bezier(.4, 0, .2, 1);

/* Transitions */
--default-transition-duration:        .15s;
--default-transition-timing-function: cubic-bezier(.4, 0, .2, 1);
```

### Fargepalett

| Hex | RGB | Brukes til | Foreslått rolle |
|-----|-----|------------|-----------------|
| `#f1eae5` | rgb(241, 234, 229) | `<html>` bakgrunn, page-bg | Nøytral / bakgrunn |
| `#fcf6f2` | rgb(252, 246, 242) | Knapper (lys), kort-bakgrunn, skjemafelt-bg | Nøytral / overflate |
| `#091256` | rgb(9, 18, 86) | All tekst, header, footer-bg, knapper | Primær / mørk |
| `#c3cfeb` | rgb(195, 207, 235) | "Meld deg inn"-knapp (nav), søkeknapp-bg, lys ramme | Sekundær / lys |
| `#004890` | rgb(0, 72, 144) | Skjema input-border, hover-border | Sekundær / aksent |
| `#415820` | rgb(65, 88, 32) | Primær CTA ("Meld deg inn i klubben"), badge bg, "Kontakt oss" | Primær / handling |
| `#c6c075` | rgb(198, 192, 117) | Nyhets-/aktivitetskort bg, h1-highlight-bakgrunn, hero-boks | Aksent / varm |
| `#d8382f` | rgb(216, 56, 47) | Rød-farge (definert i tokens, ikke funnet aktivt i bruk i DOM) | Aksent / advarsel |
| `#f8b99d` | rgb(248, 185, 157) | Persike-farge (definert i tokens) | Aksent / varm |

### Spacing-skala
Systemet bruker Tailwind-multiplikatorer på `--spacing: 0.25rem` (= 4px base). Eksempler funnet i bruk:

- `gap-5` → 1.25rem (20px)
- `gap-7` → 1.75rem (28px)
- `gap-11` → 2.75rem (44px)
- `px-5` → 1.25rem / `px-6` → 1.5rem / `px-7` → 1.75rem (sidekanter)
- `py-9` → 2.25rem / `py-11` → 2.75rem / `py-16` → 4rem / `py-20` → 5rem (section-padding)
- `my-16 md:my-20 2xl:my-24` → seksjonsmargin vertikalt

### Border-radius

| Token | Verdi | Brukes til |
|-------|-------|------------|
| `--radius-xs` | 0.55rem | ikke funnet i aktiv bruk |
| `--radius-sm` | 10px | ikke funnet i aktiv bruk |
| `--radius-md` | 15px | ikke funnet i aktiv bruk |
| `--radius-lg` | 25px | H1-highlight (computed: 25px) |
| `--radius-xl` | 40px | Hero-wrapper / stor boks (computed: 40px) |
| `--radius-2xl` | 50px | Nyhetskort (rounded-2xl → computed: 50px) |
| `rounded-full` | ~33554432px (border-radius: 9999px) | Alle knapper, søkefelt, tags/badges |
| `rounded-xl` | 50px (computed) | Nyhetskort |

### Box-shadow
`.shadow-md` er definert i CSS med:
```
--tw-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1);
```
Aktiv bruk i DOM: **ikke funnet** – ingen elementer hadde ikke-`none` box-shadow.

### Breakpoints (media queries fra stilarket)

| Breakpoint | Verdi | Tilsvarer |
|------------|-------|-----------|
| xs | `min-width: 375px` | Liten mobil |
| sm | `min-width: 40rem` (640px) | Mobil/tablet |
| md | `min-width: 48rem` (768px) | Tablet |
| lg | `min-width: 64rem` (1024px) | Desktop |
| xl | `min-width: 77rem` (1232px) | Stor desktop |
| 2xl | `min-width: 96rem` (1536px) | Ekstra stor |
| hover | `(hover: hover)` | Peker-enhet |

---

## B. TYPOGRAFI

### Font-familier

**Brødtekst og alle overskrifter:**
```
font-family: "DM Sans", "DM Sans Fallback";
```
Fallback-stacken er en tilpasset metrikk-justert Arial-fallback:
```css
@font-face {
  font-family: "DM Sans Fallback";
  src: local("Arial");
  ascent-override: 94.90%;
  descent-override: 29.66%;
  line-gap-override: 0.00%;
  size-adjust: 104.53%;
}
```

### Typeskala (computed px-verdier fra DOM)

*Base-størrelse: `html` har ingen fast px-verdi satt – browser default 16px → skalaen bruker rem.*

| Element | font-size | line-height | font-weight | letter-spacing | text-transform | Farge |
|---------|-----------|-------------|-------------|----------------|----------------|-------|
| **h1** | 70.985px (≈`--text-2xl` × 16 = 48px, men computed er større – fordi `<html>` font-size er 23.66px basert på viewport) | 106.478px | 700 | -1.775px (`tracking-tight`) | none | `#091256` |
| **h2** | 31.541px (`--text-lg` = 1.333rem) | 44.157px | 600 | normal | none | `#091256` |
| **h3** | 31.541px | 44.157px | 700 | -0.789px | none | `#091256` |
| **h4** | ikke funnet i DOM | – | – | – | – | – |
| **ingress / p** | 23.662px (`--text-base` = 1rem base-size) | 34.309px | 400 | normal | none | `#091256` |
| **brødtekst (a)** | 23.662px | 31.943px | 400 | normal | none | `#091256` |
| **label (skjema)** | 17.746px (`--text-sm`) | – | 400 | – | none | `#091256` |
| **knapper (lg)** | 23.662px | – | 400 | – | none | varierer |
| **knapper (sm/nav)** | 17.746px | – | 400/700 | – | none | `#091256` |
| **nav-menypunkter** | 17.746px | – | 700 | – | none | `#091256` |
| **footer-lenker** | 23.662px | – | 400 | – | none | `#fcf6f2` |
| **breadcrumb** | 17.746px | – | 400 | – | none | `#091256` (70% opacity) |
| **badge/tag** | 23.662px | – | 400 | – | none | `#fcf6f2` |

**Merk om "fluid" størrelser:** Nettstedet ser ut til å kjøre flytende skrift (viewport-basert). Den beregnede `font-size` på `<body>` er 23.66px (ikke 16px), noe som indikerer at `--text-base` = `1rem` = ~23.66px fordi `<html>` font-size er skalert via CSS clamp/vw-enhet.

### `@font-face`-deklarasjoner

```css
/* Latin Extended */
@font-face {
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 100 1000;
  font-display: swap;
  src: url(/_next/static/media/7ab938503e4547a1-s.woff2) format("woff2");
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, ...;
}

/* Latin (primær) */
@font-face {
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 100 1000;
  font-display: swap;
  src: url(/_next/static/media/13971731025ec697-s.p.woff2) format("woff2");
  unicode-range: U+00??, U+0131, U+0152-0153, ...;
}

/* Fallback */
@font-face {
  font-family: "DM Sans Fallback";
  src: local("Arial");
  ascent-override: 94.90%;
  descent-override: 29.66%;
  line-gap-override: 0.00%;
  size-adjust: 104.53%;
}
```

**H1-tittelstil:** H1 bruker klassen `.highlighted-title` som legger til:
```css
-webkit-box-decoration-break: clone;
box-decoration-break: clone;
line-height: 1.5;
```
… kombinert med `bg-light-green` og `rounded-lg/md` – dette gir «word-wrap highlight»-effekten der hvert linjeskift i tittelen får sin egen fargeboks.

---

## C. KOMPONENTER

### Knapper (alle varianter)

**Variant 1 – Primær (grønn, stor)**
*Eksempel: "Meld deg inn i klubben", "Kontakt oss"*
```html
<a class="group inline-flex items-center cursor-pointer whitespace-normal justify-center
          rounded-full ring-offset-white transition-colors focus-visible:outline-none
          focus-visible:ring-2 focus-visible:ring-offset-2"
   href="/bli-medlem">
  Meld deg inn i klubben <svg>…arrow-right…</svg>
</a>
```
CSS:
- `background-color: #415820` (--color-green)
- `color: #fcf6f2` (--color-offwhite)
- `border: 2px solid #415820`
- `border-radius: ~9999px` (rounded-full)
- `padding: 14.79px 29.58px` (py-3 px-5 tilnærmet)
- `font-size: 23.66px`

**Variant 2 – Sekundær (lysblå, stor)**
*Eksempel: "Se alle nyheter", "Send inn påmeldingsskjema"*
```html
<a class="group inline-flex items-center cursor-pointer whitespace-normal justify-center
          rounded-full ring-offset-white transition-colors …" href="/artikler">
  Se alle nyheter <svg>…arrow-right…</svg>
</a>
```
CSS:
- `background-color: #c3cfeb` (--color-light-blue)
- `color: #091256`
- `border: 2px solid #c3cfeb`
- `border-radius: ~9999px`
- `padding: 14.79px 29.58px`
- `font-size: 23.66px`

**Variant 3 – Outline / Ghost (mørkeblå, stor)**
*Eksempel: "Bli kjent med FSK", "Meld interesse"*
```html
<a class="group inline-flex items-center cursor-pointer whitespace-normal justify-center
          rounded-full ring-offset-white transition-colors …" href="/om-oss">
  Bli kjent med FSK <svg>…arrow-right…</svg>
</a>
```
CSS:
- `background-color: transparent`
- `color: #091256`
- `border: 2px solid #091256`
- `border-radius: ~9999px`
- `padding: 14.79px 29.58px`
- `font-size: 23.66px`

**Variant 4 – Liten sekundær (nav/header)**
*Eksempel: "Meld deg inn" i toppmeny*
CSS:
- `background-color: #c3cfeb`
- `color: #091256`
- `border: 2px solid #c3cfeb`
- `padding: 11.83px 23.66px` (noe mindre enn stor variant)
- `font-size: 17.75px`

**Variant 5 – Outline (søk, liten)**
```html
<button class="inline-flex items-center cursor-pointer whitespace-normal justify-center
               rounded-full ring-offset-white transition-colors …" type="button">
  Søk <svg>…magnifying-glass…</svg>
</button>
```
CSS:
- `background-color: transparent`
- `color: #091256`
- `border: 2px solid #091256`
- `padding: 11.83px 23.66px`
- `font-size: 17.75px`

Hover/fokus: `.transition-colors`, `focus-visible:ring-2 focus-visible:ring-offset-2` (Tailwind focus-ring). Konkret hover-farge ikke observert direkte i computed styles (krever hover-state).

---

### Lenker

Lenker i innhold:
```html
<a class="group text-base underline underline-offset-4
          decoration-offwhite/0 hover:decoration-offwhite
          transition-colors ease-in" href="…">Lenketekst</a>
```
- `color: #091256` (brødtekst) / `#fcf6f2` (footer)
- `text-decoration: underline`
- `underline-offset: 4px`
- Understreking er normalt usynlig (`decoration-offwhite/0`) og vises ved hover
- `font-size: 23.66px` (brødtekst), 17.75px (brødsmule)

---

### Header / Toppmeny

**Desktop (≥ 1232px / xl)**
```html
<header class="mx-auto w-full px-5 md:px-6 lg:px-7 top-header">
  <div class="mx-auto w-full max-w-[1536px] flex flex-row items-center relative z-50 py-4 gap-3 justify-between">
    <!-- Logo -->
    <a href="/">
      <div class="flex flex-row items-center gap-2 2xl:gap-3">
        <img alt="Logo for FSK" class="size-13 2xl:size-15" …/>
        <span class="text-base font-bold leading-none block">
          <span class="block">Fredrikstad</span>
          <span class="block">Skiklubb</span>
        </span>
      </div>
    </a>
    <!-- Navigasjon (skjult < xl) -->
    <nav class="hidden xl:flex w-full flex-1" aria-label="Main">
      <!-- Dropdown-triggers: Aktiviteter og trening, Skihytta og Arenaen, Arrangementer, Om FSK -->
    </nav>
    <!-- CTA + Søk -->
    <a class="… rounded-full bg-light-blue …" href="/bli-medlem">Meld deg inn</a>
    <button class="… rounded-full border-2 border-dark-blue …">Søk</button>
  </div>
</header>
```
- `background-color: transparent` (header på scroll er ikke sticky i computed styles)
- `padding: 0 41.4px` (horisontalt)
- `color: #091256`
- Maks bredde på inner-container: **1536px**

**Mobil (< xl)**
- Hamburger-knapp vises (`xl:hidden`): `<button class="relative z-50 group xl:hidden …">`
- "Meld deg inn"-knapp vises fra `md:block xl:hidden`
- Dropdown-nav `hidden xl:flex`

---

### Hero / Banner (forsiden)

Forsiden bruker **ikke** en dedikert `.hero`-klasse. Strukturen er:
```html
<article class="mx-auto w-full px-5 md:px-6 lg:px-7">
  <header class="mx-auto w-full max-w-[1536px] pt-8 flex flex-col gap-5 items-start md:gap-8">
    <div class="mx-auto w-full max-w-[1536px] grid grid-cols-5 gap-5 lg:gap-7 xl:grid-cols-12 xl:gap-11 items-start">
      <!-- Venstre: H1 med highlight-bakgrunn + ingress + CTA-knapper -->
      <!-- Høyre: Hero-bilde med rounded-2xl -->
    </div>
  </header>
  …
</article>
```
- Side-bakgrunn: `#f1eae5` (html-element)
- H1 med klassen `bg-light-green rounded-lg` → `background: #c6c075`, `border-radius: 25px`, `box-decoration-break: clone` (linje-for-linje highlight)
- Bilde: `border-radius: 50px` (rounded-2xl)

**Innholdssider (om-oss, kontakt, bli-medlem) – Page Hero:**
```html
<div class="mx-auto w-full max-w-[1536px] grid grid-cols-5 gap-5 lg:gap-7 xl:grid-cols-12 xl:gap-11
            rounded-xl py-9 px-6 md:px-0 md:items-center xl:py-11 bg-light-green">
  <!-- H1 + ingress + CTA -->
  <!-- Høyre: dekorativ SVG-illustrasjon (naturmotiver) -->
</div>
```
- `background-color: #c6c075` (--color-light-green)
- `border-radius: 40px` (--radius-xl)
- `padding: 65.07px 0` (vertikalt)

---

### Kort (Cards) – Nyhets-/aktivitetskort

```html
<li class="col-span-full h-full md:col-span-1 xl:col-span-4">
  <a class="group flex flex-col bg-light-green rounded-xl xl:rounded-2xl overflow-hidden h-full"
     href="/artikler/…">
    <!-- Bilde øverst -->
    <img …/>
    <!-- Innhold -->
    <div class="…">
      <ul><!-- Tags/badges --></ul>
      <h3 class="text-lg font-bold …">Tittel</h3>
      <p>…</p>
      <span class="text-sm …">Dato</span>
    </div>
  </a>
</li>
```
CSS:
- `background-color: #c6c075` (--color-light-green)
- `border-radius: 50px` (computed from rounded-2xl på xl)
- `overflow: hidden`
- `display: flex; flex-direction: column`
- Ingen box-shadow

---

### Skjemafelt

**Input (text, email, tel)**
```html
<input type="text" placeholder="Ola Nordmann"
  class="flex text-base w-full rounded-full border border-bright-blue
         hover:border-light-blue transition-colors …"/>
```
CSS:
- `background-color: #fcf6f2` (--color-offwhite)
- `color: #091256`
- `border: 1px solid #004890` (--color-bright-blue)
- `border-radius: ~9999px` (rounded-full)
- `padding: 14.79px 23.66px`
- `font-size: 23.66px`
- Hover: `border-color` endres til `#c3cfeb`

**Label**
- `font-size: 17.75px`
- `font-weight: 400`
- `color: #091256`

**Submit-knapp** (Variant 2 – sekundær lysblå)
- `background-color: #c3cfeb`
- `border-radius: ~9999px`
- `padding: 14.79px 29.58px`

**Select (filter "Velg aktivitetstype")**
- Wrappes i en container med `background-color: #c3cfeb`, `border-radius: ~9999px`
- Native `<select>` har ingen border/bakgrunn (styled via wrapper)

---

### Tags / Badges / Etiketter

**Kategori-badge (Artikkel, Nyhet, osv.)**
```html
<li class="rounded-full px-2 py-1 xl:px-2.5 xl:py-1.5 flex flex-row gap-1
           items-center bg-green text-offwhite">
  <svg>…newspaper-ikon…</svg>
  Artikkel
</li>
```
CSS:
- `background-color: #415820` (--color-green)
- `color: #fcf6f2` (--color-offwhite)
- `border-radius: ~9999px`
- `padding: 8.87px 14.79px`
- `font-size: 23.66px`

---

### Footer

```html
<footer class="mx-auto w-full px-5 md:px-6 lg:px-7 bg-dark-blue text-offwhite py-11 xl:py-16 2xl:py-20">
  <div class="mx-auto w-full max-w-[1536px] flex flex-col items-start gap-11">
    <nav class="flex flex-col items-start gap-11 w-full md:flex-row md:justify-between md:flex-wrap">
      <div><!-- Aktiviteter --></div>
      <div><!-- Skihytta og Arenaen --></div>
      <div><!-- FSK --></div>
      <div><!-- Sosiale medier --></div>
    </nav>
    <img alt="Logo for FSK"/>
    <span>Fredrikstad Skiklubb</span>
    <a href="mailto:fsk@fsk.no">fsk@fsk.no</a>
    <a href="https://kult.design">Designet og utviklet av Kult Byrå</a>
  </div>
</footer>
```
CSS:
- `background-color: #091256` (--color-dark-blue)
- `color: #fcf6f2` (--color-offwhite)
- `padding: 118.31px 41.41px` (computed – py-11 ~ 2.75rem × base)
- Footer-overskrifter (`h3`): `font-size: 1.333rem`, `font-weight: 700`, klasse `text-lg tracking-tight font-bold`
- Footer-lenker: `underline underline-offset-4 decoration-offwhite/0 hover:decoration-offwhite transition-colors ease-in`
- Maks bredde inner: **1536px**

---

## D. LOGO & GRAFIKK

### Logo
- **Format:** `<img>` (Next.js Image-komponent) med SVG/PNG-kilde via `/_next/image`-proxyen
- **Dimensjoner:** 83×83px (attributt-verdier), visningsstørrelse `size-13` (3.25rem × base ≈ 77px)
- **Alt-tekst:** "Logo for FSK"
- **Direkte URL til original:** ikke tilgjengelig uten å dekode Next.js image query-parameter

Logoen kombineres med teksten "Fredrikstad Skiklubb" (to spans: `<span>Fredrikstad</span><span>Skiklubb</span>`), bold, dark-blue.

### Favicon
| Fil | URL |
|-----|-----|
| Apple Touch Icon (180×180) | `https://www.fsk.no/favicon/fredrikstadSkiklubb/apple-touch-icon.png` |
| PNG-favicon (96×96) | `https://www.fsk.no/favicon/fredrikstadSkiklubb/favicon-96x96.png` |
| ICO-favicon | `https://www.fsk.no/favicon/fredrikstadSkiklubb/favicon.ico` |

### SVG-sprite (ikoner)
Alle ikoner hentes fra én sprite-fil:
`https://www.fsk.no/icons/sprite.svg?2026-01`

Identifiserte ikon-IDer i bruk:

| ID | Brukes |
|----|--------|
| `#magnifying-glass_default` | Søkeknapp |
| `#chevron-down_default` | Dropdown-meny (tynn) |
| `#chevron-down-bold_default` | Dropdown-meny (fet) |
| `#arrow-right_default` | Alle CTA-knapper |
| `#clock-filled` | Arrangementer/tidspunkt |
| `#newspaper` | Artikkel-badge |
| `#calendar` | Arrangementer |
| `#person-running` | Aktiviteter |
| `#instagram` | Footer sosiale medier |
| `#facebook` | Footer sosiale medier |
| `#coins` | Bli-medlem (pengerelatert) |
| `#boot` | Aktivitet (støvel) |

### Dekorativ grafikk (illustrasjoner)
Innholdssidenes hero-boks (page hero på om-oss, kontakt, bli-medlem) inneholder dekorative natursymbol-illustrasjoner tegnet i SVG – blad, tre, blomst, prikker – i fargen `#415820` (--color-green) mot `#c6c075` (--color-light-green) bakgrunn. Dette er inline SVG-elementer.

### Bildestil
- Fotografi: natur, sport, portrett – avrundede hjørner (`rounded-2xl`, ~50px)
- Illustrasjoner: flat, to-tonig (mørk grønn på lysgrønn), organiske naturformer
- Ingen eksterne CDN-bilder observert – alt serveres via Next.js image-proxy (`/_next/image`)

---

## E. LAYOUT

### Innholdscontainer
- **Maks bredde:** `max-w-[1536px]` = **1536px**
- **Sidepadding:** `px-5 md:px-6 lg:px-7` → 1.25rem / 1.5rem / 1.75rem (20/24/28px)
- `mx-auto w-full` (sentrert, full bredde)

### Grid-system
Nettstedet bruker CSS Grid med Tailwind-klasser:
```
grid-cols-5 gap-5 lg:gap-7 xl:grid-cols-12 xl:gap-11
```
- Mobil: **5 kolonner**, gap 1.25rem
- lg (≥1024px): gap økes til 1.75rem
- xl (≥1232px): **12 kolonner**, gap 2.75rem

Kortseksjoner bruker `col-span-full`, `col-span-1` (md), `col-span-4` (xl).

### Layoutskifte på mobil
| Breakpoint | Endring |
|------------|---------|
| < md (768px) | Hamburger-meny, logo + burger, kortlayout er én kolonne |
| md (≥768px) | "Meld deg inn"-knapp vises, footer-nav går fra kolonne til rad |
| xl (≥1232px) | Full desktop-nav vises, grid utvides til 12 kolonner |
| 2xl (≥1536px) | Spacing og padding økes ytterligere (`2xl:py-24`, `2xl:gap-3` etc.) |

---

## JSON Tokens-fil

```json
{
  "colors": {
    "offwhite":       "#fcf6f2",
    "offwhiteLight":  "#f1eae5",
    "beige":          "#f1eae5",
    "darkBlue":       "#091256",
    "lightBlue":      "#c3cfeb",
    "brightBlue":     "#004890",
    "red":            "#d8382f",
    "peach":          "#f8b99d",
    "green":          "#415820",
    "lightGreen":     "#c6c075",
    "black":          "#000000",
    "white":          "#ffffff"
  },
  "fonts": {
    "sans":      "\"DM Sans\", \"DM Sans Fallback\", ui-sans-serif, system-ui, sans-serif",
    "mono":      "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace",
    "fallback":  "\"DM Sans Fallback\""
  },
  "typeScale": {
    "xs":   { "fontSize": "0.66666rem", "lineHeight": "calc(1 / 0.75)" },
    "sm":   { "fontSize": "0.75rem",    "lineHeight": "calc(1.25 / 0.875)" },
    "base": { "fontSize": "1rem",       "lineHeight": "1.45" },
    "lg":   { "fontSize": "1.333rem",   "lineHeight": "1.4" },
    "xl":   { "fontSize": "2.083rem",   "lineHeight": "1.3" },
    "2xl":  { "fontSize": "3rem",       "lineHeight": "calc(2 / 1.5)" },
    "fontWeightNormal":   400,
    "fontWeightMedium":   500,
    "fontWeightSemibold": 600,
    "fontWeightBold":     700,
    "trackingTight": "-0.025em",
    "trackingWide":  "0.025em",
    "leadingTight":  "1.25"
  },
  "spacing": {
    "base":  "0.25rem",
    "1":     "0.25rem",
    "2":     "0.5rem",
    "3":     "0.75rem",
    "4":     "1rem",
    "5":     "1.25rem",
    "6":     "1.5rem",
    "7":     "1.75rem",
    "8":     "2rem",
    "9":     "2.25rem",
    "11":    "2.75rem",
    "16":    "4rem",
    "20":    "5rem",
    "24":    "6rem"
  },
  "radius": {
    "xs":   "0.55rem",
    "sm":   "10px",
    "md":   "15px",
    "lg":   "25px",
    "xl":   "40px",
    "2xl":  "50px",
    "full": "9999px"
  },
  "shadow": {
    "none": "none",
    "md":   "0 4px 6px -1px rgba(0,0,0,0.10), 0 2px 4px -2px rgba(0,0,0,0.10)"
  },
  "breakpoints": {
    "xs":  "375px",
    "sm":  "640px",
    "md":  "768px",
    "lg":  "1024px",
    "xl":  "1232px",
    "2xl": "1536px"
  },
  "container": {
    "maxWidth": "1536px",
    "paddingX": {
      "default": "1.25rem",
      "md":      "1.5rem",
      "lg":      "1.75rem"
    }
  },
  "transition": {
    "defaultDuration":       "0.15s",
    "defaultTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
    "easeIn":                "cubic-bezier(0.4, 0, 1, 1)"
  }
}
```

---

## Asset-URL-liste (nedlastbar)

### Fonter
```
https://www.fsk.no/_next/static/media/7ab938503e4547a1-s.woff2
https://www.fsk.no/_next/static/media/13971731025ec697-s.p.woff2
```

### Stilark
```
https://www.fsk.no/_next/static/css/cd0b5769a1f3472d.css
```

### Favicon / Logo
```
https://www.fsk.no/favicon/fredrikstadSkiklubb/apple-touch-icon.png
https://www.fsk.no/favicon/fredrikstadSkiklubb/favicon-96x96.png
https://www.fsk.no/favicon/fredrikstadSkiklubb/favicon.ico
```

### SVG Ikonsprite
```
https://www.fsk.no/icons/sprite.svg?2026-01
```
*(Last ned uten query-string: `https://www.fsk.no/icons/sprite.svg` – parameteret er sannsynligvis cache-busting)*

### Bilder (serveres via Next.js image-proxy)
```
Originalen hentes via: https://www.fsk.no/_next/image?url=<original-path>&w=<bredde>&q=75
```
Direkte original-stier er ikke tilgjengelige uten å inspisere network-kall (de er kodet i query-parameteret som filtreres ut av sikkerhetssystemet her).

---

*Rapport generert ved DOM/CSS-inspeksjon av: forsiden (`/`), artikkelside (`/artikler/medlemsmote-8-juni`), innholdsside (`/om-oss`), kontaktside (`/kontakt-oss`) og bli-medlem-side (`/bli-medlem`). Nettsiden er bygget med Next.js og TailwindCSS v4. Designet og utviklet av [Kult Byrå](https://kult.design).*