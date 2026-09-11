import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { BlogPost } from '../types';

import { TextReveal } from './TextReveal';

interface BlogSectionProps {
  onSelectPost: (post: BlogPost) => void;
}

const blogPosts: BlogPost[] = [
  {
    id: 'top-10-trends',
    title: 'Top 10 Modern Home Design Trends for 2024',
    date: {
      month: 'MAY',
      day: '20',
    },
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
    category: 'Interior & Architecture',
    readTime: '5 min read',
    excerpt: 'Explore the rise of biophilic atriums, concealed acoustic timber wall panels, and monolithic stone islands dominating luxury residential spaces this year.',
  },
  {
    id: 'choosing-materials',
    title: 'Choosing the Right Materials for Long-Lasting Results',
    date: {
      month: 'MAY',
      day: '12',
    },
    image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80',
    category: 'Engineering & Materials',
    readTime: '7 min read',
    excerpt: 'An architect’s guide to selecting engineered cross-laminated timber, basalt aggregate concrete, and UV-resistant architectural bronze facades.',
  },
  {
    id: 'smart-homes',
    title: 'Smart Homes: The Future of Comfortable Living',
    date: {
      month: 'MAY',
      day: '05',
    },
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80',
    category: 'Smart Technology',
    readTime: '6 min read',
    excerpt: 'From automated circadian lighting grids to predictive geothermal climate regulation, how connected architecture elevates wellness and efficiency.',
  },
  {
    id: 'renovation-vs-rebuild',
    title: "Renovation vs. Rebuild: What's the Right Choice?",
    date: {
      month: 'APR',
      day: '28',
    },
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
    category: 'Project Strategy',
    readTime: '8 min read',
    excerpt: 'Evaluating structural integrity, zoning ordinances, embodied carbon savings, and return on capital when deciding between adaptive reuse or ground-up construction.',
  },
];

export const BlogSection: React.FC<BlogSectionProps> = ({ onSelectPost }) => {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + blogPosts.length) % blogPosts.length);
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % blogPosts.length);
  };

  return (
    <section id="insights" className="relative bg-gradient-to-b from-[#0B040B] to-[#33001E] pt-12 pb-16 sm:pb-24 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#FF007F] inline-block"
            style={{ letterSpacing: '0.28em' }}
          >
            INSIGHTS & IDEAS
          </motion.span>
          <h2
            className="mt-2 text-3xl sm:text-4xl md:text-[42px] font-normal tracking-tight text-white"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            <TextReveal text="From Our Blog" mode="words" delay={0.1} />
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            id="blog-carousel-prev"
            aria-label="Previous Post"
            className="absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#E8DCBF]/90 hover:bg-[#C59A58] text-[#161A1D] hover:text-white flex items-center justify-center shadow-md transition-all duration-200 focus:outline-none"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            id="blog-carousel-next"
            aria-label="Next Post"
            className="absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#E8DCBF]/90 hover:bg-[#C59A58] text-[#161A1D] hover:text-white flex items-center justify-center shadow-md transition-all duration-200 focus:outline-none"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogPosts.map((post, idx) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onClick={() => onSelectPost(post)}
                className="group cursor-pointer flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-[#EBE6DD]"
              >
                {/* Image Container with Date Badge */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Date Badge in Bottom Left Corner */}
                  <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1.5 rounded shadow-md text-center leading-none border border-black/5">
                    <span className="block text-[9.5px] font-bold text-slate-500 uppercase tracking-widest font-mono">
                      {post.date.month}
                    </span>
                    <span className="block text-base font-bold text-[#161A1D] mt-0.5">
                      {post.date.day}
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    <h3
                      className="text-[15px] sm:text-base font-semibold text-[#161A1D] group-hover:text-[#C59A58] transition-colors leading-snug"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {post.title}
                    </h3>
                  </div>

                  {/* Read More Link */}
                  <div className="pt-4 flex items-center gap-1.5 text-xs font-semibold text-slate-600 group-hover:text-[#C59A58] transition-colors">
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};
