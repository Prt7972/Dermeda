
import React, { useState, useEffect } from 'react';

const SLIDES = [
  {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200',
    title: 'Precision Manufacturing',
    subtitle: 'ISO 13485 Certified'
  },
  {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200',
    title: 'Advanced Protection',
    subtitle: 'Nitrile Technology'
  },
  {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200',
    title: 'Clinical Reliability',
    subtitle: 'Global Supply'
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-28 hex-bg medical-gradient min-h-[85vh] md:min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          {/* Content Wrapper */}
          <div className="w-full text-center lg:text-left lg:col-span-6 relative z-30 mb-12 lg:mb-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-blue-100/80 backdrop-blur-md text-[#004fa3] text-[10px] md:text-xs font-extrabold uppercase tracking-[0.1em] md:tracking-[0.15em] mb-6 md:mb-10 shadow-sm border border-blue-200">
              <span className="flex h-2 w-2 md:h-2.5 md:w-2.5 rounded-full bg-[#f58220] animate-pulse"></span>
              Live Batch Verification Active
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-6xl xl:text-8xl font-black text-slate-900 leading-[1] md:leading-[0.95] mb-6 tracking-tight font-header uppercase">
              GLOBAL <span className="text-[#004fa3]">BARRIER</span><br/>
              SOLUTIONS.
            </h1>
            
            <p className="text-base md:text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium mb-10 tracking-wide">
              Premier manufacturer of medical examination gloves and hospital disposables, serving the world's healthcare networks.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#products" className="inline-flex items-center justify-center px-8 py-4 md:px-10 md:py-5 bg-[#004fa3] text-white text-base md:text-lg font-black rounded-2xl shadow-xl hover:bg-blue-800 transition-all uppercase tracking-[0.2em]">
                Explore Catalog
              </a>
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 md:px-10 md:py-5 border-2 border-slate-200 text-base md:text-lg font-black rounded-2xl text-slate-700 bg-white hover:border-[#004fa3] transition-all uppercase tracking-[0.2em]">
                B2B Inquiries
              </a>
            </div>
          </div>
          
          {/* Right Content: Advanced Slider */}
          <div className="w-full lg:col-span-6 relative h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px]">
            <div className="absolute inset-0 bg-white rounded-[2rem] md:rounded-[4rem] shadow-2xl overflow-hidden border-[6px] md:border-[12px] border-white/50 backdrop-blur-xl">
              {SLIDES.map((slide, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
                    index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <img 
                    src={slide.url} 
                    alt={slide.title} 
                    className={`w-full h-full object-cover ${index === currentSlide ? 'animate-ken-burns' : ''}`} 
                  />
                  {/* Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 md:bottom-10 md:left-10 md:right-10 glass p-4 md:p-8 rounded-2xl md:rounded-3xl text-[#004fa3] transform transition-transform duration-700 delay-300 shadow-xl border border-white/40">
                    <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-[#f58220] mb-1">{slide.subtitle}</p>
                    <h3 className="text-lg md:text-2xl font-black uppercase tracking-tighter">{slide.title}</h3>
                  </div>
                </div>
              ))}
              
              {/* Slider Controls */}
              <div className="absolute bottom-6 md:bottom-10 right-6 md:right-10 z-20 flex gap-2 md:gap-3">
                {SLIDES.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1.5 md:h-2 transition-all duration-300 rounded-full ${
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
          100% { transform: scale(1.2); }
        }
        .animate-ken-burns {
          animation: ken-burns 12s ease-out forwards;
        }
      `}} />
    </div>
  );
};

export default Hero;
