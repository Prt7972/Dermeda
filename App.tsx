
import React, { Suspense, lazy } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import MobileBottomNav from './components/MobileBottomNav';

// Lazy load heavy sections
const ProductGrid = lazy(() => import('./components/ProductGrid'));
const AIAdvisor = lazy(() => import('./components/AIAdvisor'));

const AuthorityBar = React.memo(() => (
  <div className="bg-white py-10 md:py-16 border-y border-slate-100 reveal">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center text-center">
          <div>
             <p className="text-3xl md:text-5xl font-black text-[#004fa3] mb-2 font-header">50+</p>
             <p className="text-[8px] md:text-[11px] font-black text-slate-400 uppercase tracking-[0.3em]">Countries Served</p>
          </div>
          <div>
             <p className="text-3xl md:text-5xl font-black text-[#004fa3] mb-2 font-header">1.2B</p>
             <p className="text-[8px] md:text-[11px] font-black text-slate-400 uppercase tracking-[0.3em]">Units Annually</p>
          </div>
          <div>
             <p className="text-3xl md:text-5xl font-black text-[#004fa3] mb-2 font-header">100%</p>
             <p className="text-[8px] md:text-[11px] font-black text-slate-400 uppercase tracking-[0.3em]">Inspected</p>
          </div>
          <div>
             <p className="text-3xl md:text-5xl font-black text-[#004fa3] mb-2 font-header">AQL 1.5</p>
             <p className="text-[8px] md:text-[11px] font-black text-slate-400 uppercase tracking-[0.3em]">Medical Grade</p>
          </div>
        </div>
     </div>
  </div>
));

const LoadingFallback = () => (
  <div className="py-24 text-center">
    <div className="inline-block w-10 h-10 border-4 border-[#004fa3]/20 border-t-[#004fa3] rounded-full animate-spin"></div>
    <p className="mt-6 text-[11px] font-black text-slate-400 uppercase tracking-[0.3em]">Accessing Clinical Database...</p>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-[#004fa3] selection:text-white flex flex-col relative">
      <Header />
      <main className="flex-grow pb-32 lg:pb-0">
        <Hero />
        
        <AuthorityBar />

        <Suspense fallback={<LoadingFallback />}>
          <ProductGrid />
        </Suspense>

        <section className="py-20 md:py-40 bg-slate-900 text-white relative overflow-hidden reveal">
          <div className="absolute inset-0 hex-bg opacity-5 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 md:gap-32 items-center">
              <div>
                <span className="text-[#f58220] font-black uppercase tracking-[0.4em] text-[10px] md:text-xs mb-6 block">Supply Chain Integrity</span>
                <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter leading-[0.9] font-header">Reliable <br/><span className="text-blue-500">Global Logistics</span></h2>
                <p className="text-slate-400 text-base md:text-xl mb-12 leading-relaxed font-medium">
                  We bridge the gap between manufacturing precision and clinical urgency. Our priority freight partnerships ensure your medical network is always prepared.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex gap-4 items-center p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm flex-1">
                    <div className="w-14 h-14 bg-[#004fa3] rounded-2xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    </div>
                    <div>
                        <h4 className="text-sm font-black uppercase tracking-[0.2em]">Just-In-Time</h4>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Priority Regional Routing</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm flex-1">
                    <div className="w-14 h-14 bg-[#f58220] rounded-2xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                    </div>
                    <div>
                        <h4 className="text-sm font-black uppercase tracking-[0.2em]">Batch Shield</h4>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">End-to-End Compliance</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative w-full reveal">
                <div className="absolute -inset-10 bg-blue-600 opacity-10 blur-[100px] rounded-full"></div>
                <div className="relative bg-white/5 p-4 md:p-6 rounded-[3rem] md:rounded-[5rem] border border-white/10 backdrop-blur-sm shadow-2xl overflow-hidden group">
                   <img 
                    src="https://images.unsplash.com/photo-1579154235884-332023080e81?auto=format&fit=crop&q=80&w=1200" 
                    alt="B2B Manufacturing Facility" 
                    loading="lazy"
                    className="rounded-[2.2rem] md:rounded-[4rem] opacity-90 w-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-1000"
                   />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Suspense fallback={<LoadingFallback />}>
          <div className="reveal">
            <AIAdvisor />
          </div>
        </Suspense>

        <section id="about" className="py-20 md:py-40 bg-white reveal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-[#004fa3] font-black uppercase tracking-[0.4em] text-[10px] md:text-xs mb-6 block">Become a Partner</span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-16 md:mb-24 uppercase tracking-tighter leading-tight font-header">DISTRIBUTION <span className="text-[#f58220]">NETWORK</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
               <div className="p-10 md:p-14 rounded-[3rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 group">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-[#004fa3] transition-colors">
                    <svg className="w-8 h-8 text-[#004fa3] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"/></svg>
                  </div>
                  <h4 className="text-xl font-black uppercase tracking-[0.1em] mb-4 font-header">Marketing</h4>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">High-conversion technical assets and localized branding kits for specialized clinical markets.</p>
               </div>
               <div className="p-10 md:p-14 rounded-[3rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 group">
                  <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-[#f58220] transition-colors">
                    <svg className="w-8 h-8 text-[#f58220] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  </div>
                  <h4 className="text-xl font-black uppercase tracking-[0.1em] mb-4 font-header">Margins</h4>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">Aggressive B2B wholesale structures designed to empower regional distributors and logistics partners.</p>
               </div>
               <div className="p-10 md:p-14 rounded-[3rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 group">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-[#004fa3] transition-colors">
                    <svg className="w-8 h-8 text-[#004fa3] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a2 2 0 00-1.96 1.414l-.503 1.508a10.003 10.003 0 01-6.747-6.747l1.508-.503a2 2 0 001.414-1.96l-.477-2.387a2 2 0 00-.547-1.022L7.05 4.05a2 2 0 00-2.828 0L2.222 6.056a2 2 0 00-.51 2.224c1.11 2.657 2.637 5.097 4.453 7.18 2.083 2.183 4.523 3.343 7.18 4.453a2 2 0 002.224-.51l2.006-2.006a2 2 0 000-2.828l-1.144-1.144z"/></svg>
                  </div>
                  <h4 className="text-xl font-black uppercase tracking-[0.1em] mb-4 font-header">Training</h4>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">Direct access to clinical specialist advisors and technical specification workshops.</p>
               </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileBottomNav />
    </div>
  );
}

export default App;
