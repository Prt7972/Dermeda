
import React, { useState, useRef, useEffect } from 'react';
import { getGloveRecommendation } from '../services/geminiService';
import { Message } from '../types';

const AIAdvisor: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Welcome to Dermeda. I'm CuraBot, your clinical advisor. How can I assist with your facility requirements today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    const response = await getGloveRecommendation(userMessage);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  return (
    <section id="advisor" className="py-16 md:py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full md:w-1/3 h-full bg-blue-100/30 skew-x-12 transform translate-x-1/2 md:translate-x-1/2"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-5 gap-10 md:gap-16 items-center">
          <div className="lg:col-span-2 text-center lg:text-left">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#004fa3] rounded-2xl md:rounded-3xl shadow-2xl mb-6 md:mb-8 flex items-center justify-center text-white mx-auto lg:mx-0">
              <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 md:mb-6 uppercase tracking-tighter leading-none">Clinical AI <br/><span className="text-[#004fa3]">Specialist</span></h2>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium mb-8">
              Instant clinical recommendations for complex medical environments.
            </p>
            <div className="hidden md:flex flex-col space-y-4">
              <div className="flex items-center gap-3 text-sm font-bold text-slate-500 uppercase tracking-widest">
                <div className="w-1.5 h-1.5 rounded-full bg-[#f58220]"></div>
                Material Compatibility
              </div>
              <div className="flex items-center gap-3 text-sm font-bold text-slate-500 uppercase tracking-widest">
                <div className="w-1.5 h-1.5 rounded-full bg-[#f58220]"></div>
                Certification Queries
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 w-full">
            <div className="bg-white rounded-[2rem] md:rounded-[3rem] shadow-2xl overflow-hidden border border-slate-200 flex flex-col h-[500px] md:h-[650px]">
              {/* Chat Header */}
              <div className="p-5 md:p-8 bg-[#004fa3] text-white flex items-center justify-between">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                    <span className="font-black text-sm md:text-lg">CB</span>
                  </div>
                  <div>
                    <h4 className="font-black uppercase tracking-widest text-[10px] md:text-sm">CuraBot Expert</h4>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                      <span className="text-[8px] md:text-[10px] font-bold text-blue-100 uppercase tracking-widest">Active Specialist</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Messages Area */}
              <div ref={scrollRef} className="flex-grow p-4 md:p-8 overflow-y-auto space-y-6 md:space-y-8 bg-[#fcfcfd]">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[90%] md:max-w-[85%] rounded-2xl md:rounded-3xl px-4 py-3 md:px-6 md:py-4 shadow-sm ${
                      msg.role === 'user' 
                        ? 'bg-[#004fa3] text-white rounded-tr-none' 
                        : 'bg-white text-slate-700 rounded-tl-none border border-slate-100'
                    }`}>
                      <p className="text-sm md:text-[15px] leading-relaxed font-medium whitespace-pre-line">{msg.content}</p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white border border-slate-100 rounded-xl px-4 py-3 shadow-sm rounded-tl-none">
                      <div className="flex gap-1.5">
                        <div className="w-1.5 h-1.5 bg-[#004fa3]/40 rounded-full animate-bounce"></div>
                        <div className="w-1.5 h-1.5 bg-[#004fa3]/40 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                        <div className="w-1.5 h-1.5 bg-[#004fa3]/40 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input Area */}
              <div className="p-4 md:p-6 bg-white border-t border-slate-100">
                <form onSubmit={handleSubmit} className="flex gap-2 bg-slate-50 p-1.5 rounded-xl border border-slate-100">
                  <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your inquiry..."
                    className="flex-grow px-3 py-2.5 bg-transparent border-none focus:ring-0 text-sm font-medium"
                  />
                  <button 
                    type="submit"
                    disabled={isLoading}
                    className="w-11 h-11 bg-[#004fa3] text-white rounded-lg flex items-center justify-center hover:bg-blue-800 transition-all disabled:opacity-50"
                  >
                    <svg className="w-5 h-5 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAdvisor;
