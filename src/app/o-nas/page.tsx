import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { pageHeroImages, quoteCta, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "O nas",
  description:
    "SteelHands — partner koordynujący projekt, produkcję i dostawę elementów metalowych.",
  alternates: { canonical: "/o-nas" },
};

export default function ONasPage() {
  return (
    <>
      <PageHero
        eyebrow="O nas"
        title="Metal bez chaosu w komunikacji."
        description={`${siteConfig.name} to nie katalog maszyn i nie kolejny warsztat z listą usług. Jesteśmy partnerem, który bierze odpowiedzialność za całość: od rozmowy o wymaganiach po gotowy detal.`}
        image={{
          src: pageHeroImages.oNas,
          alt: "Praca z metalem w produkcji",
        }}
      />

      <section className="section-pad">
        <div className="container-site grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="Podejście"
              title="Zamiast pięciu numerów — jeden kontakt."
              description="Samodzielne łączenie projektanta, lasera, gięcia, spawalni i malarni zjada czas. My bierzemy tę układankę na siebie."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="space-y-5 border-l border-steel-line/80 pl-6 md:pl-8">
              {[
                "Słuchamy wymagań i mówimy wprost, co da się zrobić.",
                "Przekładamy pomysł na dokumentację pod realną produkcję.",
                "Dobieramy proces, nie sprzedajemy „wszystkiego naraz”.",
                "Pilnujemy produkcji, wykończenia i dostawy.",
                "Odpowiadasz jednej osobie — nie łańcuchowi podwykonawców.",
              ].map((point) => (
                <li
                  key={point}
                  className="relative pl-5 text-steel-ink before:absolute before:left-0 before:top-2 before:size-1.5 before:rounded-full before:bg-steel-spark"
                >
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section-pad border-t border-steel-line/80 bg-steel-graphite text-steel-mist">
        <div className="container-site max-w-3xl">
          <Reveal>
            <p className="tech-label text-steel-brushed">Transparentność</p>
            <h2 className="font-display mt-4 text-title font-semibold">
              Bez marketingu na wyrost.
            </h2>
            <p className="mt-5 text-lead text-steel-brushed">
              Nie wypisujemy hal, certyfikatów ani parków maszyn, których nie
              potwierdzamy. Liczy się to, że dostajesz wykonany detal i jasny
              przebieg współpracy — a nie folder z fotografiami urządzeń.
            </p>
            <Link href={quoteCta.href} className="btn-primary focus-ring mt-8">
              {quoteCta.label}
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
