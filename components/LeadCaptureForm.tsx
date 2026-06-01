'use client';

import EstimateForm from '@/components/EstimateForm';
import SectionHeader from '@/components/ui/SectionHeader';
import { ArrowRight } from 'lucide-react';

export default function LeadCaptureForm() {
  return (
    <section id="contact" className="bg-forest py-24 lg:py-32">
      <div className="max-w-screen-xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <SectionHeader 
            variant="light" 
            align="center"
          >
            Let's get this done.
          </SectionHeader>
          <p className="text-offwhite/80 text-[17px] sm:text-[19px] leading-relaxed mt-4 font-light max-w-[600px] mx-auto">
            Every fence we've built in the photos above started with a single conversation. If you're thinking about a new fence — or just trying to figure out what it might cost — that conversation starts here.
          </p>
        </div>

        {/* 1-2-3 Steps Row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-cedar text-forest font-bold flex items-center justify-center text-[14px]">1</div>
            <span className="text-offwhite font-medium text-[15px]">Submit your info</span>
          </div>
          <ArrowRight className="hidden md:block text-cedar/50" size={20} />
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-cedar text-forest font-bold flex items-center justify-center text-[14px]">2</div>
            <span className="text-offwhite font-medium text-[15px]">We call you within the day</span>
          </div>
          <ArrowRight className="hidden md:block text-cedar/50" size={20} />
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-cedar text-forest font-bold flex items-center justify-center text-[14px]">3</div>
            <span className="text-offwhite font-medium text-[15px]">Free on-site estimate</span>
          </div>
        </div>

        {/* Render standalone variant of the shared form component */}
        {/* Note: The EstimateForm component itself already has a white background card styling in the standalone variant */}
        <div className="max-w-[700px] mx-auto">
          <EstimateForm variant="standalone" />
        </div>
      </div>
    </section>
  );
}
