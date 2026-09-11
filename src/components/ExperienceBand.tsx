import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  TrendingUp, 
  Users, 
  Star, 
  Globe, 
  ArrowUpRight, 
  Quote, 
  X, 
  CheckCircle2, 
  Building2, 
  ShoppingBag, 
  Utensils, 
  Cpu, 
  Sparkles 
} from 'lucide-react';
import { WaveDivider } from './WaveDivider';

import { TextReveal } from './TextReveal';

export interface ClientData {
  id: string;
  name: string;
  domain: string;
  logoText: string;
  logoBg: string;
  category: 'Hospitality' | 'E-Commerce' | 'Tech' | 'Creative';
  categoryLabel: string;
  quote: string;
  author: string;
  role: string;
  metrics: {
    label: string;
    value: string;
  }[];
  deliverables: string[];
  gradient: string;
  colorAccent: string;
}

const clientsData: ClientData[] = [
  {
    id: 'happyprancer',
    name: 'Happyprancer',
    domain: 'happyprancer.com',
    logoText: 'HAPPY PRANCER',
    logoBg: 'from-blue-600 via-indigo-600 to-violet-700',
    category: 'E-Commerce',
    categoryLabel: 'E-Commerce & Retail',
    quote:
      'The digital marketing strategies and web identity created for us transformed our entire online presence. Our website traffic and customer engagement soared within weeks!',
    author: 'Elena Vance',
    role: 'Founder & CEO',
    metrics: [
      { label: 'Traffic Growth', value: '+340%' },
      { label: 'Active Shoppers', value: '45K+' },
      { label: 'Conversion Rate', value: '4.8%' },
    ],
    deliverables: ['E-Commerce Platform', 'Digital Marketing Campaign', 'Brand Identity', 'SEO Engine'],
    gradient: 'from-[#3B82F6] to-[#8B5CF6]',
    colorAccent: '#3B82F6',
  },
  {
    id: 'onebite',
    name: 'OneBite Cafe',
    domain: 'onebitebpt.awsaiapp.com',
    logoText: 'ONEBITE CAFE',
    logoBg: 'from-emerald-500 via-teal-600 to-cyan-700',
    category: 'Hospitality',
    categoryLabel: 'Hospitality & Dining',
    quote:
      'Tekkzy has been a game-changer for our cafe. Their web application and digital marketing services significantly boosted our online bookings. The personal dashboard makes managing orders a breeze!',
    author: 'Marcus Chen',
    role: 'Managing Director',
    metrics: [
      { label: 'Monthly Orders', value: '18.5K' },
      { label: 'Customer Retention', value: '89%' },
      { label: 'Order Growth', value: '+210%' },
    ],
    deliverables: ['Web Booking App', 'Admin Dashboard', 'Payment Gateway Integration', 'Local SEO'],
    gradient: 'from-[#06B6D4] to-[#10B981]',
    colorAccent: '#10B981',
  },
  {
    id: 'disha',
    name: 'Disha Hotel & Restaurant',
    domain: 'dishahotel.com',
    logoText: 'DISHA HOTEL',
    logoBg: 'from-amber-500 via-rose-600 to-purple-700',
    category: 'Hospitality',
    categoryLabel: 'Hospitality & Management',
    quote:
      'Hotel management has never been easier since we adopted the custom AWSAIApp platform. The streamlined guest dashboard and integrated payments vastly improved our operational efficiency.',
    author: 'Rajesh Sharma',
    role: 'General Manager',
    metrics: [
      { label: 'Direct Bookings', value: '+165%' },
      { label: 'Guest Rating', value: '4.9/5' },
      { label: 'Check-in Time', value: '-60%' },
    ],
    deliverables: ['Hotel Management System', 'POS & Payment Gateway', 'Multi-language Portal', 'Staff Analytics'],
    gradient: 'from-[#F59E0B] to-[#EC4899]',
    colorAccent: '#F59E0B',
  },
  {
    id: 'nexacraft',
    name: 'NexaCraft AI',
    domain: 'nexacraft.io',
    logoText: 'NEXACRAFT',
    logoBg: 'from-cyan-600 via-blue-600 to-indigo-700',
    category: 'Tech',
    categoryLabel: 'Tech & SaaS',
    quote:
      'Their design team turned our complex AI architecture into a sleek, high-converting product showcase. Our user acquisition doubled in the first quarter.',
    author: 'Sarah Jenkins',
    role: 'VP of Product',
    metrics: [
      { label: 'User Signups', value: '85K+' },
      { label: 'SaaS ARR Growth', value: '+310%' },
      { label: 'Platform Uptime', value: '99.99%' },
    ],
    deliverables: ['SaaS Product UI/UX', 'Interactive Demo Dashboard', 'Design System', 'API Documentation'],
    gradient: 'from-[#06B6D4] to-[#6366F1]',
    colorAccent: '#06B6D4',
  },
  {
    id: 'aurastudio',
    name: 'Aura Studio',
    domain: 'aurastudio.design',
    logoText: 'AURA STUDIO',
    logoBg: 'from-pink-500 via-purple-600 to-indigo-800',
    category: 'Creative',
    categoryLabel: 'Creative & Media',
    quote:
      'Working with this team gave our agency a modern digital facade that wins enterprise contracts. The micro-animations and typography elevate our portfolio instantly.',
    author: 'Julian Thorne',
    role: 'Creative Director',
    metrics: [
      { label: 'Lead Inquiries', value: '+280%' },
      { label: 'Avg Deal Size', value: '+150%' },
      { label: 'Client Satisfaction', value: '100%' },
    ],
    deliverables: ['Portfolio Website', 'Custom 3D Animations', 'Brand Guidelines', 'Content Strategy'],
    gradient: 'from-[#EC4899] to-[#8B5CF6]',
    colorAccent: '#EC4899',
  },
];

