import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, MessageCircle, FileUp, Settings, Rocket } from 'lucide-react';

import { TextReveal } from './TextReveal';
import { WaveDivider } from './WaveDivider';

export const ServicesSection = () => {
  const steps = [
    {
      num: '1',
      title: 'Choose a Plan',
      desc: 'Select the perfect plan that fits your needs. We offer flexible pricing options for businesses of all sizes.',
      icon: <CheckCircle2 className="w-6 h-6 text-white" />
    },
    {
      num: '2',
      title: 'Chat with Us',
      desc: 'Connect with our expert team to discuss your vision, requirements, and goals for your website project.',
      icon: <MessageCircle className="w-6 h-6 text-white" />
    },
    {
      num: '3',
      title: 'Share the Data',
      desc: 'Provide us with your content, branding materials, and any specific requirements to bring your vision to life.',
      icon: <FileUp className="w-6 h-6 text-white" />
    },
    {
      num: '4',
      title: 'Customize Your Website',
      desc: 'Work with our designers to refine and customize every aspect of your website to match your brand perfectly.',
      icon: <Settings className="w-6 h-6 text-white" />
    },
    {
      num: '5',
      title: 'Launch the Website',
      desc: 'Go live with your stunning new website and start attracting customers with your professional online presence.',
      icon: <Rocket className="w-6 h-6 text-white" />
    }
  ];

  return (
    <section id="services" className="relative bg-[#FAF8F5] pt-24 pb-0 overflow-hidden font-sans">
      
      {/* Inject custom keyframes for the water blob morphing effect */}
      <style>{`
        @keyframes morph {
          0%, 100% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
          34%      { border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%; }
          67%      { border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%; }
        }
        .animate-morph {
          animation: morph 8s ease-in-out infinite;
        }
      `}</style>

      {/* Decorative Background Image Orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cover bg-center opacity-10 blur-xl pointer-events-none rounded-full" style={{ backgroundImage: "url('/premium_service_back.png')" }} />
      <div className="absolute top-40 left-[-100px] w-[300px] h-[300px] bg-[#25D366]/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-40 right-[-100px] w-[400px] h-[400px] bg-[#25D366]/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Scroll Text Reveal */}
        <div className="text-center max-w-4xl mx-auto mb-20 px-2 sm:px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-[0.2em] text-[#25D366] uppercase mb-4"
          >
            How It Works
          </motion.h2>
          <h3 className="text-[clamp(1.25rem,3.8vw,3rem)] font-black text-slate-900 mb-6 tracking-tight whitespace-nowrap flex justify-center items-center">
            <TextReveal text="Transform your vision into reality" mode="words" delay={0.1} wrap={false} />
          </h3>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            <TextReveal text="with our streamlined 5-step process." mode="words" delay={0.25} />
          </p>
        </div>

        {/* The Blob Path Timeline */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Winding Path SVG (Hidden on mobile, visible on md+) */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[4px] bg-gray-200" />
          
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              
              return (
                <div key={step.num} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-0`}>
                  
                  {/* Content Half */}
                  <div className={`w-full md:w-1/2 flex ${isEven ? 'md:justify-end md:pr-16' : 'md:justify-start md:pl-16'}`}>
                    <motion.div 
                      initial={{ opacity: 0, x: isEven ? -80 : 80, rotate: isEven ? -90 : 90, scale: 0.8 }}
                      whileInView={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.8 }}
                      className="bg-[#0B040B] bg-cover bg-center p-8 aspect-square shadow-xl hover:shadow-2xl hover:shadow-purple-900/40 transition-all w-full max-w-[320px] flex flex-col justify-center items-center text-center relative group mx-auto animate-morph overflow-hidden"
                      style={{ 
                        backgroundImage: `url('/premium_service_back.png')`,
                        transformStyle: 'preserve-3d' 
                      }}
                    >
                      {/* Decorative Spinning Dashed Border - matching the morphing shape is impossible natively, so we'll make it a soft blurred glow instead of dashed border */}
                      <div className="absolute inset-0 border-4 border-[#FF007F]/10 animate-morph pointer-events-none group-hover:border-[#FF007F]/30 transition-colors" />
                      
                      {/* Top Right Glow */}
                      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-[#25D366]/20 to-transparent pointer-events-none" />
                      
                      {/* Background Number */}
                      <span className="text-[140px] font-black text-white/15 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-transform group-hover:scale-110 group-hover:text-[#FF007F]/20 z-0">
                        {step.num}
                      </span>
                      
                      {/* Content */}
                      <h4 
                        className="text-3xl text-white mb-3 relative z-10 tracking-wide"
                        style={{ fontFamily: "'Brolian', 'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 600 }}
                      >
                        {step.title}
                      </h4>
                      <p className="text-slate-300 font-semibold leading-relaxed text-sm relative z-10 max-w-[85%]">{step.desc}</p>
                    </motion.div>
                  </div>

                  {/* Center Node (Blob) */}
                  <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg border-4 border-[#FAF8F5] z-10 hidden md:flex">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center shadow-inner">
                      {step.icon}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-24 text-center pb-12">
          <a 
            href="https://tekkzy.com/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#1ebf5b] hover:to-[#0f7a6e] text-white font-bold text-sm sm:text-base px-10 py-4 rounded-full tracking-wide shadow-xl shadow-[#25D366]/30 transition-transform hover:-translate-y-1"
          >
            <span>Get Started Today</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

      </div>

      {/* 8. Bottom Curved Wave Divider into Dark Blog Section */}
      <WaveDivider variant="cream-to-dark" fillColor="#0B040B" />
    </section>
  );
};
