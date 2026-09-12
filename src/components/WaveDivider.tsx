import React from 'react';

interface WaveProps {
  className?: string;
  variant?: 'dark-to-cream' | 'cream-to-dark' | 'dark-to-cream-inverted' | 'cream-to-dark-footer';
  fillColor?: string;
}

export const WaveDivider: React.FC<WaveProps> = ({ className = '', variant = 'dark-to-cream', fillColor }) => {
  if (variant === 'dark-to-cream') {
    // Top hero to cream section (downward dipping wave with gold rim)
    return (
      <div className={`relative w-full overflow-hidden leading-none z-10 pointer-events-none ${className}`}>
        <svg
          viewBox="0 0 1440 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-12 sm:h-16 md:h-20 lg:h-24 block"
        >
          {/* Subtle gold contour line */}
          <path
            d="M0 25 C320 75 720 -15 1120 40 C1280 60 1380 30 1440 20"
            stroke="#C59A58"
            strokeWidth="1.5"
            strokeOpacity="0.85"
            fill="none"
          />
          {/* Cream fill */}
          <path
            d="M0 25 C320 75 720 -15 1120 40 C1280 60 1380 30 1440 20 L1440 90 L0 90 Z"
            fill="#FAF8F5"
          />
        </svg>
      </div>
    );
  }

  if (variant === 'cream-to-dark') {
    // Premium Services / Services cream down to Dark band or Blog
    return (
      <div className={`relative w-full overflow-hidden leading-none z-10 pointer-events-none ${className}`}>
        <svg
          viewBox="0 0 1440 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-12 sm:h-16 md:h-20 lg:h-24 block"
        >
          {/* Subtle gold contour line */}
          <path
            d="M0 50 C380 5 820 85 1200 35 C1320 20 1390 40 1440 45"
            stroke="#C59A58"
            strokeWidth="1.5"
            strokeOpacity="0.85"
            fill="none"
          />
          {/* Dark fill directly over underlying section */}
          <path
            d="M0 50 C380 5 820 85 1200 35 C1320 20 1390 40 1440 45 L1440 90 L0 90 Z"
            fill={fillColor || '#121619'}
          />
        </svg>
      </div>
    );
  }

  if (variant === 'dark-to-cream-inverted') {
    // Bottom of Experience dark band returning to cream Our Services
    return (
      <div className={`relative w-full overflow-hidden leading-none z-10 pointer-events-none ${className}`}>
        <svg
          viewBox="0 0 1440 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-12 sm:h-16 md:h-20 lg:h-24 block"
        >
          {/* Subtle gold contour line */}
          <path
            d="M0 20 C280 65 740 -5 1160 50 C1280 65 1380 35 1440 25"
            stroke="#C59A58"
            strokeWidth="1.5"
            strokeOpacity="0.85"
            fill="none"
          />
          {/* Cream fill */}
          <path
            d="M0 20 C280 65 740 -5 1160 50 C1280 65 1380 35 1440 25 L1440 90 L0 90 Z"
            fill="#FAF8F5"
          />
        </svg>
      </div>
    );
  }

  // cream-to-dark-footer
  return (
    <div className={`relative w-full overflow-hidden leading-none z-10 pointer-events-none ${className}`}>
      <svg
        viewBox="0 0 1440 85"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-12 sm:h-16 md:h-20 lg:h-24 block"
      >
        <path
          d="M0 40 C340 10 760 70 1140 25 C1260 10 1370 30 1440 35"
          stroke="#C59A58"
          strokeWidth="1.5"
          strokeOpacity="0.85"
          fill="none"
        />
        <path
          d="M0 40 C340 10 760 70 1140 25 C1260 10 1370 30 1440 35 L1440 85 L0 85 Z"
          fill="#121619"
        />
      </svg>
    </div>
  );
};
