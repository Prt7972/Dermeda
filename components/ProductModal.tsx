import React, { useEffect } from 'react';
import { Product } from '../types';
import SpecRow from './SpecRow';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
  onQuote: (name: string) => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onQuote }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  const imageUrl = product.image.includes('?') 
    ? `${product.image}&auto=format&fit=crop&w=800&q=90` 
    : `${product.image}?auto=format&fit=crop&w=800&q=90`;

  return (
    <div className="fixed inset-0 z-[200] flex items-end md:items-center justify-center p-0 md:p-4 lg:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-md animate-fade-in"
        onClick={onClose}
      ></div>
      
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-white rounded-t-[2rem] md:rounded-[2.5rem] shadow-2xl overflow-hidden animate-slide-up flex flex-col h-[92%] md:h-auto md:max-h-[95vh] safe-area-bottom">
        
        {/* Header - Sticky */}
        <div className="bg-[#004fa3] p-5 md:p-10 text-white flex justify-between items-start sticky top-0 z-10 shrink-0">
          <div className="max-w-[80%] md:max-w-2xl">
            <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
              <span className="px-2 py-0.5 md:py-1 bg-white/20 rounded text-[9px] md:text-xs font-black uppercase tracking-widest border border-white/30">Technical Sheet</span>
              <span className="px-2 py-0.5 md:py-1 bg-orange-500 rounded text-[9px] md:text-xs font-black uppercase tracking-widest">Certified</span>
            </div>
            <h3 className="text-xl md:text-4xl font-black uppercase tracking-tight font-header leading-tight">
              {product.name}
            </h3>
          </div>
          <button onClick={onClose} className="p-2 md:p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all">
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>

        {/* Content - Scrollable */}
        <div className="flex-grow overflow-y-auto p-5 md:p-12 space-y-8 md:space-y-10 no-scrollbar">
          <div className="grid md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-5 lg:col-span-4">
               <div className="aspect-[4/5] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-slate-100 border border-slate-100 mb-6 md:mb-8 shadow-inner">
                 <img src={imageUrl} alt={product.name} className="w-full h-full object-cover" />
               </div>
               <div className="space-y-4 md:space-y-5">
                  <h4 className="text-[10px] md:text-sm font-black uppercase tracking-widest text-[#004fa3]">Available Sizes</h4>
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {product.sizes?.map(size => (
                      <span key={size} className="px-3 py-1.5 md:px-4 md:py-2 bg-slate-50 border border-slate-200 rounded-lg md:rounded-xl text-[10px] md:text-sm font-bold text-slate-700">{size}</span>
                    ))}
                  </div>
               </div>
            </div>

            <div className="md:col-span-7 lg:col-span-8 space-y-8 md:space-y-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
                <div className="space-y-6 md:space-y-8">
                  <div>
                    <h4 className="text-[11px] md:text-base font-black uppercase tracking-[0.2em] text-[#f58220] mb-4 md:mb-6 border-b border-slate-100 pb-2 md:pb-3 font-header">Technical Specs</h4>
                    <div className="grid gap-y-4 md:gap-y-6">
                       <SpecRow label="Material" value={product.specs?.material} />
                       <SpecRow label="AQL Rating" value={product.specs?.aql} />
                       <SpecRow label="Type" value={product.specs?.type} />
                       <SpecRow label="Length" value={product.specs?.length} />
                    </div>
                  </div>
                </div>
                <div className="space-y-6 md:space-y-8">
                  <div>
                    <h4 className="text-[11px] md:text-base font-black uppercase tracking-[0.2em] text-[#f58220] mb-4 md:mb-6 border-b border-slate-100 pb-2 md:pb-3 font-header">Quality Markers</h4>
                    <div className="grid gap-y-4 md:gap-y-6">
                       <SpecRow label="Tensile" value={product.specs?.tensileStrength} />
                       <SpecRow label="Elongation" value={product.specs?.elongation} />
                       <SpecRow label="Sterility" value={product.specs?.sterility || 'Non-Sterile'} />
                       <SpecRow label="Packaging" value={product.specs?.packing} />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-[11px] md:text-base font-black uppercase tracking-[0.2em] text-[#f58220] mb-4 md:mb-6 border-b border-slate-100 pb-2 md:pb-3 font-header">Compliance Standards</h4>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {product.specs?.standards?.map(std => (
                    <div key={std} className="flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2.5 bg-blue-50/50 rounded-lg md:rounded-xl border border-blue-100">
                       <svg className="w-3 h-3 md:w-4 md:h-4 text-[#004fa3]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1.000-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                       <span className="text-[9px] md:text-xs font-black text-[#004fa3] tracking-widest">{std}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 md:p-8 bg-slate-50 rounded-[1.5rem] md:rounded-[2rem] border border-slate-100">
                <h4 className="text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-400 mb-2 md:mb-3">Surgical Applications</h4>
                <p className="text-[13px] md:text-lg font-medium text-slate-700 leading-relaxed">{product.specs?.usage}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions - Sticky */}
        <div className="p-5 md:p-10 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row gap-3 md:gap-4 justify-between items-center sticky bottom-0 z-10 shrink-0 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
           <div className="flex items-center gap-2 md:gap-3 w-full sm:w-auto">
              <button className="flex-1 sm:flex-none px-4 py-3.5 md:px-6 md:py-4 bg-white border border-slate-200 text-[10px] md:text-xs font-black rounded-xl uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                PDF
              </button>
              <button onClick={() => window.print()} className="flex-1 sm:flex-none px-4 py-3.5 md:px-6 md:py-4 bg-white border border-slate-200 text-[10px] md:text-xs font-black rounded-xl uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2-2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
                Print
              </button>
           </div>
           <button onClick={() => onQuote(product.name)} className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 bg-[#f58220] text-white text-[11px] md:text-sm font-black rounded-xl md:rounded-2xl uppercase tracking-widest shadow-lg shadow-orange-500/20 active:scale-95 transition-all">
             Request Quote
           </button>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .safe-area-bottom {
          padding-bottom: env(safe-area-inset-bottom);
        }
      `}} />
    </div>
  );
};

export default ProductModal;