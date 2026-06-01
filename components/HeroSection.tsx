import Image from 'next/image';
import { Shield, Hammer, Clock, Users, Star } from 'lucide-react';
import EstimateForm from '@/components/EstimateForm';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[100vh] lg:min-h-[700px] overflow-hidden"
      aria-label="Hero — Professional fence installation in Shrewsbury MA"
    >
      {/* Layer 1 — Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg-v3.png"
          alt="Beautiful wooden fence installation in a warm residential backyard"
          fill
          className="object-cover"
          priority
          quality={90}
          sizes="100vw"
        />
      </div>

      {/* Layer 2 — Softened Overlay (GPU Optimized without blur) */}
      <div className="absolute inset-0 bg-forest/75" />

      {/* Layer 3 — Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 pt-32 pb-16 flex flex-col justify-center min-h-[100vh] lg:min-h-[700px]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Copy & Badges */}
          <div className="flex-1 text-center lg:text-left w-full">
            {/* Typographic Kicker */}
            <div className="flex items-center gap-2.5 mb-3.5 w-full">
              <span className="flex-1 h-[0.5px] bg-cedar/40" aria-hidden="true"></span>
              <span className="text-[9.5px] sm:text-[10.5px] tracking-[0.2em] uppercase text-cedar font-medium whitespace-nowrap font-sans">
                Security &middot; Privacy &middot; Value
              </span>
              <span className="flex-1 h-[0.5px] bg-cedar/40" aria-hidden="true"></span>
            </div>

            <h1 className="text-[clamp(2.75rem,5.5vw,4.5rem)] font-serif font-bold text-offwhite leading-[1.05] mb-6 drop-shadow-md tracking-tight">
              Complete peace of mind starts with the<br className="hidden sm:block" />
              <span className="text-cedar italic drop-shadow-lg inline-block mt-1 sm:mt-2">right fence.</span>
            </h1>

            <p className="text-[17px] sm:text-[19px] text-offwhite/95 font-medium leading-relaxed mb-10 max-w-[560px] mx-auto lg:mx-0 drop-shadow-sm">
              Claudinei and Raimundo build every fence themselves across Shrewsbury and Central Massachusetts. No subcontractors, no handoffs, just owner-built work and a free estimate from the people who will actually be on your property.
            </p>

            {/* Redesigned Sub-parts (Mimicking Reference Image) */}
            <div className="flex flex-col items-center lg:items-start gap-6 mt-4">
              
              {/* Wood Banner Tier completely removed per plan */}
              {/* Stats Row Tier (Option B - Tabs on all) */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-2.5">
                
                {/* 10 Years Tab */}
                <div className="flex items-center gap-2 bg-black/60 border border-white/10 rounded-full px-3.5 py-1.5 text-white/90 text-[13px] shadow-sm">
                  <span className="text-cedar"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg></span>
                  <span className="font-medium font-sans tracking-wide">10 Years of Experience</span>
                </div>

                {/* 24/7 Estimates Tab (with streak effect) */}
                <div className="animate-streak flex items-center gap-2 bg-black/80 border border-cedar/40 rounded-full px-3.5 py-1.5 text-white text-[13px] shadow-lg">
                  <Clock size={16} className="text-cedar" />
                  <span className="font-semibold font-sans tracking-wide">24/7 Estimates</span>
                </div>

                {/* 5-Star Rated Tab */}
                <div className="flex items-center gap-2 bg-black/60 border border-white/10 rounded-full px-3.5 py-1.5 text-white/90 text-[13px] shadow-sm">
                  <div className="flex items-center gap-[2px]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="text-cedar" fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <span className="font-medium font-sans tracking-wide">5-Star Rated</span>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="w-full lg:w-[440px] flex-shrink-0 relative">
            <EstimateForm variant="hero" />
            <div className="mt-4 text-center">
              <p className="text-offwhite/90 text-[14px] font-medium drop-shadow-sm">
                Prefer to call? <a href="tel:+17743862977" className="font-bold underline hover:text-cedar drop-shadow-md">(774) 386-2977</a><br className="hidden sm:block" />
                Claudinei or Raimundo answer directly.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
