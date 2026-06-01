'use client';

import React, { useEffect, useRef } from 'react';

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.2, rootMargin: '0px 0px -100px 0px' });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="why-us" 
      ref={sectionRef}
      className="about-section bg-forest py-24 lg:py-32 relative flex flex-col overflow-hidden group"
    >
      
      {/* Subtle Spotlight Effect that brightens on scroll */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/[0.03] via-transparent to-transparent transition-opacity duration-1000 opacity-0 group-[.is-visible]:opacity-100 group-[.is-visible]:from-white/[0.12]"></div>

      <div className="max-w-screen-xl mx-auto px-6 relative z-10 w-full">
        <div className="max-w-[860px] mx-auto text-center flex flex-col items-center">
          
          {/* Main Headline */}
          <div className="mb-12">
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-sans font-extrabold text-offwhite leading-[1.1] tracking-tighter drop-shadow-md">
              <span className="block opacity-0 translate-y-6 transition-all duration-700 ease-out group-[.is-visible]:opacity-100 group-[.is-visible]:translate-y-0">
                At Claud's Fences, the work we do isn't just a job.
              </span>
              <span className="relative block mt-2 mx-auto w-max">
                {/* Integrated Background Spotlight Glow */}
                <span className="absolute inset-0 bg-accent/25 blur-[48px] scale-[2.5] rounded-[100%] opacity-0 transition-opacity duration-[1200ms] delay-500 ease-out group-[.is-visible]:opacity-100 pointer-events-none"></span>
                
                {/* The Text */}
                <span 
                  className="relative text-cedar block opacity-0 translate-y-6 scale-95 transition-all duration-1000 delay-300 ease-out group-[.is-visible]:opacity-100 group-[.is-visible]:translate-y-0 group-[.is-visible]:scale-100"
                >
                  It's personal.
                </span>
              </span>
            </h2>
          </div>

          {/* Centered Editorial Body Copy */}
          <div className="flex flex-col items-center gap-8 text-[18px] sm:text-[20px] text-offwhite/80 leading-[1.75] font-light py-2 text-center max-w-[760px] font-sans opacity-0 transition-opacity duration-1000 delay-500 group-[.is-visible]:opacity-100">
            <p>
              Co-owners Claudinei Silva and Raimundo Neto bring over 10 years of hands-on fencing experience to every project. Claud's Fences is their first business together, built on hard work, genuine care, and the belief that doing things right matters.
            </p>

            <p>
              We think about what a fence really means. It's not just lumber and posts. It's what keeps your children safe in the backyard, gives your pets room to run, and protects the space your family calls home. That's the weight we carry into every job. It's why we measure carefully, build to last, and won't call it done until we're proud of what we've left behind.
            </p>

            <p>
              From the first conversation to the last nail, our goal is to make you feel heard, respected, and taken care of. We stay in touch, give you honest answers, and treat your property the way we'd treat our own. That's not a policy. It's just how we were raised to work.
            </p>

            <p>
              Claud's Fences has grown because of homeowners who trusted us and told their neighbors. That means everything to us, and we don't take it for granted. We hope to make you part of our story.
            </p>

            {/* Promise Line */}
            <p className="font-sans font-medium text-white text-[20px] sm:text-[22px] mt-4 leading-[1.6] tracking-tight border-t border-white/10 pt-8 w-full">
              We strive to bring the same care and safety we give our own families to yours. That's a promise we take seriously.
            </p>
          </div>

          {/* Trust Stats Bar */}
          <div className="mt-16 w-full flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-cedar font-bold text-[14px] tracking-wider uppercase font-sans opacity-0 transition-all duration-1000 delay-700 translate-y-4 group-[.is-visible]:opacity-100 group-[.is-visible]:translate-y-0">
            <div className="text-center">200+ FENCES INSTALLED</div>
            <div className="hidden md:block w-[1px] h-4 bg-cedar/30"></div>
            <div className="text-center">0 SUBCONTRACTORS, EVER</div>
            <div className="hidden md:block w-[1px] h-4 bg-cedar/30"></div>
            <div className="text-center">100% OWNER-BUILT</div>
          </div>

          {/* Personal CTA Button */}
          <div className="mt-12 text-center opacity-0 transition-all duration-1000 delay-[900ms] translate-y-4 group-[.is-visible]:opacity-100 group-[.is-visible]:translate-y-0">
            <a
              href="#contact"
              className="inline-flex items-center justify-center h-[56px] px-8 bg-cedar hover:bg-cedar-hover text-forest font-bold font-sans rounded-btn transition-colors text-[16px] shadow-[0_0_15px_rgba(232,160,48,0.3)] hover:shadow-[0_0_25px_rgba(232,160,48,0.5)]"
            >
              Talk to Claudinei or Raimundo about your fence →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
