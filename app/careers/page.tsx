'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import SmoothScroll from '@/components/SmoothScroll';
import SimpleNavbar from '@/components/SimpleNavbar';
import SimpleFooter from '@/components/SimpleFooter';

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
      <main className="relative min-h-[100dvh] bg-[#FFFFFF] text-[#121212] clip-path-none pt-24 lg:pt-32">
        <SimpleNavbar />
        
        {/* Header Section */}
        <section className="w-full bg-[#FFFFFF]">
          <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24 pt-16 pb-16 border-b border-[#121212]/10">
            <div className="max-w-4xl mx-auto">
              <span className="font-mono font-bold text-[#FF0000] tracking-widest text-xs uppercase mb-8 block">
                CREATIVE_STUDIOS_NETWORK
              </span>
              <h1 className="font-display font-black text-[clamp(3rem,5vw,5rem)] leading-[1.1] uppercase tracking-tight mb-8 text-[#121212]">
                COME PLAY<br />WITH US
              </h1>
              <p className="text-lg lg:text-xl font-medium leading-relaxed max-w-3xl opacity-80 text-[#121212]">
                DOOR_IS_OPEN // SAY_HELLO // NEW_YORK_NY
              </p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="w-full bg-[#FFFFFF]">
          <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24 py-16">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Left: Instructions */}
              <div className="flex flex-col justify-start">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <span className="font-mono font-bold text-xs tracking-widest uppercase opacity-50 mb-4 block text-[#121212]">
                    03 // SHARE YOUR MAGIC
                  </span>
                  <h2 className="font-display font-black text-4xl lg:text-5xl leading-[1.1] uppercase tracking-tight text-[#121212] mb-6">
                    YOUR<br />DETAILS
                  </h2>
                </motion.div>
                
                <div className="mt-4">
                  <p className="text-lg font-sans leading-relaxed text-[#121212]/80">
                    We love looking at creative work, portfolios, and whatever art you're playing with right now. Drop your latest work below.
                  </p>
                </div>
              </div>

              {/* Right: Form */}
              <div className="text-[#121212]">
                <form id="contact-form" className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label className="font-sans font-bold text-xs tracking-widest text-[#121212]/50 uppercase">YOUR NAME</label>
                    <input 
                      type="text" 
                      placeholder="ENTER YOUR NAME"
                      className="w-full bg-transparent border-b border-[#121212]/20 py-3 font-sans text-lg focus:border-[#121212] outline-none transition-all placeholder:text-[#121212]/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-sans font-bold text-xs tracking-widest text-[#121212]/50 uppercase">EMAIL ADDRESS</label>
                    <input 
                      type="email" 
                      placeholder="YOUR@EMAIL.COM"
                      className="w-full bg-transparent border-b border-[#121212]/20 py-3 font-sans text-lg focus:border-[#121212] outline-none transition-all placeholder:text-[#121212]/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-sans font-bold text-xs tracking-widest text-[#121212]/50 uppercase">PORTFOLIO LINK</label>
                    <input 
                      type="url" 
                      placeholder="HTTPS://YOUR-PORTFOLIO.COM"
                      className="w-full bg-transparent border-b border-[#121212]/20 py-3 font-sans text-lg focus:border-[#121212] outline-none transition-all placeholder:text-[#121212]/20"
                    />
                  </div>

                  {/* File Upload */}
                  <div className="space-y-2 pt-4">
                    <label className="font-sans font-bold text-xs tracking-widest text-[#121212]/50 uppercase">PORTFOLIO // PDF</label>
                    <div 
                      className="w-full border border-[#121212]/20 hover:border-[#121212] transition-colors duration-300 cursor-pointer rounded-sm"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <div className="p-4 flex flex-col items-start justify-between pointer-events-none">
                        <span className="font-sans text-sm text-[#121212]/60 truncate w-full">
                          {fileName ? fileName : "Select a file to upload..."}
                        </span>
                        <span className="font-sans font-bold text-xs tracking-widest mt-4 text-[#121212]">
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
                  
                  <button 
                    type="submit"
                    className="w-full py-4 bg-[#121212] text-[#FFFFFF] font-sans font-bold text-sm tracking-widest hover:bg-[#FF0000] transition-colors duration-300 uppercase mt-8 rounded-sm"
                  >
                    Submit Application
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <SimpleFooter />
        
        {/* Global Noise Overlay */}
        <div className="fixed inset-0 z-[100] pointer-events-none opacity-[0.05] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </main>
    </SmoothScroll>
  );
}
