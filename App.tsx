
import React, { Suspense, lazy } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import MobileBottomNav from './components/MobileBottomNav';

// Lazy load heavy sections
const ProductGrid = lazy(() => import('./components/ProductGrid'));
const AIAdvisor = lazy(() => import('./components/AIAdvisor'));

const TopTicker = () => (
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

const AuthorityBar = React.memo(() => (
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

const ComplianceMarquee = () => (
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

const ContactSection = () => (
  <section id="contact" className="py-24 md:py-48 bg-white scroll-mt-20 reveal">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-20 md:gap-32 items-start">
        <div className="space-y-12 md:sticky md:top-32">
          <div>
            <span className="text-[#004fa3] font-black uppercase tracking-[0.4em] text-xs mb-4 block">Direct Support</span>
            <h2 className="text-4xl md:text-7xl font-black text-slate-900 mb-8 uppercase tracking-tighter leading-tight font-header">GET IN <span className="text-[#f58220]">TOUCH</span></h2>
            <p className="text-slate-500 font-medium text-lg md:text-xl leading-relaxed">
              Our clinical advisors and procurement specialists are available for global medical network support.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            <div className="p-8 md:p-10 rounded-3xl bg-slate-50 border border-slate-100">
              <h4 className="text-[10px] md:text-xs font-black uppercase tracking-widest text-[#004fa3] mb-4">Regional Sales</h4>
              <p className="text-sm md:text-base font-bold text-slate-800">procurement@dermeda.medical</p>
              <p className="text-xs text-slate-400 mt-2">Response time: &lt; 2 hours</p>
            </div>
            <div className="p-8 md:p-10 rounded-3xl bg-slate-50 border border-slate-100">
              <h4 className="text-[10px] md:text-xs font-black uppercase tracking-widest text-[#f58220] mb-4">Quality Control</h4>
              <p className="text-sm md:text-base font-bold text-slate-800">compliance@dermeda.medical</p>
              <p className="text-xs text-slate-400 mt-2">Batch verification active</p>
            </div>
          </div>

          <div className="p-10 md:p-14 rounded-[3rem] bg-[#004fa3] text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -mr-24 -mt-24 blur-3xl"></div>
            <h4 className="text-xl font-black uppercase tracking-widest mb-6 font-header">Main Office</h4>
            <p className="text-blue-100 text-lg leading-relaxed font-medium">
              Medical Range HQ, Level 18, <br/>
              The Professional Center, <br/>
              Dubai Medical City, UAE
            </p>
          </div>
        </div>

        <div className="bg-white p-8 md:p-16 rounded-[3.5rem] border border-slate-200 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.08)] relative">
          <div className="absolute -top-8 -right-8 w-24 h-24 bg-orange-500 rounded-[2rem] shadow-2xl flex items-center justify-center text-white transform rotate-12 hidden md:flex">
             <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v10a2 2 0 002 2z"/></svg>
          </div>
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-3">
                <label className="text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-400">Full Name</label>
                <input type="text" className="w-full px-6 py-4 md:py-5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-[#004fa3] outline-none transition-all text-sm md:text-base font-bold" placeholder="Dr. John Smith" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-400">Organization</label>
                <input type="text" className="w-full px-6 py-4 md:py-5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-[#004fa3] outline-none transition-all text-sm md:text-base font-bold" placeholder="City General Hospital" />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-400">Email Address</label>
              <input type="email" className="w-full px-6 py-4 md:py-5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-[#004fa3] outline-none transition-all text-sm md:text-base font-bold" placeholder="procurement@hospital.org" />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-400">Inquiry Details</label>
              <textarea rows={5} className="w-full px-6 py-4 md:py-5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-[#004fa3] outline-none transition-all text-sm md:text-base font-bold" placeholder="Interested in bulk Nitrile (DNG-M100) supply..."></textarea>
            </div>
            <button type="submit" className="w-full py-5 md:py-6 bg-[#004fa3] text-white rounded-2xl text-base font-black uppercase tracking-[0.2em] shadow-xl hover:bg-blue-800 transition-all active:scale-[0.98]">
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

const ProductSkeleton = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 animate-pulse">
    <div className="h-16 md:h-24 bg-slate-100 rounded-3xl w-2/3 mx-auto mb-16"></div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="bg-white rounded-[2.5rem] border border-slate-100 p-8 space-y-6">
          <div className="h-56 md:h-72 bg-slate-50 rounded-3xl"></div>
          <div className="h-6 bg-slate-50 rounded w-3/4"></div>
          <div className="h-4 bg-slate-50 rounded w-1/2"></div>
        </div>
      ))}
    </div>
  </div>
);

const AdvisorSkeleton = () => (
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 animate-pulse">
    <div className="grid lg:grid-cols-5 gap-16 items-center">
      <div className="lg:col-span-2 space-y-6">
        <div className="w-20 h-20 bg-slate-100 rounded-3xl"></div>
        <div className="h-12 bg-slate-100 rounded w-full"></div>
        <div className="h-4 bg-slate-100 rounded w-2/3"></div>
      </div>
      <div className="lg:col-span-3">
        <div className="h-[600px] bg-white rounded-[3rem] border border-slate-100"></div>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-[#004fa3] selection:text-white flex flex-col relative font-glory">
      <TopTicker />
      <Header />
      <main className="flex-grow pb-32 md:pb-0">
        <Hero />
        
        <AuthorityBar />

        <div id="products" className="scroll-mt-20">
          <Suspense fallback={<ProductSkeleton />}>
            <ProductGrid />
          </Suspense>
        </div>

        <ComplianceMarquee />

        <section id="about" className="py-24 md:py-48 bg-slate-950 text-white relative overflow-hidden reveal scroll-mt-20">
          <div className="absolute inset-0 hex-bg opacity-10 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-20 md:gap-40 items-center text-center lg:text-left">
              <div>
                <span className="text-[#f58220] font-black uppercase tracking-[0.4em] text-xs mb-6 block">Supply Integrity</span>
                <h2 className="text-4xl md:text-8xl font-black mb-10 uppercase tracking-tighter leading-none font-header">Reliable <br/><span className="text-blue-500">Global Logistics</span></h2>
                <p className="text-slate-400 text-lg md:text-2xl mb-12 md:mb-16 leading-relaxed font-medium">
                  We bridge the gap between manufacturing precision and clinical urgency. Our priority freight partnerships ensure your medical network is always prepared.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex gap-4 md:gap-6 items-center p-8 md:p-10 bg-white/5 rounded-[2.5rem] md:rounded-[3rem] border border-white/10 backdrop-blur-xl flex-1 text-left">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-[#004fa3] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl shadow-blue-500/20">
                        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    </div>
                    <div>
                        <h4 className="text-sm md:text-base font-black uppercase tracking-[0.2em]">Just-In-Time</h4>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1">Priority Routing</p>
                    </div>
                  </div>
                  <div className="flex gap-4 md:gap-6 items-center p-8 md:p-10 bg-white/5 rounded-[2.5rem] md:rounded-[3rem] border border-white/10 backdrop-blur-xl flex-1 text-left">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-[#f58220] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl shadow-orange-500/20">
                        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                    </div>
                    <div>
                        <h4 className="text-sm md:text-base font-black uppercase tracking-[0.2em]">Batch Shield</h4>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1">Secure Chain</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative w-full reveal mt-12 lg:mt-0">
                <div className="absolute -inset-10 md:-inset-20 bg-blue-600 opacity-20 blur-[100px] md:blur-[150px] rounded-full animate-pulse"></div>
                <div className="relative bg-white/5 p-4 md:p-8 rounded-[3rem] md:rounded-[6rem] border border-white/10 backdrop-blur-sm shadow-2xl overflow-hidden group">
                   <img 
                    src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1200" 
                    alt="B2B Manufacturing Facility" 
                    loading="lazy"
                    className="rounded-[2.5rem] md:rounded-[5rem] opacity-90 w-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-1000"
                   />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div id="advisor" className="scroll-mt-20">
          <Suspense fallback={<AdvisorSkeleton />}>
            <div className="reveal">
              <AIAdvisor />
            </div>
          </Suspense>
        </div>

        <ContactSection />
      </main>
      <Footer />
      <MobileBottomNav />
    </div>
  );
}

export default App;
