import { Project } from "../types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Snake Game",
    description:
      "A classic Snake game built with React and Canvas, featuring smooth controls and increasing difficulty.",
    image:
      "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&q=80&w=1000",
    link: "https://codesandbox.io/p/sandbox/snake-rjs736?file=%2Fsrc%2Fcomponents%2FSnake.jsx%3A61%2C1",
    technologies: ["React", "Canvas", "TypeScript"],
  },
  {
    id: 2,
    title: "Memory Game",
    description:
      "Test your memory with this engaging card-matching game featuring beautiful animations and sound effects.",
    image:
      "https://images.unsplash.com/photo-1606167668584-78701c57f13d?auto=format&fit=crop&q=80&w=1000",
    link: "https://codesandbox.io/p/sandbox/memory-game-yqkyyn",
    technologies: ["React", "TypeScript"],
  },
  {
    id: 3,
    title: "Bishop Moves Visualizer",
    description: "8x8 chessboard simulator for bishop movement logic",
    image:
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=1000",
    link: "https://codesandbox.io/p/sandbox/chessboard-79yhw2",
    technologies: ["React", "TypeScript", "Game Logic"],
  },
];
