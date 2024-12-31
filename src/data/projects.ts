import { Project } from "../types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Snake Game",
    description: "A classic Snake game built with React.",
    image:
      "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&q=80&w=1000",
    link: "https://codesandbox.io/p/sandbox/snake-c2jtgl",
    technologies: ["React"],
    features: [
      "A modern rendition of the classic Snake game built using React.",
      "Implements real-time state management with useState and useRef for smooth gameplay.",
      "Dynamic grid-based rendering and collision detection for game logic.",
      "Randomized food generation with scalable difficulty.",
    ],
  },
  {
    id: 2,
    title: "Memory Game",
    description: "Test your memory, Can you Remember all the cards?.",
    image:
      "https://images.unsplash.com/photo-1606167668584-78701c57f13d?auto=format&fit=crop&q=80&w=1000",
    link: "https://codesandbox.io/p/sandbox/memory-game-yqkyyn",
    technologies: ["React"],
    features: [
      "A pair-matching puzzle game where players uncover and match pairs of hidden cards.",
      "Includes a grid generation algorithm to randomize the layout for replayability.",
      "Uses React hooks to manage game states like matched pairs, active cards, and visual transitions.",
    ],
  },
  {
    id: 3,
    title: "Chess Board Traversal",
    description:
      "Traversing through the chess board and while tracking Bishop moves",
    image:
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=1000",
    link: "https://codesandbox.io/p/sandbox/chessboard-79yhw2",
    technologies: ["React", "Game Logic"],
    features: [
      "A chessboard traversal game focusing on visualizing the bishop’s movement in chess.",
      "Implements recursive logic to calculate valid moves across a grid.",
      "Interactive UI with hover effects to highlight potential moves dynamically.",
    ],
  },
];
