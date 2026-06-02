# FSK Design-research

Slipp eksporterte designfiler her, så plukker Claude dem opp og bruker dem til å fylle
inn ekte FSK-verdier i designsystemet.

## Forventet innhold

```
research/
├── README.md               ← denne filen
│
├── fsk-design_fsk_no.zip   ← pakk gjerne ut, eller la den ligge (Claude pakker ut)
├── design-tokens.css       ← :root CSS-variabler fra fsk.no
├── typografi.json          ← font/størrelse per HTML-element
├── farger.json             ← alle observerte farger (rgb-strenger)
├── komponenter.html        ← HTML-utdrag: header, hero, kort, footer m.m.
├── stilark.css             ← alle lesbare CSS-regler fra fsk.no
├── assets.json             ← URL-er til logo, fonter, bilder, favicon
│
├── logo/                   ← logo-filer fra fsk.no / Google Drive
│   ├── fsk-logo.svg
│   ├── fsk-logo-negativ.svg
│   └── ...
│
├── fonter/                 ← .woff2-fontfiler (last ned fra URL-ene i assets.json)
│   └── ...
│
├── grafikk/                ← grafiske elementer fra Google Drive
│   └── ...
│
└── ppt-mal/                ← eksportert PPT-mal (bilder eller PDF)
    └── ...
```

## Slik henter du filene

### Design-tokens, typografi, farger, stilark, komponent-HTML

Kjør console-scriptet fra prosjektets README i Chrome (F12 → Console) mens du
står på fsk.no. Du får en `.zip`-fil automatisk. Pakk ut og legg filene her.

### Logo og grafikk

1. Åpne `assets.json` og finn alle URL-er under `logoOgBilder` og `fonter`.
2. Last ned relevante SVG/PNG-logoer til `research/logo/`.
3. Last ned `.woff2`-fontfiler til `research/fonter/`.
4. Last ned de grafiske elementene fra Google Drive til `research/grafikk/`.

### PPT-malen

Eksporter Google Slides-malen som PDF eller bilder og legg i `research/ppt-mal/`.

## Neste steg etter at du har lagt inn filene

Si til Claude: *«Jeg har lagt inn research-filene, oppdater designsystemet.»*

Claude vil da:
1. Lese `design-tokens.css` + `farger.json` + `typografi.json`
2. Bytte ut PLASSHOLDER-verdiene i `css/tokens.css` med ekte FSK-verdier
3. Kopiere fontfiler til `assets/fonts/` og aktivere `@font-face`
4. Kopiere logoer til `assets/logo/` og koble dem inn i sidene
5. Oppdatere komponent-HTML i `pages/` basert på `komponenter.html`
