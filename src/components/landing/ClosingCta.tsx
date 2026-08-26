import { Button, Container } from "./primitives";

export function ClosingCta() {
  return (
    <section id="hinnoittelu" className="relative overflow-hidden bg-ink py-28 text-background">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 size-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-[120px]"
      />
      <Container className="relative text-center">
        <span className="text-[0.66rem] font-medium uppercase tracking-[0.22em] text-primary">
          Ilmainen kolmen viikon kokeilu
        </span>
        <h2 className="mx-auto mt-5 max-w-3xl font-display text-[clamp(2.1rem,4.4vw,3.5rem)] font-bold leading-[1.03] tracking-[-0.03em]">
          Älä turhaan menetä toimeksiantoja kilpailijoillesi!
        </h2>
        <p className="mx-auto mt-5 max-w-xl leading-relaxed text-background/70">
          Varaa tapaaminen ja näe, miten SuperSell tehostaa liidiprosessianne.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button>Ilmainen kokeilu</Button>
          <Button variant="inverted">Hinnoittelu</Button>
        </div>
      </Container>
    </section>
  );
}
