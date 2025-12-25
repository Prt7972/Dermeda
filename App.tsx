
import React, { Suspense, lazy } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import MobileBottomNav from './components/MobileBottomNav';

// Lazy load heavy sections
const ProductGrid = lazy(() => import('./components/ProductGrid'));
const AIAdvisor = lazy(() => import('./components/AIAdvisor'));

const TopTicker = () => (
  <div className="bg-[#004fa3] overflow-hidden whitespace-nowrap py-1.5 md:py-2 border-b border-white/10 marquee-container z-[60] relative">
    <div className="animate-marquee-fast flex items-center">
      {[...Array(2)].map((_, i) => (
        <div key={i} className="flex items-center">
          <span className="text-[9px] md:text-[10px] font-black text-white uppercase tracking-[0.2em] px-6 md:px-8 flex items-center gap-2 md:gap-3">
            <span className="w-1 h-1 md:w-1.5 md:h-1.5 bg-orange-500 rounded-full"></span>
            FDA 510(k) Cleared
          </span>
          <span className="text-[9px] md:text-[10px] font-black text-white uppercase tracking-[0.2em] px-6 md:px-8 flex items-center gap-2 md:gap-3">
            <span className="w-1 h-1 md:w-1.5 md:h-1.5 bg-orange-500 rounded-full"></span>
            ISO 13485:2016 Certified
          </span>
          <span className="text-[9px] md:text-[10px] font-black text-white uppercase tracking-[0.2em] px-6 md:px-8 flex items-center gap-2 md:gap-3">
            <span className="w-1 h-1 md:w-1.5 md:h-1.5 bg-orange-500 rounded-full"></span>
            ASTM D6319 Compliance
          </span>
          <span className="text-[9px] md:text-[10px] font-black text-white uppercase tracking-[0.2em] px-6 md:px-8 flex items-center gap-2 md:gap-3">
            <span className="w-1 h-1 md:w-1.5 md:h-1.5 bg-orange-500 rounded-full"></span>
            EN 455 Parts 1-4
          </span>
          <span className="text-[9px] md:text-[10px] font-black text-white uppercase tracking-[0.2em] px-6 md:px-8 flex items-center gap-2 md:gap-3">
            <span className="w-1 h-1 md:w-1.5 md:h-1.5 bg-orange-500 rounded-full"></span>
            CE 2777 Notified Body
          </span>
        </div>
      ))}
    </div>
  </div>
);

const AuthorityBar = React.memo(() => (
  <div className="bg-white py-8 md:py-16 border-y border-slate-100 reveal relative overflow-hidden">
     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/20 to-transparent pointer-events-none"></div>
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 items-center text-center">
          <div className="p-2">
             <p className="text-2xl md:text-5xl font-black text-[#004fa3] mb-1 md:mb-2 font-header">50+</p>
             <p className="text-[7px] md:text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] md:tracking-[0.3em]">Countries Served</p>
          </div>
          <div className="p-2">
             <p className="text-2xl md:text-5xl font-black text-[#004fa3] mb-1 md:mb-2 font-header">1.2B</p>
             <p className="text-[7px] md:text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] md:tracking-[0.3em]">Units Annually</p>
          </div>
          <div className="p-2">
             <p className="text-2xl md:text-5xl font-black text-[#004fa3] mb-1 md:mb-2 font-header">100%</p>
             <p className="text-[7px] md:text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] md:tracking-[0.3em]">Inspected</p>
          </div>
          <div className="p-2">
             <p className="text-2xl md:text-5xl font-black text-[#004fa3] mb-1 md:mb-2 font-header">AQL 1.5</p>
             <p className="text-[7px] md:text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] md:tracking-[0.3em]">Medical Grade</p>
          </div>
        </div>
     </div>
  </div>
));

