
import React, { useState, useEffect } from 'react';

const SLIDES = [
  {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80',
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
    url: 'https://images.unsplash.com/photo-1619191163420-4a7c0f99b92e?q=80',
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
    <div className="relative overflow-hidden pt-8 pb-12 md:pt-16 md:pb-28 hex-bg medical-gradient min-h-[60vh] md:min-h-[70vh] flex items-center w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-20 w-full overflow-hidden">
        <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-20 items-center">
          
          <div className="w-full text-center lg:text-left lg:col-span-6 relative z-30 mb-8 lg:mb-0">
            <div className="inline-flex items-center gap-2 md:gap-3 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-blue-100/80 backdrop-blur-md text-[#004fa3] text-[9px] md:text-xs font-black uppercase tracking-[0.1em] md:tracking-[0.15em] mb-4 md:mb-8 shadow-sm border border-blue-200">
              <span className="flex h-2 w-2 md:h-3 md:w-3 rounded-full bg-[#f58220] animate-pulse"></span>
              Live Batch Verification Active
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-6xl xl:text-8xl font-black text-slate-900 leading-[1] md:leading-[0.9] mb-4 md:mb-6 tracking-tighter font-header uppercase">
              GLOBAL <span className="text-[#004fa3]">BARRIER</span><br className="hidden md:block"/>
              SOLUTIONS.
            </h1>
            
            <p className="text-sm sm:text-lg md:text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium mb-8 md:mb-10 tracking-wide px-1 md:px-0">
              Premier manufacturer of medical examination gloves and hospital disposables, serving the world's healthcare networks.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-5 justify-center lg:justify-start">
              <a href="#products" className="inline-flex items-center justify-center px-6 py-3 md:px-10 md:py-5 bg-[#004fa3] text-white text-[12px] md:text-lg font-black rounded-xl md:rounded-2xl shadow-2xl hover:bg-blue-800 transition-all uppercase tracking-[0.15em] md:tracking-[0.2em] active:scale-95">
                Explore Catalog
              </a>
              <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 md:px-10 md:py-5 border-2 border-slate-200 text-[12px] md:text-lg font-black rounded-xl md:rounded-2xl text-slate-700 bg-white hover:border-[#004fa3] transition-all uppercase tracking-[0.15em] md:tracking-[0.2em] active:scale-95">
                B2B Inquiries
              </a>
            </div>
          </div>
          
          <div className="w-full lg:col-span-6 relative px-2 md:px-0">
            <div className="aspect-[4/3] sm:aspect-square md:aspect-video w-full bg-white rounded-[1.5rem] sm:rounded-[2.5rem] md:rounded-[4rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] md:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] overflow-hidden border-[4px] md:border-[12px] border-white/50 backdrop-blur-xl relative">
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
                  <div className="absolute bottom-3 left-3 right-3 md:bottom-8 md:left-8 md:right-8 glass p-4 md:p-8 rounded-xl md:rounded-3xl text-[#004fa3] shadow-2xl border border-white/40">
                    <p className="text-[7px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#f58220] mb-0.5 md:mb-2">{slide.subtitle}</p>
                    <h3 className="text-[14px] md:text-2xl font-black uppercase tracking-tighter leading-tight font-header">{slide.title}</h3>
                  </div>
                </div>
              ))}
              
              <div className="absolute bottom-4 md:bottom-10 right-4 md:right-10 z-20 flex gap-1 md:gap-3">
                {SLIDES.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1 md:h-2 transition-all duration-500 rounded-full ${
                      index === currentSlide ? 'w-4 md:w-12 bg-[#004fa3]' : 'w-1 md:w-2 bg-[#004fa3]/20'
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
