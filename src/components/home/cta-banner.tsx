import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { quoteCta } from "@/lib/site";

export function HomeCtaBanner() {
  return (
    <section className="pb-[var(--section-y)]">
      <div className="container-site">
        <Reveal>
          <div className="relative overflow-hidden rounded-[1.85rem] steel-grain px-8 py-14 text-steel-mist md:px-14 md:py-16">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 steel-mesh opacity-50"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 top-0 h-56 w-56 rounded-full bg-steel-spark/25 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-white/5 blur-2xl"
            />
            <div className="relative grid gap-8 lg:grid-cols-[1.35fr_auto] lg:items-end">
              <div className="max-w-xl">
                <p className="tech-label text-steel-spark">Zacznijmy od faktów</p>
                <h2 className="font-display mt-4 text-title font-semibold text-balance">
                  Wyślij plik albo opisz, co ma powstać.
                </h2>
                <p className="mt-4 text-lead text-steel-brushed">
                  Im więcej szczegółów, tym precyzyjniejsza wycena. Wracamy z
                  propozycją procesu i oferty — bez owijania w bawełnę.
                </p>
              </div>
              <Link href={quoteCta.href} className="btn-primary focus-ring">
                {quoteCta.label}
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
