
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#004fa3] text-white pt-24 pb-28 md:pb-12 overflow-hidden relative scroll-mt-24">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-800 skew-x-12 transform translate-x-1/2 opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-4">
             <div className="flex flex-col mb-8">
              <span className="text-4xl font-black text-white tracking-tighter leading-none">DERMEDA</span>
              <span className="text-[12px] font-bold text-[#f58220] mt-2 tracking-[0.2em] uppercase">Medical Solutions</span>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed max-w-sm">
              Trusted global provider of high-grade medical examination gloves and hospital disposables. Our products are engineered for precision and engineered for safety.
            </p>
            <div className="mt-8 flex gap-4">
               <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-2.5 rounded-xl flex items-center justify-center gap-2">
                 <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/></svg>
                 <span className="text-[10px] font-black tracking-widest uppercase">ISO Certified</span>
               </div>
               <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-2.5 rounded-xl flex items-center justify-center px-4">
                 <span className="text-xl font-black tracking-widest">CE</span>
               </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <h4 className="text-lg font-black mb-8 uppercase tracking-widest text-[#f58220]">Gloves</h4>
            <ul className="space-y-4 text-blue-100 text-sm font-medium">
              <li><a href="#products" className="hover:text-white transition-colors">Latex Exam</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Nitrile Grade</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Vinyl Solutions</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Elbow Range</a></li>
            </ul>
          </div>
          
          <div className="lg:col-span-3">
            <h4 className="text-lg font-black mb-8 uppercase tracking-widest text-[#f58220]">Disposables</h4>
            <ul className="space-y-4 text-blue-100 text-sm font-medium">
              <li><a href="#products" className="hover:text-white transition-colors">Drape Sheets</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Infusion Sets</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Surgical Gowns</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Respirometers</a></li>
            </ul>
          </div>
          
          <div className="lg:col-span-3">
            <h4 className="text-lg font-black mb-8 uppercase tracking-widest text-[#f58220]">Global Office</h4>
            <ul className="space-y-6 text-blue-100 text-sm font-medium">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                Contact us for regional distribution offices worldwide.
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                info@dermeda.medical
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/10 text-center">
          <p className="text-blue-300 text-[10px] font-bold uppercase tracking-[0.3em]">
            © 2024 DERMEDA MEDICAL RANGE. ISO 9001:2015 & ISO 13485:2016 CERTIFIED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
