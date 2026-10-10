import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

const journeys = [
  {
    code: "A",
    title: "Mam coś do wykonania",
    description:
      "Rysunek, prototyp, krótka seria albo nietypowy detal. Opisz, co potrzebujesz — poprowadzimy produkcję od A do Z.",
    href: "/produkcja-na-zamowienie",
    cta: "Produkcja na zamówienie",
    hint: "Od pomysłu do gotowego elementu",
  },
  {
    code: "B",
    title: "Szukam gotowego produktu",
    description:
      "Warsztat, garaż, konstrukcja, obudowa. Przeglądaj kategorie SteelHands i pytaj o wariant pod siebie.",
    href: "/produkty",
    cta: "Zobacz produkty",
    hint: "Kategorie pod realną pracę",
  },
] as const;

export function HomeJourneys() {
  return (
    <section id="dwie-drogi" className="section-pad relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-24 h-64 w-64 rounded-full bg-steel-spark/8 blur-3xl"
      />
      <div className="container-site">
        <Reveal>
          <SectionHeading
            eyebrow="02 — Dwie drogi"
            title="Od czego zaczynamy?"
            description="Albo produkujesz coś na zamówienie, albo wybierasz gotowy kierunek produktowy. Bez zgadywania, na którą stronę kliknąć."
            className="max-w-xl md:max-w-2xl"
          />
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-0">
          {journeys.map((journey, index) => {
            const offset = index % 2 === 1;
            return (
              <Reveal key={journey.code} delay={0.08 * index}>
                <article
                  className={`group relative rounded-[1.6rem] p-1 transition-colors duration-300 ${
                    offset
                      ? "lg:border-l lg:border-steel-line/70 lg:pl-12 lg:pt-20"
                      : "lg:pr-12"
                  }`}
                >
                  <Link
                    href={journey.href}
                    className="focus-ring block rounded-[1.35rem] p-1"
                  >
                    <div className="relative overflow-hidden rounded-[1.25rem] px-1 py-2 transition-transform duration-500 group-hover:-translate-y-1">
                      <p className="font-display text-[3.75rem] leading-none font-semibold tracking-tight text-steel-spark md:text-[4.5rem]">
                        {journey.code}
                      </p>
                      <p className="tech-label mt-5 text-steel-mute">
                        {journey.hint}
                      </p>
                      <h3 className="font-display mt-3 text-2xl font-semibold tracking-tight text-steel-ink md:text-[1.9rem]">
                        {journey.title}
                      </h3>
                      <p className="mt-4 max-w-md text-steel-mute">
                        {journey.description}
                      </p>
                      <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-steel-ink transition-colors group-hover:text-steel-spark">
                        {journey.cta}
                        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                      <span
                        aria-hidden
                        className="mt-4 block h-px w-12 bg-steel-spark/70 transition-[width] duration-500 group-hover:w-28"
                      />
                    </div>
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
