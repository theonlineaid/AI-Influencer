import { flipBanner, painPoints } from "@/lib/content";
import { ButtonLink } from "@/components/ui/button-link";
import { FadeIn } from "@/components/ui/fade-in";
import { PainIconGlyph } from "@/components/ui/pain-icon";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { HoverLift } from "@/components/ui/hover-lift";

export function PainPointsSection() {
  return (
    <>
      <Section className="bg-white py-16 md:py-24">
        <SectionHeading
          title={painPoints.title}
          subtitle={painPoints.subtitle}
          theme="light"
        />
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {painPoints.items.map((item, i) => (
            <FadeIn key={item.id} delay={i * 0.06}>
              <HoverLift className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-rose-100 bg-rose-50/80 p-6 shadow-sm">
                  <PainIconGlyph name={item.icon} />
                  <h3 className="mt-4 text-lg font-bold text-zinc-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                    {item.body}
                  </p>
                </div>
              </HoverLift>
            </FadeIn>
          ))}
        </div>
      </Section>

      <div className="bg-[var(--brand)] py-12 md:py-14">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-2xl font-bold text-white md:text-3xl">
              {flipBanner.headline}
            </p>
            <div className="mt-6">
              <ButtonLink
                href={flipBanner.cta.href}
                variant="whiteSolid"
                className="px-8"
              >
                {flipBanner.cta.label}
              </ButtonLink>
            </div>
          </FadeIn>
        </div>
      </div>
    </>
  );
}
