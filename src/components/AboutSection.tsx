import { motion } from "framer-motion";
import { Sparkles, Code2, Puzzle, Gamepad2, BrainCircuit } from "lucide-react";

export function AboutSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="mt-24 px-6 md:px-12 max-w-4xl mx-auto"
      id="about"
    >
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
        <Sparkles className="text-blue-500" />
        About This Portfolio
      </h2>

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-10 space-y-8 border dark:border-gray-700">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          This portfolio showcases a collection of interactive browser-based
          games built with modern frontend technologies. Each game demonstrates
          not just technical proficiency but also an understanding of clean
          architecture, performance optimization, and user-focused design.
        </p>

        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            <Code2 className="text-green-500" />
            Technical Skills Demonstrated
          </h3>

          <ul className="space-y-6 text-base text-gray-600 dark:text-gray-300">
            <li>
              <div className="text-xl font-medium text-blue-600 dark:text-blue-400 flex items-center gap-2">
                <Puzzle />
                Memory Matching Game
              </div>
              <ul className="list-disc list-inside pl-6 mt-2 space-y-1">
                <li>
                  Interactive grid of hidden, randomly shuffled card pairs
                </li>
                <li>Reveals cards on click and matches them logically</li>
                <li>
                  Matched cards stay revealed, others flip back after delay
                </li>
                <li>
                  Uses <code>useState</code> and <code>useEffect</code> for
                  state and logic
                </li>
                <li>Customizable board size via props</li>
              </ul>
            </li>

            <li>
              <div className="text-xl font-medium text-green-600 dark:text-green-400 flex items-center gap-2">
                <Gamepad2 />
                Snake Game
              </div>
              <ul className="list-disc list-inside pl-6 mt-2 space-y-1">
                <li>15x15 grid-based snake movement using arrow keys</li>
                <li>Snake grows on eating food, resets on wall collision</li>
                <li>
                  Uses <code>useRef</code> for direction & food, and{" "}
                  <code>useState</code> for body tracking
                </li>
                <li>
                  Game loop handled via <code>setInterval</code> in{" "}
                  <code>useEffect</code>
                </li>
              </ul>
            </li>

            <li>
              <div className="text-xl font-medium text-purple-600 dark:text-purple-400 flex items-center gap-2">
                <BrainCircuit />
                Bishop Moves Visualizer
              </div>
              <ul className="list-disc list-inside pl-6 mt-2 space-y-1">
                <li>8x8 chessboard simulator for bishop movement logic</li>
                <li>Hover highlights diagonals from current cell</li>
                <li>
                  Recursive function with direction arrays handles movement
                </li>
                <li>Highlights current cell (🟦) and valid moves (🟪)</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            These projects collectively demonstrate my strong hold on{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              React
            </span>{" "}
            fundamentals—including hooks, state management, component
            architecture, event handling, and side effects. The implementations
            reflect my ability to translate abstract logic into visually
            engaging and maintainable frontend applications.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
