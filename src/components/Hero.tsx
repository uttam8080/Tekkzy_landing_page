import React from 'react';
import { motion } from 'motion/react';

interface HeroProps {
  onViewProjects?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewProjects }) => {
  return (
    <section id="home" className="relative w-full min-h-[90vh] bg-[#111] overflow-hidden font-sans pb-8">
      
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
      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between pt-16 sm:pt-20 lg:pt-22 pb-10 px-4 sm:px-8 lg:px-12 gap-8">
        
        {/* LEFT COLUMN: Main Text */}
        <div className="flex-1 flex flex-col justify-center max-w-2xl lg:-ml-4 -mt-4 sm:-mt-6 lg:-mt-10">
          
          {/* Headline & Text with Staggered Mask Reveal */}
          <div className="py-2 sm:py-4">
            
            {/* Tagline Badge Mask Reveal */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              <span className="text-[#25D366] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
                You Think We Create
              </span>
            </motion.div>

            {/* Main Headline Mask Reveal */}
            <h1 className="font-display-hero text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold text-white leading-[1.08] tracking-tight mb-8">
              {/* Line 1 Reveal */}
              <div className="overflow-hidden pb-1">
                <motion.span
                  initial={{ y: '110%', opacity: 0, rotateX: -30 }}
                  animate={{ y: '0%', opacity: 1, rotateX: 0 }}
                  transition={{ duration: 0.85, delay: 0.1, ease: [0.215, 0.61, 0.355, 1] }}
                  className="inline-block transform-gpu"
                >
                  Create Your Brand
                </motion.span>
              </div>

              {/* Line 2 Gradient Highlight Reveal */}
              <div className="overflow-hidden py-1">
                <motion.span
                  initial={{ y: '110%', opacity: 0, rotateX: -30 }}
                  animate={{ y: '0%', opacity: 1, rotateX: 0 }}
                  transition={{ duration: 0.85, delay: 0.25, ease: [0.215, 0.61, 0.355, 1] }}
                  className="inline-block transform-gpu bg-gradient-to-r from-white via-[#25D366] to-[#128C7E] bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(37,211,102,0.3)]"
                >
                  Identity Instantly.
                </motion.span>
              </div>
            </h1>
            
            {/* Action Button Reveal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.215, 0.61, 0.355, 1] }}
            >
              <button 
                onClick={onViewProjects}
                className="bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#1ebf5b] hover:to-[#0f7a6e] text-white font-bold text-sm px-8 py-3.5 rounded-full tracking-wider shadow-lg shadow-[#25D366]/20 transition-all hover:shadow-xl hover:-translate-y-0.5"
              >
                EXPLORE OUR WORK
              </button>
            </motion.div>
          </div>
        </div>

        {/* RIGHT COLUMN: Hand Holding App Phone Showcase */}
        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="flex-1 flex items-center justify-center lg:justify-end relative w-full max-w-md lg:max-w-xl lg:translate-x-24"
        >
          {/* Ambient Glowing Backdrops */}
          <div className="absolute w-[360px] h-[360px] bg-[#D500F9]/30 rounded-full blur-[110px] pointer-events-none mix-blend-screen" />
          <div className="absolute w-[280px] h-[280px] bg-[#25D366]/25 rounded-full blur-[90px] pointer-events-none" />

          {/* Unified Hand + Phone Container */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 w-full flex items-center justify-center pt-6"
          >
            {/* Cupped Hand (Base holding object) */}
            <img
              src="/Cupped Hand.png"
              alt="Cupped Hand Visual"
              className="w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[480px] h-auto object-contain drop-shadow-[0_25px_45px_rgba(213,0,249,0.35)]"
            />

            {/* App Phone (Held directly inside hand fingers & palm, shifted further right) */}
            <div className="absolute top-[8%] sm:top-[6%] lg:top-[5%] left-[72%] -translate-x-1/2 z-20 w-[54%] max-w-[210px] sm:max-w-[270px] lg:max-w-[310px] pointer-events-auto">
              <img
                src="/App Phone.png"
                alt="App Phone Showcase"
                className="w-full h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)] transition-transform duration-500 hover:scale-105"
              />
            </div>
          </motion.div>
        </motion.div>

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
