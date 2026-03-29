import { hero, trustedBy } from "@/lib/content";
import { ButtonLink } from "@/components/ui/button-link";
import { FadeIn } from "@/components/ui/fade-in";
import { HeroEmailForm } from "@/components/ui/hero-email-form";
import { LogoMarquee } from "@/components/ui/logo-marquee";

export function HeroSection() {
  return (
    <section className="ai-aurora pb-16 pt-10 md:pb-24 md:pt-14">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <FadeIn>
          <h1 className="mx-auto max-w-4xl text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.12]">
            {hero.headlineLines.map((line, i) => (
              <span key={i} className="block text-balance">
                {line}
              </span>
            ))}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg font-medium text-zinc-200 md:text-xl">
            {hero.subheadline}
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base font-semibold leading-relaxed text-cyan-200/80 md:text-lg">
            {hero.punchy}
          </p>
          <p className="mx-auto mt-6 max-w-2xl rounded-2xl border border-violet-500/30 bg-violet-950/40 px-5 py-4 text-pretty text-base font-semibold leading-relaxed text-zinc-100 shadow-[0_0_40px_-10px_rgba(139,92,246,0.4)] backdrop-blur-sm md:text-lg">
            {hero.guarantee}
          </p>
        </FadeIn>

        <FadeIn delay={0.06} className="mt-10">
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-cyan-500/20 bg-black/40 shadow-[0_0_60px_-15px_rgba(34,211,238,0.25)] ring-1 ring-violet-500/20">
            <div className="relative aspect-video w-full">
              <iframe
                src={hero.youtubeEmbed.src}
                title={hero.youtubeEmbed.title}
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mx-auto mt-8 flex w-full max-w-xl flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
            <ButtonLink
              href={hero.campaignCta.href}
              variant="whiteSolid"
              className="w-full px-8 py-3.5 text-base sm:w-auto sm:min-w-[220px]"
            >
              {hero.campaignCta.label}
            </ButtonLink>
            <ButtonLink
              href={hero.strategyCallCta.href}
              variant="whiteOutline"
              className="w-full bg-transparent px-8 py-3.5 text-base sm:w-auto sm:min-w-[220px]"
            >
              {hero.strategyCallCta.label}
            </ButtonLink>
          </div>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-sm font-medium leading-relaxed text-zinc-400 md:text-base">
            {hero.guaranteeFootnote}
          </p>
          <HeroEmailForm />
        </FadeIn>

        <FadeIn delay={0.14} className="mt-14 border-t border-white/10 pt-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400/80">
            {trustedBy.title}
          </p>
          <div className="mt-8">
            <LogoMarquee logos={trustedBy.logos} />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
