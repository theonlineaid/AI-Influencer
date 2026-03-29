import { Check } from "lucide-react";
import { included } from "@/lib/content";
import { FadeIn } from "@/components/ui/fade-in";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function IncludedSection() {
  return (
    <Section
      id={included.id}
      className="relative overflow-hidden border-t border-violet-500/20 bg-gradient-to-b from-violet-950/40 via-[var(--surface)] to-indigo-950/50 py-16 md:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(139,92,246,0.2),transparent)]"
        aria-hidden
      />
      <div className="relative">
        <SectionHeading title={included.title} theme="dark" />
        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {included.items.map((text, i) => (
            <FadeIn key={text} delay={i * 0.04}>
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-zinc-950/60 p-5 shadow-lg shadow-black/20 backdrop-blur-sm">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-400 ring-1 ring-cyan-500/25">
                  <Check className="h-4 w-4" strokeWidth={3} aria-hidden />
                </span>
                <p className="text-sm font-semibold leading-snug text-zinc-200">
                  {text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.12}>
          <p className="mt-12 text-center text-lg font-bold text-cyan-200/90">
            {included.footnote}
          </p>
        </FadeIn>
      </div>
    </Section>
  );
}
