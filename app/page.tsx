import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import TrustBar from '@/components/TrustBar';
import WhyFenceSection from '@/components/WhyFenceSection';
import WhyUsSection from '@/components/WhyUsSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioGallery from '@/components/PortfolioGallery';
import LeadCaptureForm from '@/components/LeadCaptureForm';
import ContactFooter from '@/components/ContactFooter';
import FloatingCta from '@/components/FloatingCta';

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <TrustBar />
        <WhyFenceSection />
        <WhyUsSection />
        <ServicesSection />
        <PortfolioGallery />
        <LeadCaptureForm />
        <ContactFooter />
      </main>
      <FloatingCta />
    </>
  );
}
