import { faq } from "@/lib/content";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function FaqSection() {
  return (
    <Section id={faq.id} className="bg-white py-16 md:py-24">
      <SectionHeading title={faq.title} theme="light" />
      <div className="mx-auto max-w-3xl">
        <FaqAccordion items={faq.items} />
      </div>
    </Section>
  );
}
