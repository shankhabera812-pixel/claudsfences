import React from 'react';
import { Star } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

const placeholderReviews = [
  {
    id: 1,
    name: "Michael T.",
    time: "2 weeks ago",
    text: "Claudinei and Raimundo are the real deal. They showed up when they said they would, gave a very fair quote, and the vinyl fence looks incredible. It completely changed our backyard. Highly recommend them if you want people who actually care about the work.",
    initial: "M",
    bgColor: "bg-forest"
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    time: "1 month ago",
    text: "We needed a fence fast before getting a new puppy. Claud's Fences was responsive and professional. They didn't leave until everything was perfect and the site was totally clean. No subcontractors either, which we loved.",
    initial: "S",
    bgColor: "bg-cedar"
  },
  {
    id: 3,
    name: "David R.",
    time: "3 months ago",
    text: "After dealing with a few flaky contractors, finding Claud's was a breath of fresh air. They installed a cedar privacy fence for us. The craftsmanship is excellent and they were incredibly respectful of our landscaping.",
    initial: "D",
    bgColor: "bg-forest"
  }
];

// Helper to render 5 filled stars
const Stars = () => (
  <div className="flex gap-0.5 mb-2">
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={16} fill="#C4873A" stroke="#C4873A" />
    ))}
  </div>
);

// Simple Google G logo SVG
const GoogleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.16v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.16C1.43 8.55 1 10.22 1 12s.43 3.45 1.16 4.93l2.45-1.9z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.16 7.07l3.68 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-white py-20 lg:py-28 relative overflow-hidden border-t border-border-light">
      <div className="max-w-screen-xl mx-auto px-6 relative z-10">
        
        <div className="mb-16">
          <SectionHeader
            variant="dark"
            align="center"
            subCopy="Dozens of 5-star reviews from homeowners across Central Massachusetts who hired us to protect their property."
            maxWidth="640px"
          >
            We let our work speak for itself.
          </SectionHeader>
        </div>
        
        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {placeholderReviews.map((review) => (
            <div 
              key={review.id} 
              className="bg-white rounded-card p-6 border border-border-light shadow-sm flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-offwhite font-semibold ${review.bgColor}`}>
                    {review.initial}
                  </div>
                  <div>
                    <h4 className="text-forest text-[15px] font-semibold">{review.name}</h4>
                    <p className="text-muted text-[13px]">{review.time}</p>
                  </div>
                </div>
                <GoogleIcon />
              </div>
              <Stars />
              <p className="text-muted text-[14px] leading-[1.65] flex-grow">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="https://google.com" // TODO: Replace with actual Google Business profile link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-[16px] font-medium text-forest hover:text-cedar transition-colors duration-150 border-b border-forest hover:border-cedar pb-0.5"
          >
            See all our reviews on Google →
          </a>
        </div>
      </div>
    </section>
  );
}
