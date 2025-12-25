import React, { useEffect } from 'react';
import { Product } from '../types';
import SpecRow from './SpecRow';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack }) => {
  // Reset scroll on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [product]);

  const imageUrl = product.image.includes('?') 
    ? `${product.image}&auto=format&fit=crop&w=1200&q=90` 
    : `${product.image}?auto=format&fit=crop&w=1200&q=90`;

  return (
    <div className="animate-fade-in bg-white min-h-screen">
      {/* Navigation & Context */}
      <nav className="sticky top-20 md:top-24 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 py-3 md:py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="group inline-flex items-center gap-2 text-[#004fa3] font-black uppercase tracking-widest text-[10px] md:text-xs hover:opacity-70 transition-all"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
            Return to Catalog
          </button>
          <div className="hidden sm:flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <span>Dermeda</span>
            <span className="text-slate-200">/</span>
            <span>{product.category}</span>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-20 animate-slide-up">
        <div className="grid lg:grid-cols-12 gap-8 md:gap-20 items-start">
          
          {/* Visual Presentation */}
          <div className="lg:col-span-5 space-y-6 md:space-y-10">
            <div className="aspect-square sm:aspect-[4/5] rounded-[1.5rem] md:rounded-[3rem] overflow-hidden bg-slate-50 border border-slate-100 shadow-xl relative group">
              <img 
                src={imageUrl} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]" 
              />
              <div className="absolute top-4 left-4 md:top-8 md:left-8">
                <span className="px-3 py-1.5 md:px-5 md:py-2 bg-white/95 backdrop-blur-xl rounded-full text-[#004fa3] text-[9px] md:text-xs font-black uppercase tracking-[0.2em] shadow-lg border border-slate-100/50">
                  {product.category}
                </span>
              </div>
            </div>

            {/* Quick Specs - Mobile Friendly Grid */}
            <div className="grid grid-cols-2 gap-4 p-6 md:p-10 bg-slate-50 rounded-[2rem] border border-slate-100">
              <div className="col-span-2 mb-2">
                <h4 className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-[#f58220]">Quick Reference</h4>
              </div>
              <SpecRow label="Material" value={product.specs?.material} />
              <SpecRow label="Standards" value={`AQL ${product.specs?.aql || '1.5'}`} />
              <SpecRow label="Unit Pack" value={product.specs?.packing} />
              <SpecRow label="Colors" value={product.specs?.color || 'Standard Medical'} />
            </div>
          </div>

          {/* Product Data & Technical Details */}
          <div className="lg:col-span-7 space-y-8 md:space-y-12">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-4 md:mb-6">
                <span className="px-2.5 py-1 bg-[#004fa3] text-white rounded text-[8px] md:text-[10px] font-black uppercase tracking-widest">Premium Grade</span>
                <span className="px-2.5 py-1 bg-green-50 text-green-600 rounded text-[8px] md:text-[10px] font-black uppercase tracking-widest border border-green-100">Batch Tested</span>
              </div>
              <h1 className="text-3xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter leading-[1.1] font-header mb-4 md:mb-8">
                {product.name}
              </h1>
              <p className="text-sm md:text-xl text-slate-500 font-medium leading-relaxed max-w-2xl">
                {product.description}
              </p>
            </div>

            {/* Technical Breakdown */}
            <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
              <div className="space-y-6 md:space-y-8">
                <h4 className="text-[11px] md:text-sm font-black uppercase tracking-[0.25em] text-[#004fa3] border-b border-slate-100 pb-2 md:pb-3">Performance Metrics</h4>
                <div className="grid gap-y-4 md:gap-y-6">
                   <SpecRow label="Tensile Strength" value={product.specs?.tensileStrength} />
                   <SpecRow label="Ultimate Elongation" value={product.specs?.elongation} />
                   <SpecRow label="Total Length" value={product.specs?.length} />
                   <SpecRow label="Clinical Status" value={product.specs?.sterility || 'Non-Sterile'} />
                </div>
              </div>
              <div className="space-y-6 md:space-y-8">
                <h4 className="text-[11px] md:text-sm font-black uppercase tracking-[0.25em] text-[#004fa3] border-b border-slate-100 pb-2 md:pb-3">Compliance List</h4>
                <div className="flex flex-wrap gap-2">
                  {product.specs?.standards?.map(std => (
                    <div key={std} className="flex items-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2.5 bg-blue-50/30 rounded-lg border border-blue-100/50">
                       <svg className="w-3 h-3 md:w-4 md:h-4 text-[#004fa3]" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                       </svg>
                       <span className="text-[9px] md:text-[10px] font-black text-[#004fa3] tracking-widest">{std}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4">
                  <h4 className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-2">Available Sizes</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {product.sizes?.map(size => (
                      <span key={size} className="w-8 h-8 md:w-10 md:h-10 rounded-lg border border-slate-200 flex items-center justify-center text-[10px] md:text-xs font-black text-slate-600 bg-slate-50 uppercase">
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Application & CTA */}
            <div className="p-6 md:p-12 bg-slate-900 text-white rounded-[2rem] md:rounded-[3rem] shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] -mr-32 -mt-32 group-hover:bg-blue-600/30 transition-colors duration-1000"></div>
               <div className="relative z-10">
                 <h4 className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-[#f58220] mb-4">Recommended Environment</h4>
                 <p className="text-sm md:text-xl font-medium text-slate-300 leading-relaxed mb-8 md:mb-12">
                   {product.specs?.usage}
                 </p>
                 <div className="flex flex-col sm:flex-row gap-3 md:gap-5">
                    <button className="flex-1 bg-white text-slate-900 px-6 py-4 md:py-5 rounded-xl md:rounded-2xl font-black uppercase tracking-widest text-[10px] md:text-xs hover:bg-slate-100 transition-all flex items-center justify-center gap-2">
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                      </svg>
                      Datasheet (PDF)
                    </button>
                    <button className="flex-1 bg-[#f58220] text-white px-6 py-4 md:py-5 rounded-xl md:rounded-2xl font-black uppercase tracking-widest text-[10px] md:text-xs hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20 active:scale-95">
                      Request Bulk Inquiry
                    </button>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Sticky CTA - Secondary */}
      <div className="lg:hidden fixed bottom-16 left-0 right-0 p-4 z-50 pointer-events-none">
        <div className="max-w-md mx-auto pointer-events-auto">
          <button 
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
            className="w-full bg-[#004fa3] text-white py-4 rounded-xl font-black uppercase tracking-[0.2em] text-[10px] shadow-2xl glass backdrop-blur-xl border border-white/10"
          >
            Technical Inquiry
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;