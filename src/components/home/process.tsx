"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { processSteps } from "@/lib/site";
import { cn } from "@/lib/utils";

export function HomeProcess() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-pad relative overflow-hidden steel-grain text-steel-mist">
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 translate-x-1/3 rounded-full bg-steel-spark/10 blur-3xl"
      />
      <div className="container-site relative">
        <Reveal>
          <SectionHeading
            eyebrow="03 — Proces"
            title="Cztery kroki. Jedna odpowiedzialność."
            description="Kliknij etap — zobaczysz, co dzieje się po drodze. Bez żargonu i bez „procesów na slajdzie”."
            tone="dark"
          />
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)] lg:gap-20">
          <ol className="relative space-y-1">
            <div
              aria-hidden
              className="absolute bottom-4 left-[0.85rem] top-4 w-px bg-gradient-to-b from-steel-spark via-white/20 to-transparent"
            />
            {processSteps.map((step, index) => {
              const isActive = active === index;
              return (
                <li key={step.id}>
                  <button
                    type="button"
                    onClick={() => setActive(index)}
                    onMouseEnter={() => setActive(index)}
                    onFocus={() => setActive(index)}
                    className={cn(
                      "focus-ring relative flex w-full items-start gap-4 rounded-md px-1 py-3.5 text-left transition-colors duration-300",
                      isActive ? "text-steel-mist" : "text-steel-brushed/70"
                    )}
                    aria-current={isActive ? "step" : undefined}
                  >
                    <span
                      className={cn(
                        "relative z-10 mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md border text-[0.65rem] font-mono-tech transition-colors duration-300",
                        isActive
                          ? "border-steel-spark bg-steel-spark text-steel-spark-fg"
                          : "border-white/25 bg-steel-charcoal text-steel-mist/80"
                      )}
                    >
                      {step.id}
                    </span>
                    <span className="font-display pt-0.5 text-lg font-medium tracking-tight md:text-xl">
                      {step.title}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          <Reveal delay={0.1}>
            <div className="relative min-h-[15rem] overflow-hidden rounded-md border border-white/15 bg-steel-graphite/55 p-8 ring-1 ring-white/5 backdrop-blur-sm md:p-10">
              <p className="tech-label text-steel-spark">
                Etap {processSteps[active].id}
              </p>
              <motion.h3
                key={processSteps[active].title}
                className="font-display mt-4 text-2xl font-semibold tracking-tight md:text-3xl"
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
              >
                {processSteps[active].title}
              </motion.h3>
              <motion.p
                key={processSteps[active].description}
                className="mt-4 max-w-lg text-lead text-steel-brushed"
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
              >
                {processSteps[active].description}
              </motion.p>

              <div
                className="mt-10 h-1 overflow-hidden rounded-full bg-white/10"
                role="progressbar"
                aria-valuemin={1}
                aria-valuemax={processSteps.length}
                aria-valuenow={active + 1}
                aria-label="Postęp procesu"
              >
                <motion.div
                  className="h-full rounded-full bg-steel-spark"
                  initial={false}
                  animate={{
                    width: `${((active + 1) / processSteps.length) * 100}%`,
                  }}
                  transition={{ duration: reduceMotion ? 0 : 0.4 }}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
