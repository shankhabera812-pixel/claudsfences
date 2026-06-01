'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import rawPortfolioData from '@/data/portfolio.json';

interface RawPortfolioItem {
  file: string;
  description: string;
  category: string;
  local_path: string;
}

interface ParsedPortfolioItem {
  id: string;
  file: string;
  title: string;
  location: string;
  category: string;
  src: string;
  description: string;
}

export default function PortfolioGallery() {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Vinyl' | 'Wood'>('All');
  const [visibleCount, setVisibleCount] = useState<number>(6);

  // Parse data
  const parsedData: ParsedPortfolioItem[] = useMemo(() => {
    return (rawPortfolioData as RawPortfolioItem[]).map((item) => {
      // e.g., "Vinyl Fence Shrewsbury, MA"
      const [rest] = item.description.split(', MA');
      const words = rest.split(' ');
      const town = words.pop() || '';
      const title = words.join(' ');
      const location = `${town}, MA`;
      
      return {
        id: item.file,
        file: item.file,
        title: title || item.category,
        location: location,
        category: item.category,
        src: `/images/portfolio/${item.file}`,
        description: item.description,
      };
    });
  }, []);

  const displayedItems =
    activeFilter === 'All'
      ? parsedData
      : parsedData.filter((item) => item.category === activeFilter);

  // Counts
  const allCount = parsedData.length;
  const vinylCount = parsedData.filter(i => i.category === 'Vinyl').length;
  const woodCount = parsedData.filter(i => i.category === 'Wood').length;

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
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

    document.querySelectorAll('.gallery-reveal').forEach(el => {
      // Remove is-visible class to restart animation if filter changed
      el.classList.remove('is-visible');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [activeFilter, visibleCount]); // Re-run when filter changes to animate new cards

  return (
    <section id="portfolio" className="bg-white py-24 lg:py-32">
      <div className="max-w-screen-xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-[36px] sm:text-[42px] font-serif font-bold text-navy mb-4">
            A fence is only as good as the hands that build it.
          </h2>
          <p className="text-[16px] sm:text-[18px] text-forest/80 max-w-[640px] mx-auto leading-relaxed">
            We don't take shortcuts. We use thick-grade vinyl, premium cedar, and heavy-wall aluminum. See the difference owner-installed work makes.
          </p>
        </div>

        {/* Filter Tab Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {/* All */}
          <button
            onClick={() => { setActiveFilter('All'); setVisibleCount(6); }}
            className={`rounded-full px-6 py-2.5 text-[14px] font-medium transition-all duration-250 flex items-center gap-2 ${
              activeFilter === 'All'
                ? 'bg-[#B8781A] text-white border-transparent'
                : 'bg-transparent text-forest border border-forest/30 hover:bg-forest/5'
            }`}
          >
            All <span className="opacity-85 text-[12px]">{allCount}</span>
          </button>

          {/* Vinyl */}
          <button
            onClick={() => { setActiveFilter('Vinyl'); setVisibleCount(6); }}
            className={`rounded-full px-6 py-2.5 text-[14px] font-medium transition-all duration-250 flex items-center gap-2 ${
              activeFilter === 'Vinyl'
                ? 'bg-[#B8781A] text-white border-transparent'
                : 'bg-transparent text-forest border border-forest/30 hover:bg-forest/5'
            }`}
          >
            Vinyl <span className="opacity-85 text-[12px]">{vinylCount}</span>
          </button>

          {/* Wood */}
          <button
            onClick={() => { setActiveFilter('Wood'); setVisibleCount(6); }}
            className={`rounded-full px-6 py-2.5 text-[14px] font-medium transition-all duration-250 flex items-center gap-2 ${
              activeFilter === 'Wood'
                ? 'bg-[#B8781A] text-white border-transparent'
                : 'bg-transparent text-forest border border-forest/30 hover:bg-forest/5'
            }`}
          >
            Wood <span className="opacity-85 text-[12px]">{woodCount}</span>
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[12px]">
          {displayedItems.slice(0, visibleCount).map((item, index) => (
            <div 
              key={`${item.id}-${activeFilter}`} 
              className="gallery-reveal opacity-0 translate-y-[20px] [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0 transition-all duration-[400ms] ease-out"
              style={{ transitionDelay: `${Math.min(index * 60, 300)}ms` }}
            >
              <div className="group relative overflow-hidden rounded-[14px] aspect-[4/3] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_52px_rgba(0,0,0,0.2)] bg-forest/5">
                {/* Image Layer */}
                <Image
                  src={item.src}
                  alt={item.description}
                  fill
                  className="absolute inset-0 w-full h-full object-cover object-center filter contrast-[1.06] saturate-[1.1] transition-transform duration-[550ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.06]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  unoptimized // since we downloaded these locally, Next.js optimization isn't strictly necessary but we can leave it default. Actually, leaving unoptimized false is fine.
                />

                {/* Always-On Location Badge */}
                <div className="absolute top-[10px] left-[10px] z-[2] bg-white/90 backdrop-blur-[8px] rounded-full px-[10px] py-[3px] text-[11px] font-medium border border-black/10 text-forest">
                  {item.location}
                </div>

                {/* Frosted Glass Hover Overlay */}
                <div className="absolute bottom-0 left-0 right-0 z-[3] p-[13px_15px] opacity-100 translate-y-0 md:opacity-0 md:translate-y-[10px] md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-[280ms] ease-out bg-white/94 @supports(backdrop-filter:blur(16px)):bg-white/82 @supports(backdrop-filter:blur(16px)):backdrop-blur-[16px]">
                  
                  {/* Category Badge Pill */}
                  <span className={`inline-block rounded-full px-[9px] py-[2px] text-[10px] font-medium uppercase tracking-[0.05em] ${
                    item.category === 'Vinyl' ? 'bg-[#FFF0D9] text-[#7A4E10]' : 'bg-[#EAF3DE] text-[#3B6D11]'
                  }`}>
                    {item.category}
                  </span>

                  {/* Project Title */}
                  <h4 className="text-[13px] font-medium text-forest mt-[5px] mb-[2px]">
                    {item.title}
                  </h4>

                  {/* Location (Muted) */}
                  <p className="text-[11px] text-forest/70">
                    {item.location}
                  </p>

                  {/* CTA Link */}
                  <div className="flex justify-end mt-1">
                    <Link 
                      href={`#contact?type=${item.category.toLowerCase()}`}
                      className="text-[#B8781A] text-[11px] font-medium hover:underline"
                    >
                      Get this look &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < displayedItems.length && (
          <div className="mt-10 flex justify-center">
            <button 
              onClick={() => setVisibleCount(prev => prev + 6)}
              className="rounded-full px-6 py-2.5 text-[14px] font-medium transition-all duration-250 bg-forest/5 text-forest border border-forest/10 hover:bg-forest/10 hover:shadow-sm flex items-center gap-2"
            >
              Load More Projects
            </button>
          </div>
        )}

        {/* Section CTA */}
        <div className="mt-16 text-center">
          <p className="text-[18px] font-medium text-navy mb-6">
            See a style you love? We'll price it for free.
          </p>
          <Link 
            href="#contact"
            className="inline-flex justify-center items-center rounded-[6px] px-8 py-3.5 bg-cedar text-white font-semibold text-[15px] hover:bg-cedar/90 transition-colors shadow-sm"
          >
            Get a Free Quote
          </Link>
        </div>

      </div>
    </section>
  );
}
