import React from 'react';

interface EyebrowLabelProps {
  children: string;
  variant?: 'dark' | 'light';
}

export default function EyebrowLabel({
  children,
  variant = 'dark',
}: EyebrowLabelProps) {
  return (
    <span
      className={`
        block text-[12px] font-medium tracking-[0.08em] uppercase mb-2
        ${variant === 'dark' ? 'text-fern' : 'text-offwhite/80'}
      `}
    >
      {children}
    </span>
  );
}
