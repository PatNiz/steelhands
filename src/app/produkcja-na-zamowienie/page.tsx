import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { HomeCtaBanner } from "@/components/home/cta-banner";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { capabilities, pageHeroImages, processSteps, quoteCta } from "@/lib/site";

export const metadata: Metadata = {
  title: "Produkcja na zamówienie",
  description:
    "Od pomysłu i dokumentacji po gotowy element metalowy. SteelHands koordynuje projekt, produkcję i dostawę.",
  alternates: { canonical: "/produkcja-na-zamowienie" },
};

export default function CustomProductionPage() {
  return (
    <>
      <PageHero
        eyebrow="Produkcja na zamówienie"
        title="Od pliku do detalu — bez skakania po zakładach."
        description="Przysyłasz dokumentację albo opis. My dobieramy proces, ogarniamy produkcję i wykończenie. Ty masz jednego partnera, nie pięciu podwykonawców do pilnowania."
        image={{
          src: pageHeroImages.produkcja,
          alt: "Produkcja metalowa w toku",
        }}
      >
        <Link href={quoteCta.href} className="btn-primary focus-ring">
          {quoteCta.label}
          <ArrowUpRight className="size-4" />
        </Link>
      </PageHero>

      <section className="section-pad">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Jak pracujemy"
              title="Proces dopasowany do Twojej dokumentacji."
              description="Nie musisz znać każdego etapu produkcji. Opisujesz cel — my proponujemy wykonalną ścieżkę."
            />
          </Reveal>
          <ol className="mt-14 divide-y divide-steel-line/80 border-y border-steel-line/80">
            {processSteps.map((step, index) => (
              <Reveal key={step.id} delay={0.05 * index}>
                <li className="grid gap-3 py-8 sm:grid-cols-[4.5rem_minmax(0,1fr)] sm:gap-8">
                  <span className="font-mono-tech text-xs tracking-[0.16em] text-steel-spark">
                    {step.id}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-steel-ink md:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-steel-mute">
                      {step.description}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-pad bg-white/40">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Możliwości produkcyjne"
              title="Narzędzia do rozwiązania problemu."
              description="Technologie dobieramy pod wymagania detalu. Bez listy maszyn na ścianę — z jasną ścieżką od dokumentacji do dostawy."
            />
          </Reveal>
          <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <li key={item.title} className="relative pl-5">
                <span
                  aria-hidden
                  className="absolute bottom-1 left-0 top-1 w-px bg-gradient-to-b from-steel-spark to-steel-line"
                />
                <h3 className="font-display text-lg font-semibold text-steel-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-steel-mute">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <HomeCtaBanner />
    </>
  );
}
