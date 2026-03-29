import { BrandLogo } from "@/components/brand-logo";
import { nav } from "@/lib/content";
import { ButtonLink } from "@/components/ui/button-link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-zinc-950/75 backdrop-blur-xl supports-[backdrop-filter]:bg-zinc-950/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <BrandLogo variant="header" />
        <ButtonLink
          href={nav.cta.href}
          variant="whiteOutline"
          className="border-violet-500/40 px-4 py-2 text-sm whitespace-nowrap sm:px-5"
        >
          {nav.cta.label}
        </ButtonLink>
      </div>
    </header>
  );
}
