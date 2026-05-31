'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

const faqs = [
  {
    question: 'What does a fence cost?',
    answer: 'Most residential projects run between $3,000 and $12,000. It depends entirely on the material you choose and the total footage of your property line. We provide a free, exact written quote before you make any commitments.',
  },
  {
    question: 'How long does installation take?',
    answer: 'Most residential installations take 1 to 3 days. Once we schedule your project, we show up every day until it\'s finished. We don\'t leave your yard partially completed while we start another job.',
  },
  {
    question: 'Do I need a permit?',
    answer: 'Many towns in Massachusetts require permits for fencing. We know the specific requirements for Shrewsbury and the surrounding towns we serve. We will flag any permit needs during your free estimate and help make sure your project is fully compliant.',
  },
  {
    question: 'Will you damage my landscaping or disrupt my yard?',
    answer: 'We protect what\'s already there. We ensure utility lines are flagged before digging, work carefully around established plants, and leave the site clean when we\'re done.',
  },
  {
    question: 'What happens after I submit the form?',
    answer: 'Claudinei or Raimundo will call you — usually the same day. We\'ll ask a few quick questions about what you\'re looking for and schedule a free on-site estimate. There is no commitment until you approve a written quote.',
  },
  {
    question: 'What if something goes wrong after installation?',
    answer: 'If a post shifts or a panel fails due to our installation, we come back and fix it. Claudinei and Raimundo put their names on every job, and we stand by our work long after the final payment.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section id="faq" className="bg-offwhite py-20 lg:py-24">
      <div className="max-w-screen-md mx-auto px-6">
        <div className="text-center mb-12">
          <SectionHeader variant="dark" align="center">
            Questions? Here are the honest answers.
          </SectionHeader>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="bg-white border border-border-light rounded-card overflow-hidden transition-all duration-200"
              >
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none focus:bg-offwhite hover:bg-offwhite transition-colors duration-150"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-[16px] md:text-[18px] font-semibold text-navy pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`flex-shrink-0 text-accent transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    size={24}
                  />
                </button>
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-hidden={!isOpen}
                  className={`px-6 overflow-hidden transition-[max-height,opacity,padding] duration-300 ease-in-out ${
                    isOpen ? 'max-h-[500px] opacity-100 pb-5' : 'max-h-0 opacity-0 pb-0'
                  }`}
                >
                  <p className="text-muted text-[15px] leading-[1.65]">
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
