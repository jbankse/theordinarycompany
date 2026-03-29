'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CareersPage() {
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <SmoothScroll>
      <main className="relative min-h-screen bg-[#1C1C1C] text-[#FFF9F2] overflow-x-hidden selection:bg-[#8B5CF6] selection:text-[#FFF9F2]">
        <Navbar theme="dark" />
        
        {/* Extreme Typographical Hero */}
        <section className="pt-40 lg:pt-64 pb-24 lg:pb-32 px-6 lg:px-12 brutal-border-b border-[#FFF9F2]/10 relative overflow-hidden">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 md:gap-0 z-10 relative"
          >
            <div>
              <span className="font-display text-[#8B5CF6] tracking-widest text-sm md:text-base uppercase mb-8 block">
                CREATIVE_STUDIOS_NETWORK
              </span>
              <h1 className="font-display text-5xl md:text-7xl lg:text-9xl uppercase tracking-tighter leading-none break-words max-w-5xl">
                COME PLAY<br />WITH US
              </h1>
            </div>
            <div className="md:text-right font-mono text-[10px] tracking-widest text-[#FFF9F2]/60 uppercase max-w-[200px]">
              <p>DOOR_IS_OPEN // SAY_HELLO // NEW_YORK_NY</p>
            </div>
          </motion.div>
          
          {/* Background Grid Accent */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[linear-gradient(to_right,#8B5CF6_1px,transparent_1px),linear-gradient(to_bottom,#8B5CF6_1px,transparent_1px)] bg-[size:100px_100px]" />
        </section>

        {/* Form Terminal Section */}
        <section className="bg-[#1C1C1C]">
          <div className="grid grid-cols-1 xl:grid-cols-[1.5fr_1fr]">
            {/* Left: Tactical Instructions */}
            <div className="p-6 lg:p-16 border-b-2 xl:border-b-0 border-r-0 xl:border-r-2 border-[#FFF9F2]/10 flex flex-col justify-center">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-4xl lg:text-7xl uppercase tracking-tight leading-none mb-12">
                  SHARE<br />YOUR MAGIC
                </h2>
                <div className="space-y-6 max-w-md font-medium text-lg lg:text-xl text-[#FFF9F2]/80">
                  <p>
                    We love looking at creative work, portfolios, and whatever art you're playing with right now.
                  </p>
                  <p className="text-[#8B5CF6]">
                    Drop your latest work below.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right: Data Capture Terminal */}
            <div className="p-6 lg:p-16 bg-[#8B5CF6] text-[#1C1C1C] flex flex-col justify-center h-full">
              <form className="space-y-8 max-w-xl mx-auto xl:mx-0 w-full" onSubmit={(e) => e.preventDefault()}>
                <div className="mb-4 lg:mb-12">
                  <h3 className="font-display text-3xl md:text-5xl uppercase tracking-tight leading-none">
                    YOUR DETAILS
                  </h3>
                </div>

                <div className="space-y-2">
                  <label className="font-display text-xs tracking-widest uppercase font-bold">YOUR NAME</label>
                  <input 
                    type="text" 
                    placeholder="ENTER YOUR NAME"
                    className="w-full bg-transparent brutal-border border-[#1C1C1C] p-3 md:p-4 font-display text-lg md:text-xl focus:border-[#1C1C1C] focus:text-[#1C1C1C] outline-none transition-all placeholder:text-[#1C1C1C]/40"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-display text-xs tracking-widest uppercase font-bold">EMAIL ADDRESS</label>
                  <input 
                    type="email" 
                    placeholder="YOUR@EMAIL.COM"
                    className="w-full bg-transparent brutal-border border-[#1C1C1C] p-3 md:p-4 font-display text-lg md:text-xl focus:border-[#1C1C1C] focus:text-[#1C1C1C] outline-none transition-all placeholder:text-[#1C1C1C]/40"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-display text-xs tracking-widest uppercase font-bold">PORTFOLIO LINK</label>
                  <input 
                    type="url" 
                    placeholder="HTTPS://YOUR-PORTFOLIO.COM"
                    className="w-full bg-transparent brutal-border border-[#1C1C1C] p-3 md:p-4 font-display text-lg md:text-xl focus:border-[#1C1C1C] focus:text-[#1C1C1C] outline-none transition-all placeholder:text-[#1C1C1C]/40"
                  />
                </div>

                {/* Brutalist File Upload */}
                <div className="space-y-2 pt-4">
                  <label className="font-display text-xs tracking-widest uppercase font-bold">PORTFOLIO // PDF</label>
                  <div 
                    className="w-full bg-[#1C1C1C] brutal-border border-[#1C1C1C] hover:bg-[#FFF9F2] hover:text-[#1C1C1C] text-[#FFF9F2] transition-colors duration-300 cursor-pointer"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <div className="p-4 md:p-6 flex flex-col md:flex-row items-center justify-between pointer-events-none">
                      <span className="font-display text-xl md:text-2xl tracking-tighter uppercase truncate w-full md:w-auto text-center md:text-left">
                        {fileName ? fileName : "[SELECT PORTFOLIO]"}
                      </span>
                      <span className="font-display text-sm tracking-widest text-[#8B5CF6] mt-2 md:mt-0">
                        {fileName ? 'READY TO SEND' : 'BROWSE FILES'}
                      </span>
                    </div>
                  </div>
                  <input 
                    type="file" 
                    ref={fileInputRef}
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden" 
                  />
                </div>
              </form>
            </div>
          </div>
        </section>
        
        {/* Full Width Submit Area */}
        <section className="bg-[#1C1C1C] border-t-2 border-[#FFF9F2]/10">
          <button 
            type="submit"
            className="w-full py-16 lg:py-24 bg-[#1C1C1C] text-[#FFF9F2] font-display text-4xl md:text-6xl lg:text-8xl tracking-tight hover:bg-[#8B5CF6] hover:text-[#1C1C1C] transition-colors duration-300 uppercase leading-none group"
          >
            <span className="inline-block whitespace-normal break-words group-hover:-translate-y-2 transition-transform duration-300">
              SEND<br className="md:hidden" /> APPLICATION
            </span>
          </button>
        </section>

        <Footer />
        
        {/* Global Noise Overlay */}
        <div className="fixed inset-0 z-[100] pointer-events-none opacity-[0.05] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </main>
    </SmoothScroll>
  );
}
