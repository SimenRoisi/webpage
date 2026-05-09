import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

/**
 * Hero Section Component
 * Displays the main entry point with immersive animations.
 */
export default function Hero() {
  const { name, tagline } = portfolioData.profile;

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative z-main text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="max-w-3xl"
      >
        <h1 className="text-5xl md:text-7xl mb-6">{name}</h1>
        <p className="text-xl md:text-2xl text-dimmed-text">{tagline}</p>
      </motion.div>
      
      {/* Simple scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <span className="text-dimmed-text opacity-50 block mb-2 text-sm">Scroll Down</span>
        <div className="w-1 h-8 bg-warm-orange mx-auto rounded-full"></div>
      </motion.div>
    </section>
  );
}
