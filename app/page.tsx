import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import TrustBar from '@/components/TrustBar';
import AboutSection from '@/components/AboutSection';
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
        <AboutSection />
        <ServicesSection />
        <PortfolioGallery />
        <LeadCaptureForm />
        <ContactFooter />
      </main>
      <FloatingCta />
    </>
  );
}
