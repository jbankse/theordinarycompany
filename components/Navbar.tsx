'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';

interface NavbarProps {
  theme?: 'light' | 'dark';
}

export default function Navbar({ theme = 'light' }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isDark = theme === 'dark';
  const navBg = isDark ? 'bg-[#121212]' : 'bg-[#FFFFFF]';
  const borderColor = isDark ? 'border-[#FFFFFF]/20' : 'border-[#121212]';
  const textColor = isDark ? 'text-[#FFFFFF]' : 'text-[#121212]';

  const navLinks = [
    { name: 'SERVICES', href: '/#services' },
    { name: 'WORK', href: '/#work' },
    { name: 'CAREERS', href: '/careers' },
    { name: 'BLOG', href: '/blog' },
    { name: 'CONTACT', href: '/#contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 ${navBg} box-border transition-colors duration-300`}>
        <div className="flex items-stretch h-16 w-full box-border">
          {/* Mobile Menu Toggle (Moved to Left) */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`flex lg:hidden items-center justify-center bg-[#FF0000] text-[#FFFFFF] hover:bg-[#121212] transition-colors duration-200 w-20 relative`}
            aria-label="Toggle Menu"
          >
            <div className="relative w-5 h-5 flex items-center justify-center">
              <span className={`absolute h-0.5 w-5 bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`} />
              <span className={`absolute h-0.5 bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'w-0 opacity-0' : 'w-5 opacity-100'}`} />
              <span className={`absolute h-0.5 w-5 bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`} />
            </div>
          </button>

          {/* Logo */}
          <Link 
            href="/" 
            className={`flex items-center px-4 md:px-6 ${isDark ? 'bg-[#FF0000] hover:bg-[#FFFFFF]' : 'bg-[#121212] hover:bg-[#FF0000] text-[#FFFFFF]'} hover:text-[#121212] transition-colors duration-200`}
            style={{ color: isDark ? '#121212' : undefined }}
          >
            <span className="font-display font-black text-lg md:text-xl tracking-tighter uppercase">THE ORDINARY COMPANY</span>
          </Link>

          {/* Spacer to push links/buttons to the right */}
          <div className={`flex flex-1`} />

          {/* Desktop Links */}
          <div className="hidden lg:flex items-stretch">
            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center px-6 xl:px-8 font-display font-semibold text-base tracking-widest border-y-2 border-l-2 ${borderColor} ${textColor} hover:bg-[#FF0000] hover:text-[#121212] transition-colors duration-200`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed inset-0 z-40 ${isDark ? 'bg-[#121212]' : 'bg-[#121212]'} pt-16 flex flex-col`}
          >
            <div className="flex-1 flex flex-col p-8">
              <div className="flex flex-col gap-6 mt-12">
                <span className="font-display font-bold text-sm md:text-base tracking-widest text-[#FFFFFF] uppercase block mb-2 opacity-80">
                  NAVIGATION
                </span>
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="font-display font-black text-4xl md:text-6xl text-[#FFFFFF] hover:text-[#FF0000] transition-colors flex items-start tracking-tighter border-b border-[#FFFFFF]/20 pb-4 group"
                    >
                      <span className="text-sm md:text-base font-mono mt-2 md:mt-3 mr-4 opacity-50 group-hover:opacity-100 transition-opacity tracking-normal">0{i + 1}</span>
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="mt-auto pt-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Link
                  href="/#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center w-full py-6 text-center bg-[#FF0000] text-[#121212] font-display font-black text-2xl md:text-3xl tracking-widest hover:bg-[#FFFFFF] hover:text-[#121212] transition-colors duration-200 group"
                >
                  START
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
