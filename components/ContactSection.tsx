
import React from 'react';

const ContactSection: React.FC = () => (
  <section id="contact" className="py-20 md:py-48 bg-white scroll-mt-20 reveal">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 md:gap-32 items-start">
        <div className="space-y-10 md:space-y-12 md:sticky md:top-32">
          <div>
            <span className="text-[#004fa3] font-black uppercase tracking-[0.4em] text-xs mb-4 block">Direct Support</span>
            <h2 className="text-4xl md:text-7xl font-black text-slate-900 mb-6 md:mb-8 uppercase tracking-tighter leading-tight font-header">GET IN <span className="text-[#f58220]">TOUCH</span></h2>
            <p className="text-slate-500 font-medium text-base md:text-xl leading-relaxed">
              Our clinical advisors and procurement specialists are available for global medical network support and local distribution inquiries.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4 md:gap-8">
            <div className="p-6 md:p-10 rounded-3xl bg-slate-50 border border-slate-100">
              <h4 className="text-[10px] md:text-xs font-black uppercase tracking-widest text-[#004fa3] mb-3 md:mb-4">Regional Sales</h4>
              <p className="text-sm md:text-base font-bold text-slate-800">procurement@dermeda.medical</p>
              <p className="text-[10px] md:text-xs text-slate-400 mt-2">Response time: &lt; 2 hours</p>
            </div>
            <div className="p-6 md:p-10 rounded-3xl bg-slate-50 border border-slate-100">
              <h4 className="text-[10px] md:text-xs font-black uppercase tracking-widest text-[#f58220] mb-3 md:mb-4">Quality Control</h4>
              <p className="text-sm md:text-base font-bold text-slate-800">compliance@dermeda.medical</p>
              <p className="text-[10px] md:text-xs text-slate-400 mt-2">Batch verification active</p>
            </div>
          </div>

          <div className="p-8 md:p-14 rounded-[2.5rem] md:rounded-[3rem] bg-[#004fa3] text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -mr-24 -mt-24 blur-3xl"></div>
            <h4 className="text-lg md:text-xl font-black uppercase tracking-widest mb-4 md:mb-6 font-header">Main Office</h4>
            <p className="text-blue-100 text-base md:text-lg leading-relaxed font-medium">
              Dermeda Medical HQ, <br/>
              Shukrawar Peth, <br/>
              Pune, India
            </p>
          </div>
        </div>

        <div className="bg-white p-6 md:p-16 rounded-[2.5rem] md:rounded-[3.5rem] border border-slate-200 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.08)] relative mt-12 md:mt-0">
          <div className="absolute -top-6 -right-6 w-16 h-16 md:w-24 md:h-24 bg-orange-500 rounded-[1.5rem] md:rounded-[2rem] shadow-2xl flex items-center justify-center text-white transform rotate-12 hidden md:flex">
             <svg className="w-8 h-8 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v10a2 2 0 002 2z"/></svg>
          </div>
          <form className="space-y-6 md:space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4 md:gap-8">
              <div className="space-y-2 md:space-y-3">
                <label className="text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-400">Full Name</label>
                <input type="text" className="w-full px-5 py-3.5 md:py-5 bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl focus:ring-2 focus:ring-[#004fa3] outline-none transition-all text-sm md:text-base font-bold" placeholder="Full Name" />
              </div>
              <div className="space-y-2 md:space-y-3">
                <label className="text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-400">Organization</label>
                <input type="text" className="w-full px-5 py-3.5 md:py-5 bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl focus:ring-2 focus:ring-[#004fa3] outline-none transition-all text-sm md:text-base font-bold" placeholder="Hospital/Company" />
              </div>
            </div>
            <div className="space-y-2 md:space-y-3">
              <label className="text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-400">Email Address</label>
              <input type="email" className="w-full px-5 py-3.5 md:py-5 bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl focus:ring-2 focus:ring-[#004fa3] outline-none transition-all text-sm md:text-base font-bold" placeholder="procurement@hospital.org" />
            </div>
            <div className="space-y-2 md:space-y-3">
              <label className="text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-400">Inquiry Details</label>
              <textarea rows={4} className="w-full px-5 py-3.5 md:py-5 bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl focus:ring-2 focus:ring-[#004fa3] outline-none transition-all text-sm md:text-base font-bold" placeholder="Message..."></textarea>
            </div>
            <button type="submit" className="w-full py-4 md:py-6 bg-[#004fa3] text-white rounded-xl md:rounded-2xl text-sm md:text-base font-black uppercase tracking-[0.2em] shadow-xl hover:bg-blue-800 transition-all active:scale-[0.98]">
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
