import React, { useState, useRef, useLayoutEffect } from 'react';
import {
  Layout,
  Sliders,
  ShieldCheck,
  Briefcase,
  TrendingUp,
  Users,
  CheckCircle2,
  X,
  ChevronRight,
  ChevronLeft,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PremiumServiceItem } from '../types';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface PremiumServicesProps {
  onOpenQuote: () => void;
}

interface ServiceDetail extends PremiumServiceItem {
  shortTitle: string;
  imageUrl: string;
  imageAlt: string;
  icon: React.ReactNode;
  miniIcon: React.ReactNode;
  highlights: string[];
}

const premiumServicesData: ServiceDetail[] = [
  {
    number: '01',
    shortTitle: 'UI & UX',
    title: 'User interface & User experience',
    description:
      'UI: Elegant design, intuitive interactions. UX: Purposeful journeys, foreseeing needs, meaningful engagements, delightful digital connections.',
    imageUrl:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Spatial architectural UI & modern digital connection',
    icon: <Layout className="w-8 h-8 sm:w-9 sm:h-9 text-white" />,
    miniIcon: <Layout className="w-3.5 h-3.5 text-white" />,
    highlights: [
      'Bespoke architectural & spatial UI design systems',
      'High-fidelity interactive 3D client portals',
      'Micro-interactions with tactile haptic responsiveness',
      'Accessibility-first typography & contrast hierarchy'
    ],
    deliverables: ['Custom Design Systems', 'Interactive Prototypes', 'Responsive Layout Kits']
  },
  {
    number: '02',
    shortTitle: 'Personalization',
    title: 'Personalization',
    description:
      'With personalization, we craft unique journeys for every customer, aligning their preferences with our offerings to create unparalleled satisfaction and brand loyalty.',
    imageUrl:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Customized luxury architectural preferences and layout',
    icon: <Sliders className="w-8 h-8 sm:w-9 sm:h-9 text-white" />,
    miniIcon: <Sliders className="w-3.5 h-3.5 text-white" />,
    highlights: [
      'Dynamic client preference engines',
      'Tailored architectural spec configurations',
      'Bespoke project timeline & aesthetic dashboards',
      'Targeted material selection workflows'
    ],
    deliverables: ['Custom Preference Profiles', 'Adaptive Client Portals', 'Automated Recommendations']
  },
  {
    number: '03',
    shortTitle: 'Identity & Access',
    title: 'Login & identity managment',
    description:
      'Advanced Identity Solutions: Optimize user authentication, authorization, and tracking with our cutting-edge login and identity management.',
    imageUrl:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Commercial enterprise biometric access tower',
    icon: <ShieldCheck className="w-8 h-8 sm:w-9 sm:h-9 text-white" />,
    miniIcon: <ShieldCheck className="w-3.5 h-3.5 text-white" />,
    highlights: [
      'Multi-factor enterprise biometric security',
      'Role-based access control for owners, architects & subs',
      'Confidential blueprint & NDA gatekeeping',
      'Comprehensive audit trails & compliance logs'
    ],
    deliverables: ['SSO & OAuth Systems', 'Role-Based Permissions Matrix', 'Security Audit Logging']
  },
  {
    number: '04',
    shortTitle: 'Trade Features',
    title: 'Trade Specific features',
    description:
      'Our services offer industry-specific features, empowering businesses with tools and functionalities optimized for success in their respective fields.',
    imageUrl:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Architectural drafting, BIM blueprints, and trade elevation plans',
    icon: <Briefcase className="w-8 h-8 sm:w-9 sm:h-9 text-white" />,
    miniIcon: <Briefcase className="w-3.5 h-3.5 text-white" />,
    highlights: [
      'AEC BIM & CAD file viewer integration',
      'Site inspection & contractor punch-list tools',
      'Automated zoning ordinance compliance checks',
      'Subcontractor bid comparison engines'
    ],
    deliverables: ['BIM Integration Modules', 'Subcontractor Portals', 'On-Site Inspection Forms']
  },
  {
    number: '05',
    shortTitle: 'Leads & Tracking',
    title: 'Leads & customer tracking',
    description:
      'Gain valuable leads and track customer interactions. Leverage data-driven insights for effective business growth and improved customer engagement.',
    imageUrl:
      'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Lush natural landscape growth and customer interaction insights',
    icon: <TrendingUp className="w-8 h-8 sm:w-9 sm:h-9 text-white" />,
    miniIcon: <TrendingUp className="w-3.5 h-3.5 text-white" />,
    highlights: [
      'High-intent investor & luxury buyer pipeline',
      'Real-time inquiry capture with automated scoring',
      'Lifecycle tracking from blueprint to certificate of occupancy',
      'Custom KPI analytics & conversion dashboards'
    ],
    deliverables: ['Lead Scoring Pipeline', 'CRM & Interaction Funnel', 'Automated Email Workflows']
  },
  {
    number: '06',
    shortTitle: 'Payments',
    title: 'Payments',
    description:
      'Secure and Convenient Payments: Experience hassle-free transactions with our trusted payment solutions, ensuring data security and peace of mind with seamless transactions.',
    imageUrl:
      'https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Commercial escrow banking and milestone disbursement infrastructure',
    icon: <Users className="w-8 h-8 sm:w-9 sm:h-9 text-white" />,
    miniIcon: <Users className="w-3.5 h-3.5 text-white" />,
    highlights: [
      'Milestone-based escrow & draw schedule payments',
      'Multi-currency support with real-time conversion',
      'Bank-grade SSL & PCI-DSS encryption standards',
      'Instant digital lien waiver verification upon disbursement'
    ],
    deliverables: ['Milestone Escrow Billing', 'Instant Invoicing & Receipts', 'Bank-Grade Payment Gateway']
  }
];

