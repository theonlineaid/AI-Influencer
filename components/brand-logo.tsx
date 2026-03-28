import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/content";

type BrandLogoProps = {
  /** Header: compact. Footer: slightly larger. */
  variant?: "header" | "footer";
  className?: string;
};

export function BrandLogo({ variant = "header", className = "" }: BrandLogoProps) {
  const isHeader = variant === "header";
  const photoClass = isHeader
    ? "h-9 w-9 sm:h-10 sm:w-10"
    : "h-12 w-12 md:h-14 md:w-14";

  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 items-center gap-2.5 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80 sm:gap-3 ${className}`}
    >
      <span className="relative shrink-0 overflow-hidden rounded-full ring-2 ring-white/40 ring-offset-2 ring-offset-[var(--brand)]">
        <Image
          src={site.logo.src}
          alt=""
          width={site.logo.width}
          height={site.logo.height}
          className={`${photoClass} object-cover object-top`}
          sizes={isHeader ? "40px" : "56px"}
          priority={isHeader}
          aria-hidden
        />
      </span>
      <span className="text-base font-bold tracking-tight text-white sm:text-lg">
        {site.name}
      </span>
    </Link>
  );
}
