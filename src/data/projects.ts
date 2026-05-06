import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    title: "MarketScout - AI Market Analysis Platform",
    description: "A predictive system blending economic indicators with sentiment analysis to forecast market trends.",
    why: "I built this to bridge the gap between abstract economic theory and real-time data execution.",
    tags: ["Python", "TensorFlow", "FastAPI", "Economics"],
    link: "#",
    image: "https://picsum.photos/seed/market/800/600"
  },
  {
    title: "EduMantri: AI-Powered Educational Assistant",
    description: "A specialized chatbot for government officials to query complex trade regulations using LLMs.",
    why: "Navigating bureaucracy is hard; I wanted to make policy data accessible and conversational.",
    tags: ["LangChain", "MongoDB", "OpenAI", "React"],
    link: "#",
    image: "https://picsum.photos/seed/policy/800/600"
  },
  {
    title: "RevuMind - Multimodel Product Review Intelligence System",
    description: "An AI system that synthesizes product reviews across platforms to provide comprehensive insights.",
    why: "I built this to help consumers make informed decisions by distilling vast amounts of review data into actionable insights.",
    tags: ["Python", "PyTorch", "TensorFlow", "NLP", "Data Visualization", "Web Scraping","Feature Engineering"],
    link: "#",
    image: "https://picsum.photos/seed/neural/800/600"
  }
];
