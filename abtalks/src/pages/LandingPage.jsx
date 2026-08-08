import PageTransition from "../components/motion/PageTransition";
import RevealSection from "../components/motion/RevealSection";
import HeroSection from "../components/landing/HeroSection";
import TrustSection from "../components/landing/TrustSection";
import WhySection from "../components/landing/WhySection";
import HowItWorksSection from "../components/landing/HowItWorksSection";
import BenefitsSection from "../components/landing/BenefitsSection";
import TestimonialsSection from "../components/landing/TestimonialsSection";
import CTASection from "../components/landing/CTASection";
import FooterSection from "../components/landing/FooterSection";

function LandingPage() {
  const visitorState = "returning";

  return (
    <PageTransition className="flex flex-col gap-6 pb-8">
      <HeroSection visitorState={visitorState} />
      <RevealSection>
        <TrustSection />
      </RevealSection>
      <RevealSection delay={0.04}>
        <WhySection />
      </RevealSection>
      <RevealSection delay={0.06}>
        <HowItWorksSection />
      </RevealSection>
      <RevealSection delay={0.08}>
        <BenefitsSection />
      </RevealSection>
      <RevealSection delay={0.1}>
        <TestimonialsSection />
      </RevealSection>
      <RevealSection delay={0.12}>
        <CTASection />
      </RevealSection>
      <FooterSection />
    </PageTransition>
  );
}

export default LandingPage;
