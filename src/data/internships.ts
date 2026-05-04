import { Internship } from './types';

export const INTERNSHIPS: Internship[] = [
  {
    id: 1,
    title: "Software Engineering Intern",
    company: "Accenture",
    period: "December 2025 - Present",
    duration: "4+ months",
    description: "Developing enterprise-scale AI solutions and optimizing backend microservices for global clients.",
    detailedDescription: "Working on cutting-edge AI/ML projects involving NLP and computer vision. Optimized microservices reducing latency by 40%. Collaborated with cross-functional teams across 5 countries.",
    skills: ["Python", "TypeScript", "React", "AWS", "Docker", "Kubernetes", "Machine Learning"],
    achievements: [
      "Reduced API response time by 40% through microservice optimization",
      "Implemented ML pipeline processing 100K+ records daily",
      "Led knowledge sharing sessions for 50+ engineers"
    ],
    image: "https://picsum.photos/seed/accenture/500/400",
    color: "#6B7A65"
  },
  {
    id: 2,
    title: "AI Policy Intern",
    company: "DGFT, Ministry of Commerce",
    period: "June 2025 - July 2025",
    duration: "2 months",
    description: "Analyzed international trade data to identify economic trends and support policy formulation.",
    detailedDescription: "Conducted quantitative analysis of trade datasets spanning 15 years and 180 countries. Generated insights that influenced tariff negotiations and trade policy recommendations at the national level.",
    skills: ["Data Analysis", "Python", "R", "SQL", "Economic Modeling", "Report Writing"],
    achievements: [
      "Analyzed 2.5M+ trade records across 180 countries",
      "Created predictive models for trade trends with 92% accuracy",
      "Policy recommendations adopted by ministry officials"
    ],
    image: "https://picsum.photos/seed/dgft/500/400",
    color: "#C2847A"
  },
  {
    id: 3,
    title: "Research Intern",
    company: "DIPR, DRDO",
    period: "July 2022 - August 2022",
    duration: "2 months",
    description: "Implemented multi-neural network systems for psychological profiling and data-driven decision support.",
    detailedDescription: "Designed and implemented neural network architectures for behavioral analysis. Conducted research on cognitive patterns and developed decision-support systems used in real-world applications.",
    skills: ["Deep Learning", "TensorFlow", "Python", "Neural Networks", "Research Methodology", "Data Visualization"],
    achievements: [
      "Built multi-neural network models with 59%+ accuracy",
      "Published research findings in internal technical reports",
      "System adopted for behavioral analysis and profiling"
    ],
    image: "https://picsum.photos/seed/drdo/500/400",
    color: "#6B7A65"
  },
];
