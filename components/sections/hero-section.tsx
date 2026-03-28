import Image from "next/image";
import Link from "next/link";
import { hero, trustedBy } from "@/lib/content";
import { ButtonLink } from "@/components/ui/button-link";
import { FadeIn } from "@/components/ui/fade-in";
import { HeroEmailForm } from "@/components/ui/hero-email-form";
import { Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="bg-[var(--brand)] pb-16 pt-10 md:pb-24 md:pt-14">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <FadeIn>
          <h1 className="mx-auto max-w-4xl text-balance text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            {hero.headline}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-blue-100 md:text-lg">
            {hero.subheadline}
          </p>
        </FadeIn>

        <FadeIn delay={0.06} className="mt-10">
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border-4 border-white/25 bg-black/20 shadow-2xl">
            <div className="relative aspect-video w-full">
              <Image
                src={hero.videoPoster.src}
                alt={hero.videoPoster.alt}
                width={hero.videoPoster.width}
                height={hero.videoPoster.height}
                className="h-full w-full object-cover"
                priority
              />
              <button
                type="button"
                className="absolute inset-0 flex items-center justify-center bg-black/25 transition-colors hover:bg-black/35"
                aria-label="Play video"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-[var(--brand)] shadow-lg md:h-20 md:w-20">
                  <Play className="ml-1 h-8 w-8 fill-current md:h-9 md:w-9" />
                </span>
              </button>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <ButtonLink
              href={hero.primaryCta.href}
              variant="whiteSolid"
              className="min-w-[200px] px-8 py-3.5 text-base"
            >
              {hero.primaryCta.label}
            </ButtonLink>
          </div>
          <Link
            href={hero.secondaryCta.href}
            className="mt-4 inline-block text-sm font-medium text-white underline-offset-4 hover:underline"
          >
            {hero.secondaryCta.label}
          </Link>
          <HeroEmailForm />
        </FadeIn>

        <FadeIn delay={0.14} className="mt-14 border-t border-white/15 pt-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-200/90">
            {trustedBy.title}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-90 grayscale">
            {trustedBy.logos.map((name) => (
              <span
                key={name}
                className="text-sm font-semibold text-white md:text-base"
              >
                {name}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
