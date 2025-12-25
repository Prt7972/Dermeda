
import React, { useState, useEffect } from 'react';
import { PRODUCTS } from '../constants';
import { ProductCategory, Product } from '../types';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';

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
    setTimeout(() => setNotification(null), 3000);
  };

  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProduct]);

  return (
    <section className="py-12 md:py-32 bg-white scroll-mt-24 relative">
      <div className="reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-20">
            <span className="text-[#f58220] font-black uppercase tracking-[0.4em] text-[10px] md:text-xs mb-3 md:mb-4 block">Professional Catalog</span>
            <h2 className="text-3xl md:text-6xl font-black text-slate-900 mb-4 md:mb-8 uppercase tracking-tighter leading-tight font-header">Technical <span className="text-[#004fa3]">Standards</span> Range</h2>
            <p className="max-w-2xl mx-auto text-slate-500 text-sm md:text-base font-medium leading-relaxed">
              Explore our clinically verified barrier solutions, ranging from high-sensitivity examination gloves to specialized surgical protection.
            </p>
          </div>
          
          <div className="sticky top-[4rem] md:top-[5rem] z-40 bg-white/95 backdrop-blur-md py-3 -mx-4 px-4 mb-10 md:mb-16 border-y border-slate-100">
            <div className="max-w-7xl mx-auto">
              <div className="flex justify-start md:justify-center overflow-x-auto no-scrollbar scroll-smooth">
                <div className="flex bg-slate-100/50 p-1 rounded-2xl md:rounded-[2rem] border border-slate-200/60 min-w-max">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveTab(cat)}
                      className={`px-4 md:px-8 py-2 md:py-3.5 rounded-xl md:rounded-[1.5rem] text-[10px] md:text-xs font-black transition-all whitespace-nowrap uppercase tracking-[0.15em] ${
                        activeTab === cat 
                          ? 'bg-white text-[#004fa3] shadow-sm md:shadow-[0_8px_20px_-6px_rgba(0,79,163,0.2)] border border-slate-200' 
                          : 'text-slate-500 hover:text-slate-900'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-10">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onSelect={setSelectedProduct} 
                onQuote={handleRequestQuote} 
              />
            ))}
          </div>
        </div>
      </div>

      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
          onQuote={handleRequestQuote} 
        />
      )}

      {notification && (
        <div className="fixed bottom-24 right-4 left-4 md:bottom-12 md:right-12 md:left-auto z-[200] animate-slide-up">
          <div className="bg-[#004fa3] text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-white/20 flex items-center gap-3 glass backdrop-blur-xl">
            <div className="w-7 h-7 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest">{notification}</p>
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

export default ProductGrid;
