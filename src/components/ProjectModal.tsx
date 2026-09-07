import React from 'react';
import { X, MapPin, Calendar, Maximize, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenQuote: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOpenQuote }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl bg-[#161A1D] border border-[#C59A58]/30 rounded-2xl shadow-2xl overflow-hidden text-white my-8 max-h-[90vh] flex flex-col"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Hero Image */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden flex-shrink-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#161A1D] via-transparent to-black/40" />

            <div className="absolute bottom-4 left-6 z-10">
              <span className="text-xs uppercase tracking-widest text-[#C59A58] font-semibold bg-black/50 px-2.5 py-1 rounded">
                {project.category}
              </span>
              <h2
                className="text-2xl sm:text-3xl font-bold text-white mt-1"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {project.title}
              </h2>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
            {/* Specs Bar */}
            <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-[#111417] border border-white/10 text-center">
              <div>
                <div className="flex items-center justify-center gap-1.5 text-slate-400 text-xs mb-1">
                  <Maximize className="w-3.5 h-3.5 text-[#C59A58]" />
                  <span>Gross Area</span>
                </div>
                <p className="text-sm sm:text-base font-bold text-white">{project.sqft}</p>
              </div>

              <div>
                <div className="flex items-center justify-center gap-1.5 text-slate-400 text-xs mb-1">
                  <Calendar className="w-3.5 h-3.5 text-[#C59A58]" />
                  <span>Completed</span>
                </div>
                <p className="text-sm sm:text-base font-bold text-white">{project.year || '2024'}</p>
              </div>

              <div>
                <div className="flex items-center justify-center gap-1.5 text-slate-400 text-xs mb-1">
                  <MapPin className="w-3.5 h-3.5 text-[#C59A58]" />
                  <span>Location</span>
                </div>
                <p className="text-sm sm:text-base font-bold text-white truncate px-2">{project.location || 'United States'}</p>
              </div>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-sm font-semibold text-[#C59A58] uppercase tracking-wider mb-2">
                Architectural Narrative
              </h4>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.description ||
                  'Designed and constructed by Buildora with an emphasis on thermal mass efficiency, spatial fluidity, and structural longevity. Every junction and surface was curated to withstand environmental stressors while maintaining timeless aesthetic purity.'}
              </p>
            </div>

            {/* Key Architectural Highlights */}
            <div>
              <h4 className="text-sm font-semibold text-[#C59A58] uppercase tracking-wider mb-2">
                Engineering Highlights
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#C59A58]" />
                  <span>Cast-in-place architectural concrete finish</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#C59A58]" />
                  <span>Solar-responsive low-iron acoustic glazing</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#C59A58]" />
                  <span>Cantilevered post-tensioned floor plates</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#C59A58]" />
                  <span>Integrated geothermal climate loops</span>
                </li>
              </ul>
            </div>

            {/* Actions */}
            <div className="pt-4 flex items-center justify-end gap-3 border-t border-white/10">
              <button
                onClick={onClose}
                className="px-4 py-2 text-xs text-slate-400 hover:text-white transition-colors"
              >
                Close View
              </button>
              <button
                onClick={() => {
                  onClose();
                  onOpenQuote();
                }}
                className="px-6 py-2.5 bg-[#C59A58] hover:bg-[#b58c4c] text-white rounded-lg text-xs font-semibold tracking-wide transition-colors"
              >
                Inquire About Similar Project
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
