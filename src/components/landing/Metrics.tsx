import { Container } from "./primitives";

const metrics = [
  { value: "Jopa 300 %", label: "enemmän toimeksiantoja" },
  { value: "Optimoi", label: "enemmän toimeksiantoja liidiprosessia tehostamalla" },
  { value: "Nauti", label: "manuaalisen työn määrä vähenee merkittävästi" },
];

export function Metrics() {
  return (
    <section className="border-y border-border bg-stone">
      <Container className="grid divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0">
        {metrics.map((m) => (
          <div key={m.value} className="px-0 py-10 md:px-8 md:first:pl-0 md:last:pr-0">
            <p className="font-display text-2xl font-bold tracking-tight">{m.value}</p>
            <p className="mt-2 text-xs uppercase leading-relaxed tracking-[0.16em] text-muted-foreground">
              {m.label}
            </p>
          </div>
        ))}
      </Container>
    </section>
  );
}
