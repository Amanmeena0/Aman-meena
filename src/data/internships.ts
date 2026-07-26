import { Internship } from './types';

export const INTERNSHIPS: Internship[] = [
  {
    id: 1,
    title: "Software Intern",
    company: "Accenture",
    period: "Dec 2025 - May 2026",
    duration: "6 months",
    description: "Analyzed 200+ ServiceNow ITSM tickets on an international client account (~55% volume reduction triage) and earned P3 Accenture's best intern-level MyCompetency rating across Agentic AI, RAG, AWS, and Azure.",
    detailedDescription: "Analyzed 200+ ServiceNow ITSM tickets on an international client account, identifying 4 recurring failure patterns driving ~55% of ticket volume; documented findings in a triage report for the account team. Completed Accenture technical training in Agentic AI, RAG, LangChain, AWS, and Azure; earned P3 Accenture’s best intern-level MyCompetency rating.",
    skills: ["ServiceNow ITSM", "Agentic AI", "RAG", "LangChain", "AWS", "Azure", "Python", "T-SQL", "DevOps", "GitHub", "Prompt Engineering"],
    achievements: [
      "Analyzed 200+ ServiceNow ITSM tickets on an international client account, identifying 4 recurring failure patterns driving ~55% of ticket volume; documented findings in a triage report for the account team.",
      "Completed Accenture technical training in Agentic AI, RAG, LangChain, AWS, and Azure; earned P3 Accenture’s best intern-level MyCompetency rating."
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
    description: "Built & deployed a RAG chatbot indexing 100+ policy documents (2K text chunks), achieving 75–85% retrieval@3 and improving policy-aligned answer rate from ~54% to 81%.",
    detailedDescription: "Built and deployed a RAG chatbot indexing 100+ DGFT policy documents (2K text chunks) across 10+ policy categories; replaced a legacy keyword bot, achieving 75–85% retrieval@3 on an internal query benchmark. Reduced user effort to discover relevant policies and knowledge by 78% via self-service conversational support, and cut hallucinated or non-DGFT responses by nearly 90% through AI guardrails and secure session handling. Iterated across 12+ prompt-tuning cycles and 16+ retrieval configurations (chunk size, top-k, reranker); tracked accuracy on a 100-question internal eval set, improving policy-aligned answer rate from ~54% → 81%.",
    skills: ["RAG", "LangChain", "ChromaDB", "Gemini LLM", "AI Guardrails", "Prompt Tuning", "Python", "APIs", "Vector Databases", "Data Pipelines"],
    achievements: [
      "Built and deployed a RAG chatbot indexing 100+ DGFT policy documents (2K text chunks) across 10+ policy categories; replaced a legacy keyword bot, achieving 75–85% retrieval@3 on an internal query benchmark.",
      "Reduced user effort to discover relevant policies and knowledge by 78% via self-service conversational support, and cut hallucinated or non-DGFT responses by nearly 90% through AI guardrails and secure session handling.",
      "Iterated across 12+ prompt-tuning cycles and 16+ retrieval configurations (chunk size, top-k, reranker); tracked accuracy on a 100-question internal eval set, improving policy-aligned answer rate from ~54% → 81%."
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
    description: "Designed a multimodal deception-detection pipeline on ~1K labeled samples, achieving 81% accuracy via Random Forest late-fusion ensemble (+7 percentage-point lift).",
    detailedDescription: "Designed a multimodal deception-detection pipeline on ~1K labeled samples: linguistic model (DistilBERT on Faster-Whisper transcripts) and acoustic model (librosa MFCC, pitch, energy), with probability outputs fused via a Random Forest ensemble. Linguistic model achieved 74% accuracy and acoustic model 68% individually; Random Forest late-fusion ensemble reached 81% accuracy - a ~7 percentage-point lift, showing text and voice modalities carry complementary deception signals. Built reusable preprocessing modules for transcript normalization, audio segmentation (5s windows), and feature extraction; cut per-experiment setup time from ~60 min → ~10 min and standardized comparison across model variants.",
    skills: ["Deep Learning", "NLP", "Python", "DistilBERT", "Faster-Whisper", "librosa", "Random Forest", "Feature Extraction", "Data Pipelines", "Multimodal Analysis"],
    achievements: [
      "Designed a multimodal deception-detection pipeline on ~1K labeled samples: linguistic model (DistilBERT on Faster-Whisper transcripts) and acoustic model (librosa MFCC, pitch, energy), with probability outputs fused via a Random Forest ensemble.",
      "Linguistic model achieved 74% accuracy and acoustic model 68% individually; Random Forest late-fusion ensemble reached 81% accuracy - a ~7 percentage-point lift, showing text and voice modalities carry complementary deception signals.",
      "Built reusable preprocessing modules for transcript normalization, audio segmentation (5s windows), and feature extraction; cut per-experiment setup time from ~60 min → ~10 min and standardized comparison across model variants."
    ],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3PiPF7o3pz33WYkGCwK6RE8chQmHaEAoB6g&s",
    color: "#6B7A65"
  },
];


