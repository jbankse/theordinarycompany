'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function Footer() {
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
    <footer className="bg-[#1a1a1f] text-[#FFFFFF] relative overflow-hidden">
      {/* Top Section: Navigation & Submit */}
      <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] border-[#FFFFFF]/10 border-t-2 border-[#1a1a1f] xl:border-t-0">
        {/* Left Column: Navigation & Social (Moved from right) */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-b-2 xl:border-b-0 border-r-0 xl:border-r-2 border-[#FFFFFF]/10 bg-[#1a1a1f] border-t-2 border-[#1a1a1f] xl:border-t-0">
          <div className="p-6 lg:p-12 border-r-0 md:border-r-2 border-[#FFFFFF]/10">
            <span className="font-display text-[10px] tracking-[0.4em] text-[#00FF00] uppercase block mb-8 lg:mb-12 opacity-50">NAVIGATION</span>
            <ul className="space-y-4 lg:space-y-6">
              {['SERVICES', 'WORK', 'CAREERS', 'BLOG', 'CONTACT'].map((item) => (
                <li key={item}>
                  <Link href={['BLOG', 'CAREERS'].includes(item) ? `/${item.toLowerCase()}` : `/#${item.toLowerCase()}`} className="font-display text-6xl xl:text-7xl tracking-widest hover:text-[#00FF00] transition-colors block leading-none py-1">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 lg:p-12 border-t-2 md:border-t-0 border-[#FFFFFF]/10">
            <span className="font-display text-[10px] tracking-[0.4em] text-[#00FF00] uppercase block mb-8 lg:mb-12 opacity-50">SOCIAL</span>
            <ul className="space-y-4 lg:space-y-6">
              {['INSTAGRAM', 'LINKEDIN', 'VIMEO', 'TWITTER', 'ARE.NA'].map((item) => (
                <li key={item}>
                  <Link href="#" className="font-display text-6xl xl:text-7xl tracking-widest hover:text-[#00FF00] transition-colors block leading-none py-1">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Extended SUBMIT_REQUEST Section */}
        <div className="bg-[#00FF00] flex flex-col justify-center p-8 lg:p-24">
          <button 
            form="contact-form"
            type="submit"
            className="w-full py-8 lg:py-12 bg-[#1a1a1f] text-[#FFFFFF] font-display text-3xl lg:text-6xl tracking-widest hover:bg-[#FFFFFF] hover:text-[#1a1a1f] transition-colors duration-300 uppercase leading-none"
          >
            SUBMIT_REQUEST
          </button>
          <p className="mt-8 font-mono text-[10px] tracking-[0.2em] text-[#1a1a1f]/60 text-center uppercase font-bold">
            SYSTEM_READY // CLICK_TO_INITIALIZE_TRANSFER
          </p>
        </div>
      </div>

      {/* Middle Section: Hardware Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-t-2 border-b-2 border-[#FFFFFF]/10 text-[10px] font-mono tracking-widest uppercase bg-[#1a1a1f]">
        <div className="p-6 border-b-2 md:border-b-0 md:border-r-2 border-[#FFFFFF]/10 flex justify-between items-center">
          <span className="opacity-40">LOCATION</span>
          <span>LOS_ANGELES // CA</span>
        </div>
        <div className="p-6 border-b-2 md:border-b-0 md:border-r-2 border-[#FFFFFF]/10 flex justify-between items-center">
          <span className="opacity-40">STATUS</span>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00FF00] animate-pulse" />
            <span>ACCEPTING_PROJECTS</span>
          </div>
        </div>
        <div className="p-6 flex justify-between items-center">
          <span className="opacity-40">TIME</span>
          <span>{time || '--:--'}_PST</span>
        </div>
      </div>

      {/* Bottom Section: Massive Brand */}
      <div className="relative pt-8 pb-16 lg:pt-16 lg:pb-32 px-6 overflow-hidden bg-[#1a1a1f]">
        <motion.div 
          initial={{ y: "20%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-left"
        >
          <h1 className="font-display text-[22vw] leading-[0.75] tracking-tighter uppercase select-none pointer-events-none">
            ORDINARY
          </h1>
        </motion.div>
        
        <div className="absolute bottom-24 left-6 right-6 lg:left-12 lg:right-12 h-px bg-[#FFFFFF]/10" />
        
        <div className="absolute bottom-6 left-6 right-6 lg:bottom-12 lg:left-12 lg:right-12 flex flex-col md:flex-row justify-between items-center md:items-end gap-2 md:gap-0 font-display text-[8px] md:text-[10px] tracking-[0.3em] uppercase">
          <p className="text-[#FFFFFF]">© {year} ORDINARY_VISUAL_INFRASTRUCTURE</p>
          <p className="text-[#FFFFFF]">BUILT_BY_ORDINARY_SYSTEMS</p>
        </div>
      </div>

      {/* Background Grid Accent */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
    </footer>
  );
}
