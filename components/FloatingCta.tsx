'use client';

import { useState, useEffect } from 'react';

export default function FloatingCta() {
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [formInView, setFormInView] = useState(false);

  // Scroll effect — track if user has scrolled past hero
  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById('hero');
      if (!hero) return;
      const threshold = hero.offsetTop + hero.offsetHeight + 200;
      setScrolledPastHero(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer — track if form section is in viewport
  useEffect(() => {
    const form = document.getElementById('contact');
    if (!form) return;
    const observer = new IntersectionObserver(
      ([entry]) => setFormInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    observer.observe(form);
    return () => observer.disconnect();
  }, []);

  // Derived visibility
  const shouldShow = scrolledPastHero && !formInView;

  return (
    <div
      className={`
        fixed bottom-6 left-1/2 -translate-x-1/2 z-40 md:hidden
        transition-all duration-300 ease-out
        ${
          shouldShow
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }
      `}
      aria-hidden={!shouldShow}
    >
      <a
        href="#contact"
        tabIndex={shouldShow ? 0 : -1}
        className="
          flex items-center justify-center
          bg-accent hover:bg-accent-hover text-white font-bold
          rounded-pill h-[52px] px-8 text-[15px] no-underline
          transition-colors duration-150 shadow-lg
        "
        style={{ minWidth: '240px', maxWidth: '70vw' }}
      >
        Get Free Estimate
      </a>
    </div>
  );
}
