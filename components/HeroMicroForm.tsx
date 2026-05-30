'use client';
import { useState, type FormEvent } from 'react';
import AccentButton from '@/components/ui/AccentButton';

export default function HeroMicroForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const PHONE_REGEX = /^[\d\s\(\)\-\+]{7,}$/;

  function validate(): boolean {
    let valid = true;
    if (!name.trim()) {
      setNameError('Please enter your name.');
      valid = false;
    } else {
      setNameError('');
    }
    if (!PHONE_REGEX.test(phone)) {
      setPhoneError('Please enter a valid phone number.');
      valid = false;
    } else {
      setPhoneError('');
    }
    return valid;
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    try {
      const response = await fetch(
        `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name,
            phone,
            email: '',
            address: '',
            fenceType: '',
            notes: '',
          }),
        }
      );
      if (response.ok) {
        setStatus('success');
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'generate_lead', {
            event_category: 'Form',
            event_label: 'Hero Micro-Form',
          });
        }
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <p className="text-white text-[15px] leading-relaxed">
        We got it. Claudinei or Raimundo will call you shortly.
      </p>
    );
  }

  const inputClasses =
    'bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 rounded-[4px] h-[48px] px-3.5 text-[15px] outline-none focus:border-white/60 transition-[border-color] duration-150 w-full';

  return (
    <>
      {/* Desktop form — hidden on mobile */}
      <div className="hidden sm:block">
        <form onSubmit={handleSubmit} noValidate>
          {/* Row 1: Two-column fields */}
          <div className="flex gap-3 mb-3">
            {/* Name field */}
            <div className="flex-1">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                aria-required="true"
                aria-describedby={nameError ? 'hero-name-error' : undefined}
                className={inputClasses}
              />
              {nameError && (
                <p id="hero-name-error" className="text-white/70 text-[12px] mt-1">
                  {nameError}
                </p>
              )}
            </div>
            {/* Phone field */}
            <div className="flex-1">
              <input
                type="tel"
                name="phone"
                placeholder="Your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                aria-required="true"
                aria-describedby={phoneError ? 'hero-phone-error' : undefined}
                className={inputClasses}
              />
              {phoneError && (
                <p id="hero-phone-error" className="text-white/70 text-[12px] mt-1">
                  {phoneError}
                </p>
              )}
            </div>
          </div>

          {/* Row 2: Submit button */}
          <AccentButton
            type="submit"
            size="lg"
            loading={status === 'loading'}
            disabled={status === 'loading'}
            rounded="btn"
            className="w-full"
          >
            Get My Free Estimate →
          </AccentButton>

          {/* Row 3: Tertiary phone link */}
          <p className="text-[13px] mt-2">
            Or call directly:{' '}
            <a
              href="tel:+17743862977"
              className="text-signal no-underline hover:underline"
            >
              (774) 386-2977
            </a>
          </p>

          {/* Row 4: Error message */}
          {status === 'error' && (
            <p className="text-white/70 text-[13px] mt-2">
              Something went wrong — call us directly at{' '}
              <a href="tel:+17743862977" className="underline">
                (774) 386-2977
              </a>
            </p>
          )}
        </form>
      </div>

      {/* Mobile CTA — hidden on sm+ */}
      <div className="sm:hidden flex flex-col items-center gap-3">
        <AccentButton
          size="lg"
          href="tel:+17743862977"
          rounded="btn"
          className="w-full"
        >
          Call Now — (774) 386-2977
        </AccentButton>
        <a
          href="#contact"
          className="text-white/80 text-[14px] no-underline hover:text-white transition-colors duration-150"
        >
          Or send us your info →
        </a>
      </div>
    </>
  );
}
