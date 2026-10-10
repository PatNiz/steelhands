"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { mainNav, quoteCta } from "@/lib/site";
import { cn } from "@/lib/utils";

function subscribeScroll(onStoreChange: () => void) {
  window.addEventListener("scroll", onStoreChange, { passive: true });
  return () => window.removeEventListener("scroll", onStoreChange);
}

function getScrollSnapshot() {
  return window.scrollY > 18;
}

function getScrollServerSnapshot() {
  return false;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const reduceMotion = useReducedMotion();
  const scrolled = useSyncExternalStore(
    subscribeScroll,
    getScrollSnapshot,
    getScrollServerSnapshot
  );

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);
  // Over dark heroes: ink/steel glass. After scroll (or menu open): light glass.
  const onLight = scrolled || open;

  return (
    <header
      className="fixed inset-x-0 top-0 z-[100] px-3 pt-3 md:px-5 md:pt-4"
      style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100 }}
    >
      <div
        className={cn(
          "mx-auto flex max-w-[var(--container)] items-center justify-between gap-3 rounded-md border px-3 backdrop-blur-xl transition-[background-color,border-color,color,padding] duration-300 md:px-4",
          onLight
            ? "border-steel-line/80 bg-white/90 py-2 text-steel-ink md:py-2.5"
            : "border-white/12 bg-steel-graphite/55 py-2.5 text-steel-mist md:py-3"
        )}
      >
        <Link
          href="/"
          className={cn(
            "font-display focus-ring group relative z-10 flex items-baseline gap-2 pl-1 text-[1.05rem] font-semibold tracking-[-0.04em] md:text-lg",
            onLight ? "text-steel-ink" : "text-steel-mist"
          )}
        >
          <span className="relative">
            Steel
            <span className="font-medium opacity-90">Hands</span>
            <span
              aria-hidden
              className="absolute -right-2.5 top-1 size-1.5 rounded-[1px] bg-steel-spark transition-transform duration-300 group-hover:scale-125"
            />
          </span>
        </Link>

        <nav
          aria-label="Główna nawigacja"
          className="hidden items-center gap-0.5 xl:flex"
        >
          {mainNav.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                data-active={active}
                className={cn(
                  "focus-ring link-underline relative px-3 py-2 text-[0.8125rem] tracking-[-0.01em] transition-colors duration-300",
                  onLight
                    ? active
                      ? "text-steel-ink"
                      : "text-steel-mute hover:text-steel-ink"
                    : active
                      ? "text-steel-mist"
                      : "text-steel-brushed hover:text-steel-mist"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={quoteCta.href}
            className={cn(
              "focus-ring group/cta hidden items-center gap-1.5 rounded-md px-3.5 py-2.5 text-[0.8125rem] font-semibold transition-[background-color,color,transform] duration-300 sm:inline-flex",
              onLight
                ? "bg-steel-ink text-steel-mist hover:bg-steel-charcoal"
                : "bg-steel-spark text-steel-spark-fg hover:brightness-105"
            )}
          >
            {quoteCta.label}
            <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
          </Link>

          <button
            type="button"
            className={cn(
              "focus-ring inline-flex size-10 items-center justify-center rounded-md transition-colors xl:hidden",
              onLight
                ? "bg-steel-panel/90 text-steel-ink hover:bg-steel-panel"
                : "border border-white/15 bg-white/10 text-steel-mist hover:bg-white/16"
            )}
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Zamknij menu" : "Otwórz menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id={menuId}
            className="mx-auto mt-2 max-w-[var(--container)] overflow-hidden rounded-md border border-steel-line/80 bg-white/95 backdrop-blur-xl xl:hidden"
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav
              aria-label="Menu mobilne"
              className="flex flex-col gap-0.5 px-3 py-3"
            >
              {mainNav.map((item, index) => {
                const active =
                  pathname === item.href ||
                  pathname.startsWith(`${item.href}/`);
                return (
                  <motion.div
                    key={item.href}
                    initial={reduceMotion ? false : { opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * index }}
                  >
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className={cn(
                        "focus-ring block rounded-md px-3 py-3 text-base",
                        active
                          ? "bg-steel-panel text-steel-ink"
                          : "text-steel-mute hover:bg-steel-mist hover:text-steel-ink"
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
              <Link
                href={quoteCta.href}
                onClick={closeMenu}
                className="btn-primary focus-ring mt-2"
              >
                {quoteCta.label}
                <ArrowUpRight className="size-4" />
              </Link>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
