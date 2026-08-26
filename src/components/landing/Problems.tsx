import { Container, Eyebrow } from "./primitives";

const problems = [
  {
    n: "01",
    tag: "Hidas reagointi liideihin",
    title: "Liidit pilaantuvat nopeasti",
    body: "Yksittäinen välittäjä ei voi olla aina tavoitettavissa, mutta kuumien liidien ei kannata antaa edetä kilpailijoiden kanssa sillä välin kuin liidi kylmenee välittäjän sähköpostissa.",
  },
  {
    n: "02",
    tag: "Uudelleensoitot unohtuvat",
    title: "Yksi unohdus voi maksaa toimeksiannon",
    body: "Kiireiset välittäjät unohtavat välillä soittaa uudestaan liideille, jotka eivät vastaa ensimmäiseen puheluun tai viestiin. Yksikin inhimillinen virhe voi maksaa tuhansia euroja menetettyinä palkkioina.",
  },
  {
    n: "03",
    tag: "Liidi väärälle välittäjälle",
    title: "Liidi annetaan välittäjälle jota se ei kiinnosta",
    body: "Kaikki välittäjät eivät ole aina kiinnostuneita kaikista liideistä. Joskus tällaiset liidit annetaan eteenpäin kollegoille liian hitaasti tai ne jäävät kokonaan hoitamatta.",
  },
];

export function Problems() {
  return (
    <section className="py-24">
      <Container>
        <Eyebrow>Ongelma</Eyebrow>
        <h2 className="mt-4 max-w-3xl font-display text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.05] tracking-[-0.03em]">
          Kolme syytä, miksi välittäjät menettävät toimeksiantoja kilpailijoille
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {problems.map((p) => (
            <article
              key={p.n}
              className="group flex flex-col rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-lift"
            >
              <span className="font-display text-4xl font-bold text-border transition-colors duration-300 group-hover:text-primary">
                {p.n}
              </span>
              <span className="mt-6 text-[0.66rem] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                {p.tag}
              </span>
              <h3 className="mt-3 font-display text-xl font-semibold leading-snug tracking-tight">
                {p.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
