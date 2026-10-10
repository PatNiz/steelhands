import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/motion/reveal";
import { projects, quoteCta } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return { title: "Realizacja" };
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/realizacje/${project.slug}` },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <>
      <section className="relative min-h-[42vh] overflow-hidden bg-steel-graphite text-steel-mist">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-steel-graphite via-steel-graphite/70 to-steel-graphite/30"
        />
        <div className="container-site relative flex min-h-[42vh] flex-col justify-end pb-12 pt-28">
          <p className="tech-label text-steel-brushed">{project.category}</p>
          <h1 className="font-display mt-3 max-w-3xl text-display font-semibold">
            {project.title}
          </h1>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <Reveal>
            <p className="text-lead text-steel-mute">{project.summary}</p>
            <p className="mt-6 max-w-2xl text-steel-mute">
              To przykładowy typ realizacji — szablon pod przyszłe case studies z
              pełną dokumentacją fotograficzną i zgodą klienta. Nie dodajemy
              fikcyjnych wyników ani nazw firm.
            </p>
            <Link
              href={quoteCta.href}
              className="btn-primary focus-ring mt-8"
            >
              {quoteCta.label}
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <aside className="rounded-3xl bg-white/80 p-7 md:p-8">
              <p className="tech-label">Proces</p>
              <ul className="mt-4 space-y-3">
                {project.process.map((step, index) => (
                  <li
                    key={step}
                    className="flex items-center gap-3 text-sm text-steel-ink"
                  >
                    <span className="font-mono-tech text-xs text-steel-spark">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {step}
                  </li>
                ))}
              </ul>
              <Link
                href="/realizacje"
                className="focus-ring mt-8 inline-flex text-sm text-steel-mute hover:text-steel-ink"
              >
                ← Wszystkie realizacje
              </Link>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}
