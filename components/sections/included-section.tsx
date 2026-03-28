import { Check } from "lucide-react";
import { included } from "@/lib/content";
import { FadeIn } from "@/components/ui/fade-in";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function IncludedSection() {
  return (
    <Section id={included.id} className="bg-[var(--brand)] py-16 md:py-24">
      <SectionHeading title={included.title} theme="dark" />
      <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {included.items.map((text, i) => (
          <FadeIn key={text} delay={i * 0.04}>
            <div className="flex items-start gap-3 rounded-2xl bg-white p-5 shadow-sm">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[var(--brand)]">
                <Check className="h-4 w-4" strokeWidth={3} aria-hidden />
              </span>
              <p className="text-sm font-semibold leading-snug text-zinc-900">
                {text}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
      <FadeIn delay={0.12}>
        <p className="mt-12 text-center text-lg font-bold text-white">
          {included.footnote}
        </p>
      </FadeIn>
    </Section>
  );
}
