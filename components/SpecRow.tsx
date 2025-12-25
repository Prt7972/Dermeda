import React from 'react';

const SpecRow: React.FC<{ label: string; value?: string }> = ({ label, value }) => {
  if (!value) return null;
  return (
    <div>
      <p className="text-[11px] md:text-xs font-black uppercase tracking-widest text-slate-400 mb-1">{label}</p>
      <p className="text-sm md:text-base font-bold text-slate-800 leading-tight">{value}</p>
    </div>
  );
};

export default SpecRow;