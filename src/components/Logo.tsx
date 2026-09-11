import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', variant = 'light' }) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9 sm:w-10 sm:h-10',
    lg: 'w-12 h-12',
  };

  const line1Sizes = {
    sm: 'text-[8.5px] tracking-[0.2em]',
    md: 'text-[10px] sm:text-[11px] tracking-[0.2em]',
    lg: 'text-xs tracking-[0.22em]',
  };

  const line2Sizes = {
    sm: 'text-[7.5px] tracking-[0.22em]',
    md: 'text-[9px] sm:text-[10px] tracking-[0.22em]',
    lg: 'text-[11px] tracking-[0.24em]',
  };

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 ${className}`}>
      {/* Brand Cloud Icon */}
      <div className={`relative flex-shrink-0 ${iconSizes[size]}`}>
        <img
          src="/logo.png"
          alt="Tekkzy Logo"
          className="w-full h-full object-contain drop-shadow-md"
        />
      </div>

      {/* Brand Text */}
      <div className="flex flex-col select-none text-left">
        <span
          className={`font-bold uppercase leading-tight ${line1Sizes[size]} ${
            variant === 'light' ? 'text-white' : 'text-[#121619]'
          }`}
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          INTELLIGENT
        </span>
        <span
          className={`font-semibold uppercase leading-tight mt-0.5 ${line2Sizes[size]} ${
            variant === 'light' ? 'text-white/90' : 'text-[#121619]/80'
          }`}
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          CLOUD APPLICATION
        </span>
      </div>
    </div>
  );
};
