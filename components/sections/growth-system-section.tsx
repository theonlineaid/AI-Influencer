import { growthSystem } from "@/lib/content";
import { ButtonLink } from "@/components/ui/button-link";
import { FadeIn } from "@/components/ui/fade-in";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { HoverLift } from "@/components/ui/hover-lift";

export function GrowthSystemSection() {
  return (
    <Section
      id={growthSystem.id}
      className="border-t border-white/[0.06] bg-zinc-950 py-16 md:py-24"
      containerClassName="max-w-7xl"
    >
      <SectionHeading
        title={growthSystem.title}
        subtitle={growthSystem.subtitle}
        theme="dark"
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {growthSystem.pillars.map((p, i) => (
          <FadeIn key={p.letter} delay={i * 0.06}>
            <HoverLift className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-white/[0.08] bg-zinc-900/40 p-6 backdrop-blur-sm">
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-600/40 text-xl font-bold text-cyan-300 ring-1 ring-cyan-500/30">
                  {p.letter}
                </span>
                <h3 className="mt-4 text-lg font-bold text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {p.body}
                </p>
              </div>
            </HoverLift>
          </FadeIn>
        ))}
      </div>
      <FadeIn className="mt-12 text-center">
        <ButtonLink
          href={growthSystem.cta.href}
          variant="blueSolid"
          className="px-10 py-3.5 text-base"
        >
          {growthSystem.cta.label}
        </ButtonLink>
      </FadeIn>
    </Section>
  );
}
