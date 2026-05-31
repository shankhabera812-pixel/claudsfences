import Image from 'next/image';
import { Award, Clock, Star, ChevronDown } from 'lucide-react';
import EstimateForm from '@/components/EstimateForm';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[100vh] lg:min-h-[700px] lg:h-[100vh] lg:max-h-[900px] overflow-hidden"
      aria-label="Hero — Professional fence installation in Shrewsbury MA"
    >
      {/* Layer 1 — Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg-v2.jpg"
          alt="Beautiful wooden fence installation in a natural residential area"
          fill
          className="object-cover"
          priority
          quality={85}
          sizes="100vw"
        />
      </div>

      {/* Layer 2 — Gradient Overlay & Glow Orbs */}
      <div className="absolute inset-0 bg-[rgba(10,25,47,0.8)] backdrop-blur-[2px]" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />

      {/* Layer 3 — Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 pt-28 pb-16 flex flex-col justify-center h-full">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-10 items-center lg:items-center">
          
          {/* Left Column: Copy & Badges */}
          <div className="flex-1 text-center lg:text-left w-full">
            {/* Location Kicker with Modern Animated Glowing Border */}
            <div className="mb-6 inline-flex relative rounded-full mx-auto lg:mx-0 p-[1.5px] overflow-hidden shadow-[0_0_20px_rgba(var(--color-accent),0.2)]">
              {/* Spinning gradient background */}
              <div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,var(--color-accent)_50%,transparent_100%)] opacity-80" />
              {/* Inner pill */}
              <div className="relative flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0f172a] backdrop-blur-md w-full">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_var(--color-accent)]"></span>
                <span className="text-white/95 text-[12px] sm:text-[13px] font-semibold uppercase tracking-widest drop-shadow-sm">
                  Serving Shrewsbury &amp; Central MA
                </span>
              </div>
            </div>

            {/* Main Headline Block (Inspo-style, unique copy) */}
            <h1 className="text-[clamp(2.75rem,5vw,4.5rem)] font-bold text-white leading-[1.1] tracking-tight drop-shadow-lg mb-6 text-center lg:text-left relative">
              Complete peace of mind demands the <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-accent bg-[length:200%_auto] animate-[pulse_4s_ease-in-out_infinite]">perfect fence.</span>
            </h1>

            {/* Sub-headline (Real, captivating copy) */}
            <p className="text-[16px] sm:text-[19px] text-white/80 font-normal leading-relaxed mb-8 max-w-[540px] text-center lg:text-left mx-auto lg:mx-0 drop-shadow-md">
              Protecting what matters most starts at the property line. Get premium, long-lasting fence installation built by hands-on owners who never cut corners.
            </p>

            {/* Unified Wood-Accented Value Tab with Gold Accents */}
            <div className="mb-10 inline-flex items-center justify-center lg:justify-start mx-auto lg:mx-0 relative overflow-hidden group rounded-[6px] shadow-[0_8px_25px_rgba(0,0,0,0.5)] border border-[#5C3A21] border-b-[3px] border-b-[#D4AF37]">
              {/* Textured Oak Background Base */}
              <div 
                className="absolute inset-0 bg-[#8B5A2B]"
                style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/wood-pattern.png')" }}
              ></div>
              {/* Edge Burn / Shading for realism */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-black/40 mix-blend-overlay pointer-events-none"></div>
              {/* Inner Gold Ring */}
              <div className="absolute inset-0 border border-[#D4AF37]/40 rounded-[6px] pointer-events-none"></div>
              
              <div className="relative z-10 px-6 py-2.5">
                <span className="text-[13px] sm:text-[14px] text-[#FFF8DC] font-bold tracking-wide flex items-center gap-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                  Enhanced Security <span className="text-[#FFDF00] drop-shadow-[0_0_4px_#D4AF37] text-[16px]">•</span> Total Privacy <span className="text-[#FFDF00] drop-shadow-[0_0_4px_#D4AF37] text-[16px]">•</span> Lasting Value
                </span>
              </div>
              {/* Streaking Modernism Shimmer */}
              <div 
                className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                style={{
                  backgroundImage: 'linear-gradient(110deg, transparent 20%, rgba(255,255,255,0.3) 50%, transparent 80%)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 2s infinite'
                }} 
              />
            </div>

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

          {/* Right Column: Full Lead Form with Streaking Glassmorphism */}
          <div className="w-full lg:w-[500px] xl:w-[560px] flex-shrink-0 lg:animate-[float_6s_ease-in-out_infinite] relative group">
            {/* Background Streaking Glass Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 via-white/10 to-accent/20 rounded-[12px] blur-md opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative backdrop-blur-xl bg-white/5 p-1.5 rounded-[12px] shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-white/20 overflow-hidden">
              {/* Diagonal Shimmer Streak */}
              <div 
                className="absolute -inset-full z-0 pointer-events-none opacity-50" 
                style={{
                  backgroundImage: 'linear-gradient(115deg, transparent 20%, rgba(255,255,255,0.1) 45%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.1) 55%, transparent 80%)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 4s infinite linear'
                }} 
              />
              <div className="relative z-10">
                <EstimateForm variant="hero" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
