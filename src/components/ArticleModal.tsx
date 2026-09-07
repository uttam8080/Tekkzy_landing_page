import React from 'react';
import { X, Clock, Calendar, Tag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BlogPost } from '../types';

interface ArticleModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#161A1D] border border-[#C59A58]/30 rounded-2xl shadow-2xl overflow-hidden text-white my-8 max-h-[90vh] flex flex-col"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors"
            aria-label="Close article"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Featured Image */}
          <div className="relative h-56 sm:h-72 w-full overflow-hidden flex-shrink-0">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#161A1D] via-transparent to-black/30" />
            
            <div className="absolute bottom-4 left-6 z-10 flex items-center gap-2">
              <span className="text-xs uppercase tracking-widest text-[#C59A58] font-semibold bg-black/50 px-2.5 py-1 rounded flex items-center gap-1.5">
                <Tag className="w-3 h-3" />
                {post.category}
              </span>
              <span className="text-xs text-slate-300 bg-black/50 px-2.5 py-1 rounded flex items-center gap-1.5">
                <Clock className="w-3 h-3" />
                {post.readTime}
              </span>
            </div>
          </div>

          {/* Article Body */}
          <div className="p-6 sm:p-8 space-y-4 overflow-y-auto">
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <Calendar className="w-3.5 h-3.5 text-[#C59A58]" />
              <span>
                Published on {post.date.month} {post.date.day}, 2024
              </span>
            </div>

            <h2
              className="text-2xl sm:text-3xl font-normal text-white leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {post.title}
            </h2>

            <p className="text-sm sm:text-base text-[#C59A58] italic font-serif">
              "{post.excerpt}"
            </p>

            <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed pt-2 border-t border-white/10">
              <p>
                In the modern era of luxury architecture and precision engineering, the dialogue between space, light, and materiality has taken center stage. Buildora's design and construction team synthesizes rigorous technical discipline with organic structural poetry.
              </p>
              <p>
                Whether integrating hidden structural steel moments or casting monolithic architectural concrete walls that soften over decades, quality architecture endures. By selecting durable, local, and carbon-conscious materials, we protect both the client’s capital investment and the surrounding environment.
              </p>
              <p>
                Our ongoing projects across North America showcase this philosophy in practice: from high-performance residential cantilevers in alpine settings to resilient urban commercial towers that breathe with natural ventilation.
              </p>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                onClick={onClose}
                className="px-5 py-2 bg-[#C59A58] hover:bg-[#b58c4c] text-white rounded-lg text-xs font-semibold"
              >
                Close Article
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
