# Fredrikstad Skiklubb – Designsystem

Felles designsystem for FSK: logo, farger, typografi, komponenter og maler for trykksaker.
Bygget som et statisk HTML/CSS-nettsted og publisert med **GitHub Pages**.

---

## Prosjektstatus

| Steg | Status | Beskrivelse |
| --- | --- | --- |
| 1. Stillas | ✅ Ferdig | Mappestruktur, HTML-sider, CSS-tokens, komponenter, maler |
| 2. Design-research | ⏳ Venter | Hente farger, fonter, logo og HTML fra fsk.no |
| 3. Fylle inn ekte brand | ⏳ Venter | Erstatte plassholdere med reelle FSK-verdier |
| 4. Logo & grafikk | ⏳ Venter | Legge inn SVG-logo og grafiske elementer fra Drive |
| 5. Fonter | ⏳ Venter | Aktivere webfonter fra fsk.no |
| 6. Publisere | ⏳ Venter | Merge til main og aktivere GitHub Pages |

Søk etter `TODO` i kodebasen for å finne alle steder som venter på ekte FSK-verdier.

---

## Bakgrunn og mål

Fredrikstad Skiklubb har engasjert et designbyrå som har laget **fsk.no**. Målet er å
ta utgangspunkt i det visuelle uttrykket derfra og formalisere det som et gjenbrukbart
**designsystem** — én kilde til sannhet for alle som lager materiell for FSK:

- **Trykksaker** (plakater, flyere, program)
- **Websider** (nye undersider, kampanjesider)
- **Sosiale medier** (grafisk profil til innlegg)
- **Interne dokumenter** (presentasjoner, rapporter)

Designsystemet publiseres som **GitHub Pages** og kan vises til designere, frivillige og
samarbeidspartnere som en autoritativ referanse.

### Eksisterende kildemateriale

| Kilde | Innhold | Tilgang |
| --- | --- | --- |
| fsk.no | Designbyråets implementasjon – farger, fonter, komponenter | Nettleser (bruk console-script) |
| Google Slides PPT-mal | Maler for presentasjoner med FSK-profil | Google Drive (eksporter manuelt) |
| Google Drive (grafiske elementer) | Logo, ikoner, illustrasjoner | Google Drive (last ned manuelt) |

---

## Repostruktur

```
fskdesign/
│
├── index.html                          # Forside med oversikt og navigasjon
│
├── pages/
│   ├── logo.html                       # Logovarianter, frisone, do/don't
│   ├── farger-typografi.html           # Fargepalett (klikk for å kopiere) + typeskala
│   ├── komponenter.html                # Knapper, kort, badges, skjema + kodesnutter
│   └── trykksaker.html                 # Oversikt over trykksakmaler
│
├── css/
│   ├── tokens.css                      # ⭐ Design tokens (farger, fonter, spacing m.m.)
│   ├── base.css                        # Reset, grunntypografi, header/footer/layout
│   └── components.css                  # Gjenbrukbare komponentstiler
│
├── js/
│   └── copy.js                         # Klikk-for-å-kopiere hex på fargekortene
│
├── assets/
│   ├── logo/                           # ← legg SVG/PNG-logo her
│   ├── fonts/                          # ← legg .woff2-fontfiler her
│   ├── graphics/                       # ← legg grafiske elementer fra Drive her
│   └── templates/
│       ├── plakat-a4.html              # Print-klar A4-plakat
│       ├── flyer-a5.html               # Print-klar A5-flyer
│       └── sosiale-medier-1080.html    # 1080×1080 til Instagram/Facebook
│
├── research/                           # ← SLIPP EKSPORTERTE FILER HER
│   └── README.md                       # Instruksjoner for hva som skal inn
│
├── .github/workflows/
│   └── deploy-pages.yml                # Automatisk deploy til GitHub Pages
│
├── .nojekyll                           # Hindrer Jekyll-prosessering
└── README.md                           # ← denne filen
```

---

## Arkitektur: design tokens

Alt av farger, fonter og avstander er definert som **CSS-variabler** i `css/tokens.css`.
Endrer du én verdi der, slår den gjennom overalt — inkludert trykksakmalene.

```
tokens.css
  │
  ├── Farger:     --color-primary, --color-secondary, --color-accent, nøytraler
  ├── Typografi:  --font-sans, --font-head, --fs-100 → --fs-800 (typeskala)
  ├── Spacing:    --space-1 → --space-8 (8px-skala)
  ├── Form:       --radius-sm/md/lg/pill, --shadow-sm/md/lg
  └── @font-face: (kommentert ut — aktiveres når fontfiler er på plass)
```

---

## Slik henter du designdata fra fsk.no

