import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  href: string;
  title: string;
  category: string;
  summary: string;
  image: string;
  process?: readonly string[];
  material?: string;
  className?: string;
  /** Larger type + image — use for editorial lead cards */
  featured?: boolean;
  /** Full-width lead: image | copy side-by-side on large screens */
  split?: boolean;
};

export function ProjectCard({
  href,
  title,
  category,
  summary,
  image,
  process,
  material,
  className,
  featured = false,
  split = false,
}: ProjectCardProps) {
  const emphasize = featured || split;

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col",
        split && "lg:grid lg:grid-cols-[1.35fr_1fr] lg:items-end lg:gap-10",
        className
      )}
    >
      <Link
        href={href}
        className={cn(
          "focus-ring relative block overflow-hidden rounded-md border border-steel-ink/10",
          split
            ? "aspect-[16/10] lg:aspect-[16/11]"
            : featured
              ? "aspect-[4/3] md:aspect-[16/11]"
              : "aspect-[16/11]"
        )}
      >
        {/* Crop-zoom: scale inside clipped frame — no shadow lift */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes={
              split
                ? "(max-width: 1024px) 100vw, 58vw"
                : featured
                  ? "(max-width: 1024px) 100vw, 55vw"
                  : "(max-width: 768px) 100vw, 40vw"
            }
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
        </div>
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-steel-graphite/75 via-steel-graphite/15 to-transparent"
        />
        {/* Asymmetric crop accent on hover */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 motion-reduce:group-hover:opacity-0"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 72%, 0 88%)",
            background:
              "linear-gradient(180deg, transparent 40%, rgb(16 19 23 / 0.35) 100%)",
          }}
        />
        <span className="absolute bottom-3 left-3 font-mono-tech text-[0.65rem] tracking-[0.14em] text-white/90 uppercase">
          {category}
        </span>
        <span className="absolute right-3 top-3 inline-flex size-8 items-center justify-center rounded-md border border-white/30 bg-steel-graphite/40 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 motion-reduce:group-hover:opacity-100">
          <ArrowUpRight className="size-3.5" />
        </span>
      </Link>
      <div
        className={cn(
          "flex flex-1 flex-col",
          split ? "pt-5 lg:pt-0 lg:pb-1" : "pt-4"
        )}
      >
        <h3
          className={cn(
            "font-display font-semibold tracking-tight text-steel-ink",
            emphasize ? "text-2xl md:text-3xl" : "text-xl"
          )}
        >
          <Link
            href={href}
            className="focus-ring transition-colors hover:text-steel-spark"
          >
            {title}
          </Link>
        </h3>
        <p
          className={cn(
            "mt-2.5 flex-1 leading-relaxed text-steel-mute",
            emphasize ? "max-w-md text-base" : "text-sm"
          )}
        >
          {summary}
        </p>
        {(process?.length || material) && (
          <p className="mt-3.5 font-mono-tech text-[0.68rem] tracking-[0.08em] text-steel-brushed">
            {material ? <span>{material}</span> : null}
            {material && process?.length ? (
              <span className="mx-2 text-steel-line">/</span>
            ) : null}
            {process?.length ? <span>{process.join(" · ")}</span> : null}
          </p>
        )}
        {emphasize ? (
          <Link
            href={href}
            className="focus-ring link-underline mt-5 inline-flex items-center gap-2 self-start text-sm font-semibold text-steel-ink hover:text-steel-spark"
          >
            Zobacz szczegóły
            <ArrowUpRight className="size-4" />
          </Link>
        ) : null}
      </div>
    </article>
  );
}
