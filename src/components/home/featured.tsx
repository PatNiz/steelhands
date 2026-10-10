import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { ProjectCard } from "@/components/shared/project-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { projects } from "@/lib/site";

const materials: Record<string, string> = {
  "stol-warsztatowy": "Stal S235 · malowanie",
  "obudowa-maszyny": "Blacha nierdzewna",
  "uchwyty-montazowe": "Aluminium / stal",
};

export function HomeFeatured() {
  const [lead, ...rest] = projects.slice(0, 3);

  return (
    <section className="section-pad relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-16 left-0 w-px bg-steel-line/60"
      />
      <div className="container-site">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="05 — Realizacje"
              title="Metal, który coś wytrzyma."
              description="Kilka typów zleceń, które robimy najczęściej. Bez fikcyjnych logotypów klientów — konkretne formy, procesy i zastosowanie."
              className="max-w-xl"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <Link
              href="/realizacje"
              className="focus-ring link-underline inline-flex items-center gap-2 text-sm font-semibold text-steel-ink hover:text-steel-spark"
            >
              Wszystkie realizacje
              <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-8 lg:gap-y-12">
          <Reveal className="lg:col-span-7" delay={0.04}>
            <ProjectCard
              href={`/realizacje/${lead.slug}`}
              title={lead.title}
              category={lead.category}
              summary={lead.summary}
              image={lead.image}
              process={lead.process}
              material={materials[lead.slug]}
              featured
            />
          </Reveal>
          <div className="flex flex-col gap-10 lg:col-span-5 lg:gap-8 lg:pt-10">
            {rest.map((project, index) => (
              <Reveal key={project.slug} delay={0.08 + index * 0.06}>
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
      </div>
    </section>
  );
}
