import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    title: "AI Market Analysis Platform",
    description: "A predictive system blending economic indicators with sentiment analysis to forecast market trends.",
    why: "I built this to bridge the gap between abstract economic theory and real-time data execution.",
    tags: ["Python", "TensorFlow", "FastAPI", "Economics"],
    link: "#",
    image: "https://picsum.photos/seed/market/800/600"
  },
  {
    title: "RAG-based Policy Assistant",
    description: "A specialized chatbot for government officials to query complex trade regulations using LLMs.",
    why: "Navigating bureaucracy is hard; I wanted to make policy data accessible and conversational.",
    tags: ["LangChain", "MongoDB", "OpenAI", "React"],
    link: "#",
    image: "https://picsum.photos/seed/policy/800/600"
  },
  {
    title: "Neural Network Optimizer",
    description: "A backend service that dynamically adjusts model parameters based on server load and latency.",
    why: "Efficiency is key in production AI. This project focuses on scaling intelligence sustainably.",
    tags: ["Go", "PyTorch", "Redis", "Docker"],
    link: "#",
    image: "https://picsum.photos/seed/neural/800/600"
  }
];
