import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/content";

type BrandLogoProps = {
  variant?: "header" | "footer";
  className?: string;
};

export function BrandLogo({ variant = "header", className = "" }: BrandLogoProps) {
  const isHeader = variant === "header";
  const box =
    isHeader
      ? "h-9 w-9 sm:h-10 sm:w-10"
      : "h-11 w-11 sm:h-12 sm:w-12 md:h-14 md:w-14";

  return (
    <Link
      href="/"
      aria-label={site.name}
      className={`inline-flex shrink-0 items-center gap-2.5 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400/60 sm:gap-3 ${className}`}
    >
      <span
        className={`relative shrink-0 overflow-hidden rounded-lg ring-1 ring-cyan-500/35 ring-offset-2 ring-offset-zinc-950 ${box}`}
      >
        <Image
          src={site.logo.src}
          alt=""
          width={site.logo.width}
          height={site.logo.height}
          className="h-full w-full object-cover object-top"
          sizes="(max-width: 640px) 36px, 56px"
          priority={isHeader}
          aria-hidden
        />
      </span>
      <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-300 bg-clip-text text-base font-extrabold tracking-tight text-transparent sm:text-lg">
        {site.name}
      </span>
    </Link>
  );
}
