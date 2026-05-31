'use client';

import { useState } from 'react';
import Image from 'next/image';
import { portfolioData } from '@/data/portfolio';
import EyebrowLabel from '@/components/ui/EyebrowLabel';
import SectionHeader from '@/components/ui/SectionHeader';

type FilterOption = 'All' | 'Wood' | 'Vinyl';

const filters: FilterOption[] = ['All', 'Wood', 'Vinyl'];

export default function PortfolioGallery() {
  const [activeFilter, setActiveFilter] = useState<FilterOption>('All');

  // Derived display list — not state, recomputed on every render
  const displayedItems =
    activeFilter === 'All'
      ? portfolioData
      : portfolioData.filter((item) => item.fenceType === activeFilter);

  return (
    <section id="portfolio" className="bg-navy py-20">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-10">
          <EyebrowLabel variant="light">Our Work</EyebrowLabel>
          <SectionHeader
            variant="light"
            align="center"
            subCopy="Every photo below is a real project completed by our team. If you're in Central Massachusetts, we've probably worked in your town — Shrewsbury, Worcester, Framingham, Northborough, Hudson, Leominster, and 10 more."
            maxWidth="640px"
          >
            Projects Across Shrewsbury &amp; Central Massachusetts
          </SectionHeader>
        </div>

        {/* Filter Tab Bar */}
        <div
          className="flex justify-center gap-3 mb-10"
          role="group"
          aria-label="Filter portfolio by fence type"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
              className={`
                border-[1.5px] rounded-pill px-6 py-2
                text-[14px] font-medium
                transition-all duration-150 cursor-pointer
                ${
                  activeFilter === filter
                    ? 'bg-accent text-white border-transparent'
                    : 'bg-transparent text-white border-white/70 hover:bg-white/10'
                }
              `}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" role="list">
          {displayedItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-card aspect-[4/3] portfolio-item animate-slide-up"
              role="listitem"
              tabIndex={0}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                loading="lazy"
                quality={80}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Hover Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200">
                <span className="inline-block text-[12px] font-medium text-white bg-black/55 rounded-[4px] px-2.5 py-1">
                  {item.label}
                </span>
              </div>
            </div>
          ))}

        </div>

        {/* Soft connector sentence */}
        <p className="text-center text-[18px] text-white/80 font-medium mt-12">
          Want to see what our customers say about working with us?
        </p>
      </div>
    </section>
  );
}
