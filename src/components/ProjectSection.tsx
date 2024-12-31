import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { projects } from '../data/projects';

export function ProjectSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8" id="projects">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </motion.div>
  );
}