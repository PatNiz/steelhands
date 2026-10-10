import type { Metadata } from "next";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HomeCtaBanner } from "@/components/home/cta-banner";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { faqItems, pageHeroImages, quoteCta } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dla firm",
  description:
    "Outsourcing produkcji metalowej, prototypy i krótkie serie dla firm — jeden partner odpowiedzialny za proces.",
  alternates: { canonical: "/dla-firm" },
};

const firmBenefits = [
  {
    title: "Jeden punkt kontaktu",
    description:
      "Koniec z ustalaniem terminów między trzema zakładami. Masz jednego partnera odpowiedzialnego za wynik — i za odpowiedź.",
  },
  {
    title: "Od prototypu do serii",
    description:
      "Najpierw sprawdzamy koncepcję na jednej sztuce, potem skalujemy. Bez zmiany partnera i bez zaczynania od zera.",
  },
  {
    title: "Dokumentacja pod produkcję",
    description:
      "Niekompletny rysunek nie musi zatrzymać projektu. Pomagamy domknąć to, czego brakuje, zanim pójdzie na halę.",
  },
  {
    title: "Przewidywalny przebieg",
    description:
      "Zapytanie → analiza → oferta → produkcja → dostawa. Krótko, konkretnie, bez korpo-frazy o „innowacyjnych rozwiązaniach”.",
  },
] as const;

export default function DlaFirmPage() {
  return (
    <>
      <PageHero
        eyebrow="Dla firm"
        title="Komponenty i serie bez zarządzania dostawcami."
        description="Potrzebujesz prototypu, krótkiej serii, obudowy albo montażu? Prowadzimy proces od wymagań po dostawę — tak, żeby Twój zespół nie został project managerem trzech zakładów."
        image={{
          src: pageHeroImages.firmy,
          alt: "Środowisko produkcyjne dla firm",
        }}
      >
        <Link href={quoteCta.href} className="btn-primary focus-ring">
          Zapytanie B2B
        </Link>
      </PageHero>

      <section className="section-pad">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Wartość dla B2B"
              title="Mniej maili. Więcej kontroli nad detalem."
            />
          </Reveal>
          <div className="mt-14 divide-y divide-steel-line/80 border-y border-steel-line/80">
            {firmBenefits.map((item, index) => (
              <Reveal key={item.title} delay={0.05 * index}>
                <article
                  className={`grid gap-3 py-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)] md:gap-12 ${
                    index % 2 === 1 ? "md:pl-[6%]" : ""
                  }`}
                >
                  <h3 className="font-display text-xl font-semibold text-steel-ink md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-steel-mute md:pt-1">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site max-w-3xl">
          <Reveal>
            <SectionHeading
              eyebrow="FAQ"
              title="Najczęstsze pytania firm."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Accordion className="mt-8 rounded-2xl border border-steel-line/70 bg-white/90 px-1">
              {faqItems.map((item, index) => (
                <AccordionItem key={item.question} value={`item-${index}`}>
                  <AccordionTrigger className="px-5 text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-5 text-steel-mute">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      <HomeCtaBanner />
    </>
  );
}