### Steg 1 – Console-script (nedlasting av .zip)

Åpne fsk.no i Chrome → `F12` → **Console** → lim inn scriptet under → Enter.
Du får automatisk en `.zip` med:

- `design-tokens.css` — alle `:root` CSS-variabler
- `typografi.json` — font/størrelse per HTML-element
- `farger.json` — alle observerte farger
- `komponenter.html` — HTML-utdrag for header, hero, kort, footer m.m.
- `stilark.css` — alle CSS-regler fra siden
- `assets.json` — URL-er til logo, bilder og fonter

```js
(async () => {
  const crcT=(()=>{let t=[];for(let n=0;n<256;n++){let c=n;for(let k=0;k<8;k++)c=c&1?0xEDB88320^(c>>>1):c>>>1;t[n]=c>>>0;}return t;})();
  const crc32=b=>{let c=0xFFFFFFFF;for(let i=0;i<b.length;i++)c=crcT[(c^b[i])&0xFF]^(c>>>8);return(c^0xFFFFFFFF)>>>0;};
  const enc=new TextEncoder();
  function zip(files){const parts=[],central=[];let off=0;const put=a=>{parts.push(a);off+=a.length;};for(const f of files){const name=enc.encode(f.name);const data=typeof f.data==="string"?enc.encode(f.data):f.data;const crc=crc32(data);const lh=new Uint8Array(30+name.length),d=new DataView(lh.buffer);d.setUint32(0,0x04034b50,true);d.setUint16(4,20,true);d.setUint16(10,0,true);d.setUint16(12,0x21,true);d.setUint32(14,crc,true);d.setUint32(18,data.length,true);d.setUint32(22,data.length,true);d.setUint16(26,name.length,true);lh.set(name,30);const lo=off;put(lh);put(data);const ch=new Uint8Array(46+name.length),c2=new DataView(ch.buffer);c2.setUint32(0,0x02014b50,true);c2.setUint16(4,20,true);c2.setUint16(6,20,true);c2.setUint16(12,0,true);c2.setUint16(14,0x21,true);c2.setUint32(16,crc,true);c2.setUint32(20,data.length,true);c2.setUint32(24,data.length,true);c2.setUint16(28,name.length,true);c2.setUint32(42,lo,true);ch.set(name,46);central.push(ch);}let cdSize=0;const cdOff=off;for(const c of central){put(c);cdSize+=c.length;}const e=new Uint8Array(22),ev=new DataView(e.buffer);ev.setUint32(0,0x06054b50,true);ev.setUint16(8,files.length,true);ev.setUint16(10,files.length,true);ev.setUint32(12,cdSize,true);ev.setUint32(16,cdOff,true);put(e);const total=parts.reduce((a,c)=>a+c.length,0);const out=new Uint8Array(total);let p=0;for(const c of parts){out.set(c,p);p+=c.length;}return out;}
  const rs=getComputedStyle(document.documentElement);
  const rootVars=(()=>{let v=[];for(const s of document.styleSheets){try{for(const r of s.cssRules){if(r.selectorText===":root"){(r.cssText.match(/--[\w-]+:\s*[^;]+/g)||[]).forEach(x=>v.push(x.trim()));}}}catch(e){}}return[...new Set(v)];})();
  const typ={};["h1","h2","h3","h4","h5","p","a","button","small"].forEach(sel=>{const el=document.querySelector(sel);if(!el)return;const c=getComputedStyle(el);typ[sel]={fontFamily:c.fontFamily,fontSize:c.fontSize,lineHeight:c.lineHeight,fontWeight:c.fontWeight,letterSpacing:c.letterSpacing,textTransform:c.textTransform,color:c.color};});
  const colorSet=new Set();document.querySelectorAll("*").forEach(el=>{const c=getComputedStyle(el);[c.color,c.backgroundColor,c.borderColor].forEach(v=>{if(v&&v!=="rgba(0, 0, 0, 0)"&&v!=="rgb(0, 0, 0)")colorSet.add(v);});});
  const grab=sel=>{const el=document.querySelector(sel);return el?el.outerHTML.slice(0,4000):"<!-- ikke funnet: "+sel+" -->";};
  const components=["header","nav",".hero,.banner,[class*=hero]","button,.btn,a.button","form",".card,[class*=card]","footer"].map(s=>`/* ===== ${s} ===== */\n`+grab(s)).join("\n\n");
  let cssDump="";for(const s of document.styleSheets){try{for(const r of s.cssRules)cssDump+=r.cssText+"\n";}catch(e){cssDump+=`/* ikke lesbar: ${s.href} */\n`;}}
  const assets={logoOgBilder:[...document.images].map(i=>i.currentSrc||i.src).filter(Boolean),svgInline:[...document.querySelectorAll("svg")].length,bakgrunnsbilder:[...new Set([...document.querySelectorAll("*")].map(el=>getComputedStyle(el).backgroundImage).filter(v=>v&&v!=="none"))].slice(0,100),fonter:performance.getEntriesByType("resource").map(r=>r.name).filter(n=>/\.(woff2?|ttf|otf|eot)(\?|$)/i.test(n)),favicon:[...document.querySelectorAll("link[rel*=icon]")].map(l=>l.href)};
  const slug=(location.host+location.pathname).replace(/[^\w]+/g,"_").replace(/^_+|_+$/g,"")||"side";
  const files=[{name:`README.txt`,data:`FSK design-eksport\nKilde: ${location.href}\nDato: ${new Date().toISOString()}\n`},{name:`design-tokens.css`,data:`:root {\n  ${rootVars.join(";\n  ")}${rootVars.length?";":""}\n}\n`},{name:`typografi.json`,data:JSON.stringify(typ,null,2)},{name:`farger.json`,data:JSON.stringify([...colorSet],null,2)},{name:`komponenter.html`,data:components},{name:`stilark.css`,data:cssDump},{name:`assets.json`,data:JSON.stringify(assets,null,2)}];
  const blob=new Blob([zip(files)],{type:"application/zip"});const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=`fsk-design_${slug}.zip`;a.click();
  console.log("✅ Lastet ned fsk-design_"+slug+".zip");
})();
```

