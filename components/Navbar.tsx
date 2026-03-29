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
  const navBg = isDark ? 'bg-[#000000]' : 'bg-[#FFFFFF]';
  const borderColor = isDark ? 'border-[#FFFFFF]/20' : 'border-[#000000]';
  const textColor = isDark ? 'text-[#FFFFFF]' : 'text-[#000000]';

  const navLinks = [
    { name: 'SERVICES', href: '/#services' },
    { name: 'WORK', href: '/#work' },
    { name: 'CAREERS', href: '/careers' },
    { name: 'BLOG', href: '/blog' },
    { name: 'CONTACT', href: '/#contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 ${navBg} border-b-2 border-t-2 ${borderColor} box-border transition-colors duration-300`}>
        <div className="flex items-stretch h-16 w-full box-border">
          {/* Logo */}
          <Link 
            href="/" 
            className={`flex items-center px-4 md:px-6 ${isDark ? 'bg-[#FF0000] hover:bg-[#FFFFFF]' : 'bg-[#000000] hover:bg-[#FF0000] text-[#FFFFFF]'} hover:text-[#000000] transition-colors duration-200 border-l-2 ${borderColor}`}
            style={{ color: isDark ? '#000000' : undefined }}
          >
            <span className="font-display font-black text-lg md:text-xl tracking-tighter uppercase">ORDINARY</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-stretch flex-1">
            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center px-6 xl:px-8 font-display font-bold text-sm tracking-widest border-r-2 ${borderColor} ${textColor} hover:bg-[#FF0000] hover:text-[#FFFFFF] transition-colors duration-200 ${i === 0 ? `border-l-2 ${borderColor}` : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className={`flex lg:hidden flex-1 border-l-2 ${borderColor}`} />

          {/* Desktop CTA */}
          <Link 
            href="/#contact"
            className={`hidden lg:flex items-center px-8 bg-[#FF0000] text-[#FFFFFF] font-display font-bold text-sm tracking-widest border-l-2 ${borderColor} hover:bg-[#000000] transition-colors duration-200`}
          >
            START_PROJECT
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`flex lg:hidden items-center justify-center px-6 bg-[#FF0000] text-[#FFFFFF] font-display font-bold text-sm tracking-widest border-l-2 ${borderColor} hover:bg-[#000000] transition-colors duration-200 w-24`}
          >
            {isMenuOpen ? 'CLOSE' : 'MENU'}
          </button>
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
            className={`fixed inset-0 z-40 ${isDark ? 'bg-[#000000]' : 'bg-[#000000]'} pt-16 flex flex-col`}
          >
            <div className="flex-1 flex flex-col p-8">
              <div className="flex flex-col gap-6 mt-12">
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
                      className="font-display font-black text-4xl md:text-6xl text-[#FFFFFF] hover:text-[#FF0000] transition-colors block uppercase tracking-tighter border-b border-[#FFFFFF]/20 pb-4"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="mt-auto"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Link
                  href="/#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full py-6 text-center bg-[#FF0000] text-[#FFFFFF] font-display font-black text-2xl md:text-3xl tracking-widest hover:bg-[#FFFFFF] hover:text-[#000000] transition-colors duration-200"
                >
                  START_PROJECT
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
