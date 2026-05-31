import { CheckCircle2, ShieldCheck, Sun, Lock } from 'lucide-react';

const benefits = [
  {
    id: 'peace-of-mind',
    headline: 'Total Peace of Mind',
    copy: 'Open the back door and let them run. No leashes, no hovering. A secure yard means you can finally relax.',
    Icon: CheckCircle2,
  },
  {
    id: 'uninterrupted-privacy',
    headline: 'Uninterrupted Privacy',
    copy: 'Turn your backyard into a personal retreat. Host family, swim, or read a book without feeling like you are on display.',
    Icon: Sun,
  },
  {
    id: 'safe-haven',
    headline: 'A Safe Haven',
    copy: 'Keep wandering pets and uninvited wildlife out while keeping what matters most safely contained inside your property line.',
    Icon: ShieldCheck,
  },
  {
    id: 'clear-boundaries',
    headline: 'Clear, Beautiful Boundaries',
    copy: 'End property line ambiguity gracefully. A beautiful fence enhances curb appeal while establishing clear, respectful borders.',
    Icon: Lock,
  },
];

export default function WhatYouGainSection() {
  return (
    <section id="what-you-gain" className="bg-success-light py-20 lg:py-24 border-t border-success-border relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-success rounded-full blur-3xl opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 bg-success rounded-full blur-3xl opacity-10 pointer-events-none" />

      <div className="max-w-screen-xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-navy text-[clamp(2rem,4vw,2.75rem)] font-bold mb-4 tracking-tight">
            What You <span className="text-success">Gain</span> With a Proper Fence
          </h2>
          <p className="text-muted text-[16px] md:text-[18px]">
            The right fence doesn't just enclose your yard—it completely transforms how you live in it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <div 
              key={benefit.id} 
              className="bg-white border-t-4 border-t-success border-x border-b border-border-light rounded-card p-6 flex flex-col gap-4 hover-card-lift sheen-wrapper"
            >
              <div className="w-12 h-12 bg-success-light rounded-full flex items-center justify-center mb-2">
                <benefit.Icon size={24} className="text-success" strokeWidth={2} />
              </div>
              <h3 className="text-navy text-[18px] font-semibold leading-[1.3]">
                {benefit.headline}
              </h3>
              <p className="text-muted text-[14px] leading-[1.65]">
                {benefit.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
