import Image from "next/image";
import { Check } from "lucide-react";
import { about, founder } from "@/lib/content";
import { FadeIn } from "@/components/ui/fade-in";
import { Section } from "@/components/ui/section";

export function AboutSection() {
  return (
    <Section
      id={about.id}
      className="ai-aurora relative border-t border-violet-500/20 py-16 md:py-24"
    >
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <FadeIn>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-400/90">
            {about.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
            {about.title}
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-zinc-400">
            {about.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <ul className="mt-8 space-y-3">
            {about.bullets.map((b) => (
              <li key={b} className="flex gap-3 text-sm text-zinc-200 md:text-base">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-500/20 ring-1 ring-violet-500/40">
                  <Check
                    className="h-3.5 w-3.5 text-cyan-400"
                    strokeWidth={3}
                  />
                </span>
                {b}
              </li>
            ))}
          </ul>
        </FadeIn>
        <FadeIn delay={0.08} className="flex flex-col items-center">
          <div className="relative w-full max-w-sm">
            <div className="overflow-hidden rounded-full border-4 border-violet-500/30 bg-violet-950/50 p-1 shadow-[0_0_50px_-10px_rgba(139,92,246,0.5)]">
              <Image
                src={founder.image.src}
                alt={founder.image.alt}
                width={founder.image.width}
                height={founder.image.height}
                className="aspect-square w-full rounded-full object-cover object-top"
                sizes="(max-width: 1024px) 280px, 320px"
              />
            </div>
            <p className="mt-4 text-center text-lg font-bold text-white">
              {founder.name}
            </p>
            <p className="text-center text-sm text-zinc-400">
              {founder.title}
            </p>
            <p className="mt-2 text-center">
              <a
                href={founder.x.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-cyan-400/90 underline-offset-4 transition-colors hover:text-cyan-300 hover:underline"
              >
                {founder.x.handle}
              </a>
            </p>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
