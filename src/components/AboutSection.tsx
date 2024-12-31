import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="mt-20"
      id="about"
    >
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        About
      </h2>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          I developed an interactive web-based gaming platform featuring three
          unique games, each designed to demonstrate algorithmic thinking, React
          expertise, and intuitive UI/UX. This project showcases my ability to
          create engaging user experiences and implement game logic efficiently
          using modern web development tools and practices.
        </p>
      </div>
    </motion.div>
  );
}
