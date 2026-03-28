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
        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            href={nav.login.href}
            className="text-sm font-medium text-white/90 transition-colors hover:text-white"
          >
            {nav.login.label}
          </Link>
          <ButtonLink
            href={nav.cta.href}
            variant="whiteSolid"
            className="px-4 py-2 text-sm"
          >
            {nav.cta.label}
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
