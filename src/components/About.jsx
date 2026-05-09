import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

/**
 * About Section Component
 * Displays the profile picture, about text, work/interests description,
 * and side-by-side education logos.
 */
export default function About() {
  const { about, pictureUrl } = portfolioData.profile;
  const { work, interests, education } = portfolioData.experience;

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative z-main px-4 py-20 bg-stellar-grey">
      <motion.div 
        className="max-w-4xl mx-auto flex flex-col gap-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        
        {/* Top Block: Profile Picture and About Text */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          <motion.div variants={itemVariants} className="flex-shrink-0">
            <img 
              src={pictureUrl} 
              alt="Profile" 
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-2xl"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col justify-center h-full pt-4">
            <h2 className="text-4xl mb-6">About Me</h2>
            <p className="text-lg leading-relaxed text-dimmed-text">
              {about}
            </p>
          </motion.div>
        </div>

        {/* Middle Block: Work & Interests */}
        <motion.div variants={itemVariants}>
          <div className="text-lg leading-relaxed text-dimmed-text space-y-6">
            <p>{work}</p>
            <p>{interests}</p>
          </div>
        </motion.div>

        {/* Bottom Block: Education Logos Side by Side */}
        <motion.div 
          variants={itemVariants} 
          className="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-24"
        >
          {education.map((edu, index) => (
            <div key={index} className="flex items-center gap-4 group flex-1">
              <img 
                src={edu.logo} 
                alt={`${edu.institution} logo`} 
                className={
                  "w-16 h-16 md:w-12 md:h-12 shrink-0 object-contain " + 
                  "group-hover:scale-110 transition-transform duration-300"
                }
              />
              
              {/* Skinny orange dividing line */}
              <div className="w-[2px] h-12 bg-warm-orange/60 shrink-0"></div>
              
              <div className="flex flex-col">
                <span className="text-base md:text-lg font-bold text-dimmed-text group-hover:text-warm-orange transition-colors">
                  {edu.institution}
                </span>
                <span className="text-xs md:text-sm text-dimmed-text/70 mt-1 leading-snug">
                  {edu.details}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
}
