import { SiteHeader } from "@/components/site-header";
import { AboutSection } from "@/components/sections/about-section";
import { BookingSection } from "@/components/sections/booking-section";
import { CaseStudiesSection } from "@/components/sections/case-studies-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FlywheelSection } from "@/components/sections/flywheel-section";
import { GrowthSystemSection } from "@/components/sections/growth-system-section";
import { HeroSection } from "@/components/sections/hero-section";
import { IncludedSection } from "@/components/sections/included-section";
import { PainPointsSection } from "@/components/sections/pain-points-section";
import { SiteFooter } from "@/components/sections/site-footer";

export default function Home() {
  return (
    <div className="min-h-full bg-white text-zinc-900">
      <SiteHeader />
      <main>
        <HeroSection />
        <PainPointsSection />
        <FlywheelSection />
        <GrowthSystemSection />
        <IncludedSection />
        <CaseStudiesSection />
        <AboutSection />
        <FaqSection />
        <BookingSection />
      </main>
      <SiteFooter />
    </div>
  );
}
