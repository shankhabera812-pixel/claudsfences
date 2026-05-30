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

      {/* Render standalone variant of the shared form component */}
      <EstimateForm variant="standalone" />
    </section>
  );
}
