'use client';

import React from 'react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="bg-[#FFFFFF]">
      <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr]">
        {/* Left: Headline */}
        <div className="p-6 lg:p-16 bg-[#F5F5F5] brutal-border-r border-[#121212] flex flex-col justify-between">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="big-number block">02</span>
            <h2 className="font-display font-black text-5xl lg:text-8xl mt-4 leading-none uppercase tracking-tighter">
              PROJECT<br />INQUIRY
            </h2>
          </motion.div>
          
          <div className="mt-12">
            <p className="text-xl font-medium uppercase leading-tight max-w-md text-[#121212]">
              Provide the structural parameters. We will engineer the solution.
            </p>
          </div>
        </div>

        {/* Right: Form */}
        <div className="p-6 lg:p-16 bg-[#F5F5F5] text-[#121212]">
          <form id="contact-form" className="space-y-8 flex flex-col justify-center h-full" onSubmit={(e) => e.preventDefault()}>
            <div className="mb-8 lg:mb-12">
              <h3 className="font-display font-black text-3xl md:text-5xl lg:text-6xl uppercase tracking-tighter leading-none text-[#121212] max-w-2xl">
                WE'RE EXCITED TO HEAR FROM YOU.
              </h3>
            </div>
            <div className="space-y-2">
              <label className="font-display font-bold text-xs tracking-widest text-[#121212] uppercase">NAME</label>
              <input 
                type="text" 
                placeholder="ENTER NAME"
                className="w-full bg-transparent border-[3px] border-[#121212] p-3 md:p-4 font-display font-bold text-lg md:text-xl focus:border-[#121212] focus:bg-[#FFFFFF] outline-none transition-all placeholder:text-[#121212]/40"
              />
            </div>
            <div className="space-y-2">
              <label className="font-display font-bold text-xs tracking-widest text-[#121212] uppercase">EMAIL</label>
              <input 
                type="email" 
                placeholder="MAIL@DOMAIN.COM"
                className="w-full bg-transparent border-[3px] border-[#121212] p-3 md:p-4 font-display font-bold text-lg md:text-xl focus:border-[#121212] focus:bg-[#FFFFFF] outline-none transition-all placeholder:text-[#121212]/40"
              />
            </div>
            <div className="space-y-2">
              <label className="font-display font-bold text-xs tracking-widest text-[#121212] uppercase">PARAMETERS</label>
              <textarea 
                rows={4}
                placeholder="DEFINE SCOPE..."
                className="w-full bg-transparent border-[3px] border-[#121212] p-3 md:p-4 font-display font-bold text-lg md:text-xl focus:border-[#121212] focus:bg-[#FFFFFF] outline-none transition-all placeholder:text-[#121212]/40 resize-none"
              />
            </div>
            
            {/* Submit button removed - now handled in Footer */}
          </form>
        </div>
      </div>
    </section>
  );
}
