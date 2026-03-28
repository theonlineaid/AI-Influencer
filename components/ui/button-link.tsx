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
  "inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)]";

const variants: Record<Variant, string> = {
  blueSolid:
    "bg-[var(--brand)] text-white shadow-sm hover:bg-[var(--brand-hover)]",
  whiteSolid: "bg-white text-[var(--brand)] shadow-sm hover:bg-zinc-100",
  whiteOutline:
    "border-2 border-white text-white hover:bg-white/10",
  blueOutline:
    "border-2 border-[var(--brand)] text-[var(--brand)] hover:bg-blue-50",
  whiteGhost: "text-white underline-offset-4 hover:underline",
  blueGhost:
    "text-[var(--brand)] underline-offset-4 hover:underline",
};

export function ButtonLink({
  href,
  children,
  variant = "blueSolid",
  className = "",
}: ButtonLinkProps) {
  const styles = `${base} ${variants[variant]} ${className}`;
  const external = href.startsWith("http");

  if (external) {
    return (
      <a href={href} className={styles} target="_blank" rel="noopener noreferrer">
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
