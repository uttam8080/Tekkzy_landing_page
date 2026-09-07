import React, { useState } from 'react';
import { X, CheckCircle, Send, Calculator, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectType: 'Residential Construction',
    estimatedBudget: '$250k - $500k',
    timeline: '3 - 6 Months',
    location: '',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        projectType: 'Residential Construction',
        estimatedBudget: '$250k - $500k',
        timeline: '3 - 6 Months',
        location: '',
        description: '',
      });
    }, 2400);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#161A1D] border border-[#C59A58]/30 rounded-2xl shadow-2xl p-6 sm:p-8 text-white my-8 max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-400 hover:text-white transition-colors p-1"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#C59A58]/20 border border-[#C59A58] text-[#C59A58] mx-auto flex items-center justify-center animate-bounce">
                <CheckCircle className="w-7 h-7" />
              </div>
              <h3
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Inquiry Received
              </h3>
              <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                Thank you for considering Buildora. One of our senior architects will review your project requirements and get in touch within 24 hours.
              </p>
              <div className="inline-flex items-center gap-2 text-xs text-[#C59A58] font-medium pt-2">
                <ShieldCheck className="w-4 h-4" />
                <span>NDA & Commercial Confidentiality Guaranteed</span>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Logo size="sm" variant="light" />
              </div>
              
              <h3
                className="text-2xl sm:text-3xl font-normal text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Request a Custom Quote
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                Tell us about your upcoming project scope, vision, and timeline.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 mb-1 font-medium">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#111417] border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-[#C59A58]"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-1 font-medium">Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="eleanor@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#111417] border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-[#C59A58]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 mb-1 font-medium">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#111417] border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-[#C59A58]"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-1 font-medium">Project Location</label>
                    <input
                      type="text"
                      placeholder="e.g. New York, NY"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#111417] border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-[#C59A58]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-slate-300 mb-1 font-medium">Project Type</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg bg-[#111417] border border-white/15 text-white focus:outline-none focus:border-[#C59A58]"
                    >
                      <option value="Residential Construction">Residential Construction</option>
                      <option value="Architectural Design">Architectural Design</option>
                      <option value="Commercial Construction">Commercial Construction</option>
                      <option value="Interior Fit-Out">Interior Fit-Out</option>
                      <option value="Renovation & Remodeling">Renovation & Remodeling</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-1 font-medium">Estimated Budget</label>
                    <select
                      value={formData.estimatedBudget}
                      onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg bg-[#111417] border border-white/15 text-white focus:outline-none focus:border-[#C59A58]"
                    >
                      <option value="$100k - $250k">$100k - $250k</option>
                      <option value="$250k - $500k">$250k - $500k</option>
                      <option value="$500k - $1M">$500k - $1M</option>
                      <option value="$1M - $3M">$1M - $3M</option>
                      <option value="$3M+">$3M+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-1 font-medium">Target Timeline</label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg bg-[#111417] border border-white/15 text-white focus:outline-none focus:border-[#C59A58]"
                    >
                      <option value="Immediate">Immediate (&lt; 3 Months)</option>
                      <option value="3 - 6 Months">3 - 6 Months</option>
                      <option value="6 - 12 Months">6 - 12 Months</option>
                      <option value="Planning Phase">Planning Phase</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 mb-1 font-medium">Project Scope & Vision</label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe the site, architectural style, square footage, or any special considerations..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#111417] border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-[#C59A58] resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                    <Calculator className="w-3.5 h-3.5 text-[#C59A58]" />
                    <span>Free architectural consultation</span>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#C59A58] hover:bg-[#b58c4c] text-white rounded-lg font-medium text-xs sm:text-sm tracking-wide shadow-md transition-colors"
                  >
                    <span>Submit Proposal Request</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
