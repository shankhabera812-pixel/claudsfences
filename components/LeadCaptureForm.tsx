'use client';

import { useState, useEffect, useRef } from 'react';
import { CheckCircle, AlertCircle, Lock, Loader2 } from 'lucide-react';
import OrangeButton from '@/components/ui/OrangeButton';

type FormData = {
  name: string;
  phone: string;
  email: string;
  address: string;
  fenceType: string;
  notes: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;
type FormStatus = 'idle' | 'loading' | 'success' | 'error';

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim()) {
    errors.name = 'Please enter your name.';
  }
  if (!/^[\d\s\(\)\-\+]{7,}$/.test(data.phone)) {
    errors.phone = 'Please enter a valid phone number.';
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!data.address.trim()) {
    errors.address = 'Please enter your property address or town.';
  }

  return errors;
}

export default function LeadCaptureForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    address: '',
    fenceType: '',
    notes: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const successRef = useRef<HTMLHeadingElement>(null);

  // Focus the success heading when form submission succeeds
  useEffect(() => {
    if (status === 'success' && successRef.current) {
      successRef.current.focus();
    }
  }, [status]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field on user input
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Validate
    const newErrors = validateForm(formData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Focus the first field with an error
      const firstErrorField = Object.keys(newErrors)[0];
      const el = document.querySelector(
        `[name="${firstErrorField}"]`
      ) as HTMLElement;
      if (el) el.focus();
      return;
    }

    // 2. Set loading state
    setStatus('loading');

    // 3. Send to Formspree
    try {
      const response = await fetch(
        `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setStatus('success');
        // 4. Fire GA4 conversion event
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'generate_lead', {
            event_category: 'Form',
            event_label: 'Free Estimate Request',
          });
        }
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputBaseClasses =
    'w-full px-3.5 py-2.5 text-[15px] rounded-card outline-none transition-[border-color] duration-150 bg-white text-bodytext';
  const inputDefaultBorder = 'border border-border-light focus:border-2 focus:border-navy';
  const inputErrorBorder = 'border-2 border-error';

  const getInputClasses = (fieldName: keyof FormData) =>
    `${inputBaseClasses} ${errors[fieldName] ? inputErrorBorder : inputDefaultBorder}`;

  return (
    <section id="contact" className="bg-navy py-20">
      {/* Section Header */}
      <div className="text-center mb-10 px-6">
        <h2 className="text-[clamp(1.75rem,4vw,2.25rem)] font-semibold text-white mb-3">
          Request Your Free Estimate
        </h2>
        <p className="text-white/80 text-[16px] max-w-[500px] mx-auto">
          Fill out the form below and we&apos;ll get back to you within 24
          hours. No commitment required.
        </p>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-form p-8 sm:p-12 max-w-[600px] w-full mx-auto shadow-[0_4px_24px_rgba(0,0,0,0.12)]">
        {status === 'success' ? (
          /* ===== SUCCESS STATE ===== */
          <div className="flex flex-col items-center text-center gap-4 py-8">
            <CheckCircle size={56} color="#FF6B00" />
            <h3
              ref={successRef}
              tabIndex={-1}
              className="text-[22px] font-semibold text-navy outline-none"
            >
              We&apos;ve received your request!
            </h3>
            <p className="text-[15px] text-muted max-w-md">
              Someone from our team will reach out to you within 24 hours —
              usually the same day. Thank you for considering Claud&apos;s
              Fences.
            </p>
            <a
              href="tel:+17743862977"
              className="text-navy text-[14px] underline hover:text-orange transition-colors duration-150"
            >
              Want to reach us directly? Call (774) 386-2977
            </a>
          </div>
        ) : (
          /* ===== FORM STATE ===== */
          <form onSubmit={handleSubmit} noValidate>
            {/* Error Banner */}
            {status === 'error' && (
              <div className="bg-[#FEF2F2] border border-[#FCA5A5] rounded-card px-4 py-3 mb-4 flex items-start gap-2">
                <AlertCircle
                  size={16}
                  color="#EF4444"
                  className="flex-shrink-0 mt-0.5"
                />
                <p className="text-[13px] text-error">
                  Something went wrong — please try again, or call us directly
                  at{' '}
                  <a href="tel:+17743862977" className="underline">
                    (774) 386-2977
                  </a>
                  .
                </p>
              </div>
            )}

            {/* Field 1 — Name */}
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block text-[14px] font-medium text-bodytext mb-1.5"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Jane Smith"
                value={formData.name}
                onChange={handleChange}
                required
                aria-required="true"
                aria-describedby={errors.name ? 'name-error' : undefined}
                className={getInputClasses('name')}
              />
              {errors.name && (
                <p id="name-error" className="text-[12px] text-error mt-1">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Field 2 — Phone */}
            <div className="mb-5">
              <label
                htmlFor="phone"
                className="block text-[14px] font-medium text-bodytext mb-1.5"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="(508) 555-0100"
                value={formData.phone}
                onChange={handleChange}
                required
                aria-required="true"
                aria-describedby={
                  errors.phone ? 'phone-error phone-hint' : 'phone-hint'
                }
                className={getInputClasses('phone')}
              />
              <p id="phone-hint" className="text-[12px] text-muted mt-1">
                We&apos;ll call or text — your preference.
              </p>
              {errors.phone && (
                <p id="phone-error" className="text-[12px] text-error mt-1">
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Field 3 — Email */}
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block text-[14px] font-medium text-bodytext mb-1.5"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="jane@email.com"
                value={formData.email}
                onChange={handleChange}
                required
                aria-required="true"
                aria-describedby={errors.email ? 'email-error' : undefined}
                className={getInputClasses('email')}
              />
              {errors.email && (
                <p id="email-error" className="text-[12px] text-error mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Field 4 — Address */}
            <div className="mb-5">
              <label
                htmlFor="address"
                className="block text-[14px] font-medium text-bodytext mb-1.5"
              >
                Property Address or Town
              </label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="123 Main St, Shrewsbury, MA"
                value={formData.address}
                onChange={handleChange}
                required
                aria-required="true"
                aria-describedby={errors.address ? 'address-error' : undefined}
                className={getInputClasses('address')}
              />
              {errors.address && (
                <p id="address-error" className="text-[12px] text-error mt-1">
                  {errors.address}
                </p>
              )}
            </div>

            {/* Field 5 — Fence Type (optional) */}
            <div className="mb-5">
              <label
                htmlFor="fenceType"
                className="block text-[14px] font-medium text-bodytext mb-1.5"
              >
                What type of fence are you interested in?{' '}
                <span className="text-muted font-normal">(optional)</span>
              </label>
              <select
                id="fenceType"
                name="fenceType"
                value={formData.fenceType}
                onChange={handleChange}
                className={`${inputBaseClasses} ${inputDefaultBorder} appearance-none`}
              >
                <option value="" disabled>
                  Select a fence type...
                </option>
                <option value="Wood Fence">Wood Fence</option>
                <option value="Vinyl Fence">Vinyl Fence</option>
                <option value="Chain Link Fence">Chain Link Fence</option>
                <option value="Aluminum Fence">Aluminum Fence</option>
                <option value="I need a repair">I need a repair</option>
                <option value="Not sure yet — need guidance">
                  Not sure yet — need guidance
                </option>
              </select>
            </div>

            {/* Field 6 — Notes (optional) */}
            <div className="mb-5">
              <label
                htmlFor="notes"
                className="block text-[14px] font-medium text-bodytext mb-1.5"
              >
                Tell us a bit about your project{' '}
                <span className="text-muted font-normal">(optional)</span>
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={3}
                placeholder="e.g. 'Backyard privacy fence, roughly 150 feet, need a gate for the driveway side.'"
                value={formData.notes}
                onChange={handleChange}
                className={`${inputBaseClasses} ${inputDefaultBorder} resize-y`}
              />
            </div>

            {/* Privacy Micro-copy */}
            <div className="flex items-center justify-center gap-1.5 mt-4 mb-4">
              <Lock size={13} className="text-muted flex-shrink-0" />
              <p className="text-[12px] text-muted text-center">
                Your information is private and never sold. We&apos;ll only use
                it to contact you about your estimate.
              </p>
            </div>

            {/* Submit Button */}
            <OrangeButton
              type="submit"
              size="lg"
              loading={status === 'loading'}
              disabled={status === 'loading'}
              rounded="btn"
              className="w-full"
            >
              Send My Free Estimate Request
            </OrangeButton>

            {/* Response Time Micro-copy */}
            <p className="text-[12px] text-muted text-center mt-3">
              We respond within 24 hours. Same-day response often available.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
