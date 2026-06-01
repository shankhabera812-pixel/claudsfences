import React from 'react';
import { Loader2 } from 'lucide-react';

interface AccentButtonProps {
  href?: string;
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  loading?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: 'h-[40px] px-5 text-[14px]',
  md: 'h-[52px] px-7 text-[15px] min-w-[240px]',
  lg: 'h-[56px] px-8 text-[16px] min-w-[220px]',
};

export default function AccentButton({
  href,
  size,
  children,
  onClick,
  type = 'button',
  disabled = false,
  loading = false,
  className = '',
}: AccentButtonProps) {
  const isDisabled = disabled || loading;

  const baseClasses = `
    inline-flex items-center justify-center gap-2
    bg-cedar hover:bg-cedar-hover
    text-forest font-bold tracking-[0.03em]
    rounded-btn
    transition-colors duration-150 ease-in-out
    active:scale-[0.98]
    focus-visible:outline-2 focus-visible:outline-cedar focus-visible:outline-offset-2
    cursor-pointer border-none
    ${sizeClasses[size]}
    ${isDisabled ? 'opacity-60 cursor-not-allowed pointer-events-none' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  const content = loading ? (
    <>
      <Loader2 size={18} className="animate-spin" />
      Sending…
    </>
  ) : (
    children
  );

  if (href && !onClick && type === 'button') {
    return (
      <a href={href} className={baseClasses}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      aria-busy={loading}
      className={baseClasses}
    >
      {content}
    </button>
  );
}
