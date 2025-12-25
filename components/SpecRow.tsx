import React from 'react';

const SpecRow: React.FC<{ label: string; value?: string }> = ({ label, value }) => {
  if (!value) return null;
  return (
    <div className="group">
      <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 mb-0.5 group-hover:text-[#004fa3] transition-colors">
        {label}
      </p>
      <p className="text-xs md:text-base font-bold text-slate-800 leading-tight">
        {value}
      </p>
    </div>
  );
};

export default SpecRow;