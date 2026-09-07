import React from 'react';
import { motion } from 'motion/react';

interface HeroProps {
  onViewProjects?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewProjects }) => {
  return (
    <section id="home" className="relative w-full min-h-[115vh] bg-[#111] overflow-hidden font-sans pb-32">
      
      {/* 1. Left Background Image */}
      <img
        src="https://images.unsplash.com/photo-1542273917363-3b1817f69a5d?auto=format&fit=crop&q=85&w=2000"
        alt="Forest path"
        className="absolute top-0 left-0 w-3/4 h-full object-cover object-left"
      />

      {/* Dark overlay for text readability */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-black/30" />

      {/* 2. Top-Left Green Overlay Blob */}
      <div className="absolute top-[-50px] left-[-50px] w-[400px] h-[300px] bg-[#25D366]/40 blur-3xl rounded-full pointer-events-none" />

      {/* 3. The Central White Organic Wave Split */}
      {/* We use an SVG that covers 100% of the viewport and fills the right side with white. */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-[-20px_0_30px_rgba(0,0,0,0.5)]" 
        preserveAspectRatio="none" 
        viewBox="0 0 100 100" 
        fill="white"
      >
        <path d="M 60 0 C 65 25, 75 35, 55 50 C 35 65, 45 85, 25 100 L 100 100 L 100 0 Z" />
      </svg>

      {/* 4. Top-Middle Soft Shape Overlay (seen overlapping the image/white edge) */}
      <div className="absolute top-0 left-[45%] w-[300px] h-[250px] bg-gray-200/50 mix-blend-multiply blur-2xl rounded-full pointer-events-none" />

      {/* 5. Bottom-Right Green Organic Blobs */}
      <div className="absolute bottom-[-100px] right-[-50px] w-[400px] h-[400px] bg-[#25D366]/20 blur-2xl rounded-full pointer-events-none" />
      <div className="absolute bottom-[50px] right-[50px] w-[200px] h-[200px] bg-[#25D366]/30 blur-3xl rounded-full pointer-events-none" />

      {/* 6. Content Container */}
      <div className="relative z-10 w-full h-full flex pt-32 pb-24 px-8 sm:px-16 lg:px-24">
        
        {/* LEFT COLUMN: Main Text */}
        <div className="flex-1 flex flex-col justify-center max-w-2xl">
          
          {/* Headline & Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="my-auto py-10"
          >
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              <span className="text-[#25D366] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
                You Think We Create
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-black text-white leading-[1.1] tracking-tight mb-8 uppercase">
              Create Your Brand <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent">
                Identity Instantly.
              </span>
            </h1>
            
            <button 
              onClick={onViewProjects}
              className="bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#1ebf5b] hover:to-[#0f7a6e] text-white font-bold text-sm px-8 py-3.5 rounded-full tracking-wider shadow-lg shadow-[#25D366]/20 transition-all hover:shadow-xl hover:-translate-y-0.5"
            >
              EXPLORE OUR WORK
            </button>
          </motion.div>
        </div>
      </div>

      {/* 7. Bottom Curve Divider */}
      <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg 
          className="relative block w-full h-[30px] sm:h-[60px]" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0 Q600,100 1200,0 L1200,120 L0,120 Z" 
            fill="#FAF8F5" 
          />
        </svg>
      </div>
    </section>
  );
};
