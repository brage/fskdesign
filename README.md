# Fredrikstad Skiklubb – Designsystem

Felles designsystem for FSK: logo, farger, typografi, komponenter og maler for trykksaker.
Bygget som et statisk HTML/CSS-nettsted og publisert med **GitHub Pages**.

## Innhold

| Side | Fil |
| --- | --- |
| Forside | `index.html` |
| Logo & bruksregler | `pages/logo.html` |
| Farger & typografi | `pages/farger-typografi.html` |
| Komponenter | `pages/komponenter.html` |
| Maler for trykksaker | `pages/trykksaker.html` |

Trykksak-malene ligger i `assets/templates/` (plakat A4, flyer A5, sosiale medier 1080×1080).

## Slik fungerer det

Alt av farger, fonter og avstander er definert som **design tokens** (CSS-variabler) i
[`css/tokens.css`](css/tokens.css). Endrer du en verdi der, slår den gjennom på hele
systemet – også i trykksak-malene.

- `css/tokens.css` – farger, typografi, spacing (design tokens)
- `css/base.css` – reset, grunntypografi, header/footer/layout
- `css/components.css` – knapper, kort, badges, skjema m.m.
- `js/copy.js` – klikk-for-å-kopiere hex på fargekortene

## Det som gjenstår å fylle inn (FSK-materiale)

Søk i koden etter `TODO` for å finne alle steder som venter på ekte verdier:

1. **Farger** – bytt PLASSHOLDER-hex i `css/tokens.css` til fargene fra fsk.no / PPT-malen.
2. **Fonter** – legg fontfiler i `assets/fonts/`, avkommenter `@font-face` i `css/tokens.css`
   og oppdater `--font-sans`.
3. **Logo** – legg logovarianter (helst SVG) i `assets/logo/` og koble dem inn i
   `pages/logo.html` og malene.
4. **Grafiske elementer** – legg filene fra Google Drive i `assets/graphics/`.

> Tips: Lim gjerne inn fargekoder og fontnavn som tekst i en issue/melding, så kan de settes
> rett inn i `tokens.css`.

## Kjøre lokalt

```bash
python3 -m http.server 8000
# åpne http://localhost:8000
```

## Publisere på GitHub Pages

1. Merge denne branchen til `main`.
2. I repoets innstillinger: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Workflowen [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml)
   bygger og publiserer automatisk ved push til `main`.
4. Nettstedet blir tilgjengelig på `https://<bruker>.github.io/fskdesign/`.

Fila `.nojekyll` sørger for at GitHub serverer den rå HTML/CSS-en uten Jekyll-prosessering.
