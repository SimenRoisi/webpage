import { motion } from 'framer-motion';

/**
 * TechStack Component
 * Displays an infinite scrolling marquee of technology logos.
 * Features a fade-out effect on the left and right edges.
 */
export default function TechStack() {
  const techs = [
    { name: 'React', slug: 'react' },
    { name: 'Python', slug: 'python' },
    { name: 'C++', slug: 'cplusplus' },
    { name: 'JavaScript', slug: 'javascript' },
    { name: 'FastAPI', slug: 'fastapi' },
    { name: 'Docker', slug: 'docker' },
    { name: 'PostgreSQL', slug: 'postgresql' },
    { name: 'PyTorch', slug: 'pytorch' },
    { name: 'OpenCV', slug: 'opencv' },
    { name: 'ROS', slug: 'ros' },
    { name: 'OpenAI', localUrl: '/openai.svg' },
    { name: 'Claude Code', slug: 'claude' },
    { name: 'Cursor', slug: 'cursor' },
  ];

  // We duplicate the array to create a seamless infinite loop
  const duplicatedTechs = [...techs, ...techs];

  return (
    <section className="py-12 relative z-main bg-stellar-grey overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl text-dimmed-text uppercase tracking-widest mb-8 text-center">Technical Stack</h2>
        </motion.div>

        {/* The mask-image creates the fading effect on the left and right edges */}
        <div className="relative flex overflow-hidden w-[80%] mx-auto" style={{
            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
        }}>
          
          <motion.div
            className="flex gap-16 items-center flex-nowrap shrink-0"
            animate={{
              x: ['0%', '-60%'],
            }}
            transition={{
              duration: 50,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {duplicatedTechs.map((tech, index) => (
              <div 
                key={`${tech.name}-${index}`} 
                className="flex items-center justify-center hover:scale-110 transition-transform duration-300 w-16 h-16 flex-shrink-0"
                title={tech.name}
              >
                <img 
                  src={tech.localUrl || `https://cdn.simpleicons.org/${tech.slug}`} 
                  alt={tech.name} 
                  className={`w-12 h-12 object-contain ${tech.name === 'OpenAI' ? 'scale-[1.35]' : ''}`} 
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
