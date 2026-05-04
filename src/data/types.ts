export interface Project {
  title: string;
  description: string;
  why: string;
  tags: string[];
  link: string;
  image: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  image: string;
}

export interface Internship {
  id: number;
  title: string;
  company: string;
  period: string;
  duration: string;
  description: string;
  detailedDescription: string;
  skills: string[];
  achievements: string[];
  image: string;
  color: string;
}

export interface ChatMessage {
  role: 'user' | 'ai';
  content: string;
}
