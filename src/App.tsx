import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedProjects } from './components/FeaturedProjects';
import { PremiumServices } from './components/PremiumServices';
import { ExperienceBand } from './components/ExperienceBand';
import { ServicesSection } from './components/ServicesSection';
import { BlogSection } from './components/BlogSection';
import { FooterSection } from './components/FooterSection';
import { QuoteModal } from './components/QuoteModal';
import { ProjectModal } from './components/ProjectModal';
import { ArticleModal } from './components/ArticleModal';
import { MembershipSection } from './components/MembershipSection';
import { ProjectItem, BlogPost } from './types';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // 1. Initialize Lenis for buttery-smooth responsive scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    // 2. Synchronize Lenis scroll position with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const updateRaf = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateRaf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateRaf);
      lenis.destroy();
    };
  }, []);

  const handleScrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(el, { duration: 1.5 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-[#121619] text-[#1D2226] font-body selection:bg-[#C59A58]/25 selection:text-[#C59A58] overflow-x-hidden">
      {/* 1. Header / Navbar */}
      <Navbar onOpenQuoteModal={() => setQuoteModalOpen(true)} />

      <main>
        {/* 2. Hero Section (Dark Charcoal #121619 with S-curve Wave to Cream) */}
        <Hero onViewProjects={handleScrollToProjects} />

        {/* 3. Featured Projects (Our Work) */}
        <FeaturedProjects onSelectProject={(project) => setSelectedProject(project)} />

        {/* 3b. Our Premium Services */}
        <PremiumServices onOpenQuote={() => setQuoteModalOpen(true)} />

        {/* 4. Experience That Builds Confidence (Dark Charcoal #121619 Wavy Band) */}
        <ExperienceBand />

        {/* 5. Our Services (Warm Cream #FAF8F5) */}
        <ServicesSection />

        {/* 6. From Our Blog (Warm Cream #FAF8F5) */}
        <BlogSection onSelectPost={(post) => setSelectedArticle(post)} />

        {/* 7. Membership / Pricing Section */}
        <MembershipSection />
      </main>

      {/* 7. Let's Build Something Great Together & Footer (Dark Charcoal #121619) */}
      <FooterSection onOpenContactModal={() => setQuoteModalOpen(true)} />

      {/* Interactive Modals */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenQuote={() => setQuoteModalOpen(true)}
      />

      <ArticleModal
        post={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </div>
  );
}
