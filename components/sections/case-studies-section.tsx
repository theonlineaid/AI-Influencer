import { caseStudies } from "@/lib/content";
import { ButtonLink } from "@/components/ui/button-link";
import { FadeIn } from "@/components/ui/fade-in";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { HoverLift } from "@/components/ui/hover-lift";

export function CaseStudiesSection() {
  return (
    <Section id={caseStudies.id} className="bg-white py-16 md:py-24">
      <SectionHeading
        eyebrow="Results"
        title={caseStudies.title}
        subtitle={caseStudies.subtitle}
        theme="light"
      />
      <div className="grid gap-8 lg:grid-cols-3">
        {caseStudies.cases.map((c, i) => (
          <FadeIn key={c.id} delay={i * 0.08}>
            <HoverLift className="h-full">
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
                <div className="border-b border-zinc-100 bg-zinc-50 px-5 py-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-[var(--brand)]">
                    {c.platform}
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-zinc-900">
                    {c.title}
                  </h3>
                </div>
                <div className="aspect-[4/3] bg-gradient-to-br from-zinc-100 to-zinc-200" />
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-sm text-zinc-600">{c.body}</p>
                  <dl className="mt-6 grid grid-cols-3 gap-2 border-t border-zinc-100 pt-4 text-center">
                    <div>
                      <dt className="text-[10px] font-semibold uppercase tracking-wide text-zinc-400">
                        Views
                      </dt>
                      <dd className="mt-1 text-lg font-bold text-zinc-900">
                        {c.metrics.views}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[10px] font-semibold uppercase tracking-wide text-zinc-400">
                        Signups
                      </dt>
                      <dd className="mt-1 text-lg font-bold text-zinc-900">
                        {c.metrics.signups}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[10px] font-semibold uppercase tracking-wide text-zinc-400">
                        ROI
                      </dt>
                      <dd className="mt-1 text-lg font-bold text-zinc-900">
                        {c.metrics.roi}
                      </dd>
                    </div>
                  </dl>
                  <ButtonLink
                    href="#book-call"
                    variant="blueOutline"
                    className="mt-6 w-full py-2.5 text-sm"
                  >
                    View case study
                  </ButtonLink>
                </div>
              </article>
            </HoverLift>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