const marqueeLogos = [
  { name: 'HAPPY PRANCER', icon: ShoppingBag, color: 'text-blue-400' },
  { name: 'ONEBITE CAFE', icon: Utensils, color: 'text-emerald-400' },
  { name: 'DISHA HOTEL', icon: Building2, color: 'text-amber-400' },
  { name: 'NEXACRAFT AI', icon: Cpu, color: 'text-cyan-400' },
  { name: 'AURA STUDIO', icon: Sparkles, color: 'text-pink-400' },
  { name: 'VELOCITY LABS', icon: TrendingUp, color: 'text-purple-400' },
  { name: 'ZENITH HEALTH', icon: Globe, color: 'text-teal-400' },
];

export const ExperienceBand: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedClientModal, setSelectedClientModal] = useState<ClientData | null>(null);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const filteredClients = activeCategory === 'All'
    ? clientsData
    : clientsData.filter((c) => c.category === activeCategory);

  useEffect(() => {
    if (!isAutoplay || filteredClients.length <= 1) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % filteredClients.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoplay, filteredClients.length]);

  useEffect(() => {
    setActiveSlide(0);
  }, [activeCategory]);

  const currentClient = filteredClients[activeSlide] || filteredClients[0];

  const handleNext = () => {
    setIsAutoplay(false);
    setActiveSlide((prev) => (prev + 1) % filteredClients.length);
  };

  const handlePrev = () => {
    setIsAutoplay(false);
    setActiveSlide((prev) => (prev - 1 + filteredClients.length) % filteredClients.length);
  };

  return (
    <section id="about" className="relative bg-[#121619] text-white overflow-hidden -mt-8 sm:-mt-12 md:-mt-16 z-20 pt-0 pb-0">
      {/* Wave Transition Top */}
      <WaveDivider variant="cream-to-dark" />

      {/* Ambient Lighting & Glow Orbs */}
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#25D366]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-[#3B82F6]/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[#C59A58]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 pt-4 sm:pt-8 pb-10 sm:pb-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span className="text-[#25D366] text-[11px] font-bold tracking-[0.2em] uppercase">
              Trusted By Industry Leaders
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-3">
            <TextReveal text="Our Clients & Success Stories" mode="words" delay={0.1} />
          </h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-gray-300 text-xs sm:text-sm font-light max-w-xl mx-auto leading-relaxed"
          >
            Empowering businesses with custom Web apps, brand identities, and digital marketing.
          </motion.p>
        </div>

        {/* --- 1. INFINITE CLIENT LOGO MARQUEE --- */}
        <div className="relative w-full overflow-hidden mb-8 py-2.5 border-y border-white/10 bg-[#171C20]/60 backdrop-blur-md">
          {/* Subtle Side Fades */}
          <div className="absolute top-0 left-0 bottom-0 w-20 bg-gradient-to-r from-[#121619] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-l from-[#121619] to-transparent z-10 pointer-events-none" />

          <div className="flex w-max animate-marquee space-x-6 sm:space-x-10 items-center">
            {[...marqueeLogos, ...marqueeLogos, ...marqueeLogos].map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={idx}
                  className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#25D366]/40 hover:bg-white/10 transition-all duration-300 group cursor-default whitespace-nowrap"
                >
                  <IconComp className={`w-4 h-4 ${item.color} group-hover:scale-110 transition-transform`} />
                  <span className="text-xs font-black tracking-wider text-gray-200 group-hover:text-white">
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- 2. FEATURED CLIENT SPOTLIGHT CAROUSEL --- */}
        {currentClient && (
          <div className="relative max-w-5xl mx-auto">
            
            {/* Animated Progress Timer Line */}
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mb-4">
              <motion.div
                key={activeSlide + '-progress'}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 6, ease: 'linear' }}
                className="h-full bg-gradient-to-r from-[#25D366] via-[#10B981] to-[#3B82F6]"
              />
            </div>

            {/* Glowing Main Container Card - COMPACT HEIGHT */}
            <div className="relative bg-[#1A2026]/90 backdrop-blur-xl border border-white/15 rounded-2xl p-5 sm:p-7 shadow-2xl overflow-hidden group">
              
              {/* Corner Decorative Gradients */}
              <div className="absolute top-0 left-0 w-28 h-28 bg-gradient-to-br from-[#25D366]/20 to-transparent rounded-tl-2xl pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-28 h-28 bg-gradient-to-tl from-[#3B82F6]/20 to-transparent rounded-br-2xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                
                {/* Left Showcase Column */}
                <div className="lg:col-span-5 flex flex-col items-center justify-center">
                  
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentClient.id + '-logo-box'}
                      initial={{ opacity: 0, scale: 0.95, y: 8 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -8 }}
                      transition={{ duration: 0.3 }}
                      className="w-full max-w-xs flex flex-col items-center"
                    >
                      {/* Logo Badge Container - Reduced Height */}
                      <motion.div 
                        whileHover={{ scale: 1.02 }}
                        className={`relative w-full h-36 sm:h-44 bg-gradient-to-br ${currentClient.logoBg} rounded-xl p-5 flex flex-col items-center justify-center shadow-xl border border-white/20 relative group-hover:shadow-[0_0_30px_rgba(37,211,102,0.25)] transition-all duration-400`}
                      >
                        <div className="text-center">
                          <span className="text-[10px] uppercase font-extrabold tracking-widest text-white/80 block mb-1">
                            {currentClient.categoryLabel}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight border-2 border-white/40 px-3.5 py-1.5 rounded-lg backdrop-blur-md bg-black/20 font-mono">
                            {currentClient.logoText}
                          </h3>
                        </div>

                        <div className="absolute bottom-2.5 right-3 text-white/60 text-[11px] flex items-center gap-1 font-sans">
                          <span>{currentClient.domain}</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </div>
                      </motion.div>

                      {/* Quick CTA button */}
                      <button
                        onClick={() => setSelectedClientModal(currentClient)}
                        className="mt-3 text-xs font-bold text-[#25D366] hover:text-white flex items-center gap-1.5 transition-colors group/cta"
                      >
                        <span>View Full Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-transform" />
                      </button>
                    </motion.div>
                  </AnimatePresence>

                </div>

                {/* Right Content & Metrics Column - Compact spacing */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
                  
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentClient.id + '-details'}
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -15 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      {/* Category Tag & Name */}
                      <div className="flex items-center gap-2">
                        <span className="inline-block px-2.5 py-0.5 text-[11px] font-bold rounded-md bg-white/10 text-[#25D366] border border-[#25D366]/30">
                          {currentClient.categoryLabel}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                          {currentClient.name}
                        </h3>
                      </div>

                      {/* Testimonial Quote - Compact */}
                      <div className="relative bg-white/5 border border-white/10 rounded-xl p-4 shadow-inner">
                        <Quote className="w-5 h-5 text-[#25D366]/40 mb-1" />
                        <p className="text-gray-200 text-xs sm:text-sm leading-relaxed italic mb-2 font-light">
                          &ldquo;{currentClient.quote}&rdquo;
                        </p>
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-white">
                            {currentClient.author}
                          </span>
                          <span className="text-gray-400">
                            {currentClient.role}
                          </span>
                        </div>
                      </div>

                      {/* Key Impact Metrics Grid */}
                      <div className="grid grid-cols-3 gap-2.5">
                        {currentClient.metrics.map((m, idx) => (
                          <motion.div 
                            key={idx} 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.25, delay: idx * 0.08 }}
                            whileHover={{ y: -2 }}
                            className="bg-black/40 border border-white/10 rounded-lg p-2.5 text-center hover:border-[#25D366]/40 shadow-sm transition-all"
                          >
                            <div className="text-lg sm:text-xl font-black bg-gradient-to-r from-[#25D366] to-[#10B981] bg-clip-text text-transparent">
                              {m.value}
                            </div>
                            <div className="text-[9px] sm:text-[10px] text-gray-400 font-medium tracking-wider uppercase mt-0.5">
                              {m.label}
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Deliverables tags */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {currentClient.deliverables.map((item, idx) => (
                          <span 
                            key={idx}
                            className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] bg-white/5 border border-white/10 text-gray-300 hover:border-white/30 transition-colors"
                          >
                            <CheckCircle2 className="w-3 h-3 text-[#25D366]" />
                            {item}
                          </span>
                        ))}
                      </div>

                    </motion.div>
                  </AnimatePresence>

                </div>

              </div>
            </div>

            {/* --- ANIMATED CLIENT SELECTOR BOXES BELOW --- */}
            <div className="mt-5">
              <div className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3 text-center">
                Select Client Story
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3">
                {clientsData.map((client, idx) => {
                  const isActive = idx === activeSlide;
                  return (
                    <motion.div
                      key={client.id}
                      onClick={() => {
                        setIsAutoplay(false);
                        setActiveSlide(idx);
                      }}
                      whileHover={{ y: -3, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`relative cursor-pointer rounded-xl p-3 border transition-all duration-300 overflow-hidden ${
                        isActive
                          ? 'bg-[#1E262E] border-[#25D366] shadow-[0_0_20px_rgba(37,211,102,0.25)]'
                          : 'bg-[#151A1E]/80 border-white/10 hover:border-white/30 hover:bg-[#1A2026]'
                      }`}
                    >
                      {/* Active Indicator Glow Bar */}
                      {isActive && (
                        <motion.div
                          layoutId="activeClientGlow"
                          className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#25D366] to-[#10B981]"
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                      )}

                      <div className="flex flex-col h-full justify-between space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className={`text-[9px] font-mono uppercase px-1.5 py-0.5 rounded font-extrabold ${isActive ? 'bg-[#25D366]/20 text-[#25D366]' : 'bg-white/5 text-gray-400'}`}>
                            {client.category}
                          </span>
                          {isActive && (
                            <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                          )}
                        </div>

                        <div className="font-bold text-xs text-white tracking-tight line-clamp-1">
                          {client.name}
                        </div>

                        <div className="text-[11px] font-mono font-extrabold text-[#25D366]">
                          {client.metrics[0]?.value} {client.metrics[0]?.label}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Slider Navigation Controls */}
            <div className="flex items-center justify-between mt-4 px-1">
              <div className="text-[11px] text-gray-400 font-mono">
                0{activeSlide + 1} / 0{clientsData.length}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="w-8 h-8 rounded-full border border-white/10 bg-white/5 text-gray-300 hover:border-[#25D366] hover:text-white hover:bg-white/10 flex items-center justify-center transition-all duration-200"
                  aria-label="Previous client"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-8 h-8 rounded-full border border-white/10 bg-white/5 text-gray-300 hover:border-[#25D366] hover:text-white hover:bg-white/10 flex items-center justify-center transition-all duration-200"
                  aria-label="Next client"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        )}

      </div>

      {/* --- 4. INTERACTIVE CLIENT SPOTLIGHT MODAL --- */}
      <AnimatePresence>
        {selectedClientModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#1A2026] border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden text-white"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedClientModal(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Banner */}
              <div className={`w-full h-32 bg-gradient-to-r ${selectedClientModal.logoBg} rounded-2xl p-6 flex items-center justify-between mb-6 shadow-lg`}>
                <div>
                  <span className="text-xs font-bold text-white/80 uppercase tracking-widest block mb-1">
                    {selectedClientModal.categoryLabel}
                  </span>
                  <h3 className="text-2xl font-black text-white font-mono">
                    {selectedClientModal.logoText}
                  </h3>
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-black/30 border border-white/20 text-xs font-mono text-white/90">
                  {selectedClientModal.domain}
                </div>
              </div>

              {/* Modal Title & Story */}
              <div className="space-y-4 mb-6">
                <h4 className="text-xl sm:text-2xl font-bold text-white">
                  Case Study: {selectedClientModal.name} Transformation
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {selectedClientModal.quote}
                </p>
              </div>

              {/* Detailed Metrics */}
              <div className="mb-6">
                <h5 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                  Verified Key Metrics & Impact
                </h5>
                <div className="grid grid-cols-3 gap-3">
                  {selectedClientModal.metrics.map((m, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                      <div className="text-xl font-extrabold text-[#25D366]">{m.value}</div>
                      <div className="text-[10px] text-gray-400 uppercase tracking-wider">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Deliverables */}
              <div className="mb-6">
                <h5 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                  Solutions Delivered
                </h5>
                <div className="grid grid-cols-2 gap-2">
                  {selectedClientModal.deliverables.map((del, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-200">
                      <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer CTA */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                <button
                  onClick={() => setSelectedClientModal(null)}
                  className="px-5 py-2.5 rounded-full text-xs font-bold bg-white/10 hover:bg-white/20 text-gray-200 transition-colors"
                >
                  Close
                </button>
                <a
                  href={`https://${selectedClientModal.domain}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full text-xs font-bold bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white flex items-center gap-1.5 hover:shadow-lg hover:shadow-[#25D366]/20 transition-all"
                >
                  <span>Visit Client Site</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

            </motion.div>

          </div>
        )}
      </AnimatePresence>

      {/* Wave Transition Bottom */}
      <WaveDivider variant="dark-to-cream-inverted" />
    </section>
  );
};

