import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    title: "Kojima | Open-Source Game & Tool Catalog",
    description: "A custom workshop pegboard catalog of tiny, free, and open-source games and tools. This project runs entirely on GitHub: issue templates serve as the submission form, approved issue comments act as the database, and GitHub Actions triggers static builds deployed directly to GitHub Pages.",
    why: "I built this to create an automated, community-driven workshop platform for hosting and showcasing tiny web-based tools and games.",
    tags: ["Next.js", "Typescript", "Tailwind CSS", "GitHub API", "GitHub Actions", "Web Development"],
    link: "https://RexxLudwig.github.io/kojima/",
    github: "https://github.com/RexxLudwig/tiny-island",
    image: "https://opengraph.githubassets.com/68f21bcaeab8159d46621d0e04c9904029248642391cd3754304752536c295b2/RexxLudwig/Kojima"
  },
  {
    title: "Sukauto | AI Market Analysis Platform",
    description: "An AI-driven platform that analyzes real-time market data to provide actionable insights and predictions for entrepreneurs and investors.",
    why: "I built this to empower entrepreneurs and investors with data-driven insights, helping them make informed decisions in a rapidly changing market landscape.",
    tags: ["Python", "LangChain", "FastAPI", "Next.js", "LLM", "Hugging Face",] ,
    link: "https://market-scout-client.vercel.app/",
    github: "https://github.com/RexxLudwig/Sukauto",
    image: "https://opengraph.githubassets.com/68f21bcaeab8159d46621d0e04c9904029248642391cd3754304752536c295b2/RexxLudwig/Sukauto"
  },
  {
    title: "Talklytics | Real-time Conversational Engagement Detection System", 
    description: "Talklytics is a real-time conversational engagement detection system that analyzes sales calls to output a convincingness score (1–5) based on acoustic features, speech recognition, and NLP sentiment analysis.",
    why: "I built this to help sales professionals improve their communication skills and increase their chances of success in sales interactions.",
    tags: ["Python", "PyTorch", "TensorFlow", "NLP", "Data Visualization", "Web Scraping","Feature Engineering"],
    link: "https://conviciesense-mic.vercel.app/",
    github: "https://github.com/RexxLudwig/Talklytics-update",
    image: "https://opengraph.githubassets.com/68f21bcaeab8159d46621d0e04c9904029248642391cd3754304752536c295b2/RexxLudwig/Talklytics-update"
  },
  {
    title:"Botanical Merge | Blend Your Vision",
    description: "An AI-powered image blending tool that allows users to merge two images into a unique creation using advanced algorithms.",
    why: "I built this to provide a creative platform for users to explore and blend their visual ideas in innovative ways.",
    tags: ["Python", "PyTorch", "TensorFlow", "NLP", "Data Visualization", "Web Scraping","Feature Engineering"],
    link: "https://botanical-merge.vercel.app/",
    github: "https://github.com/RexxLudwig/Botanical_Merge",
    image: "https://opengraph.githubassets.com/68f21bcaeab8159d46621d0e04c9904029248642391cd3754304752536c295b2/RexxLudwig/Botanical_Merge"
  },
  {
    title:"Bodo | Resume Builder and Guidance of the Interview",
    description: "A sleek and intuitive resume builder application that helps you create professional resumes with beautiful templates and real-time editing capabilities.", 
    why: "I build this for my friends who were struggling to build their resumes. Additionally, the project also includes a guidance system for interviews to help users prepare for their interviews.",
    tags: ["Next.js", "Typescript", "Tailwind CSS", "Supabase", "Vercel"],
    link: "bodo-eight.vercel.app/",
    github: "https://github.com/RexxLudwig/Bodo",
    image: "https://opengraph.githubassets.com/68f21bcaeab8159d46621d0e04c9904029248642391cd3754304752536c295b2/RexxLudwig/Bodo"  
  },
  {
    title: "SafeSphere | Crime Awareness Platform",
    description: "Engineered a full-stack platform using React.js and Flask for real-time crime monitoring, SOS alerts, and FIR registration. Implemented data visualization using structured datasets to generate actionable insights.",
    why: "I built this to enhance community safety by providing timely and relevant information about crime incidents and preventive measures.",
    tags: ["Python", "React.js", "Data Visualization", "GIS", "Data Analysis", "Web Development","Flask","SQLite"],
    link: "https://safe-sphere-ui.vercel.app",
    github: "https://github.com/RexxLudwig/SafeSphere-client",
    image: "https://opengraph.githubassets.com/68f21bcaeab8159d46621d0e04c9904029248642391cd3754304752536c295b2/RexxLudwig/SafeSphere-client"
  },
];
