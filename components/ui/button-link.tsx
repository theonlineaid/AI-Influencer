import Link from "next/link";
import type { ReactNode } from "react";

type Variant =
  | "blueSolid"
  | "whiteSolid"
  | "whiteOutline"
  | "blueOutline"
  | "whiteGhost"
  | "blueGhost";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400/80";

const variants: Record<Variant, string> = {
  blueSolid:
    "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/25 hover:from-violet-500 hover:to-indigo-500",
  whiteSolid:
    "bg-white text-violet-950 shadow-lg shadow-black/20 hover:bg-zinc-100",
  whiteOutline:
    "border-2 border-white/40 text-white hover:border-cyan-400/50 hover:bg-white/5",
  blueOutline:
    "border-2 border-violet-500/60 text-cyan-300 hover:border-cyan-400/70 hover:bg-violet-500/10",
  whiteGhost: "text-white underline-offset-4 hover:text-cyan-200 hover:underline",
  blueGhost:
    "text-violet-300 underline-offset-4 hover:text-cyan-300 hover:underline",
};

export function ButtonLink({
  href,
  children,
  variant = "blueSolid",
  className = "",
}: ButtonLinkProps) {
  const styles = `${base} ${variants[variant]} ${className}`;
  const externalHttp = href.startsWith("http");
  const nativeScheme =
    href.startsWith("mailto:") || href.startsWith("tel:");

  if (externalHttp) {
    return (
      <a href={href} className={styles} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  if (nativeScheme) {
    return (
      <a href={href} className={styles}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={styles}>
      {children}
    </Link>
  );
}
