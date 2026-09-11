import React from 'react';
import { motion } from 'motion/react';

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  mode?: 'words' | 'chars' | 'lines';
  once?: boolean;
}

export const TextReveal: React.FC<TextRevealProps> = ({
  text,
  className = '',
  delay = 0,
  stagger = 0.06,
  mode = 'words',
  once = true,
}) => {
  if (mode === 'lines') {
    const lines = text.split('\n');
    return (
      <span className={`inline-block ${className}`}>
        {lines.map((line, idx) => (
          <span key={idx} className="block overflow-hidden py-1">
            <motion.span
              initial={{ y: '115%', opacity: 0, rotateX: -25 }}
              whileInView={{ y: '0%', opacity: 1, rotateX: 0 }}
              viewport={{ once, margin: '-40px' }}
              transition={{
                duration: 0.85,
                delay: delay + idx * 0.15,
                ease: [0.215, 0.61, 0.355, 1],
              }}
              className="inline-block transform-gpu origin-bottom-left"
            >
              {line}
            </motion.span>
          </span>
        ))}
      </span>
    );
  }

  if (mode === 'chars') {
    const chars = Array.from(text);
    return (
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: '-40px' }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              delayChildren: delay,
              staggerChildren: stagger * 0.5,
            },
          },
        }}
        className={`inline-flex flex-wrap ${className}`}
      >
        {chars.map((char, index) => (
          <span key={index} className="overflow-hidden inline-block">
            <motion.span
              variants={{
                hidden: { y: '100%', opacity: 0 },
                visible: {
                  y: '0%',
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                    ease: [0.215, 0.61, 0.355, 1],
                  },
                },
              }}
              className="inline-block transform-gpu"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          </span>
        ))}
      </motion.span>
    );
  }

  // Default: Word-by-word reveal
  const words = text.split(' ');

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: stagger,
      },
    },
  };

  const wordVariants = {
    hidden: {
      y: '110%',
      opacity: 0,
      rotateX: -40,
    },
    visible: {
      y: '0%',
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-40px' }}
      className={`inline-flex flex-wrap gap-x-[0.25em] gap-y-[0.1em] overflow-hidden ${className}`}
      style={{ perspective: '1000px' }}
    >
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden py-0.5">
          <motion.span
            variants={wordVariants}
            className="inline-block transform-gpu origin-bottom-left"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};