const ComplianceMarquee = () => (
  <div className="bg-slate-50 py-12 md:py-24 overflow-hidden reveal border-y border-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-12 text-center">
      <h3 className="text-[9px] md:text-xs font-black text-slate-400 uppercase tracking-[0.4em] md:tracking-[0.5em] mb-4">Verified Supply Regions</h3>
      <div className="w-12 md:w-20 h-0.5 md:h-1 bg-[#004fa3] mx-auto rounded-full opacity-20"></div>
    </div>
    <div className="marquee-container flex whitespace-nowrap">
      <div className="animate-marquee flex items-center">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center">
            {['Singapore', 'United Arab Emirates', 'Germany', 'United Kingdom', 'Canada', 'Australia', 'Japan', 'USA', 'Malaysia', 'Brazil'].map((region) => (
              <div key={region} className="flex items-center gap-3 md:gap-4 mx-6 md:mx-12 group transition-all duration-300">
                <span className="text-2xl md:text-6xl font-black text-slate-200 uppercase tracking-tighter group-hover:text-[#004fa3] group-hover:scale-105 transition-all cursor-default select-none font-header">
                  {region}
                </span>
                <span className="text-[#f58220] font-bold text-base md:text-xl">•</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ProductSkeleton = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-pulse min-h-[600px]">
    <div className="h-12 md:h-20 bg-slate-100 rounded-2xl md:rounded-3xl w-3/4 md:w-1/2 mx-auto mb-10 md:mb-12"></div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="bg-white rounded-[2rem] border border-slate-100 p-6 md:p-8 space-y-4">
          <div className="h-48 md:h-60 bg-slate-50 rounded-2xl"></div>
          <div className="h-5 bg-slate-50 rounded w-3/4"></div>
          <div className="h-3 bg-slate-50 rounded w-1/2"></div>
          <div className="flex gap-2">
            <div className="h-10 md:h-12 bg-slate-50 rounded-xl flex-grow"></div>
            <div className="h-10 md:h-12 bg-slate-50 rounded-xl w-10 md:w-12"></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const AdvisorSkeleton = () => (
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 animate-pulse min-h-[500px] md:min-h-[650px]">
    <div className="grid lg:grid-cols-5 gap-10 md:gap-16 items-center">
      <div className="lg:col-span-2 space-y-4 text-center lg:text-left">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-slate-100 rounded-2xl md:rounded-3xl mx-auto lg:mx-0"></div>
        <div className="h-8 md:h-10 bg-slate-100 rounded w-full"></div>
        <div className="h-8 md:h-10 bg-slate-100 rounded w-2/3 mx-auto lg:mx-0"></div>
      </div>
      <div className="lg:col-span-3">
        <div className="h-[400px] md:h-[500px] bg-white rounded-[2rem] md:rounded-[3rem] border border-slate-100"></div>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-[#004fa3] selection:text-white flex flex-col relative font-glory">
      <TopTicker />
      <Header />
      <main className="flex-grow pb-32 md:pb-0"> {/* Sufficient padding for fixed bottom nav */}
        <Hero />
        
        <AuthorityBar />

        <div id="products" className="scroll-mt-24">
          <Suspense fallback={<ProductSkeleton />}>
            <ProductGrid />
          </Suspense>
        </div>

        <ComplianceMarquee />

        <section className="py-16 md:py-40 bg-slate-950 text-white relative overflow-hidden reveal">
          <div className="absolute inset-0 hex-bg opacity-10 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 md:gap-32 items-center text-center lg:text-left">
              <div>
                <span className="text-[#f58220] font-black uppercase tracking-[0.4em] text-[10px] md:text-xs mb-4 md:mb-6 block">Supply Integrity</span>
                <h2 className="text-3xl md:text-7xl font-black mb-6 md:mb-8 uppercase tracking-tighter leading-tight md:leading-[0.9] font-header">Reliable <br/><span className="text-blue-500">Global Logistics</span></h2>
                <p className="text-slate-400 text-sm md:text-xl mb-8 md:mb-12 leading-relaxed font-medium">
                  We bridge the gap between manufacturing precision and clinical urgency. Our priority freight partnerships ensure your medical network is always prepared.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                  <div className="flex gap-3 md:gap-4 items-center p-6 md:p-8 bg-white/5 rounded-[2rem] md:rounded-[2.5rem] border border-white/10 backdrop-blur-xl flex-1 text-left">
                    <div className="w-10 h-10 md:w-14 md:h-14 bg-[#004fa3] rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/20">
                        <svg className="w-5 h-5 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    </div>
                    <div>
                        <h4 className="text-xs md:text-sm font-black uppercase tracking-[0.2em]">Just-In-Time</h4>
                        <p className="text-[9px] md:text-[10px] text-slate-500 font-bold uppercase tracking-wider">Priority Routing</p>
                    </div>
                  </div>
                  <div className="flex gap-3 md:gap-4 items-center p-6 md:p-8 bg-white/5 rounded-[2rem] md:rounded-[2.5rem] border border-white/10 backdrop-blur-xl flex-1 text-left">
                    <div className="w-10 h-10 md:w-14 md:h-14 bg-[#f58220] rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/20">
                        <svg className="w-5 h-5 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                    </div>
                    <div>
                        <h4 className="text-xs md:text-sm font-black uppercase tracking-[0.2em]">Batch Shield</h4>
                        <p className="text-[9px] md:text-[10px] text-slate-500 font-bold uppercase tracking-wider">Secure Chain</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative w-full reveal mt-8 lg:mt-0 px-4 md:px-0">
                <div className="absolute -inset-6 md:-inset-10 bg-blue-600 opacity-20 blur-[60px] md:blur-[120px] rounded-full animate-pulse"></div>
                <div className="relative bg-white/5 p-3 md:p-6 rounded-[2.5rem] md:rounded-[5.5rem] border border-white/10 backdrop-blur-sm shadow-2xl overflow-hidden group">
                   <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" 
                    alt="B2B Manufacturing Facility" 
                    loading="lazy"
                    className="rounded-[2rem] md:rounded-[4.5rem] opacity-90 w-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-1000"
                   />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div id="advisor" className="scroll-mt-24">
          <Suspense fallback={<AdvisorSkeleton />}>
            <div className="reveal">
              <AIAdvisor />
            </div>
          </Suspense>
        </div>

        <section id="about" className="py-16 md:py-48 bg-white reveal scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-[#004fa3] font-black uppercase tracking-[0.4em] text-[10px] md:text-xs mb-4 md:mb-6 block">Become a Partner</span>
            <h2 className="text-3xl md:text-7xl font-black text-slate-900 mb-12 md:mb-32 uppercase tracking-tighter leading-tight font-header">DISTRIBUTION <span className="text-[#f58220]">NETWORK</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-16">
               <div className="p-8 md:p-16 rounded-[2.5rem] md:rounded-[3.5rem] bg-slate-50/50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 group">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 md:mb-8 group-hover:bg-[#004fa3] transition-colors shadow-sm">
                    <svg className="w-6 h-6 md:w-8 md:h-8 text-[#004fa3] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"/></svg>
                  </div>
                  <h4 className="text-lg md:text-xl font-black uppercase tracking-[0.1em] mb-3 md:mb-4 font-header">Marketing</h4>
                  <p className="text-xs md:text-sm text-slate-500 font-medium leading-relaxed">High-conversion technical assets and localized branding kits for specialized clinical markets.</p>
               </div>
               <div className="p-8 md:p-16 rounded-[2.5rem] md:rounded-[3.5rem] bg-slate-50/50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 group">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-6 md:mb-8 group-hover:bg-[#f58220] transition-colors shadow-sm">
                    <svg className="w-6 h-6 md:w-8 md:h-8 text-[#f58220] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  </div>
                  <h4 className="text-lg md:text-xl font-black uppercase tracking-[0.1em] mb-3 md:mb-4 font-header">Margins</h4>
                  <p className="text-xs md:text-sm text-slate-500 font-medium leading-relaxed">Aggressive B2B wholesale structures designed to empower regional distributors and logistics partners.</p>
               </div>
               <div className="p-8 md:p-16 rounded-[2.5rem] md:rounded-[3.5rem] bg-slate-50/50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 group">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 md:mb-8 group-hover:bg-[#004fa3] transition-colors shadow-sm">
                    <svg className="w-6 h-6 md:w-8 md:h-8 text-[#004fa3] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a2 2 0 00-1.96 1.414l-.503 1.508a10.003 10.003 0 01-6.747-6.747l1.508-.503a2 2 0 001.414-1.96l-.477-2.387a2 2 0 00-.547-1.022L7.05 4.05a2 2 0 00-2.828 0L2.222 6.056a2 2 0 00-.51 2.224c1.11 2.657 2.637 5.097 4.453 7.18 2.083 2.183 4.523 3.343 7.18 4.453a2 2 0 002.224-.51l2.006-2.006a2 2 0 000-2.828l-1.144-1.144z"/></svg>
                  </div>
                  <h4 className="text-lg md:text-xl font-black uppercase tracking-[0.1em] mb-3 md:mb-4 font-header">Training</h4>
                  <p className="text-xs md:text-sm text-slate-500 font-medium leading-relaxed">Direct access to clinical specialist advisors and technical specification workshops.</p>
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
