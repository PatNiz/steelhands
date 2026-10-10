import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { mainNav, quoteCta, siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-steel-graphite text-steel-mist">
      <div className="container-site section-pad grid gap-14 md:grid-cols-[1.45fr_1fr_1fr]">
        <div className="max-w-md">
          <p className="font-display text-2xl font-semibold tracking-tight">
            Steel<span className="font-medium opacity-90">Hands</span>
            <span
              aria-hidden
              className="ml-1.5 inline-block size-1.5 translate-y-[-2px] rounded-full bg-steel-spark"
            />
          </p>
          <p className="mt-5 text-steel-brushed">{siteConfig.tagline}</p>
          <p className="mt-3 text-sm leading-relaxed text-steel-brushed/80">
            Jeden partner odpowiedzialny za projekt, produkcję i dostawę
            elementów metalowych — bez zarządzania wieloma wykonawcami.
          </p>
          <Link href={quoteCta.href} className="btn-primary focus-ring mt-7">
            {quoteCta.label}
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div>
          <p className="tech-label text-steel-brushed">Nawigacja</p>
          <ul className="mt-5 space-y-2.5">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="focus-ring text-sm text-steel-mist/85 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="tech-label text-steel-brushed">Kontakt</p>
          <ul className="mt-5 space-y-2.5 text-sm text-steel-mist/85">
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="focus-ring transition-colors hover:text-white"
              >
                {siteConfig.email}
              </a>
            </li>
            <li>
              <Link
                href="/kontakt"
                className="focus-ring transition-colors hover:text-white"
              >
                Formularz kontaktowy
              </Link>
            </li>
            <li>
              <Link
                href="/zamow-wycenie"
                className="focus-ring transition-colors hover:text-white"
              >
                Wycena projektu
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="container-site flex flex-col gap-2 py-5 text-xs text-steel-brushed/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {siteConfig.name}. Wszelkie prawa zastrzeżone.</p>
          <p className="font-mono-tech tracking-wider">
            PL · industrial precision
          </p>
        </div>
      </div>
    </footer>
  );
}
