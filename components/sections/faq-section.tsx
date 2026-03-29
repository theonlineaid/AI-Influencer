import { faq } from "@/lib/content";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function FaqSection() {
  return (
    <Section
      id={faq.id}
      className="border-t border-white/[0.06] bg-zinc-950 py-16 md:py-24"
    >
      <SectionHeading title={faq.title} theme="dark" />
      <div className="mx-auto max-w-3xl">
        <FaqAccordion items={faq.items} theme="dark" />
      </div>
    </Section>
  );
}
