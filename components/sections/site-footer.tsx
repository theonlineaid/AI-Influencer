import { BrandLogo } from "@/components/brand-logo";
import { footer } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.06] bg-zinc-950 py-14 text-center">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 sm:px-6 lg:px-8">
        <BrandLogo variant="footer" className="justify-center" />
        <p className="mt-4 text-sm text-zinc-500">{footer.copyright}</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-zinc-400">
          {footer.socials.map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-cyan-400"
            >
              {s.label}
            </a>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-600">
          {footer.legal.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="hover:text-zinc-400"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
