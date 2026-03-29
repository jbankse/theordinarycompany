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
    <footer className="bg-[#121212] text-[#FFFFFF] relative overflow-hidden">
      {/* Top Section: Navigation & Submit */}
      <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] border-[#FFFFFF]/20 border-t-2 border-[#121212] xl:border-t-0">
        {/* Left Column: Navigation & Social (Moved from right) */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-b-2 xl:border-b-0 border-r-0 xl:border-r-2 border-[#FFFFFF]/20 bg-[#121212] border-t-2 border-[#121212] xl:border-t-0">
          <div className="p-6 lg:p-12 border-r-0 md:border-r-2 border-[#FFFFFF]/20">
            <span className="font-display font-bold text-[10px] tracking-widest text-[#FFFFFF] uppercase block mb-8 lg:mb-12 opacity-80">NAVIGATION</span>
            <ul className="space-y-4 lg:space-y-6">
              {['SERVICES', 'WORK', 'CAREERS', 'BLOG', 'CONTACT'].map((item) => (
                <li key={item}>
                  <Link href={['BLOG', 'CAREERS'].includes(item) ? `/${item.toLowerCase()}` : `/#${item.toLowerCase()}`} className="font-display font-black text-7xl xl:text-8xl tracking-tighter hover:text-[#FF0000] transition-colors block leading-none py-1">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 lg:p-12 border-t-2 md:border-t-0 border-[#FFFFFF]/20">
            <span className="font-display font-bold text-[10px] tracking-widest text-[#FFFFFF] uppercase block mb-8 lg:mb-12 opacity-80">SOCIAL</span>
            <ul className="space-y-4 lg:space-y-6">
              {['INSTAGRAM', 'LINKEDIN', 'VIMEO', 'TWITTER', 'ARE.NA'].map((item) => (
                <li key={item}>
                  <Link href="#" className="font-display font-black text-7xl xl:text-8xl tracking-tighter hover:text-[#FF0000] transition-colors block leading-none py-1">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Extended SUBMIT_REQUEST Section */}
        <div className="bg-[#F5F5F5] flex flex-col justify-center p-8 lg:p-24 border-l-2 border-[#121212]">
          <button 
            form="contact-form"
            type="submit"
            className="w-full py-8 lg:py-12 bg-[#121212] text-[#FFFFFF] font-display font-black text-3xl lg:text-5xl tracking-tighter border-[3px] border-[#121212] hover:bg-[#FF0000] hover:text-[#FFFFFF] transition-colors duration-300 uppercase leading-none"
          >
            SUBMIT DATA
          </button>
        </div>
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
      <div className="relative pt-8 pb-16 lg:pt-16 lg:pb-32 px-6 overflow-hidden bg-[#121212]">
        <motion.div 
          initial={{ y: "20%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-left w-fit"
        >
          <Link href="/" className="inline-block w-fit">
            <h1 className="font-display font-black text-[19vw] leading-[0.75] tracking-tighter uppercase text-[#FF0000]">
              ORDINARY
            </h1>
          </Link>
        </motion.div>
        
        <div className="absolute bottom-24 left-6 right-6 lg:left-12 lg:right-12 h-px bg-[#FFFFFF]/20" />
        
        <div className="absolute bottom-6 left-6 right-6 lg:bottom-12 lg:left-12 lg:right-12 flex flex-col md:flex-row justify-between items-center md:items-end gap-4 md:gap-0 font-display font-bold text-[8px] md:text-[10px] tracking-widest uppercase text-[#FFFFFF]">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p>© {year} THE ORDINARY COMPANY</p>
            <div className="flex items-center gap-4 md:gap-8 opacity-60">
              <Link href="/terms" className="hover:text-[#FF0000] hover:opacity-100 transition-all">TERMS OF SERVICE</Link>
              <Link href="/privacy" className="hover:text-[#FF0000] hover:opacity-100 transition-all">PRIVACY POLICY</Link>
            </div>
          </div>
          <p>MAKING THE EXTRAORDINARY—ORDINARY.</p>
        </div>
      </div>

      {/* Background Grid Accent */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[linear-gradient(to_right,#FFFFFF12_1px,transparent_1px),linear-gradient(to_bottom,#FFFFFF12_1px,transparent_1px)] bg-[size:40px_40px]" />
    </footer>
  );
}
