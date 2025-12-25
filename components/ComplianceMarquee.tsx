
import React from 'react';

const ComplianceMarquee: React.FC = () => (
  <div className="bg-slate-50 py-16 md:py-32 overflow-hidden reveal border-y border-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
      <h3 className="text-xs md:text-sm font-black text-slate-400 uppercase tracking-[0.4em] md:tracking-[0.6em] mb-4">Verified Supply Regions</h3>
      <div className="w-16 md:w-24 h-1 bg-[#004fa3] mx-auto rounded-full opacity-20"></div>
    </div>
    <div className="marquee-container flex whitespace-nowrap">
      <div className="animate-marquee flex items-center">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center">
            {['Singapore', 'United Arab Emirates', 'Germany', 'United Kingdom', 'Canada', 'Australia', 'Japan', 'USA', 'Malaysia', 'Brazil'].map((region) => (
              <div key={region} className="flex items-center gap-4 md:gap-8 mx-8 md:mx-16 group transition-all duration-300">
                <span className="text-3xl md:text-7xl font-black text-slate-200 uppercase tracking-tighter group-hover:text-[#004fa3] group-hover:scale-105 transition-all cursor-default select-none font-header">
                  {region}
                </span>
                <span className="text-[#f58220] font-bold text-xl md:text-3xl">•</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ComplianceMarquee;
