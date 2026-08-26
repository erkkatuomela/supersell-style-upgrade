import { Button, Chip, Container, Eyebrow } from "./primitives";

const flow = [
  { step: "Liidi saapui", detail: "Verkkolomake · Arviopyyntö", tone: "idle" },
  { step: "Soitto välittäjälle", detail: "Matti V. · soi 12 s", tone: "active" },
  { step: "Puhelu yhdistetty", detail: "Vasteaika 1 min 54 s", tone: "done" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] size-[520px] rounded-full bg-primary/10 blur-3xl"
      />
      <Container className="relative grid items-center gap-16 py-20 md:py-28 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="flex flex-wrap gap-2">
            <Chip>Kiinteistövälitysliikkeille</Chip>
            <Chip>Ilmainen 3 viikon kokeilu</Chip>
          </div>

          <h1 className="mt-8 font-display text-[clamp(2.9rem,6.4vw,5rem)] font-bold leading-[0.96] tracking-[-0.035em]">
            Enemmän
            <br />
            <span className="text-primary">toimeksiantoja</span>
            <br />
            liideistä!
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Välittäjäsi tavoittavat liidit noin kahdessa minuutissa. Välitysliikkeet saavat jopa
            300 % enemmän uusia toimeksiantoja. Kokeile ilmaiseksi kolme viikkoa ja näe ero.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="#nain-se-toimii">Näin se toimii</Button>
            <Button variant="outline">Ilmainen kokeilu</Button>
          </div>
        </div>

        <div className="relative">
          <Eyebrow>Näin se toimii</Eyebrow>
          <div className="mt-4 rounded-3xl border border-border bg-card p-6 shadow-panel md:p-8">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <span className="font-display text-sm font-semibold tracking-tight">
                SuperSell · liidiputki
              </span>
              <span className="flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.16em] text-primary">
                <span className="size-2 animate-pulse rounded-full bg-primary" />
                Live
              </span>
            </div>

            <ol className="mt-6 space-y-3">
              {flow.map((f, i) => (
                <li
                  key={f.step}
                  className={`flex items-center gap-4 rounded-2xl border p-4 transition-colors ${
                    f.tone === "active"
                      ? "border-primary/40 bg-primary/5"
                      : "border-border bg-secondary/60"
                  }`}
                >
                  <span
                    className={`grid size-9 shrink-0 place-items-center rounded-full font-display text-xs font-semibold ${
                      f.tone === "active"
                        ? "bg-primary text-primary-foreground"
                        : "bg-ink/8 text-muted-foreground"
                    }`}
                  >
                    0{i + 1}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-medium">{f.step}</span>
                    <span className="block truncate text-xs text-muted-foreground">{f.detail}</span>
                  </span>
                </li>
              ))}
            </ol>

            <div className="mt-6 flex items-end justify-between rounded-2xl bg-ink p-5">
              <span className="text-xs uppercase tracking-[0.18em] text-background/60">
                Keskimääräinen vasteaika
              </span>
              <span className="font-display text-3xl font-bold leading-none text-primary">
                2 min
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
