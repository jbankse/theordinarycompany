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
      <main className="relative min-h-[100dvh] bg-[#FFFFFF] text-[#121212] overflow-x-hidden">
        <Navbar theme="light" />
        
        {/* Extreme Typographical Hero */}
        <section className="pt-40 lg:pt-64 pb-24 lg:pb-32 px-6 lg:px-16 brutal-border-b border-[#121212] relative overflow-hidden bg-[#FFFFFF]">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 md:gap-0 z-10 relative"
          >
            <div>
              <span className="font-display font-bold text-[#FF0000] tracking-widest text-sm md:text-base uppercase mb-8 block">
                CREATIVE_STUDIOS_NETWORK
              </span>
              <h1 className="font-display font-black text-5xl md:text-7xl lg:text-9xl uppercase tracking-tighter leading-none break-words max-w-5xl text-[#121212]">
                COME PLAY<br />WITH US
              </h1>
            </div>
            <div className="md:text-right font-mono text-[10px] tracking-widest text-[#121212]/60 uppercase max-w-[200px] font-bold">
              <p>DOOR_IS_OPEN // SAY_HELLO // NEW_YORK_NY</p>
            </div>
          </motion.div>
          
          {/* Background Grid Accent */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[linear-gradient(to_right,#121212_1px,transparent_1px),linear-gradient(to_bottom,#121212_1px,transparent_1px)] bg-[size:100px_100px]" />
        </section>

        {/* Form Terminal Section */}
        <section className="bg-[#FFFFFF]">
          <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr]">
            {/* Left: Tactical Instructions */}
            <div className="p-6 lg:p-16 bg-[#F5F5F5] brutal-border-r border-[#121212] flex flex-col justify-between">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                <span className="big-number block">03</span>
                <h2 className="font-display font-black text-5xl lg:text-8xl mt-4 leading-none uppercase tracking-tighter text-[#121212]">
                  SHARE<br />YOUR MAGIC
                </h2>
              </motion.div>
              
              <div className="mt-12">
                <p className="text-xl font-medium uppercase leading-tight max-w-md text-[#121212]">
                  We love looking at creative work, portfolios, and whatever art you're playing with right now. Drop your latest work below.
                </p>
              </div>
            </div>

            {/* Right: Data Capture Terminal */}
            <div className="p-6 lg:p-16 bg-[#F5F5F5] text-[#121212]">
              <form id="contact-form" className="space-y-8 flex flex-col justify-center h-full" onSubmit={(e) => e.preventDefault()}>
                <div className="mb-8 lg:mb-12">
                  <h3 className="font-display font-black text-3xl md:text-5xl lg:text-6xl uppercase tracking-tighter leading-none text-[#121212] max-w-2xl">
                    YOUR DETAILS
                  </h3>
                </div>

                <div className="space-y-2">
                  <label className="font-display font-bold text-xs tracking-widest text-[#121212] uppercase">YOUR NAME</label>
                  <input 
                    type="text" 
                    placeholder="ENTER YOUR NAME"
                    className="w-full bg-transparent border-[3px] border-[#121212] p-3 md:p-4 font-display font-bold text-lg md:text-xl focus:border-[#121212] focus:bg-[#FFFFFF] outline-none transition-all placeholder:text-[#121212]/40"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-display font-bold text-xs tracking-widest text-[#121212] uppercase">EMAIL ADDRESS</label>
                  <input 
                    type="email" 
                    placeholder="YOUR@EMAIL.COM"
                    className="w-full bg-transparent border-[3px] border-[#121212] p-3 md:p-4 font-display font-bold text-lg md:text-xl focus:border-[#121212] focus:bg-[#FFFFFF] outline-none transition-all placeholder:text-[#121212]/40"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-display font-bold text-xs tracking-widest text-[#121212] uppercase">PORTFOLIO LINK</label>
                  <input 
                    type="url" 
                    placeholder="HTTPS://YOUR-PORTFOLIO.COM"
                    className="w-full bg-transparent border-[3px] border-[#121212] p-3 md:p-4 font-display font-bold text-lg md:text-xl focus:border-[#121212] focus:bg-[#FFFFFF] outline-none transition-all placeholder:text-[#121212]/40"
                  />
                </div>

                {/* Brutalist File Upload */}
                <div className="space-y-2 pt-4">
                  <label className="font-display font-bold text-xs tracking-widest text-[#121212] uppercase">PORTFOLIO // PDF</label>
                  <div 
                    className="w-full bg-[#121212] border-[3px] border-[#121212] hover:bg-[#FF0000] hover:border-[#121212] text-[#FFFFFF] hover:text-[#121212] transition-colors duration-300 cursor-pointer"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <div className="p-4 md:p-6 flex flex-col md:flex-row items-center justify-between pointer-events-none">
                      <span className="font-display font-black text-xl md:text-2xl tracking-tighter uppercase truncate w-full md:w-auto text-center md:text-left">
                        {fileName ? fileName : "[SELECT PORTFOLIO]"}
                      </span>
                      <span className="font-display font-bold text-sm tracking-widest mt-2 md:mt-0">
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
                
                {/* Submit button handled in Footer via form="contact-form" */}
              </form>
            </div>
          </div>
        </section>

        <Footer />
        
        {/* Global Noise Overlay */}
        <div className="fixed inset-0 z-[100] pointer-events-none opacity-[0.05] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </main>
    </SmoothScroll>
  );
}
