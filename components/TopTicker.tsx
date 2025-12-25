
import React from 'react';

const TopTicker: React.FC = () => (
  <div className="bg-[#004fa3] overflow-hidden whitespace-nowrap py-2 border-b border-white/10 marquee-container z-[60] relative">
    <div className="animate-marquee-fast flex items-center">
      {[...Array(2)].map((_, i) => (
        <div key={i} className="flex items-center">
          <span className="text-[10px] md:text-xs font-black text-white uppercase tracking-[0.2em] px-8 md:px-12 flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
            FDA 510(k) Cleared
          </span>
          <span className="text-[10px] md:text-xs font-black text-white uppercase tracking-[0.2em] px-8 md:px-12 flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
            ISO 13485:2016 Certified
          </span>
          <span className="text-[10px] md:text-xs font-black text-white uppercase tracking-[0.2em] px-8 md:px-12 flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
            ASTM D6319 Compliance
          </span>
          <span className="text-[10px] md:text-xs font-black text-white uppercase tracking-[0.2em] px-8 md:px-12 flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
            CE 2777 Notified Body
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default TopTicker;
