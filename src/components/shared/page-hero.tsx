import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
  image?: {
    src: string;
    alt: string;
  };
};

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  className,
  image,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-steel-graphite text-steel-mist",
        image ? "min-h-[min(52svh,28rem)]" : undefined,
        className
      )}
    >
      {image ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
        >
          <Image
            src={image.src}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_35%]"
          />
        </div>
      ) : (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 steel-mesh opacity-40"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 top-10 h-64 w-64 rounded-full bg-steel-spark/12 blur-3xl"
          />
        </>
      )}

      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0",
          image
            ? "bg-gradient-to-r from-steel-graphite via-steel-graphite/78 to-steel-graphite/35"
            : "bg-gradient-to-br from-steel-graphite via-steel-graphite/90 to-steel-charcoal/80"
        )}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-steel-mist via-transparent to-steel-graphite/50"
      />

      <div
        className={cn(
          "container-site relative",
          image ? "flex min-h-[min(52svh,28rem)] flex-col justify-end pb-14 pt-28 md:pb-20 md:pt-32" : "pb-16 pt-28 md:pb-24 md:pt-36"
        )}
      >
        <Reveal>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span
                aria-hidden
                className="h-px w-8 bg-gradient-to-r from-steel-spark to-transparent"
              />
              <p className="tech-label text-steel-spark">{eyebrow}</p>
            </div>
            <h1 className="font-display mt-5 text-display font-semibold text-balance">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lead text-steel-brushed">
              {description}
            </p>
            {children ? (
              <div className="mt-9 flex flex-wrap gap-3">{children}</div>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
