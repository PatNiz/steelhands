# SteelHands

Produkcyjna strona marki **SteelHands** — projektowanie, produkcja i dostawa elementów metalowych.

Stack: Next.js (App Router), TypeScript, Tailwind CSS v4, shadcn/ui, Motion.

## Uruchomienie lokalne

```bash
npm install
npm run dev
```

Aplikacja startuje na [http://127.0.0.1:43127](http://127.0.0.1:43127).

## Skrypty

| Komenda | Opis |
| --- | --- |
| `npm run dev` | Serwer deweloperski (Turbopack, port 43127) |
| `npm run dev:webpack` | Dev z webpack + PostCSS (port 43127) |
| `npm run build` | Build produkcyjny |
| `npm run start` | Serwer produkcyjny (port 43127) |
| `npm run lint` | ESLint |

## Struktura tras

- `/` — strona główna
- `/produkty` — gotowe produkty / kategorie
- `/produkcja-na-zamowienie` — produkcja custom
- `/realizacje` — portfolio
- `/realizacje/[slug]` — szczegóły realizacji
- `/dla-firm` — oferta B2B + FAQ
- `/o-nas` — o marce
- `/kontakt` — kontakt
- `/zamow-wycenie` — formularz wyceny (CTA)

## Design system

Tokeny w `src/app/globals.css`: graphite / charcoal / mist / brushed steel + kontrolowany accent „spark”. Typografia: Syne (nagłówki), Manrope (treść), IBM Plex Mono (etykiety techniczne).

## Uwagi

- Formularz wyceny działa w trybie lokalnego mocka (gotowy UI pod integrację API).
- Brief źródłowy był ucięty po sekcji 04 homepage — kolejne sekcje/strony mają czyste punkty rozszerzenia w kodzie i copy.
- Bez fikcyjnych statystyk, klientów ani opinii.
