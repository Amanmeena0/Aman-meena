import { useState } from 'react';
import { ChatMessage } from '@/src/data/types';
import { generateAIResponse } from '@/src/services/geminiService';

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'ai', content: "Hi! I'm Aman's AI assistant. Ask me anything about his background in economics, his tech stack, or his projects!" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const aiResponse = await generateAIResponse(userMsg);
      setMessages(prev => [...prev, { role: 'ai', content: aiResponse }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { 
        role: 'ai', 
        content: "I'm having a little trouble connecting right now. Feel free to reach out to Aman directly!" 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    messages,
    input,
    setInput,
    isLoading,
    handleSend
  };
}
