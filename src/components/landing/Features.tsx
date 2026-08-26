import {
  BarChart3,
  CalendarClock,
  ClipboardCheck,
  MessageSquare,
  PhoneCall,
  Route as RouteIcon,
} from "lucide-react";
import { Container, Eyebrow } from "./primitives";

const features = [
  {
    icon: RouteIcon,
    title: "Liidien reititys",
    body: "Ohjaa liidit oikeille välittäjille haluamienne sääntöjen mukaan.",
  },
  {
    icon: PhoneCall,
    title: "Automaattiset uudelleensoitot",
    body: "Jos liidi tai välittäjä ei vastaa, heille soitetaan automaattisesti uudelleen haluamillasi aikaväleillä.",
  },
  {
    icon: MessageSquare,
    title: "Automaattiset tekstiviestit",
    body: "Ilmoita että otatte pian yhteyttä, kerro soiton syy tai ehdota työaikojen ulkopuolella arviokäynnin varaamista.",
  },
  {
    icon: CalendarClock,
    title: "Ajastukset",
    body: "Määritä, milloin välittäjät ovat tavoitettavissa. Työaikojen ulkopuolella saapuneet liidit ajastetaan soimaan aamulla.",
  },
  {
    icon: ClipboardCheck,
    title: "Puhelun tulos",
    body: "Merkitse puhelun jälkeen puhelun tulos. Tiedot päivitetään heti CRM-järjestelmäänne.",
  },
  {
    icon: BarChart3,
    title: "Analytiikka",
    body: "Näet miten liidit on hoidettu ja millaisia tuloksia välittäjät ovat saaneet aikaan.",
  },
];

export function Features() {
  return (
    <section id="ominaisuudet" className="border-y border-border bg-stone py-24">
      <Container>
        <Eyebrow>Ominaisuudet</Eyebrow>
        <h2 className="mt-4 max-w-2xl font-display text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.05] tracking-[-0.03em]">
          Enemmän toimeksiantoja liidiprosessia tehostamalla
        </h2>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <article
              key={f.title}
              className="group bg-background p-8 transition-colors duration-300 hover:bg-card"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <f.icon className="size-5" strokeWidth={1.75} />
              </span>
              <h3 className="mt-6 font-display text-lg font-semibold tracking-tight">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
