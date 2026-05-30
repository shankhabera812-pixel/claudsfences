import Image from 'next/image';
import { Star, ChevronDown } from 'lucide-react';
import OrangeButton from '@/components/ui/OrangeButton';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[100vh] lg:min-h-[85vh]"
      aria-label="Hero — Professional fence installation in Shrewsbury MA"
    >
      {/* Layer 1 — Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Finished fence installation by Claud's Fences, Shrewsbury MA"
          fill
          className="object-cover"
          priority
          quality={85}
          sizes="100vw"
        />
        {/* NOTE: hero-bg.jpg must be converted to WebP before deployment for optimal performance */}
      </div>

      {/* Layer 2 — Gradient Overlay */}
      {/* Desktop: left-to-right gradient; Mobile: uniform overlay */}
      <div
        className="absolute inset-0 bg-[rgba(10,25,47,0.65)] md:bg-transparent"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(10,25,47,0.75) 0%, rgba(10,25,47,0.75) 50%, rgba(10,25,47,0.0) 100%)',
        }}
      />
      {/* Mobile override via a separate div that only shows on small screens */}
      <div className="absolute inset-0 bg-[rgba(10,25,47,0.65)] md:hidden" />

      {/* Layer 3 — Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 pt-32 pb-20 flex flex-col min-h-[100vh] lg:min-h-[85vh] justify-center">
        <div className="md:max-w-[55%] text-center md:text-left">
          {/* H1 — Primary headline */}
          <h1 className="text-[clamp(2.25rem,5vw,3.75rem)] font-bold text-white leading-[1.1] mb-5">
            Professional Fence Installation in Shrewsbury, MA
          </h1>

          {/* Sub-headline */}
          <p className="text-[16px] md:text-[20px] text-white font-normal mb-4">
            Wood · Vinyl · Chain Link · Aluminum — Free Estimates Available 24/7
          </p>

          {/* Trust micro-line with star icons */}
          <p className="text-[14px] text-white/80 mb-8 flex flex-wrap items-center justify-center md:justify-start gap-1">
            <span aria-hidden="true" className="inline-flex gap-0.5 mr-1.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={13}
                  fill="#FF6B00"
                  color="#FF6B00"
                />
              ))}
            </span>
            <span>
              Licensed &amp; Insured · 5-Star Rated · Serving Worcester County Since 2020
            </span>
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-center justify-center md:justify-start">
            <OrangeButton size="lg" href="#contact" className="w-full sm:w-auto">
              Get Your Free Estimate
            </OrangeButton>

            <a
              href="tel:+17743862977"
              className="
                inline-flex items-center justify-center
                border-2 border-white text-white
                rounded-pill h-[56px] px-7
                text-[15px] font-semibold
                no-underline
                hover:bg-white/10 transition-colors duration-150
                w-full sm:w-auto text-center
              "
            >
              (774) 386-2977 — Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <ChevronDown
          size={28}
          className="text-white/50 animate-bounce-y"
        />
      </div>
    </section>
  );
}
