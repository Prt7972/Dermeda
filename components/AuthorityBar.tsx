
import React from 'react';

const AuthorityBar: React.FC = React.memo(() => (
  <div className="bg-white py-12 md:py-24 border-y border-slate-100 reveal relative overflow-hidden">
     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/20 to-transparent pointer-events-none"></div>
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 items-center text-center">
          <div className="p-2">
             <p className="text-3xl md:text-6xl font-black text-[#004fa3] mb-2 font-header">50+</p>
             <p className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-[0.2em] md:tracking-[0.4em]">Countries Served</p>
          </div>
          <div className="p-2">
             <p className="text-3xl md:text-6xl font-black text-[#004fa3] mb-2 font-header">1.2B</p>
             <p className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-[0.2em] md:tracking-[0.4em]">Units Annually</p>
          </div>
          <div className="p-2">
             <p className="text-3xl md:text-6xl font-black text-[#004fa3] mb-2 font-header">100%</p>
             <p className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-[0.2em] md:tracking-[0.4em]">Inspected</p>
          </div>
          <div className="p-2">
             <p className="text-3xl md:text-6xl font-black text-[#004fa3] mb-2 font-header">AQL 1.5</p>
             <p className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-[0.2em] md:tracking-[0.4em]">Medical Grade</p>
          </div>
        </div>
     </div>
  </div>
));

export default AuthorityBar;
