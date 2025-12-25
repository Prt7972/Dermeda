import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  onQuote: (name: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect, onQuote }) => {
  return (
    <div className="group flex flex-col bg-white rounded-[2rem] overflow-hidden border border-slate-100 hover:shadow-[0_40px_80px_-15px_rgba(0,79,163,0.15)] transition-all duration-500">
      <div className="relative h-56 md:h-72 overflow-hidden bg-slate-50">
        <img 
          src={`${product.image}&auto=format&fit=crop&w=600`} 
          alt={product.name} 
          loading="lazy" 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1.5 bg-white/95 backdrop-blur-md text-[#004fa3] rounded-full text-xs font-black uppercase tracking-[0.2em] shadow-sm border border-blue-50/50">
            {product.category}
          </span>
        </div>
      </div>
      
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-3 leading-tight uppercase min-h-[3.5rem] font-header">
          {product.name}
        </h3>
        <div className="space-y-4 mb-6 flex-grow">
          {product.specs?.aql && (
            <div className="flex items-center gap-2">
               <span className="text-[11px] md:text-xs font-black text-[#004fa3] px-2 py-1 bg-blue-50 rounded uppercase tracking-widest">AQL {product.specs.aql}</span>
               <span className="text-[11px] md:text-xs font-black text-slate-400 uppercase tracking-widest">Certified</span>
            </div>
          )}
          {product.specs?.packing && (
            <div className="flex items-start gap-3">
              <div className="mt-1 w-5 h-5 rounded bg-orange-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-[#f58220]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
              </div>
              <p className="text-sm md:text-base text-slate-600 font-bold leading-normal">{product.specs.packing}</p>
            </div>
          )}
        </div>
        
        <div className="flex gap-2 mt-auto">
          <button 
            onClick={() => onSelect(product)}
            className="flex-grow py-4 bg-[#004fa3] text-xs md:text-sm font-black rounded-xl md:rounded-2xl hover:bg-blue-800 transition-all shadow-md uppercase tracking-[0.2em] active:scale-95 text-white"
          >
            Spec Sheet
          </button>
          <button 
            onClick={() => onQuote(product.name)}
            className="w-12 h-12 md:w-16 md:h-16 bg-slate-50 text-slate-600 rounded-xl md:rounded-2xl flex items-center justify-center border border-slate-100 active:scale-95 hover:text-[#004fa3] transition-all"
            aria-label="Add to Quote"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;