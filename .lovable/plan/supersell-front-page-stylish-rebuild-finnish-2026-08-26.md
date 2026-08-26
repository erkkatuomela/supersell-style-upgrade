# SuperSell front page — stylish rebuild (Finnish)

Build the SuperSell landing page at `/` with the existing brand palette kept, but a much more crafted, editorial-tech execution. Content is the Finnish copy from the current page.

## Design direction

- **Palette (kept from current site):** cream canvas `#F7F4EF`, ink `#141210`, signal orange `#E8541C`, muted stone `#EDE8E0`, subtle warm border `#DCD5CA`. Dark inverted band for the closing CTA (`#141210` + orange).
- **Typography:** Space Grotesk for headings (tight tracking, large display sizes), DM Sans for body. Monospaced-style uppercase micro-labels rendered in DM Sans with wide letterspacing for the eyebrow/step tags.
- **Layout:** stacked full-width bands, each band one idea, generous vertical rhythm, hairline dividers between bands, max-width 1200px content column.

Style upgrades over the original: oversized display type with an orange second line, pill eyebrow chips, numbered problem cards with hover lift, a vertical step rail with connected markers, an offset quote layout for testimonials, a feature grid with icon tiles and a warm-highlight hover, and an inverted final CTA band with a soft orange glow.

## Sections (top to bottom)

1. **Nav** — wordmark (SUPER in orange / SELL in ink), anchor links (Referenssit, Ominaisuudet, Hinnoittelu, Ota yhteyttä), FI chip, dark "Ilmainen kokeilu" button. Sticky with blur on scroll.
2. **Hero** — two chips, display headline "Enemmän / toimeksiantoja liideistä!", lead paragraph, two CTAs, plus a stylised product card on the right (call-routing visual: incoming lead → agents ringing → connected) instead of a video, so it renders well without media assets.
3. **Metrics strip** — JOPA 300 %, OPTIMOI, NAUTI in a divided three-column band on the stone background.
4. **Three reasons agents lose listings** — 01/02/03 numbered cards with headline + body.
5. **How it works** — four steps (VAIHE 01–04) on a vertical rail, alternating emphasis.
6. **Testimonials** — two quote blocks (ROOF / anonymous brokerage) with attribution and a scale detail (121 välittäjää). Avatar placeholders as initials in orange-tinted circles (no external images).
7. **Features** — six-card grid: liidien reititys, automaattiset uudelleensoitot, tekstiviestit, ajastukset, puhelun tulos, analytiikka.
8. **Closing CTA** — inverted dark band, headline, subcopy, two buttons.
9. **Footer** — wordmark, link columns, small legal line.

CTAs are styled but non-functional (front page only, no extra routes).

## Technical notes

- Rewrite `src/routes/index.tsx` (replaces the template placeholder) and add section components under `src/components/landing/`.
- Add the two design tokens sets to `src/styles.css`: override `:root` semantic tokens (background/foreground/primary/muted/border/accent) with the oklch equivalents of the palette above, plus `--font-display` / `--font-sans` in `@theme`, and gradient/shadow tokens for the glow and card lift. No hardcoded color utilities in components.
- Load Space Grotesk + DM Sans via a `<link>` in `src/routes/__root.tsx` head.
- Add a route `head()` in `index.tsx` with Finnish SEO title/description, og:title, og:description; single `<h1>`, semantic `<section>` markup.
- Light scroll-reveal and hover transitions with CSS transitions only; no new dependencies.
