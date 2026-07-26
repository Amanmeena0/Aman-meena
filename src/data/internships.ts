import { Internship } from './types';

export const INTERNSHIPS: Internship[] = [
  {
    id: 1,
    title: "Software Intern",
    company: "Accenture",
    period: "Dec 2025 - May 2026",
    duration: "6 months",
    description: "Analyzed 200+ ServiceNow ITSM tickets, identifying failure patterns driving ~55% ticket volume, and earned P3 MyCompetency rating across Agentic AI, RAG, AWS, and Azure.",
    detailedDescription: "Analyzed 200+ ServiceNow ITSM tickets on an international client account, identifying 4 recurring failure patterns driving ~55% of ticket volume and documenting findings in a triage report. Completed technical training in Agentic AI, RAG, LangChain, AWS, and Azure, earning P3 Accenture’s best intern-level MyCompetency rating.",
    skills: ["ServiceNow ITSM", "Agentic AI", "RAG", "LangChain", "AWS", "Azure", "Python", "T-SQL", "DevOps", "GitHub", "Prompt Engineering"],
    achievements: [
      "Earned P3 Accenture’s best intern-level MyCompetency rating",
      "Analyzed 200+ ServiceNow ITSM tickets, identifying 4 failure patterns driving ~55% of ticket volume and documenting triage findings"
    ],
    image: "https://www.cio.com/wp-content/uploads/2026/01/4113365-0-48238000-1767730312-shutterstock_2390551643.jpg?quality=50&strip=all&w=1024",
    color: "#6B7A65"
  },
  {
    id: 2,
    title: "AI Intern",
    company: "DGFT, Ministry of Commerce and Industry",
    period: "Jun 2025 - Jul 2025",
    duration: "2 months",
    description: "Built & deployed a RAG chatbot indexing 100+ policy documents, achieving 75–85% retrieval@3 and improving policy-aligned answer rate from ~54% to 81%.",
    detailedDescription: "Built and deployed a RAG chatbot indexing 100+ DGFT policy documents (2K text chunks) across 10+ policy categories, replacing a legacy keyword bot and achieving 75–85% retrieval@3. Reduced user search effort by 78% and cut hallucinated responses by ~90% using AI guardrails. Iterated across 12+ prompt-tuning cycles and 16+ retrieval configurations, raising policy-aligned answer rate from ~54% to 81% on a 100-question eval set.",
    skills: ["RAG", "LangChain", "ChromaDB", "Gemini LLM", "AI Guardrails", "Prompt Tuning", "Python", "APIs", "Vector Databases", "Data Pipelines"],
    achievements: [
      "Achieved 75–85% retrieval@3 on internal query benchmark, replacing legacy keyword bot",
      "Improved policy-aligned answer rate from ~54% to 81% across 12+ prompt-tuning cycles and 16+ retrieval configurations",
      "Reduced user effort by 78% and cut hallucinated/non-DGFT responses by nearly 90% via AI guardrails"
    ],
    image: "https://www.dgft.gov.in/CP/images/img/dgft.jpg",
    color: "#C2847A"
  },
  {
    id: 3,
    title: "Research Intern",
    company: "DIPR, DRDO",
    period: "Jul 2024 - Aug 2024",
    duration: "2 months",
    description: "Designed a multimodal deception-detection pipeline combining linguistic and acoustic models, achieving 81% accuracy via Random Forest ensemble.",
    detailedDescription: "Designed a multimodal deception-detection pipeline on ~1K labeled samples using DistilBERT on Faster-Whisper transcripts (74% accuracy) and librosa acoustic features (68% accuracy). Combined modalities using Random Forest late-fusion ensemble to achieve 81% overall accuracy (+7 percentage-point lift). Developed reusable audio segmentation (5s windows) and preprocessing modules, reducing per-experiment setup time from ~60 min to ~10 min.",
    skills: ["Deep Learning", "NLP", "Python", "DistilBERT", "Faster-Whisper", "librosa", "Random Forest", "Feature Extraction", "Data Pipelines", "Multimodal Analysis"],
    achievements: [
      "Achieved 81% accuracy with Random Forest late-fusion ensemble on ~1K labeled samples (+7 percentage-point lift)",
      "Cut per-experiment setup time from ~60 min to ~10 min with standardized preprocessing modules",
      "Individual model performance: Linguistic (DistilBERT) 74% accuracy, Acoustic (librosa) 68% accuracy"
    ],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3PiPF7o3pz33WYkGCwK6RE8chQmHaEAoB6g&s",
    color: "#6B7A65"
  },
];

