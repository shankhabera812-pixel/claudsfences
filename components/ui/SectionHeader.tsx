import React from 'react';

interface SectionHeaderProps {
  children: React.ReactNode;
  subCopy?: string;
  variant?: 'dark' | 'light';
  align?: 'center' | 'left';
  maxWidth?: string;
}

export default function SectionHeader({
  children,
  subCopy,
  variant = 'dark',
  align = 'center',
  maxWidth = '600px',
}: SectionHeaderProps) {
  return (
    <div className={align === 'center' ? 'text-center' : 'text-left'}>
      <h2
        className={`
          text-[clamp(1.75rem,4vw,2.5rem)] font-sans font-extrabold leading-[1.2] mb-4 tracking-tight
          ${variant === 'dark' ? 'text-forest' : 'text-offwhite'}
        `}
      >
        {children}
      </h2>
      {subCopy && (
        <p
          className={`
            text-[16px] leading-[1.7]
            ${variant === 'dark' ? 'text-muted' : 'text-offwhite/80'}
            ${align === 'center' ? 'mx-auto' : ''}
          `}
          style={{ maxWidth }}
        >
          {subCopy}
        </p>
      )}
    </div>
  );
}
