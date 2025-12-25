
import React, { useState, useEffect } from 'react';

const SLIDES = [
  {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80',
    title: 'Precision Manufacturing',
    subtitle: 'ISO 13485 Certified'
  },
  {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80',
    title: 'Advanced Protection',
    subtitle: 'Nitrile Technology'
  },
  {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80',
    title: 'Clinical Reliability',
    subtitle: 'Global Supply'
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden pt-12 pb-24 md:pt-16 md:pb-28 hex-bg medical-gradient min-h-[85vh] md:min-h-[70vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-20 w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-20 items-center">
          
          <div className="w-full text-center lg:text-left lg:col-span-6 relative z-30 mb-12 lg:mb-0">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-100/80 backdrop-blur-md text-[#004fa3] text-xs font-black uppercase tracking-[0.15em] mb-8 shadow-sm border border-blue-200">
              <span className="flex h-3 w-3 rounded-full bg-[#f58220] animate-pulse"></span>
              Live Batch Verification Active
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-8xl font-black text-slate-900 leading-[0.9] mb-6 tracking-tighter font-header uppercase">
              GLOBAL <span className="text-[#004fa3]">BARRIER</span><br/>
              SOLUTIONS.
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium mb-10 tracking-wide">
              Premier manufacturer of medical examination gloves and hospital disposables, serving the world's healthcare networks.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <a href="#products" className="inline-flex items-center justify-center px-10 py-4 md:py-5 bg-[#004fa3] text-white text-base md:text-lg font-black rounded-2xl shadow-2xl hover:bg-blue-800 transition-all uppercase tracking-[0.2em] active:scale-95">
                Explore Catalog
              </a>
              <a href="#contact" className="inline-flex items-center justify-center px-10 py-4 md:py-5 border-2 border-slate-200 text-base md:text-lg font-black rounded-2xl text-slate-700 bg-white hover:border-[#004fa3] transition-all uppercase tracking-[0.2em] active:scale-95">
                B2B Inquiries
              </a>
            </div>
          </div>
          
          <div className="w-full lg:col-span-6 relative">
            <div className="aspect-square md:aspect-video w-full bg-white rounded-[3rem] md:rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] overflow-hidden border-[8px] md:border-[12px] border-white/50 backdrop-blur-xl relative">
              {SLIDES.map((slide, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-all duration-[1500ms] ease-in-out ${
                    index === currentSlide ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-110 z-0'
                  }`}
                >
                  <img 
                    src={`${slide.url}&auto=format&fit=crop&w=1200`} 
                    alt={slide.title} 
                    className={`w-full h-full object-cover ${index === currentSlide ? 'animate-ken-burns' : ''}`} 
                  />
                  <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 glass p-6 md:p-8 rounded-3xl text-[#004fa3] shadow-2xl border border-white/40">
                    <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-[#f58220] mb-2">{slide.subtitle}</p>
                    <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter leading-tight font-header">{slide.title}</h3>
                  </div>
                </div>
              ))}
              
              <div className="absolute bottom-8 md:bottom-10 right-8 md:right-10 z-20 flex gap-2 md:gap-3">
                {SLIDES.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1.5 md:h-2 transition-all duration-500 rounded-full ${
                      index === currentSlide ? 'w-8 md:w-12 bg-[#004fa3]' : 'w-1.5 md:w-2 bg-[#004fa3]/20'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes ken-burns {
          0% { transform: scale(1.05); }
          100% { transform: scale(1.15); }
        }
        .animate-ken-burns {
          animation: ken-burns 15s ease-out forwards;
        }
      `}} />
    </div>
  );
};

export default Hero;
