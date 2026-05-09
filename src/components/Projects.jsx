import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Code, ExternalLink } from 'lucide-react';

/**
 * Projects Section Component
 * Displays a list of GitHub projects in a grid.
 */
export default function Projects() {
  const { projects } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="projects" className="min-h-screen relative z-main px-4 py-20 bg-stellar-grey overflow-visible">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl mb-12 text-center">My Projects</h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch overflow-visible"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id} 
              variants={itemVariants}
              whileHover={
                project.hoverExpand
                  ? { scale: 1.02, zIndex: 20 }
                  : { zIndex: 20 }
              }
              transition={{ type: 'spring', stiffness: 380, damping: 28 }}
              className="group relative flex h-full min-h-0 w-full flex-col overflow-visible bg-stellar-grey/80 border border-warm-orange/30 p-6 rounded-xl origin-top shadow-lg shadow-black/20 transition-[border-color,box-shadow] duration-300 hover:border-warm-orange hover:shadow-xl hover:shadow-black/30"
            >
              {project.imageUrl ? (
                <div className="aspect-video rounded-lg overflow-hidden mb-4 border border-warm-orange/20 bg-stellar-grey shrink-0">
                  <img
                    src={project.imageUrl}
                    alt={`${project.title} — placeholder preview`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : null}
              <h3 className="text-2xl mb-3 shrink-0">{project.title}</h3>
              <p
                className={
                  'shrink-0 text-dimmed-text text-sm leading-relaxed ' +
                  'line-clamp-3 group-hover:line-clamp-none ' +
                  'group-hover:text-[0.8125rem] group-hover:leading-snug ' +
                  'transition-[font-size,line-height] duration-300 ease-out'
                }
              >
                {project.description}
              </p>

              <div className="mt-auto shrink-0 pt-6">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs bg-warm-orange/10 text-warm-orange px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-dimmed-text hover:text-warm-orange transition-colors flex items-center gap-2">
                    <Code size={18} /> Code
                  </a>
                  {project.demoUrl && project.demoUrl !== '#' ? (
                    <a href={project.demoUrl} target="_blank" rel="noreferrer" className="text-dimmed-text hover:text-warm-orange transition-colors flex items-center gap-2">
                      <ExternalLink size={18} /> Demo
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
