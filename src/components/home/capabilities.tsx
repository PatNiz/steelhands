import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { capabilities } from "@/lib/site";

export function HomeCapabilities() {
  return (
    <section className="section-pad">
      <div className="container-site">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <Reveal>
            <SectionHeading
              eyebrow="04 — Możliwości"
              title="Narzędzia, nie katalog maszyn."
              description="Laser, gięcie, CNC, spawanie, proszek, montaż — dobieramy to, czego wymaga Twój detal."
            />
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-md justify-self-start text-sm leading-relaxed text-steel-mute lg:justify-self-end lg:text-right">
              Nie chwalimy się halą, której nie pokazujemy. Liczy się wynik:
              element, który pasuje, trzyma obciążenie i przychodzi na czas.
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 divide-y divide-steel-line/80 border-y border-steel-line/80">
          {capabilities.map((item, index) => (
            <Reveal key={item.title} delay={0.04 * index}>
              <li className="group relative grid gap-3 py-7 transition-colors sm:grid-cols-[5rem_minmax(0,0.9fr)_minmax(0,1.2fr)] sm:items-baseline sm:gap-8 md:py-8">
                <span
                  aria-hidden
                  className="absolute inset-y-0 left-0 w-0 bg-steel-spark/[0.06] transition-[width] duration-500 group-hover:w-full"
                />
                <span className="relative font-mono-tech text-xs tracking-[0.16em] text-steel-spark">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="relative font-display text-xl font-semibold tracking-tight text-steel-ink transition-colors group-hover:text-steel-spark md:text-2xl">
                  {item.title}
                </h3>
                <p className="relative text-sm leading-relaxed text-steel-mute sm:max-w-md">
                  {item.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
