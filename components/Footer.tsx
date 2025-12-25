import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#004fa3] text-white pt-24 pb-28 md:pb-12 overflow-hidden relative border-t border-white/5">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-800 skew-x-12 transform translate-x-1/2 opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-4">
             <div className="flex flex-col mb-8">
              <span className="text-4xl font-black text-white tracking-tighter leading-none">DERMEDA</span>
              <span className="text-[12px] font-bold text-[#f58220] mt-2 tracking-[0.2em] uppercase">Surgical & Medical</span>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed max-w-sm">
              Trusted manufacturer of premium medical gloves and surgical disposables. Engineered for precision and safety in critical clinical environments.
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
            <h4 className="text-lg font-black mb-8 uppercase tracking-widest text-[#f58220]">Protection</h4>
            <ul className="space-y-4 text-blue-100 text-sm font-medium">
              <li><a href="#products" className="hover:text-white transition-colors">Surgical Latex</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Nitrile Grade</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Cleanroom Vinyl</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Elbow Extended</a></li>
            </ul>
          </div>
          
          <div className="lg:col-span-3">
            <h4 className="text-lg font-black mb-8 uppercase tracking-widest text-[#f58220]">Disposables</h4>
            <ul className="space-y-4 text-blue-100 text-sm font-medium">
              <li><a href="#products" className="hover:text-white transition-colors">Sterile Drapes</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Infusion Gear</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Surgical Gowns</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Respiratory Kits</a></li>
            </ul>
          </div>
          
          <div className="lg:col-span-3">
            <h4 className="text-lg font-black mb-8 uppercase tracking-widest text-[#f58220]">Quick Access</h4>
            <ul className="space-y-4 text-blue-100 text-sm font-medium">
              <li><a href="#advisor" className="hover:text-white transition-colors">AI Product Advisor</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Quality Assurance</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">B2B Partnership</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Certificates</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/10 text-center">
          <p className="text-blue-300 text-[10px] font-bold uppercase tracking-[0.3em]">
            © 2024 DERMEDA MEDICAL RANGE. ISO 13485:2016 SURGICAL COMPLIANCE.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;