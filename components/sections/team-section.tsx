import Image from "next/image";
import { ourTeam } from "@/lib/content";
import type { ImageRef } from "@/lib/content";
import { FadeIn } from "@/components/ui/fade-in";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { HoverLift } from "@/components/ui/hover-lift";

function initialsFromName(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

function TeamAvatar({
  name,
  image,
}: {
  name: string;
  image?: ImageRef;
}) {
  if (image) {
    return (
      <div className="mx-auto h-28 w-28 overflow-hidden rounded-full border-2 border-violet-500/35 bg-violet-950/50 p-0.5 shadow-[0_0_40px_-12px_rgba(139,92,246,0.45)]">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="h-full w-full rounded-full object-cover object-top"
          sizes="112px"
        />
      </div>
    );
  }
  return (
    <div
      className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border-2 border-violet-500/35 bg-gradient-to-br from-violet-600/40 to-cyan-500/25 text-2xl font-bold tracking-tight text-white shadow-[0_0_40px_-12px_rgba(139,92,246,0.45)]"
      aria-hidden
    >
      {initialsFromName(name)}
    </div>
  );
}

export function TeamSection() {
  return (
    <Section
      id={ourTeam.id}
      className="ai-aurora border-t border-violet-500/20 py-16 md:py-24"
    >
      <SectionHeading
        eyebrow="Our team"
        title={ourTeam.title}
        subtitle={ourTeam.subtitle}
        theme="dark"
      />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {ourTeam.members.map((member, i) => (
          <FadeIn key={member.id} delay={i * 0.08}>
            <HoverLift className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-white/[0.08] bg-zinc-900/40 p-6 text-center shadow-[0_0_50px_-24px_rgba(99,102,241,0.35)] backdrop-blur-sm">
                <TeamAvatar name={member.name} image={member.image} />
                <h3 className="mt-5 text-lg font-bold text-white">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-cyan-400/90">
                  {member.role}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                  {member.bio}
                </p>
              </article>
            </HoverLift>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
