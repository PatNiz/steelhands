import type { Metadata } from "next";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/shared/page-hero";
import { QuoteForm } from "@/components/shared/quote-form";
import { pageHeroImages, processSteps } from "@/lib/site";

export const metadata: Metadata = {
  title: "Zamów wycenę",
  description:
    "Wyślij zapytanie o wycenę projektu metalowego — prototyp, krótka seria lub kompletna realizacja.",
  alternates: { canonical: "/zamow-wycenie" },
};

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Zamów wycenę"
        title="Opisz projekt. Dostaniesz konkretną propozycję."
        description="Materiał, ilość, termin, plik albo nawet zdjęcie szkicu — im więcej wiesz, tym celniejsza wycena. Na starcie nic Cię nie zobowiązuje."
        image={{
          src: pageHeroImages.wycena,
          alt: "Dokumentacja i przygotowanie produkcji",
        }}
      />

      <section className="section-pad">
        <div className="container-site grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <ol className="space-y-6">
              {processSteps.map((step) => (
                <li key={step.id} className="flex gap-4">
                  <span className="font-mono-tech mt-1 text-xs tracking-widest text-steel-spark">
                    {step.id}
                  </span>
                  <div>
                    <h2 className="font-display text-lg font-semibold text-steel-ink">
                      {step.title}
                    </h2>
                    <p className="mt-1 text-sm text-steel-mute">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal delay={0.08}>
            <QuoteForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
