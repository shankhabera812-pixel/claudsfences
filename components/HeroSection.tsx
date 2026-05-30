import Image from 'next/image';
import { Award, Clock, Star, ChevronDown } from 'lucide-react';
import EstimateForm from '@/components/EstimateForm';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[100vh] lg:min-h-[85vh] lg:min-h-[auto]"
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
      </div>

      {/* Layer 2 — Gradient Overlay */}
      {/* Uniform overlay for better contrast since form is now on the right */}
      <div className="absolute inset-0 bg-[rgba(10,25,47,0.75)]" />

      {/* Layer 3 — Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 pt-32 pb-20 flex flex-col justify-center min-h-[100vh] lg:min-h-[auto] lg:h-full lg:pt-32 lg:pb-32">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center lg:items-center">
          
          {/* Left Column: Copy & Badges */}
          <div className="flex-1 text-center lg:text-left w-full">
            {/* H1 — Primary headline */}
            <h1 className="text-[clamp(2.25rem,5vw,3.75rem)] font-bold text-white leading-[1.1] mb-5">
              Fence Installation You Can Trust
              <span className="block text-[clamp(1.25rem,3vw,1.75rem)] mt-2 font-semibold text-white/90">
                Shrewsbury &amp; Central Massachusetts
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-[16px] md:text-[20px] text-white font-normal mb-8">
              Wood, vinyl, chain link, and aluminum fencing across Central Massachusetts — installed right, the first time.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6">
              
              <div className="flex items-center gap-2">
                <Award size={18} className="text-accent" />
                <span className="text-white text-[13px] sm:text-[14px] font-medium">10 Years of Experience</span>
              </div>
              
              <div className="hidden sm:block text-white/30">·</div>
              
              <div className="flex items-center gap-2 relative overflow-hidden group">
                <Clock size={18} className="text-accent" />
                <span className="text-white text-[13px] sm:text-[14px] font-medium relative z-10">
                  24/7 Estimates
                </span>
                {/* Shimmer effect overlay */}
                <div 
                  className="absolute inset-0 z-20 pointer-events-none" 
                  style={{
                    backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)',
                    backgroundSize: '200% 100%',
                    animation: 'var(--animate-shimmer)'
                  }} 
                />
              </div>
              
              <div className="hidden sm:block text-white/30">·</div>
              
              <div className="flex items-center gap-2">
                <Star size={18} className="text-accent" fill="currentColor" />
                <span className="text-white text-[13px] sm:text-[14px] font-medium">5-Star Rated</span>
              </div>
            </div>
          </div>

          {/* Right Column: Full Lead Form */}
          <div className="w-full lg:w-[500px] xl:w-[540px] flex-shrink-0">
            <EstimateForm variant="hero" />
          </div>

        </div>
      </div>
    </section>
  );
}
