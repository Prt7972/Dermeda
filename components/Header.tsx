
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Catalog', href: '#products' },
    { name: 'AI Advisor', href: '#advisor' },
    { name: 'Quality', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-20 md:h-24">
          <a href="#" className="flex items-center gap-4 group">
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-black text-[#004fa3] tracking-tighter leading-none group-hover:opacity-80 transition-opacity font-header">DERMEDA</span>
              <span className="text-[9px] md:text-[11px] font-black text-white bg-[#004fa3] px-2 py-1 mt-1.5 tracking-[0.2em] uppercase text-center rounded shadow-sm">Medical Solutions</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-12 text-sm font-black text-slate-600 uppercase tracking-widest">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="hover:text-[#004fa3] transition-all py-2 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#004fa3] transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 md:gap-6">
            <a 
              href="#contact" 
              className="hidden sm:block bg-[#f58220] text-white px-8 py-3.5 rounded-xl text-sm font-black uppercase tracking-widest hover:bg-[#e67a1d] transition-all shadow-xl shadow-orange-500/10 active:scale-95"
            >
              Enquire
            </a>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-3 text-slate-600 hover:text-[#004fa3] transition-colors rounded-xl bg-slate-50"
              aria-label="Toggle Menu"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div 
        className={`lg:hidden fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-sm transition-all duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        onClick={() => setIsMenuOpen(false)}
      >
        <div 
          className={`absolute right-0 top-0 h-screen w-[85%] max-w-sm bg-white shadow-[0_0_80px_rgba(0,0,0,0.2)] transition-transform duration-500 ease-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={e => e.stopPropagation()}
        >
          <div className="p-10 space-y-12 h-full flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <span className="text-xl font-black text-[#004fa3] uppercase tracking-widest">Navigation</span>
              <button onClick={() => setIsMenuOpen(false)} className="p-3 bg-slate-50 text-slate-400 rounded-xl">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
            <nav className="flex flex-col space-y-8 flex-grow">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)} 
                  className="text-3xl font-black text-slate-900 hover:text-[#004fa3] transition-all uppercase tracking-tighter font-header"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="pt-10 border-t border-slate-100">
               <a 
                 href="#contact" 
                 onClick={() => setIsMenuOpen(false)}
                 className="block w-full text-center bg-[#f58220] text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] shadow-2xl shadow-orange-500/20 active:scale-95 transition-all"
               >
                 Request Quote
               </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
