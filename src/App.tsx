import { motion } from 'framer-motion';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectSection } from './components/ProjectSection';
import { AboutSection } from './components/AboutSection';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Header />
      <Hero />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ProjectSection />
        <AboutSection />
      </main>
    </div>
  );
}