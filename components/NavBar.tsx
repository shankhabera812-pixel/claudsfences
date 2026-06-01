'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';
import AccentButton from '@/components/ui/AccentButton';

const navLinks = [
  { label: 'About', href: '#why-us' },
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    // 1. Efficient scroll listener for the compressed navbar state
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    // Set initial state
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    // 2. High-performance IntersectionObserver for Scroll Spy
    const sections = navLinks.map((link) => link.href.replace('#', ''));
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Give DOM a tick to render sections before observing
    setTimeout(() => {
      sections.forEach(sectionId => {
        const el = document.getElementById(sectionId);
        if (el) observer.observe(el);
      });
    }, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-[rgba(15,18,32,0.85)] backdrop-blur-[12px] border-[rgba(232,160,48,0.12)] shadow-xl' 
          : 'bg-transparent border-transparent'
      }`}
    >
      <div
        className={`nav-inner max-w-screen-xl mx-auto px-6 flex items-center justify-between ${
          isScrolled ? 'py-2' : 'py-3'
        }`}
      >
        {/* Logo */}
        <a href="#hero" className="flex-shrink-0">
          <Image 
            src="/images/claudlogo.png" 
            alt="Claud's Fences" 
            width={180} 
            height={48} 
            className="site-logo w-auto h-[36px] md:h-[48px]"
            priority
          />
        </a>

        {/* Desktop Nav Links */}
        <nav
          aria-label="Main navigation"
          className="hidden md:flex items-center gap-8"
        >
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`font-sans font-normal text-[14px] uppercase tracking-[0.04em] transition-colors duration-200 relative py-2 ${
                  isActive ? 'text-accent' : 'text-white/75 hover:text-white'
                }`}
              >
                {link.label}
                <span 
                  className={`absolute bottom-0 left-0 right-0 h-[2px] bg-accent transition-transform duration-200 ease-out origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`} 
                />
              </a>
            );
          })}
        </nav>

        {/* Right Group — always visible */}
        <div className="flex items-center gap-4">
          {/* Phone — high visibility pill */}
          <a
            href="tel:+17743862977"
            className="hidden sm:flex items-center gap-2 bg-white/10 border border-white/20 hover:border-[rgba(232,160,48,0.5)] text-white px-4 py-2 rounded-full font-sans text-[14px] font-medium tracking-[0.02em] transition-all duration-200 shadow-sm group"
          >
            <Phone size={16} className="text-accent" />
            (774) 386-2977
          </a>

          {/* CTA Button */}
          <AccentButton 
            size="sm" 
            href="#contact"
            className="!font-sans !font-semibold !uppercase !tracking-[0.05em] !text-[13px] !px-6 !py-[12px] !rounded-[6px] hover:!brightness-110 !border-none"
          >
            Get Free Estimate
          </AccentButton>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden text-white p-1 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div
          id="mobile-menu"
          role="navigation"
          aria-label="Mobile navigation"
          className="md:hidden absolute top-full left-0 right-0 bg-[rgba(15,18,32,0.95)] backdrop-blur-[12px] border-t border-[rgba(232,160,48,0.12)] px-6 py-4"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`font-sans uppercase tracking-[0.04em] text-[16px] py-2 transition-colors duration-150 ${
                  activeSection === link.href.replace('#', '') ? 'text-accent' : 'text-white/75 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
