
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <a href="#" className="flex items-center gap-3 group">
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-black text-[#004fa3] tracking-tighter leading-none group-hover:opacity-80 transition-opacity">DERMEDA</span>
              <span className="text-[8px] md:text-[10px] font-bold text-white bg-[#004fa3] px-1.5 py-0.5 mt-1 tracking-widest uppercase text-center rounded-sm">Medical Solutions</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-8 text-sm font-bold text-slate-600">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="hover:text-[#004fa3] transition-colors py-2 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#004fa3] transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-4">
            <a 
              href="#contact" 
              className="hidden sm:block bg-[#f58220] text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-[#e67a1d] transition-all shadow-md active:scale-95"
            >
              Enquire Now
            </a>
            
            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-[#004fa3] transition-colors"
              aria-label="Toggle Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div 
        className={`lg:hidden fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} 
        onClick={() => setIsMenuOpen(false)}
      >
        <div 
          className={`absolute right-0 top-0 h-screen w-4/5 max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={e => e.stopPropagation()}
        >
          <div className="p-8 space-y-8">
            <div className="flex justify-between items-center mb-12">
              <span className="text-xl font-black text-[#004fa3]">MENU</span>
              <button onClick={() => setIsMenuOpen(false)} className="p-2 text-slate-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
            <nav className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)} 
                  className="text-2xl font-black text-slate-900 hover:text-[#004fa3] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="pt-8 border-t border-slate-100">
               <a 
                 href="#contact" 
                 onClick={() => setIsMenuOpen(false)}
                 className="block w-full text-center bg-[#f58220] text-white py-4 rounded-2xl font-black uppercase tracking-widest shadow-xl shadow-orange-500/20 active:scale-95 transition-all"
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
