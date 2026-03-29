import Image from "next/image";
import { caseStudies } from "@/lib/content";
import { ButtonLink } from "@/components/ui/button-link";
import { FadeIn } from "@/components/ui/fade-in";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { HoverLift } from "@/components/ui/hover-lift";

export function CaseStudiesSection() {
  return (
    <Section
      id={caseStudies.id}
      className="border-t border-white/[0.06] bg-[var(--surface)] py-16 md:py-24"
    >
      <SectionHeading
        eyebrow="Results"
        title={caseStudies.title}
        subtitle={caseStudies.subtitle}
        theme="dark"
      />
      <div className="grid gap-8 lg:grid-cols-3">
        {caseStudies.cases.map((c, i) => (
          <FadeIn key={c.id} delay={i * 0.08}>
            <HoverLift className="h-full">
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-zinc-900/50 shadow-[0_0_50px_-20px_rgba(99,102,241,0.25)] backdrop-blur-sm">
                <div className="border-b border-white/[0.06] bg-zinc-950/80 px-5 py-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-cyan-400/90">
                    {c.platform}
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-white">
                    {c.title}
                  </h3>
                </div>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-950">
                  <Image
                    src={c.image.src}
                    alt={c.image.alt}
                    width={c.image.width}
                    height={c.image.height}
                    className="h-full w-full object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 360px"
                    loading="lazy"
                    unoptimized={c.image.src.endsWith(".svg")}
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-sm text-zinc-400">{c.body}</p>
                  <dl className="mt-6 grid grid-cols-3 gap-2 border-t border-white/[0.06] pt-4 text-center">
                    <div>
                      <dt className="text-[10px] font-semibold uppercase tracking-wide text-zinc-500">
                        Views
                      </dt>
                      <dd className="mt-1 text-lg font-bold text-white">
                        {c.metrics.views}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[10px] font-semibold uppercase tracking-wide text-zinc-500">
                        Signups
                      </dt>
                      <dd className="mt-1 text-lg font-bold text-white">
                        {c.metrics.signups}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[10px] font-semibold uppercase tracking-wide text-zinc-500">
                        ROI
                      </dt>
                      <dd className="mt-1 text-lg font-bold text-white">
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
