import React from 'react';
import { motion } from 'motion/react';

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}

export const TextReveal: React.FC<TextRevealProps> = ({
  text,
  className = '',
  delay = 0,
  stagger = 0.08,
}) => {
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
      rotateX: -45,
    },
    visible: {
      y: '0%',
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.85,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={`inline-flex flex-wrap gap-x-[0.25em] gap-y-[0.1em] overflow-hidden ${className}`}
      style={{ perspective: '1000px' }}
    >
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden py-1">
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
