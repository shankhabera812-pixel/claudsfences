'use client';

import React, { useEffect } from 'react';
import { ShieldCheck, Trees, Wind, Wrench } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

const services = [
  {
    Icon: ShieldCheck,
    title: 'Vinyl',
    desc: "Set it and forget it. Thick-wall vinyl that holds its color and shape through freeze-thaw cycles, salt air, and years of New England punishment. You won't touch it again except to enjoy it.",
    consequence: "Built for this climate. Zero maintenance required.",
    imgAlt: "Vinyl privacy fence installed in a Massachusetts backyard",
    imgSrc: "/images/materials/vinyl.png"
  },
  {
    Icon: Trees,
    title: 'Wood',
    desc: "Cedar has been New England's fence of choice for generations — because it handles the weather, ages beautifully, and looks like it belongs here. No shortcuts, no green lumber, no callbacks.",
    consequence: "Installed the way it was meant to be installed.",
    imgAlt: "Cedar wood fence installed in a New England yard",
    imgSrc: "/images/materials/wood.png"
  },
  {
    Icon: Wind,
    title: 'Aluminum & Pool Enclosures',
    desc: "Heavy-wall aluminum that meets every Massachusetts pool code — self-closing gates included — without giving up an inch of your sight line. The fence that protects without feeling like a cage.",
    consequence: "Elegant security. Nothing compromised.",
    imgAlt: "Aluminum pool enclosure with self-closing gate, Massachusetts",
    imgSrc: "/images/materials/aluminum.png"
  },
  {
    Icon: Wrench,
    title: 'Repair & Restoration',
    desc: "Storm damage, rot, a post that finally gave out — we've seen it all. We come out, assess honestly, and only replace what actually needs replacing. No upselling a full tear-out when a few boards will do the job.",
    consequence: "We tell you what's needed. Nothing more.",
    imgAlt: "",
    imgSrc: ""
  },
];

export default function ServicesSection() {
  const materials = services.slice(0, 3);
  const repair = services[3];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.material-reveal').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="bg-forest pt-24 pb-0 lg:pt-32 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 mb-16 lg:mb-24">
        {/* Section Header */}
        <div className="text-center">
          <SectionHeader
            variant="light"
            align="center"
            subCopy="We don't pull materials off a big-box shelf. Everything we install is commercial-grade and built to handle Massachusetts winters without flinching."
            maxWidth="640px"
          >
            The material matters as much as the work.
          </SectionHeader>
        </div>
      </div>

      <div className="w-full flex flex-col">
        {/* Materials Rows */}
        {materials.map((item, index) => {
          const isReversed = index === 1; // Alternation: Wood (index 1) is reversed
          return (
            <div 
              key={item.title}
              className={`flex flex-col md:flex-row w-full min-h-[400px] border-t border-cedar/10 ${isReversed ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Photo Half */}
              <div className="w-full md:w-1/2 h-[260px] md:h-auto relative shrink-0 bg-[#0f1412] material-reveal solution-image-wrap">
                <img 
                  src={item.imgSrc} 
                  alt={item.imgAlt} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Text Half */}
              <div className="w-full md:w-1/2 flex flex-col justify-center px-8 py-14 md:px-12 lg:px-20 xl:px-28 bg-forest">
                <item.Icon size={36} className="text-cedar mb-5" strokeWidth={1.5} />
                <h3 className="text-[26px] sm:text-[28px] font-serif font-bold text-offwhite mb-4">
                  {item.title}
                </h3>
                <p className="text-[16px] text-offwhite/80 leading-[1.65]">
                  {item.desc}
                </p>
                <p className="text-[14px] italic text-cedar mt-5">
                  {item.consequence}
                </p>
              </div>
            </div>
          );
        })}

        {/* Repair & Restoration Strip */}
        <div className="w-full border-t-[2px] border-cedar py-20 px-6 bg-forest text-center relative z-10">
          <div className="max-w-[720px] mx-auto flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-cedar/10 flex items-center justify-center mb-6">
              <repair.Icon size={28} className="text-cedar" strokeWidth={1.5} />
            </div>
            <h3 className="text-[26px] sm:text-[28px] font-serif font-bold text-offwhite mb-4">
              {repair.title}
            </h3>
            <p className="text-[16px] text-offwhite/80 leading-[1.65]">
              {repair.desc}
            </p>
            <p className="text-[14px] italic text-cedar mt-5 font-medium">
              {repair.consequence}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
