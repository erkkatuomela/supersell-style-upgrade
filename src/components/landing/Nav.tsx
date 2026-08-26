import { useEffect, useState } from "react";
import { Button, Container, Wordmark } from "./primitives";

const links = [
  { label: "Referenssit", href: "#referenssit" },
  { label: "Ominaisuudet", href: "#ominaisuudet" },
  { label: "Hinnoittelu", href: "#hinnoittelu" },
  { label: "Ota yhteyttä", href: "#yhteys" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/80 bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <Container className="flex h-[72px] items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid size-8 place-items-center rounded-lg bg-ink text-[0.7rem] font-bold text-primary">
            S
          </span>
          <Wordmark />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden rounded-md border border-border px-2.5 py-1 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-muted-foreground sm:inline">
            FI
          </span>
          <Button variant="ink" className="px-5 py-2.5 text-[0.82rem]">
            Ilmainen kokeilu
          </Button>
        </div>
      </Container>
    </header>
  );
}
