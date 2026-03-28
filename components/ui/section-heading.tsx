import type { ReactNode } from "react";

type Theme = "light" | "dark";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  eyebrow?: ReactNode;
  spacing?: "default" | "compact";
  theme?: Theme;
  /** Override title color (e.g. text-[var(--brand)] on light sections). */
  titleClassName?: string;
};

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  eyebrow,
  spacing = "default",
  theme = "light",
  titleClassName,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "mx-auto text-center" : "text-left";
  const marginClass =
    spacing === "compact" ? "mb-6 md:mb-8" : "mb-10 md:mb-14";
  const titleColor =
    titleClassName ??
    (theme === "dark" ? "text-white" : "text-zinc-900");
  const subColor = theme === "dark" ? "text-blue-100/90" : "text-zinc-600";
  const eyebrowColor =
    theme === "dark" ? "text-blue-200/90" : "text-[var(--brand)]";

  return (
    <div className={`max-w-3xl ${marginClass} ${alignClass}`}>
      {eyebrow ? (
        <p
          className={`mb-3 text-xs font-bold uppercase tracking-[0.18em] ${eyebrowColor}`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.5rem] lg:leading-tight ${titleColor}`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mt-4 text-pretty text-base leading-relaxed md:text-lg ${subColor}`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
