import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { HomeCtaBanner } from "@/components/home/cta-banner";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/shared/page-hero";
import { pageHeroImages, productCategories, quoteCta } from "@/lib/site";

export const metadata: Metadata = {
  title: "Produkty",
  description:
    "Gotowe produkty SteelHands: wyposażenie warsztatowe, akcesoria garażowe, elementy konstrukcyjne i obudowy.",
  alternates: { canonical: "/produkty" },
};

export default function ProduktyPage() {
  return (
    <>
      <PageHero
        eyebrow="Produkty"
        title="Produkty, które mają sens w warsztacie."
        description="Kategorie pod realną pracę: garaż, stanowisko, konstrukcja, obudowa. Potrzebujesz innego wymiaru albo wariantu? Napisz — wycenimy pod Ciebie."
        image={{
          src: pageHeroImages.produkty,
          alt: "Precyzyjna obróbka metalu",
        }}
      >
        <Link href={quoteCta.href} className="btn-primary focus-ring">
          {quoteCta.label}
          <ArrowUpRight className="size-4" />
        </Link>
        <Link
          href="/produkcja-na-zamowienie"
          className="btn-ghost-light focus-ring"
        >
          Produkcja na zamówienie
        </Link>
      </PageHero>

      <section className="section-pad">
        <div className="container-site space-y-16 md:space-y-24">
          {productCategories.map((category, index) => {
            const reverse = index % 2 === 1;
            return (
              <Reveal key={category.slug} delay={0.04 * index}>
                <article
                  id={category.slug}
                  className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${
                    reverse ? "lg:[&>div:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative aspect-[16/11] overflow-hidden rounded-2xl">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-steel-graphite/35 via-transparent to-transparent"
                    />
                    <span className="absolute bottom-4 left-4 font-mono-tech text-xs tracking-[0.16em] text-white/90">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className={reverse ? "lg:pr-6" : "lg:pl-2"}>
                    <p className="tech-label text-steel-spark">
                      Kategoria {String(index + 1).padStart(2, "0")}
                    </p>
                    <h2 className="font-display mt-3 text-2xl font-semibold tracking-tight text-steel-ink md:text-3xl">
                      {category.title}
                    </h2>
                    <p className="mt-4 max-w-md text-steel-mute">
                      {category.description}
                    </p>
                    <p className="mt-3 max-w-md text-sm text-steel-mute/85">
                      Wymiary, materiał i wykończenie dobieramy pod Twoje
                      stanowisko — nie pod uniwersalny szablon.
                    </p>
                    <Link
                      href={`${quoteCta.href}?kategoria=${category.slug}`}
                      className="focus-ring link-underline mt-7 inline-flex items-center gap-2 text-sm font-semibold text-steel-ink hover:text-steel-spark"
                    >
                      Zapytaj o ten typ
                      <ArrowUpRight className="size-4" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <HomeCtaBanner />
    </>
  );
}
