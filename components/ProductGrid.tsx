
import React, { useState, useEffect } from 'react';
import { PRODUCTS } from '../constants';
import { ProductCategory, Product } from '../types';

const ProductGrid: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ProductCategory | 'All'>('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [notification, setNotification] = useState<string | null>(null);
  
  const categories: (ProductCategory | 'All')[] = ['All', 'Gloves', 'Elbow Gloves', 'Disposable Products', 'Sanitizer'];

  const filteredProducts = activeTab === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeTab);

  const handleRequestQuote = (productName: string) => {
    setNotification(`Inquiry for ${productName} added to quote request.`);
    // Auto-hide notification after 3 seconds
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <section id="products" className="py-16 md:py-32 bg-white reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-20">
          <span className="text-[#f58220] font-black uppercase tracking-[0.4em] text-[10px] md:text-xs mb-3 md:mb-4 block">Professional Catalog</span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 md:mb-8 uppercase tracking-tighter leading-tight font-header">Technical <span className="text-[#004fa3]">Standards</span> Range</h2>
          <p className="max-w-2xl mx-auto text-slate-500 text-sm md:text-base font-medium">
            Explore our clinically verified barrier solutions, ranging from high-sensitivity examination gloves to specialized surgical protection.
          </p>
        </div>
        
        <div className="sticky top-16 md:top-20 z-40 bg-white/80 backdrop-blur-md py-4 -mx-4 px-4 mb-12 md:mb-16 border-y border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-center">
              <div className="relative w-full max-w-4xl">
                <div className="flex bg-slate-100/50 p-1.5 rounded-2xl md:rounded-[2rem] overflow-x-auto no-scrollbar w-full shadow-inner border border-slate-200/60 scroll-smooth touch-pan-x items-center justify-start md:justify-center">
                  <div className="flex gap-1 md:gap-2 px-2">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setActiveTab(cat)}
                        className={`px-5 md:px-8 py-2.5 md:py-3.5 rounded-xl md:rounded-[1.5rem] text-[11px] md:text-xs font-black transition-all whitespace-nowrap uppercase tracking-[0.15em] ${
                          activeTab === cat 
                            ? 'bg-white text-[#004fa3] shadow-[0_8px_20px_-6px_rgba(0,79,163,0.2)] border border-slate-200' 
                            : 'text-slate-500 hover:text-slate-900 hover:bg-white/40'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-10">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group flex flex-col bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-slate-100 hover:shadow-[0_40px_80px_-15px_rgba(0,79,163,0.15)] transition-all duration-500 hover:-translate-y-1">
              <div className="relative h-60 md:h-72 overflow-hidden bg-slate-50">
                <img 
                  src={`${product.image}&w=600&q=75&auto=format`} 
                  alt={product.name} 
                  loading="lazy" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute top-4 left-4 md:top-5 md:left-5">
                  <span className="px-3 py-1 md:px-4 md:py-1.5 bg-white/90 backdrop-blur-md text-[#004fa3] rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] shadow-xl border border-blue-50/50">
                    {product.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="text-lg md:text-xl font-black text-slate-900 mb-3 leading-tight uppercase min-h-[3rem] md:min-h-[3.5rem] overflow-hidden font-header">
                  {product.name}
                </h3>
                <div className="space-y-4 mb-8 md:mb-10 flex-grow">
                  {product.specs?.aql && (
                    <div className="flex items-center gap-2">
                       <span className="text-[10px] font-black text-[#004fa3] px-2 py-0.5 bg-blue-50 rounded uppercase tracking-widest">AQL {product.specs.aql}</span>
                       <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Certified</span>
                    </div>
                  )}
                  {product.specs?.packing && (
                    <div className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-[#f58220]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
                      </div>
                      <p className="text-[11px] md:text-xs text-slate-600 font-bold leading-relaxed">{product.specs.packing}</p>
                    </div>
                  )}
                </div>
                
                <div className="flex gap-2 mt-auto">
                  <button 
                    onClick={() => setSelectedProduct(product)}
                    className="flex-grow py-4 bg-[#004fa3] text-white text-[11px] md:text-xs font-black rounded-xl md:rounded-2xl hover:bg-blue-800 transition-all shadow-lg uppercase tracking-[0.2em] active:scale-95"
                  >
                    Spec Sheet
                  </button>
                  <button 
                    onClick={() => handleRequestQuote(product.name)}
                    className="w-12 h-12 md:w-14 md:h-14 bg-slate-50 text-slate-600 rounded-xl md:rounded-2xl flex items-center justify-center border border-slate-100 active:scale-95 group/btn hover:text-[#004fa3] hover:border-[#004fa3]/30 transition-all relative"
                    title="Quick Quote Request"
                  >
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Global Notification Toast */}
      {notification && (
        <div className="fixed bottom-32 right-4 left-4 md:bottom-12 md:right-12 md:left-auto z-[200] animate-slide-up">
          <div className="bg-[#004fa3] text-white px-6 py-4 rounded-2xl shadow-2xl border border-white/20 flex items-center gap-4 glass backdrop-blur-xl">
            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
            </div>
            <p className="text-xs font-black uppercase tracking-widest">{notification}</p>
          </div>
        </div>
      )}

      {/* Spec Sheet Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md animate-fade-in"
            onClick={() => setSelectedProduct(null)}
          ></div>
          
          <div className="relative w-full max-w-4xl bg-white rounded-[2rem] md:rounded-[3rem] shadow-2xl overflow-hidden animate-slide-up flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="bg-[#004fa3] p-6 md:p-10 text-white flex justify-between items-start">
              <div className="max-w-xl">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/30">Technical Data Sheet (TDS)</span>
                  <span className="px-3 py-1 bg-orange-500 rounded-full text-[10px] font-black uppercase tracking-widest">Certified</span>
                </div>
                <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight font-header leading-tight">
                  {selectedProduct.name}
                </h3>
              </div>
              <button 
                onClick={() => setSelectedProduct(null)}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-xl transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-grow overflow-y-auto p-6 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                <div className="md:col-span-1">
                   <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-slate-100 border border-slate-100 mb-6">
                     <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover" />
                   </div>
                   <div className="space-y-4">
                      <h4 className="text-xs font-black uppercase tracking-widest text-[#004fa3]">Standard Sizes</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct.sizes?.map(size => (
                          <span key={size} className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-[11px] font-bold text-slate-700">{size}</span>
                        ))}
                      </div>
                   </div>
                </div>

                <div className="md:col-span-2 space-y-10">
                  {/* Performance Specs */}
                  <div>
                    <h4 className="text-sm font-black uppercase tracking-[0.2em] text-[#f58220] mb-6 border-b border-slate-100 pb-2 font-header">Technical Specifications</h4>
                    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                       <SpecRow label="Material" value={selectedProduct.specs?.material} />
                       <SpecRow label="AQL Rating" value={selectedProduct.specs?.aql} />
                       <SpecRow label="Type" value={selectedProduct.specs?.type} />
                       <SpecRow label="Finish" value={selectedProduct.specs?.length} />
                       <SpecRow label="Tensile Strength" value={selectedProduct.specs?.tensileStrength} />
                       <SpecRow label="Elongation" value={selectedProduct.specs?.elongation} />
                       <SpecRow label="Sterility" value={selectedProduct.specs?.sterility || 'Non-Sterile'} />
                       <SpecRow label="Packing" value={selectedProduct.specs?.packing} />
                    </div>
                  </div>

                  {/* Quality Standards */}
                  <div>
                    <h4 className="text-sm font-black uppercase tracking-[0.2em] text-[#f58220] mb-6 border-b border-slate-100 pb-2 font-header">Compliance & Quality</h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProduct.specs?.standards?.map(std => (
                        <div key={std} className="flex items-center gap-2 px-4 py-2 bg-blue-50/50 rounded-xl border border-blue-100">
                           <svg className="w-4 h-4 text-[#004fa3]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                           <span className="text-[11px] font-black text-[#004fa3] tracking-widest">{std}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Usage */}
                  <div className="p-6 bg-slate-50 rounded-[1.5rem] border border-slate-100">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Recommended Application</h4>
                    <p className="text-sm font-medium text-slate-700 leading-relaxed">{selectedProduct.specs?.usage}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 md:p-8 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row gap-4 justify-between items-center">
               <div className="flex items-center gap-4">
                  <button className="px-6 py-3 bg-white border border-slate-200 text-[11px] font-black rounded-xl uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                    Download PDF
                  </button>
                  <button onClick={() => window.print()} className="px-6 py-3 bg-white border border-slate-200 text-[11px] font-black rounded-xl uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2-2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
                    Print Spec
                  </button>
               </div>
               <button 
                onClick={() => handleRequestQuote(selectedProduct.name)}
                className="w-full sm:w-auto px-10 py-4 bg-[#f58220] text-white text-[11px] font-black rounded-xl uppercase tracking-widest shadow-xl shadow-orange-500/20 active:scale-95 transition-all"
               >
                 Request Clinical Quote
               </button>
            </div>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slide-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
        .animate-slide-up { animation: slide-up 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}} />
    </section>
  );
};

const SpecRow = ({ label, value }: { label: string, value?: string }) => {
  if (!value) return null;
  return (
    <div>
      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{label}</p>
      <p className="text-xs font-bold text-slate-800">{value}</p>
    </div>
  );
};

export default ProductGrid;
