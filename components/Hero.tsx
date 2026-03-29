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
            <span className="big-number block text-6xl lg:text-8xl">01</span>
            <h1 className="font-display text-5xl lg:text-8xl mt-4 leading-none uppercase tracking-tighter">
              VISUAL<br />INFRASTRUCTURE
            </h1>
          </motion.div>
          
          <div className="mt-12 max-w-md">
            <p className="text-xl font-medium leading-tight uppercase">
              A media and technology company developing the systems that power modern visual identities.
            </p>
          </div>
        </div>

        {/* Right: Marquee & Interaction */}
        <div className="bg-[#1a1a1f] text-[#FFFFFF] flex flex-col overflow-hidden relative">
          <div className="flex-1 flex items-center justify-center p-8 relative overflow-hidden">
            <VisualSystems />
          </div>

          {/* Marquee */}
          <div className="h-24 bg-[#00FF00] text-[#1a1a1f] flex items-center overflow-hidden z-10">
            <div className="marquee-track">
              {[...Array(10)].map((_, i) => (
                <span key={i} className="font-display text-2xl md:text-4xl mx-8 uppercase">
                  Ordinary Inc. — Visual Infrastructure™ — Managed Services — Branding — Motion —
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Rail */}
      <div className="h-16 brutal-border-b flex items-stretch">
        <div className="px-4 lg:px-8 brutal-border-l brutal-border-r brutal-border-t hidden md:flex items-center font-display text-xs hover:bg-[#00FF00] cursor-pointer transition-colors">
          SCROLL_DOWN
        </div>
        <div className="flex-1 flex items-center px-4 lg:px-8 brutal-border-t font-display text-xs tracking-widest overflow-hidden">
          <div className="marquee-track" style={{ animationDuration: '40s' }}>
            {[...Array(20)].map((_, i) => (
              <span key={i} className="mx-4">AVAILABLE FOR NEW PROJECTS //</span>
            ))}
          </div>
        </div>
        <div className="px-4 lg:px-8 brutal-border-l brutal-border-t hidden md:flex items-center font-display text-xs hover:bg-[#00FF00] cursor-pointer transition-colors">
          SCROLL_DOWN
        </div>
      </div>
    </section>
  );
}
