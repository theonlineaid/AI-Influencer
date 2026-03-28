import Link from "next/link";
import { nav, site } from "@/lib/content";
import { ButtonLink } from "@/components/ui/button-link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[var(--brand)]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-base font-bold tracking-tight text-white"
        >
          {site.name}
        </Link>
        <ButtonLink
          href={nav.cta.href}
          variant="whiteOutline"
          className="bg-transparent px-4 py-2 text-sm whitespace-nowrap sm:px-5"
        >
          {nav.cta.label}
        </ButtonLink>
      </div>
    </header>
  );
}
