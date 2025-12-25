import React, { Suspense, lazy, useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import MobileBottomNav from './components/MobileBottomNav';
import TopTicker from './components/TopTicker';
import AuthorityBar from './components/AuthorityBar';
import ComplianceMarquee from './components/ComplianceMarquee';
import ContactSection from './components/ContactSection';
import { Product } from './types';
import ProductDetail from './components/ProductDetail';

// Lazy load heavy sections
const ProductGrid = lazy(() => import('./components/ProductGrid'));
const AIAdvisor = lazy(() => import('./components/AIAdvisor'));

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
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Scroll to top when switching views
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedProduct]);

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleBackToHome = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-white selection:bg-[#004fa3] selection:text-white flex flex-col relative font-glory">
      <TopTicker />
      <Header onLogoClick={handleBackToHome} />
      
      <main className="flex-grow pb-32 md:pb-0">
        {selectedProduct ? (
          <ProductDetail 
            product={selectedProduct} 
            onBack={handleBackToHome} 
          />
        ) : (
          <>
            <Hero />
            
            <AuthorityBar />

            <div id="products" className="scroll-mt-20">
              <Suspense fallback={<ProductSkeleton />}>
                <ProductGrid onSelectProduct={handleSelectProduct} />
              </Suspense>
            </div>

            <ComplianceMarquee />

            <section id="about" className="py-20 md:py-48 bg-slate-950 text-white relative overflow-hidden reveal scroll-mt-20">
              <div className="absolute inset-0 hex-bg opacity-10 pointer-events-none"></div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 md:gap-40 items-center text-center lg:text-left">
                  <div className="order-2 lg:order-1">
                    <span className="text-[#f58220] font-black uppercase tracking-[0.4em] text-[10px] md:text-xs mb-4 md:mb-6 block">Supply Integrity</span>
                    <h2 className="text-3xl md:text-8xl font-black mb-8 md:mb-10 uppercase tracking-tighter leading-[1.1] md:leading-none font-header">Reliable <br/><span className="text-blue-500">Global Logistics</span></h2>
                    <p className="text-slate-400 text-base md:text-2xl mb-10 md:mb-16 leading-relaxed font-medium">
                      We bridge the gap between manufacturing precision and clinical urgency. Our priority freight partnerships ensure your medical network is always prepared.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                      <div className="flex gap-4 md:gap-6 items-center p-6 md:p-10 bg-white/5 rounded-[2rem] md:rounded-[3rem] border border-white/10 backdrop-blur-xl flex-1 text-left">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-[#004fa3] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl shadow-blue-500/20">
                            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                        </div>
                        <div>
                            <h4 className="text-xs md:text-base font-black uppercase tracking-[0.2em]">Just-In-Time</h4>
                            <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider mt-1">Priority Routing</p>
                        </div>
                      </div>
                      <div className="flex gap-4 md:gap-6 items-center p-6 md:p-10 bg-white/5 rounded-[2rem] md:rounded-[3rem] border border-white/10 backdrop-blur-xl flex-1 text-left">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-[#f58220] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl shadow-orange-500/20">
                            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                        </div>
                        <div>
                            <h4 className="text-xs md:text-base font-black uppercase tracking-[0.2em]">Batch Shield</h4>
                            <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider mt-1">Secure Chain</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative w-full order-1 lg:order-2 reveal">
                    <div className="absolute -inset-6 md:-inset-20 bg-blue-600 opacity-20 blur-[60px] md:blur-[150px] rounded-full animate-pulse"></div>
                    <div className="relative bg-white/5 p-3 md:p-8 rounded-[2rem] md:rounded-[6rem] border border-white/10 backdrop-blur-sm shadow-2xl overflow-hidden group">
                       <img 
                        src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1200" 
                        alt="B2B Manufacturing Facility" 
                        loading="lazy"
                        className="rounded-[1.5rem] md:rounded-[5rem] opacity-90 w-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-1000"
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
          </>
        )}
      </main>
      <Footer />
      <MobileBottomNav />
    </div>
  );
}

export default App;