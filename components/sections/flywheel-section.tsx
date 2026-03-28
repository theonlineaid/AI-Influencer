import { Check } from "lucide-react";
import { flywheel } from "@/lib/content";
import { FadeIn } from "@/components/ui/fade-in";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function FlywheelSection() {
  return (
    <Section id={flywheel.id} className="bg-white py-16 md:py-24">
      <SectionHeading
        title={flywheel.title}
        subtitle={flywheel.subtitle}
        theme="light"
        titleClassName="text-[var(--brand)]"
      />
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
        {flywheel.items.map((item, i) => (
          <FadeIn key={item.id} delay={i * 0.06}>
            <div className="flex gap-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--brand)] text-white">
                <Check className="h-5 w-5" strokeWidth={2.5} aria-hidden />
              </span>
              <div>
                <h3 className="font-bold text-zinc-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
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
