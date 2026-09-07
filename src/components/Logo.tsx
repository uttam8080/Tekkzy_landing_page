import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', variant = 'light' }) => {
  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8 sm:w-9 sm:h-9',
    lg: 'w-11 h-11',
  };

  const titleSizes = {
    sm: 'text-sm tracking-[0.2em]',
    md: 'text-lg sm:text-xl tracking-[0.22em]',
    lg: 'text-2xl tracking-[0.24em]',
  };

  const subtitleSizes = {
    sm: 'text-[7px] tracking-[0.25em]',
    md: 'text-[8.5px] tracking-[0.3em]',
    lg: 'text-[10px] tracking-[0.35em]',
  };

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 ${className}`}>
      {/* Geometric Gold Building Lines Icon */}
      <div className={`relative flex-shrink-0 ${iconSizes[size]}`}>
        <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Left Tower */}
          <path
            d="M8 38 V20 L16 14 V38"
            stroke="#C59A58"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Center Tall Tower */}
          <path
            d="M16 38 V14 L26 6 V38"
            stroke="#C59A58"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Right Tower */}
          <path
            d="M26 38 V10 L36 18 V38"
            stroke="#C59A58"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Internal architectural lattice detail lines */}
          <line x1="12" y1="23" x2="12" y2="38" stroke="#DFBA78" strokeWidth="1" strokeDasharray="1.5 1.5" />
          <line x1="21" y1="16" x2="21" y2="38" stroke="#DFBA78" strokeWidth="1" strokeDasharray="1.5 1.5" />
          <line x1="31" y1="24" x2="31" y2="38" stroke="#DFBA78" strokeWidth="1" strokeDasharray="1.5 1.5" />
          {/* Base foundation line */}
          <line x1="6" y1="38" x2="38" y2="38" stroke="#C59A58" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      </div>

      {/* Brand Name and Tagline */}
      <div className="flex flex-col select-none">
        <span
          className={`font-serif font-bold uppercase ${titleSizes[size]} ${
            variant === 'light' ? 'text-white' : 'text-[#121619]'
          }`}
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          BUILDORA
        </span>
        <span
          className={`font-sans font-medium uppercase ${subtitleSizes[size]} text-[#C59A58]`}
          style={{ letterSpacing: '0.28em' }}
        >
          BUILT TO INSPIRE
        </span>
      </div>
    </div>
  );
};
