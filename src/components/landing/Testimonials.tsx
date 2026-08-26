import { Container, Eyebrow } from "./primitives";

const quotes = [
  {
    initials: "NK",
    quote:
      "Manuaalisen työn määrä on vähentynyt merkittävästi ja saamme nykyään selvästi enemmän uusia kohteita liideistä kuin aikaisemmin.",
    company: "ROOF",
    who: "Niko Koivisto, myyntijohtaja & Jan Malin, myynnin tukipalvelutiimin esimies",
    meta: "Kiinteistövälitys · 121 välittäjää",
  },
  {
    initials: "KV",
    quote:
      "Palvelu on toiminut hyvin ja SuperSell on tehostanut liideihin reagoimista merkittävästi. Uskoin jo ennen käyttöönottoa, että nopea yhteydenotto lisää keskusteluita asiakkaiden kanssa — silti yllätyin.",
    company: "Kiinteistönvälitysliike",
    who: "Toimitusjohtaja",
    meta: "Anonyymi referenssi",
  },
];

export function Testimonials() {
  return (
    <section id="referenssit" className="py-24">
      <Container>
        <Eyebrow>Referenssit</Eyebrow>
        <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.05] tracking-[-0.03em]">
          Asiakkaiden kokemuksia
        </h2>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {quotes.map((q) => (
            <figure
              key={q.company}
              className="flex flex-col justify-between rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift md:p-10"
            >
              <blockquote className="font-display text-xl leading-snug tracking-tight md:text-2xl">
                <span className="mr-1 text-primary">“</span>
                {q.quote}
                <span className="ml-1 text-primary">”</span>
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4 border-t border-border pt-6">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-primary/10 font-display text-sm font-semibold text-primary">
                  {q.initials}
                </span>
                <span>
                  <span className="block text-sm font-semibold">{q.company}</span>
                  <span className="block text-xs leading-relaxed text-muted-foreground">
                    {q.who}
                  </span>
                  <span className="mt-1 block text-[0.66rem] uppercase tracking-[0.18em] text-muted-foreground">
                    {q.meta}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
