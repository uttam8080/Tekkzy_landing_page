import React, { useState, useRef, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, ArrowUpRight, ArrowRight, Sparkles, Workflow, ShieldCheck, Layers, TrendingUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface FocusAreasSectionProps {
  onOpenQuote?: () => void;
}

export interface StorySlideItem {
  id: string;
  number: string;
  badgeIcon: React.ReactNode;
  badgeLabel: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  accentColor: string;
}

export const storySlidesData: StorySlideItem[] = [
  {
    id: 'ai-integration',
    number: '01',
    badgeIcon: <Sparkles className="w-6 h-6 text-white" />,
    badgeLabel: 'AI & Spatial Intelligence',
    title: 'User interface & User experience',
    description: 'UI: Elegant design, intuitive interactions.UX: Purposeful journeys, foreseeing needs, meaningful engagements, delightful digital connections.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Two collaborators with tablets on modern steps',
    accentColor: '#25D366',
  },
  {
    id: 'workflow-optimization',
    number: '02',
    badgeIcon: <Workflow className="w-6 h-6 text-white" />,
    badgeLabel: 'Quality Coaching & Pipeline',
    title: 'Login & identity managment',
    description: 'Advanced Identity Solutions: Optimize user authentication, authorization, and tracking with our cutting-edge login and identity management.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Specialists collaborating at modern wooden reception desk',
    accentColor: '#D500F9',
  },
  {
    id: 'data-governance',
    number: '03',
    badgeIcon: <ShieldCheck className="w-6 h-6 text-white" />,
    badgeLabel: 'Sovereignty & Security',
    title: 'Trade Specific features',
    description: 'Our services offer industry-specific features, empowering businesses with tools and functionalities optimized for success in their respective fields.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Product leaders analyzing strategy at sunlit conference table',
    accentColor: '#00E5FF',
  },
  {
    id: 'bespoke-systems',
    number: '04',
    badgeIcon: <Layers className="w-6 h-6 text-white" />,
    badgeLabel: 'Spatial Design Systems',
    title: 'Leads & customer tracking',
    description: 'Gain valuable leads and track customer interactions. Leverage data-driven insights for effective business growth and improved customer engagement.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Engineers operating advanced instrumentation in technology lab',
    accentColor: '#FF9100',
  },
  {
    id: 'exponential-scale',
    number: '05',
    badgeIcon: <TrendingUp className="w-6 h-6 text-white" />,
    badgeLabel: 'Performance & Scale',
    title: 'Payments',
    description: 'Secure and Convenient Payments: Experience hassle-free transactions with our trusted payment solutions, ensuring data security and peace of mind with seamless transactions.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Team standing together in modern architectural atrium',
    accentColor: '#FF007F',
  },
];

export const FocusAreasSection: React.FC<FocusAreasSectionProps> = ({ onOpenQuote }) => {
  const [hoveredPillar, setHoveredPillar] = useState<StorySlideItem | null>(null);
  
  const sectionRef = useRef<HTMLDivElement>(null);

  // 5 Inline Photo Refs
  const img1Ref = useRef<HTMLDivElement>(null);
  const img2Ref = useRef<HTMLDivElement>(null);
  const img3Ref = useRef<HTMLDivElement>(null);
  const img4Ref = useRef<HTMLDivElement>(null);
  const img5Ref = useRef<HTMLDivElement>(null);

  // Expanding Hero Card Ref & Dark Vignette Ref
  const heroCardRef = useRef<HTMLDivElement>(null);
  const vignetteOverlayRef = useRef<HTMLDivElement>(null);

  // 4 Slide Split-Wipe Overlay Refs
  const slide2WipeRef = useRef<HTMLDivElement>(null);
  const slide3WipeRef = useRef<HTMLDivElement>(null);
  const slide4WipeRef = useRef<HTMLDivElement>(null);
  const slide5WipeRef = useRef<HTMLDivElement>(null);

  // 5 Slide Parallax Content Refs
  const slide1ContentRef = useRef<HTMLDivElement>(null);
  const slide2ContentRef = useRef<HTMLDivElement>(null);
  const slide3ContentRef = useRef<HTMLDivElement>(null);
  const slide4ContentRef = useRef<HTMLDivElement>(null);
  const slide5ContentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let ctx: gsap.Context;

    // Small delay to ensure all previous pinned sections (like PremiumServices) have computed their height
    const timer = setTimeout(() => {
      ctx = gsap.context(() => {
        // Compute exact delta from each element's inline text position to section center
        const getDelta = (el: HTMLElement | null) => {
          if (!el || !section) return { x: 0, y: 0 };
          const sRect = section.getBoundingClientRect();
          const eRect = el.getBoundingClientRect();
          const targetCenterX = sRect.width / 2;
          const targetCenterY = sRect.height / 2;
          const currentCenterX = (eRect.left - sRect.left) + eRect.width / 2;
          const currentCenterY = (eRect.top - sRect.top) + eRect.height / 2;
          return {
            x: targetCenterX - currentCenterX,
            y: targetCenterY - currentCenterY,
          };
        };

        const d1 = getDelta(img1Ref.current);
        const d2 = getDelta(img2Ref.current);
        const d3 = getDelta(img3Ref.current);
        const d4 = getDelta(img4Ref.current);
        const d5 = getDelta(img5Ref.current);

        // Create master pinned GSAP timeline
        const tl = gsap.timeline({
          scrollTrigger: {
            id: 'focusAreasMasterTimeline',
            trigger: section,
            pin: true,
            scrub: 1.5,
            start: 'top top',
            end: '+=6200',
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });

        ScrollTrigger.sort();
        ScrollTrigger.refresh();

        // Initial State Setups
        gsap.set([slide2WipeRef.current, slide3WipeRef.current, slide4WipeRef.current, slide5WipeRef.current], {
          clipPath: 'inset(0 0 0 100%)',
        });
        gsap.set(heroCardRef.current, {
          autoAlpha: 0,
          width: '100px',
          height: '70px',
          borderRadius: '14px',
          boxShadow: '0px 20px 40px rgba(0,0,0,0.4)',
        });
        gsap.set(vignetteOverlayRef.current, { opacity: 0 });
        gsap.set([slide1ContentRef.current, slide2ContentRef.current, slide3ContentRef.current, slide4ContentRef.current, slide5ContentRef.current], {
          autoAlpha: 0,
          y: 90,
        });

        // Layer ordering: Photo 1 on top (highest z-index), photos 2-5 stacked underneath
        gsap.set(img1Ref.current, { zIndex: 50, x: 0, y: 0, opacity: 1 });
        gsap.set(img2Ref.current, { zIndex: 40, x: 0, y: 0, opacity: 1 });
        gsap.set(img3Ref.current, { zIndex: 30, x: 0, y: 0, opacity: 1 });
        gsap.set(img4Ref.current, { zIndex: 20, x: 0, y: 0, opacity: 1 });
        gsap.set(img5Ref.current, { zIndex: 10, x: 0, y: 0, opacity: 1 });

        // ========================================================
        // STAGE 1: DEDICATED CONVERGENCE PHASE (time: 0.00 -> 0.22)
        // ALL 5 thumbnails slowly glide from inline positions to center
        // ========================================================
        tl.to(img1Ref.current, {
          x: d1.x,
          y: d1.y,
          rotate: -2,
          scale: 1.05,
          ease: 'power2.inOut',
          duration: 0.22,
        }, 0)
        .to(img2Ref.current, {
          x: d2.x,
          y: d2.y,
          rotate: 3,
          scale: 1,
          ease: 'power2.inOut',
          duration: 0.22,
        }, 0)
        .to(img3Ref.current, {
          x: d3.x,
          y: d3.y,
          rotate: -3,
          scale: 1,
          ease: 'power2.inOut',
          duration: 0.22,
        }, 0)
        .to(img4Ref.current, {
          x: d4.x,
          y: d4.y,
          rotate: 4,
          scale: 0.98,
          ease: 'power2.inOut',
          duration: 0.22,
        }, 0)
        .to(img5Ref.current, {
          x: d5.x,
          y: d5.y,
          rotate: -4,
          scale: 0.98,
          ease: 'power2.inOut',
          duration: 0.22,
        }, 0);

        // ========================================================
        // STAGE 2: TYPOGRAPHY DISSOLVE & UNDERNEATH PHOTOS FADE (time: 0.22 -> 0.28)
        // ========================================================
        tl.to('.dissolve-text-element', {
          opacity: 0,
          y: -15,
          scale: 0.98,
          ease: 'power2.inOut',
          stagger: 0.015,
          duration: 0.06,
        }, 0.22);

        tl.to([img2Ref.current, img3Ref.current, img4Ref.current, img5Ref.current], {
          opacity: 0,
          ease: 'power1.out',
          duration: 0.05,
        }, 0.23);

        // Seamless handoff from inline Image 1 to expanding hero card in the center
        tl.to(heroCardRef.current, { autoAlpha: 1, duration: 0.02 }, 0.27);
        tl.to(img1Ref.current, { opacity: 0, duration: 0.02 }, 0.27);

        // ========================================================
        // STAGE 3: FULLSCREEN EXPANSION (time: 0.28 -> 0.38)
        // ========================================================
        tl.to(heroCardRef.current, {
          width: '100vw',
          height: '100vh',
          borderRadius: '0px',
          boxShadow: '0px 0px 0px rgba(0,0,0,0)',
          ease: 'power2.inOut',
          duration: 0.10,
        }, 0.28);

        tl.to(vignetteOverlayRef.current, {
          opacity: 0.60,
          ease: 'power1.inOut',
          duration: 0.08,
        }, 0.30);

        // ========================================================
        // STAGE 4: SLIDE 1 (time: 0.38 -> 0.54)
        // 1. Slide 1 text pops up from bottom (0.38 -> 0.44)
        // 2. Reading plateau - strictly alone (0.44 -> 0.49)
        // 3. Floats up and completely fades away (0.49 -> 0.54)
        // ========================================================
        tl.to(slide1ContentRef.current, {
          autoAlpha: 1,
          y: 0,
          ease: 'power2.out',
          duration: 0.06,
        }, 0.38);

        tl.to(slide1ContentRef.current, {
          autoAlpha: 0,
          y: -70,
          ease: 'power2.in',
          duration: 0.05,
        }, 0.49);

        // ========================================================
        // STAGE 5: SLIDE 2 (time: 0.52 -> 0.70)
        // 1. Slide 2 split-wipe covers Slide 1 image (0.52 -> 0.58)
        // 2. Slide 2 text pops up from bottom (0.55 -> 0.60) - AFTER Slide 1 has faded
        // 3. Reading plateau - strictly alone (0.60 -> 0.65)
        // 4. Floats up and completely fades away (0.65 -> 0.70)
        // ========================================================
        tl.to(slide2WipeRef.current, {
          clipPath: 'inset(0 0 0 0%)',
          ease: 'power2.inOut',
          duration: 0.06,
        }, 0.52);

        tl.to(slide2ContentRef.current, {
          autoAlpha: 1,
          y: 0,
          ease: 'power2.out',
          duration: 0.05,
        }, 0.55);

        tl.to(slide2ContentRef.current, {
          autoAlpha: 0,
          y: -70,
          ease: 'power2.in',
          duration: 0.05,
        }, 0.65);

        // ========================================================
        // STAGE 6: SLIDE 3 (time: 0.68 -> 0.86)
        // 1. Slide 3 split-wipe covers Slide 2 image (0.68 -> 0.74)
        // 2. Slide 3 text pops up from bottom (0.71 -> 0.76) - AFTER Slide 2 has faded
        // 3. Reading plateau - strictly alone (0.76 -> 0.81)
        // 4. Floats up and completely fades away (0.81 -> 0.86)
        // ========================================================
        tl.to(slide3WipeRef.current, {
          clipPath: 'inset(0 0 0 0%)',
          ease: 'power2.inOut',
          duration: 0.06,
        }, 0.68);

        tl.to(slide3ContentRef.current, {
          autoAlpha: 1,
          y: 0,
          ease: 'power2.out',
          duration: 0.05,
        }, 0.71);

        tl.to(slide3ContentRef.current, {
          autoAlpha: 0,
          y: -70,
          ease: 'power2.in',
          duration: 0.05,
        }, 0.81);

        // ========================================================
        // STAGE 7: SLIDE 4 (time: 0.84 -> 0.96)
        // 1. Slide 4 split-wipe covers Slide 3 image (0.84 -> 0.90)
        // 2. Slide 4 text pops up from bottom (0.87 -> 0.92) - AFTER Slide 3 has faded
        // 3. Reading plateau - strictly alone (0.92 -> 0.95)
        // 4. Floats up and completely fades away (0.95 -> 0.98)
        // ========================================================
        tl.to(slide4WipeRef.current, {
          clipPath: 'inset(0 0 0 0%)',
          ease: 'power2.inOut',
          duration: 0.06,
        }, 0.84);

        tl.to(slide4ContentRef.current, {
          autoAlpha: 1,
          y: 0,
          ease: 'power2.out',
          duration: 0.05,
        }, 0.87);

        tl.to(slide4ContentRef.current, {
          autoAlpha: 0,
          y: -70,
          ease: 'power2.in',
          duration: 0.03,
        }, 0.95);

        // ========================================================
        // STAGE 8: SLIDE 5 (time: 0.96 -> 1.00)
        // 1. Slide 5 split-wipe covers Slide 4 image (0.96 -> 0.99)
        // 2. Slide 5 text pops up from bottom (0.98 -> 1.00)
        // ========================================================
        tl.to(slide5WipeRef.current, {
          clipPath: 'inset(0 0 0 0%)',
          ease: 'power2.inOut',
          duration: 0.03,
        }, 0.96);

        tl.to(slide5ContentRef.current, {
          autoAlpha: 1,
          y: 0,
          ease: 'power2.out',
          duration: 0.02,
        }, 0.98);

    }, sectionRef);
  }, 150);

    const handleResize = () => {
      ScrollTrigger.sort();
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section 
      id="focus-areas" 
      ref={sectionRef}
      className="relative w-full h-screen bg-[#FAF8F5] select-none flex items-center justify-center overflow-hidden"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#1D2226_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* ======================================================== */}
      {/* LAYER A: INTRO EDITORIAL HEADLINE WITH INLINE PHOTOS */}
      {/* ======================================================== */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 w-full pointer-events-none">
        
        {/* Tagline Pill */}
        <div className="dissolve-text-element inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 mb-8 sm:mb-10 pointer-events-auto">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          <span className="text-[#25D366] text-xs font-bold tracking-[0.2em] uppercase">
            Core Enterprise Pillars
          </span>
        </div>

        {/* Large Editorial Serif Headline with Embedded Photo Badges */}
        <h2 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[76px] xl:text-[84px] font-normal text-[#1A1F2C] leading-[1.25] sm:leading-[1.3] lg:leading-[1.28] tracking-[-0.02em] max-w-5xl mx-auto mb-10"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          {/* LINE 1 */}
          <div className="flex items-center justify-center flex-wrap gap-x-2 sm:gap-x-4 gap-y-2">
            <span className="dissolve-text-element">Our</span>

            {/* Inline Photo 1 */}
            <div
              ref={img1Ref}
              onMouseEnter={() => setHoveredPillar(storySlidesData[0])}
              onMouseLeave={() => setHoveredPillar(null)}
              onClick={onOpenQuote}
              className="relative inline-flex items-center justify-center w-14 sm:w-20 lg:w-24 h-10 sm:h-14 lg:h-16 rounded-lg sm:rounded-xl overflow-hidden shadow-md hover:shadow-xl border-2 border-white mx-1 sm:mx-2 align-middle cursor-pointer flex-shrink-0 group z-50 transition-transform duration-300 hover:scale-115 pointer-events-auto"
            >
              <img 
                src={storySlidesData[0].image} 
                alt={storySlidesData[0].imageAlt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </div>

            <span className="dissolve-text-element">five focus services</span>
          </div>

          {/* LINE 2 */}
          <div className="flex items-center justify-center flex-wrap gap-x-2 sm:gap-x-4 gap-y-2 mt-2 sm:mt-3">
            <span className="dissolve-text-element">aim</span>

            {/* Inline Photo 2 */}
            <div
              ref={img2Ref}
              onMouseEnter={() => setHoveredPillar(storySlidesData[1])}
              onMouseLeave={() => setHoveredPillar(null)}
              onClick={onOpenQuote}
              className="relative inline-flex items-center justify-center w-14 sm:w-20 lg:w-24 h-10 sm:h-14 lg:h-16 rounded-lg sm:rounded-xl overflow-hidden shadow-md hover:shadow-xl border-2 border-white mx-1 sm:mx-2 align-middle cursor-pointer flex-shrink-0 group z-40 transition-transform duration-300 hover:scale-115 pointer-events-auto"
            >
              <img 
                src={storySlidesData[1].image} 
                alt={storySlidesData[1].imageAlt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </div>

            <span className="dissolve-text-element">to better</span>

            {/* Inline Photo 3 */}
            <div
              ref={img3Ref}
              onMouseEnter={() => setHoveredPillar(storySlidesData[2])}
              onMouseLeave={() => setHoveredPillar(null)}
              onClick={onOpenQuote}
              className="relative inline-flex items-center justify-center w-14 sm:w-20 lg:w-24 h-10 sm:h-14 lg:h-16 rounded-lg sm:rounded-xl overflow-hidden shadow-md hover:shadow-xl border-2 border-white mx-1 sm:mx-2 align-middle cursor-pointer flex-shrink-0 group z-30 transition-transform duration-300 hover:scale-115 pointer-events-auto"
            >
              <img 
                src={storySlidesData[2].image} 
                alt={storySlidesData[2].imageAlt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </div>

            <span className="dissolve-text-element italic font-serif font-light text-[#0B040B]">connect</span>
          </div>

          {/* LINE 3 */}
          <div className="flex items-center justify-center flex-wrap gap-x-2 sm:gap-x-4 gap-y-2 mt-2 sm:mt-3">
            <span className="dissolve-text-element">education</span>

            {/* Inline Photo 4 */}
            <div
              ref={img4Ref}
              onMouseEnter={() => setHoveredPillar(storySlidesData[3])}
              onMouseLeave={() => setHoveredPillar(null)}
              onClick={onOpenQuote}
              className="relative inline-flex items-center justify-center w-14 sm:w-20 lg:w-24 h-10 sm:h-14 lg:h-16 rounded-lg sm:rounded-xl overflow-hidden shadow-md hover:shadow-xl border-2 border-white mx-1 sm:mx-2 align-middle cursor-pointer flex-shrink-0 group z-20 transition-transform duration-300 hover:scale-115 pointer-events-auto"
            >
              <img 
                src={storySlidesData[3].image} 
                alt={storySlidesData[3].imageAlt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </div>

            <span className="dissolve-text-element">to work</span>

            {/* Inline Photo 5 */}
            <div
              ref={img5Ref}
              onMouseEnter={() => setHoveredPillar(storySlidesData[4])}
              onMouseLeave={() => setHoveredPillar(null)}
              onClick={onOpenQuote}
              className="relative inline-flex items-center justify-center w-14 sm:w-20 lg:w-24 h-10 sm:h-14 lg:h-16 rounded-lg sm:rounded-xl overflow-hidden shadow-md hover:shadow-xl border-2 border-white mx-1 sm:mx-2 align-middle cursor-pointer flex-shrink-0 group z-10 transition-transform duration-300 hover:scale-115 pointer-events-auto"
            >
              <img 
                src={storySlidesData[4].image} 
                alt={storySlidesData[4].imageAlt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </div>
          </div>
        </h2>

        {/* Dynamic Hover Tooltip Banner */}
        <div className="dissolve-text-element h-10 mb-4 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {hoveredPillar && (
              <motion.div
                key={hoveredPillar.id}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs sm:text-sm font-medium shadow-lg pointer-events-auto"
              >
                {hoveredPillar.badgeIcon}
                <span>{hoveredPillar.number} • {hoveredPillar.title}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-gray-400" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Subtitle */}
        <p className="dissolve-text-element text-slate-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          Discover seamless AI integration and unparalleled workflow optimization tailored to elevate your enterprise.
        </p>

        {/* Scroll Indicator */}
        <div className="dissolve-text-element flex flex-col items-center justify-center gap-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400 animate-bounce">
          <span>Scroll</span>
          <ChevronDown className="w-4 h-4 text-[#25D366]" />
        </div>

      </div>

      {/* ======================================================== */}
      {/* LAYER B: EXPANDING FULLSCREEN HERO CARD & MULTI-SLIDES */}
      {/* ======================================================== */}
      <div
        ref={heroCardRef}
        className="absolute z-40 overflow-hidden flex items-center justify-center bg-black pointer-events-none"
      >
        {/* SLIDE 1 (BASE BACKGROUND) */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src={storySlidesData[0].image} 
            alt={storySlidesData[0].imageAlt}
            className="w-full h-full object-cover" 
          />
        </div>

        {/* SLIDE 2 (SPLIT WIPE OVERLAY) */}
        <div 
          ref={slide2WipeRef}
          className="absolute inset-0 w-full h-full z-10"
        >
          <img 
            src={storySlidesData[1].image} 
            alt={storySlidesData[1].imageAlt}
            className="w-full h-full object-cover" 
          />
        </div>

        {/* SLIDE 3 (SPLIT WIPE OVERLAY) */}
        <div 
          ref={slide3WipeRef}
          className="absolute inset-0 w-full h-full z-20"
        >
          <img 
            src={storySlidesData[2].image} 
            alt={storySlidesData[2].imageAlt}
            className="w-full h-full object-cover" 
          />
        </div>

        {/* SLIDE 4 (SPLIT WIPE OVERLAY) */}
        <div 
          ref={slide4WipeRef}
          className="absolute inset-0 w-full h-full z-30"
        >
          <img 
            src={storySlidesData[3].image} 
            alt={storySlidesData[3].imageAlt}
            className="w-full h-full object-cover" 
          />
        </div>

        {/* SLIDE 5 (SPLIT WIPE OVERLAY) */}
        <div 
          ref={slide5WipeRef}
          className="absolute inset-0 w-full h-full z-40"
        >
          <img 
            src={storySlidesData[4].image} 
            alt={storySlidesData[4].imageAlt}
            className="w-full h-full object-cover" 
          />
        </div>

        {/* VIGNETTE DARK OVERLAY (Guarantees crisp text legibility) */}
        <div 
          ref={vignetteOverlayRef}
          className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/60 z-50 pointer-events-none" 
        />

        {/* ======================================================== */}
        {/* LAYER C: PARALLAX TEXT REVEALS (CENTERED IN FULLSCREEN) */}
        {/* ======================================================== */}

        {/* CONTENT 1 */}
        <div
          ref={slide1ContentRef}
          className="absolute inset-0 z-[60] flex flex-col items-center justify-center px-6 max-w-4xl mx-auto text-center pointer-events-auto"
        >
          {/* Round Glass Icon Badge */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-white/40 bg-white/20 backdrop-blur-md flex items-center justify-center mb-6 shadow-2xl">
            {storySlidesData[0].badgeIcon}
          </div>

          {/* Slide Title */}
          <h3 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white mb-6 tracking-tight drop-shadow-lg"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {storySlidesData[0].title}
          </h3>

          {/* Slide Description */}
          <p className="text-white/95 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8 drop-shadow font-normal">
            {storySlidesData[0].description}
          </p>

          {/* White Pill Explore CTA */}
          <button
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white hover:bg-white/90 text-slate-900 font-bold text-sm tracking-wide shadow-xl hover:shadow-2xl transition-all hover:scale-105 cursor-pointer"
          >
            <span>Explore</span>
            <ArrowRight className="w-4 h-4 text-slate-900" />
          </button>
        </div>

        {/* CONTENT 2 */}
        <div
          ref={slide2ContentRef}
          className="absolute inset-0 z-[60] flex flex-col items-center justify-center px-6 max-w-4xl mx-auto text-center pointer-events-auto"
        >
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-white/40 bg-white/20 backdrop-blur-md flex items-center justify-center mb-6 shadow-2xl">
            {storySlidesData[1].badgeIcon}
          </div>

          <h3 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white mb-6 tracking-tight drop-shadow-lg"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {storySlidesData[1].title}
          </h3>

          <p className="text-white/95 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8 drop-shadow font-normal">
            {storySlidesData[1].description}
          </p>

          <button
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white hover:bg-white/90 text-slate-900 font-bold text-sm tracking-wide shadow-xl hover:shadow-2xl transition-all hover:scale-105 cursor-pointer"
          >
            <span>Explore</span>
            <ArrowRight className="w-4 h-4 text-slate-900" />
          </button>
        </div>

        {/* CONTENT 3 */}
        <div
          ref={slide3ContentRef}
          className="absolute inset-0 z-[60] flex flex-col items-center justify-center px-6 max-w-4xl mx-auto text-center pointer-events-auto"
        >
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-white/40 bg-white/20 backdrop-blur-md flex items-center justify-center mb-6 shadow-2xl">
            {storySlidesData[2].badgeIcon}
          </div>

          <h3 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white mb-6 tracking-tight drop-shadow-lg"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {storySlidesData[2].title}
          </h3>

          <p className="text-white/95 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8 drop-shadow font-normal">
            {storySlidesData[2].description}
          </p>

          <button
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white hover:bg-white/90 text-slate-900 font-bold text-sm tracking-wide shadow-xl hover:shadow-2xl transition-all hover:scale-105 cursor-pointer"
          >
            <span>Explore</span>
            <ArrowRight className="w-4 h-4 text-slate-900" />
          </button>
        </div>

        {/* CONTENT 4 */}
        <div
          ref={slide4ContentRef}
          className="absolute inset-0 z-[60] flex flex-col items-center justify-center px-6 max-w-4xl mx-auto text-center pointer-events-auto"
        >
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-white/40 bg-white/20 backdrop-blur-md flex items-center justify-center mb-6 shadow-2xl">
            {storySlidesData[3].badgeIcon}
          </div>

          <h3 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white mb-6 tracking-tight drop-shadow-lg"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {storySlidesData[3].title}
          </h3>

          <p className="text-white/95 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8 drop-shadow font-normal">
            {storySlidesData[3].description}
          </p>

          <button
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white hover:bg-white/90 text-slate-900 font-bold text-sm tracking-wide shadow-xl hover:shadow-2xl transition-all hover:scale-105 cursor-pointer"
          >
            <span>Explore</span>
            <ArrowRight className="w-4 h-4 text-slate-900" />
          </button>
        </div>

        {/* CONTENT 5 */}
        <div
          ref={slide5ContentRef}
          className="absolute inset-0 z-[60] flex flex-col items-center justify-center px-6 max-w-4xl mx-auto text-center pointer-events-auto"
        >
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-white/40 bg-white/20 backdrop-blur-md flex items-center justify-center mb-6 shadow-2xl">
            {storySlidesData[4].badgeIcon}
          </div>

          <h3 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white mb-6 tracking-tight drop-shadow-lg"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {storySlidesData[4].title}
          </h3>

          <p className="text-white/95 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8 drop-shadow font-normal">
            {storySlidesData[4].description}
          </p>

          <button
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white hover:bg-white/90 text-slate-900 font-bold text-sm tracking-wide shadow-xl hover:shadow-2xl transition-all hover:scale-105 cursor-pointer"
          >
            <span>Explore</span>
            <ArrowRight className="w-4 h-4 text-slate-900" />
          </button>
        </div>

      </div>
    </section>
  );
};
