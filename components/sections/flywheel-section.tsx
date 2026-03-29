import { Check } from "lucide-react";
import { flywheel } from "@/lib/content";
import { FadeIn } from "@/components/ui/fade-in";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function FlywheelSection() {
  return (
    <Section
      id={flywheel.id}
      className="border-t border-white/[0.06] bg-[var(--surface)] py-16 md:py-24"
    >
      <SectionHeading
        title={flywheel.title}
        subtitle={flywheel.subtitle}
        theme="dark"
        titleClassName="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent"
      />
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
        {flywheel.items.map((item, i) => (
          <FadeIn key={item.id} delay={i * 0.06}>
            <div className="flex gap-4 rounded-2xl border border-white/[0.08] bg-zinc-900/50 p-6 shadow-[0_0_40px_-24px_rgba(99,102,241,0.35)] backdrop-blur-sm">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/20">
                <Check className="h-5 w-5" strokeWidth={2.5} aria-hidden />
              </span>
              <div>
                <h3 className="font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {item.body}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
