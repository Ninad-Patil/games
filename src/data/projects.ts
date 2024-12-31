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
  },
  {
    id: 2,
    title: "Memory Game",
    description: "Test your memory, Can you Remember all the cards?.",
    image:
      "https://images.unsplash.com/photo-1606167668584-78701c57f13d?auto=format&fit=crop&q=80&w=1000",
    link: "https://codesandbox.io/p/sandbox/memory-game-yqkyyn",
    technologies: ["React"],
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
  },
];
