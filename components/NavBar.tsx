'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import AccentButton from '@/components/ui/AccentButton';

const navLinks = [
  { label: 'About', href: '#trust' },
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Set initial state
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-navy"
    >
      <div
        className={`nav-inner max-w-screen-xl mx-auto px-6 flex items-center justify-between ${
          isScrolled ? 'py-2' : 'py-3'
        }`}
      >
        {/* Logo */}
        <a href="#hero" className="flex-shrink-0">
          <span className="text-white text-[20px] font-bold tracking-[-0.01em]">
            Claud&apos;s Fences
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav
          aria-label="Main navigation"
          className="hidden md:flex items-center gap-8"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white text-[15px] font-normal no-underline hover:text-accent transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Group — always visible */}
        <div className="flex items-center gap-4">
          {/* Phone — hidden on very small screens */}
          <a
            href="tel:+17743862977"
            className="hidden sm:inline-block text-white text-[14px] hover:text-accent transition-colors duration-150"
          >
            (774) 386-2977
          </a>

          {/* CTA Button */}
          <AccentButton size="sm" href="#contact">
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
          className="md:hidden absolute top-full left-0 right-0 bg-navy border-t border-white/10 px-6 py-4"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-white text-[16px] py-2 hover:text-accent transition-colors duration-150"
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
