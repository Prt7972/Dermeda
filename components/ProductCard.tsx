import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  onQuote: (name: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect, onQuote }) => {
  const imageUrl = product.image.includes('?') 
    ? `${product.image}&auto=format&fit=crop&w=600&q=80` 
    : `${product.image}?auto=format&fit=crop&w=600&q=80`;

  return (
    <div className="group flex flex-col h-full bg-white rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-slate-100 hover:shadow-[0_40px_80px_-15px_rgba(0,79,163,0.15)] transition-all duration-500 w-full max-w-full">
      <div className="relative h-48 sm:h-56 md:h-72 overflow-hidden bg-slate-50 flex-shrink-0">
        <img 
          src={imageUrl} 
          alt={product.name} 
          loading="lazy" 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
        />
        <div className="absolute top-3 left-3 md:top-4 md:left-4">
          <span className="px-2 py-1 md:px-3 md:py-1.5 bg-white/95 backdrop-blur-md text-[#004fa3] rounded-full text-[10px] md:text-xs font-black uppercase tracking-[0.15em] md:tracking-[0.2em] shadow-sm border border-blue-50/50">
            {product.category}
          </span>
        </div>
      </div>
      
      <div className="p-5 md:p-8 flex flex-col flex-grow">
        <h3 className="text-lg md:text-2xl font-black text-slate-900 mb-2 md:mb-4 leading-tight uppercase line-clamp-2 min-h-[3rem] md:min-h-[4.5rem] font-header">
          {product.name}
        </h3>
        
        <div className="space-y-3 md:space-y-4 mb-6 md:mb-8 flex-grow">
          <div className="flex items-center gap-2 min-h-[1.5rem]">
            {product.specs?.aql ? (
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                <span className="text-[9px] md:text-xs font-black text-[#004fa3] px-2 py-0.5 bg-blue-50 rounded uppercase tracking-wider">AQL {product.specs.aql}</span>
                <span className="text-[9px] md:text-xs font-black text-slate-400 uppercase tracking-wider">Certified</span>
              </div>
            ) : (
              <span className="text-[9px] md:text-xs font-black text-slate-400 uppercase tracking-wider">Industrial Grade</span>
            )}
          </div>
          
          <div className="flex items-start gap-2 md:gap-3">
            <div className="mt-0.5 w-4 h-4 md:w-5 md:h-5 rounded bg-orange-100 flex items-center justify-center flex-shrink-0">
              <svg className="w-2.5 h-2.5 md:w-3 md:h-3 text-[#f58220]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
              </svg>
            </div>
            <p className="text-[12px] md:text-base text-slate-600 font-bold leading-snug line-clamp-2">
              {product.specs?.packing || 'Bulk packaging available'}
            </p>
          </div>
        </div>
        
        <div className="flex gap-2 mt-auto">
          <button 
            onClick={() => onSelect(product)}
            className="flex-grow py-3.5 md:py-4 bg-[#004fa3] text-[10px] md:text-sm font-black rounded-xl md:rounded-2xl hover:bg-blue-800 transition-all shadow-md uppercase tracking-[0.1em] md:tracking-[0.2em] active:scale-95 text-white"
          >
            Spec Sheet
          </button>
          <button 
            onClick={() => onQuote(product.name)}
            className="w-11 h-11 md:w-16 md:h-16 bg-slate-50 text-slate-600 rounded-xl md:rounded-2xl flex items-center justify-center border border-slate-100 active:scale-95 hover:text-[#004fa3] transition-all flex-shrink-0"
            aria-label="Add to Quote"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;