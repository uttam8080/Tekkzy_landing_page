import React, { useState } from 'react';
import { Rocket, Crown, Diamond, CheckCircle2, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import { TextReveal } from './TextReveal';

interface TierPlan {
  id: string;
  name: string;
  badge: string;
  icon: React.ReactNode;
  price: string;
  originalPrice: string;
  period: string;
  buttonText: string;
  subHeading: string;
  features: string[];
  theme: {
    border: string;
    shadow: string;
    badgeBg: string;
    badgeText: string;
    badgeBorder: string;
    iconBg: string;
    iconShadow: string;
    priceText: string;
    checkmarkText: string;
    buttonBg: string;
    accentLine: string;
  };
}

const tiers: TierPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    badge: '29% OFF',
    icon: <Rocket className="w-5 h-5 text-white" />,
    price: '₹1,000',
    originalPrice: '₹1,400',
    period: '/month',
    buttonText: 'Choose Basic Plan',
    subHeading: 'Premium Features',
    features: [
      'Customization options available.',
      'Establish a strong online presence.',
      'Fast and easy page loading.',
      'Monthly billing for flexibility.',
      'Regular website maintenance.',
      'SSL certificate for secure data transmission.',
      'Stunning static website design.',
      'User-responsive and user-friendly interface.',
      'Web hosting included.'
    ],
    theme: {
      border: 'border-cyan-500/70 hover:border-cyan-400',
      shadow: 'shadow-[0_0_35px_rgba(6,182,212,0.25)] hover:shadow-[0_0_55px_rgba(6,182,212,0.5)]',
      badgeBg: 'bg-cyan-500/20',
      badgeText: 'text-cyan-400',
      badgeBorder: 'border-cyan-500/40',
      iconBg: 'bg-gradient-to-tr from-cyan-500 to-blue-600',
      iconShadow: 'shadow-cyan-500/40',
      priceText: 'text-cyan-400',
      checkmarkText: 'text-cyan-400',
      buttonBg: 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:opacity-90',
      accentLine: 'from-cyan-500 via-blue-500 to-indigo-500',
    }
  },
  {
    id: 'standard',
    name: 'Standard',
    badge: '31% OFF',
    icon: <Crown className="w-5 h-5 text-white" />,
    price: '₹2,500',
    originalPrice: '₹3,600',
    period: '/month',
    buttonText: 'Choose Standard Plan',
    subHeading: 'Premium Features',
    features: [
      'Includes all features from Basic Plan.',
      'Admin and User Member Panel.',
      'Cutting-edge technology implementation.',
      'Efficient data management for admins.',
      'Identity Management System.',
      'Professional Contact Us page.',
      'Professional Dashboard for members.'
    ],
    theme: {
      border: 'border-[#D500F9]/80 hover:border-[#FF007F]',
      shadow: 'shadow-[0_0_35px_rgba(213,0,249,0.25)] hover:shadow-[0_0_55px_rgba(255,0,127,0.5)]',
      badgeBg: 'bg-[#FF007F]/20',
      badgeText: 'text-[#FF007F]',
      badgeBorder: 'border-[#FF007F]/40',
      iconBg: 'bg-gradient-to-tr from-[#FF007F] to-[#D500F9]',
      iconShadow: 'shadow-[#FF007F]/40',
      priceText: 'text-[#FF007F]',
      checkmarkText: 'text-[#D500F9]',
      buttonBg: 'bg-gradient-to-r from-[#FF007F] to-[#D500F9] text-white hover:opacity-90',
      accentLine: 'from-[#FF007F] via-[#D500F9] to-[#9D00FF]',
    }
  },
  {
    id: 'advanced',
    name: 'Advanced',
    badge: '43% OFF',
    icon: <Diamond className="w-5 h-5 text-white" />,
    price: '₹5,000',
    originalPrice: '₹8,800',
    period: '/month',
    buttonText: 'Choose Advanced Plan',
    subHeading: 'Premium Features',
    features: [
      'Includes all features from Standard Plan.',
      'Complete Paperless Ecosystems.',
      'Cutting-edge technology implementation.',
      'Digital Marketing, Data Analysis and SEO Integration.',
      'Google and Facebook Ads Management.',
      'Unlock true potential of your business.'
    ],
    theme: {
      border: 'border-amber-500/80 hover:border-amber-400',
      shadow: 'shadow-[0_0_35px_rgba(245,158,11,0.25)] hover:shadow-[0_0_55px_rgba(245,158,11,0.5)]',
      badgeBg: 'bg-amber-500/20',
      badgeText: 'text-amber-400',
      badgeBorder: 'border-amber-500/40',
      iconBg: 'bg-gradient-to-tr from-amber-500 to-orange-600',
      iconShadow: 'shadow-amber-500/40',
      priceText: 'text-amber-400',
      checkmarkText: 'text-amber-400',
      buttonBg: 'bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:opacity-90',
      accentLine: 'from-amber-400 via-orange-500 to-red-500',
    }
  }
];

const faqs = [
  {
    question: "What makes the 'Advance' plan stand out?",
    answer: "The 'Advance' plan offers a complete paperless ecosystem, integrated payment solutions, expert ads management, digital marketing, data analysis, and SEO integration, providing a comprehensive growth package."
  },
  {
    question: "Can I switch plans as my business evolves?",
    answer: "Yes, you can upgrade or adjust your membership plan at any time. Your billing will automatically adjust on your next billing cycle with prorated credit."
  },
  {
    question: "Can I customize features beyond the listed options?",
    answer: "Absolutely! We offer bespoke customization for unique business requirements. Contact our dedicated support team for a custom tailored architecture."
  }
];

