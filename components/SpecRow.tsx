
import React from 'react';

const SpecRow: React.FC<{ label: string; value?: string }> = ({ label, value }) => {
  if (!value) return null;
  return (
    <div>
      <p className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-slate-400 mb-0.5">{label}</p>
      <p className="text-[10px] md:text-xs font-bold text-slate-800 leading-tight">{value}</p>
    </div>
  );
};

export default SpecRow;
