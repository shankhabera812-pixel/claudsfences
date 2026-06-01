'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { Dog, Baby, EyeOff, Waves, Map } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

const outcomes = [
  {
    Icon: Dog,
    title: 'The back door is just a door again.',
    desc: (
      <>Open the back door and walk away. no holding your breath.</>
    ),
    resolution: 'Open the door. Walk away.'
  },
  {
    Icon: Baby,
    title: 'Watch them. Don\'t monitor them.',
    desc: (
      <>A real boundary so you can stop watching the street and just watch them laugh.</>
    ),
    resolution: 'Just watch them.'
  },
  {
    Icon: EyeOff,
    title: 'Outside feels like inside.',
    desc: (
      <>Step outside with a drink, sit down, and actually decompress. Your yard, not a stage.</>
    ),
    resolution: 'Your yard, not a stage.'
  },
  {
    Icon: Waves,
    title: 'Pool Compliance',
    desc: (
      <>Self-closing gates, heavy-gauge aluminum, Massachusetts pool code covered. Safe yard, clean permit, nothing outstanding.</>
    ),
    resolution: 'Safe yard. Clean permit. Nothing outstanding.'
  },
  {
    Icon: Map,
    title: 'The property line is finally settled.',
    desc: (
      <>No more neighborly disputes or 'I thought the line was over there.' Your boundary, marked, respected, done.</>
    ),
    resolution: 'Your boundary, marked, respected, done.'
  },
];

export default function WhatYouGainSection() {
  
  useEffect(() => {
    // ── 1. SVG UNDERLINE INJECTION ───────────────────────────────
    function buildUnderlineSVG(width: number) {
      const mid = width / 2;
      const d = `M 0 4 Q ${mid * 0.4} 2 ${mid} 4 Q ${mid * 1.6} 6 ${width} 4`;
      const pathLength = Math.round(width * 1.05);

      return `
        <svg class="underline-svg" viewBox="0 0 ${width} 8" preserveAspectRatio="none" aria-hidden="true">
          <path d="${d}" style="--path-length: ${pathLength}" />
        </svg>
      `;
    }

    document.querySelectorAll('.solution-highlight').forEach(el => {
      const existing = el.querySelector('.underline-svg');
      if (existing) existing.remove();
      
      requestAnimationFrame(() => {
        const w = (el as HTMLElement).offsetWidth;
        el.insertAdjacentHTML('beforeend', buildUnderlineSVG(w));
      });
    });

    // ── 2. INTERSECTION OBSERVER SETUP ──────────────────────────
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const el = entry.target as HTMLElement;
        const type = el.dataset.animType;

        if (type === 'solution-headline') {
          el.querySelectorAll('.solution-headline-part').forEach((part, index) => {
            setTimeout(() => {
              part.classList.add('is-visible');
              if (index === 1) {
                part.classList.add('solution-headline-flash');
                const highlight = part.querySelector('.solution-highlight');
                if (highlight) highlight.classList.add('is-visible');
              }
            }, index * 300);
          });
        }

        if (type === 'solution-image') {
          el.classList.add('is-visible');
        }

        if (type === 'solution-item') {
          el.classList.add('opacity-100', 'translate-x-0');
          el.classList.remove('opacity-0', '-translate-x-4');

          const icon = el.querySelector('.icon-wrapper');
          if (icon) {
            setTimeout(() => {
              icon.classList.add('pulse-once');
              icon.addEventListener('animationend', () => {
                icon.classList.remove('pulse-once');
              }, { once: true });
            }, 200);
          }

          const resLine = el.querySelector('.resolution-line');
          if (resLine) {
            setTimeout(() => {
              resLine.classList.add('nudge-once');
              resLine.addEventListener('animationend', () => {
                resLine.classList.remove('nudge-once');
              }, { once: true });
            }, 600);
          }
        }

        if (type === 'highlight') {
          // Only process highlights that aren't inside the headline (to avoid double trigger)
          if (!el.closest('.solution-headline-container')) {
            el.classList.add('is-visible');
          }
        }

        observer.unobserve(el);
      });
    }, observerOptions);

    // ── 3. REGISTER ELEMENTS WITH OBSERVER ──────────────────────
    const headline = document.querySelector('.solution-headline-container');
    if (headline) {
      (headline as HTMLElement).dataset.animType = 'solution-headline';
      observer.observe(headline);
    }

    const imageWrap = document.querySelector('.solution-image-wrap');
    if (imageWrap) {
      (imageWrap as HTMLElement).dataset.animType = 'solution-image';
      observer.observe(imageWrap);
    }

    document.querySelectorAll('.benefit-item').forEach((item, index) => {
      (item as HTMLElement).dataset.animType = 'solution-item';
      setTimeout(() => observer.observe(item), index * 100);
    });

    document.querySelectorAll('.solution-highlight').forEach((phrase, i) => {
      if (!phrase.closest('.solution-headline-container')) {
        (phrase as HTMLElement).dataset.animType = 'highlight';
        const delay = 500 + (i * 100);
        setTimeout(() => observer.observe(phrase), delay);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="what-you-gain" className="solution-section bg-white pb-12 lg:pb-16 relative overflow-hidden">

      {/* Transition Bridge from Navy to White */}
      <div className="w-full h-[100px] bg-gradient-to-b from-navy to-white relative flex items-center justify-center mb-10">
        <div className="w-12 h-0.5 bg-accent/70 rounded-full" />
      </div>
      
      <div className="max-w-screen-xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12 xl:gap-14">
          
          {/* Left: Emotional Image Anchor */}
          <div className="w-full lg:w-1/2 relative p-1 mb-10 lg:mb-0">
            <div className="solution-image-wrap aspect-[5/4] w-full max-w-[540px] mx-auto relative rounded-2xl overflow-hidden shadow-lg border-[6px] border-white group">
              <Image
                src="/images/solution-family-grill.jpg"
                alt="Family grilling in a securely fenced backyard"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right: Transformation Copy & Outcomes */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="mb-8 text-center lg:text-left">
              <div className="solution-headline-container pb-2">
                <SectionHeader variant="dark" align="left" maxWidth="100%">
                  <span className="solution-headline-part block opacity-0 translate-y-3 transition-all duration-500 ease-out">When the fence is finished,</span>
                  <span className="solution-headline-part block opacity-0 translate-y-3 transition-all duration-500 ease-out tracking-[0.02em]">
                    <span className="highlight-phrase solution-highlight" data-phrase="headline-highlight">everything changes.</span>
                  </span>
                </SectionHeader>
              </div>
              <p className="text-muted text-[17px] sm:text-[19px] leading-relaxed mt-4 font-light max-w-[500px] mx-auto lg:mx-0">
                Your yard becomes yours again. The worrying stops. The living starts.
              </p>
            </div>

            <div className="flex flex-col">
              {outcomes.map((item, idx) => (
                <div 
                  key={idx} 
                  className="benefit-item opacity-0 -translate-x-4 transition-all duration-500 ease-out flex items-start gap-4 p-2 py-3 lg:py-3.5 hover:bg-white group cursor-default"
                >
                  <div className="transformation-icon-container icon-wrapper w-10 h-10 mt-1 rounded-full text-accent flex items-center justify-center flex-shrink-0 transition-transform duration-300">
                    <item.Icon size={20} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-forest text-[17px] font-semibold mb-0.5">
                      {item.title}
                    </h4>
                    <p className="text-muted text-[15px] leading-snug">
                      {item.desc}
                    </p>
                    <span className="resolution-line">{item.resolution}</span>
                  </div>
                </div>
              ))}
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
}
