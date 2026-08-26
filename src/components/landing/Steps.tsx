import { Container, Eyebrow } from "./primitives";

const steps = [
  {
    tag: "Vaihe 01",
    title: "Saat liidin",
    body: "SuperSell integroituu mihin tahansa liidilähteeseen, esim. verkkosivustoon, lomakkeisiin, sähköpostiin tai CRM-järjestelmään ja saa tiedot liideistäsi välittömästi.",
  },
  {
    tag: "Vaihe 02",
    title: "Soitamme välittäjällesi heti",
    body: "Määrittelemiesi sääntöjen perusteella soitamme automaattisesti välittäjillesi. Jos välittäjä ei vastaa, soitamme välittömästi seuraavalle välittäjälle.",
  },
  {
    tag: "Vaihe 03",
    title: "Välittäjä on yhteydessä liidiin",
    body: "Kun ensimmäinen välittäjä vastaa, hän kuulee, mitä tietoja liidi on jättänyt lomakkeeseen. Tämän jälkeen puhelu yhdistetään liidillesi. Jos välittäjä ei ole kiinnostunut, liidiä tarjotaan heti seuraavalle.",
  },
  {
    tag: "Vaihe 04",
    title: "Automaattiset uudelleensoitot",
    body: "Jos liidi ei vastaa ensimmäiseen puheluun tai viestiin, soitamme uudestaan automaattisesti haluamanne väliajoin. Näin uudelleensoitot eivät pääse unohtumaan kiireen keskellä.",
  },
];

export function Steps() {
  return (
    <section id="nain-se-toimii" className="border-y border-border bg-stone py-24">
      <Container>
        <Eyebrow>Näin se toimii</Eyebrow>
        <h2 className="mt-4 max-w-3xl font-display text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.05] tracking-[-0.03em]">
          Enemmän toimeksiantoja liidiprosessia tehostamalla
        </h2>

        <ol className="relative mt-16 ml-2 border-l border-border pl-8 md:ml-6 md:pl-14">
          {steps.map((s, i) => (
            <li key={s.tag} className={i === steps.length - 1 ? "" : "pb-14"}>
              <span className="absolute -left-[13px] grid size-6 place-items-center rounded-full border border-border bg-background">
                <span className="size-2 rounded-full bg-primary" />
              </span>
              <span className="text-[0.66rem] font-medium uppercase tracking-[0.22em] text-primary">
                {s.tag}
              </span>
              <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight md:text-3xl">
                {s.title}
              </h3>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
