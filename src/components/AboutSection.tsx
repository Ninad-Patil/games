import { motion } from 'framer-motion';

export function AboutSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="mt-20"
      id="about"
    >
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">About</h2>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          This portfolio showcases a collection of interactive games built with
          modern web technologies. Each project demonstrates proficiency in
          React, TypeScript, and various frontend development concepts. The
          games feature responsive design, clean code architecture, and
          engaging user experiences.
        </p>
        <div className="mt-6">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
            Technical Skills Demonstrated:
          </h3>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
            <li>React and TypeScript development</li>
            <li>State management and game logic</li>
            <li>Responsive design and animations</li>
            <li>Clean code and component architecture</li>
            <li>Performance optimization</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}