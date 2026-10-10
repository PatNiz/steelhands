import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "tech-label mb-4",
            tone === "dark" ? "text-steel-brushed" : "text-steel-mute"
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-display text-title font-semibold",
          tone === "dark" ? "text-steel-mist" : "text-steel-ink"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-lead",
            tone === "dark" ? "text-steel-brushed" : "text-steel-mute"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
