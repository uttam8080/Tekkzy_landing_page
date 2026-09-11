import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, LayoutGrid, Lightbulb, Phone } from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // The sections in order as they appear on the page
      const sections = ['home', 'projects', 'about', 'services', 'insights', 'contact'];
      const scrollPos = window.scrollY + 300; // Offset for earlier detection

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home', icon: Home },
    { name: 'Projects', href: '#projects', id: 'projects', icon: LayoutGrid },
    { name: 'About', href: '#about', id: 'about', icon: User },
    { name: 'Services', href: '#services', id: 'services', icon: Briefcase },
    { name: 'Insights', href: '#insights', id: 'insights', icon: Lightbulb },
    { name: 'Contact', href: '#contact', id: 'contact', icon: Phone },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    e.preventDefault();
    setActiveSection(id);

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="pointer-events-none">
      {/* Brand Logo in Upper Left Corner */}
      <a
        href="#home"
        onClick={(e) => handleNavClick(e, '#home', 'home')}
        className="pointer-events-auto fixed top-3 left-3 sm:top-4 sm:left-6 md:left-8 z-[100] flex items-center gap-3 group transition-transform duration-300 hover:scale-105 active:scale-95 outline-none"
        aria-label="Tekkzy Home"
      >
        <div className="relative flex items-center gap-2.5 sm:gap-3 py-1.5 px-2.5 sm:py-2 sm:px-3.5 rounded-2xl bg-black/85 backdrop-blur-md border border-white/15 shadow-2xl transition-all duration-300 group-hover:border-blue-500/50 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]">
          <img
            src="/logo.png"
            alt="Tekkzy Logo"
            className="h-8 w-8 sm:h-10 sm:w-10 md:h-11 md:w-11 object-contain drop-shadow-md flex-shrink-0"
          />
          <div className="flex flex-col justify-center text-left select-none pr-1">
            <span
              className="text-[8.5px] sm:text-[10px] md:text-[11px] font-bold text-white uppercase tracking-[0.2em] leading-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              INTELLIGENT
            </span>
            <span
              className="text-[7.5px] sm:text-[9px] md:text-[10px] font-semibold text-white/90 uppercase tracking-[0.22em] leading-tight mt-0.5"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              CLOUD APPLICATION
            </span>
          </div>
        </div>
      </a>

      {/* Nav Bar Pill */}
      <div className="pointer-events-auto fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 z-[100] flex items-center bg-black/95 backdrop-blur-md py-1.5 sm:py-2 px-3 sm:px-6 rounded-full border border-white/10 shadow-2xl">
        <nav className="bg-[#1A1A1A] rounded-full px-2 sm:px-5 py-0.5 sm:py-1 flex items-center gap-1 sm:gap-4 relative overflow-hidden">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            const Icon = link.icon;

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.id)}
                className="relative group flex flex-col items-center justify-center w-8 h-8 sm:w-11 sm:h-11 md:w-13 md:h-13 outline-none"
                aria-label={link.name}
              >
                {/* Active Indicator & Spotlight Effect */}
                {isActive && (
                  <>
                    {/* Top Red Bar */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 sm:w-5 h-0.5 sm:h-1 bg-[#FF204E] rounded-b-sm" />
                    
                    {/* Spotlight Cone */}
                    <div 
                      className="absolute top-1 left-1/2 -translate-x-1/2 w-6 sm:w-7 h-7 sm:h-9 bg-gradient-to-b from-[#FF204E]/40 to-transparent pointer-events-none"
                      style={{ clipPath: 'polygon(30% 0, 70% 0, 100% 100%, 0% 100%)' }}
                    />
                  </>
                )}

                {/* Icon */}
                <Icon
                  className={`w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 transition-colors duration-300 relative z-10 ${
                    isActive ? 'text-[#FF204E]' : 'text-gray-400 group-hover:text-gray-200'
                  }`}
                />
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
