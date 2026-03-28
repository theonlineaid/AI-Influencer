import Link from "next/link";
import { footer, site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--brand)] py-14 text-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-white"
        >
          {site.name}
        </Link>
        <p className="mt-4 text-sm text-blue-100/90">{footer.copyright}</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-white/90">
          {footer.socials.map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              {s.label}
            </a>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-6 text-sm text-blue-100/80">
          {footer.legal.map((l) => (
            <a key={l.label} href={l.href} className="hover:text-white">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
