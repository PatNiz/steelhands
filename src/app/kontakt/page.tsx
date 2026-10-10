import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/shared/page-hero";
import { QuoteForm } from "@/components/shared/quote-form";
import { pageHeroImages, quoteCta, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Skontaktuj się ze SteelHands — pytania ogólne i wycena projektu metalowego.",
  alternates: { canonical: "/kontakt" },
};

export default function KontaktPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Porozmawiajmy o projekcie."
        description="Masz pytanie ogólne albo chcesz rozpocząć wycenę? Napisz — odpowiadamy w sprawie wykonalności i kolejnych kroków."
        image={{
          src: pageHeroImages.kontakt,
          alt: "Kontakt w sprawie produkcji metalowej",
        }}
      />

      <section className="section-pad">
        <div className="container-site grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="space-y-10">
              <div>
                <p className="tech-label">E-mail</p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="focus-ring mt-2 inline-block text-lg text-steel-ink hover:text-steel-spark"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div>
                <p className="tech-label">Wycena</p>
                <p className="mt-2 text-steel-mute">
                  Najszybsza ścieżka dla projektów produkcyjnych to dedykowany
                  formularz wyceny.
                </p>
                <Link
                  href={quoteCta.href}
                  className="focus-ring link-underline mt-3 inline-flex text-sm font-semibold text-steel-ink hover:text-steel-spark"
                >
                  Przejdź do „{quoteCta.label}”
                </Link>
              </div>
              <div className="border-l border-steel-spark/50 pl-5">
                <p className="text-sm leading-relaxed text-steel-mute">
                  Dane adresowe, NIP i godziny kontaktu uzupełnimy, gdy
                  oficjalne dane firmowe będą dostępne — bez placeholderów
                  udających gotowość.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <QuoteForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
