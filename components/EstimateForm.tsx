'use client';

import { useState, useEffect, useRef } from 'react';
import { CheckCircle, AlertCircle, Lock, Loader2 } from 'lucide-react';
import AccentButton from '@/components/ui/AccentButton';

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

interface EstimateFormProps {
  variant: 'hero' | 'standalone';
}

export default function EstimateForm({ variant }: EstimateFormProps) {
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
          body: JSON.stringify({
            ...formData,
            _source: variant, // Track where the lead came from
          }),
        }
      );

      if (response.ok) {
        setStatus('success');
        // 4. Fire GA4 conversion event
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'generate_lead', {
            event_category: 'Form',
            event_label: `Free Estimate Request - ${variant}`,
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

  const isHero = variant === 'hero';

  const cardClasses = isHero
    ? 'bg-white rounded-form p-6 sm:p-8 w-full max-w-[600px] mx-auto shadow-[0_8px_32px_rgba(0,0,0,0.25)] border border-white/20'
    : 'bg-white rounded-form p-8 sm:p-12 max-w-[600px] w-full mx-auto border border-white/10';

  const buttonText = isHero ? 'Get My Free Estimate' : 'Send My Free Estimate Request';

  return (
    <div className={cardClasses}>
      {/* Standalone variant header */}
      {!isHero && (
        <div className="text-center mb-8">
          <h2 className="text-[clamp(1.75rem,4vw,2.25rem)] font-semibold text-navy mb-3">
            Tell us about your fence.
          </h2>
          <p className="text-muted text-[16px] max-w-[500px] mx-auto">
            Fill out this form and Claudinei or Raimundo will reach out directly — usually
            the same day. No middlemen, no call centers. Just a straightforward conversation
            about what you need.
          </p>
        </div>
      )}

      {status === 'success' ? (
        /* ===== SUCCESS STATE ===== */
        <div className="flex flex-col items-center text-center gap-4 py-8">
          <CheckCircle size={56} color="var(--color-accent)" />
          <h3
            ref={successRef}
            tabIndex={-1}
            className="text-[22px] font-semibold text-navy outline-none"
          >
            We&apos;ve got your request.
          </h3>
          <p className="text-[15px] text-muted max-w-md">
            Claudinei or Raimundo will be in touch shortly — usually the same day. We
            genuinely look forward to helping you. Thank you for choosing Claud&apos;s
            Fences.
          </p>
          <a
            href="tel:+17743862977"
            className="text-navy text-[14px] underline hover:text-accent transition-colors duration-150"
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
              htmlFor={`${variant}-name`}
              className="block text-[14px] font-medium text-bodytext mb-1.5"
            >
              Your Name
            </label>
            <input
              type="text"
              id={`${variant}-name`}
              name="name"
              placeholder="Jane Smith"
              value={formData.name}
              onChange={handleChange}
              required
              aria-required="true"
              aria-describedby={errors.name ? `${variant}-name-error` : undefined}
              className={getInputClasses('name')}
            />
            {errors.name && (
              <p id={`${variant}-name-error`} className="text-[12px] text-error mt-1">
                {errors.name}
              </p>
            )}
          </div>

          {/* Field 2 — Phone */}
          <div className="mb-5">
            <label
              htmlFor={`${variant}-phone`}
              className="block text-[14px] font-medium text-bodytext mb-1.5"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id={`${variant}-phone`}
              name="phone"
              placeholder="(508) 555-0100"
              value={formData.phone}
              onChange={handleChange}
              required
              aria-required="true"
              aria-describedby={
                errors.phone ? `${variant}-phone-error ${variant}-phone-hint` : `${variant}-phone-hint`
              }
              className={getInputClasses('phone')}
            />
            <p id={`${variant}-phone-hint`} className="text-[12px] text-muted mt-1">
              We&apos;ll call or text — your preference.
            </p>
            {errors.phone && (
              <p id={`${variant}-phone-error`} className="text-[12px] text-error mt-1">
                {errors.phone}
              </p>
            )}
          </div>

          {/* Field 3 — Email */}
          <div className="mb-5">
            <label
              htmlFor={`${variant}-email`}
              className="block text-[14px] font-medium text-bodytext mb-1.5"
            >
              Email Address
            </label>
            <input
              type="email"
              id={`${variant}-email`}
              name="email"
              placeholder="jane@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              aria-required="true"
              aria-describedby={errors.email ? `${variant}-email-error` : undefined}
              className={getInputClasses('email')}
            />
            {errors.email && (
              <p id={`${variant}-email-error`} className="text-[12px] text-error mt-1">
                {errors.email}
              </p>
            )}
          </div>

          {/* Field 4 — Address */}
          <div className="mb-5">
            <label
              htmlFor={`${variant}-address`}
              className="block text-[14px] font-medium text-bodytext mb-1.5"
            >
              Property Address or Town
            </label>
            <input
              type="text"
              id={`${variant}-address`}
              name="address"
              placeholder="123 Main St, Shrewsbury, MA"
              value={formData.address}
              onChange={handleChange}
              required
              aria-required="true"
              aria-describedby={errors.address ? `${variant}-address-error` : undefined}
              className={getInputClasses('address')}
            />
            {errors.address && (
              <p id={`${variant}-address-error`} className="text-[12px] text-error mt-1">
                {errors.address}
              </p>
            )}
          </div>

          {/* Field 5 — Fence Type (optional) */}
          <div className="mb-5">
            <label
              htmlFor={`${variant}-fenceType`}
              className="block text-[14px] font-medium text-bodytext mb-1.5"
            >
              What type of fence are you interested in?{' '}
              <span className="text-muted font-normal">(optional)</span>
            </label>
            <select
              id={`${variant}-fenceType`}
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
              htmlFor={`${variant}-notes`}
              className="block text-[14px] font-medium text-bodytext mb-1.5"
            >
              Tell us a bit about your project{' '}
              <span className="text-muted font-normal">(optional)</span>
            </label>
            <textarea
              id={`${variant}-notes`}
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
          <AccentButton
            type="submit"
            size="lg"
            loading={status === 'loading'}
            disabled={status === 'loading'}
            rounded="btn"
            className="w-full"
          >
            {buttonText}
          </AccentButton>
        </form>
      )}
    </div>
  );
}
