import { Container, Wordmark } from "./primitives";

const columns = [
  {
    title: "Tuote",
    links: ["Ominaisuudet", "Hinnoittelu", "Integraatiot", "Referenssit"],
  },
  {
    title: "Yritys",
    links: ["Tietoa meistä", "Ota yhteyttä", "Blogi", "Työpaikat"],
  },
  {
    title: "Tuki",
    links: ["Ohjeet", "Tietosuoja", "Käyttöehdot"],
  },
];

export function Footer() {
  return (
    <footer id="yhteys" className="py-16">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Wordmark />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Automatisoitu liidiprosessi kiinteistövälitysliikkeille. Nopeampi yhteydenotto,
              enemmän toimeksiantoja.
            </p>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-[0.66rem] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                {c.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#top"
                      className="text-sm text-foreground/80 transition-colors hover:text-primary"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} SuperSell. Kaikki oikeudet pidätetään.</span>
          <span>Tehty Suomessa</span>
        </div>
      </Container>
    </footer>
  );
}