export const MembershipSection = () => {
  return (
    <section className="relative w-full bg-[#05000A] text-white pt-20 pb-16 sm:pb-20 overflow-hidden font-sans">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#9D00FF] rounded-full blur-[160px] opacity-20 -translate-y-1/2 translate-x-1/4 mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-[#FF007F] rounded-full blur-[160px] opacity-30 translate-y-1/4 -translate-x-1/4 mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-[#9D00FF] rounded-full blur-[160px] opacity-25 translate-y-1/4 translate-x-1/4 mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[600px] h-[500px] bg-[#D500F9] rounded-full blur-[150px] opacity-20 translate-y-1/4 mix-blend-screen pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-light text-gray-200 mb-1"
          >
            Get a
          </motion.h2>
          <h3 className="text-6xl sm:text-7xl font-black bg-gradient-to-r from-[#FF007F] via-[#D500F9] to-[#9D00FF] bg-clip-text text-transparent mb-6 tracking-tight">
            <TextReveal text="Membership" mode="chars" delay={0.15} />
          </h3>
          <p className="text-gray-300 text-sm sm:text-base max-w-sm mx-auto font-light leading-relaxed">
            <TextReveal text="Subscribe now and stop wasting time starting from scratch." mode="words" delay={0.3} />
          </p>
        </div>

        {/* --- 1. PRICING CARDS WITH DISTINCT THEMED GLOWS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full max-w-6xl items-stretch mb-20">
          {tiers.map((tier) => {
            const { theme } = tier;
            return (
              <div
                key={tier.id}
                className={`group relative flex flex-col p-7 sm:p-8 rounded-3xl bg-[#0C0B12]/90 backdrop-blur-xl border-2 ${theme.border} ${theme.shadow} hover:-translate-y-2.5 hover:scale-[1.015] transition-all duration-300 ease-out overflow-hidden cursor-pointer`}
              >
                {/* Top Accent Gradient Line on Hover */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${theme.accentLine} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Hover Light Sweep Effect */}
                <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-sweep pointer-events-none" />

                {/* Discount Badge & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-black ${theme.badgeBg} ${theme.badgeText} border ${theme.badgeBorder} shadow-sm uppercase tracking-wider`}>
                    {tier.badge}
                  </span>

                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${theme.iconBg} shadow-lg ${theme.iconShadow} transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110`}>
                    {tier.icon}
                  </div>
                </div>

                {/* Plan Name */}
                <div className="mb-4">
                  <h4 className="text-2xl font-black tracking-tight text-white group-hover:text-white transition-colors">
                    {tier.name}
                  </h4>
                </div>

                {/* Pricing Display */}
                <div className="mb-6">
                  <div className={`flex items-baseline gap-1 ${theme.priceText} group-hover:scale-105 transition-transform origin-left duration-300`}>
                    <span className="text-4xl sm:text-5xl font-black tracking-tight drop-shadow-md">{tier.price}</span>
                    <span className="text-xs font-bold text-gray-400">{tier.period}</span>
                  </div>
                  <div className="text-sm text-gray-400 line-through mt-1 font-medium">
                    {tier.originalPrice}
                  </div>
                </div>

                {/* Action Button */}
                <button
                  className={`w-full py-3.5 rounded-2xl font-bold text-sm tracking-wide transition-all duration-300 shadow-md group-hover:shadow-lg group-hover:scale-[1.02] mb-8 ${theme.buttonBg}`}
                >
                  {tier.buttonText}
                </button>

                {/* Features Section */}
                <div className="flex-1 border-t border-white/10 pt-6 space-y-3.5">
                  <div className="text-xs font-extrabold uppercase tracking-widest text-gray-300 mb-4">
                    {tier.subHeading}
                  </div>

                  {tier.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3 group/item">
                      <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${theme.checkmarkText} mt-0.5 transition-transform duration-200 group-hover/item:scale-125`} />
                      <span className="text-xs sm:text-sm text-gray-300 font-medium leading-snug group-hover:text-white transition-colors">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* --- 2. ANIMATED FAQ ACCORDION SECTION (ISOLATED COMPONENT) --- */}
        <FaqSection />

        {/* Footer info */}
        <div className="mt-14 text-center">
          <p className="text-[10px] sm:text-xs text-gray-500 tracking-[0.2em] font-medium uppercase mb-6">
            MONTHLY SUBSCRIPTION / CANCEL ANYTIME
          </p>
        </div>

      </div>

      {/* Subtle bottom ambient blend into Footer divider */}
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#140118] via-[#140118]/60 to-transparent pointer-events-none" />
    </section>
  );
};

const FaqSection = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <div className="w-full max-w-2xl mt-4">
      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openFaqIndex === idx;
          return (
            <div
              key={idx}
              className="bg-[#0D0B16]/90 border border-white/10 hover:border-purple-500/40 rounded-2xl overflow-hidden transition-colors duration-300 shadow-lg"
            >
              <button
                onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-gray-100 hover:text-white transition-colors"
              >
                <span>{faq.question}</span>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="shrink-0 text-gray-400"
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/5">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};



