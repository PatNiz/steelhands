import type { Metadata } from "next";
import Link from "next/link";
import { HomeCtaBanner } from "@/components/home/cta-banner";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/shared/page-hero";
import { ProjectCard } from "@/components/shared/project-card";
import { pageHeroImages, projects, quoteCta } from "@/lib/site";

export const metadata: Metadata = {
  title: "Realizacje",
  description:
    "Wybrane realizacje SteelHands — przykłady elementów metalowych, wyposażenia i obudów.",
  alternates: { canonical: "/realizacje" },
};

const materials: Record<string, string> = {
  "stol-warsztatowy": "Stal S235 · malowanie",
  "obudowa-maszyny": "Blacha nierdzewna",
  "uchwyty-montazowe": "Aluminium / stal",
  "regal-garazowy": "Stal konstrukcyjna",
};

export default function RealizacjePage() {
  const [lead, ...rest] = projects;

  return (
    <>
      <PageHero
        eyebrow="Realizacje"
        title="Takie rzeczy wychodzą z metalu."
        description="Przykładowe typy realizacji — bez zmyślonych logotypów klientów i bez „success story” na siłę. Pełne case studies publikujemy tylko za zgodą."
        image={{
          src: pageHeroImages.realizacje,
          alt: "Warsztat i obróbka metalu",
        }}
      >
        <Link href={quoteCta.href} className="btn-primary focus-ring">
          Omów swój projekt
        </Link>
      </PageHero>

      <section className="section-pad">
        <div className="container-site space-y-12 md:space-y-16">
          <Reveal>
            <ProjectCard
              href={`/realizacje/${lead.slug}`}
              title={lead.title}
              category={lead.category}
              summary={lead.summary}
              image={lead.image}
              process={lead.process}
              material={materials[lead.slug]}
              split
            />
          </Reveal>

          <div className="grid gap-10 md:grid-cols-2 md:gap-x-8 md:gap-y-14">
            {rest.map((project, index) => (
              <Reveal
                key={project.slug}
                delay={0.06 * index}
                className={index % 2 === 1 ? "md:mt-12" : undefined}
              >
                <ProjectCard
                  href={`/realizacje/${project.slug}`}
                  title={project.title}
                  category={project.category}
                  summary={project.summary}
                  image={project.image}
                  process={project.process}
                  material={materials[project.slug]}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <HomeCtaBanner />
    </>
  );
}
