'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const articles = [
  {
    id: '01',
    title: 'FOUNDING STATEMENTS',
    category: 'COMPANY',
    image: 'https://picsum.photos/seed/ordinary/1200/800',
    href: '/blog/founding-statements',
    author: 'JOSHUA BANKS',
    readTime: '4 MIN READ',
    date: 'APR 05, 2026'
  },
  {
    id: '02',
    title: 'WHAT IS VISUAL INFRASTRUCTURE?',
    category: 'THOUGHT LEADERSHIP',
    image: 'https://picsum.photos/seed/tech/1200/800',
    href: '/blog/what-is-visual-infrastructure',
    author: 'JOSHUA BANKS',
    readTime: '6 MIN READ',
    date: 'APR 05, 2026'
  },
];

export default function Work() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const trigger = triggerRef.current;
    if (!section || !trigger) return;

    const totalWidth = section.scrollWidth;
    const viewportWidth = window.innerWidth;
    const scrollAmount = totalWidth - viewportWidth;

    if (scrollAmount <= 0) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(section, 
        { x: -scrollAmount },
        {
          x: 0,
          ease: "none",
          scrollTrigger: {
            trigger: trigger,
            start: "top 64px", // Trigger exactly below the navbar (64px)
            end: () => `+=${viewportWidth * 2}`, // Extend scroll distance for a smoother feel
            scrub: 0.5,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" className="bg-[#FFFFFF] overflow-hidden text-[#121212] brutal-border-b border-[#121212]">
      <div ref={triggerRef} className="relative h-[calc(100dvh-64px)]">
        <div 
          ref={sectionRef}
          className="flex flex-nowrap h-full border-[#121212] box-border"
        >
          {articles.map((article, i) => (
            <motion.div 
              key={article.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex-shrink-0 w-full md:w-[85vw] h-full group flex flex-col brutal-border-r border-[#121212] last:border-r-0 bg-[#FFFFFF]"
            >
              {/* Image Section */}
              <Link href={article.href} className="relative flex-1 overflow-hidden brutal-border-b border-[#121212] bg-[#FF0000] block cursor-pointer group/image">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover opacity-80 mix-blend-multiply grayscale group-hover/image:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </Link>
              
              {/* Title Section */}
              <div className="flex-shrink-0 min-h-[30vh] md:min-h-[35vh] p-6 md:p-12 flex flex-col justify-between bg-[#FFFFFF] group-hover:bg-[#F5F5F5] transition-colors duration-300">
                <div className="flex flex-col h-full justify-between">
                  <Link href={article.href} className="block transition-colors">
                    <h3 className="font-display font-black text-[clamp(2rem,4.5vw,5rem)] text-inherit uppercase tracking-tighter leading-none max-w-4xl">
                      {article.title}
                    </h3>
                  </Link>
                  
                  <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6 mt-8">
                    <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm font-mono tracking-widest text-[#121212]/60 uppercase">
                      <span className="text-[#FF0000] font-bold">{article.category}</span>
                      <span>//</span>
                      <span>{article.author}</span>
                      <span className="hidden md:inline">//</span>
                      <span>{article.readTime}</span>
                      <span className="hidden md:inline">//</span>
                      <span>{article.date}</span>
                    </div>

                    <Link href={article.href} className="group/btn flex items-center gap-2 w-fit flex-shrink-0 cursor-pointer">
                      <span className="text-[#FF0000] text-sm md:text-base font-display font-bold tracking-widest uppercase group-hover/btn:text-[#121212] transition-colors">
                        READ ARTICLE
                      </span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" className="text-[#FF0000] group-hover/btn:text-[#121212] group-hover/btn:translate-x-1 transition-all">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
