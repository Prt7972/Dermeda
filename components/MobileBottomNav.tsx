
import React from 'react';

const MobileBottomNav: React.FC = () => {
  return (
    <div className="lg:hidden fixed bottom-6 left-4 right-4 z-[100]">
      <div className="glass shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-[2rem] p-2 flex justify-between items-center border border-white/40">
        <a href="#" className="flex flex-col items-center justify-center w-1/4 py-2.5 text-[#004fa3] group">
          <svg className="w-5 h-5 mb-1 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span className="text-[9px] font-black uppercase tracking-[0.2em] font-glory">Home</span>
        </a>
        
        <a href="#products" className="flex flex-col items-center justify-center w-1/4 py-2.5 text-slate-500 group">
          <svg className="w-5 h-5 mb-1 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
          <span className="text-[9px] font-black uppercase tracking-[0.2em] font-glory">Catalog</span>
        </a>

        <a href="#advisor" className="flex flex-col items-center justify-center w-1/4 py-2.5 text-slate-500 group">
          <div className="relative">
            <svg className="w-5 h-5 mb-1 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
          </div>
          <span className="text-[9px] font-black uppercase tracking-[0.2em] font-glory">AI Bot</span>
        </a>

        <a href="mailto:info@dermeda.medical" className="flex flex-col items-center justify-center w-1/4 py-3 bg-[#f58220] rounded-[1.6rem] text-white shadow-lg active:scale-95 transition-transform">
          <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span className="text-[9px] font-black uppercase tracking-[0.2em] font-glory">Quote</span>
        </a>
      </div>
    </div>
  );
};

export default MobileBottomNav;
