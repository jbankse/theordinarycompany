'use client';

import React from 'react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="bg-[#FFFFFF]">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr]">
        {/* Left: Headline */}
        <div className="p-6 lg:p-16 brutal-border-r flex flex-col justify-between">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="big-number block">02</span>
            <h2 className="font-display text-5xl lg:text-8xl mt-4 leading-none uppercase tracking-tighter">
              INITIATE<br />CONNECTION
            </h2>
          </motion.div>
          
          <div className="mt-12">
            <p className="text-xl font-medium uppercase leading-tight max-w-md">
              Ready to deploy visual infrastructure? Our systems are standing by.
            </p>
          </div>
        </div>

        {/* Right: Form */}
        <div className="p-6 lg:p-16 bg-[#00FF00] text-[#1a1a1f]">
          <form id="contact-form" className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="font-display text-xs tracking-[0.3em] text-[#1a1a1f] uppercase font-bold">USER_NAME</label>
              <input 
                type="text" 
                placeholder="ENTER_NAME"
                className="w-full bg-transparent brutal-border border-[#1a1a1f] p-3 md:p-4 font-display text-lg md:text-xl focus:border-[#1a1a1f] focus:text-[#1a1a1f] outline-none transition-all placeholder:text-[#1a1a1f]/30"
              />
            </div>
            <div className="space-y-2">
              <label className="font-display text-xs tracking-[0.3em] text-[#1a1a1f] uppercase font-bold">USER_EMAIL</label>
              <input 
                type="email" 
                placeholder="ENTER_EMAIL"
                className="w-full bg-transparent brutal-border border-[#1a1a1f] p-3 md:p-4 font-display text-lg md:text-xl focus:border-[#1a1a1f] focus:text-[#1a1a1f] outline-none transition-all placeholder:text-[#1a1a1f]/30"
              />
            </div>
            <div className="space-y-2">
              <label className="font-display text-xs tracking-[0.3em] text-[#1a1a1f] uppercase font-bold">PROJECT_DETAILS</label>
              <textarea 
                rows={4}
                placeholder="DESCRIBE_SYSTEM_REQUIREMENTS"
                className="w-full bg-transparent brutal-border border-[#1a1a1f] p-3 md:p-4 font-display text-lg md:text-xl focus:border-[#1a1a1f] focus:text-[#1a1a1f] outline-none transition-all placeholder:text-[#1a1a1f]/30 resize-none"
              />
            </div>
            
            {/* Submit button removed - now handled in Footer */}
          </form>
        </div>
      </div>
    </section>
  );
}
