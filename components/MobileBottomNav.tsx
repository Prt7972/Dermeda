
import React from 'react';

const MobileBottomNav: React.FC = () => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[100] bg-white/95 backdrop-blur-xl border-t border-slate-200 pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
      <div className="flex justify-around items-center h-16 md:h-20 px-2">
        <a href="#" className="flex flex-col items-center justify-center flex-1 py-1 text-[#004fa3] transition-all active:scale-90">
          <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
          <span className="text-[10px] font-bold uppercase tracking-wider">Home</span>
        </a>
        
        <a href="#products" className="flex flex-col items-center justify-center flex-1 py-1 text-slate-400 hover:text-[#004fa3] transition-all active:scale-90">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
          <span className="text-[10px] font-bold uppercase tracking-wider">Catalog</span>
        </a>

        <a href="#advisor" className="flex flex-col items-center justify-center flex-1 py-1 text-slate-400 hover:text-[#004fa3] transition-all active:scale-90">
          <div className="relative">
            <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider">Advisor</span>
        </a>

        <a href="#contact" className="flex flex-col items-center justify-center flex-1 py-1 text-slate-400 hover:text-[#f58220] transition-all active:scale-90">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span className="text-[10px] font-bold uppercase tracking-wider">Quote</span>
        </a>
      </div>
    </div>
  );
};

export default MobileBottomNav;
