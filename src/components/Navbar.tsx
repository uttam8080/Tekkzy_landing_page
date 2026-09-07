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
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] flex items-center bg-black/95 backdrop-blur-md py-2 px-4 sm:px-6 rounded-full border border-white/10 shadow-2xl">
      
      {/* Nav Bar Pill */}
      <nav className="bg-[#1A1A1A] rounded-full px-3 sm:px-5 py-1 flex items-center gap-2 sm:gap-4 relative overflow-hidden">
        {navLinks.map((link) => {
          const isActive = activeSection === link.id;
          const Icon = link.icon;

          return (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href, link.id)}
              className="relative group flex flex-col items-center justify-center w-11 h-11 sm:w-13 sm:h-13 outline-none"
              aria-label={link.name}
            >
              {/* Active Indicator & Spotlight Effect */}
              {isActive && (
                <>
                  {/* Top Red Bar */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-5 h-1 bg-[#FF204E] rounded-b-sm" />
                  
                  {/* Spotlight Cone */}
                  <div 
                    className="absolute top-1 left-1/2 -translate-x-1/2 w-7 h-9 bg-gradient-to-b from-[#FF204E]/40 to-transparent pointer-events-none"
                    style={{ clipPath: 'polygon(30% 0, 70% 0, 100% 100%, 0% 100%)' }}
                  />
                </>
              )}

              {/* Icon */}
              <Icon
                className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300 relative z-10 ${
                  isActive ? 'text-[#FF204E]' : 'text-gray-400 group-hover:text-gray-200'
                }`}
              />
            </a>
          );
        })}
      </nav>
    </div>
  );
};
