import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import TrustBar from '@/components/TrustBar';
import ServicesSection from '@/components/ServicesSection';
import PortfolioGallery from '@/components/PortfolioGallery';
import CtaBridge from '@/components/CtaBridge';
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
        <ServicesSection />
        <PortfolioGallery />
        <CtaBridge />
        <LeadCaptureForm />
        <ContactFooter />
      </main>
      <FloatingCta />
    </>
  );
}