Pakk ut zip-en og legg filene i `research/`.

### Steg 2 – Prompt til Claude for Chrome (dypere analyse)

Alternativt / i tillegg: åpne fsk.no med Claude for Chrome-utvidelsen og bruk
denne prompten for en narrativ gjennomgang med JSON-tokens på slutten:

```
Du er en design-system-analytiker. Gå gjennom denne siden og rapporter:

A. Alle CSS-variabler på :root (eksakt navn og verdi)
B. Fargepalett: hex, rolle (primær/sekundær/aksent/nøytral), brukseksempel
C. Typografi: font-family, og for h1–h4 / ingress / brødtekst / caption / knapper:
   font-size (px), line-height, font-weight, letter-spacing
D. Alle @font-face-deklarasjoner og font-fil-URL-er (.woff2/.woff)
E. Komponenter (beskriv + gi HTML-utdrag): header/nav, hero, kort/cards,
   knapper (alle varianter), skjemafelt, tags/badges, footer
F. Layout: maks containerbredde, grid, breakpoints
G. Logo- og asset-URL-er (SVG, PNG, favicon, fontfiler)

Helt til slutt: én JSON-blokk "tokens" med farger, fonter, typeskala, spacing,
radius og shadow – klar til CSS custom properties.
```

---

## Fylle inn ekte FSK-verdier (etter research)

Når `research/`-mappen har innhold, si til Claude:
**«Jeg har lagt inn research-filene, oppdater designsystemet.»**

Claude gjør da:
1. Leser `design-tokens.css`, `farger.json`, `typografi.json`
2. Erstatter PLASSHOLDER-verdier i `css/tokens.css` med ekte FSK-farger og fonter
3. Kopierer fontfiler til `assets/fonts/` og aktiverer `@font-face`
4. Kopierer logoer til `assets/logo/` og kobler inn i `pages/logo.html`
5. Oppdaterer komponent-eksemplene i `pages/` basert på `komponenter.html`

---

## Kjøre lokalt

```bash
# Python (ingen avhengigheter)
python3 -m http.server 8000
# Åpne http://localhost:8000
```

---

## Publisere på GitHub Pages

1. Merge branchen `claude/fsk-design-system-c2JCh` til `main` via pull request
2. Gå til **Settings → Pages → Build and deployment → Source: GitHub Actions**
3. Workflowen `.github/workflows/deploy-pages.yml` publiserer automatisk ved push til `main`
4. Nettstedet blir tilgjengelig på `https://brage.github.io/fskdesign/`

`.nojekyll` i rot-mappen sørger for at GitHub serverer ren HTML/CSS uten Jekyll.

---

## Bidra / vedlikeholde

- **Endre en farge eller font:** oppdater `css/tokens.css` — slår gjennom overalt
- **Legge til en komponent:** legg stilen i `css/components.css` og eksemplet i `pages/komponenter.html`
- **Ny trykksak-mal:** lag en ny HTML-fil i `assets/templates/` og lenk fra `pages/trykksaker.html`
- **Oppdatere logo:** bytt filene i `assets/logo/` — brukes automatisk av alle sider og maler
