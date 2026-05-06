import { Internship } from './types';

export const INTERNSHIPS: Internship[] = [
  {
    id: 1,
    title: "Software Engineering Intern",
    company: "Accenture",
    period: "December 2025 - Present",
    duration: "4+ months",
    description: "Managed production support tickets in a large-scale enterprise project, improving resolution efficiency and maintaining SLA compliance. Completed comprehensive training across 15+ technologies including Agentic AI, RAG, LangChain, and LangGraph. Achieved P2+ proficiency in Accenture MyCompetency, qualifying for full-time role as top performer.",
    detailedDescription: "Managed production support tickets in a large-scale enterprise project, improving resolution efficiency and maintaining SLA compliance. Completed comprehensive training across 15+ technologies including Agentic AI, RAG, LangChain, and LangGraph. Achieved P2+ proficiency in Accenture MyCompetency, qualifying for full-time role as top performer.",
    skills: ["Python", "TypeScript", "T-SQL", "React", "AWS", "Azure", "Docker", "Kubernetes", "Machine Learning", "Agentic AI", "RAG", "LangChain", "LangGraph", "DevOps", "GitHub", "Prompt Engineering"],
    achievements: [
      "Managed production support tickets in large-scale enterprise project, improving resolution efficiency while maintaining SLA compliance",
      "Completed training across 15+ technologies including Agentic AI, RAG, LangChain, LangGraph, DevOps, AWS, Azure, and ML with hands-on projects",
      "Achieved P2+ proficiency in Accenture MyCompetency, qualifying for full-time role as top performer",
      "Gained expertise in AI system development, prompt engineering, Python backend, T-SQL, GitHub, and cloud fundamentals"
    ],
    image: "https://picsum.photos/seed/accenture/500/400",
    color: "#6B7A65"
  },
  {
    id: 2,
    title: "AI Intern",
    company: "DGFT, Ministry of Commerce",
    period: "June 2025 - July 2025",
    duration: "2 months",
    description: "Engineered a RAG-based system using LangChain, ChromaDB, and Gemini LLM for querying trade policy information.",
    detailedDescription: "Engineered a RAG-based system using LangChain, ChromaDB, and Gemini LLM, achieving 99% response accuracy. Scaled the system to handle 100K+ concurrent requests with high availability and low latency. Integrated APIs and agent workflows to reduce manual effort and improve system efficiency.",
    skills: ["RAG", "LangChain", "ChromaDB", "Gemini LLM", "Generative AI", "Python", "APIs", "Agent Workflows", "Data Pipelines", "Vector Databases"],
    achievements: [
      "Engineered RAG-based system achieving 99% response accuracy",
      "Scaled system to handle 100K+ concurrent requests with high availability and low latency",
      "Integrated APIs and agent workflows to reduce manual effort and improve system efficiency",
      "Built data pipelines for processing 100+ documents, creating structured knowledge base from unstructured data"
    ],
    image: "https://picsum.photos/seed/dgft/500/400",
    color: "#C2847A"
  },
  {
    id: 3,
    title: "Research Intern",
    company: "DIPR, DRDO",
    period: "July 2024 - August 2024",
    duration: "2 months",
    description: "Developed a multimodal lie detection system using facial expression analysis and voice-based NLP models.",
    detailedDescription: "Developed a multimodal lie detection system using facial expression analysis and voice-based NLP models, achieving 57% accuracy on a 10K+ dataset. Improved processing speed by 13% through optimized ML techniques and built robust data pipelines for research-driven insights.",
    skills: ["Deep Learning", "NLP", "Python", "Facial Expression Analysis", "Voice Analysis", "Neural Networks", "Data Pipelines", "ML Optimization", "Research Methodology"],
    achievements: [
      "Developed multimodal lie detection system using facial expression and voice-based NLP analysis",
      "Achieved 57% accuracy on 10K+ dataset",
      "Improved processing speed by 13% through ML optimization",
      "Prepared and submitted 3+ reports ensuring accuracy and completeness"
    ],
    image: "https://picsum.photos/seed/drdo/500/400",
    color: "#6B7A65"
  },
];