export const PremiumServices: React.FC<PremiumServicesProps> = ({ onOpenQuote }) => {
  const [activeModalItem, setActiveModalItem] = useState<ServiceDetail | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // GSAP ScrollTrigger initialization with layout-ready delay and automatic snapping
  useLayoutEffect(() => {
    let ctx: gsap.Context;
    let timerId: NodeJS.Timeout | number;

    timerId = setTimeout(() => {
      if (!sectionRef.current || !trackRef.current) return;

      ctx = gsap.context(() => {
        const section = sectionRef.current;
        const track = trackRef.current;
        if (!section || !track) return;

        const getScrollDistance = () => {
          const trackWidth = track.scrollWidth;
          const viewportWidth = window.innerWidth;
          return Math.max(0, trackWidth - viewportWidth);
        };

        const totalScrollDistance = getScrollDistance();

        if (totalScrollDistance > 0) {
          gsap.to(track, {
            x: () => -getScrollDistance(),
            ease: 'none',
            scrollTrigger: {
              id: 'premiumServicesTrigger',
              trigger: section,
              pin: true,
              scrub: 1,
              start: 'top top',
              end: () => `+=${getScrollDistance()}`,
              invalidateOnRefresh: true,
              anticipatePin: 1,
              snap: {
                snapTo: (value) => {
                  const step = 1 / (premiumServicesData.length - 1);
                  return Math.round(value / step) * step;
                },
                duration: { min: 0.25, max: 0.5 },
                ease: 'power1.inOut'
              },
              onUpdate: (self) => {
                setScrollProgress(self.progress);
                const computedIdx = Math.min(
                  premiumServicesData.length - 1,
                  Math.max(0, Math.round(self.progress * (premiumServicesData.length - 1)))
                );
                setCurrentIndex(computedIdx);
              }
            }
          });
        }

        ScrollTrigger.refresh();
      }, sectionRef);
    }, 120);

    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timerId);
      window.removeEventListener('resize', handleResize);
      if (ctx) ctx.revert();
    };
  }, []);

  // Jump smoothly to a specific index via ScrollTrigger coordinates
  const scrollToIndex = (index: number) => {
    const st = ScrollTrigger.getById('premiumServicesTrigger');
    if (st) {
      const step = 1 / (premiumServicesData.length - 1);
      const targetProgress = index * step;
      const targetScroll = st.start + targetProgress * (st.end - st.start);
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    } else {
      setCurrentIndex(index);
    }
  };

  const handleNext = () => {
    if (currentIndex < premiumServicesData.length - 1) {
      scrollToIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    }
  };

  return (
    <section
      id="premium-services"
      ref={sectionRef}
      className="relative bg-[#FCFBF5] text-slate-900 overflow-hidden select-none"
    >
      {/* Decorative Background Corners */}
      {/* Top Left Blob */}
      <div className="absolute top-0 left-0 w-[200px] sm:w-[350px] lg:w-[450px] aspect-square pointer-events-none z-0">
        <svg viewBox="0 0 450 450" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-left">
          {/* Dark Green Layer */}
          <path d="M0 0H420C420 0 350 140 230 160C110 180 80 340 0 420V0Z" fill="#6F765B" />
          {/* Medium Green Layer */}
          <path d="M0 0H280C280 0 240 100 150 110C60 120 40 220 0 280V0Z" fill="#90A074" />
          {/* Light Green Layer */}
          <path d="M0 0H180C180 0 160 70 100 75C40 80 20 150 0 180V0Z" fill="#A9B88E" />
        </svg>
      </div>

      {/* Bottom Right Blob */}
      <div className="absolute bottom-0 right-0 w-[320px] sm:w-[520px] lg:w-[680px] aspect-square pointer-events-none z-0">
        <svg viewBox="0 0 450 450" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full rotate-180">
          {/* Dark Green Layer */}
          <path d="M0 0H420C420 0 350 140 230 160C110 180 80 340 0 420V0Z" fill="#6F765B" />
          {/* Medium Green Layer */}
          <path d="M0 0H280C280 0 240 100 150 110C60 120 40 220 0 280V0Z" fill="#90A074" />
          {/* Light Green Layer */}
          <path d="M0 0H180C180 0 160 70 100 75C40 80 20 150 0 180V0Z" fill="#A9B88E" />
        </svg>
      </div>

      {/* Pinned Viewport Container - carefully padded to clear the top fixed navbar */}
      <div className="h-screen max-h-screen w-full flex flex-col justify-between pt-20 sm:pt-24 pb-3 sm:pb-5 px-4 sm:px-8 lg:px-14 relative z-10 box-border overflow-hidden">
        
        {/* Top Header Row */}
        <div className="relative flex items-center justify-center border-b border-slate-200 pb-3 sm:pb-4 flex-shrink-0">
          <div className="text-center flex flex-col items-center">
            <div className="flex items-center justify-center gap-2 mb-0.5">
              <span className="w-2 h-2 rounded-full bg-[#8C30F5]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8C30F5]">
                TAILORED EXCELLENCE
              </span>
            </div>
            <h2
              className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-slate-900 text-center"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Our Premium Services
            </h2>
          </div>

          {/* Controls: Prev / Next Buttons */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:flex items-center gap-2">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              aria-label="Previous service"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-slate-200 bg-white text-slate-700 hover:border-[#8C30F5] hover:text-[#8C30F5] disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center transition-all duration-200 shadow-xs"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === premiumServicesData.length - 1}
              aria-label="Next service"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-slate-200 bg-white text-slate-700 hover:border-[#8C30F5] hover:text-[#8C30F5] disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center transition-all duration-200 shadow-xs"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Center: Horizontal Sliding Gallery Stage with guaranteed proportional height */}
        <div className="relative flex-1 flex items-center justify-start overflow-visible my-1 sm:my-2">
          <div
            ref={trackRef}
            className="flex items-center gap-6 sm:gap-10 lg:gap-14 flex-nowrap will-change-transform px-2 sm:px-4 w-max"
          >
            {premiumServicesData.map((item, idx) => {
              const isCurrent = idx === currentIndex;

              return (
                <div
                  key={item.number}
                  onClick={() => {
                    if (!isCurrent) scrollToIndex(idx);
                  }}
                  className={`w-[88vw] max-w-5xl h-[360px] sm:h-[400px] lg:h-[430px] flex-shrink-0 rounded-[24px] sm:rounded-[30px] border transition-all duration-300 relative overflow-hidden ${
                    isCurrent
                      ? 'border-slate-800 ring-2 ring-[#8C30F5] shadow-[0_16px_40px_-10px_rgba(0,0,0,0.2)] scale-100 opacity-100'
                      : 'border-slate-300 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.1)] scale-[0.98] opacity-85 hover:opacity-100 cursor-pointer'
                  }`}
                >
                  {/* Two-Part Split Layout Container - Full Height */}
                  <div className="flex flex-col lg:flex-row items-stretch w-full h-full">
                    
                    {/* PART 1: LEFT TEXT SECTION (Deep Obsidian Background - Crisp & Clear) */}
                    <div className="w-full lg:w-[55%] bg-[#0B0F17] p-6 sm:p-8 lg:p-10 flex flex-col justify-between relative z-10 h-full overflow-hidden">
                      <div>
                        {/* Giant Gradient Number: from reference image */}
                        <div
                          className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none bg-gradient-to-r from-[#A855F7] via-[#8B5CF6] to-[#6366F1] bg-clip-text text-transparent select-none"
                          style={{
                            fontFamily:
                              "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                          }}
                        >
                          {item.number}
                        </div>

                        {/* Title */}
                        <h3 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-white tracking-tight mt-3 sm:mt-4 mb-2 leading-tight">
                          {item.title}
                        </h3>

                        {/* Description - High contrast clear text */}
                        <p className="text-slate-200 text-xs sm:text-sm lg:text-[14.5px] leading-relaxed max-w-lg font-normal line-clamp-3 sm:line-clamp-4">
                          {item.description}
                        </p>
                      </div>

                      {/* Pill "Know More" Button: from reference image */}
                      <div className="mt-4 sm:mt-5">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveModalItem(item);
                          }}
                          id={`know-more-btn-${item.number}`}
                          className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#8C30F5] to-[#DF27FF] hover:from-[#9B42F7] hover:to-[#E83EFF] text-white font-semibold text-xs sm:text-sm tracking-wide shadow-md hover:shadow-lg active:scale-95 transition-all duration-200 focus:outline-none"
                        >
                          Know More
                        </button>
                      </div>
                    </div>

                    {/* DIVIDER LINE: Crisp vertical divider line between left and right */}
                    <div className="hidden lg:block w-[1px] bg-slate-700 relative z-20 flex-shrink-0 h-full" />
                    <div className="block lg:hidden w-full h-[1px] bg-slate-700 relative z-20 flex-shrink-0" />

                    {/* PART 2: RIGHT IMAGE SECTION (Solid Crisp Twilight Slate Background - NOT Black, ONLY the image) */}
                    <div className="w-full lg:w-[45%] bg-[#1A2333] p-4 sm:p-6 lg:p-7 flex items-center justify-center relative overflow-hidden z-10 h-full">
                      {/* ONLY the image correctly framed without any extra widgets */}
                      <div className="w-full h-full rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-slate-700/50 relative group">
                        <img
                          src={item.imageUrl}
                          alt={item.imageAlt}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Status & Scroll Progress Bar */}
        <div className="pt-2 sm:pt-3 flex flex-col sm:flex-row items-center justify-center gap-2.5 text-xs flex-shrink-0">
          
          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {premiumServicesData.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => scrollToIndex(dotIdx)}
                aria-label={`Jump to service ${dotIdx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === dotIdx
                    ? 'w-8 bg-gradient-to-r from-[#8C30F5] to-[#DF27FF]'
                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

        </div>

      </div>

      {/* Know More Interactive Modal */}
      <AnimatePresence>
        {activeModalItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-xl bg-[#121620] border border-purple-500/40 rounded-3xl shadow-2xl p-6 sm:p-8 text-white my-8 max-h-[90vh] overflow-y-auto"
            >
              {/* Close button */}
              <button
                onClick={() => setActiveModalItem(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-white transition-colors p-1.5 rounded-full hover:bg-white/10"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Top Image Preview Banner */}
              <div className="h-36 w-full rounded-2xl overflow-hidden mb-4 relative border border-slate-700/60">
                <img
                  src={activeModalItem.imageUrl}
                  alt={activeModalItem.imageAlt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121620] via-transparent to-black/30" />
                <div className="absolute bottom-3 left-4 flex items-center gap-2">
                  <span className="text-xs uppercase tracking-widest text-[#DF27FF] font-mono font-semibold px-2.5 py-0.5 rounded bg-purple-950/80 border border-purple-800/50 backdrop-blur-sm">
                    SERVICE SPECIFICATION • {activeModalItem.number}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3
                className="text-2xl sm:text-3xl font-bold text-white mt-1"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {activeModalItem.title}
              </h3>

              {/* Description */}
              <p className="text-slate-300 text-xs sm:text-sm mt-3 leading-relaxed bg-white/5 p-4 rounded-xl border border-white/10 font-normal">
                {activeModalItem.description}
              </p>

              {/* Key Capabilities */}
              <div className="mt-6 space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#DF27FF]">
                  Key Capabilities & Standards
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {activeModalItem.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#A855F7] flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Deliverables */}
              {activeModalItem.deliverables && (
                <div className="mt-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#DF27FF] mb-2.5">
                    Core Deliverables
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalItem.deliverables.map((del, dIdx) => (
                      <span
                        key={dIdx}
                        className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/15 text-slate-200"
                      >
                        {del}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => setActiveModalItem(null)}
                  className="text-xs text-slate-400 hover:text-white transition-colors"
                >
                  Close
                </button>

                <button
                  onClick={() => {
                    setActiveModalItem(null);
                    onOpenQuote();
                  }}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#8C30F5] to-[#DF27FF] hover:opacity-95 text-white rounded-full font-semibold text-xs sm:text-sm tracking-wide shadow-[0_4px_20px_rgba(140,48,245,0.4)] transition-all"
                >
                  <span>Inquire for this Service</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
