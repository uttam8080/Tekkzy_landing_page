import React, { useState } from 'react';
import { Phone, Mail, MapPin, Lock, ShieldCheck, FileText, RefreshCw, X, Copy, Check, ExternalLink, Sparkles, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import { TextReveal } from './TextReveal';

interface FooterSectionProps {
  onOpenContactModal: () => void;
}

type PolicyType = 'privacy' | 'terms' | 'cancellation' | 'admin' | null;

export const FooterSection: React.FC<FooterSectionProps> = ({ onOpenContactModal }) => {
  const [activeModal, setActiveModal] = useState<PolicyType>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Admin login state
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [adminLoginSuccess, setAdminLoginSuccess] = useState(false);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      scrollToTop();
    }
  };

  const handleAdminSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminEmail && adminPassword) {
      setAdminLoginSuccess(true);
      setTimeout(() => {
        setAdminLoginSuccess(false);
        setActiveModal(null);
      }, 2500);
    }
  };

  return (
    <footer id="contact" className="relative w-full bg-[#070119] text-white overflow-hidden font-sans pt-0 pb-10 -mt-1">

      {/* 0. Section Curve Divider at Top of Footer (upper area matches Membership section, lower area is 100% transparent to merge directly with the Footer background) */}
      <div className="relative w-full overflow-hidden leading-none z-20 pointer-events-none -mt-1">
        <svg
          viewBox="0 0 1440 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-14 sm:h-20 md:h-24 lg:h-28 block"
        >
          <defs>
            <linearGradient id="footerNeonCurve" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7A00FF" stopOpacity="0.2" />
              <stop offset="25%" stopColor="#9D00FF" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#D500F9" stopOpacity="1" />
              <stop offset="75%" stopColor="#FF007F" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#7A00FF" stopOpacity="0.2" />
            </linearGradient>
            <filter id="curveNeonGlow" x="-10%" y="-30%" width="120%" height="160%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Upper Section Fill: Seamlessly matching the bottom of Membership Section */}
            <linearGradient id="membershipSeamFill" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1e0114" />
              <stop offset="30%" stopColor="#17011a" />
              <stop offset="65%" stopColor="#13011c" />
              <stop offset="100%" stopColor="#0d0016" />
            </linearGradient>
          </defs>

          {/* Upper Section Fill: Covers footer background above curve to seamlessly match Membership Section */}
          <path
            d="M0 0 L1440 0 L1440 40 C1370 30 1260 10 1140 25 C760 70 340 10 0 40 Z"
            fill="url(#membershipSeamFill)"
          />

          {/* Glowing Neon Contour Wave Line */}
          <path
            d="M0 40 C340 10 760 70 1140 25 C1260 10 1370 30 1440 40"
            stroke="url(#footerNeonCurve)"
            strokeWidth="2.5"
            filter="url(#curveNeonGlow)"
            fill="none"
          />
        </svg>
      </div>

      {/* 1. Single Unified Royal Blue/Violet Background across the entire footer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 120% 90% at 50% 0%, #2e1065 0%, #1f0b54 35%, #120536 65%, #070119 100%)'
        }}
      />

      {/* 2. Unified Vibrant Electric Violet & Cobalt Blue Ambient Atmosphere */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-screen opacity-75"
        style={{
          background: 'radial-gradient(ellipse 75% 55% at 30% 25%, rgba(99, 102, 241, 0.4) 0%, transparent 70%), radial-gradient(ellipse 70% 60% at 70% 30%, rgba(168, 85, 247, 0.45) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 50% 10%, rgba(217, 70, 239, 0.25) 0%, transparent 70%)'
        }}
      />

      {/* 3. Unified Subtle High-Tech Micro Dot Matrix Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.18) 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }}
      />

      {/* 4. Animated Ambient Aurora Orbs */}
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -20, 15, 0],
          scale: [1, 1.08, 0.95, 1]
        }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 w-[550px] h-[350px] bg-[#6366F1]/30 rounded-full blur-[130px] pointer-events-none mix-blend-screen"
      />
      <motion.div
        animate={{
          x: [0, -35, 25, 0],
          y: [0, 25, -15, 0],
          scale: [1, 0.95, 1.1, 1]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[380px] bg-[#A855F7]/30 rounded-full blur-[140px] pointer-events-none mix-blend-screen"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10 sm:pt-14">

        {/* Main 3-Column Layout Matching User Screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 pb-14 items-start">

          {/* Column 1: Reach us */}
          <div className="space-y-5">
            <h3 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
              <TextReveal text="Reach us" mode="words" delay={0.1} />
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            </h3>

            <div className="space-y-4 pt-1">
              {/* Phone */}
              <div className="group flex items-start gap-3.5 text-gray-300 hover:text-white transition-colors">
                <div className="w-9 h-9 rounded-xl bg-purple-900/30 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:bg-purple-500/20 group-hover:border-purple-400 transition-all duration-300 shrink-0 mt-0.5 shadow-[0_0_15px_rgba(157,0,255,0.15)]">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Phone</span>
                  <div className="flex items-center gap-2">
                    <a href="tel:+919692064432" className="text-sm font-semibold tracking-wide hover:text-purple-300 transition-colors">
                      (+91) 9692064432
                    </a>
                    <button
                      onClick={() => handleCopy('(+91) 9692064432', 'phone')}
                      title="Copy phone number"
                      className="text-gray-500 hover:text-purple-300 transition-colors"
                    >
                      {copiedField === 'phone' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="group flex items-start gap-3.5 text-gray-300 hover:text-white transition-colors">
                <div className="w-9 h-9 rounded-xl bg-purple-900/30 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:bg-purple-500/20 group-hover:border-purple-400 transition-all duration-300 shrink-0 mt-0.5 shadow-[0_0_15px_rgba(157,0,255,0.15)]">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Email</span>
                  <div className="flex items-center gap-2">
                    <a href="mailto:admin@awsaiapp.com" className="text-sm font-semibold tracking-wide hover:text-purple-300 transition-colors break-all">
                      admin@awsaiapp.com
                    </a>
                    <button
                      onClick={() => handleCopy('admin@awsaiapp.com', 'email')}
                      title="Copy email address"
                      className="text-gray-500 hover:text-purple-300 transition-colors"
                    >
                      {copiedField === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="group flex items-start gap-3.5 text-gray-300 hover:text-white transition-colors">
                <div className="w-9 h-9 rounded-xl bg-purple-900/30 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:bg-purple-500/20 group-hover:border-purple-400 transition-all duration-300 shrink-0 mt-0.5 shadow-[0_0_15px_rgba(157,0,255,0.15)]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Address</span>
                  <a
                    href="https://maps.google.com/?q=V5W5%2B34J,+W+Lane+2,+Hilltown,+Sambhunagar+Pada,+Bhawanipatna,+Odisha+766001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium leading-relaxed hover:text-purple-300 transition-colors max-w-xs"
                  >
                    V5W5+34J, W Lane 2, Hilltown, Sambhunagar Pada, Bhawanipatna, Odisha 766001
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Company */}
          <div className="space-y-5">
            <h3 className="text-xl font-bold tracking-tight text-white">Company</h3>
            <ul className="space-y-3 pt-1 text-sm font-medium">
              <li>
                <button
                  onClick={scrollToTop}
                  className="text-gray-300 hover:text-purple-300 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 group-hover:scale-150 transition-transform" />
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-gray-300 hover:text-purple-300 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 group-hover:scale-150 transition-transform" />
                  <span>About</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenContactModal}
                  className="text-gray-300 hover:text-purple-300 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 group-hover:scale-150 transition-transform" />
                  <span>Contact</span>
                </button>
              </li>
              <li className="pt-1">
                <button
                  onClick={() => setActiveModal('admin')}
                  className="inline-flex items-center gap-2 font-semibold text-purple-400 hover:text-purple-300 group transition-colors px-3 py-1.5 rounded-lg bg-purple-900/20 border border-purple-500/30 hover:border-purple-400 shadow-[0_0_12px_rgba(157,0,255,0.15)]"
                >
                  <Lock className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" />
                  <span>Admin Login</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className="space-y-5">
            <h3 className="text-xl font-bold tracking-tight text-white">Legal</h3>
            <ul className="space-y-3 pt-1 text-sm font-medium">
              <li>
                <button
                  onClick={() => setActiveModal('privacy')}
                  className="text-gray-300 hover:text-purple-300 transition-colors flex items-center gap-2 group text-left"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 group-hover:scale-150 transition-transform" />
                  <span>Privacy Policy</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveModal('terms')}
                  className="text-gray-300 hover:text-purple-300 transition-colors flex items-center gap-2 group text-left"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 group-hover:scale-150 transition-transform" />
                  <span>Terms & Conditions</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveModal('cancellation')}
                  className="text-gray-300 hover:text-purple-300 transition-colors flex items-center gap-2 group text-left"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 group-hover:scale-150 transition-transform" />
                  <span>Cancellation & Refund Policy</span>
                </button>
              </li>
            </ul>

            {/* Scroll Back To Top Quick Button */}
            <div className="pt-4">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-white transition-colors group"
              >
                <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-purple-400 group-hover:bg-purple-500/20 transition-all">
                  <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <span>Back to top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Horizontal Glow Line */}
        <div className="relative w-full h-[1px] bg-white/20 mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-300/50 to-transparent blur-[0.5px]" />
        </div>

        {/* Bottom Bar: Copyright Matching User Screenshot */}
        <div className="flex flex-col sm:flex-row items-center justify-center text-center gap-2 text-xs font-medium text-gray-400 py-2">
          <span>© 2026 Tekkzy. All rights reserved.</span>
        </div>

      </div>

      {/* --- INTERACTIVE MODALS FOR LEGAL & ADMIN LOGIN --- */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="relative w-full max-w-lg bg-[#0F0A1F] border border-purple-500/30 rounded-3xl p-6 sm:p-8 text-white shadow-[0_0_50px_rgba(122,0,255,0.3)] z-10 overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal 1: Privacy Policy */}
              {activeModal === 'privacy' && (
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-purple-400 mb-2">
                    <ShieldCheck className="w-6 h-6" />
                    <h3 className="text-xl font-bold text-white">Privacy Policy</h3>
                  </div>
                  <div className="text-xs sm:text-sm text-gray-300 leading-relaxed space-y-3 max-h-[60vh] overflow-y-auto pr-2">
                    <p>
                      At Tekkzy, we are committed to safeguarding your personal data and ensuring full privacy compliance across our systems and web platforms.
                    </p>
                    <h4 className="font-semibold text-white">1. Data Collection</h4>
                    <p>
                      We collect basic contact parameters such as your name, email address, and project scope only when voluntarily submitted through our client portal or contact forms.
                    </p>
                    <h4 className="font-semibold text-white">2. Data Security</h4>
                    <p>
                      All user interactions are encrypted using high-grade SSL certificates. We never sell or share user data with third-party advertising networks.
                    </p>
                  </div>
                </div>
              )}

              {/* Modal 2: Terms & Conditions */}
              {activeModal === 'terms' && (
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-purple-400 mb-2">
                    <FileText className="w-6 h-6" />
                    <h3 className="text-xl font-bold text-white">Terms & Conditions</h3>
                  </div>
                  <div className="text-xs sm:text-sm text-gray-300 leading-relaxed space-y-3 max-h-[60vh] overflow-y-auto pr-2">
                    <p>
                      Welcome to Tekkzy. By subscribing to our membership plans or commissioning custom digital solutions, you agree to the following terms:
                    </p>
                    <h4 className="font-semibold text-white">1. Service Scope</h4>
                    <p>
                      Project deliverables, design iterations, and maintenance services are executed in accordance with your chosen tier (Basic, Standard, or Advanced).
                    </p>
                    <h4 className="font-semibold text-white">2. Intellectual Property</h4>
                    <p>
                      Upon full payment of invoice dues, full ownership rights to final website assets and code deliverables are transferred to the client.
                    </p>
                  </div>
                </div>
              )}

              {/* Modal 3: Cancellation & Refund Policy */}
              {activeModal === 'cancellation' && (
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-purple-400 mb-2">
                    <RefreshCw className="w-6 h-6" />
                    <h3 className="text-xl font-bold text-white">Cancellation & Refund Policy</h3>
                  </div>
                  <div className="text-xs sm:text-sm text-gray-300 leading-relaxed space-y-3 max-h-[60vh] overflow-y-auto pr-2">
                    <p>
                      We strive for complete client satisfaction. Our transparent cancellation and refund policy is as follows:
                    </p>
                    <h4 className="font-semibold text-white">1. Subscription Cancellations</h4>
                    <p>
                      You may cancel your monthly membership plan at any time prior to your next renewal date. Access will remain active until the end of the current billing cycle.
                    </p>
                    <h4 className="font-semibold text-white">2. Refund Eligibility</h4>
                    <p>
                      If you are unsatisfied within the first 7 days of onboarding, contact admin@awsaiapp.com to request a prorated refund evaluation.
                    </p>
                  </div>
                </div>
              )}

              {/* Modal 4: Admin Login */}
              {activeModal === 'admin' && (
                <div className="space-y-5">
                  <div className="flex items-center gap-3 text-purple-400">
                    <Lock className="w-6 h-6" />
                    <h3 className="text-xl font-bold text-white">Admin Login Panel</h3>
                  </div>

                  {adminLoginSuccess ? (
                    <div className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-sm font-medium flex items-center gap-3">
                      <Sparkles className="w-5 h-5 text-emerald-400 animate-spin" />
                      <span>Authenticated successfully! Redirecting to dashboard...</span>
                    </div>
                  ) : (
                    <form onSubmit={handleAdminSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase text-gray-400 mb-1.5">
                          Admin Email
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="admin@awsaiapp.com"
                          value={adminEmail}
                          onChange={(e) => setAdminEmail(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-purple-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 text-sm transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase text-gray-400 mb-1.5">
                          Password
                        </label>
                        <input
                          type="password"
                          required
                          placeholder="••••••••••••"
                          value={adminPassword}
                          onChange={(e) => setAdminPassword(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-purple-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 text-sm transition-all"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-[#FF007F] via-[#D500F9] to-[#9D00FF] text-white hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/25 mt-2"
                      >
                        Sign In to Admin Panel
                      </button>
                    </form>
                  )}
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
};
