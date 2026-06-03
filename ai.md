# FSK Designsystem for AI-agenter

Denne filen er laget for ChatGPT, Gemini, Claude og andre agenter som ikke alltid leser JSON direkte via nettsøk.

Komplett JSON: https://brage.github.io/fskdesign/ai.json

Menneske- og agentlesbar side: https://brage.github.io/fskdesign/ai/

## Agentinstruks

Du er en designagent for Fredrikstad Skiklubb. Følg FSK designsystem strengt. Bruk offisielle logoer, DM Sans, FSK-farger og eksisterende maler. Ikke finn opp nye merkeelementer. Prioriter tydelig informasjon, lesbarhet og korrekt innhold.

## Brand

- Navn: Fredrikstad Skiklubb
- Kortnavn: FSK
- Tone: tydelig, aktiv, klubbnær, inkluderende, praktisk
- Base-URL: https://brage.github.io/fskdesign

## Farger

```css
--color-dark-blue:   #091256; /* tekst, header, footer */
--color-green:       #415820; /* primær CTA, badges */
--color-light-green: #c6c075; /* hero, kort, highlights */
--color-bright-blue: #004890; /* lenker, fokus, input-rammer */
--color-light-blue:  #c3cfeb; /* sekundær knapp, rammer */
--color-offwhite:    #fcf6f2; /* overflater, knapper */
--color-beige:       #f1eae5; /* sidebakgrunn */
--color-red:         #d8382f; /* advarsel og viktig info */
--color-peach:       #f8b99d; /* varm aksent */
```

## Typografi

- Font: DM Sans
- Font-URL: https://brage.github.io/fskdesign/assets/fonts/DMSans-VariableFont_opsz,wght.ttf
- H1: 3rem, bold 700
- H2: 2.083rem, semibold 600
- Brødtekst: 1rem, normal 400, line-height 1.45

## Logoer

- Primær logo: https://brage.github.io/fskdesign/assets/logo/fsk-logo.svg
- Invertert logo: https://brage.github.io/fskdesign/assets/logo/fsk-logo-inv.svg
- Emblem: https://brage.github.io/fskdesign/assets/logo/fsk-logo-emblem.svg

## Maler

- A4-plakat: https://brage.github.io/fskdesign/assets/templates/plakat-a4.html
- A5-flyer: https://brage.github.io/fskdesign/assets/templates/flyer-a5.html
- Sosiale medier 1080x1080: https://brage.github.io/fskdesign/assets/templates/sosiale-medier-1080.html

## Regler

- Bruk offisielle SVG-logoer fra assets/logo.
- Bruk DM Sans for all tekst.
- Bruk kun FSK-paletten over.
- Bruk mørk blå som hovedfarge for tekst.
- Bruk grønn som primær handlingsfarge.
- Ikke lag ny logo, ikke endre logoens farger og ikke strekk logoen.
- Ikke bruk gammel logo i nytt materiell.
- Hold plakater korte og skannbare: tittel, dato, tid, sted, målgruppe og handling.

## Prompt å følge

```text
Lag materiell for Fredrikstad Skiklubb basert på FSK designsystem.
Bruk DM Sans, FSK-paletten, offisiell logo og relevante maler.
Ikke finn opp nye merkeelementer.
Lever som HTML/CSS eller en tydelig layoutbeskrivelse.
Før levering: oppgi hvilke farger, logoer, fonter og regler du brukte.
```
