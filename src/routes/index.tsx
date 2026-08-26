import { createFileRoute } from "@tanstack/react-router";
import { ClosingCta } from "@/components/landing/ClosingCta";
import { Features } from "@/components/landing/Features";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { Metrics } from "@/components/landing/Metrics";
import { Nav } from "@/components/landing/Nav";
import { Problems } from "@/components/landing/Problems";
import { Steps } from "@/components/landing/Steps";
import { Testimonials } from "@/components/landing/Testimonials";

const title = "SuperSell — Enemmän toimeksiantoja liideistä";
const description =
  "Välittäjäsi tavoittavat liidit noin kahdessa minuutissa. Välitysliikkeet saavat jopa 300 % enemmän uusia toimeksiantoja. Kokeile ilmaiseksi kolme viikkoa.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <Nav />
      <main>
        <Hero />
        <Metrics />
        <Problems />
        <Steps />
        <Testimonials />
        <Features />
        <ClosingCta />
      </main>
      <Footer />
    </div>
  );
}
