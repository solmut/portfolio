import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Sparkles, Bot, User, Loader2, Zap, ArrowLeft, RefreshCw } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { Link } from 'react-router-dom';

const LuminaAI = () => {
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash-exp",
        contents: userMessage,
        config: {
          systemInstruction: "You are Lumina AI, the core intelligence behind the Lumina platform. You are helpful, professional, and tech-forward. You explain complex technical concepts simply. Keep your responses concise and impactful. Use markdown for formatting.",
        }
      });

      const aiResponse = response.text || "I'm sorry, I couldn't process that request.";
      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: "I'm experiencing a temporary connection issue. Please try again in a moment." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-emerald-500/30 selection:text-emerald-400 flex flex-col">
      <div className="atmosphere" />
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5 py-4 px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <ArrowLeft className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
            <span className="text-sm font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">Back to Home</span>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-black fill-current" />
            </div>
            <span className="text-xl font-bold tracking-tight">Lumina AI</span>
          </div>
          <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">Neural Engine v4.0</span>
          </div>
        </div>
      </header>

      {/* Chat Area */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-6 pt-32 pb-40 overflow-hidden flex flex-col">
        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto space-y-8 pr-4 scrollbar-hide"
        >
          {messages.length === 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="h-full flex flex-col items-center justify-center text-center py-20"
            >
              <div className="w-20 h-20 bg-emerald-500/10 rounded-[2rem] flex items-center justify-center mb-8 border border-emerald-500/20">
                <Bot className="w-10 h-10 text-emerald-400" />
              </div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
                How can I help you <br />
                <span className="text-emerald-400">build today?</span>
              </h2>
              <p className="text-lg text-white/40 max-w-md mx-auto mb-12">
                I'm your Lumina AI assistant. Ask me anything about our infrastructure, API, or how to scale your next big idea.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
                {[
                  "How do I deploy my first Lumina app?",
                  "What's the latency of your edge network?",
                  "Explain the neural engine architecture.",
                  "Compare Lumina with traditional cloud providers."
                ].map((q, i) => (
                  <button 
                    key={i}
                    onClick={() => {
                      setInput(q);
                    }}
                    className="p-6 glass rounded-2xl border border-white/5 hover:border-emerald-500/30 text-left text-sm font-medium text-white/60 hover:text-white transition-all group"
                  >
                    {q}
                    <Zap className="w-4 h-4 mt-2 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex gap-6 ${msg.role === 'assistant' ? 'items-start' : 'items-start flex-row-reverse'}`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${msg.role === 'assistant' ? 'bg-emerald-500 text-black' : 'bg-white/10 text-white'}`}>
                {msg.role === 'assistant' ? <Bot className="w-6 h-6" /> : <User className="w-6 h-6" />}
              </div>
              <div className={`max-w-[80%] p-6 rounded-3xl ${msg.role === 'assistant' ? 'glass border border-white/5 text-white/90' : 'bg-emerald-500 text-black font-medium'}`}>
                <div className="prose prose-invert prose-emerald max-w-none text-inherit">
                  {msg.content}
                </div>
              </div>
            </motion.div>
          ))}

          {isLoading && (
            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 text-black flex items-center justify-center flex-shrink-0">
                <Bot className="w-6 h-6" />
              </div>
              <div className="glass p-6 rounded-3xl border border-white/5 flex items-center gap-3">
                <Loader2 className="w-5 h-5 text-emerald-400 animate-spin" />
                <span className="text-sm text-white/40 font-medium italic">Lumina is thinking...</span>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Input Area */}
      <footer className="fixed bottom-0 left-0 right-0 p-6 z-50">
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-[2rem] blur opacity-20"></div>
          <div className="relative glass rounded-[2rem] border border-white/10 p-2 flex items-center gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask Lumina AI anything..."
              className="flex-1 bg-transparent border-none px-6 py-4 focus:outline-none text-lg placeholder:text-white/20"
            />
            <button 
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="w-12 h-12 bg-emerald-500 text-black rounded-2xl flex items-center justify-center hover:bg-emerald-400 transition-all disabled:opacity-50 disabled:hover:bg-emerald-500"
            >
              <Send className="w-6 h-6" />
            </button>
          </div>
          <div className="mt-4 text-center">
            <p className="text-[10px] uppercase tracking-widest text-white/20 font-bold">
              Powered by Lumina Neural Engine v4.0 • Enterprise Grade Security
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LuminaAI;
