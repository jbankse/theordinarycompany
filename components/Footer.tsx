'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function Footer({ hideSubmit = false }: { hideSubmit?: boolean }) {
  const [time, setTime] = React.useState<string>('');
  const [year, setYear] = React.useState<number>(2026);

  React.useEffect(() => {
    setYear(new Date().getFullYear());
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-[#121212] text-[#FFFFFF] relative overflow-hidden">
      {/* Top Section: Navigation & Submit */}
      <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] border-[#FFFFFF]/20 border-t-2 border-[#121212] xl:border-t-0">
        {/* Left Column: Navigation & Social (Moved from right) */}
        <div className="order-2 xl:order-1 grid grid-cols-1 md:grid-cols-2 border-b-2 xl:border-b-0 border-r-0 xl:border-r-2 border-[#FFFFFF]/20 bg-[#121212] border-t-2 border-[#121212] xl:border-t-0">
          <div className="p-6 lg:p-12 border-r-0 md:border-r-2 border-[#FFFFFF]/20">
            <span className="font-display font-bold text-sm md:text-base tracking-widest text-[#FFFFFF] uppercase block mb-8 lg:mb-12 opacity-80">NAVIGATION</span>
            <ul className="space-y-4 lg:space-y-6">
              {['SERVICES', 'WORK', 'CAREERS', 'BLOG', 'CONTACT'].map((item, index) => (
                <li key={item}>
                  <Link href={['BLOG', 'CAREERS'].includes(item) ? `/${item.toLowerCase()}` : `/#${item.toLowerCase()}`} className="font-display font-black text-[clamp(2.5rem,5vw,7rem)] tracking-tighter hover:text-[#FF0000] transition-colors flex items-start leading-none py-1 group">
                    <span className="text-sm md:text-base font-mono mt-2 mr-4 opacity-50 group-hover:opacity-100 transition-opacity tracking-normal">0{index + 1}</span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 lg:p-12 border-t-2 md:border-t-0 border-[#FFFFFF]/20">
            <span className="font-display font-bold text-sm md:text-base tracking-widest text-[#FFFFFF] uppercase block mb-8 lg:mb-12 opacity-80">SOCIAL</span>
            <ul className="space-y-4 lg:space-y-6">
              {['INSTAGRAM', 'LINKEDIN', 'VIMEO', 'TWITTER', 'ARE.NA'].map((item, index) => (
                <li key={item}>
                  <Link href="#" className="font-display font-black text-[clamp(2.5rem,5vw,7rem)] tracking-tighter hover:text-[#FF0000] transition-colors flex items-start leading-none py-1 group">
                    <span className="text-sm md:text-base font-mono mt-2 mr-4 opacity-50 group-hover:opacity-100 transition-opacity tracking-normal">0{index + 1}</span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Extended SUBMIT_REQUEST Section */}
        {!hideSubmit ? (
          <div className="order-1 xl:order-2 bg-[#F5F5F5] flex flex-col justify-center p-8 lg:p-24 border-l-0 xl:border-l-2 border-[#121212]">
            <button 
              form="contact-form"
              type="submit"
              className="w-full py-8 lg:py-12 bg-[#FF0000] text-[#121212] font-display font-black text-3xl lg:text-5xl tracking-tighter hover:bg-[#121212] hover:text-[#FFFFFF] transition-colors duration-300 uppercase leading-none"
            >
              SUBMIT
            </button>
          </div>
        ) : (
          <div className="order-1 xl:order-2 bg-[#121212] flex flex-col justify-center gap-12 p-8 lg:p-24 border-l-0 xl:border-l-2 border-[#121212] relative overflow-hidden group">
            <div className="absolute inset-0 bg-[#FF0000] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
            
            <div className="relative z-10">
              <span className="font-display font-bold text-sm md:text-base tracking-widest text-[#FFFFFF] group-hover:text-[#121212] uppercase block mb-6 opacity-80 transition-colors duration-500">
                STAY UPDATED
              </span>
              <h3 className="font-display font-black text-[clamp(3.5rem,6vw,7rem)] tracking-tighter text-[#FFFFFF] group-hover:text-[#121212] uppercase leading-none transition-colors duration-500">
                JOIN THE<br />NETWORK
              </h3>
            </div>

            <form className="relative z-10 flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="font-display font-bold text-xs tracking-widest text-[#FFFFFF] group-hover:text-[#121212] uppercase transition-colors duration-500 block mb-4">EMAIL ADDRESS</label>
                <input 
                  type="email" 
                  placeholder="ENTER EMAIL ADDRESS"
                  className="w-full bg-transparent border-[3px] border-[#FFFFFF] group-hover:border-[#121212] p-4 font-display font-bold text-lg md:text-xl text-[#FFFFFF] group-hover:text-[#121212] placeholder:text-[#FFFFFF]/40 group-hover:placeholder:text-[#121212]/40 focus:bg-[#FFFFFF] focus:text-[#121212] focus:placeholder:text-[#121212]/40 outline-none transition-colors duration-500"
                  required
                />
              </div>
              <button 
                type="submit"
                className="w-full py-6 lg:py-8 bg-[#FFFFFF] text-[#121212] font-display font-black text-2xl lg:text-3xl tracking-tighter border-[3px] border-[#FFFFFF] group-hover:border-[#121212] hover:!bg-[#121212] hover:!text-[#FFFFFF] transition-all duration-300 uppercase leading-none text-center"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Middle Section: Hardware Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-t-2 border-b-2 border-[#FFFFFF]/20 text-[10px] font-mono tracking-widest uppercase bg-[#121212]">
        <div className="p-6 border-b-2 md:border-b-0 md:border-r-2 border-[#FFFFFF]/20 flex justify-between items-center">
          <span className="opacity-40">LOCATION</span>
          <span>NEW_YORK // NY</span>
        </div>
        <div className="p-6 border-b-2 md:border-b-0 md:border-r-2 border-[#FFFFFF]/20 flex justify-between items-center">
          <span className="opacity-40">STATUS</span>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#0000FF] animate-pulse" />
            <span>SYSTEM_ONLINE</span>
          </div>
        </div>
        <div className="p-6 flex justify-between items-center">
          <span className="opacity-40">TIME</span>
          <span>{time || '--:--'}_EST</span>
        </div>
      </div>

      {/* Bottom Section: Massive Brand */}
      <div className="relative pt-8 pb-6 lg:pt-16 lg:pb-12 px-6 lg:px-12 flex flex-col overflow-hidden bg-[#121212]">
        <motion.div 
          initial={{ y: "20%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-left w-fit mb-8 lg:mb-16"
        >
          <Link href="/" className="inline-block w-fit group">
            <h1 className="font-display font-black text-[14vw] md:text-[19vw] leading-[0.75] tracking-tighter uppercase text-[#FF0000] relative">
              ORDINARY
            </h1>
          </Link>
        </motion.div>
        
        <div className="h-px w-full bg-[#FFFFFF]/20 mb-6 lg:mb-8" />
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-0 font-display font-bold text-[10px] lg:text-[12px] tracking-widest uppercase text-[#FFFFFF]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:gap-8">
            <p>© {year} THE ORDINARY COMPANY</p>
            <div className="flex flex-wrap items-center gap-4 lg:gap-8 opacity-60">
              <Link href="/terms" className="hover:text-[#FF0000] hover:opacity-100 transition-all">TERMS OF SERVICE</Link>
              <Link href="/privacy" className="hover:text-[#FF0000] hover:opacity-100 transition-all">PRIVACY POLICY</Link>
            </div>
          </div>
          <p className="opacity-60 lg:opacity-100">MAKING THE EXTRAORDINARY—ORDINARY.</p>
        </div>
      </div>

      {/* Background Grid Accent */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[linear-gradient(to_right,#FFFFFF12_1px,transparent_1px),linear-gradient(to_bottom,#FFFFFF12_1px,transparent_1px)] bg-[size:40px_40px]" />
    </footer>
  );
}
