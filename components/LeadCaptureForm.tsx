'use client';

import EstimateForm from '@/components/EstimateForm';

export default function LeadCaptureForm() {
  return (
    <section id="contact" className="bg-navy py-20">
      <p className="text-white/70 text-[15px] text-center max-w-[520px] mx-auto mb-8 px-6">
        Every fence we&apos;ve built in the photos above started with a single
        conversation. If you&apos;re thinking about a new fence — or just trying
        to figure out what it might cost — that conversation starts here.
      </p>

      <div className="max-w-[700px] mx-auto px-6 mb-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 text-white/90 text-[14px] md:text-[15px] font-medium">
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-[13px] text-accent font-bold">1</span>
            Submit your info
          </div>
          <span className="hidden md:block text-white/30">→</span>
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-[13px] text-accent font-bold">2</span>
            We call you within the day
          </div>
          <span className="hidden md:block text-white/30">→</span>
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-[13px] text-accent font-bold">3</span>
            Free on-site estimate
          </div>
        </div>
      </div>

      {/* Render standalone variant of the shared form component */}
      <EstimateForm variant="standalone" />
    </section>
  );
}
