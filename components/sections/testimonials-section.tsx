import { Quote } from "lucide-react";
import { testimonials } from "@/lib/content";
import { FadeIn } from "@/components/ui/fade-in";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { HoverLift } from "@/components/ui/hover-lift";

export function TestimonialsSection() {
  return (
    <Section
      id={testimonials.id}
      className="border-t border-white/[0.06] bg-[var(--surface)] py-16 md:py-24"
    >
      <SectionHeading
        eyebrow="Testimonials"
        title={testimonials.title}
        subtitle={testimonials.subtitle}
        theme="dark"
      />
      <div className="grid gap-8 lg:grid-cols-3">
        {testimonials.items.map((item, i) => (
          <FadeIn key={item.id} delay={i * 0.08}>
            <HoverLift className="h-full">
              <blockquote className="flex h-full flex-col rounded-2xl border border-white/[0.08] bg-zinc-900/50 p-6 shadow-[0_0_50px_-20px_rgba(34,211,238,0.12)] backdrop-blur-sm md:p-7">
                <Quote
                  className="h-9 w-9 shrink-0 text-violet-500/50"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <p className="mt-4 flex-1 text-pretty text-base leading-relaxed text-zinc-300">
                  “{item.quote}”
                </p>
                <footer className="mt-6 border-t border-white/[0.06] pt-5">
                  <p className="font-semibold text-white">{item.author}</p>
                  <p className="mt-0.5 text-sm text-zinc-500">
                    {item.role}
                    {item.company ? ` · ${item.company}` : null}
                  </p>
                </footer>
              </blockquote>
            </HoverLift>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
