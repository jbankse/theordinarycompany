'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import VisualSystems from './VisualSystems';

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] pt-16 flex flex-col">
      {/* Top Section */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Big Numbers & Title */}
        <div className="p-6 lg:p-16 brutal-border-r flex flex-col justify-between bg-[#FFFFFF]">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="block font-display font-extrabold text-[clamp(2rem,4vw,4rem)] leading-[0.6] tracking-[-0.1em] text-[#121212] md:mb-6">01</span>
            <h1 className="font-display font-normal text-[clamp(2.5rem,4vw,5.5rem)] mt-4 leading-none tracking-tighter uppercase">
              BUILDING VISUAL INFRASTRUCTURE<br />FOR MODERN COMPANIES<span className="ml-[0.1em]">.</span>
            </h1>
          </motion.div>
          
          <div className="mt-12 max-w-md">
            <p className="text-xl font-medium leading-tight uppercase text-[#121212] tracking-tight">
              We deliver <Link href="/blog/what-is-visual-infrastructure" className="text-[#FF0000] underline decoration-2 underline-offset-4 hover:text-[#121212] transition-colors">Visual Infrastructure as a Service (VIaaS)</Link>. Branding, motion design, and content production for modern brands.
            </p>
          </div>
        </div>

        {/* Right: Interaction */}
        <div className="bg-[#121212] text-[#FFFFFF] flex flex-col overflow-hidden relative min-h-[60vh] lg:min-h-0">
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
              <span key={i} className="mx-4">BRANDING // MOTION DESIGN // MARKETING // SOCIAL</span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Black Bar - Massive Typography Design */}
      <div className="w-full h-[120px] bg-[#121212] flex items-center justify-center md:justify-between px-4 md:px-8 overflow-hidden relative group cursor-pointer">
        <div className="absolute inset-0 bg-[#FF0000] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
        
        <div className="relative z-10 flex items-center justify-center md:justify-between w-full">
          <div className="flex items-center gap-4 md:gap-8">
            <span className="font-display font-bold text-[#FFFFFF] text-3xl md:text-5xl lg:text-7xl tracking-tighter uppercase group-hover:text-[#121212] transition-colors duration-500">
              START A PROJECT
            </span>
            <div className="flex items-center justify-center transition-colors duration-500 flex-shrink-0 ml-4">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" className="text-[#FFFFFF] group-hover:text-[#121212] group-hover:translate-x-2 transition-all duration-500">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </div>
          
          <div className="hidden md:flex items-center">
            <span className="font-mono text-[#FFFFFF]/50 text-sm tracking-widest group-hover:text-[#121212]/70 transition-colors duration-500">
              AVAILABLE FOR NEW WORK
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
