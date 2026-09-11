import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Home, Building2, Store, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ProjectItem } from '../types';

import { TextReveal } from './TextReveal';

interface FeaturedProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

const allProjects: ProjectItem[] = [
  {
    id: 'hillside-residence',
    title: 'Hillside Residence',
    category: 'Luxury Villa',
    sqft: '4,800 sq ft',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=900&q=80',
    description: 'A hillside sanctuary balancing cantilevered concrete planes, floor-to-ceiling panoramic glass, and a temperature-controlled perimeter infinity pool.',
    year: '2023',
    location: 'Aspen, Colorado',
  },
  {
    id: 'zenith-office-tower',
    title: 'Zenith Office Tower',
    category: 'Commercial',
    sqft: '35,000 sq ft',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
    description: 'A LEED Platinum certified commercial high-rise utilizing low-emissivity glass facades and integrated thermal energy recovery systems.',
    year: '2024',
    location: 'Austin, Texas',
  },
  {
    id: 'aurora-retail-complex',
    title: 'Aurora Retail Complex',
    category: 'Commercial',
    sqft: '22,000 sq ft',
    image: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?auto=format&fit=crop&w=900&q=80',
    description: 'A bespoke lifestyle and retail flagship combining thermally treated timber fins, warm architectural illumination, and open-air pedestrian promenades.',
    year: '2023',
    location: 'Seattle, Washington',
  },
  {
    id: 'solaria-coastal-villa',
    title: 'Solaria Coastal Villa',
    category: 'Luxury Villa',
    sqft: '6,200 sq ft',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80',
    description: 'Oceanfront minimalist residence with natural limestone finishes, passive solar shading, and seamless indoor-outdoor living terraces.',
    year: '2024',
    location: 'Malibu, California',
  },
  {
    id: 'nexus-tech-headquarters',
    title: 'Nexus Innovation Hub',
    category: 'Commercial',
    sqft: '48,000 sq ft',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80',
    description: 'Next-generation tech workspace engineered for agile collaboration with central biophilic atriums and smart environmental controls.',
    year: '2024',
    location: 'San Jose, California',
  },
];

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onSelectProject }) => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % (allProjects.length - 2));
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + (allProjects.length - 2)) % (allProjects.length - 2));
  };

  const visibleProjects = allProjects.slice(startIndex, startIndex + 3);

  const getCategoryIcon = (category: string) => {
    if (category.toLowerCase().includes('villa') || category.toLowerCase().includes('residence')) {
      return <Home className="w-4 h-4 text-[#C59A58]" />;
    }
    if (category.toLowerCase().includes('retail') || category.toLowerCase().includes('complex')) {
      return <Store className="w-4 h-4 text-[#C59A58]" />;
    }
    return <Building2 className="w-4 h-4 text-[#C59A58]" />;
  };

  return (
    <section id="projects" className="relative bg-[#FAF8F5] pt-10 pb-16 sm:pb-20 overflow-hidden">
      {/* Delicate Architectural Blueprint Watermark (Top Left) */}
      <div className="absolute top-0 left-0 w-80 h-80 opacity-[0.07] pointer-events-none">
        <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <rect x="20" y="20" width="260" height="260" stroke="#C59A58" strokeWidth="1.5" strokeDasharray="6 6" />
          <line x1="20" y1="90" x2="280" y2="90" stroke="#C59A58" strokeWidth="1" />
          <line x1="20" y1="180" x2="280" y2="180" stroke="#C59A58" strokeWidth="1" />
          <line x1="100" y1="20" x2="100" y2="280" stroke="#C59A58" strokeWidth="1" />
          <line x1="200" y1="20" x2="200" y2="280" stroke="#C59A58" strokeWidth="1" />
          <circle cx="150" cy="150" r="60" stroke="#C59A58" strokeWidth="1" strokeDasharray="3 3" />
        </svg>
      </div>

      {/* Delicate Leaves Accent on Right Edge */}
      <div className="absolute top-12 right-0 w-32 sm:w-44 opacity-80 pointer-events-none select-none">
        <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M160 30 C120 50 90 80 80 120" stroke="#879584" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M125 55 C110 35 115 15 125 10 C135 25 140 45 125 55 Z" fill="#71826e" opacity="0.8" />
          <path d="M102 75 C85 60 90 40 102 38 C110 50 115 70 102 75 Z" fill="#879584" opacity="0.85" />
          <path d="M88 100 C70 90 75 70 85 68 C95 78 98 96 88 100 Z" fill="#62735f" opacity="0.9" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#C59A58]"
              style={{ letterSpacing: '0.28em' }}
            >
              OUR WORK
            </span>
          </motion.div>
          <h2
            className="mt-2 text-3xl sm:text-4xl md:text-[42px] font-normal tracking-tight text-[#161A1D]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            <TextReveal text="Featured Projects" mode="words" delay={0.1} />
          </h2>
        </div>

        {/* Carousel Container with Left/Right Buttons */}
        <div className="relative">
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            id="projects-carousel-prev"
            aria-label="Previous Project"
            className="absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#E8DCBF]/90 hover:bg-[#C59A58] text-[#161A1D] hover:text-white flex items-center justify-center shadow-md transition-all duration-200 focus:outline-none"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            id="projects-carousel-next"
            aria-label="Next Project"
            className="absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#E8DCBF]/90 hover:bg-[#C59A58] text-[#161A1D] hover:text-white flex items-center justify-center shadow-md transition-all duration-200 focus:outline-none"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Projects Cards Grid (3 Columns matching the image) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
            {visibleProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => onSelectProject(project)}
                className="group cursor-pointer flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#EBE6DD]"
              >
                {/* Image Container with subtle hover zoom */}
                <div className="relative h-56 sm:h-60 overflow-hidden bg-slate-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle Gradient & Hover Action Pill */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-[#161A1D]/80 backdrop-blur-sm p-1.5 rounded-lg text-white">
                    <Maximize2 className="w-4 h-4 text-[#C59A58]" />
                  </div>
                </div>

                {/* Card Details */}
                <div className="p-4 sm:p-5 flex items-start gap-3.5 bg-white">
                  {/* Category Architectural Icon in Gold Box */}
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg border border-[#C59A58]/30 bg-[#C59A58]/10 flex items-center justify-center">
                    {getCategoryIcon(project.category)}
                  </div>

                  {/* Title & Specs */}
                  <div className="flex-1 min-w-0">
                    <h3
                      className="text-base sm:text-[17px] font-semibold text-[#161A1D] group-hover:text-[#C59A58] transition-colors truncate"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5 font-medium tracking-wide">
                      {project.category} <span className="text-[#C59A58]">•</span> {project.sqft}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Carousel Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-8 sm:mt-10">
            {[0, 1, 2].map((dotIndex) => (
              <button
                key={dotIndex}
                onClick={() => setStartIndex(dotIndex)}
                className={`transition-all duration-300 rounded-full ${
                  startIndex === dotIndex
                    ? 'w-6 h-2 bg-[#C59A58]'
                    : 'w-2 h-2 bg-[#D6CBB8] hover:bg-[#C59A58]/60'
                }`}
                aria-label={`Go to slide ${dotIndex + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
