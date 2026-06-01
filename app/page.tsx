import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import PainPointSection from '@/components/PainPointSection';
import WhatYouGainSection from '@/components/WhatYouGainSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioGallery from '@/components/PortfolioGallery';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import LeadCaptureForm from '@/components/LeadCaptureForm';
import ContactFooter from '@/components/ContactFooter';
import FloatingCta from '@/components/FloatingCta';

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <PainPointSection />
        <WhatYouGainSection />
        <AboutSection />
        <div className="section-divider" />
        <PortfolioGallery />
        <div className="section-divider" />
        <TestimonialsSection />
        <ServicesSection />
        <FAQSection />
        <LeadCaptureForm />
        <ContactFooter />
      </main>
      <FloatingCta />
    </>
  );
}
