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
      <main className="relative min-h-screen bg-[#1a1a1f] text-[#FFFFFF] overflow-x-hidden selection:bg-[#00FF00] selection:text-[#1a1a1f]">
        <Navbar theme="dark" />
        
        {/* Extreme Typographical Hero */}
        <section className="pt-40 lg:pt-64 pb-24 lg:pb-32 px-6 lg:px-12 brutal-border-b border-[#FFFFFF]/10 relative overflow-hidden">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 md:gap-0 z-10 relative"
          >
            <div>
              <span className="font-display text-[#00FF00] tracking-[0.4em] text-sm md:text-base uppercase mb-8 block">
                TALENT_ACQUISITION_PROTOCOL
              </span>
              <h1 className="font-display text-5xl md:text-7xl lg:text-9xl uppercase tracking-tighter leading-none break-words max-w-5xl">
                NOT FOR<br />EVERYONE
              </h1>
            </div>
            <div className="md:text-right font-mono text-[10px] tracking-[0.2em] text-[#FFFFFF]/60 uppercase max-w-[200px]">
              <p>SYSTEM_OPEN // ACCEPTING_DOSSIERS // LOS_ANGELES_CA</p>
            </div>
          </motion.div>
          
          {/* Background Grid Accent */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[linear-gradient(to_right,#00FF00_1px,transparent_1px),linear-gradient(to_bottom,#00FF00_1px,transparent_1px)] bg-[size:100px_100px]" />
        </section>

        {/* Form Terminal Section */}
        <section className="bg-[#1a1a1f]">
          <div className="grid grid-cols-1 xl:grid-cols-[1.5fr_1fr]">
            {/* Left: Tactical Instructions */}
            <div className="p-6 lg:p-16 border-b-2 xl:border-b-0 border-r-0 xl:border-r-2 border-[#FFFFFF]/10 flex flex-col justify-center">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-4xl lg:text-7xl uppercase tracking-tighter leading-none mb-12">
                  UPLOAD<br />YOUR_CODE
                </h2>
                <div className="space-y-6 max-w-md font-medium text-lg lg:text-xl text-[#FFFFFF]/80">
                  <p>
                    We don't do formal interviews. We review source code, architecture patterns, and design systems.
                  </p>
                  <p className="text-[#00FF00]">
                    Attach proof of work below.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right: Data Capture Terminal */}
            <div className="p-6 lg:p-16 bg-[#00FF00] text-[#1a1a1f] flex flex-col justify-center h-full">
              <form className="space-y-8 max-w-xl mx-auto xl:mx-0 w-full" onSubmit={(e) => e.preventDefault()}>
                <div className="mb-4 lg:mb-12">
                  <h3 className="font-display text-3xl md:text-5xl uppercase tracking-tighter leading-none">
                    OPERATIVE_DATA
                  </h3>
                </div>

                <div className="space-y-2">
                  <label className="font-display text-xs tracking-[0.3em] uppercase font-bold">OPERATIVE_NAME</label>
                  <input 
                    type="text" 
                    placeholder="ENTER_NAME"
                    className="w-full bg-transparent brutal-border border-[#1a1a1f] p-3 md:p-4 font-display text-lg md:text-xl focus:border-[#1a1a1f] focus:text-[#1a1a1f] outline-none transition-all placeholder:text-[#1a1a1f]/30"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-display text-xs tracking-[0.3em] uppercase font-bold">COMM_LINK</label>
                  <input 
                    type="email" 
                    placeholder="ENTER_EMAIL"
                    className="w-full bg-transparent brutal-border border-[#1a1a1f] p-3 md:p-4 font-display text-lg md:text-xl focus:border-[#1a1a1f] focus:text-[#1a1a1f] outline-none transition-all placeholder:text-[#1a1a1f]/30"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-display text-xs tracking-[0.3em] uppercase font-bold">PORTFOLIO_URI</label>
                  <input 
                    type="url" 
                    placeholder="HTTPS://GITHUB.COM/YOUR_HANDLE"
                    className="w-full bg-transparent brutal-border border-[#1a1a1f] p-3 md:p-4 font-display text-lg md:text-xl focus:border-[#1a1a1f] focus:text-[#1a1a1f] outline-none transition-all placeholder:text-[#1a1a1f]/30"
                  />
                </div>

                {/* Brutalist File Upload */}
                <div className="space-y-2 pt-4">
                  <label className="font-display text-xs tracking-[0.3em] uppercase font-bold">DOCUMENTATION // PDF</label>
                  <div 
                    className="w-full bg-[#1a1a1f] brutal-border border-[#1a1a1f] hover:bg-[#FFFFFF] hover:text-[#1a1a1f] text-[#FFFFFF] transition-colors duration-300 cursor-pointer"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <div className="p-4 md:p-6 flex flex-col md:flex-row items-center justify-between pointer-events-none">
                      <span className="font-display text-xl md:text-2xl tracking-tighter uppercase truncate w-full md:w-auto text-center md:text-left">
                        {fileName ? fileName : "[SELECT_FILE]"}
                      </span>
                      <span className="font-display text-sm tracking-widest text-[#00FF00] mt-2 md:mt-0">
                        {fileName ? 'READY_FOR_UPLOAD' : 'BROWSE_SYSTEM'}
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
        <section className="bg-[#1a1a1f] border-t-2 border-[#FFFFFF]/10">
          <button 
            type="submit"
            className="w-full py-16 lg:py-24 bg-[#1a1a1f] text-[#FFFFFF] font-display text-4xl md:text-6xl lg:text-8xl tracking-tighter hover:bg-[#00FF00] hover:text-[#1a1a1f] transition-colors duration-300 uppercase leading-none group"
          >
            <span className="inline-block whitespace-normal break-words group-hover:-translate-y-2 transition-transform duration-300">
              INITIALIZE_<br className="md:hidden" />TRANSFER
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
