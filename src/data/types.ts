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

export interface ChatMessage {
  role: 'user' | 'ai';
  content: string;
}
