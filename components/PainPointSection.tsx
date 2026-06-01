'use client';

import React, { useEffect } from 'react';
import { Eye, ShieldAlert, Dog, Armchair, Radio } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

const painPoints = [
  {
    Icon: ShieldAlert,
    headline: 'No Fence, No Safe Zone',
    copy: "There's no line between your yard and the street. So instead of watching your kids play, you're watching for everything that could go wrong.",
    consequence: "You're not present. You're on patrol.",
    colSpan: 'md:col-span-3 lg:col-span-2',
    isElevated: false,
    isWide: false,
  },
  {
    Icon: Eye,
    headline: 'Your Yard Has No Privacy',
    copy: "You step outside and immediately feel it: eyes from the sidewalk, a car that slows. Your own backyard shouldn't feel like being on display.",
    consequence: "You can't exhale in a space that feels like a stage.",
    colSpan: 'md:col-span-3 lg:col-span-2',
    isElevated: true,
    isWide: false,
  },
  {
    Icon: Dog,
    headline: 'Your Yard Is Everyone\'s Shortcut',
    copy: "The neighbor's dog, kids cutting through, headlights sweeping your living room — none of it is yours to deal with. An open yard imports everyone else's habits directly into your life.",
    consequence: "No boundary means no say in what happens here.",
    colSpan: 'md:col-span-6 lg:col-span-2',
    isElevated: false,
    isWide: false,
  },
  {
    Icon: Armchair,
    headline: 'A Backyard You Own But Never Use',
    copy: "The furniture is out there. The grill is ready. But without a boundary, the yard never feels like it actually belongs to you, so you never settle into it.",
    consequence: "The best outdoor rooms have walls.",
    colSpan: 'md:col-span-3 lg:col-span-3',
    isElevated: false,
    isWide: true,
  },
  {
    Icon: Radio,
    headline: 'You Never Fully Relax Out There',
    copy: "It's not one big problem. It's the low hum of a yard that's always slightly open: the dog at night, the yard sitting exposed. You've adapted. But it's still running.",
    consequence: "Some problems don't announce themselves. They just wear you down.",
    colSpan: 'md:col-span-3 lg:col-span-3',
    isElevated: false,
    isWide: true,
  },
];

export default function PainPointSection() {
  
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

    document.querySelectorAll('.highlight-phrase').forEach(el => {
      // Clear existing first if re-running (strict mode)
      const existing = el.querySelector('.underline-svg');
      if (existing) existing.remove();
      
      // Wait for layout to settle to get accurate width
      requestAnimationFrame(() => {
        const w = (el as HTMLElement).offsetWidth;
        el.insertAdjacentHTML('beforeend', buildUnderlineSVG(w));
      });
    });

    // ── 2. INTERSECTION OBSERVER SETUP ──────────────────────────
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -60px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const el = entry.target as HTMLElement;
        const type = el.dataset.animType;

        if (type === 'headline-parts') {
          el.querySelectorAll('.headline-part').forEach(part => {
            part.classList.add('is-visible');
          });
        }

        if (type === 'card') {
          el.classList.add('is-visible');

          const icon = el.querySelector('.card-icon');
          if (icon) {
            setTimeout(() => {
              icon.classList.add('pulse-once');
              icon.addEventListener('animationend', () => {
                icon.classList.remove('pulse-once');
              }, { once: true });
            }, 200);
          }
        }

        if (type === 'highlight') {
          el.classList.add('is-visible');
        }

        observer.unobserve(el);
      });
    }, observerOptions);

    // ── 3. REGISTER ELEMENTS WITH OBSERVER ──────────────────────
    const headline = document.querySelector('.problem-section h2'); // Target the actual h2 element containing the parts
    if (headline) {
      (headline as HTMLElement).dataset.animType = 'headline-parts';
      observer.observe(headline);
    }

    document.querySelectorAll('.problem-section .card').forEach(card => {
      (card as HTMLElement).dataset.animType = 'card';
      observer.observe(card);
    });

    document.querySelectorAll('.highlight-phrase').forEach((phrase, i) => {
      (phrase as HTMLElement).dataset.animType = 'highlight';
      const cardDelay = [400, 550, 700][i] || 400; // Match CSS stagger approx
      setTimeout(() => observer.observe(phrase), cardDelay);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="pain-points" className="problem-section bg-navy py-24 lg:py-32 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] bg-accent/20 blur-[140px] pointer-events-none rounded-full" />
      
      <div className="max-w-screen-xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <SectionHeader 
            variant="light" 
            align="center" 
            subCopy="You earned this home. Your backyard should feel like yours — not an open corridor everyone passes through."
          >
            {/* Split headline explicitly in React for staggering */}
            <span className="headline-part">Without a fence, your yard isn't a retreat.</span>{' '}
            <span className="headline-part">It's <span className="highlight-phrase" data-phrase="headline">everybody's business</span>.</span>
          </SectionHeader>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {painPoints.map((point, idx) => (
            <div 
              key={idx}
              className={`
                card group relative backdrop-blur-md flex flex-col gap-5
                rounded-[16px]
                ${point.colSpan}
                ${point.isWide ? 'px-8 sm:px-10 py-10 sm:py-12' : 'p-8 sm:p-10'}
                ${point.isElevated ? 'bg-white/10 border-x border-b border-white/10 border-t-2 border-t-accent overflow-hidden' : 'bg-white/5 border border-transparent'}
              `}
            >
              <div className="card-icon w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-2 transition-transform duration-300 shadow-[0_0_16px_rgba(232,160,48,0.22)]">
                <point.Icon size={28} className="text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="text-white text-[22px] sm:text-[24px] font-extrabold leading-[1.3] tracking-tight">
                {point.headline}
              </h3>
              <p className="text-white/75 text-[16px] sm:text-[17px] leading-[1.65] font-light">
                {point.copy}
              </p>
              <p className="mt-auto pt-3 text-[13px] italic text-accent">
                {point.consequence}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 text-center">
          <p className="text-[14px] italic text-accent">
            Every one of these problems has the same fix.
          </p>
        </div>
      </div>
    </section>
  );
}
