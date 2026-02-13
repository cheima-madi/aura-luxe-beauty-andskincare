
import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot, Loader2, Sparkles } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

interface ChatMessage {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 1, text: "Hello Gorgeous! I'm your Aura Luxe Beauty Consultant. Looking for a new Huda palette or Dior shade today?", sender: 'bot', timestamp: new Date() }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    const userMessage: ChatMessage = { id: Date.now(), text: userMsg, sender: 'user', timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `You are the "Aura Luxe Beauty Expert". You represent a premium retailer selling brands like Dior, Huda Beauty, Fenty Beauty, and Rare Beauty.
          Your personality: Professional, chic, knowledgeable about luxury makeup and skincare.
          Your knowledge:
          - Makeup: Foundations, lip glosses, highlighters.
          - Skincare: Drunk Elephant, Glow Recipe.
          - Logistics: Free shipping > 10,000 DA, 3-5 days delivery.
          - Style: Offer shade matching tips and skincare routine advice.
          - Restrictions: NO AR (Augmented Reality) exists. DO NOT mention camera features or virtual try-on.
          Always be helpful and luxurious in your tone.`
        }
      });

      const botResponse: ChatMessage = {
        id: Date.now() + 1,
        text: response.text || "I'm sorry, I'm currently updating our brand catalog. How else can I help?",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      setIsTyping(false);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 p-5 bg-black text-white rounded-full shadow-2xl hover:scale-110 transition-transform z-40 ${isOpen ? 'hidden' : 'flex'}`}
      >
        <Sparkles className="w-7 h-7" />
      </button>

      {isOpen && (
        <div className="fixed bottom-8 right-8 w-[400px] max-w-[calc(100vw-2rem)] h-[600px] max-h-[calc(100vh-4rem)] bg-white rounded-[2rem] shadow-[0_25px_100px_rgba(0,0,0,0.2)] flex flex-col z-50 overflow-hidden border border-gray-100 animate-in slide-in-from-bottom-20 duration-500">
          <div className="bg-black p-6 text-white flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Bot className="w-8 h-8" />
              <div>
                <h3 className="font-black text-[10px] uppercase tracking-widest luxury-font">Beauty Consultant</h3>
                <span className="text-[8px] text-green-400 font-bold uppercase tracking-widest">Active Concierge</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-xl transition"><X className="w-6 h-6" /></button>
          </div>
          <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 space-y-6 bg-gray-50/30">
            {messages.map(msg => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-[1.5rem] px-5 py-3.5 text-xs leading-relaxed shadow-sm ${msg.sender === 'user' ? 'bg-black text-white rounded-tr-none' : 'bg-white text-gray-800 rounded-tl-none border border-gray-100'}`}>
                  <p className="whitespace-pre-wrap">{msg.text}</p>
                </div>
              </div>
            ))}
            {isTyping && <Loader2 className="w-4 h-4 text-black animate-spin mx-auto" />}
          </div>
          <div className="p-6 bg-white border-t">
            <div className="relative">
              <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSend()} placeholder="Ask about Dior shades..." className="w-full pl-6 pr-14 py-4 bg-gray-50 border-none rounded-2xl focus:ring-1 focus:ring-black outline-none text-xs font-medium" />
              <button onClick={handleSend} className="absolute right-2 top-2 p-3 bg-black text-white rounded-xl shadow-lg"><Send className="w-4 h-4" /></button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
