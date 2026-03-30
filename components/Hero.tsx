'use client';

import React from 'react';
import { motion } from 'motion/react';
import VisualSystems from './VisualSystems';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-16 flex flex-col">
      {/* Top Section */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Big Numbers & Title */}
        <div className="p-6 lg:p-16 brutal-border-r flex flex-col justify-between bg-[#FFFFFF]">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="big-number block text-[clamp(2.5rem,6vw,8rem)] text-[#121212]">01</span>
            <h1 className="font-display font-black text-[clamp(2.5rem,4.5vw,6rem)] mt-4 leading-none uppercase tracking-tighter">
              PRECISION<br />ARCHITECTURE.
            </h1>
          </motion.div>
          
          <div className="mt-12 max-w-md">
            <p className="text-xl font-medium leading-tight uppercase text-[#121212] tracking-tight">
              Engineering structured digital experiences. Precise, functional, and meticulously designed.
            </p>
          </div>
        </div>

        {/* Right: Interaction */}
        <div className="bg-[#121212] text-[#FFFFFF] flex flex-col overflow-hidden relative">
          <div className="flex-1 flex items-center justify-center p-8 relative overflow-hidden">
            <VisualSystems />
          </div>
        </div>
      </div>

      {/* Bottom Rail */}
      <div className="h-16 brutal-border-b flex items-stretch bg-[#FFFFFF]">
        <div className="px-4 lg:px-8 brutal-border-l brutal-border-r brutal-border-t hidden md:flex items-center font-display font-bold text-xs hover:bg-[#121212] hover:text-[#FFFFFF] cursor-pointer transition-colors tracking-widest text-[#121212]">
          SCROLL_DOWN
        </div>
        <div className="flex-1 flex items-center px-4 lg:px-8 brutal-border-t font-display font-bold text-xs tracking-widest overflow-hidden text-[#121212]">
          <div className="marquee-track" style={{ animationDuration: '40s' }}>
            {[...Array(20)].map((_, i) => (
              <span key={i} className="mx-4">STRUCTURE // FUNCTION // FORM //</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
