"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { quoteCta, siteConfig } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

const headline = [
  { text: "Projektujemy.", accent: false },
  { text: "Produkujemy.", accent: false },
  { text: "Dostarczamy.", accent: true },
] as const;

const processRail = [
  "01 Pomysł",
  "02 Projekt",
  "03 Produkcja",
  "04 Wykończenie",
  "05 Dostawa",
] as const;

export function HomeHero() {
  const reduceMotion = useReducedMotion();

  const item = (delay: number) =>
    reduceMotion
      ? {}
      : {
          // Opacity stays 1 so content remains visible for SEO / no-JS / pre-hydration.
          initial: { opacity: 1, y: 18 } as const,
          animate: { opacity: 1, y: 0 } as const,
          transition: { duration: 0.7, ease, delay },
        };

  return (
    <section className="relative min-h-[min(100svh,62rem)] overflow-hidden bg-steel-graphite text-steel-mist">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      >
        <motion.div
          className="absolute inset-0"
          initial={reduceMotion ? false : { scale: 1.08 }}
          animate={reduceMotion ? undefined : { scale: 1 }}
          transition={{ duration: 8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=2400&q=80"
            alt="Obróbka metalu w środowisku produkcyjnym"
            fill
            priority
            sizes="100vw"
            className="pointer-events-none object-cover object-[center_30%]"
          />
        </motion.div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-steel-graphite via-steel-graphite/82 to-steel-graphite/20"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-steel-graphite via-steel-graphite/25 to-steel-graphite/55"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-steel-graphite to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-28 bottom-0 h-80 w-80 rounded-full bg-steel-spark/18 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[12%] top-[28%] h-40 w-40 rounded-full bg-steel-spark/10 blur-3xl"
      />

      <div className="container-site relative flex min-h-[min(100svh,62rem)] flex-col justify-end pb-16 pt-32 md:pb-20 md:pt-36">
        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.65fr)]">
          <div className="max-w-3xl">
            <motion.p className="tech-label text-steel-spark" {...item(0.04)}>
              {siteConfig.name}
              <span className="mx-2 text-steel-brushed/50">·</span>
              produkcja metalowa
            </motion.p>

            <h1 className="font-display mt-5 text-display font-semibold">
              {headline.map((line, index) => (
                <motion.span
                  key={line.text}
                  className="block overflow-hidden"
                  {...item(0.1 + index * 0.08)}
                >
                  <span
                    className={
                      line.accent
                        ? "bg-gradient-to-r from-steel-mist via-steel-mist to-steel-spark bg-clip-text text-transparent"
                        : undefined
                    }
                  >
                    {line.text}
                  </span>
                </motion.span>
              ))}
            </h1>

            <motion.p
              className="mt-7 max-w-lg text-balance text-lead text-steel-brushed"
              {...item(0.36)}
            >
              {siteConfig.description}
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
              {...item(0.44)}
            >
              <Link href={quoteCta.href} className="btn-primary focus-ring">
                {quoteCta.label}
                <ArrowUpRight className="size-4" />
              </Link>
              <Link href="/realizacje" className="btn-ghost-light focus-ring">
                Zobacz realizacje
              </Link>
            </motion.div>
          </div>

          <motion.aside
            className="relative hidden max-w-xs justify-self-end lg:block"
            {...item(0.5)}
            aria-label="Etapy procesu"
          >
            {/* Scrim so mono rail stays legible on spark/hero imagery */}
            <div
              aria-hidden
              className="absolute -inset-x-5 -inset-y-4 rounded-md bg-steel-graphite/70 ring-1 ring-white/10 backdrop-blur-md"
            />
            <div className="relative border-l border-steel-spark/50 pl-6">
              <p className="tech-label text-steel-spark">Proces</p>
              <ol className="mt-5 space-y-3.5 font-mono-tech text-xs tracking-wider text-steel-mist">
                {processRail.map((step, index) => (
                  <motion.li
                    key={step}
                    className="flex items-center gap-3"
                    initial={reduceMotion ? false : { opacity: 0.55, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.55 + index * 0.07,
                      duration: 0.45,
                      ease,
                    }}
                  >
                    <span
                      aria-hidden
                      className="h-px w-5 shrink-0 bg-gradient-to-r from-steel-spark to-steel-spark/25"
                    />
                    {step}
                  </motion.li>
                ))}
              </ol>
            </div>
          </motion.aside>
        </div>

        <motion.div
          className="mt-12 flex items-end justify-between gap-6 border-t border-white/10 pt-5"
          {...item(0.55)}
        >
          <div
            className="flex flex-wrap gap-x-5 gap-y-2 rounded-md bg-steel-graphite/55 px-3 py-2 font-mono-tech text-[0.65rem] tracking-[0.14em] text-steel-mist/90 ring-1 ring-white/10 lg:hidden"
            aria-hidden
          >
            {processRail.map((step) => (
              <span key={step}>{step}</span>
            ))}
          </div>
          <p className="hidden max-w-xs text-sm leading-relaxed text-steel-brushed/70 lg:block">
            Jeden partner od szkicu do gotowego elementu — bez skakania między
            zakładami.
          </p>
          <a
            href="#dwie-drogi"
            className="focus-ring group ml-auto inline-flex items-center gap-2 font-mono-tech text-[0.65rem] tracking-[0.16em] text-steel-brushed transition-colors hover:text-steel-mist"
          >
            Dalej
            <ArrowDown className="size-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
