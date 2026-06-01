'use client';

import { useState } from 'react';
import { ChevronDown, DollarSign, FileText, Clock, Shield, Users } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

const faqs = [
  {
    Icon: DollarSign,
    question: 'What does a fence cost?',
    answer: 'Most residential projects run between $3,000 and $12,000. It depends entirely on the material you choose and the total footage of your property line. We provide a free, exact written quote before you make any commitments.',
  },
  {
    Icon: FileText,
    question: 'Do I need a permit?',
    answer: 'Many towns in Massachusetts require permits for fencing. We know the specific requirements for Shrewsbury and the surrounding towns we serve. We will flag any permit needs during your free estimate and help make sure your project is fully compliant.',
  },
  {
    Icon: Clock,
    question: 'How long does installation take?',
    answer: "Most residential installations take 1 to 3 days. Once we schedule your project, we show up every day until it's finished. We don't leave your yard partially completed while we start another job.",
  },
  {
    Icon: Shield,
    question: 'Will you damage my landscaping or disrupt my yard?',
    answer: "We protect what's already there. We ensure utility lines are flagged before digging, work carefully around established plants, and leave the site clean when we're done.",
  },
  {
    Icon: Users,
    question: 'Do you use subcontractors?',
    answer: 'Never. Claudinei or Raimundo are on every site. The people who quote your fence are the people who build it.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section id="faq" className="bg-white py-24 lg:py-32 border-t border-border-light relative overflow-hidden">
      
      {/* Faint dot-grid background */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-screen-md mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <SectionHeader variant="dark" align="center" subCopy="Ten years in, we've heard them all. Here's what homeowners ask us most — answered straight.">
            Got Questions? Good.
          </SectionHeader>
        </div>

        <div className="flex flex-col gap-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`
                  border border-border-light rounded-[12px] overflow-hidden transition-all duration-300 
                  ${isOpen ? 'bg-paper shadow-md border-cedar/30' : 'bg-white shadow-sm hover:shadow-md hover:border-border-light'}
                `}
              >
                <button
                  className="w-full text-left px-6 py-5 sm:py-6 flex items-center justify-between focus:outline-none transition-colors duration-200"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <div className="flex items-center gap-4 pr-4">
                    <div className={`p-2 rounded-full transition-colors duration-300 ${isOpen ? 'bg-accent/10 text-accent' : 'bg-offwhite text-muted group-hover:text-ink'}`}>
                      <faq.Icon size={20} strokeWidth={2} />
                    </div>
                    <span className={`text-[16px] md:text-[18px] font-semibold transition-colors duration-300 ${isOpen ? 'text-ink' : 'text-ink/80'}`}>
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-accent' : 'text-muted'}`}
                    size={24}
                  />
                </button>
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-hidden={!isOpen}
                  className={`px-6 sm:px-8 overflow-hidden transition-[max-height,opacity,padding] duration-300 ease-in-out ${
                    isOpen ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0 pb-0'
                  }`}
                >
                  <p className="text-muted text-[15px] sm:text-[16px] leading-[1.7] pl-14">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
