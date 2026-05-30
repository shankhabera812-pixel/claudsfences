import Image from 'next/image';
import { Star, ChevronDown } from 'lucide-react';
import AccentButton from '@/components/ui/AccentButton';
import HeroMicroForm from '@/components/HeroMicroForm';

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
            Fence Installation You Can Trust — Shrewsbury, MA
          </h1>

          {/* Sub-headline */}
          <p className="text-[16px] md:text-[20px] text-white font-normal mb-4">
            Wood, vinyl, chain link, and aluminum fencing across Central Massachusetts — installed right, the first time.
          </p>

          {/* Trust micro-line with star icons */}
          <p className="text-[14px] text-white/80 mb-8 flex flex-wrap items-center justify-center md:justify-start gap-1">
            <span aria-hidden="true" className="inline-flex gap-0.5 mr-1.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={13}
                  fill="var(--color-accent)"
                  color="var(--color-accent)"
                />
              ))}
            </span>
            <span>
              Licensed &amp; Insured · 5-Star Rated · Serving Worcester County Since 2020
            </span>
          </p>

          <HeroMicroForm />
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
